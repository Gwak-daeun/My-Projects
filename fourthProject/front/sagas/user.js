import axios from "axios";
import {all, call, delay, fork, put, takeLatest} from 'redux-saga/effects';
import { CHANGE_INFO_FAILURE, CHANGE_INFO_REQUEST, CHANGE_INFO_SUCCESS, 
    FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, 
    LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, 
    LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, 
    LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, 
    LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, 
    LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS,
    REMOVE_FOLLOWER_FAILURE,
    REMOVE_FOLLOWER_REQUEST,
    REMOVE_FOLLOWER_SUCCESS,
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, 
    UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, 
    UPLOAD_PROFILE_IMAGE_REQUEST, UPLOAD_PROFILE_IMAGE_SUCCESS, UPLOAD_PROFILE_IMAGE_FAILURE, LOAD_USER_CALENDAR_DATA_SUCCESS, LOAD_USER_CALENDAR_DATA_FAILURE, LOAD_USER_CALENDAR_DATA_REQUEST,

} from "../reducers/user";

function loadUserCalendarDataAPI(data){
    return axios.get(`/user/${data}/posts`);
}

function* loadUserCalendarData(action){
    try{
        const result = yield call(loadUserCalendarDataAPI, action.data);
        yield put({
            type: LOAD_USER_CALENDAR_DATA_SUCCESS,
            data: result.data
        });
    }catch(err){
        console.error(err);
        yield put({
            type: LOAD_USER_CALENDAR_DATA_FAILURE,
            error: err.response.data,
        });
    }
}


function removeFollowersAPI(data){
    return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action){
    try{
    const result = yield call(removeFollowersAPI, action.data);
    yield put({
        type: REMOVE_FOLLOWER_SUCCESS,
        data: result.data
    });
    }catch(err){
        console.error(err);
        yield put({
            type: REMOVE_FOLLOWER_FAILURE,
            error: err.response.data,
        });
    }
}

function loadUserAPI(data) {
    console.log("로드 유저 데이터: ", data);
    return axios.get(`/user/${data}`);
  }
  
  function* loadUser(action) {
    try {
      const result = yield call(loadUserAPI, action.data);
      yield put({
        type: LOAD_USER_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: LOAD_USER_FAILURE,
        error: err.response.data,
      });
    }
  }
  

function loadFollowersAPI(data){
    return axios.get('/user/followers', data);
}

function* loadFollowers(action){
    try{
    const result = yield call(loadFollowersAPI, action.data);
    yield put({
        type: LOAD_FOLLOWERS_SUCCESS,
        data: result.data
    });
    }catch(err){
        console.error(err);
        yield put({
            type: LOAD_FOLLOWERS_FAILURE,
            error: err.response.data,
        });
    }
}

function loadFollowingsAPI(data){
    return axios.get('/user/followings', data);
}

function* loadFollowings(action){
    try{
    const result = yield call(loadFollowingsAPI, action.data);
    yield put({
        type: LOAD_FOLLOWINGS_SUCCESS,
        data: result.data
    });
    }catch(err){
        console.error(err);
        yield put({
            type: LOAD_FOLLOWINGS_FAILURE,
            error: err.response.data,
        });
    }
}

    


function changeInfoAPI(data){
    console.log('sagas data::::' + JSON.stringify(data));
    return axios.patch('/user/info', data);
}

function* changeInfo(action){
    try{
    const result = yield call(changeInfoAPI, action.data);
    yield put({
        type: CHANGE_INFO_SUCCESS,
        data: result.data
    });
    }catch(err){
        console.error(err);
        yield put({
            type: CHANGE_INFO_FAILURE,
            error: err.response.data,
        });
    }
}


function loadMyInfoAPI(){
    return axios.get('/user');
}

function* loadMyInfo(action){
    try{
    const result = yield call(loadMyInfoAPI, action.data);
    yield put({
        type: LOAD_MY_INFO_SUCCESS,
        data: result.data
    });
    }catch(err){
        console.error(err);
        yield put({
            type: LOAD_MY_INFO_FAILURE,
            error: err.response.data,
        });
    }
}

function followAPI(data){
    return axios.patch(`/user/${data}/follow`, data);
}

function* follow(action){
    try{
     const result = yield call(followAPI, action.data);
    yield put({
        type: FOLLOW_SUCCESS,
        data: result.data
    });
    }catch(err){
        console.error(err);
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function unfollowAPI(data){
    return axios.delete(`/user/${data}/unfollow`, data);
}

function* unfollow(action){
    try{
     const result = yield call(unfollowAPI, action.data);
    yield delay(1000);
    yield put({
        type: UNFOLLOW_SUCCESS,
        data: result.data
    });
    }catch(err){
        console.error(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}


function loginAPI(data){
    return axios.post('/user/login', data);
}

//action = login, action.type: 로그인 리퀘스트, action.data: 로그인 데이터
function* logIn(action){
    try{
   const result = yield call(loginAPI, action.data);
    yield put({
        type: LOG_IN_SUCCESS,
        data: result.data
    });
    }catch(err){
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function logOutAPI(){
    return axios.post('/user/logout');
}

function* logOut(){
    try{
    yield call(logOutAPI);
    yield put({
        type: LOG_OUT_SUCCESS
    });
    }catch(err){
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI(data){
    return axios.post('/user', data); //data는 email, password, nickname이라는 객체
}

function* signUp(action){
    try{
 const result = yield call(signUpAPI, action.data);
 console.log(result);
    yield put({
        type: SIGN_UP_SUCCESS,
        
    });
    }catch(err){
        yield put({
            
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function uploadImagesAPI(data) {
    return axios.patch('/user/profileImage', data);
  }
  
  function* uploadImages(action) {
    try {
       const result = yield call(uploadImagesAPI, action.data);
     
      yield put({
        type: UPLOAD_PROFILE_IMAGE_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: UPLOAD_PROFILE_IMAGE_FAILURE,
        error: err.response.data,
      });
    }
  }

function* watchLoadMyInfo() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
  }

  function* watchUploadProfile() {
    yield takeLatest(UPLOAD_PROFILE_IMAGE_REQUEST, uploadImages);
  }

function* watchRemoveFollower(){
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

function* watchLoadFollowers(){
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function* watchLoadFollowings(){
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function* watchInfo(){
    yield takeLatest(CHANGE_INFO_REQUEST, changeInfo);
}

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
  }

function* watchLoadUserCalendarData(){
    yield takeLatest(LOAD_USER_CALENDAR_DATA_REQUEST, loadUserCalendarData);
}

function* watchFollow(){
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow(){
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLogin(){
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut(){
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp(){
    console.log("watchSinUp");
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga(){
    yield all([
        fork(watchUploadProfile),
        fork(watchLoadMyInfo),
        fork(watchLoadUserCalendarData),
        fork(watchRemoveFollower),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchInfo),
        fork(watchLoadUser),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchSignUp)
    ])   
}

//put이 dispatch의 역할, 아래 세개가 이벤트리스너와 같은 역할
//take는 일회성이라 while문으로 감싸야 무한히 실행 가능
//while take는 동기적으로 동작하지만 takeEvery는 비동기로 동작. takeEvery로 while문 대체
//takeLatest: 실수로 여러번 동시에 눌러도 가장 마지막 요청만 수행.로딩중인 앞선 요청이 해당
//takeLatest는 응답을 취소하는거지 요청을 취소하는게 아님.
//takeLeading: takeLatest와 반대로 가장 처음 요청만 수행