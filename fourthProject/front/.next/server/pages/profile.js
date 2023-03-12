module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("W+IF");


/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js




const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;
    default:
      {
        const combinedReducer = Object(external_redux_["combineReducers"])({
          user: user["O" /* default */],
          post: post["fb" /* default */]
        });
        return combinedReducer(state, action);
      }
  }
};
/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./sagas/post.js




function retweetAPI(data) {
  const postId = data.get('postId');
  return external_axios_default.a.post(`/post/${postId}/reference`, data);
}
function* retweet(action) {
  try {
    const result = yield Object(effects_["call"])(retweetAPI, action.data);
    yield Object(effects_["put"])({
      type: post["N" /* RETWEET_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["L" /* RETWEET_FAILURE */],
      error: err.response.data
    });
  }
}
function uploadImagesAPI(data) {
  return external_axios_default.a.post('/post/images', data);
}
function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: post["bb" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["Z" /* UPLOAD_IMAGES_FAILURE */],
      error: err.response.data
    });
  }
}
function* newCommentImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: post["D" /* NEW_COMMENT_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["B" /* NEW_COMMENT_IMAGES_FAILURE */],
      error: err.response.data
    });
  }
}

// function updateImagesAPI(data){
//   return axios.post('/post/images', data);
// }

function* updateImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: post["eb" /* UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["cb" /* UPLOAD_UPDATE_LOOK_IMAGE_FAILURE */],
      error: err.response.data
    });
  }
}
function likePostAPI(data) {
  return external_axios_default.a.patch(`/post/${data}/like`);
}
function* likePost(action) {
  try {
    const result = yield Object(effects_["call"])(likePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["l" /* LIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["j" /* LIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}
function unlikePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}/like`);
}
function* unlikePost(action) {
  try {
    const result = yield Object(effects_["call"])(unlikePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["T" /* UNLIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["R" /* UNLIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}
function loadPostAPI(data) {
  return external_axios_default.a.get(`/post/${data}`);
}
function* loadPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["x" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["v" /* LOAD_POST_FAILURE */],
      error: err.response.data
    });
  }
}
function loadHashtagPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
} //주소에 그냥 한글,특수문자가 들어가면 에러나서 encodeURIComponent로 감싸줘야 한다.

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["o" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["m" /* LOAD_HASHTAG_POSTS_FAILURE */],
      data: err.response.data
    });
  }
}
function loadPostsAPI(lastId) {
  return external_axios_default.a.get(`/posts/allLooks?lastId=${lastId || 0}`);
}
function* loadPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostsAPI, action.lastId);
    yield Object(effects_["put"])({
      type: post["u" /* LOAD_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["s" /* LOAD_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}
function loadNewPostsAPI(data) {
  return external_axios_default.a.get(`/posts`);
}
function* loadNewPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadNewPostsAPI, action.data);
    yield Object(effects_["put"])({
      type: post["r" /* LOAD_NEW_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["p" /* LOAD_NEW_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}
function addPostAPI(data) {
  return external_axios_default.a.post('/post', data);
}
function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      error: err.response.data
    });
  }
}
function updatePostAPI(data) {
  const postId = data.get('postId');
  return external_axios_default.a.patch(`/post/${postId}`, data);
}
function* updatePost(action) {
  try {
    const result = yield Object(effects_["call"])(updatePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["Y" /* UPDATE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["W" /* UPDATE_POST_FAILURE */],
      error: err.response.data
    });
  }
}
function removePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}`);
}
function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["K" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["E" /* REMOVE_POST_OF_ME */],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["I" /* REMOVE_POST_FAILURE */],
      data: err.response.data
    });
  }
}
function removeCommentAPI(data) {
  const commentId = data.get('commentId');
  console.log("댓글 삭제 아이디: ", commentId);
  return external_axios_default.a.delete(`/post/comment/${commentId}`);
}
function updateCommentRateAPI(data) {
  const commentId = data.get('commentId');
  console.log("댓글 점수 아이디: ", commentId);
  return external_axios_default.a.patch(`/post/commentRate/${commentId}`, data);
}
function* removeComment(action) {
  try {
    const removeResult = yield Object(effects_["call"])(removeCommentAPI, action.data);
    const updateResult = yield Object(effects_["call"])(updateCommentRateAPI, action.data);
    yield Object(effects_["put"])({
      type: post["G" /* REMOVE_COMMENT_SUCCESS */],
      data: removeResult.data
    });
    yield Object(effects_["put"])({
      type: post["V" /* UPDATE_COMMENT_RATE_SUCCESS */],
      data: updateResult.data
    });
    yield Object(effects_["put"])({
      type: user["E" /* REMOVE_POST_OF_ME */],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["E" /* REMOVE_COMMENT_FAILURE */],
      data: err.response.data
    });
    yield Object(effects_["put"])({
      type: post["U" /* UPDATE_COMMENT_RATE_FAILURE */],
      data: err.response.data
    });
  }
}
function addCommentAPI(data) {
  const postId = data.get('postId');
  return external_axios_default.a.post(`/post/${postId}/comment`, data);
}
function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      data: err.response.data
    });
  }
}
function checkDateAPI(data) {
  return external_axios_default.a.post(`/post/checkDate`, data);
}
function* checkDate(action) {
  try {
    const result = yield Object(effects_["call"])(checkDateAPI, action.data);
    yield Object(effects_["put"])({
      type: post["i" /* CHECK_DATE_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error("날짜 확인 에러 확인", err);
    yield Object(effects_["put"])({
      type: post["g" /* CHECK_DATE_FAILURE */],
      data: err.response.data
    });
  }
}
function searchKeywordAPI(data) {
  return external_axios_default.a.get(`/hashtag/keywords/${encodeURIComponent(data)}`, data);
}
function* searchKeyword(action) {
  try {
    const result = yield Object(effects_["call"])(searchKeywordAPI, action.data);
    yield Object(effects_["put"])({
      type: post["Q" /* SEARCH_KEYWORD_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["O" /* SEARCH_KEYWORD_FAILURE */],
      data: err.response.data
    });
  }
}
function newLookKeywordAPI(data) {
  return external_axios_default.a.get(`/hashtag/keywords/${encodeURIComponent(data)}`, data);
}
function* newLookKeyword(action) {
  try {
    const result = yield Object(effects_["call"])(newLookKeywordAPI, action.data);
    yield Object(effects_["put"])({
      type: post["A" /* NEWLOOK_KEYWORD_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["y" /* NEWLOOK_KEYWORD_FAILURE */],
      data: err.response.data
    });
  }
}
function* watchRetweet() {
  yield Object(effects_["takeLatest"])(post["M" /* RETWEET_REQUEST */], retweet);
}
function* watchLikePost() {
  yield Object(effects_["takeLatest"])(post["k" /* LIKE_POST_REQUEST */], likePost);
}
function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(post["ab" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}
function* watchNewCommentImages() {
  yield Object(effects_["takeLatest"])(post["C" /* NEW_COMMENT_IMAGES_REQUEST */], newCommentImages);
}
function* watchUpdateImages() {
  yield Object(effects_["takeLatest"])(post["db" /* UPLOAD_UPDATE_LOOK_IMAGE_REQUEST */], updateImages);
}
function* watchUnLikePost() {
  yield Object(effects_["takeLatest"])(post["S" /* UNLIKE_POST_REQUEST */], unlikePost);
}
function* watchLoadPosts() {
  yield Object(effects_["throttle"])(5000, post["t" /* LOAD_POSTS_REQUEST */], loadPosts);
}
function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(post["w" /* LOAD_POST_REQUEST */], loadPost);
}

// function* watchLoadUserPosts() {
//   yield throttle(5000, LOAD_USER_POSTS_REQUEST, loadUserPosts);
// }

function* watchLoadHashtagPosts() {
  yield Object(effects_["throttle"])(5000, post["n" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}
function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
}
function* watchUpdatePost() {
  yield Object(effects_["takeLatest"])(post["X" /* UPDATE_POST_REQUEST */], updatePost);
}
function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["J" /* REMOVE_POST_REQUEST */], removePost);
}
function* watchRemoveComment() {
  yield Object(effects_["takeLatest"])(post["F" /* REMOVE_COMMENT_REQUEST */], removeComment);
}
function* watchLoadNewPosts() {
  yield Object(effects_["takeLatest"])(post["q" /* LOAD_NEW_POSTS_REQUEST */], loadNewPosts);
}
function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
}
function* watchCheckDate() {
  yield Object(effects_["takeLatest"])(post["h" /* CHECK_DATE_REQUEST */], checkDate);
}
function* watchSearchKeyword() {
  yield Object(effects_["takeLatest"])(post["P" /* SEARCH_KEYWORD_REQUEST */], searchKeyword);
}
function* watchNewLookKeyword() {
  yield Object(effects_["takeLatest"])(post["z" /* NEWLOOK_KEYWORD_REQUEST */], newLookKeyword);
}
function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchRetweet), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchNewCommentImages), Object(effects_["fork"])(watchUpdateImages), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchUnLikePost), Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchUpdatePost), Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchNewLookKeyword), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchRemoveComment), Object(effects_["fork"])(watchSearchKeyword), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchCheckDate), Object(effects_["fork"])(watchLoadNewPosts)]);
}
// CONCATENATED MODULE: ./sagas/user.js



function loadUserCalendarDataAPI(data) {
  return external_axios_default.a.get(`/user/${data}/posts`);
}
function* loadUserCalendarData(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserCalendarDataAPI, action.data);
    yield Object(effects_["put"])({
      type: user["r" /* LOAD_USER_CALENDAR_DATA_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["p" /* LOAD_USER_CALENDAR_DATA_FAILURE */],
      error: err.response.data
    });
  }
}
function removeFollowersAPI(data) {
  return external_axios_default.a.delete(`/user/follower/${data}`);
}
function* removeFollower(action) {
  try {
    const result = yield Object(effects_["call"])(removeFollowersAPI, action.data);
    yield Object(effects_["put"])({
      type: user["D" /* REMOVE_FOLLOWER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["B" /* REMOVE_FOLLOWER_FAILURE */],
      error: err.response.data
    });
  }
}
function loadUserAPI(data) {
  console.log("로드 유저 데이터: ", data);
  return external_axios_default.a.get(`/user/${data}`);
}
function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI, action.data);
    yield Object(effects_["put"])({
      type: user["u" /* LOAD_USER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["s" /* LOAD_USER_FAILURE */],
      error: err.response.data
    });
  }
}
function loadFollowersAPI(data) {
  return external_axios_default.a.get('/user/followers', data);
}
function* loadFollowers(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowersAPI, action.data);
    yield Object(effects_["put"])({
      type: user["i" /* LOAD_FOLLOWERS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["g" /* LOAD_FOLLOWERS_FAILURE */],
      error: err.response.data
    });
  }
}
function loadFollowingsAPI(data) {
  return external_axios_default.a.get('/user/followings', data);
}
function* loadFollowings(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowingsAPI, action.data);
    yield Object(effects_["put"])({
      type: user["l" /* LOAD_FOLLOWINGS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["j" /* LOAD_FOLLOWINGS_FAILURE */],
      error: err.response.data
    });
  }
}
function changeInfoAPI(data) {
  console.log('sagas data::::' + JSON.stringify(data));
  return external_axios_default.a.patch('/user/info', data);
}
function* changeInfo(action) {
  try {
    const result = yield Object(effects_["call"])(changeInfoAPI, action.data);
    yield Object(effects_["put"])({
      type: user["c" /* CHANGE_INFO_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["a" /* CHANGE_INFO_FAILURE */],
      error: err.response.data
    });
  }
}
function loadMyInfoAPI() {
  return external_axios_default.a.get('/user');
}
function* loadMyInfo(action) {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoAPI, action.data);
    yield Object(effects_["put"])({
      type: user["o" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["m" /* LOAD_MY_INFO_FAILURE */],
      error: err.response.data
    });
  }
}
function followAPI(data) {
  return external_axios_default.a.patch(`/user/${data}/follow`, data);
}
function* follow(action) {
  try {
    const result = yield Object(effects_["call"])(followAPI, action.data);
    yield Object(effects_["put"])({
      type: user["f" /* FOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["d" /* FOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}
function unfollowAPI(data) {
  return external_axios_default.a.delete(`/user/${data}/unfollow`, data);
}
function* unfollow(action) {
  try {
    const result = yield Object(effects_["call"])(unfollowAPI, action.data);
    yield Object(effects_["delay"])(1000);
    yield Object(effects_["put"])({
      type: user["K" /* UNFOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["I" /* UNFOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}
function loginAPI(data) {
  return external_axios_default.a.post('/user/login', data);
}

//action = login, action.type: 로그인 리퀘스트, action.data: 로그인 데이터
function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(loginAPI, action.data);
    yield Object(effects_["put"])({
      type: user["x" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["v" /* LOG_IN_FAILURE */],
      error: err.response.data
    });
  }
}
function logOutAPI() {
  return external_axios_default.a.post('/user/logout');
}
function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      type: user["A" /* LOG_OUT_SUCCESS */]
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["y" /* LOG_OUT_FAILURE */],
      error: err.response.data
    });
  }
}
function signUpAPI(data) {
  return external_axios_default.a.post('/user', data); //data는 email, password, nickname이라는 객체
}

function* signUp(action) {
  try {
    const result = yield Object(effects_["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(effects_["put"])({
      type: user["H" /* SIGN_UP_SUCCESS */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["F" /* SIGN_UP_FAILURE */],
      error: err.response.data
    });
  }
}
function user_uploadImagesAPI(data) {
  console.log("saga image::::", data);
  return external_axios_default.a.patch('/user/profileImage', data);
}
function* user_uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(user_uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: user["N" /* UPLOAD_PROFILE_IMAGE_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["L" /* UPLOAD_PROFILE_IMAGE_FAILURE */],
      error: err.response.data
    });
  }
}
function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(user["n" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}
function* watchUploadProfile() {
  yield Object(effects_["takeLatest"])(user["M" /* UPLOAD_PROFILE_IMAGE_REQUEST */], user_uploadImages);
}
function* watchRemoveFollower() {
  yield Object(effects_["takeLatest"])(user["C" /* REMOVE_FOLLOWER_REQUEST */], removeFollower);
}
function* watchLoadFollowers() {
  yield Object(effects_["takeLatest"])(user["h" /* LOAD_FOLLOWERS_REQUEST */], loadFollowers);
}
function* watchLoadFollowings() {
  yield Object(effects_["takeLatest"])(user["k" /* LOAD_FOLLOWINGS_REQUEST */], loadFollowings);
}
function* watchInfo() {
  yield Object(effects_["takeLatest"])(user["b" /* CHANGE_INFO_REQUEST */], changeInfo);
}
function* watchLoadUser() {
  yield Object(effects_["takeLatest"])(user["t" /* LOAD_USER_REQUEST */], loadUser);
}
function* watchLoadUserCalendarData() {
  yield Object(effects_["takeLatest"])(user["q" /* LOAD_USER_CALENDAR_DATA_REQUEST */], loadUserCalendarData);
}
function* watchFollow() {
  yield Object(effects_["takeLatest"])(user["e" /* FOLLOW_REQUEST */], follow);
}
function* watchUnfollow() {
  yield Object(effects_["takeLatest"])(user["J" /* UNFOLLOW_REQUEST */], unfollow);
}
function* watchLogin() {
  yield Object(effects_["takeLatest"])(user["w" /* LOG_IN_REQUEST */], logIn);
}
function* watchLogOut() {
  yield Object(effects_["takeLatest"])(user["z" /* LOG_OUT_REQUEST */], logOut);
}
function* watchSignUp() {
  console.log("watchSinUp");
  yield Object(effects_["takeLatest"])(user["G" /* SIGN_UP_REQUEST */], signUp);
}
function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchUploadProfile), Object(effects_["fork"])(watchLoadMyInfo), Object(effects_["fork"])(watchLoadUserCalendarData), Object(effects_["fork"])(watchRemoveFollower), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchInfo), Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchUnfollow), Object(effects_["fork"])(watchLogin), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchSignUp)]);
}

//put이 dispatch의 역할, 아래 세개가 이벤트리스너와 같은 역할
//take는 일회성이라 while문으로 감싸야 무한히 실행 가능
//while take는 동기적으로 동작하지만 takeEvery는 비동기로 동작. takeEvery로 while문 대체
//takeLatest: 실수로 여러번 동시에 눌러도 가장 마지막 요청만 수행.로딩중인 앞선 요청이 해당
//takeLatest는 응답을 취소하는거지 요청을 취소하는게 아님.
//takeLeading: takeLatest와 반대로 가장 처음 요청만 수행
// CONCATENATED MODULE: ./sagas/index.js




external_axios_default.a.defaults.baseURL = 'http://localhost:3065';
external_axios_default.a.defaults.withCredentials = true;
//백의 app.js에서 Credentials: true를 했기 때문(쿠키 전달)
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(postSaga), Object(effects_["fork"])(userSaga)]);
}

//fork: 해당 함수를 실행한다는 뜻. call과 다름.
//fork는 비동기, call은 동기
// CONCATENATED MODULE: ./store/configureStore.js






const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};
const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EqQl":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card/Card");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* unused harmony export loginAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_USER_CALENDAR_DATA_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_USER_CALENDAR_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_USER_CALENDAR_DATA_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return UPLOAD_PROFILE_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return UPLOAD_PROFILE_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return UPLOAD_PROFILE_IMAGE_FAILURE; });
/* unused harmony export ADD_POST_TO_ME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return logoutRequestAction; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ionj");


const initialState = {
  loadMyInfoLoading: false,
  // 유저 정보 가져오기 시도중 true이면 로딩창 띄우기
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  // 유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null,
  loadUserCalendarDataLoading: false,
  //유저 캘린더 데이터 가져오기 시도중
  loadUserCalendarDataDone: false,
  loadUserCalendarDataError: false,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeInfoLoading: false,
  // 프로필 정보 변경 시도중
  changeInfoDone: false,
  changeInfoError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  me: null,
  userInfo: null,
  userCalendarData: [],
  imagePaths: []
};
const loginAction = data => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(loginRequestAction());
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/login').then(res => {
      dispatch(loginSuccessAction(res.data));
    }).catch(res => {
      dispatch(loginFailureAction(res.data));
    });
  };
};
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_CALENDAR_DATA_REQUEST = 'LOAD_USER_CALENDAR_DATA_REQUEST';
const LOAD_USER_CALENDAR_DATA_SUCCESS = 'LOAD_USER_CALENDAR_DATA_SUCCESS';
const LOAD_USER_CALENDAR_DATA_FAILURE = 'LOAD_USER_CALENDAR_DATA_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_INFO_REQUEST = 'CHANGE_INFO_REQUEST';
const CHANGE_INFO_SUCCESS = 'CHANGE_INFO_SUCCESS';
const CHANGE_INFO_FAILURE = 'CHANGE_INFO_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const UPLOAD_PROFILE_IMAGE_REQUEST = 'UPLOAD_PROFILE_IMAGE_REQUEST';
const UPLOAD_PROFILE_IMAGE_SUCCESS = 'UPLOAD_PROFILE_IMAGE_SUCCESS';
const UPLOAD_PROFILE_IMAGE_FAILURE = 'UPLOAD_PROFILE_IMAGE_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = data => {
  return {
    type: LOG_OUT_REQUEST
  };
};
const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;
    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.userInfo = action.data;
      draft.loadUserDone = true;
      break;
    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;
    case LOAD_USER_CALENDAR_DATA_REQUEST:
      //달력 데이터
      draft.loadUserCalendarDataLoading = true;
      draft.loadUserCalendarDataError = null;
      draft.loadUserCalendarDataDone = false;
      break;
    case LOAD_USER_CALENDAR_DATA_SUCCESS:
      draft.loadUserCalendarDataLoading = false;
      draft.userCalendarData = action.data;
      draft.loadUserCalendarDataDone = true;
      break;
    case LOAD_USER_CALENDAR_DATA_FAILURE:
      draft.loadUserCalendarDataLoading = false;
      draft.loadUserCalendarDataError = action.error;
      break;
    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerError = null;
      draft.removeFollowerDone = false;
      break;
    case REMOVE_FOLLOWER_SUCCESS:
      draft.removeFollowerLoading = false;
      draft.me.Followers = draft.me.Followings.filter(v => v.id !== action.data.UserId);
      draft.removeFollowerDone = true;
      break;
    case REMOVE_FOLLOWER_FAILURE:
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;
      break;
    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsError = null;
      draft.loadFollowingsDone = false;
      break;
    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.me.Followings = action.data;
      draft.loadFollowingsDone = true;
      break;
    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      break;
    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersError = null;
      draft.loadFollowersDone = false;
      break;
    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.me.Followers = action.data;
      draft.loadFollowersDone = true;
      break;
    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      break;
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;
    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me = action.data;
      draft.loadMyInfoDone = true;
      break;
    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;
    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data.UserId
      });
      draft.followDone = true;
      break;
    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;
    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;
    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
      draft.unfollowDone = true;
      break;
    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;
    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;
    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true;
      break;
    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;
    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;
    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;
    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;
    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;
    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;
    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;
    case CHANGE_INFO_REQUEST:
      draft.changeInfoLoading = true;
      draft.changeInfoError = null;
      draft.changeInfoDone = false;
      break;
    case CHANGE_INFO_SUCCESS:
      draft.changeInfoLoading = false;
      // draft.userInfo.find((v) => v.id === action.data.UserId).info = action.data.info;
      draft.me.info = action.data.info;
      draft.changeInfoDone = true;
      break;
    case CHANGE_INFO_FAILURE:
      draft.changeInfoLoading = false;
      draft.changeInfoError = action.error;
      break;
    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;
    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;
    case UPLOAD_PROFILE_IMAGE_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;
    case UPLOAD_PROFILE_IMAGE_SUCCESS:
      {
        console.log("reducer image::::", action.data);
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }
    case UPLOAD_PROFILE_IMAGE_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;
    default:
      break;
  }
});
/* harmony default export */ __webpack_exports__["O"] = (reducer);

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "W+IF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/myInfo.js
var __jsx = external_react_default.a.createElement;






const {
  Meta
} = external_antd_["Card"];

const OneMyInfo = external_styled_components_default.a.div.withConfig({
  displayName: "myInfo__OneMyInfo",
  componentId: "sc-39z6fg-0"
})([".card1{margin-left:15px;width:250px;}.img1{width:100%;height:350px;}"]);
const MyInfo = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    me,
    changeInfoDone,
    imagePaths
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: previewImg,
    1: setPreviewImg
  } = Object(external_react_["useState"])(null);
  const {
    0: read,
    1: setRead
  } = Object(external_react_["useState"])(true);
  const {
    0: myText,
    1: setMyText
  } = Object(external_react_["useState"])(me.info || '');
  const onChangeMyText = Object(external_react_["useCallback"])(e => {
    const myText = e.target.value;
    setMyText(myText);
  }, []);
  const imageInput = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    if (changeInfoDone) {
      window.alert("내 정보 수정 완료!");
    }
  }, [changeInfoDone]);
  const onClickImageUpload = Object(external_react_["useCallback"])(() => {
    imageInput.current.click();
    setRead(false);
  }, [imageInput.current]);

  //유저 프로필 이미지 변경, 이미지 미리보기
  const onChangeImages = Object(external_react_["useCallback"])(e => {
    console.log('image:::', e.target.files);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setPreviewImg(previewImgUrl);
      }
    };
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('profile', f);
    });
    return dispatch({
      type: user["M" /* UPLOAD_PROFILE_IMAGE_REQUEST */],
      data: imageFormData
    });
  });

  //유저 정보 수정 요청
  const onSubmit = Object(external_react_["useCallback"])(() => {
    const formData = new FormData();
    formData.append('profile', imagePaths);
    formData.append('info', myText);
    console.log('text: ' + myText);
    dispatch({
      type: user["b" /* CHANGE_INFO_REQUEST */],
      data: formData
    });
  }, [myText, imagePaths]);
  const cancelFix = Object(external_react_["useCallback"])(() => {
    setRead(prev => !prev);
  });
  return __jsx("div", null, __jsx(OneMyInfo, null, __jsx(external_antd_["Form"], {
    encType: "multipart/form-data",
    onFinish: onSubmit
  }, __jsx(external_antd_["Card"], {
    title: "My Info",
    className: "card1",
    cover: me.Image.src === 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' ? __jsx(OneMyInfo, null, __jsx("img", {
      alt: "example",
      src: previewImg ? previewImg : `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`,
      ref: imageInput,
      className: "img1"
    })) : __jsx(OneMyInfo, null, __jsx("img", {
      className: "img1",
      src: previewImg ? previewImg : `http://localhost:3065/${me.Image.src}`
    })),
    actions: read ? [__jsx(external_antd_["Tooltip"], {
      placement: "bottom",
      title: "\uD074\uB9AD\uD558\uBA74 \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0\uC640 \uC790\uAE30\uC18C\uAC1C\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC5B4\uC694."
    }, __jsx(external_antd_["Button"], {
      onClick: onClickImageUpload
    }, __jsx(icons_["EditOutlined"], {
      key: "edit"
    })))] : [__jsx(external_antd_["Button"], {
      key: "save",
      htmlType: "submit"
    }, "save"), __jsx(external_antd_["Button"], {
      key: "cancel",
      onClick: cancelFix
    }, "cancel")]
  }, __jsx("input", {
    name: "profile",
    type: "file",
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages
  }), __jsx(Meta, {
    title: __jsx(external_antd_["Input"], {
      readOnly: read,
      defaultValue: "닉네임:  " + me.nickname
    }),
    description: read ? __jsx(external_antd_["Input"], {
      readOnly: read,
      defaultValue: me.info === null ? "자기자신을 한 단어로 표현한다면?" : "한마디:  " + myText
    }) : __jsx(external_antd_["Input"], {
      readOnly: read,
      placeholder: me.info,
      onChange: onChangeMyText,
      value: myText
    })
  })))));
};
/* harmony default export */ var myInfo = (MyInfo);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// CONCATENATED MODULE: ./components/mention.js

