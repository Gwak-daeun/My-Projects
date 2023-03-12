webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, CHECK_DATE_REQUEST, CHECK_DATE_SUCCESS, CHECK_DATE_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, NEW_COMMENT_IMAGES_REQUEST, NEW_COMMENT_IMAGES_SUCCESS, NEW_COMMENT_IMAGES_FAILURE, UPLOAD_UPDATE_LOOK_IMAGE_REQUEST, UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS, UPLOAD_UPDATE_LOOK_IMAGE_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_NEW_POSTS_REQUEST, LOAD_NEW_POSTS_SUCCESS, LOAD_NEW_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE, UPDATE_COMMENT_RATE_REQUEST, UPDATE_COMMENT_RATE_SUCCESS, UPDATE_COMMENT_RATE_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, SEARCH_KEYWORD_REQUEST, SEARCH_KEYWORD_SUCCESS, SEARCH_KEYWORD_FAILURE, NEWLOOK_KEYWORD_REQUEST, NEWLOOK_KEYWORD_SUCCESS, NEWLOOK_KEYWORD_FAILURE, REMOVE_IMAGE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_DATE_REQUEST", function() { return CHECK_DATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_DATE_SUCCESS", function() { return CHECK_DATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_DATE_FAILURE", function() { return CHECK_DATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_COMMENT_IMAGES_REQUEST", function() { return NEW_COMMENT_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_COMMENT_IMAGES_SUCCESS", function() { return NEW_COMMENT_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_COMMENT_IMAGES_FAILURE", function() { return NEW_COMMENT_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_UPDATE_LOOK_IMAGE_REQUEST", function() { return UPLOAD_UPDATE_LOOK_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS", function() { return UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_UPDATE_LOOK_IMAGE_FAILURE", function() { return UPLOAD_UPDATE_LOOK_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_NEW_POSTS_REQUEST", function() { return LOAD_NEW_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_NEW_POSTS_SUCCESS", function() { return LOAD_NEW_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_NEW_POSTS_FAILURE", function() { return LOAD_NEW_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_REQUEST", function() { return UPDATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_FAILURE", function() { return UPDATE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_REQUEST", function() { return REMOVE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_SUCCESS", function() { return REMOVE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_FAILURE", function() { return REMOVE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_RATE_REQUEST", function() { return UPDATE_COMMENT_RATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_RATE_SUCCESS", function() { return UPDATE_COMMENT_RATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_RATE_FAILURE", function() { return UPDATE_COMMENT_RATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_KEYWORD_REQUEST", function() { return SEARCH_KEYWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_KEYWORD_SUCCESS", function() { return SEARCH_KEYWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_KEYWORD_FAILURE", function() { return SEARCH_KEYWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWLOOK_KEYWORD_REQUEST", function() { return NEWLOOK_KEYWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWLOOK_KEYWORD_SUCCESS", function() { return NEWLOOK_KEYWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWLOOK_KEYWORD_FAILURE", function() { return NEWLOOK_KEYWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
//import shortId from 'shortid';
//import faker from 'faker';


var initialState = {
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
var CHECK_DATE_REQUEST = 'CHECK_DATE_REQUEST';
var CHECK_DATE_SUCCESS = 'CHECK_DATE_SUCCESS';
var CHECK_DATE_FAILURE = 'CHECK_DATE_FAILURE';
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var NEW_COMMENT_IMAGES_REQUEST = 'NEW_COMMENT_IMAGES_REQUEST';
var NEW_COMMENT_IMAGES_SUCCESS = 'NEW_COMMENT_IMAGES_SUCCESS';
var NEW_COMMENT_IMAGES_FAILURE = 'NEW_COMMENT_IMAGES_FAILURE';
var UPLOAD_UPDATE_LOOK_IMAGE_REQUEST = 'UPLOAD_UPDATE_LOOK_IMAGE_REQUEST';
var UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS = 'UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS';
var UPLOAD_UPDATE_LOOK_IMAGE_FAILURE = 'UPLOAD_UPDATE_LOOK_IMAGE_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var LOAD_NEW_POSTS_REQUEST = 'LOAD_NEW_POSTS_REQUEST';
var LOAD_NEW_POSTS_SUCCESS = 'LOAD_NEW_POSTS_SUCCESS';
var LOAD_NEW_POSTS_FAILURE = 'LOAD_NEW_POSTS_FAILURE';
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
var LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
var LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
var LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
var LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
var LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
var LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
var UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
var UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
var REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
var REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';
var UPDATE_COMMENT_RATE_REQUEST = 'UPDATE_COMMENT_RATE_REQUEST';
var UPDATE_COMMENT_RATE_SUCCESS = 'UPDATE_COMMENT_RATE_SUCCESS';
var UPDATE_COMMENT_RATE_FAILURE = 'UPDATE_COMMENT_RATE_FAILURE';
var RETWEET_REQUEST = 'RETWEET_REQUEST';
var RETWEET_SUCCESS = 'RETWEET_SUCCESS';
var RETWEET_FAILURE = 'RETWEET_FAILURE';
var SEARCH_KEYWORD_REQUEST = 'SEARCH_KEYWORD_REQUEST';
var SEARCH_KEYWORD_SUCCESS = 'SEARCH_KEYWORD_SUCCESS';
var SEARCH_KEYWORD_FAILURE = 'SEARCH_KEYWORD_FAILURE';
var NEWLOOK_KEYWORD_REQUEST = 'NEWLOOK_KEYWORD_REQUEST';
var NEWLOOK_KEYWORD_SUCCESS = 'NEWLOOK_KEYWORD_SUCCESS';
var NEWLOOK_KEYWORD_FAILURE = 'NEWLOOK_KEYWORD_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';

// export const addPost = (data) => ({
//   type: ADD_POST_REQUEST,
//   data,
// });

// export const addComment = (data) => ({
//   type: ADD_COMMENT_REQUEST,
//   data,
// });

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: '제로초'
    },
    Images: [],
    Comments: []
  };
};
var dummyComment = function dummyComment(data) {
  return {
    id: shortId.generate(),
    content: data,
    User: {
      id: 1,
      nickname: '제로초'
    }
  };
};
// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
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
          var post = draft.singlePost;
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
          var _post = draft.singlePost;
          _post.Likers = _post.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
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
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
        });
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
          var _post2 = draft.singlePost;
          _post2.Comments.unshift(action.data);
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
        draft.singlePost.Comments = draft.singlePost.Comments.filter(function (v) {
          return v.id !== action.data.id;
        });
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
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwic2luZ2xlUG9zdCIsImtleXdvcmRzIiwibmV3TG9va0tleXdvcmRzIiwiaGFzTW9yZVBvc3RzIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwidXBkYXRlUG9zdExvYWRpbmciLCJ1cGRhdGVQb3N0RG9uZSIsInVwZGF0ZVBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJyZW1vdmVDb21tZW50TG9hZGluZyIsInJlbW92ZUNvbW1lbnREb25lIiwicmVtb3ZlQ29tbWVudEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJ1cGxvYWRVcGRhdGVMb29raW1hZ2VMb2FkaW5nIiwidXBsb2FkVXBkYXRlTG9va2ltYWdlRXJyb3IiLCJ1cGxvYWRVcGRhdGVMb29raW1hZ2VEb25lIiwidXBkYXRlQ29tbWVudFJhdGVMb2FkaW5nIiwidXBkYXRlQ29tbWVudFJhdGVFcnJvciIsInVwZGF0ZUNvbW1lbnRSYXRlRG9uZSIsImNoZWNrRGF0ZUxvYWRpbmciLCJjaGVja0RhdGVFcnJvciIsImNoZWNrRGF0ZURvbmUiLCJzZWFyY2hLZXl3b3JkTG9hZGluZyIsInNlYXJjaEtleXdvcmRFcnJvciIsInNlYXJjaEtleXdvcmREb25lIiwiQ0hFQ0tfREFURV9SRVFVRVNUIiwiQ0hFQ0tfREFURV9TVUNDRVNTIiwiQ0hFQ0tfREFURV9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTkVXX0NPTU1FTlRfSU1BR0VTX1JFUVVFU1QiLCJORVdfQ09NTUVOVF9JTUFHRVNfU1VDQ0VTUyIsIk5FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFIiwiVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1QiLCJVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfU1VDQ0VTUyIsIlVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCIsIkxPQURfTkVXX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX05FV19QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiVVBEQVRFX1BPU1RfUkVRVUVTVCIsIlVQREFURV9QT1NUX1NVQ0NFU1MiLCJVUERBVEVfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwiVVBEQVRFX0NPTU1FTlRfUkFURV9SRVFVRVNUIiwiVVBEQVRFX0NPTU1FTlRfUkFURV9TVUNDRVNTIiwiVVBEQVRFX0NPTU1FTlRfUkFURV9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCIsIlNFQVJDSF9LRVlXT1JEX1NVQ0NFU1MiLCJTRUFSQ0hfS0VZV09SRF9GQUlMVVJFIiwiTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QiLCJORVdMT09LX0tFWVdPUkRfU1VDQ0VTUyIsIk5FV0xPT0tfS0VZV09SRF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiZHVtbXlQb3N0IiwiZGF0YSIsImlkIiwiY29udGVudCIsIlVzZXIiLCJuaWNrbmFtZSIsIkltYWdlcyIsIkNvbW1lbnRzIiwiZHVtbXlDb21tZW50Iiwic2hvcnRJZCIsImdlbmVyYXRlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidHlwZSIsImZpbHRlciIsInYiLCJpIiwidW5zaGlmdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiY29uY2F0IiwibGVuZ3RoIiwiUG9zdElkIiwicmF0ZUF2ZXJhZ2UiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVzQztBQUUvQixJQUFNQSxZQUFZLEdBQUc7RUFDMUJDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFVBQVUsRUFBRSxFQUFFO0VBQ2RDLFVBQVUsRUFBRSxJQUFJO0VBQ2hCQyxRQUFRLEVBQUUsSUFBSTtFQUNkQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMsWUFBWSxFQUFFLElBQUk7RUFDbEJDLG1CQUFtQixFQUFFLEtBQUs7RUFDMUJDLGdCQUFnQixFQUFFLEtBQUs7RUFDdkJDLGlCQUFpQixFQUFFLElBQUk7RUFDdkJDLGVBQWUsRUFBRSxLQUFLO0VBQ3RCQyxZQUFZLEVBQUUsS0FBSztFQUNuQkMsYUFBYSxFQUFFLElBQUk7RUFDbkJDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMsZ0JBQWdCLEVBQUUsS0FBSztFQUN2QkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxlQUFlLEVBQUUsS0FBSztFQUN0QkMs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LGtCQUFrQjtRQUNyQjBFLEtBQUssQ0FBQ2xGLGdCQUFnQixHQUFFLEtBQUs7UUFDN0J5RixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVWLE1BQU0sQ0FBQ1osSUFBSSxDQUFDO1FBQ3BDYyxLQUFLLENBQUNqRixjQUFjLEdBQUkrRSxNQUFNLENBQUNaLElBQUksQ0FBQytCLE9BQU87UUFDM0M7TUFDQSxLQUFLdkMsc0JBQXNCO1FBRXpCc0IsS0FBSyxDQUFDL0Usb0JBQW9CLEdBQUcsSUFBSTtRQUNqQytFLEtBQUssQ0FBQzlFLGtCQUFrQixHQUFHLElBQUk7UUFDL0I4RSxLQUFLLENBQUM3RSxpQkFBaUIsR0FBRyxLQUFLO1FBQy9CO01BQ0YsS0FBS3dELHNCQUFzQjtRQUN6QnFCLEtBQUssQ0FBQy9FLG9CQUFvQixHQUFHLEtBQUs7UUFDbEMrRSxLQUFLLENBQUM3RSxpQkFBaUIsR0FBRyxJQUFJO1FBQzlCNkUsS0FBSyxDQUFDNUgsUUFBUSxHQUFHMEgsTUFBTSxDQUFDWixJQUFJO1FBQzVCO01BRUYsS0FBS04sc0JBQXNCO1FBRXpCb0IsS0FBSyxDQUFDL0Usb0JBQW9CLEdBQUcsS0FBSztRQUNsQytFLEtBQUssQ0FBQzlFLGtCQUFrQixHQUFJNEUsTUFBTSxDQUFDWixJQUFJO1FBQ3ZDO01BQ0EsS0FBS0wsdUJBQXVCO1FBQzFCO01BQ0YsS0FBS0MsdUJBQXVCO1FBQzFCa0IsS0FBSyxDQUFDL0Usb0JBQW9CLEdBQUcsS0FBSztRQUNsQytFLEtBQUssQ0FBQzdFLGlCQUFpQixHQUFHLElBQUk7UUFDOUI2RSxLQUFLLENBQUMzSCxlQUFlLEdBQUd5SCxNQUFNLENBQUNaLElBQUk7UUFDbkM7TUFDQSxLQUFLSCx1QkFBdUI7UUFDMUI7TUFDUjtRQUNBO0lBQU07RUFFWixDQUFDLENBQUM7QUFBQTtBQUVhYSxzRUFBTyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmEyZDFkMDE4YzliYTIwM2MyODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbi8vaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgc2luZ2xlUG9zdDogbnVsbCxcclxuICBrZXl3b3JkczogbnVsbCxcclxuICBuZXdMb29rS2V5d29yZHM6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHVwZGF0ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1cGRhdGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgdXBkYXRlUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICByZXR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgcmV0d2VldEVycm9yOiBudWxsLFxyXG4gIHVwbG9hZFVwZGF0ZUxvb2tpbWFnZUxvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZFVwZGF0ZUxvb2tpbWFnZUVycm9yOiBudWxsLFxyXG4gIHVwbG9hZFVwZGF0ZUxvb2tpbWFnZURvbmU6IGZhbHNlLFxyXG4gIHVwZGF0ZUNvbW1lbnRSYXRlTG9hZGluZzogZmFsc2UsXHJcbiAgdXBkYXRlQ29tbWVudFJhdGVFcnJvcjogbnVsbCxcclxuICB1cGRhdGVDb21tZW50UmF0ZURvbmU6IGZhbHNlLFxyXG4gIGNoZWNrRGF0ZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoZWNrRGF0ZUVycm9yOiBudWxsLFxyXG4gIGNoZWNrRGF0ZURvbmU6IGZhbHNlLFxyXG4gIHNlYXJjaEtleXdvcmRMb2FkaW5nOiBmYWxzZSxcclxuICBzZWFyY2hLZXl3b3JkRXJyb3I6IG51bGwsXHJcbiAgc2VhcmNoS2V5d29yZERvbmU6IGZhbHNlLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDSEVDS19EQVRFX1JFUVVFU1QgPSAnQ0hFQ0tfREFURV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIRUNLX0RBVEVfU1VDQ0VTUyA9ICdDSEVDS19EQVRFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfREFURV9GQUlMVVJFID0gJ0NIRUNLX0RBVEVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19DT01NRU5UX0lNQUdFU19SRVFVRVNUID0gJ05FV19DT01NRU5UX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE5FV19DT01NRU5UX0lNQUdFU19TVUNDRVNTID0gJ05FV19DT01NRU5UX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE5FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFID0gJ05FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCA9J1VQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9TVUNDRVNTID0nVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX0ZBSUxVUkUgPSdVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX05FV19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTkVXX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9ORVdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX05FV19QT1NUU19GQUlMVVJFID0gJ0xPQURfTkVXX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9SRVFVRVNUID0gJ1VQREFURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1RfU1VDQ0VTUyA9ICdVUERBVEVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUX0ZBSUxVUkUgPSAnVVBEQVRFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUID0gJ1JFTU9WRV9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyA9ICdSRU1PVkVfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUgPSAnUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTU1FTlRfUkFURV9SRVFVRVNUID0gJ1VQREFURV9DT01NRU5UX1JBVEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ09NTUVOVF9SQVRFX1NVQ0NFU1MgPSAnVVBEQVRFX0NPTU1FTlRfUkFURV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DT01NRU5UX1JBVEVfRkFJTFVSRSA9ICdVUERBVEVfQ09NTUVOVF9SQVRFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9SRVFVRVNUID0gJ1NFQVJDSF9LRVlXT1JEX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyA9ICdTRUFSQ0hfS0VZV09SRF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUgPSAnU0VBUkNIX0tFWVdPUkRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QgPSAnTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1MgPSAnTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTkVXTE9PS19LRVlXT1JEX0ZBSUxVUkUgPSAnTkVXTE9PS19LRVlXT1JEX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4vLyAgIGRhdGEsXHJcbi8vIH0pO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuLy8gICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4vLyAgIGRhdGEsXHJcbi8vIH0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gIH0sXHJcbn0pO1xyXG4vLyDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7IC8v66as7Yq47JyX65CcIOqyjOyLnOq4gCDrqZTsnbjtj6zsiqTtirjsl5Ag7LaU6rCAXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgIGNhc2UgTkVXX0NPTU1FTlRfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBORVdfQ09NTUVOVF9JTUFHRVNfU1VDQ0VTUzpcclxuICAgICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVkdWNlciBpbWFnZVwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgIGNhc2UgTkVXX0NPTU1FTlRfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOntcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0LnNpbmdsZVBvc3Q7XHJcbiAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOntcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0LnNpbmdsZVBvc3Q7XHJcbiAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgY2FzZSBMT0FEX05FV19QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBMT0FEX05FV19QT1NUU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX05FV19QT1NUU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdOyAvL+yXheuhnOuTnCDtlojripTrjbAg7J2066+47KeAIOyjvOyGjCDrgqjslYTsnojsnLzrqbQg7JWI65CY64uI6rmMIOyjvOyGjCDstIjquLDtmZRcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUERBVEVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7JeF642w7J207Yq4IOyZhOujjCDtm4Qg642w7J207YSwOiBcIiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQuc2luZ2xlUG9zdDtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIFxyXG4gICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IG51bGw7ICAgIFxyXG4gICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi64yT6riAIOyCreygnCDrpqzrk4DshJw6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LnNpbmdsZVBvc3QuQ29tbWVudHMgPSBkcmFmdC5zaW5nbGVQb3N0LkNvbW1lbnRzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudXBsb2FkVXBkYXRlTG9va2ltYWdlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZUVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQudXBsb2FkVXBkYXRlTG9va2ltYWdlRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQudXBsb2FkVXBkYXRlTG9va2ltYWdlRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cGxvYWRVcGRhdGVMb29raW1hZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVVBEQVRFX0NPTU1FTlRfUkFURV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRSYXRlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudFJhdGVFcnJvciA9ICBudWxsO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRSYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9DT01NRU5UX1JBVEVfU1VDQ0VTUzpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuMk+q4gCDsoJDsiJgg7IiY7KCVIOyEseqztTogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50UmF0ZUxvYWRpbmcgPSBmYWxzZTsgXHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudFJhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgZHJhZnQuc2luZ2xlUG9zdC5yYXRlQXZlcmFnZSA9IGFjdGlvbi5kYXRhLnJhdGVBdmVyYWdlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9DT01NRU5UX1JBVEVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50UmF0ZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50UmF0ZUVycm9yID0gIGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQ0hFQ0tfREFURV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoZWNrRGF0ZUxvYWRpbmc9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlRXJyb3IgPSAgbnVsbDtcclxuICAgICAgICBkcmFmdC5jaGVja0RhdGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgIENIRUNLX0RBVEVfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5jaGVja0RhdGVMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGVja0RhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEVDS19EQVRFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLrgqDsp5wg7JeQ65+sIO2ZleyduFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlRXJyb3IgPSAgYWN0aW9uLmRhdGEubWVzc2FnZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1Q6XHJcblxyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZEVycm9yID0gbnVsbDtcclxuICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1M6XHJcbiAgICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgZHJhZnQua2V5d29yZHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkU6XHJcblxyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRFcnJvciA9ICBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIE5FV0xPT0tfS0VZV09SRF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubmV3TG9va0tleXdvcmRzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE5FV0xPT0tfS0VZV09SRF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9