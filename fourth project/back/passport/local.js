const passport = require('passport');
const {Strategy: LocalStrategy} = require('passport-local');
const bcrypt = require('bcrypt');
const {User} = require('../models');

module.exports = () => {
    
    passport.use(new LocalStrategy({
        usernameField: 'nickname', //req.body.nickname
        passwordField: 'password' //req.body.password
    }, async(nickname, password, done) => {
        //await는 항상 try로 감싸야 한다.
        try{
            const user = await User.findOne({
                where: {nickname}
            });
            if(!user){
                return done(null, false, {reason: '존재하지 않는 닉네임 입니다.'}) //첫번째 자리: 서버 에러, 두번째 자리: 성공, 세번째 자리: 클라이언트에러
            }
          const result = await bcrypt.compare(password, user.password);
                                            //입력한 패스워드, db에 있는 패스워드
            if(result){
                return done(null, user);
            }
            return done(null, false, {reason: '비밀번호가 틀렸습니다.'});
        }
       catch(error){
        console.error(error);
        return done(error);
       }
    }));
};