var mention_jsx = external_react_default.a.createElement;






const {
  Meta: mention_Meta
} = external_antd_["Card"];

const One = external_styled_components_default.a.div.withConfig({
  displayName: "mention__One",
  componentId: "sc-17mji7q-0"
})([".card1{width:250px;height:220px;float:'left';margin-left:17px;margin-top:10px;}.icons{font-size:15px;}.img1{width:100%;}.card2{width:110px;}"]);
const Mention = () => {
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const router = Object(router_["useRouter"])();
  const {
    id
  } = router.query;
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(external_react_["useState"])(false);
  const referModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const IfRefer = () => {
    if (me.References[0] !== undefined) {
      return mention_jsx("li", null, mention_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faPenNib"],
        className: "icons"
      }), me.References[0].content);
    }
    if (me.References[1] !== undefined) {
      return mention_jsx("li", null, mention_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faPenNib"],
        className: "icons"
      }), me.References[1].content);
    }
    if (me.References[2] !== undefined) {
      return mention_jsx("li", null, mention_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faPenNib"],
        className: "icons"
      }), me.References[2].content);
    } else {
      return mention_jsx("div", null, mention_jsx(external_antd_["Empty"], {
        description: mention_jsx("span", null, "\uC544\uC9C1 \uC778\uC6A9\uC774 \uC5C6\uC5B4\uC694.")
      }));
    }
  };
  return mention_jsx(One, null, mention_jsx(external_antd_["Card"], {
    title: "I refered...",
    extra: mention_jsx("a", {
      onClick: referModal
    }, "More"),
    className: "card1"
  }, mention_jsx(IfRefer, null)), mention_jsx(external_antd_["Modal"], {
    title: me.nickname + " 의 인용 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen
  }, mention_jsx(external_antd_["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: me.References,
    renderItem: item => mention_jsx(external_antd_["List"].Item, null, mention_jsx(external_antd_["Card"]
    // title={<a href={`http://localhost:3000/post/${item.id}`} >{item.lookName}</a>}
    , {
      cover: mention_jsx("a", {
        href: `http://localhost:3000/post/${item.id}`
      }, mention_jsx(One, null, mention_jsx("img", {
        className: "img1",
        alt: "example",
        src: `http://localhost:3065/${item.referSrc}`
      }))),
      className: "card2"
    }, mention_jsx(mention_Meta, {
      description: item.content
    })))
  })));
};

