const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const passport = require('passport');
const {Op} = require('passport');
const {User, Post, Image, Comment, Reference} = require('../models');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const db = require('../models');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const router = express.Router();

//새로고침시 로그인 유지
router.get('/', async (req, res, next) => { // GET /user
  try {
    console.log("req.user" +req.user);
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post
        }, {
          model: User,
          order: [['createdAt', 'DESC']],
          as: 'Followings',
          attributes: ['id', 'nickname'],
                    include:[{
                      model: Image
                    }]
        }, {
          model: User,
          order: [['createdAt', 'DESC']],
          as: 'Followers',
          attributes: ['id', 'nickname'],
                    include:[{
                      model: Image
                    }]
        },{
          model: Post,
          order: [['createdAt', 'DESC']],
          as: 'Liked',
          include: [{
            model: Image
          }]
        }, {
          model: Image
        },{
          model: Reference,
          order: [['createdAt', 'DESC']],
        }]
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
   next(error);
  }
});


//로그인 
router.post('/login', isNotLoggedIn, (req, res, next) => {

    passport.authenticate('local', (err, user, info) => {
        if(err){
            console.error(err);
           return next(err);
        }
        if(info){
            return res.status(401).send(info.reason); 
        }
        return req.login(user, async(loginErr) => { 
            if(loginErr){
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
              where : {id: user.id},
              attributes: {
                  exclude: ['password'] 
              },
              include: [{
                  model:Post,
                  order: [['createdAt', 'DESC']],
                  attributes: ['id']
              },
              {
                  model: User,
                  order: [['createdAt', 'DESC']],
                  as: 'Followings',
                  attributes: ['id', 'nickname'],
                  include:[{
                    model: Image
                  }]
              },
              {
                  model: User,
                  order: [['createdAt', 'DESC']],
                  as: 'Followers',
                  attributes: ['id', 'nickname'],
                  include:[{
                    model: Image
                  }]
              },{
                model: Post,
                as: 'Liked',
                include: [{
                  model: Image
                }]
              },{
                model: Image
              },
              {
                model: Reference,
                order: [['createdAt', 'DESC']],
              }
          ]
          });

            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
}); 
//미들웨어 확장하는 방법 적용

//이미지 저장
AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});
const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'fashionary-s3',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

//회원가입
router.post('/', isNotLoggedIn, upload.none(), async(req, res, next) => {
    try{
       const exUser = await User.findOne({
            where:{
                nickname: req.body.nickname //기존 사용자 닉네임 찾기
            }
        });
        if(exUser){
           return res.status(403).send('이미 사용 중인 닉네임 입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10); 

       const user = await User.create({
            nickname: req.body.nickname,
            password: hashedPassword
        });
        if(req.body.nickname){
          Image.create({src: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg', UserId: user.id});
        }
        
  res.status(201).send('ok'); 
    }
    catch(error){
        console.log(error);
        next(error); 
    }
});    

//로그아웃
router.post('/logout', isLoggedIn, (req, res) => {
    req.logout(() => {
        res.redirect('/');
      });
  });


//프로필 이미지 수정
router.patch('/profileImage', isLoggedIn, upload.array('profile'), async(req, res, next) => { 
    console.log("이미지 수정 파일: ", req.files);
    res.json(req.files.map((v) => v.location.replace(/\/original\//, '/thumb/')));
});


//프로필 정보 수정
router.patch('/info', isLoggedIn, upload.none('image'), async(req, res, next) => {
    try{
       const user = await User.update({
            info: req.body.info
        }, {
           where: {
            id: req.user.id
          } 
        });

        if(req.body.profile){
          console.log("게시글 수정 이미지: " + req.body.profile);
          await Image.update({src: req.body.profile},{where: {UserId: req.body.UserId}});
        }
       
        res.status(200).json({info: req.body.info});
    }
    catch(error){
        console.error(error);
        next(error);
    }
});

//팔로우
router.patch('/:userId/follow', isLoggedIn, async(req, res, next) => {
    try{
       const user = await User.findOne({where: {id: req.params.userId}});
        if(!user){
            res.status(403).send('없는 사용자를 팔로우 할 수 없습니다.');
        }
        await user.addFollowers(req.user.id);
        res.status(200).json({UserId: parseInt(req.params.userId, 10)});
    }
    catch(error){
        console.error(error);
        next(error);
    }
});

//언팔로우
router.delete('/:userId/unfollow', isLoggedIn, async(req, res, next) => {
    try{
        const user = await User.findOne({where: {id: req.params.userId}});
         if(!user){
             res.status(403).send('없는 사용자를 언팔로우 할 수 없습니다.');
         }
         await user.removeFollowers(req.user.id);
        res.status(200).json({UserId: parseInt(req.params.userId, 10)});
     }
     catch(error){
         console.error(error);
         next(error);
     }
});

//팔로워 불러오기
router.get('/followers', isLoggedIn, async (req, res, next) => { // GET /user/followers
    try {
      const user = await User.findOne({ where: { id: req.user.id }});
      if (!user) {
        res.status(403).send('없는 사람을 찾으려고 하시네요?');
      }
      const followers = await user.getFollowers({
        attributes: ['id', 'nickname'],
        limit: parseInt(req.query.limit, 10),
      });
      res.status(200).json(followers);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

//팔로잉 불러오기
router.get('/followings', isLoggedIn, async(req, res, next) => {
    try{
       const user = await User.findOne({where: {id: req.user.id}});
        if(!user){
            res.status(403).send('없는 사용자를 팔로우 할 수 없습니다.');
        }
        const followings =  await user.getFollowings({
            attributes: ['id', 'nickname'],
            limit: parseInt(req.query.limit, 10)
        });
        res.status(200).json(followings);
    }
    catch(error){
        console.error(error);
        next(error);
    }
});

//팔로워 삭제
router.delete('/follower/:userId', isLoggedIn, async(req, res, next) => {
    try{
        const user = await User.findOne({where: {id: req.params.userId}});
         if(!user){
             res.status(403).send('없는 사용자를 차단 할 수 없습니다.');
         }
         await user.removeFollowings(req.user.id);
        res.status(200).json({UserId: parseInt(req.params.userId, 10)});
     }
     catch(error){
         console.error(error);
         next(error);
     }
});

//이런 params(wildCard)가 붙은 라우터들은 위치를 아래로 내리는게 좋다. 네트워크에서 주소를 찾을 때 params를 착각할 수도 있기 때문(404에러).미들웨어는 순서 중요
//다른 사람 정보 불러오기
router.get('/:id', async (req, res, next) => { // GET /user/3
    try {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.params.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post
        }, {
          model: User,
          order: [['createdAt', 'DESC']],
          as: 'Followings',
          attributes: ['id', 'nickname'],
                    include:[{
                      model: Image
                    }]
        }, {
          model: User,
          order: [['createdAt', 'DESC']],
          as: 'Followers',
          attributes: ['id', 'nickname'],
                    include:[{
                      model: Image
                    }]
        },{
          model: Post,
          order: [['createdAt', 'DESC']],
          as: 'Liked',
          include: [{
            model: Image
          }]
        }, {
          model: Image
        },{
          model: Reference,
          order: [['createdAt', 'DESC']],
        }]
      });
      if (fullUserWithoutPassword) {
        res.status(200).json(fullUserWithoutPassword);

      } else {
        res.status(404).json('존재하지 않는 사용자입니다.');
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  router.get('/:id/posts', async (req, res, next) => { // GET /user/1/posts
    try {
      const user = await User.findOne({ where: { id: req.params.id }});
      if (user) {
       
        const posts = await user.getPosts({
          where: { UserId: req.params.id },
          include: [{
            model: Image,
          }],
        });
        console.log(posts);
        res.status(200).json(posts);
      } else {
        res.status(404).send('존재하지 않는 사용자입니다.');
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

module.exports = router;