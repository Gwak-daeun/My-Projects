const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const { Post, Image, Comment, User, Hashtag, Reference } = require('../models');
const {isLoggedIn} = require('./middlewares');

const router = express.Router();

try{
    fs.accessSync('uploads');
}
catch(error){
    console.log('uploads폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}

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
router.post('/images', isLoggedIn, upload.array('image'), async(req, res, next) => {
    console.log("req.files:::::::" + JSON.stringify(req.files));
    res.json(req.files.map((v) => v.location));
});

//오늘 등록된 게시글이 있는지 확인 후, 있으면 에러처리
router.post('/checkDate', isLoggedIn, upload.none(), async(req, res, next) => {

  try{

    console.log("날짜 확인::", req.body);

    const data = req.body.todayDateString;


    const existingPost = await Post.findOne({
      where: {
      createdAt: data,
      UserId: req.body.UserId
      },
    });

    const moment = require('moment');

    console.log("날짜 찾기 결과: ", existingPost);

    // const LookDate = moment.utc(existingPost).format('YYYY-MM-DD');
    console.log();

    if (existingPost !== null) {
      return res.status(403).json({
        message: '이미 오늘의 Look을 만드셨네요! \nLook은 하루에 하나만 만들 수 있어요.',
      });
    }
    res.status(201).json('오늘의 룩을 아직 만들지 않았어요.');
  }catch(error){      
    console.error(error);
    next(error);
  }

});

//게시글 등록
router.post('/', isLoggedIn, upload.none(), async(req, res, next) => {
    try{

    console.log(":::::req.body.acc::::::" + req.body.acc);

      const post = await Post.create({
        content: req.body.content,
        lookName: req.body.lookName,
        top: req.body.top,
        bottom: req.body.bottom,
        dress: req.body.dress,
        outer: req.body.outer,
        shoes: req.body.shoes,
        acc: req.body.acc,
        UserId: req.user.id,
        createdAt: req.body.today,
        rateAverage: 0
      });

     const hashtags = [ req.body.top, req.body.bottom, req.body.dress, req.body.outer, req.body.shoes, req.body.acc ];
     
     const newHashtags = hashtags.filter(Boolean);

      console.log(":::::hashtags:::::" + newHashtags);

      const set = new Set(newHashtags);

      const finalHashtags = [...set];

      if(finalHashtags){
        const result = await Promise.all(finalHashtags.map((tag) => Hashtag.findOrCreate({
          where: {name: tag.toLowerCase()} 
        })));
        console.log("게시글 업로드 해시태그: ", result)
        await post.addHashtags(result.map((v) => v[0]));
      }
     
      if(req.body.image){
        console.log("::::::::게시글 등록 이미지:::::::" + req.body.image);
        const image = await Image.create({src: req.body.image});
        await post.addImages(image);
      }
      const fullPost = await Post.findOne({
        where: {id: post.id},
        include: [{
            model: Image
        },{
          model: Comment,
          order: [['createdAt', 'DESC']],
            include: [{
                model: User, //댓글 작성자
                attributes: ['id', 'nickname']
            }]
        },{
            model: User, //게시글 작성자
            attributes: ['id', 'nickname']
        },{
            model: User,
            as: 'Likers', //좋아요 누른 사람
            attributes: ['id']
        }]
    });

    res.status(201).json(fullPost);
    }
    catch(error){      
      console.error(error);
      next(error);
  }
});

//게시글 수정
router.patch('/:postId', isLoggedIn, upload.array('image'), async(req, res, next) => {
  console.log("수정 바디 확인: ", req.body);
  try{
    const postUpdateResult = await Post.update({
      content: req.body.content,
      lookName: req.body.lookName,
      top: req.body.top,
      bottom: req.body.bottom,
      dress: req.body.dress,
      outer: req.body.outer,
      shoes: req.body.shoes,
      acc: req.body.acc   
    }, {
      where: { id: req.body.postId }
    });

    if (postUpdateResult[0] === 0) {
      // 업데이트된 row가 없을 경우 에러 처리
      return res.status(400).send('수정된 내용이 없습니다.');
    }

    const post = await Post.findByPk(req.body.postId);

      const hashtags = [ req.body.top, req.body.bottom, req.body.dress, req.body.outer, req.body.shoes, req.body.acc ];
      
      const newHashtags = hashtags.filter(Boolean);
      console.log("수정 해시태그: " + newHashtags);

      if(req.body.image){
        console.log("게시글 수정 이미지: " + req.body.image);
        await Image.update({src: req.body.image},{where: {PostId: req.body.postId}});
      }

      const set = new Set(newHashtags);

      const finalHashtags = [...set];
       if(finalHashtags !== []){
       const result = await Promise.all(finalHashtags.map((tag) => Hashtag.findOrCreate({
          where: {name: tag.toLowerCase()} 
        })));
        
        await post.setHashtags(result.map((v) => v[0]));
       }

       const fullPost = await Post.findOne({
        where: { id: post.id },
        include: [{
          model: Reference,
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
          }, {
            model: Image,
          }]
        }, {
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        },
        {
          model: User,
          as : 'Likers',
          attributes: ['id', 'nickname'],
        }, {
          model: Comment,
          order: [['createdAt', 'DESC']],
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
          }, {
            model: Post
          },{
            model: Image
          }],
        },{
          model: Hashtag,
          through: 'PostHashtag'
        }],
      });
    res.status(201).json(fullPost);
  }
  catch(error){
    console.error(error);
    next(error);
  }
});