// {me.References.map((refer) => (
//   <ul key={refer.id}>
//     <p><FontAwesomeIcon icon={faPenNib} style={{fontSize: 20}} /> <img style={{width: 60}} src={`http://localhost:3065/${refer.referSrc}`}/> {refer.content}</p>
//   </ul>
// ))}

/* harmony default export */ var mention = (Mention);
// CONCATENATED MODULE: ./components/likeList.js

var likeList_jsx = external_react_default.a.createElement;






const likeList_One = external_styled_components_default.a.div.withConfig({
  displayName: "likeList__One",
  componentId: "sc-qyxlq7-0"
})([".icons{font-size:15px;}.card1{width:250px;height:240px;margin-top:10px;margin-left:18px;}.img1{width:100%;}"]);
const LikeList = () => {
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(external_react_["useState"])(false);
  const referModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const IfLike = () => {
    if (me.Liked[0] !== undefined) {
      return likeList_jsx("li", null, likeList_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faHeart"],
        className: "icons"
      }), " ", me.Liked[0].lookName);
    }
    if (me.Liked[1] !== undefined) {
      return likeList_jsx("li", null, likeList_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faHeart"],
        className: "icons"
      }), me.Liked[1].lookName);
    }
    if (me.Liked[2] !== undefined) {
      return likeList_jsx("li", null, likeList_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faHeart"],
        className: "icons"
      }), me.Liked[2].lookName);
    } else {
      return likeList_jsx("div", null, likeList_jsx(external_antd_["Empty"], {
        description: likeList_jsx("span", null, "\uC88B\uC544\uC694\uB97C \uD55C Look\uC774 \uC5C6\uC5B4\uC694.")
      }));
    }
  };
  return likeList_jsx("div", {
    className: "site-card-border-less-wrapper"
  }, likeList_jsx(likeList_One, null, likeList_jsx(external_antd_["Card"], {
    title: "I like this!",
    className: "card1",
    extra: likeList_jsx("a", {
      onClick: referModal
    }, "More")
  }, likeList_jsx(IfLike, null)), likeList_jsx(external_antd_["Modal"], {
    title: me.nickname + " 의 좋아요 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen
  }, likeList_jsx(external_antd_["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: me.Liked,
    renderItem: item => likeList_jsx(external_antd_["List"].Item, null, likeList_jsx(external_antd_["Card"], {
      title: likeList_jsx("a", {
        href: `http://localhost:3000/post/${item.id}`
      }, item.lookName),
      cover: likeList_jsx("a", {
        href: `http://localhost:3000/post/${item.id}`
      }, likeList_jsx(likeList_One, null, likeList_jsx("img", {
        className: "img1",
        alt: "example",
        src: `http://localhost:3065/${item.Images[0].src}`
      }))),
      className: "card2"
    }))
  }))));
};
/* harmony default export */ var likeList = (LikeList);
// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__("s7eq");

