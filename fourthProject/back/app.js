const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const db = require('./models');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');
const passportConfig = require('./passport');
const passport = require('passport');



dotenv.config();
const app = express();


db.sequelize.sync()
.then(() => {
  console.log('db 연결 성공');
})
.catch(console.error);

passportConfig();


app.use(morgan('dev'));
//app은 express서버에다가 개발자가 원하는걸 장착한다는 것.
app.use(cors({
  origin: true, //true로 설정두면 *대신 보낸 곳의 주소가 자동으로 들어간다.(Access-control-allow-origin) 'http://localhost:3060'로 써도 됨
  credentials: true //백으로 쿠키도 같이 전달해주고 싶을 때 true로 설정. false로 설정하면 cors정책으로 인해 에러가 난다.(Access-control-allow-credentials)
}));
app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json()); //프론트에서 json형식의 데이터를 req.body안에 넣어둠
app.use(express.urlencoded({extended: true})); //form형식의 uerlencoded식 데이터를 req.body안에 넣어줌
//json과 urlencoded는 프론트에서 보낸 데이터를 req.body.data에 해석해서 넣어주는 역할. 꼭 라우터 보다 상단에 위치해야함.
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET //브라우저에 보낼 랜덤 문자열을 만들기 위한 키 -> .env에서 관리
}));
app.use(passport.initialize());
app.use(passport.session());

//req: 리퀘스트, res: 응답
app.get('/', (req, res) => {
    res.send('hello express');
});

// app.get('/posts', (req, res) => {
//     res.json([
//         {id: 1, content: 'hello'},
//         {id: 1, content: 'hello'},
//         {id: 1, content: 'hello'},
//     ]);
// });

app.use('/posts', postsRouter);
app.use('/post',postRouter);
        //prepix? 접두어
app.use('/user', userRouter);
app.use('/hashtag', hashtagRouter);

app.listen(3065, () => {
    console.log('서버 실행 중');
});