//댓글 등록
router.post('/:postId/comment', isLoggedIn, upload.array('image'), async(req, res, next) => {
    try{
      console.log('route 댓글::::::', req.body);
       const post = await Post.findOne({
            where: {id: req.params.postId}
        });
        if(!post){
            return res.status(403).send('존재하지 않는 게시글 입니다.');
        }
        const comment = await Comment.create({
            content: req.body.content,
            rate: req.body.rate,
            PostId: parseInt(req.params.postId, 10),
            UserId: req.user.id
        });
        if(req.files){
          
          for(let i = 0; i < req.files.length; i++){
            console.log("::::::::req.file:::::::", req.files[i]);
            const image = await Image.create({src: req.files[i].location});
            await comment.addImages(image);
          }
          
        }
        //댓글 점수 가져와서 평균내기
        const commentRate = await Comment.findAll({
          where: {PostId: req.params.postId},
          attributes: ['rate']
        });

        const rateArr = [];

        console.log("점수 갯수::::", commentRate.length);

        for(let i = 0; i < commentRate.length; i++){
          rateArr.push(commentRate[i].dataValues.rate);
        }

        const average = (rateArr.reduce((a, c) => a + c) / rateArr.length).toFixed(1) ;

        console.log("댓글 평균 점수:::::", average);

        //게시글 점수 평균 업데이트
        await Post.update({
          rateAverage: average
        },
        {
          where: {id: req.params.postId}
        }
        );

        const fullComment = await Comment.findOne({
            where: {id: comment.id},
            include: [{
                model: User,
                attributes: ['id', 'nickname']
            },
          {
            model: Image
          },
          {
            model: Post,
          attributes:['rateAverage']
        }
          ]
        });
        console.log("댓글 단 후 데이터: ", fullComment);
       res.status(201).json(fullComment);
    }
    catch(error){
        console.error(error);
        next(error);
    }
});