// CONCATENATED MODULE: ./components/followers.js

var followers_jsx = external_react_default.a.createElement;






const Li = external_styled_components_default.a.li.withConfig({
  displayName: "followers__Li",
  componentId: "sc-iwcsl6-0"
})([".ficon{font-size:15px;}"]);
const OneFollwer = external_styled_components_default.a.div.withConfig({
  displayName: "followers__OneFollwer",
  componentId: "sc-iwcsl6-1"
})([".card1{width:360px;height:215px;}.card2{width:110px;}.img1{width:100%;}.a1{margin-left:30px;}"]);
const Followers = () => {
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(external_react_["useState"])(false);
  const referModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const IfFollower = () => {
    if (me.Followers[0] !== undefined) {
      return followers_jsx(Li, null, followers_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_regular_svg_icons_["faSquare"],
        className: "ficon"
      }), " ", me.Followers[0].nickname);
    }
    if (me.Followers[1] !== undefined) {
      return followers_jsx(Li, null, followers_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_regular_svg_icons_["faSquare"],
        className: "ficon"
      }), me.Followers[1].nickname);
    }
    if (me.Followers[2] !== undefined) {
      return followers_jsx(Li, null, followers_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_regular_svg_icons_["faSquare"],
        className: "ficon"
      }), me.Followers[2].nickname);
    } else {
      return followers_jsx("div", null, followers_jsx(external_antd_["Empty"], {
        description: followers_jsx("span", null, "\uC544\uC9C1 \uD314\uB85C\uC6CC\uAC00 \uC5C6\uC5B4\uC694.")
      }));
    }
  };
  const originalImage = `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`;
  return followers_jsx("div", null, followers_jsx(OneFollwer, null, followers_jsx(external_antd_["Card"], {
    title: "Followers",
    extra: followers_jsx("a", {
      onClick: referModal
    }, "More"),
    className: "card1"
  }, followers_jsx(IfFollower, null)), followers_jsx(external_antd_["Modal"], {
    title: me.nickname + " 의 팔로워 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen
  }, followers_jsx(external_antd_["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: me.Followers,
    renderItem: items => followers_jsx(external_antd_["List"].Item, null, followers_jsx(OneFollwer, null, followers_jsx("a", {
      href: `http://localhost:3000/user/${items.id}`
    }, followers_jsx(external_antd_["Avatar"], {
      size: 100,
      src: items.Image.src === originalImage ? originalImage : `http://localhost:3065/${items.Image.src}`
    })), followers_jsx("a", {
      className: "a1",
      href: `http://localhost:3000/user/${items.id}`
    }, items.nickname)))
  }))));
};

