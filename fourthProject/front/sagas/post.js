import axios from 'axios';
import { all, call, fork, put, takeLatest, throttle } from 'redux-saga/effects';

import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  CHECK_DATE_FAILURE,
  CHECK_DATE_REQUEST,
  CHECK_DATE_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LOAD_HASHTAG_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_SUCCESS,
  LOAD_NEW_POSTS_FAILURE,
  LOAD_NEW_POSTS_REQUEST,
  LOAD_NEW_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_USER_POSTS_FAILURE,
  LOAD_USER_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  NEWLOOK_KEYWORD_FAILURE,
  NEWLOOK_KEYWORD_REQUEST,
  NEWLOOK_KEYWORD_SUCCESS,
  NEW_COMMENT_IMAGES_FAILURE,
  NEW_COMMENT_IMAGES_REQUEST,
  NEW_COMMENT_IMAGES_SUCCESS,
  REMOVE_COMMENT_FAILURE,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  RETWEET_FAILURE,
  RETWEET_REQUEST,
  RETWEET_SUCCESS,
  SEARCH_KEYWORD_FAILURE,
  SEARCH_KEYWORD_REQUEST,
  SEARCH_KEYWORD_SUCCESS,
  UNLIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UPDATE_COMMENT_RATE_FAILURE,
  UPDATE_COMMENT_RATE_REQUEST,
  UPDATE_COMMENT_RATE_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_UPDATE_LOOK_IMAGE_FAILURE,
  UPLOAD_UPDATE_LOOK_IMAGE_REQUEST,
  UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS,
} from '../reducers/post';

import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';


function retweetAPI(data) {
  const postId = data.get('postId');
  return axios.post(`/post/${postId}/reference`, data);
}

function* retweet(action) {
  try {
     const result = yield call(retweetAPI, action.data);
   
    yield put({
      type: RETWEET_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RETWEET_FAILURE,
      error: err.response.data,
    });
  }
}


function uploadImagesAPI(data) {
  return axios.post('/post/images', data);
}

