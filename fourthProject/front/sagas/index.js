import {all,  fork} from 'redux-saga/effects';
import axios from 'axios';

import postSaga from './post';
import userSaga from './user';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials= true;
 //백의 app.js에서 Credentials: true를 했기 때문(쿠키 전달)
export default function* rootSaga(){
    yield all([
        fork(postSaga),
        fork(userSaga),

    ]);
}

//fork: 해당 함수를 실행한다는 뜻. call과 다름.
//fork는 비동기, call은 동기