// {me.Followers.map((follower) => (
//   <ul key={follower.id}>
//     <p><FontAwesomeIcon icon={faSquare} style={{fontSize:15, color: 'pink'}} /> 
//     <img style={{width: 60}} src={following.Image.src === originalImage ? originalImage : `http://localhost:3065/${follower.Image.src}`} />
//     </p>
//   </ul>
//   ))}

/* harmony default export */ var followers = (Followers);
// CONCATENATED MODULE: ./components/followings.js

var followings_jsx = external_react_default.a.createElement;






const followings_One = external_styled_components_default.a.div.withConfig({
  displayName: "followings__One",
  componentId: "sc-zjx99m-0"
})([".icons{font-size:15px;}.card1{width:360px;margin-left:30px;height:215px;}.img1{width:100%;}.card2{width:110px;}.a1{margin-left:30px;}"]);
const Followings = () => {
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(external_react_["useState"])(false);
  const referModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const IfFollowing = () => {
    if (me.Followings[0] !== undefined) {
      return followings_jsx("li", null, followings_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faSquare"],
        className: "icons"
      }), " ", me.Followings[0].nickname);
    }
    if (me.Followings[1] !== undefined) {
      return followings_jsx("li", null, followings_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faSquare"],
        className: "icons"
      }), me.Followings[1].nickname);
    }
    if (me.Followings[2] !== undefined) {
      return followings_jsx("li", null, followings_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faSquare"],
        className: "icons"
      }), me.Followings[2].nickname);
    } else {
      return followings_jsx("div", null, followings_jsx(external_antd_["Empty"], {
        description: followings_jsx("span", null, "\uC544\uC9C1 \uD314\uB85C\uC789\uC774 \uC5C6\uC5B4\uC694.")
      }));
    }
  };
  const originalImage = `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`;
  return followings_jsx("div", {
    className: "site-card-border-less-wrapper"
  }, followings_jsx(followings_One, null, followings_jsx(external_antd_["Card"], {
    title: "Followings",
    className: "card1",
    extra: followings_jsx("a", {
      onClick: referModal
    }, "More")
  }, followings_jsx(IfFollowing, null)), followings_jsx(external_antd_["Modal"], {
    title: me.nickname + " 의 팔로잉 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen
  }, followings_jsx(external_antd_["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: me.Followings,
    renderItem: items => followings_jsx(external_antd_["List"].Item, null, followings_jsx(followings_One, null, followings_jsx("a", {
      href: `http://localhost:3000/user/${items.id}`
    }, followings_jsx(external_antd_["Avatar"], {
      size: 100,
      src: items.Image.src === originalImage ? originalImage : `http://localhost:3065/${items.Image.src}`
    })), followings_jsx("a", {
      className: "a1",
      href: `http://localhost:3000/user/${items.id}`
    }, items.nickname)))
  }))));
};
/* harmony default export */ var followings = (Followings);
// EXTERNAL MODULE: external "antd/lib/card/Card"
var Card_ = __webpack_require__("EqQl");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./util/dateCellRender.js
var dateCellRender_jsx = external_react_default.a.createElement;