function* uploadImages(action) {
  try {
     const result = yield call(uploadImagesAPI, action.data);
   
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function* newCommentImages(action){
  try{
    const result = yield call(uploadImagesAPI, action.data);

    yield put({
      type: NEW_COMMENT_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: NEW_COMMENT_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

// function updateImagesAPI(data){
//   return axios.post('/post/images', data);
// }

function* updateImages(action) {
  try {
     const result = yield call(uploadImagesAPI, action.data);
   
    yield put({
      type: UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_UPDATE_LOOK_IMAGE_FAILURE,
      error: err.response.data,
    });
  }
}


function likePostAPI(data) {
  return axios.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
     const result = yield call(likePostAPI, action.data);
   
    yield put({
      type: LIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function unlikePostAPI(data) {
  return axios.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
     const result = yield call(unlikePostAPI, action.data);
   
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function loadPostAPI(data) {
  return axios.get(`/post/${data}`); 
}

function* loadPost(action) {
  try {
     const result = yield call(loadPostAPI, action.data);
   
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}


function loadHashtagPostsAPI(data, lastId) {
  return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}                 //주소에 그냥 한글,특수문자가 들어가면 에러나서 encodeURIComponent로 감싸줘야 한다.

function* loadHashtagPosts(action) {
  try {
    const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
    yield put({
      type: LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_HASHTAG_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}

function loadPostsAPI(lastId) {
  return axios.get(`/posts/allLooks?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.lastId);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadNewPostsAPI(data) {
  return axios.get(`/posts`);
}

function* loadNewPosts(action) {
  try {
    const result = yield call(loadNewPostsAPI, action.data);
    yield put({
      type: LOAD_NEW_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_NEW_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/post', data);
}

function* addPost(action) {
  try {
     const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function updatePostAPI(data){
  const postId = data.get('postId');
  return axios.patch(`/post/${postId}`, data);
}

function* updatePost(action){
  try{
      const result = yield call(updatePostAPI, action.data);
    yield put({
      type: UPDATE_POST_SUCCESS,
      data: result.data
    });
  }
  catch(err){
    console.error(err);
    yield put({
    type: UPDATE_POST_FAILURE,
    error: err.response.data,
  });
  }
}

function removePostAPI(data) {
  return axios.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);

    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function removeCommentAPI(data){

  const commentId = data.get('commentId');

  console.log("댓글 삭제 아이디: ", commentId);

  return axios.delete(`/post/comment/${commentId}`);
}

function updateCommentRateAPI(data){

  const commentId = data.get('commentId');

  console.log("댓글 점수 아이디: ", commentId);

  return axios.patch(`/post/commentRate/${commentId}`, data);

}

function* removeComment(action){
  try{
    const removeResult = yield call(removeCommentAPI, action.data);
    const updateResult = yield call(updateCommentRateAPI, action.data);
    yield put({
      type: REMOVE_COMMENT_SUCCESS,
      data: removeResult.data,
    });
    yield put({
      type: UPDATE_COMMENT_RATE_SUCCESS,
      data: updateResult.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_COMMENT_FAILURE,
      data: err.response.data,
    });
    yield put({
      type: UPDATE_COMMENT_RATE_FAILURE,
      data: err.response.data,
    });
  }
}

function addCommentAPI(data) {

const postId = data.get('postId');
 
  return axios.post(`/post/${postId}/comment`, data);
}                                                        

function* addComment(action) {
  try {
     const result = yield call(addCommentAPI, action.data);
   
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
       data: err.response.data,
    });
  }
}

function checkDateAPI(data){
  return axios.post(`/post/checkDate`, data);
}

function* checkDate(action){
  try {
    const result = yield call(checkDateAPI, action.data);
  
   yield put({
     type: CHECK_DATE_SUCCESS,
     data: result.data,
   });
 } catch (err) {
   console.error("날짜 확인 에러 확인", err);
   yield put({
     type: CHECK_DATE_FAILURE,
      data: err.response.data,
   });
 }
}

function searchKeywordAPI(data){
  return axios.get(`/hashtag/keywords/${encodeURIComponent(data)}`, data);
}

function* searchKeyword(action){
  try {
    const result = yield call(searchKeywordAPI, action.data);
  
   yield put({
     type: SEARCH_KEYWORD_SUCCESS,
     data: result.data,
   });
 } catch (err) {
   yield put({
     type: SEARCH_KEYWORD_FAILURE,
      data: err.response.data,
   });
 }
}

function newLookKeywordAPI(data){
  return axios.get(`/hashtag/keywords/${encodeURIComponent(data)}`, data);
}

function* newLookKeyword(action){
  try {
    const result = yield call(newLookKeywordAPI, action.data);
  
   yield put({
     type: NEWLOOK_KEYWORD_SUCCESS,
     data: result.data,
   });
 } catch (err) {
   yield put({
     type: NEWLOOK_KEYWORD_FAILURE,
      data: err.response.data,
   });
 }
}


function* watchRetweet() {
  yield takeLatest(RETWEET_REQUEST, retweet);
}


function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}


function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchNewCommentImages(){
  yield takeLatest(NEW_COMMENT_IMAGES_REQUEST, newCommentImages);
}

function* watchUpdateImages() {
  yield takeLatest(UPLOAD_UPDATE_LOOK_IMAGE_REQUEST, updateImages);
}

function* watchUnLikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchLoadPosts() {
  yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

// function* watchLoadUserPosts() {
//   yield throttle(5000, LOAD_USER_POSTS_REQUEST, loadUserPosts);
// }

function* watchLoadHashtagPosts() {
  yield throttle(5000, LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchUpdatePost() {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchRemoveComment(){
  yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment);
}

function* watchLoadNewPosts(){
  yield takeLatest(LOAD_NEW_POSTS_REQUEST, loadNewPosts);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchCheckDate() {
  yield takeLatest(CHECK_DATE_REQUEST, checkDate);
}

function* watchSearchKeyword() {
  yield takeLatest(SEARCH_KEYWORD_REQUEST, searchKeyword);
}

function* watchNewLookKeyword() {
  yield takeLatest(NEWLOOK_KEYWORD_REQUEST, newLookKeyword);
}

export default function* postSaga() {
  yield all([
    fork(watchRetweet),
    fork(watchUploadImages),
    fork(watchNewCommentImages),
    fork(watchUpdateImages),
    fork(watchLikePost),
    fork(watchUnLikePost),
    fork(watchAddPost),
    fork(watchUpdatePost),
    fork(watchLoadPosts),
    fork(watchNewLookKeyword),
    fork(watchLoadHashtagPosts),
    fork(watchLoadPost),
    fork(watchRemovePost),
    fork(watchRemoveComment),
    fork(watchSearchKeyword),
    fork(watchAddComment),
    fork(watchCheckDate),
    fork(watchLoadNewPosts)
  ]);
}