//댓글 삭제
router.delete('/comment/:commentId', isLoggedIn, async (req, res, next) => { // DELETE /post/10
  try {

    await Comment.destroy({
      where: {
        id: req.params.commentId
      },
    });
    
    res.status(200).json({ id: req.params.commentId });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//댓글 점수 업데이트(댓글 삭제와 같이 요청)
router.patch('/commentRate/:commentId', upload.none(), isLoggedIn, async (req, res, next) => { // DELETE /post/10
  try {

     //댓글 점수 가져와서 평균내기
     const commentRate = await Comment.findAll({
      where: {PostId: req.body.PostId},
      attributes: ['rate']
    });

    const rateArr = [];

    console.log("수정 점수 갯수::::", commentRate.length);

    for(let i = 0; i < commentRate.length; i++){
      rateArr.push(commentRate[i].dataValues.rate);
    }

    const average = (rateArr.reduce((a, c) => a + c) / rateArr.length).toFixed(1) ;

    console.log("수정 댓글 평균 점수:::::", average);

    //게시글 점수 평균 업데이트
    await Post.update({
      rateAverage: average
    },
    {
      where: {id: req.body.PostId}
    }
    );

    const post = await Post.findOne({
      where: {id: req.body.PostId},
      attributes: ['rateAverage']
  });
  console.log("댓글 수정 루트 데이터: ", post);
 res.status(201).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 좋아요
router.patch('/:postId/like', isLoggedIn, async(req, res, next) => {
    try{
    const post = await Post.findOne({where: {id: req.params.postId}});
    if(!post){
        return res.status(403).send('게시글이 존재하지 않습니다.');
    }
    await post.addLikers(req.user.id);
    res.json({PostId: post.id, UserId: req.user.id});
    }
    catch(error){
        console.error(error);
        next(error);
    }
});

//좋아요 취소
router.delete('/:postId/like', isLoggedIn, async(req, res, next) => {
    try{
    const post = await Post.findOne({where: {id: req.params.postId}});
    if(!post){
        return res.status(403).send('게시글이 존재하지 않습니다.');
    }
    await post.removeLikers(req.user.id);
    res.json({PostId: post.id, UserId: req.user.id});
    }
    catch(error){
        console.error(error);
        next(error);
    }
});

//게시글 삭제
router.delete('/:postId', isLoggedIn, async (req, res, next) => { // DELETE /post/10
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//리트윗
router.post('/:postId/reference', isLoggedIn, upload.none(), async (req, res, next) => { // POST /post/1/retweet
    try {
      console.log("인용인용: ", req.body.content);
      const post = await Post.findOne({
        where: { id: req.params.postId },
        include: [{
          model: Reference
        }],
      });
      if (!post) {
        return res.status(403).send('존재하지 않는 게시글입니다.');
      }
      if (req.user.id === post.UserId || (post && Reference.UserId === req.user.id)) {
        return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
      }
      const referenceTargetId = Reference.PostId || post.id;
      const exReference = await Reference.findOne({
        where: {
          UserId: req.user.id,
          PostId: referenceTargetId,
        },
      });
      if (exReference) {
        return res.status(403).send('이미 리트윗했습니다.');
      }

      const imageSrc = await Image.findOne({
        where: {PostId: req.params.postId},
        attributes:['src']
      })

      const src = imageSrc.dataValues.src;
      const newReference = await Reference.create({
        UserId: req.user.id,
        PostId: req.params.postId,
        content: req.body.content,
        referSrc: src
        // lookName: 'Reference'
      });
      const referenceWithPrevPost = await Post.findOne({
        where: { id: newReference.PostId },
        include: [{
          model: Reference,
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
          }, {
            model: Image,
          }]
        }, {
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }, {
          model: Comment,
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
          }],
        }],
      })
      res.status(201).json(referenceWithPrevPost);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });


//게시글 하나 불러오기
router.get('/:postId', async (req, res, next) => { // GET /post/1
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
      
    });
    if (!post) {
      return res.status(404).send('존재하지 않는 게시글입니다.');
    }
    
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Reference,
        order:[[Comment, 'createdAt', 'DESC']],
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }]
      }, {
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      },
      {
        model: User,
        as : 'Likers',
        attributes: ['id', 'nickname'],
      }, {
        model: Comment,
        // order: [['createdAt', 'DESC']],
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Post
        },{
          model: Image
        }],
      },{
        model: Hashtag,
        through: 'PostHashtag'
      }],
    });
    res.status(200).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;