const ImageTag = external_styled_components_default.a.img.withConfig({
  displayName: "dateCellRender__ImageTag",
  componentId: "sc-sgnmcg-0"
})(["width:60px;text-align:center;"]);
const DateCellRender = value => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    userCalendarData,
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  Object(external_react_["useEffect"])(() => {
    dispatch({
      type: user["q" /* LOAD_USER_CALENDAR_DATA_REQUEST */],
      data: me.id
    });
  }, []);

  // console.log("UserCalendarData:::::::::" + JSON.stringify(userCalendarData));
  // console.log("UserCalendarData길이: ", userCalendarData.length);

  const getDayInfo = () => {
    const calendarData = [];
    let diaryMoment;
    for (let i = 0; i < userCalendarData.length; i++) {
      // console.log("생성 날짜",  moment(userCalendarData[i].createdAt).format("YYYY-MM-DD"));
      diaryMoment = external_moment_default()(userCalendarData[i].createdAt).format("YYYY-MM-DD");

      // console.log("다이어리모맨트:", diaryMoment);

      if (diaryMoment) {
        calendarData.push({
          photo: userCalendarData[i].Images[0].src,
          title: userCalendarData[i].lookName,
          date: diaryMoment,
          createdAt: userCalendarData[i].createdAt,
          id: userCalendarData[i].id
        });
      }
    }
    return calendarData || [];
  };
  const PhotoRander = ({
    date,
    photo,
    postId
  }) => {
    // console.log("캘린더 날짜: ", new Date(value).toLocaleDateString());

    switch (external_moment_default()(value).format("YY-MM-DD")) {
      case external_moment_default()(date).format("YY-MM-DD"):
        return dateCellRender_jsx("div", null, dateCellRender_jsx("a", {
          href: `http://localhost:3000/post/${postId}`
        }, dateCellRender_jsx(ImageTag, {
          src: `http://localhost:3065/${photo}`
        })));
      default:
        return dateCellRender_jsx("div", null);
    }
  };
  const NameRander = ({
    date,
    name
  }) => {
    switch (external_moment_default()(value).format("YY-MM-DD")) {
      case external_moment_default()(date).format("YY-MM-DD"):
        return dateCellRender_jsx("h5", null, name);
      default:
        return dateCellRender_jsx("div", null);
    }
  };
  const dayInfo = getDayInfo();
  return dateCellRender_jsx("div", null, dayInfo.map(info => dateCellRender_jsx("div", {
    key: info.id
  }, dateCellRender_jsx(NameRander, {
    date: info.createdAt,
    name: info.title
  }), dateCellRender_jsx(PhotoRander, {
    postId: info.id,
    date: info.createdAt,
    photo: info.photo
  }))));
};
/* harmony default export */ var dateCellRender = (DateCellRender);
// EXTERNAL MODULE: ./store/configureStore.js + 4 modules
var configureStore = __webpack_require__("AQn3");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");

// CONCATENATED MODULE: ./pages/profile.js
var profile_jsx = external_react_default.a.createElement;


















const OneProfile = external_styled_components_default.a.div.withConfig({
  displayName: "profile__OneProfile",
  componentId: "sc-ghb8e3-0"
})([".div1{position:relative;width:1250px;}.div2{float:left;}.section1{margin-top:50px;}.button1{background-color:black;color:white;}.cal1{width:700px;height:1010px;}.row1{margin-top:15px;}"]);
const Profile = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    checkDateError,
    checkDateDone
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const today = new Date();
  const year = today.getFullYear(); // 년도
  const month = today.getMonth() + 1; // 월
  const date = today.getDate(); // 날짜

  // 월, 날짜가 10보다 작으면 앞에 0을 붙여주기
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDate = date < 10 ? `0${date}` : date;
  const todayDateString = `${year}-${formattedMonth}-${formattedDate}`;
  console.log(todayDateString);

  //게시글 작성 전 오늘 작성한 게시글 있나 확인
  const checkDate = Object(external_react_["useCallback"])(() => {
    const formData = new FormData();
    formData.append('todayDateString', todayDateString);
    formData.append('UserId', me.id);
    dispatch({
      type: post["h" /* CHECK_DATE_REQUEST */],
      data: formData
    });
  }, [dispatch, todayDateString, me && me.id]);
  Object(external_react_["useEffect"])(() => {
    if (!(me && me.id)) {
      alert("로그인 후 이용 가능합니다.");
      router_default.a.push('/');
    }
    if (checkDateError) {
      window.alert(checkDateError);
      window.location.reload();
    }
    if (checkDateDone === true) {
      router_default.a.push(`/newLook`);
    }
  }, [checkDateError, checkDateDone, me && me.id]);
  return profile_jsx(OneProfile, null, profile_jsx("div", {
    className: "div1"
  }, profile_jsx("section", {
    className: "section1"
  }, profile_jsx(external_antd_["Row"], null, profile_jsx("h1", null, "MY Profile")), profile_jsx(external_antd_["Row"], null, profile_jsx(external_antd_["Button"], {
    className: "button1",
    onClick: checkDate
  }, "\uC624\uB298\uC758 \uB370\uC77C\uB9AC\uB8E9 \uB9CC\uB4E4\uAE30")), profile_jsx(external_antd_["Row"], null, profile_jsx("div", {
    className: "div2"
  }, profile_jsx(Card_default.a, null, profile_jsx(external_antd_["Calendar"], {
    id: "cal",
    className: "cal1",
    dateCellRender: dateCellRender
  }))), profile_jsx("div", {
    className: "div2"
  }, profile_jsx(myInfo, null), profile_jsx(mention, null), profile_jsx(likeList, null))), profile_jsx(external_antd_["Row"], {
    className: "row1"
  }, profile_jsx(followers, null), profile_jsx(followings, null)))));
};
const getServerSideProps = configureStore["a" /* default */].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  external_axios_default.a.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    external_axios_default.a.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: user["n" /* LOAD_MY_INFO_REQUEST */]
  });
  context.store.dispatch(external_redux_saga_["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ var profile = __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "ionj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
});
//인터넷 익스플로러에서 이머가 작동을 안해서 설정을 해줘야 함.

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CHECK_DATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CHECK_DATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHECK_DATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return NEW_COMMENT_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return NEW_COMMENT_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return NEW_COMMENT_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return UPLOAD_UPDATE_LOOK_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return UPLOAD_UPDATE_LOOK_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_NEW_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_NEW_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_NEW_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_POST_FAILURE; });
/* unused harmony export LOAD_USER_POSTS_REQUEST */
/* unused harmony export LOAD_USER_POSTS_SUCCESS */
/* unused harmony export LOAD_USER_POSTS_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return UPDATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return UPDATE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return REMOVE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return REMOVE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return REMOVE_COMMENT_FAILURE; });
/* unused harmony export UPDATE_COMMENT_RATE_REQUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return UPDATE_COMMENT_RATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return UPDATE_COMMENT_RATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return SEARCH_KEYWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return SEARCH_KEYWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return SEARCH_KEYWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return NEWLOOK_KEYWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return NEWLOOK_KEYWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return NEWLOOK_KEYWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return REMOVE_IMAGE; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");
//import shortId from 'shortid';
//import faker from 'faker';


const initialState = {
  mainPosts: [],
  imagePaths: [],
  singlePost: null,
  keywords: null,
  newLookKeywords: null,
  hasMorePosts: true,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
  uploadUpdateLookimageLoading: false,
  uploadUpdateLookimageError: null,
  uploadUpdateLookimageDone: false,
  updateCommentRateLoading: false,
  updateCommentRateError: null,
  updateCommentRateDone: false,
  checkDateLoading: false,
  checkDateError: null,
  checkDateDone: false,
  searchKeywordLoading: false,
  searchKeywordError: null,
  searchKeywordDone: false
};
const CHECK_DATE_REQUEST = 'CHECK_DATE_REQUEST';
const CHECK_DATE_SUCCESS = 'CHECK_DATE_SUCCESS';
const CHECK_DATE_FAILURE = 'CHECK_DATE_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const NEW_COMMENT_IMAGES_REQUEST = 'NEW_COMMENT_IMAGES_REQUEST';
const NEW_COMMENT_IMAGES_SUCCESS = 'NEW_COMMENT_IMAGES_SUCCESS';
const NEW_COMMENT_IMAGES_FAILURE = 'NEW_COMMENT_IMAGES_FAILURE';
const UPLOAD_UPDATE_LOOK_IMAGE_REQUEST = 'UPLOAD_UPDATE_LOOK_IMAGE_REQUEST';
const UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS = 'UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS';
const UPLOAD_UPDATE_LOOK_IMAGE_FAILURE = 'UPLOAD_UPDATE_LOOK_IMAGE_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const LOAD_NEW_POSTS_REQUEST = 'LOAD_NEW_POSTS_REQUEST';
const LOAD_NEW_POSTS_SUCCESS = 'LOAD_NEW_POSTS_SUCCESS';
const LOAD_NEW_POSTS_FAILURE = 'LOAD_NEW_POSTS_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';
const UPDATE_COMMENT_RATE_REQUEST = 'UPDATE_COMMENT_RATE_REQUEST';
const UPDATE_COMMENT_RATE_SUCCESS = 'UPDATE_COMMENT_RATE_SUCCESS';
const UPDATE_COMMENT_RATE_FAILURE = 'UPDATE_COMMENT_RATE_FAILURE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const SEARCH_KEYWORD_REQUEST = 'SEARCH_KEYWORD_REQUEST';
const SEARCH_KEYWORD_SUCCESS = 'SEARCH_KEYWORD_SUCCESS';
const SEARCH_KEYWORD_FAILURE = 'SEARCH_KEYWORD_FAILURE';
const NEWLOOK_KEYWORD_REQUEST = 'NEWLOOK_KEYWORD_REQUEST';
const NEWLOOK_KEYWORD_SUCCESS = 'NEWLOOK_KEYWORD_SUCCESS';
const NEWLOOK_KEYWORD_FAILURE = 'NEWLOOK_KEYWORD_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';

// export const addPost = (data) => ({
//   type: ADD_POST_REQUEST,
//   data,
// });

// export const addComment = (data) => ({
//   type: ADD_COMMENT_REQUEST,
//   data,
// });

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '제로초'
  },
  Images: [],
  Comments: []
});
const dummyComment = data => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '제로초'
  }
});
// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;
    case RETWEET_REQUEST:
      draft.retweetLoading = true;
      draft.retweetDone = false;
      draft.retweetError = null;
      break;
    case RETWEET_SUCCESS:
      draft.retweetLoading = false;
      draft.retweetDone = true;
      draft.mainPosts.unshift(action.data); //리트윗된 게시글 메인포스트에 추가
      break;
    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      break;
    case UPLOAD_IMAGES_REQUEST:
    case NEW_COMMENT_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;
    case UPLOAD_IMAGES_SUCCESS:
    case NEW_COMMENT_IMAGES_SUCCESS:
      {
        console.log("reducer image", action.data);
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }
    case UPLOAD_IMAGES_FAILURE:
    case NEW_COMMENT_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;
    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;
    case LIKE_POST_SUCCESS:
      {
        const post = draft.singlePost;
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }
    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;
    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;
    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.singlePost;
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }
    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;
    // case LOAD_USER_POSTS_REQUEST:
    case LOAD_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_NEW_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;
    // case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_POSTS_SUCCESS:
    case LOAD_NEW_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePosts = draft.mainPosts.length === 10;
      break;
    // case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_POSTS_FAILURE:
    case LOAD_NEW_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;
    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.singlePost = action.data;
      break;
    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      break;
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;
    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      draft.imagePaths = []; //업로드 했는데 이미지 주소 남아있으면 안되니까 주소 초기화
      break;
    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;
    case UPDATE_POST_REQUEST:
      draft.updatePostLoading = true;
      draft.updatePostDone = false;
      draft.updatePostError = null;
      break;
    case UPDATE_POST_SUCCESS:
      draft.updatePostLoading = false;
      draft.updatePostDone = true;
      console.log("업데이트 완료 후 데이터: ", action.data);
      draft.singlePost = action.data;
      break;
    case UPDATE_POST_FAILURE:
      draft.updatePostLoading = false;
      draft.updatePostError = action.error;
      break;
    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;
    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      break;
    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;
    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;
    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.singlePost;
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        draft.imagePaths = [];
        break;
      }
    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;
    case REMOVE_COMMENT_REQUEST:
      draft.removeCommentLoading = true;
      draft.removeCommentDone = false;
      draft.removeCommentError = null;
    case REMOVE_COMMENT_SUCCESS:
      draft.removeCommentLoading = false;
      draft.removeCommentDone = true;
      console.log("댓글 삭제 리듀서: ", action.data);
      draft.singlePost.Comments = draft.singlePost.Comments.filter(v => v.id !== action.data.id);
      break;
    case REMOVE_COMMENT_FAILURE:
      draft.removeCommentLoading = false;
      draft.removeCommentError = action.error;
      break;
    case UPLOAD_UPDATE_LOOK_IMAGE_REQUEST:
      draft.uploadUpdateLookimageLoading = true;
      draft.uploadUpdateLookimageError = null;
      draft.uploadUpdateLookimageDone = false;
      break;
    case UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS:
      draft.imagePaths = action.data;
      draft.uploadUpdateLookimageDone = true;
      draft.uploadUpdateLookimageLoading = false;
      break;
    case UPLOAD_UPDATE_LOOK_IMAGE_FAILURE:
      draft.uploadUpdateLookimageLoading = false;
      draft.uploadUpdateLookimageError = action.error;
      break;
    case UPDATE_COMMENT_RATE_REQUEST:
      draft.updateCommentRateLoading = true;
      draft.updateCommentRateError = null;
      draft.updateCommentRateDone = false;
      break;
    case UPDATE_COMMENT_RATE_SUCCESS:
      console.log("댓글 점수 수정 성공: ", action.data);
      draft.updateCommentRateLoading = false;
      draft.updateCommentRateDone = true;
      draft.singlePost.rateAverage = action.data.rateAverage;
      break;
    case UPDATE_COMMENT_RATE_FAILURE:
      draft.updateCommentRateLoading = false;
      draft.updateCommentRateError = action.error;
      break;
    case CHECK_DATE_REQUEST:
      draft.checkDateLoading = true;
      draft.checkDateError = null;
      draft.checkDateDone = false;
      break;
    case CHECK_DATE_SUCCESS:
      draft.checkDateLoading = false;
      draft.checkDateDone = true;
      break;
    case CHECK_DATE_FAILURE:
      draft.checkDateLoading = false;
      console.log("날짜 에러 확인", action.data);
      draft.checkDateError = action.data.message;
      break;
    case SEARCH_KEYWORD_REQUEST:
      draft.searchKeywordLoading = true;
      draft.searchKeywordError = null;
      draft.searchKeywordDone = false;
      break;
    case SEARCH_KEYWORD_SUCCESS:
      draft.searchKeywordLoading = false;
      draft.searchKeywordDone = true;
      draft.keywords = action.data;
      break;
    case SEARCH_KEYWORD_FAILURE:
      draft.searchKeywordLoading = false;
      draft.searchKeywordError = action.data;
      break;
    case NEWLOOK_KEYWORD_REQUEST:
      break;
    case NEWLOOK_KEYWORD_SUCCESS:
      draft.searchKeywordLoading = false;
      draft.searchKeywordDone = true;
      draft.newLookKeywords = action.data;
      break;
    case NEWLOOK_KEYWORD_FAILURE:
      break;
    default:
      break;
  }
});
/* harmony default export */ __webpack_exports__["fb"] = (reducer);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });