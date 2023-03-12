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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var _pages_css_calendar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/css/calendar.css */ "./pages/css/calendar.css");
/* harmony import */ var _pages_css_calendar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_css_calendar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_css_applayout_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/css/applayout.css */ "./pages/css/applayout.css");
/* harmony import */ var _pages_css_applayout_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_css_applayout_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Fashionary = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Fashionary")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }));
};
//_app.js는 pages들의 공통 부분
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(Fashionary));

/***/ }),

/***/ "./pages/css/applayout.css":
/*!*********************************!*\
  !*** ./pages/css/applayout.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/calendar.css":
/*!********************************!*\
  !*** ./pages/css/calendar.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);




const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;
    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, CHECK_DATE_REQUEST, CHECK_DATE_SUCCESS, CHECK_DATE_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, NEW_COMMENT_IMAGES_REQUEST, NEW_COMMENT_IMAGES_SUCCESS, NEW_COMMENT_IMAGES_FAILURE, UPLOAD_UPDATE_LOOK_IMAGE_REQUEST, UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS, UPLOAD_UPDATE_LOOK_IMAGE_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_NEW_POSTS_REQUEST, LOAD_NEW_POSTS_SUCCESS, LOAD_NEW_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE, UPDATE_COMMENT_RATE_REQUEST, UPDATE_COMMENT_RATE_SUCCESS, UPDATE_COMMENT_RATE_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, SEARCH_KEYWORD_REQUEST, SEARCH_KEYWORD_SUCCESS, SEARCH_KEYWORD_FAILURE, NEWLOOK_KEYWORD_REQUEST, NEWLOOK_KEYWORD_SUCCESS, NEWLOOK_KEYWORD_FAILURE, REMOVE_IMAGE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
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
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_CALENDAR_DATA_REQUEST, LOAD_USER_CALENDAR_DATA_SUCCESS, LOAD_USER_CALENDAR_DATA_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_INFO_REQUEST, CHANGE_INFO_SUCCESS, CHANGE_INFO_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, UPLOAD_PROFILE_IMAGE_REQUEST, UPLOAD_PROFILE_IMAGE_SUCCESS, UPLOAD_PROFILE_IMAGE_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_CALENDAR_DATA_REQUEST", function() { return LOAD_USER_CALENDAR_DATA_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_CALENDAR_DATA_SUCCESS", function() { return LOAD_USER_CALENDAR_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_CALENDAR_DATA_FAILURE", function() { return LOAD_USER_CALENDAR_DATA_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_INFO_REQUEST", function() { return CHANGE_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_INFO_SUCCESS", function() { return CHANGE_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_INFO_FAILURE", function() { return CHANGE_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PROFILE_IMAGE_REQUEST", function() { return UPLOAD_PROFILE_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PROFILE_IMAGE_SUCCESS", function() { return UPLOAD_PROFILE_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PROFILE_IMAGE_FAILURE", function() { return UPLOAD_PROFILE_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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
const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: '제로초',
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: '부기초'
  }, {
    nickname: 'Chanho Lee'
  }, {
    nickname: 'neue zeal'
  }],
  Followers: [{
    nickname: '부기초'
  }, {
    nickname: 'Chanho Lee'
  }, {
    nickname: 'neue zeal'
  }]
});
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

//draft를 바꾸면 immer가 state를 불변성 있게 알아서 바꿔줌      
//화살표가 return 역할을 대신함.                                 
const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_1__["default"])(state, draft => {
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
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
//백의 app.js에서 Credentials: true를 했기 때문(쿠키 전달)
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

//fork: 해당 함수를 실행한다는 뜻. call과 다름.
//fork는 비동기, call은 동기

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function retweetAPI(data) {
  const postId = data.get('postId');
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${postId}/reference`, data);
}
function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}
function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post/images', data);
}
function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}
function* newCommentImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEW_COMMENT_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEW_COMMENT_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

// function updateImagesAPI(data){
//   return axios.post('/post/images', data);
// }

function* updateImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_UPDATE_LOOK_IMAGE_FAILURE"],
      error: err.response.data
    });
  }
}
function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);
}
function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}/like`);
}
function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/post/${data}`);
}
function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
} //주소에 그냥 한글,특수문자가 들어가면 에러나서 encodeURIComponent로 감싸줘야 한다.

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}
function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts/allLooks?lastId=${lastId || 0}`);
}
function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function loadNewPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts`);
}
function* loadNewPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadNewPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_NEW_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_NEW_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', data);
}
function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function updatePostAPI(data) {
  const postId = data.get('postId');
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${postId}`, data);
}
function* updatePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(updatePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`);
}
function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}
function removeCommentAPI(data) {
  const commentId = data.get('commentId');
  console.log("댓글 삭제 아이디: ", commentId);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/comment/${commentId}`);
}
function updateCommentRateAPI(data) {
  const commentId = data.get('commentId');
  console.log("댓글 점수 아이디: ", commentId);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/commentRate/${commentId}`, data);
}
function* removeComment(action) {
  try {
    const removeResult = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeCommentAPI, action.data);
    const updateResult = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(updateCommentRateAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_SUCCESS"],
      data: removeResult.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_COMMENT_RATE_SUCCESS"],
      data: updateResult.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_FAILURE"],
      data: err.response.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_COMMENT_RATE_FAILURE"],
      data: err.response.data
    });
  }
}
function addCommentAPI(data) {
  const postId = data.get('postId');
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${postId}/comment`, data);
}
function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}
function checkDateAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/checkDate`, data);
}
function* checkDate(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(checkDateAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["CHECK_DATE_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error("날짜 확인 에러 확인", err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["CHECK_DATE_FAILURE"],
      data: err.response.data
    });
  }
}
function searchKeywordAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/hashtag/keywords/${encodeURIComponent(data)}`, data);
}
function* searchKeyword(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(searchKeywordAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEARCH_KEYWORD_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEARCH_KEYWORD_FAILURE"],
      data: err.response.data
    });
  }
}
function newLookKeywordAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/hashtag/keywords/${encodeURIComponent(data)}`, data);
}
function* newLookKeyword(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(newLookKeywordAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEWLOOK_KEYWORD_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEWLOOK_KEYWORD_FAILURE"],
      data: err.response.data
    });
  }
}
function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}
function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}
function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}
function* watchNewCommentImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEW_COMMENT_IMAGES_REQUEST"], newCommentImages);
}
function* watchUpdateImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_UPDATE_LOOK_IMAGE_REQUEST"], updateImages);
}
function* watchUnLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}
function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}
function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

// function* watchLoadUserPosts() {
//   yield throttle(5000, LOAD_USER_POSTS_REQUEST, loadUserPosts);
// }

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}
function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}
function* watchUpdatePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_POST_REQUEST"], updatePost);
}
function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}
function* watchRemoveComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_REQUEST"], removeComment);
}
function* watchLoadNewPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_NEW_POSTS_REQUEST"], loadNewPosts);
}
function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}
function* watchCheckDate() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["CHECK_DATE_REQUEST"], checkDate);
}
function* watchSearchKeyword() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEARCH_KEYWORD_REQUEST"], searchKeyword);
}
function* watchNewLookKeyword() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEWLOOK_KEYWORD_REQUEST"], newLookKeyword);
}
function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchNewCommentImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdateImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdatePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchNewLookKeyword), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSearchKeyword), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchCheckDate), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadNewPosts)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



function loadUserCalendarDataAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/${data}/posts`);
}
function* loadUserCalendarData(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserCalendarDataAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_CALENDAR_DATA_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_CALENDAR_DATA_FAILURE"],
      error: err.response.data
    });
  }
}
function removeFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/follower/${data}`);
}
function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}
function loadUserAPI(data) {
  console.log("로드 유저 데이터: ", data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/${data}`);
}
function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}
function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user/followers', data);
}
function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}
function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user/followings', data);
}
function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}
function changeInfoAPI(data) {
  console.log('sagas data::::' + JSON.stringify(data));
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch('/user/info', data);
}
function* changeInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeInfoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_INFO_FAILURE"],
      error: err.response.data
    });
  }
}
function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user');
}
function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}
function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/user/${data}/follow`, data);
}
function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}
function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/${data}/unfollow`, data);
}
function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}
function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/login', data);
}

//action = login, action.type: 로그인 리퀘스트, action.data: 로그인 데이터
function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loginAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}
function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/logout');
}
function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}
function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user', data); //data는 email, password, nickname이라는 객체
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}
function uploadImagesAPI(data) {
  console.log("saga image::::", data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch('/user/profileImage', data);
}
function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_PROFILE_IMAGE_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_PROFILE_IMAGE_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}
function* watchUploadProfile() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_PROFILE_IMAGE_REQUEST"], uploadImages);
}
function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}
function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}
function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}
function* watchInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_INFO_REQUEST"], changeInfo);
}
function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}
function* watchLoadUserCalendarData() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_CALENDAR_DATA_REQUEST"], loadUserCalendarData);
}
function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}
function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}
function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}
function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}
function* watchSignUp() {
  console.log("watchSinUp");
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}
function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadProfile), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUserCalendarData), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);
}

//put이 dispatch의 역할, 아래 세개가 이벤트리스너와 같은 역할
//take는 일회성이라 while문으로 감싸야 무한히 실행 가능
//while take는 동기적으로 동작하지만 takeEvery는 비동기로 동작. takeEvery로 while문 대체
//takeLatest: 실수로 여러번 동시에 눌러도 가장 마지막 요청만 수행.로딩중인 앞선 요청이 해당
//takeLatest는 응답을 취소하는거지 요청을 취소하는게 아님.
//takeLeading: takeLatest와 반대로 가장 처음 요청만 수행

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");






const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};
const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
});
//인터넷 익스플로러에서 이머가 작동을 안해서 설정을 해줘야 함.

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3V0aWwvcHJvZHVjZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJGYXNoaW9uYXJ5IiwiQ29tcG9uZW50Iiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwic2luZ2xlUG9zdCIsImtleXdvcmRzIiwibmV3TG9va0tleXdvcmRzIiwiaGFzTW9yZVBvc3RzIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwidXBkYXRlUG9zdExvYWRpbmciLCJ1cGRhdGVQb3N0RG9uZSIsInVwZGF0ZVBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJyZW1vdmVDb21tZW50TG9hZGluZyIsInJlbW92ZUNvbW1lbnREb25lIiwicmVtb3ZlQ29tbWVudEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJ1cGxvYWRVcGRhdGVMb29raW1hZ2VMb2FkaW5nIiwidXBsb2FkVXBkYXRlTG9va2ltYWdlRXJyb3IiLCJ1cGxvYWRVcGRhdGVMb29raW1hZ2VEb25lIiwidXBkYXRlQ29tbWVudFJhdGVMb2FkaW5nIiwidXBkYXRlQ29tbWVudFJhdGVFcnJvciIsInVwZGF0ZUNvbW1lbnRSYXRlRG9uZSIsImNoZWNrRGF0ZUxvYWRpbmciLCJjaGVja0RhdGVFcnJvciIsImNoZWNrRGF0ZURvbmUiLCJzZWFyY2hLZXl3b3JkTG9hZGluZyIsInNlYXJjaEtleXdvcmRFcnJvciIsInNlYXJjaEtleXdvcmREb25lIiwiQ0hFQ0tfREFURV9SRVFVRVNUIiwiQ0hFQ0tfREFURV9TVUNDRVNTIiwiQ0hFQ0tfREFURV9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTkVXX0NPTU1FTlRfSU1BR0VTX1JFUVVFU1QiLCJORVdfQ09NTUVOVF9JTUFHRVNfU1VDQ0VTUyIsIk5FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFIiwiVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1QiLCJVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfU1VDQ0VTUyIsIlVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCIsIkxPQURfTkVXX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX05FV19QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiVVBEQVRFX1BPU1RfUkVRVUVTVCIsIlVQREFURV9QT1NUX1NVQ0NFU1MiLCJVUERBVEVfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwiVVBEQVRFX0NPTU1FTlRfUkFURV9SRVFVRVNUIiwiVVBEQVRFX0NPTU1FTlRfUkFURV9TVUNDRVNTIiwiVVBEQVRFX0NPTU1FTlRfUkFURV9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCIsIlNFQVJDSF9LRVlXT1JEX1NVQ0NFU1MiLCJTRUFSQ0hfS0VZV09SRF9GQUlMVVJFIiwiTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QiLCJORVdMT09LX0tFWVdPUkRfU1VDQ0VTUyIsIk5FV0xPT0tfS0VZV09SRF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiZHVtbXlQb3N0IiwiZGF0YSIsImlkIiwiY29udGVudCIsIlVzZXIiLCJuaWNrbmFtZSIsIkltYWdlcyIsIkNvbW1lbnRzIiwiZHVtbXlDb21tZW50Iiwic2hvcnRJZCIsImdlbmVyYXRlIiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImZpbHRlciIsInYiLCJpIiwidW5zaGlmdCIsImVycm9yIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImNvbmNhdCIsImxlbmd0aCIsIlBvc3RJZCIsInJhdGVBdmVyYWdlIiwibWVzc2FnZSIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZFVzZXJDYWxlbmRhckRhdGFMb2FkaW5nIiwibG9hZFVzZXJDYWxlbmRhckRhdGFEb25lIiwibG9hZFVzZXJDYWxlbmRhckRhdGFFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlSW5mb0xvYWRpbmciLCJjaGFuZ2VJbmZvRG9uZSIsImNoYW5nZUluZm9FcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsIm1lIiwidXNlckluZm8iLCJ1c2VyQ2FsZW5kYXJEYXRhIiwibG9naW5BY3Rpb24iLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwibG9naW5TdWNjZXNzQWN0aW9uIiwiY2F0Y2giLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9SRVFVRVNUIiwiTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfU1VDQ0VTUyIsIkxPQURfVVNFUl9DQUxFTkRBUl9EQVRBX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfSU5GT19SRVFVRVNUIiwiQ0hBTkdFX0lORk9fU1VDQ0VTUyIsIkNIQU5HRV9JTkZPX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJVUExPQURfUFJPRklMRV9JTUFHRV9SRVFVRVNUIiwiVVBMT0FEX1BST0ZJTEVfSU1BR0VfU1VDQ0VTUyIsIlVQTE9BRF9QUk9GSUxFX0lNQUdFX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImluZm8iLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwicmV0d2VldEFQSSIsInBvc3RJZCIsImdldCIsInJldHdlZXQiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJuZXdDb21tZW50SW1hZ2VzIiwidXBkYXRlSW1hZ2VzIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsImRlbGV0ZSIsInVubGlrZVBvc3QiLCJsb2FkUG9zdEFQSSIsImxvYWRQb3N0IiwibG9hZEhhc2h0YWdQb3N0c0FQSSIsImxhc3RJZCIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvYWRIYXNodGFnUG9zdHMiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJsb2FkTmV3UG9zdHNBUEkiLCJsb2FkTmV3UG9zdHMiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsInVwZGF0ZVBvc3RBUEkiLCJ1cGRhdGVQb3N0IiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJyZW1vdmVDb21tZW50QVBJIiwiY29tbWVudElkIiwidXBkYXRlQ29tbWVudFJhdGVBUEkiLCJyZW1vdmVDb21tZW50IiwicmVtb3ZlUmVzdWx0IiwidXBkYXRlUmVzdWx0IiwiYWRkQ29tbWVudEFQSSIsImFkZENvbW1lbnQiLCJjaGVja0RhdGVBUEkiLCJjaGVja0RhdGUiLCJzZWFyY2hLZXl3b3JkQVBJIiwic2VhcmNoS2V5d29yZCIsIm5ld0xvb2tLZXl3b3JkQVBJIiwibmV3TG9va0tleXdvcmQiLCJ3YXRjaFJldHdlZXQiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hOZXdDb21tZW50SW1hZ2VzIiwid2F0Y2hVcGRhdGVJbWFnZXMiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwid2F0Y2hMb2FkUG9zdCIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoVXBkYXRlUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoUmVtb3ZlQ29tbWVudCIsIndhdGNoTG9hZE5ld1Bvc3RzIiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hDaGVja0RhdGUiLCJ3YXRjaFNlYXJjaEtleXdvcmQiLCJ3YXRjaE5ld0xvb2tLZXl3b3JkIiwibG9hZFVzZXJDYWxlbmRhckRhdGFBUEkiLCJsb2FkVXNlckNhbGVuZGFyRGF0YSIsInJlbW92ZUZvbGxvd2Vyc0FQSSIsInJlbW92ZUZvbGxvd2VyIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsImNoYW5nZUluZm9BUEkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hhbmdlSW5mbyIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsImRlbGF5IiwibG9naW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoVXBsb2FkUHJvZmlsZSIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvYWRGb2xsb3dlcnMiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hJbmZvIiwid2F0Y2hMb2FkVXNlciIsIndhdGNoTG9hZFVzZXJDYWxlbmRhckRhdGEiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImxvZ2dlck1pZGRsZXdhcmUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiYXJncyIsImVuYWJsZUVTNSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RjBCO0FBQ0U7QUFDQztBQUNpQjtBQUNYO0FBQ0E7QUFFbkMsTUFBT0EsVUFBVSxHQUFFLENBQUM7RUFBQ0M7QUFBUyxDQUFDLEtBQUs7RUFFaEMsT0FDSSxtRUFDQSxNQUFDLGdEQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRDtJQUFNLE9BQU8sRUFBQyxPQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRSxFQUN2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGdCQUF5QixDQUN0QixFQUNQLE1BQUMsU0FBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDVjtBQUdYLENBQUM7QUFDRDtBQUNlQyw0SEFBTyxDQUFDQyxTQUFTLENBQUNILFVBQVUsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckI1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QztBQUNuQjtBQUNBO0FBQ2M7QUFFeEMsTUFBTUksV0FBVyxHQUFHLENBQUNDLEtBQUssRUFBRUMsTUFBTSxLQUFLO0VBQ25DLFFBQU9BLE1BQU0sQ0FBQ0MsSUFBSTtJQUNkLEtBQUtDLDBEQUFPO01BQ1JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRUosTUFBTSxDQUFDO01BQzlCLE9BQU9BLE1BQU0sQ0FBQ0ssT0FBTztJQUN6QjtNQUFTO1FBQ0wsTUFBTUMsZUFBZSxHQUFHQyw2REFBZSxDQUFDO1VBQ3BDQyxtREFBSTtVQUNKQyxtREFBSUE7UUFDUixDQUFDLENBQUM7UUFDRixPQUFPSCxlQUFlLENBQUNQLEtBQUssRUFBRUMsTUFBTSxDQUFDO01BQ3pDO0VBQUM7QUFFVCxDQUFDO0FBR2NGLDBFQUFXLEU7Ozs7Ozs7Ozs7OztBQ3JCMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVzQztBQUUvQixNQUFNWSxZQUFZLEdBQUc7RUFDMUJDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFVBQVUsRUFBRSxFQUFFO0VBQ2RDLFVBQVUsRUFBRSxJQUFJO0VBQ2hCQyxRQUFRLEVBQUUsSUFBSTtFQUNkQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMsWUFBWSxFQUFFLElBQUk7RUFDbEJDLG1CQUFtQixFQUFFLEtBQUs7RUFDMUJDLGdCQUFnQixFQUFFLEtBQUs7RUFDdkJDLGlCQUFpQixFQUFFLElBQUk7RUFDdkJDLGVBQWUsRUFBRSxLQUFLO0VBQ3RCQyxZQUFZLEVBQUUsS0FBSztFQUNuQkMsYUFBYSxFQUFFLElBQUk7RUFDbkJDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMsZ0JBQWdCLEVBQUUsS0FBSztFQUN2QkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxlQUFlLEVBQUUsS0FBSztFQUN0QkMsWUFBWSxFQUFFLEtBQUs7RUFDbkJDLGFBQWEsRUFBRSxJQUFJO0VBQ25CQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsV0FBVyxFQUFFLEtBQUs7RUFDbEJDLFlBQVksRUFBRSxJQUFJO0VBQ2xCQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsZUFBZSxFQUFFLElBQUk7RUFDckJDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMsb0JBQW9CLEVBQUUsS0FBSztFQUMzQkMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkMsa0JBQWtCLEVBQUUsSUFBSTtFQUN4QkMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLGVBQWUsRUFBRSxJQUFJO0VBQ3JCQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsV0FBVyxFQUFFLEtBQUs7RUFDbEJDLFlBQVksRUFBRSxJQUFJO0VBQ2xCQyw0QkFBNEIsRUFBRSxLQUFLO0VBQ25DQywwQkFBMEIsRUFBRSxJQUFJO0VBQ2hDQyx5QkFBeUIsRUFBRSxLQUFLO0VBQ2hDQyx3QkFBd0IsRUFBRSxLQUFLO0VBQy9CQyxzQkFBc0IsRUFBRSxJQUFJO0VBQzVCQyxxQkFBcUIsRUFBRSxLQUFLO0VBQzVCQyxnQkFBZ0IsRUFBRSxLQUFLO0VBQ3ZCQyxjQUFjLEVBQUUsSUFBSTtFQUNwQkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLG9CQUFvQixFQUFFLEtBQUs7RUFDM0JDLGtCQUFrQixFQUFFLElBQUk7RUFDeEJDLGlCQUFpQixFQUFFO0FBQ3JCLENBQUM7QUFHTSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBb0I7QUFDL0MsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQW9CO0FBQy9DLE1BQU1DLGtCQUFrQixHQUFHLG9CQUFvQjtBQUUvQyxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBdUI7QUFDckQsTUFBTUMscUJBQXFCLEdBQUcsdUJBQXVCO0FBQ3JELE1BQU1DLHFCQUFxQixHQUFHLHVCQUF1QjtBQUVyRCxNQUFNQywwQkFBMEIsR0FBRyw0QkFBNEI7QUFDL0QsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQTRCO0FBQy9ELE1BQU1DLDBCQUEwQixHQUFHLDRCQUE0QjtBQUUvRCxNQUFNQyxnQ0FBZ0MsR0FBRSxrQ0FBa0M7QUFDMUUsTUFBTUMsZ0NBQWdDLEdBQUUsa0NBQWtDO0FBQzFFLE1BQU1DLGdDQUFnQyxHQUFFLGtDQUFrQztBQUUxRSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBbUI7QUFDN0MsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQzdDLE1BQU1DLGlCQUFpQixHQUFHLG1CQUFtQjtBQUU3QyxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFDakQsTUFBTUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pELE1BQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUVqRCxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBb0I7QUFDL0MsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQW9CO0FBQy9DLE1BQU1DLGtCQUFrQixHQUFHLG9CQUFvQjtBQUUvQyxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBd0I7QUFDdkQsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQXdCO0FBQ3ZELE1BQU1DLHNCQUFzQixHQUFHLHdCQUF3QjtBQUV2RCxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBbUI7QUFDN0MsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQzdDLE1BQU1DLGlCQUFpQixHQUFHLG1CQUFtQjtBQUU3QyxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBeUI7QUFDekQsTUFBTUMsdUJBQXVCLEdBQUcseUJBQXlCO0FBQ3pELE1BQU1DLHVCQUF1QixHQUFHLHlCQUF5QjtBQUV6RCxNQUFNQywwQkFBMEIsR0FBRyw0QkFBNEI7QUFDL0QsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQTRCO0FBQy9ELE1BQU1DLDBCQUEwQixHQUFHLDRCQUE0QjtBQUUvRCxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBa0I7QUFDM0MsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQWtCO0FBQzNDLE1BQU1DLGdCQUFnQixHQUFHLGtCQUFrQjtBQUUzQyxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFDakQsTUFBTUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pELE1BQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUVqRCxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFDakQsTUFBTUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pELE1BQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUVqRCxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFDakQsTUFBTUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pELE1BQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUVqRCxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBd0I7QUFDdkQsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQXdCO0FBQ3ZELE1BQU1DLHNCQUFzQixHQUFHLHdCQUF3QjtBQUV2RCxNQUFNQywyQkFBMkIsR0FBRyw2QkFBNkI7QUFDakUsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQTZCO0FBQ2pFLE1BQU1DLDJCQUEyQixHQUFHLDZCQUE2QjtBQUVqRSxNQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBQ3pDLE1BQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFDekMsTUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUV6QyxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBd0I7QUFDdkQsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQXdCO0FBQ3ZELE1BQU1DLHNCQUFzQixHQUFHLHdCQUF3QjtBQUV2RCxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBeUI7QUFDekQsTUFBTUMsdUJBQXVCLEdBQUcseUJBQXlCO0FBQ3pELE1BQU1DLHVCQUF1QixHQUFHLHlCQUF5QjtBQUV6RCxNQUFNQyxZQUFZLEdBQUcsY0FBYzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsU0FBUyxHQUFJQyxJQUFJLEtBQU07RUFDM0JDLEVBQUUsRUFBRUQsSUFBSSxDQUFDQyxFQUFFO0VBQ1hDLE9BQU8sRUFBRUYsSUFBSSxDQUFDRSxPQUFPO0VBQ3JCQyxJQUFJLEVBQUU7SUFDSkYsRUFBRSxFQUFFLENBQUM7SUFDTEcsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxNQUFNLEVBQUUsRUFBRTtFQUNWQyxRQUFRLEVBQUU7QUFDWixDQUFDLENBQUM7QUFFRixNQUFNQyxZQUFZLEdBQUlQLElBQUksS0FBTTtFQUM5QkMsRUFBRSxFQUFFTyxPQUFPLENBQUNDLFFBQVEsRUFBRTtFQUN0QlAsT0FBTyxFQUFFRixJQUFJO0VBQ2JHLElBQUksRUFBRTtJQUNKRixFQUFFLEVBQUUsQ0FBQztJQUNMRyxRQUFRLEVBQUU7RUFDWjtBQUNGLENBQUMsQ0FBQztBQUNGO0FBQ0EsTUFBTU0sT0FBTyxHQUFHLENBQUN2SSxLQUFLLEdBQUdXLFlBQVksRUFBRVYsTUFBTSxLQUFLdUksNkRBQU8sQ0FBQ3hJLEtBQUssRUFBR3lJLEtBQUssSUFBSztFQUMxRSxRQUFReEksTUFBTSxDQUFDQyxJQUFJO0lBQ2pCLEtBQUt5SCxZQUFZO01BQ2ZjLEtBQUssQ0FBQzVILFVBQVUsR0FBRzRILEtBQUssQ0FBQzVILFVBQVUsQ0FBQzZILE1BQU0sQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0EsQ0FBQyxLQUFLM0ksTUFBTSxDQUFDNEgsSUFBSSxDQUFDO01BQ3ZFO0lBQ0EsS0FBS1gsZUFBZTtNQUNwQnVCLEtBQUssQ0FBQ3pGLGNBQWMsR0FBRyxJQUFJO01BQzNCeUYsS0FBSyxDQUFDeEYsV0FBVyxHQUFHLEtBQUs7TUFDekJ3RixLQUFLLENBQUN2RixZQUFZLEdBQUcsSUFBSTtNQUN6QjtJQUNGLEtBQUtpRSxlQUFlO01BQ2xCc0IsS0FBSyxDQUFDekYsY0FBYyxHQUFHLEtBQUs7TUFDNUJ5RixLQUFLLENBQUN4RixXQUFXLEdBQUcsSUFBSTtNQUN4QndGLEtBQUssQ0FBQzdILFNBQVMsQ0FBQ2lJLE9BQU8sQ0FBQzVJLE1BQU0sQ0FBQzRILElBQUksQ0FBQyxDQUFDLENBQUM7TUFDdEM7SUFDRixLQUFLVCxlQUFlO01BQ2xCcUIsS0FBSyxDQUFDekYsY0FBYyxHQUFHLEtBQUs7TUFDNUJ5RixLQUFLLENBQUN2RixZQUFZLEdBQUdqRCxNQUFNLENBQUM2SSxLQUFLO01BQ2pDO0lBRUYsS0FBSzVFLHFCQUFxQjtJQUN4QixLQUFLRywwQkFBMEI7TUFDL0JvRSxLQUFLLENBQUN2SCxtQkFBbUIsR0FBRyxJQUFJO01BQ2hDdUgsS0FBSyxDQUFDdEgsZ0JBQWdCLEdBQUcsS0FBSztNQUM5QnNILEtBQUssQ0FBQ3JILGlCQUFpQixHQUFHLElBQUk7TUFDOUI7SUFFQSxLQUFLK0MscUJBQXFCO0lBQ3hCLEtBQUtHLDBCQUEwQjtNQUNqQztRQUNFbEUsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFSixNQUFNLENBQUM0SCxJQUFJLENBQUM7UUFDekNZLEtBQUssQ0FBQzVILFVBQVUsR0FBR1osTUFBTSxDQUFDNEgsSUFBSTtRQUM5QlksS0FBSyxDQUFDdkgsbUJBQW1CLEdBQUcsS0FBSztRQUNqQ3VILEtBQUssQ0FBQ3RILGdCQUFnQixHQUFHLElBQUk7UUFDN0I7TUFDRjtJQUNGLEtBQUtpRCxxQkFBcUI7SUFDeEIsS0FBS0csMEJBQTBCO01BQy9Ca0UsS0FBSyxDQUFDdkgsbUJBQW1CLEdBQUcsS0FBSztNQUNqQ3VILEtBQUssQ0FBQ3JILGlCQUFpQixHQUFHbkIsTUFBTSxDQUFDNkksS0FBSztNQUN0QztJQUVGLEtBQUtuRSxpQkFBaUI7TUFDcEI4RCxLQUFLLENBQUNwSCxlQUFlLEdBQUcsSUFBSTtNQUM1Qm9ILEtBQUssQ0FBQ25ILFlBQVksR0FBRyxLQUFLO01BQzFCbUgsS0FBSyxDQUFDbEgsYUFBYSxHQUFHLElBQUk7TUFDMUI7SUFDRixLQUFLcUQsaUJBQWlCO01BQUM7UUFDckIsTUFBTWxFLElBQUksR0FBRytILEtBQUssQ0FBQzNILFVBQVU7UUFDN0JKLElBQUksQ0FBQ3FJLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1VBQUNsQixFQUFFLEVBQUU3SCxNQUFNLENBQUM0SCxJQUFJLENBQUNvQjtRQUFNLENBQUMsQ0FBQztRQUMxQ1IsS0FBSyxDQUFDcEgsZUFBZSxHQUFHLEtBQUs7UUFDN0JvSCxLQUFLLENBQUNuSCxZQUFZLEdBQUcsSUFBSTtRQUN6QjtNQUNGO0lBQ0EsS0FBS3VELGlCQUFpQjtNQUNwQjRELEtBQUssQ0FBQ3BILGVBQWUsR0FBRyxLQUFLO01BQzdCb0gsS0FBSyxDQUFDbEgsYUFBYSxHQUFHdEIsTUFBTSxDQUFDNkksS0FBSztNQUNsQztJQUNGLEtBQUtoRSxtQkFBbUI7TUFDdEIyRCxLQUFLLENBQUNqSCxpQkFBaUIsR0FBRyxJQUFJO01BQzlCaUgsS0FBSyxDQUFDaEgsY0FBYyxHQUFHLEtBQUs7TUFDNUJnSCxLQUFLLENBQUMvRyxlQUFlLEdBQUcsSUFBSTtNQUM1QjtJQUNGLEtBQUtxRCxtQkFBbUI7TUFBQztRQUN2QixNQUFNckUsSUFBSSxHQUFHK0gsS0FBSyxDQUFDM0gsVUFBVTtRQUM3QkosSUFBSSxDQUFDcUksTUFBTSxHQUFHckksSUFBSSxDQUFDcUksTUFBTSxDQUFDTCxNQUFNLENBQUVDLENBQUMsSUFBS0EsQ0FBQyxDQUFDYixFQUFFLEtBQUs3SCxNQUFNLENBQUM0SCxJQUFJLENBQUNvQixNQUFNLENBQUM7UUFDcEVSLEtBQUssQ0FBQ2pILGlCQUFpQixHQUFHLEtBQUs7UUFDL0JpSCxLQUFLLENBQUNoSCxjQUFjLEdBQUcsSUFBSTtRQUMzQjtNQUNGO0lBQ0EsS0FBS3VELG1CQUFtQjtNQUN0QnlELEtBQUssQ0FBQ2pILGlCQUFpQixHQUFHLEtBQUs7TUFDL0JpSCxLQUFLLENBQUMvRyxlQUFlLEdBQUd6QixNQUFNLENBQUM2SSxLQUFLO01BQ3BDO0lBQ0E7SUFDRSxLQUFLN0Qsa0JBQWtCO0lBQ3ZCLEtBQUtZLDBCQUEwQjtJQUMvQixLQUFLVCxzQkFBc0I7TUFDN0JxRCxLQUFLLENBQUM5RyxnQkFBZ0IsR0FBRyxJQUFJO01BQzdCOEcsS0FBSyxDQUFDN0csYUFBYSxHQUFHLEtBQUs7TUFDM0I2RyxLQUFLLENBQUM1RyxjQUFjLEdBQUcsSUFBSTtNQUMzQjtJQUNBO0lBQ0UsS0FBS2lFLDBCQUEwQjtJQUMvQixLQUFLWixrQkFBa0I7SUFDdkIsS0FBS0csc0JBQXNCO01BQzdCb0QsS0FBSyxDQUFDOUcsZ0JBQWdCLEdBQUcsS0FBSztNQUM5QjhHLEtBQUssQ0FBQzdHLGFBQWEsR0FBRyxJQUFJO01BQzFCNkcsS0FBSyxDQUFDN0gsU0FBUyxHQUFHNkgsS0FBSyxDQUFDN0gsU0FBUyxDQUFDc0ksTUFBTSxDQUFDakosTUFBTSxDQUFDNEgsSUFBSSxDQUFDO01BQ3JEWSxLQUFLLENBQUN4SCxZQUFZLEdBQUd3SCxLQUFLLENBQUM3SCxTQUFTLENBQUN1SSxNQUFNLEtBQUssRUFBRTtNQUNsRDtJQUNBO0lBQ0UsS0FBS3BELDBCQUEwQjtJQUMvQixLQUFLWixrQkFBa0I7SUFDdkIsS0FBS0csc0JBQXNCO01BQzdCbUQsS0FBSyxDQUFDOUcsZ0JBQWdCLEdBQUcsS0FBSztNQUM5QjhHLEtBQUssQ0FBQzVHLGNBQWMsR0FBRzVCLE1BQU0sQ0FBQzZJLEtBQUs7TUFDbkM7SUFDQSxLQUFLdkQsaUJBQWlCO01BQ3RCa0QsS0FBSyxDQUFDM0csZUFBZSxHQUFHLElBQUk7TUFDNUIyRyxLQUFLLENBQUMxRyxZQUFZLEdBQUcsS0FBSztNQUMxQjBHLEtBQUssQ0FBQ3pHLGFBQWEsR0FBRyxJQUFJO01BQzFCO0lBQ0YsS0FBS3dELGlCQUFpQjtNQUNwQmlELEtBQUssQ0FBQzNHLGVBQWUsR0FBRyxLQUFLO01BQzdCMkcsS0FBSyxDQUFDMUcsWUFBWSxHQUFHLElBQUk7TUFDekIwRyxLQUFLLENBQUMzSCxVQUFVLEdBQUdiLE1BQU0sQ0FBQzRILElBQUk7TUFDOUI7SUFDRixLQUFLcEMsaUJBQWlCO01BQ3BCZ0QsS0FBSyxDQUFDM0csZUFBZSxHQUFHLEtBQUs7TUFDN0IyRyxLQUFLLENBQUN6RyxhQUFhLEdBQUcvQixNQUFNLENBQUM2SSxLQUFLO01BQ2xDO0lBQ0YsS0FBSzlDLGdCQUFnQjtNQUNuQnlDLEtBQUssQ0FBQ3hHLGNBQWMsR0FBRyxJQUFJO01BQzNCd0csS0FBSyxDQUFDdkcsV0FBVyxHQUFHLEtBQUs7TUFDekJ1RyxLQUFLLENBQUN0RyxZQUFZLEdBQUcsSUFBSTtNQUN6QjtJQUNGLEtBQUs4RCxnQkFBZ0I7TUFDbkJ3QyxLQUFLLENBQUN4RyxjQUFjLEdBQUcsS0FBSztNQUM1QndHLEtBQUssQ0FBQ3ZHLFdBQVcsR0FBRyxJQUFJO01BQ3hCdUcsS0FBSyxDQUFDN0gsU0FBUyxDQUFDaUksT0FBTyxDQUFDNUksTUFBTSxDQUFDNEgsSUFBSSxDQUFDO01BQ3BDWSxLQUFLLENBQUM1SCxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUM7TUFDdkI7SUFDRixLQUFLcUYsZ0JBQWdCO01BQ25CdUMsS0FBSyxDQUFDeEcsY0FBYyxHQUFHLEtBQUs7TUFDNUJ3RyxLQUFLLENBQUN0RyxZQUFZLEdBQUdsQyxNQUFNLENBQUM2SSxLQUFLO01BQ2pDO0lBQ0EsS0FBSzNDLG1CQUFtQjtNQUN0QnNDLEtBQUssQ0FBQ3JHLGlCQUFpQixHQUFHLElBQUk7TUFDOUJxRyxLQUFLLENBQUNwRyxjQUFjLEdBQUcsS0FBSztNQUM1Qm9HLEtBQUssQ0FBQ25HLGVBQWUsR0FBRyxJQUFJO01BQzlCO0lBQ0EsS0FBSzhELG1CQUFtQjtNQUN0QnFDLEtBQUssQ0FBQ3JHLGlCQUFpQixHQUFHLEtBQUs7TUFDL0JxRyxLQUFLLENBQUNwRyxjQUFjLEdBQUcsSUFBSTtNQUMzQmpDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFSixNQUFNLENBQUM0SCxJQUFJLENBQUM7TUFDM0NZLEtBQUssQ0FBQzNILFVBQVUsR0FBR2IsTUFBTSxDQUFDNEgsSUFBSTtNQUNoQztJQUNBLEtBQUt4QixtQkFBbUI7TUFDdEJvQyxLQUFLLENBQUNyRyxpQkFBaUIsR0FBRyxLQUFLO01BQy9CcUcsS0FBSyxDQUFDbkcsZUFBZSxHQUFHckMsTUFBTSxDQUFDNkksS0FBSztNQUN0QztJQUNGLEtBQUt4QyxtQkFBbUI7TUFDdEJtQyxLQUFLLENBQUNsRyxpQkFBaUIsR0FBRyxJQUFJO01BQzlCa0csS0FBSyxDQUFDakcsY0FBYyxHQUFHLEtBQUs7TUFDNUJpRyxLQUFLLENBQUNoRyxlQUFlLEdBQUcsSUFBSTtNQUM1QjtJQUNGLEtBQUs4RCxtQkFBbUI7TUFDdEJrQyxLQUFLLENBQUNsRyxpQkFBaUIsR0FBRyxLQUFLO01BQy9Ca0csS0FBSyxDQUFDakcsY0FBYyxHQUFHLElBQUk7TUFDM0JpRyxLQUFLLENBQUM3SCxTQUFTLEdBQUc2SCxLQUFLLENBQUM3SCxTQUFTLENBQUM4SCxNQUFNLENBQUVDLENBQUMsSUFBS0EsQ0FBQyxDQUFDYixFQUFFLEtBQUs3SCxNQUFNLENBQUM0SCxJQUFJLENBQUN1QixNQUFNLENBQUM7TUFDNUU7SUFDRixLQUFLNUMsbUJBQW1CO01BQ3RCaUMsS0FBSyxDQUFDbEcsaUJBQWlCLEdBQUcsS0FBSztNQUMvQmtHLEtBQUssQ0FBQ2hHLGVBQWUsR0FBR3hDLE1BQU0sQ0FBQzZJLEtBQUs7TUFDcEM7SUFDRixLQUFLckMsbUJBQW1CO01BQ3RCZ0MsS0FBSyxDQUFDNUYsaUJBQWlCLEdBQUcsSUFBSTtNQUM5QjRGLEtBQUssQ0FBQzNGLGNBQWMsR0FBRyxLQUFLO01BQzVCMkYsS0FBSyxDQUFDMUYsZUFBZSxHQUFHLElBQUk7TUFDNUI7SUFDQSxLQUFLMkQsbUJBQW1CO01BQUU7UUFDMUIsTUFBTWhHLElBQUksR0FBRytILEtBQUssQ0FBQzNILFVBQVU7UUFDN0JKLElBQUksQ0FBQ3lILFFBQVEsQ0FBQ1UsT0FBTyxDQUFDNUksTUFBTSxDQUFDNEgsSUFBSSxDQUFDO1FBQ2xDWSxLQUFLLENBQUM1RixpQkFBaUIsR0FBRyxLQUFLO1FBQy9CNEYsS0FBSyxDQUFDM0YsY0FBYyxHQUFHLElBQUk7UUFDM0IyRixLQUFLLENBQUM1SCxVQUFVLEdBQUcsRUFBRTtRQUNyQjtNQUNBO0lBQ0YsS0FBSzhGLG1CQUFtQjtNQUN0QjhCLEtBQUssQ0FBQzVGLGlCQUFpQixHQUFHLEtBQUs7TUFDL0I0RixLQUFLLENBQUMxRixlQUFlLEdBQUc5QyxNQUFNLENBQUM2SSxLQUFLO01BQ3BDO0lBQ0YsS0FBS2xDLHNCQUFzQjtNQUV6QjZCLEtBQUssQ0FBQy9GLG9CQUFvQixHQUFHLElBQUk7TUFDakMrRixLQUFLLENBQUM5RixpQkFBaUIsR0FBRyxLQUFLO01BQy9COEYsS0FBSyxDQUFDN0Ysa0JBQWtCLEdBQUcsSUFBSTtJQUNqQyxLQUFLaUUsc0JBQXNCO01BQ3pCNEIsS0FBSyxDQUFDL0Ysb0JBQW9CLEdBQUcsS0FBSztNQUNsQytGLEtBQUssQ0FBQzlGLGlCQUFpQixHQUFHLElBQUk7TUFDOUJ2QyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVKLE1BQU0sQ0FBQzRILElBQUksQ0FBQztNQUN2Q1ksS0FBSyxDQUFDM0gsVUFBVSxDQUFDcUgsUUFBUSxHQUFHTSxLQUFLLENBQUMzSCxVQUFVLENBQUNxSCxRQUFRLENBQUNPLE1BQU0sQ0FBRUMsQ0FBQyxJQUFLQSxDQUFDLENBQUNiLEVBQUUsS0FBSzdILE1BQU0sQ0FBQzRILElBQUksQ0FBQ0MsRUFBRSxDQUFDO01BQzVGO0lBQ0YsS0FBS2hCLHNCQUFzQjtNQUN6QjJCLEtBQUssQ0FBQy9GLG9CQUFvQixHQUFHLEtBQUs7TUFDbEMrRixLQUFLLENBQUM3RixrQkFBa0IsR0FBRzNDLE1BQU0sQ0FBQzZJLEtBQUs7TUFDdkM7SUFFRixLQUFNdEUsZ0NBQWdDO01BQ3BDaUUsS0FBSyxDQUFDdEYsNEJBQTRCLEdBQUcsSUFBSTtNQUN6Q3NGLEtBQUssQ0FBQ3JGLDBCQUEwQixHQUFHLElBQUk7TUFDdkNxRixLQUFLLENBQUNwRix5QkFBeUIsR0FBRyxLQUFLO01BQ3ZDO0lBQ0YsS0FBS29CLGdDQUFnQztNQUNuQ2dFLEtBQUssQ0FBQzVILFVBQVUsR0FBR1osTUFBTSxDQUFDNEgsSUFBSTtNQUM5QlksS0FBSyxDQUFDcEYseUJBQXlCLEdBQUcsSUFBSTtNQUN0Q29GLEtBQUssQ0FBQ3RGLDRCQUE0QixHQUFHLEtBQUs7TUFDMUM7SUFDRixLQUFLdUIsZ0NBQWdDO01BQ25DK0QsS0FBSyxDQUFDdEYsNEJBQTRCLEdBQUcsS0FBSztNQUMxQ3NGLEtBQUssQ0FBQ3JGLDBCQUEwQixHQUFHbkQsTUFBTSxDQUFDNkksS0FBSztNQUMvQztJQUVBLEtBQUsvQiwyQkFBMkI7TUFDOUIwQixLQUFLLENBQUNuRix3QkFBd0IsR0FBRyxJQUFJO01BQ3JDbUYsS0FBSyxDQUFDbEYsc0JBQXNCLEdBQUksSUFBSTtNQUNwQ2tGLEtBQUssQ0FBQ2pGLHFCQUFxQixHQUFHLEtBQUs7TUFDbkM7SUFDRixLQUFLd0QsMkJBQTJCO01BQzlCNUcsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFSixNQUFNLENBQUM0SCxJQUFJLENBQUM7TUFDekNZLEtBQUssQ0FBQ25GLHdCQUF3QixHQUFHLEtBQUs7TUFDdENtRixLQUFLLENBQUNqRixxQkFBcUIsR0FBRyxJQUFJO01BQ2pDaUYsS0FBSyxDQUFDM0gsVUFBVSxDQUFDdUksV0FBVyxHQUFHcEosTUFBTSxDQUFDNEgsSUFBSSxDQUFDd0IsV0FBVztNQUN2RDtJQUNGLEtBQUtwQywyQkFBMkI7TUFDOUJ3QixLQUFLLENBQUNuRix3QkFBd0IsR0FBRyxLQUFLO01BQ3RDbUYsS0FBSyxDQUFDbEYsc0JBQXNCLEdBQUl0RCxNQUFNLENBQUM2SSxLQUFLO01BQzVDO0lBRUYsS0FBSy9FLGtCQUFrQjtNQUNyQjBFLEtBQUssQ0FBQ2hGLGdCQUFnQixHQUFFLElBQUk7TUFDNUJnRixLQUFLLENBQUMvRSxjQUFjLEdBQUksSUFBSTtNQUM1QitFLEtBQUssQ0FBQzlFLGFBQWEsR0FBRyxLQUFLO01BQzNCO0lBQ0YsS0FBTUssa0JBQWtCO01BQ3RCeUUsS0FBSyxDQUFDaEYsZ0JBQWdCLEdBQUUsS0FBSztNQUM3QmdGLEtBQUssQ0FBQzlFLGFBQWEsR0FBRyxJQUFJO01BQzFCO0lBQ0YsS0FBS00sa0JBQWtCO01BQ3JCd0UsS0FBSyxDQUFDaEYsZ0JBQWdCLEdBQUUsS0FBSztNQUM3QnJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRUosTUFBTSxDQUFDNEgsSUFBSSxDQUFDO01BQ3BDWSxLQUFLLENBQUMvRSxjQUFjLEdBQUl6RCxNQUFNLENBQUM0SCxJQUFJLENBQUN5QixPQUFPO01BQzNDO0lBQ0EsS0FBS2pDLHNCQUFzQjtNQUV6Qm9CLEtBQUssQ0FBQzdFLG9CQUFvQixHQUFHLElBQUk7TUFDakM2RSxLQUFLLENBQUM1RSxrQkFBa0IsR0FBRyxJQUFJO01BQy9CNEUsS0FBSyxDQUFDM0UsaUJBQWlCLEdBQUcsS0FBSztNQUMvQjtJQUNGLEtBQUt3RCxzQkFBc0I7TUFDekJtQixLQUFLLENBQUM3RSxvQkFBb0IsR0FBRyxLQUFLO01BQ2xDNkUsS0FBSyxDQUFDM0UsaUJBQWlCLEdBQUcsSUFBSTtNQUM5QjJFLEtBQUssQ0FBQzFILFFBQVEsR0FBR2QsTUFBTSxDQUFDNEgsSUFBSTtNQUM1QjtJQUVGLEtBQUtOLHNCQUFzQjtNQUV6QmtCLEtBQUssQ0FBQzdFLG9CQUFvQixHQUFHLEtBQUs7TUFDbEM2RSxLQUFLLENBQUM1RSxrQkFBa0IsR0FBSTVELE1BQU0sQ0FBQzRILElBQUk7TUFDdkM7SUFDQSxLQUFLTCx1QkFBdUI7TUFDMUI7SUFDRixLQUFLQyx1QkFBdUI7TUFDMUJnQixLQUFLLENBQUM3RSxvQkFBb0IsR0FBRyxLQUFLO01BQ2xDNkUsS0FBSyxDQUFDM0UsaUJBQWlCLEdBQUcsSUFBSTtNQUM5QjJFLEtBQUssQ0FBQ3pILGVBQWUsR0FBR2YsTUFBTSxDQUFDNEgsSUFBSTtNQUNuQztJQUNBLEtBQUtILHVCQUF1QjtNQUMxQjtJQUNSO01BQ0E7RUFBTTtBQUVaLENBQUMsQ0FBQztBQUVhYSxzRUFBTyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmJJO0FBQ1k7QUFFL0IsTUFBTTVILFlBQVksR0FBRztFQUMxQjRJLGlCQUFpQixFQUFFLEtBQUs7RUFBRTtFQUMxQkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLGVBQWUsRUFBRSxJQUFJO0VBQ3JCQyxlQUFlLEVBQUUsS0FBSztFQUFFO0VBQ3hCQyxZQUFZLEVBQUUsS0FBSztFQUNuQkMsYUFBYSxFQUFFLElBQUk7RUFDbkJDLDJCQUEyQixFQUFFLEtBQUs7RUFBRTtFQUNwQ0Msd0JBQXdCLEVBQUUsS0FBSztFQUMvQkMseUJBQXlCLEVBQUUsS0FBSztFQUNoQ0MsYUFBYSxFQUFFLEtBQUs7RUFBRTtFQUN0QkMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLFdBQVcsRUFBRSxJQUFJO0VBQ2pCQyxlQUFlLEVBQUUsS0FBSztFQUFFO0VBQ3hCQyxZQUFZLEVBQUUsS0FBSztFQUNuQkMsYUFBYSxFQUFFLElBQUk7RUFDbkJDLFlBQVksRUFBRSxLQUFLO0VBQUU7RUFDckJDLFNBQVMsRUFBRSxLQUFLO0VBQ2hCQyxVQUFVLEVBQUUsSUFBSTtFQUNoQkMsYUFBYSxFQUFFLEtBQUs7RUFBRTtFQUN0QkMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLFdBQVcsRUFBRSxJQUFJO0VBQ2pCQyxhQUFhLEVBQUUsS0FBSztFQUFFO0VBQ3RCQyxVQUFVLEVBQUUsS0FBSztFQUNqQkMsV0FBVyxFQUFFLElBQUk7RUFDakJDLGlCQUFpQixFQUFFLEtBQUs7RUFBRTtFQUMxQkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLGVBQWUsRUFBRSxJQUFJO0VBQ3JCQyxxQkFBcUIsRUFBRSxLQUFLO0VBQzVCQyxrQkFBa0IsRUFBRSxLQUFLO0VBQ3pCQyxtQkFBbUIsRUFBRSxJQUFJO0VBQ3pCQyxvQkFBb0IsRUFBRSxLQUFLO0VBQzNCQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCQyxrQkFBa0IsRUFBRSxJQUFJO0VBQ3hCQyxxQkFBcUIsRUFBRSxLQUFLO0VBQzVCQyxrQkFBa0IsRUFBRSxLQUFLO0VBQ3pCQyxtQkFBbUIsRUFBRSxJQUFJO0VBQ3pCQyxFQUFFLEVBQUUsSUFBSTtFQUNSQyxRQUFRLEVBQUUsSUFBSTtFQUNkQyxnQkFBZ0IsRUFBRSxFQUFFO0VBQ3BCaEwsVUFBVSxFQUFFO0FBQ2QsQ0FBQztBQUVNLE1BQU1pTCxXQUFXLEdBQUlqRSxJQUFJLElBQUs7RUFDakMsT0FBTSxDQUFDa0UsUUFBUSxFQUFFQyxRQUFRLEtBQUs7SUFDMUIsTUFBTWhNLEtBQUssR0FBR2dNLFFBQVEsRUFBRTtJQUN4QkQsUUFBUSxDQUFDRSxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCQyw0Q0FBSyxDQUFDeEwsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUN2QnlMLElBQUksQ0FBRUMsR0FBRyxJQUFLO01BQ1hMLFFBQVEsQ0FBQ00sa0JBQWtCLENBQUNELEdBQUcsQ0FBQ3ZFLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUNEeUUsS0FBSyxDQUFFRixHQUFHLElBQUs7TUFDWkwsUUFBUSxDQUFDUSxrQkFBa0IsQ0FBQ0gsR0FBRyxDQUFDdkUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztBQUNMLENBQUM7QUFFTSxNQUFNMkUsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQzdDLE1BQU1DLGlCQUFpQixHQUFHLG1CQUFtQjtBQUM3QyxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBbUI7QUFFN0MsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQXNCO0FBQ25ELE1BQU1DLG9CQUFvQixHQUFHLHNCQUFzQjtBQUNuRCxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBc0I7QUFFbkQsTUFBTUMsK0JBQStCLEdBQUcsaUNBQWlDO0FBQ3pFLE1BQU1DLCtCQUErQixHQUFHLGlDQUFpQztBQUN6RSxNQUFNQywrQkFBK0IsR0FBRyxpQ0FBaUM7QUFFekUsTUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxNQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBQ3pDLE1BQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFFekMsTUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxNQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBQ3ZDLE1BQU1DLGNBQWMsR0FBRyxnQkFBZ0I7QUFFdkMsTUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxNQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBQ3pDLE1BQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFFekMsTUFBTUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pELE1BQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUNqRCxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFFakQsTUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxNQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBQ3ZDLE1BQU1DLGNBQWMsR0FBRyxnQkFBZ0I7QUFFdkMsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQWtCO0FBQzNDLE1BQU1DLGdCQUFnQixHQUFHLGtCQUFrQjtBQUMzQyxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBa0I7QUFFM0MsTUFBTUMsdUJBQXVCLEdBQUcseUJBQXlCO0FBQ3pELE1BQU1DLHVCQUF1QixHQUFHLHlCQUF5QjtBQUN6RCxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBeUI7QUFFekQsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQXdCO0FBQ3ZELE1BQU1DLHNCQUFzQixHQUFHLHdCQUF3QjtBQUN2RCxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBd0I7QUFFdkQsTUFBTUMsdUJBQXVCLEdBQUcseUJBQXlCO0FBQ3pELE1BQU1DLHVCQUF1QixHQUFHLHlCQUF5QjtBQUN6RCxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBeUI7QUFFekQsTUFBTUMsNEJBQTRCLEdBQUcsOEJBQThCO0FBQ25FLE1BQU1DLDRCQUE0QixHQUFHLDhCQUE4QjtBQUNuRSxNQUFNQyw0QkFBNEIsR0FBRyw4QkFBOEI7QUFFbkUsTUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBbUI7QUFFcEQsTUFBTUMsU0FBUyxHQUFJcEgsSUFBSSxvQ0FDaEJBLElBQUk7RUFDUEksUUFBUSxFQUFFLEtBQUs7RUFDZkgsRUFBRSxFQUFFLENBQUM7RUFDTG9ILEtBQUssRUFBRSxDQUFDO0lBQUNwSCxFQUFFLEVBQUU7RUFBQyxDQUFDLENBQUM7RUFDaEJxSCxVQUFVLEVBQUUsQ0FBQztJQUFDbEgsUUFBUSxFQUFFO0VBQUssQ0FBQyxFQUFFO0lBQUNBLFFBQVEsRUFBRTtFQUFZLENBQUMsRUFBRTtJQUFDQSxRQUFRLEVBQUU7RUFBVyxDQUFDLENBQUM7RUFDbEZtSCxTQUFTLEVBQUUsQ0FBQztJQUFDbkgsUUFBUSxFQUFFO0VBQUssQ0FBQyxFQUFFO0lBQUNBLFFBQVEsRUFBRTtFQUFZLENBQUMsRUFBRTtJQUFDQSxRQUFRLEVBQUU7RUFBVyxDQUFDO0FBQUMsRUFDbkY7QUFHSyxNQUFNZ0Usa0JBQWtCLEdBQUlwRSxJQUFJLElBQUs7RUFDeEMsT0FBTTtJQUNGM0gsSUFBSSxFQUFFa04sY0FBYztJQUNwQnZGO0VBQ0osQ0FBQztBQUNMLENBQUM7QUFFTSxNQUFNd0gsbUJBQW1CLEdBQUl4SCxJQUFJLElBQUs7RUFDekMsT0FBTTtJQUNGM0gsSUFBSSxFQUFFK007RUFDVixDQUFDO0FBQ0wsQ0FBQzs7QUFHRDtBQUM0QztBQUM1QyxNQUFNMUUsT0FBTyxHQUFHLENBQUN2SSxLQUFLLEdBQUdXLFlBQVksRUFBRVYsTUFBTSxLQUFLdUksNkRBQU8sQ0FBQ3hJLEtBQUssRUFBR3lJLEtBQUssSUFBSztFQUMxRSxRQUFReEksTUFBTSxDQUFDQyxJQUFJO0lBQ2pCLEtBQUtzTSxpQkFBaUI7TUFDcEIvRCxLQUFLLENBQUNpQixlQUFlLEdBQUcsSUFBSTtNQUM1QmpCLEtBQUssQ0FBQ21CLGFBQWEsR0FBRyxJQUFJO01BQzFCbkIsS0FBSyxDQUFDa0IsWUFBWSxHQUFHLEtBQUs7TUFDMUI7SUFDRixLQUFLOEMsaUJBQWlCO01BQ3BCaEUsS0FBSyxDQUFDaUIsZUFBZSxHQUFHLEtBQUs7TUFDN0JqQixLQUFLLENBQUNtRCxRQUFRLEdBQUczTCxNQUFNLENBQUM0SCxJQUFJO01BQzVCWSxLQUFLLENBQUNrQixZQUFZLEdBQUcsSUFBSTtNQUN6QjtJQUNGLEtBQUsrQyxpQkFBaUI7TUFDcEJqRSxLQUFLLENBQUNpQixlQUFlLEdBQUcsS0FBSztNQUM3QmpCLEtBQUssQ0FBQ21CLGFBQWEsR0FBRzNKLE1BQU0sQ0FBQzZJLEtBQUs7TUFDbEM7SUFDQSxLQUFLZ0UsK0JBQStCO01BQUU7TUFDcENyRSxLQUFLLENBQUNvQiwyQkFBMkIsR0FBRyxJQUFJO01BQ3hDcEIsS0FBSyxDQUFDc0IseUJBQXlCLEdBQUcsSUFBSTtNQUN0Q3RCLEtBQUssQ0FBQ3FCLHdCQUF3QixHQUFHLEtBQUs7TUFDdEM7SUFDRixLQUFLaUQsK0JBQStCO01BQ2xDdEUsS0FBSyxDQUFDb0IsMkJBQTJCLEdBQUcsS0FBSztNQUN6Q3BCLEtBQUssQ0FBQ29ELGdCQUFnQixHQUFHNUwsTUFBTSxDQUFDNEgsSUFBSTtNQUNwQ1ksS0FBSyxDQUFDcUIsd0JBQXdCLEdBQUcsSUFBSTtNQUNyQztJQUNGLEtBQUtrRCwrQkFBK0I7TUFDbEN2RSxLQUFLLENBQUNvQiwyQkFBMkIsR0FBRyxLQUFLO01BQ3pDcEIsS0FBSyxDQUFDc0IseUJBQXlCLEdBQUc5SixNQUFNLENBQUM2SSxLQUFLO01BQzlDO0lBQ0osS0FBS3FGLHVCQUF1QjtNQUMxQjFGLEtBQUssQ0FBQytDLHFCQUFxQixHQUFHLElBQUk7TUFDbEMvQyxLQUFLLENBQUNpRCxtQkFBbUIsR0FBRyxJQUFJO01BQ2hDakQsS0FBSyxDQUFDZ0Qsa0JBQWtCLEdBQUcsS0FBSztNQUNoQztJQUNGLEtBQUsyQyx1QkFBdUI7TUFDMUIzRixLQUFLLENBQUMrQyxxQkFBcUIsR0FBRyxLQUFLO01BQ25DL0MsS0FBSyxDQUFDa0QsRUFBRSxDQUFDeUQsU0FBUyxHQUFHM0csS0FBSyxDQUFDa0QsRUFBRSxDQUFDd0QsVUFBVSxDQUFDekcsTUFBTSxDQUFFQyxDQUFDLElBQUtBLENBQUMsQ0FBQ2IsRUFBRSxLQUFLN0gsTUFBTSxDQUFDNEgsSUFBSSxDQUFDb0IsTUFBTSxDQUFDO01BQ25GUixLQUFLLENBQUNnRCxrQkFBa0IsR0FBRyxJQUFJO01BQy9CO0lBQ0YsS0FBSzRDLHVCQUF1QjtNQUMxQjVGLEtBQUssQ0FBQytDLHFCQUFxQixHQUFHLEtBQUs7TUFDbkMvQyxLQUFLLENBQUNpRCxtQkFBbUIsR0FBR3pMLE1BQU0sQ0FBQzZJLEtBQUs7TUFDeEM7SUFFRixLQUFLMkYsdUJBQXVCO01BQzFCaEcsS0FBSyxDQUFDeUMscUJBQXFCLEdBQUcsSUFBSTtNQUNsQ3pDLEtBQUssQ0FBQzJDLG1CQUFtQixHQUFHLElBQUk7TUFDaEMzQyxLQUFLLENBQUMwQyxrQkFBa0IsR0FBRyxLQUFLO01BQ2hDO0lBQ0YsS0FBS3VELHVCQUF1QjtNQUMxQmpHLEtBQUssQ0FBQ3lDLHFCQUFxQixHQUFHLEtBQUs7TUFDbkN6QyxLQUFLLENBQUNrRCxFQUFFLENBQUN3RCxVQUFVLEdBQUdsUCxNQUFNLENBQUM0SCxJQUFJO01BQ2pDWSxLQUFLLENBQUMwQyxrQkFBa0IsR0FBRyxJQUFJO01BQy9CO0lBQ0YsS0FBS3dELHVCQUF1QjtNQUMxQmxHLEtBQUssQ0FBQ3lDLHFCQUFxQixHQUFHLEtBQUs7TUFDbkN6QyxLQUFLLENBQUMyQyxtQkFBbUIsR0FBR25MLE1BQU0sQ0FBQzZJLEtBQUs7TUFDeEM7SUFFRixLQUFLd0Ysc0JBQXNCO01BQ3pCN0YsS0FBSyxDQUFDNEMsb0JBQW9CLEdBQUcsSUFBSTtNQUNqQzVDLEtBQUssQ0FBQzhDLGtCQUFrQixHQUFHLElBQUk7TUFDL0I5QyxLQUFLLENBQUM2QyxpQkFBaUIsR0FBRyxLQUFLO01BQy9CO0lBQ0YsS0FBS2lELHNCQUFzQjtNQUN6QjlGLEtBQUssQ0FBQzRDLG9CQUFvQixHQUFHLEtBQUs7TUFDbEM1QyxLQUFLLENBQUNrRCxFQUFFLENBQUN5RCxTQUFTLEdBQUduUCxNQUFNLENBQUM0SCxJQUFJO01BQ2hDWSxLQUFLLENBQUM2QyxpQkFBaUIsR0FBRyxJQUFJO01BQzlCO0lBQ0YsS0FBS2tELHNCQUFzQjtNQUN6Qi9GLEtBQUssQ0FBQzRDLG9CQUFvQixHQUFHLEtBQUs7TUFDbEM1QyxLQUFLLENBQUM4QyxrQkFBa0IsR0FBR3RMLE1BQU0sQ0FBQzZJLEtBQUs7TUFDdkM7SUFFRixLQUFLNkQsb0JBQW9CO01BQ3ZCbEUsS0FBSyxDQUFDYyxpQkFBaUIsR0FBRyxJQUFJO01BQzlCZCxLQUFLLENBQUNnQixlQUFlLEdBQUcsSUFBSTtNQUM1QmhCLEtBQUssQ0FBQ2UsY0FBYyxHQUFHLEtBQUs7TUFDNUI7SUFDRixLQUFLb0Qsb0JBQW9CO01BQ3ZCbkUsS0FBSyxDQUFDYyxpQkFBaUIsR0FBRyxLQUFLO01BQy9CZCxLQUFLLENBQUNrRCxFQUFFLEdBQUcxTCxNQUFNLENBQUM0SCxJQUFJO01BQ3RCWSxLQUFLLENBQUNlLGNBQWMsR0FBRyxJQUFJO01BQzNCO0lBQ0YsS0FBS3FELG9CQUFvQjtNQUN2QnBFLEtBQUssQ0FBQ2MsaUJBQWlCLEdBQUcsS0FBSztNQUMvQmQsS0FBSyxDQUFDZ0IsZUFBZSxHQUFHeEosTUFBTSxDQUFDNkksS0FBSztNQUNwQztJQUVGLEtBQUsrRSxjQUFjO01BQ2pCcEYsS0FBSyxDQUFDdUIsYUFBYSxHQUFHLElBQUk7TUFDMUJ2QixLQUFLLENBQUN5QixXQUFXLEdBQUcsSUFBSTtNQUN4QnpCLEtBQUssQ0FBQ3dCLFVBQVUsR0FBRyxLQUFLO01BQ3hCO0lBQ0YsS0FBSzZELGNBQWM7TUFDakJyRixLQUFLLENBQUN1QixhQUFhLEdBQUcsS0FBSztNQUMzQnZCLEtBQUssQ0FBQ2tELEVBQUUsQ0FBQ3dELFVBQVUsQ0FBQ25HLElBQUksQ0FBQztRQUFFbEIsRUFBRSxFQUFFN0gsTUFBTSxDQUFDNEgsSUFBSSxDQUFDb0I7TUFBTyxDQUFDLENBQUM7TUFDcERSLEtBQUssQ0FBQ3dCLFVBQVUsR0FBRyxJQUFJO01BQ3ZCO0lBQ0YsS0FBSzhELGNBQWM7TUFDakJ0RixLQUFLLENBQUN1QixhQUFhLEdBQUcsS0FBSztNQUMzQnZCLEtBQUssQ0FBQ3lCLFdBQVcsR0FBR2pLLE1BQU0sQ0FBQzZJLEtBQUs7TUFDaEM7SUFDRixLQUFLa0YsZ0JBQWdCO01BQ25CdkYsS0FBSyxDQUFDMEIsZUFBZSxHQUFHLElBQUk7TUFDNUIxQixLQUFLLENBQUM0QixhQUFhLEdBQUcsSUFBSTtNQUMxQjVCLEtBQUssQ0FBQzJCLFlBQVksR0FBRyxLQUFLO01BQzFCO0lBQ0YsS0FBSzZELGdCQUFnQjtNQUNuQnhGLEtBQUssQ0FBQzBCLGVBQWUsR0FBRyxLQUFLO01BQzdCMUIsS0FBSyxDQUFDa0QsRUFBRSxDQUFDd0QsVUFBVSxHQUFHMUcsS0FBSyxDQUFDa0QsRUFBRSxDQUFDd0QsVUFBVSxDQUFDekcsTUFBTSxDQUFFQyxDQUFDLElBQUtBLENBQUMsQ0FBQ2IsRUFBRSxLQUFLN0gsTUFBTSxDQUFDNEgsSUFBSSxDQUFDb0IsTUFBTSxDQUFDO01BQ3BGUixLQUFLLENBQUMyQixZQUFZLEdBQUcsSUFBSTtNQUN6QjtJQUNGLEtBQUs4RCxnQkFBZ0I7TUFDbkJ6RixLQUFLLENBQUMwQixlQUFlLEdBQUcsS0FBSztNQUM3QjFCLEtBQUssQ0FBQzRCLGFBQWEsR0FBR3BLLE1BQU0sQ0FBQzZJLEtBQUs7TUFDbEM7SUFDRixLQUFLc0UsY0FBYztNQUNqQjNFLEtBQUssQ0FBQzZCLFlBQVksR0FBRyxJQUFJO01BQ3pCN0IsS0FBSyxDQUFDK0IsVUFBVSxHQUFHLElBQUk7TUFDdkIvQixLQUFLLENBQUM4QixTQUFTLEdBQUcsS0FBSztNQUN2QjtJQUNGLEtBQUs4QyxjQUFjO01BQ2pCNUUsS0FBSyxDQUFDNkIsWUFBWSxHQUFHLEtBQUs7TUFDMUI3QixLQUFLLENBQUNrRCxFQUFFLEdBQUcxTCxNQUFNLENBQUM0SCxJQUFJO01BQ3RCWSxLQUFLLENBQUM4QixTQUFTLEdBQUcsSUFBSTtNQUN0QjtJQUNGLEtBQUsrQyxjQUFjO01BQ2pCN0UsS0FBSyxDQUFDNkIsWUFBWSxHQUFHLEtBQUs7TUFDMUI3QixLQUFLLENBQUMrQixVQUFVLEdBQUd2SyxNQUFNLENBQUM2SSxLQUFLO01BQy9CO0lBQ0YsS0FBS21FLGVBQWU7TUFDbEJ4RSxLQUFLLENBQUNnQyxhQUFhLEdBQUcsSUFBSTtNQUMxQmhDLEtBQUssQ0FBQ2tDLFdBQVcsR0FBRyxJQUFJO01BQ3hCbEMsS0FBSyxDQUFDaUMsVUFBVSxHQUFHLEtBQUs7TUFDeEI7SUFDRixLQUFLd0MsZUFBZTtNQUNsQnpFLEtBQUssQ0FBQ2dDLGFBQWEsR0FBRyxLQUFLO01BQzNCaEMsS0FBSyxDQUFDaUMsVUFBVSxHQUFHLElBQUk7TUFDdkJqQyxLQUFLLENBQUNrRCxFQUFFLEdBQUcsSUFBSTtNQUNmO0lBQ0YsS0FBS3dCLGVBQWU7TUFDbEIxRSxLQUFLLENBQUNnQyxhQUFhLEdBQUcsS0FBSztNQUMzQmhDLEtBQUssQ0FBQ2tDLFdBQVcsR0FBRzFLLE1BQU0sQ0FBQzZJLEtBQUs7TUFDaEM7SUFDRixLQUFLeUUsZUFBZTtNQUNsQjlFLEtBQUssQ0FBQ21DLGFBQWEsR0FBRyxJQUFJO01BQzFCbkMsS0FBSyxDQUFDcUMsV0FBVyxHQUFHLElBQUk7TUFDeEJyQyxLQUFLLENBQUNvQyxVQUFVLEdBQUcsS0FBSztNQUN4QjtJQUNGLEtBQUsyQyxlQUFlO01BQ2xCL0UsS0FBSyxDQUFDbUMsYUFBYSxHQUFHLEtBQUs7TUFDM0JuQyxLQUFLLENBQUNvQyxVQUFVLEdBQUcsSUFBSTtNQUN2QjtJQUNGLEtBQUs0QyxlQUFlO01BQ2xCaEYsS0FBSyxDQUFDbUMsYUFBYSxHQUFHLEtBQUs7TUFDM0JuQyxLQUFLLENBQUNxQyxXQUFXLEdBQUc3SyxNQUFNLENBQUM2SSxLQUFLO01BQ2hDO0lBQ0YsS0FBSzRFLG1CQUFtQjtNQUN0QmpGLEtBQUssQ0FBQ3NDLGlCQUFpQixHQUFHLElBQUk7TUFDOUJ0QyxLQUFLLENBQUN3QyxlQUFlLEdBQUcsSUFBSTtNQUM1QnhDLEtBQUssQ0FBQ3VDLGNBQWMsR0FBRyxLQUFLO01BQzVCO0lBQ0YsS0FBSzJDLG1CQUFtQjtNQUN0QmxGLEtBQUssQ0FBQ3NDLGlCQUFpQixHQUFHLEtBQUs7TUFDaEM7TUFDQXRDLEtBQUssQ0FBQ2tELEVBQUUsQ0FBQzJELElBQUksR0FBR3JQLE1BQU0sQ0FBQzRILElBQUksQ0FBQ3lILElBQUk7TUFDaEM3RyxLQUFLLENBQUN1QyxjQUFjLEdBQUcsSUFBSTtNQUMxQjtJQUNGLEtBQUs0QyxtQkFBbUI7TUFDdEJuRixLQUFLLENBQUNzQyxpQkFBaUIsR0FBRyxLQUFLO01BQy9CdEMsS0FBSyxDQUFDd0MsZUFBZSxHQUFHaEwsTUFBTSxDQUFDNkksS0FBSztNQUNwQztJQUNGLEtBQUtpRyxjQUFjO01BQ2pCdEcsS0FBSyxDQUFDa0QsRUFBRSxDQUFDdUQsS0FBSyxDQUFDckcsT0FBTyxDQUFDO1FBQUVmLEVBQUUsRUFBRTdILE1BQU0sQ0FBQzRIO01BQUssQ0FBQyxDQUFDO01BQzNDO0lBRUYsS0FBS21ILGlCQUFpQjtNQUNwQnZHLEtBQUssQ0FBQ2tELEVBQUUsQ0FBQ3VELEtBQUssR0FBR3pHLEtBQUssQ0FBQ2tELEVBQUUsQ0FBQ3VELEtBQUssQ0FBQ3hHLE1BQU0sQ0FBRUMsQ0FBQyxJQUFLQSxDQUFDLENBQUNiLEVBQUUsS0FBSzdILE1BQU0sQ0FBQzRILElBQUksQ0FBQztNQUNuRTtJQUVBLEtBQUsrRyw0QkFBNEI7TUFDL0JuRyxLQUFLLENBQUN2SCxtQkFBbUIsR0FBRyxJQUFJO01BQ2hDdUgsS0FBSyxDQUFDdEgsZ0JBQWdCLEdBQUcsS0FBSztNQUM5QnNILEtBQUssQ0FBQ3JILGlCQUFpQixHQUFHLElBQUk7TUFDOUI7SUFDRixLQUFLeU4sNEJBQTRCO01BQUM7UUFDaEN6TyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBR0osTUFBTSxDQUFDNEgsSUFBSSxDQUFDO1FBQzlDWSxLQUFLLENBQUM1SCxVQUFVLEdBQUdaLE1BQU0sQ0FBQzRILElBQUk7UUFDOUJZLEtBQUssQ0FBQ3ZILG1CQUFtQixHQUFHLEtBQUs7UUFDakN1SCxLQUFLLENBQUN0SCxnQkFBZ0IsR0FBRyxJQUFJO1FBQzdCO01BQ0Y7SUFDQSxLQUFLMk4sNEJBQTRCO01BQy9CckcsS0FBSyxDQUFDdkgsbUJBQW1CLEdBQUcsS0FBSztNQUNqQ3VILEtBQUssQ0FBQ3JILGlCQUFpQixHQUFHbkIsTUFBTSxDQUFDNkksS0FBSztNQUN0QztJQUVKO01BQ0U7RUFBTTtBQUVaLENBQUMsQ0FBQztBQUVhUCxzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUN6VnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDcEI7QUFFSTtBQUNBO0FBRTlCMkQsNENBQUssQ0FBQ3FELFFBQVEsQ0FBQ0MsT0FBTyxHQUFHLHVCQUF1QjtBQUNoRHRELDRDQUFLLENBQUNxRCxRQUFRLENBQUNFLGVBQWUsR0FBRSxJQUFJO0FBQ25DO0FBQ2MsVUFBVUMsUUFBUSxHQUFFO0VBQy9CLE1BQU1DLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ0MsNkNBQVEsQ0FBQyxFQUNkRCwrREFBSSxDQUFDRSw2Q0FBUSxDQUFDLENBRWpCLENBQUM7QUFDTjs7QUFFQTtBQUNBLHFCOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNzRDtBQStEdEQ7QUFFMkM7QUFHckUsU0FBU0MsVUFBVSxDQUFDbEksSUFBSSxFQUFFO0VBQ3hCLE1BQU1tSSxNQUFNLEdBQUduSSxJQUFJLENBQUNvSSxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ2pDLE9BQU8vRCw0Q0FBSyxDQUFDeEwsSUFBSSxDQUFFLFNBQVFzUCxNQUFPLFlBQVcsRUFBRW5JLElBQUksQ0FBQztBQUN0RDtBQUVBLFVBQVVxSSxPQUFPLENBQUNqUSxNQUFNLEVBQUU7RUFDeEIsSUFBSTtJQUNELE1BQU1rUSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0wsVUFBVSxFQUFFOVAsTUFBTSxDQUFDNEgsSUFBSSxDQUFDO0lBRW5ELE1BQU13SSw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUVpSCw4REFBZTtNQUNyQlUsSUFBSSxFQUFFc0ksTUFBTSxDQUFDdEk7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lJLEdBQUcsRUFBRTtJQUNabFEsT0FBTyxDQUFDMEksS0FBSyxDQUFDd0gsR0FBRyxDQUFDO0lBQ2xCLE1BQU1ELDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRWtILDhEQUFlO01BQ3JCMEIsS0FBSyxFQUFFd0gsR0FBRyxDQUFDQyxRQUFRLENBQUMxSTtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBR0EsU0FBUzJJLGVBQWUsQ0FBQzNJLElBQUksRUFBRTtFQUM3QixPQUFPcUUsNENBQUssQ0FBQ3hMLElBQUksQ0FBQyxjQUFjLEVBQUVtSCxJQUFJLENBQUM7QUFDekM7QUFFQSxVQUFVNEksWUFBWSxDQUFDeFEsTUFBTSxFQUFFO0VBQzdCLElBQUk7SUFDRCxNQUFNa1EsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNJLGVBQWUsRUFBRXZRLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUV4RCxNQUFNd0ksOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFaUUsb0VBQXFCO01BQzNCMEQsSUFBSSxFQUFFc0ksTUFBTSxDQUFDdEk7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lJLEdBQUcsRUFBRTtJQUNabFEsT0FBTyxDQUFDMEksS0FBSyxDQUFDd0gsR0FBRyxDQUFDO0lBQ2xCLE1BQU1ELDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRWtFLG9FQUFxQjtNQUMzQjBFLEtBQUssRUFBRXdILEdBQUcsQ0FBQ0MsUUFBUSxDQUFDMUk7SUFDdEIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUVBLFVBQVU2SSxnQkFBZ0IsQ0FBQ3pRLE1BQU0sRUFBQztFQUNoQyxJQUFHO0lBQ0QsTUFBTWtRLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDSSxlQUFlLEVBQUV2USxNQUFNLENBQUM0SCxJQUFJLENBQUM7SUFFdkQsTUFBTXdJLDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRW9FLHlFQUEwQjtNQUNoQ3VELElBQUksRUFBRXNJLE1BQU0sQ0FBQ3RJO0lBQ2YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLE9BQU95SSxHQUFHLEVBQUU7SUFDWmxRLE9BQU8sQ0FBQzBJLEtBQUssQ0FBQ3dILEdBQUcsQ0FBQztJQUNsQixNQUFNRCw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUVxRSx5RUFBMEI7TUFDaEN1RSxLQUFLLEVBQUV3SCxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU4SSxZQUFZLENBQUMxUSxNQUFNLEVBQUU7RUFDN0IsSUFBSTtJQUNELE1BQU1rUSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0ksZUFBZSxFQUFFdlEsTUFBTSxDQUFDNEgsSUFBSSxDQUFDO0lBRXhELE1BQU13SSw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUV1RSwrRUFBZ0M7TUFDdENvRCxJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUksR0FBRyxFQUFFO0lBQ1psUSxPQUFPLENBQUMwSSxLQUFLLENBQUN3SCxHQUFHLENBQUM7SUFDbEIsTUFBTUQsOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFd0UsK0VBQWdDO01BQ3RDb0UsS0FBSyxFQUFFd0gsR0FBRyxDQUFDQyxRQUFRLENBQUMxSTtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBR0EsU0FBUytJLFdBQVcsQ0FBQy9JLElBQUksRUFBRTtFQUN6QixPQUFPcUUsNENBQUssQ0FBQzJFLEtBQUssQ0FBRSxTQUFRaEosSUFBSyxPQUFNLENBQUM7QUFDMUM7QUFFQSxVQUFVaUosUUFBUSxDQUFDN1EsTUFBTSxFQUFFO0VBQ3pCLElBQUk7SUFDRCxNQUFNa1EsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNRLFdBQVcsRUFBRTNRLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUVwRCxNQUFNd0ksOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFMEUsZ0VBQWlCO01BQ3ZCaUQsSUFBSSxFQUFFc0ksTUFBTSxDQUFDdEk7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lJLEdBQUcsRUFBRTtJQUNabFEsT0FBTyxDQUFDMEksS0FBSyxDQUFDd0gsR0FBRyxDQUFDO0lBQ2xCLE1BQU1ELDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRTJFLGdFQUFpQjtNQUN2QmlFLEtBQUssRUFBRXdILEdBQUcsQ0FBQ0MsUUFBUSxDQUFDMUk7SUFDdEIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUVBLFNBQVNrSixhQUFhLENBQUNsSixJQUFJLEVBQUU7RUFDM0IsT0FBT3FFLDRDQUFLLENBQUM4RSxNQUFNLENBQUUsU0FBUW5KLElBQUssT0FBTSxDQUFDO0FBQzNDO0FBRUEsVUFBVW9KLFVBQVUsQ0FBQ2hSLE1BQU0sRUFBRTtFQUMzQixJQUFJO0lBQ0QsTUFBTWtRLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDVyxhQUFhLEVBQUU5USxNQUFNLENBQUM0SCxJQUFJLENBQUM7SUFFdEQsTUFBTXdJLDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRTZFLGtFQUFtQjtNQUN6QjhDLElBQUksRUFBRXNJLE1BQU0sQ0FBQ3RJO0lBQ2YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLE9BQU95SSxHQUFHLEVBQUU7SUFDWmxRLE9BQU8sQ0FBQzBJLEtBQUssQ0FBQ3dILEdBQUcsQ0FBQztJQUNsQixNQUFNRCw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUU4RSxrRUFBbUI7TUFDekI4RCxLQUFLLEVBQUV3SCxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxTQUFTcUosV0FBVyxDQUFDckosSUFBSSxFQUFFO0VBQ3pCLE9BQU9xRSw0Q0FBSyxDQUFDK0QsR0FBRyxDQUFFLFNBQVFwSSxJQUFLLEVBQUMsQ0FBQztBQUNuQztBQUVBLFVBQVVzSixRQUFRLENBQUNsUixNQUFNLEVBQUU7RUFDekIsSUFBSTtJQUNELE1BQU1rUSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2MsV0FBVyxFQUFFalIsTUFBTSxDQUFDNEgsSUFBSSxDQUFDO0lBRXBELE1BQU13SSw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUVzRixnRUFBaUI7TUFDdkJxQyxJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUksR0FBRyxFQUFFO0lBQ1psUSxPQUFPLENBQUMwSSxLQUFLLENBQUN3SCxHQUFHLENBQUM7SUFDbEIsTUFBTUQsOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFdUYsZ0VBQWlCO01BQ3ZCcUQsS0FBSyxFQUFFd0gsR0FBRyxDQUFDQyxRQUFRLENBQUMxSTtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBR0EsU0FBU3VKLG1CQUFtQixDQUFDdkosSUFBSSxFQUFFd0osTUFBTSxFQUFFO0VBQ3pDLE9BQU9uRiw0Q0FBSyxDQUFDK0QsR0FBRyxDQUFFLFlBQVdxQixrQkFBa0IsQ0FBQ3pKLElBQUksQ0FBRSxXQUFVd0osTUFBTSxJQUFJLENBQUUsRUFBQyxDQUFDO0FBQ2hGLENBQUMsQ0FBaUI7O0FBRWxCLFVBQVVFLGdCQUFnQixDQUFDdFIsTUFBTSxFQUFFO0VBQ2pDLElBQUk7SUFDRixNQUFNa1EsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNnQixtQkFBbUIsRUFBRW5SLE1BQU0sQ0FBQzRILElBQUksRUFBRTVILE1BQU0sQ0FBQ29SLE1BQU0sQ0FBQztJQUMxRSxNQUFNaEIsOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFNEYseUVBQTBCO01BQ2hDK0IsSUFBSSxFQUFFc0ksTUFBTSxDQUFDdEk7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lJLEdBQUcsRUFBRTtJQUNabFEsT0FBTyxDQUFDMEksS0FBSyxDQUFDd0gsR0FBRyxDQUFDO0lBQ2xCLE1BQU1ELDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRTZGLHlFQUEwQjtNQUNoQzhCLElBQUksRUFBRXlJLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDMUk7SUFDckIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUVBLFNBQVMySixZQUFZLENBQUNILE1BQU0sRUFBRTtFQUM1QixPQUFPbkYsNENBQUssQ0FBQytELEdBQUcsQ0FBRSwwQkFBeUJvQixNQUFNLElBQUksQ0FBRSxFQUFDLENBQUM7QUFDM0Q7QUFFQSxVQUFVSSxTQUFTLENBQUN4UixNQUFNLEVBQUU7RUFDMUIsSUFBSTtJQUNGLE1BQU1rUSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ29CLFlBQVksRUFBRXZSLE1BQU0sQ0FBQ29SLE1BQU0sQ0FBQztJQUN0RCxNQUFNaEIsOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFZ0YsaUVBQWtCO01BQ3hCMkMsSUFBSSxFQUFFc0ksTUFBTSxDQUFDdEk7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lJLEdBQUcsRUFBRTtJQUNabFEsT0FBTyxDQUFDMEksS0FBSyxDQUFDd0gsR0FBRyxDQUFDO0lBQ2xCLE1BQU1ELDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRWlGLGlFQUFrQjtNQUN4QjJELEtBQUssRUFBRXdILEdBQUcsQ0FBQ0MsUUFBUSxDQUFDMUk7SUFDdEIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUVBLFNBQVM2SixlQUFlLENBQUM3SixJQUFJLEVBQUU7RUFDN0IsT0FBT3FFLDRDQUFLLENBQUMrRCxHQUFHLENBQUUsUUFBTyxDQUFDO0FBQzVCO0FBRUEsVUFBVTBCLFlBQVksQ0FBQzFSLE1BQU0sRUFBRTtFQUM3QixJQUFJO0lBQ0YsTUFBTWtRLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDc0IsZUFBZSxFQUFFelIsTUFBTSxDQUFDNEgsSUFBSSxDQUFDO0lBQ3ZELE1BQU13SSw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUVtRixxRUFBc0I7TUFDNUJ3QyxJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUksR0FBRyxFQUFFO0lBQ1psUSxPQUFPLENBQUMwSSxLQUFLLENBQUN3SCxHQUFHLENBQUM7SUFDbEIsTUFBTUQsOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFb0YscUVBQXNCO01BQzVCd0QsS0FBSyxFQUFFd0gsR0FBRyxDQUFDQyxRQUFRLENBQUMxSTtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsU0FBUytKLFVBQVUsQ0FBQy9KLElBQUksRUFBRTtFQUN4QixPQUFPcUUsNENBQUssQ0FBQ3hMLElBQUksQ0FBQyxPQUFPLEVBQUVtSCxJQUFJLENBQUM7QUFDbEM7QUFFQSxVQUFVZ0ssT0FBTyxDQUFDNVIsTUFBTSxFQUFFO0VBQ3hCLElBQUk7SUFDRCxNQUFNa1EsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUN3QixVQUFVLEVBQUUzUixNQUFNLENBQUM0SCxJQUFJLENBQUM7SUFDbkQsTUFBTXdJLDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRStGLCtEQUFnQjtNQUN0QjRCLElBQUksRUFBRXNJLE1BQU0sQ0FBQ3RJO0lBQ2YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLE9BQU95SSxHQUFHLEVBQUU7SUFDWmxRLE9BQU8sQ0FBQzBJLEtBQUssQ0FBQ3dILEdBQUcsQ0FBQztJQUNsQixNQUFNRCw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUVnRywrREFBZ0I7TUFDdEI0QyxLQUFLLEVBQUV3SCxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxTQUFTaUssYUFBYSxDQUFDakssSUFBSSxFQUFDO0VBQzFCLE1BQU1tSSxNQUFNLEdBQUduSSxJQUFJLENBQUNvSSxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ2pDLE9BQU8vRCw0Q0FBSyxDQUFDMkUsS0FBSyxDQUFFLFNBQVFiLE1BQU8sRUFBQyxFQUFFbkksSUFBSSxDQUFDO0FBQzdDO0FBRUEsVUFBVWtLLFVBQVUsQ0FBQzlSLE1BQU0sRUFBQztFQUMxQixJQUFHO0lBQ0MsTUFBTWtRLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDMEIsYUFBYSxFQUFFN1IsTUFBTSxDQUFDNEgsSUFBSSxDQUFDO0lBQ3ZELE1BQU13SSw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUVrRyxrRUFBbUI7TUFDekJ5QixJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FDRCxPQUFNeUksR0FBRyxFQUFDO0lBQ1JsUSxPQUFPLENBQUMwSSxLQUFLLENBQUN3SCxHQUFHLENBQUM7SUFDbEIsTUFBTUQsOERBQUcsQ0FBQztNQUNWblEsSUFBSSxFQUFFbUcsa0VBQW1CO01BQ3pCeUMsS0FBSyxFQUFFd0gsR0FBRyxDQUFDQyxRQUFRLENBQUMxSTtJQUN0QixDQUFDLENBQUM7RUFDRjtBQUNGO0FBRUEsU0FBU21LLGFBQWEsQ0FBQ25LLElBQUksRUFBRTtFQUMzQixPQUFPcUUsNENBQUssQ0FBQzhFLE1BQU0sQ0FBRSxTQUFRbkosSUFBSyxFQUFDLENBQUM7QUFDdEM7QUFFQSxVQUFVb0ssVUFBVSxDQUFDaFMsTUFBTSxFQUFFO0VBQzNCLElBQUk7SUFDRixNQUFNa1EsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0QixhQUFhLEVBQUUvUixNQUFNLENBQUM0SCxJQUFJLENBQUM7SUFFckQsTUFBTXdJLDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRXFHLGtFQUFtQjtNQUN6QnNCLElBQUksRUFBRXNJLE1BQU0sQ0FBQ3RJO0lBQ2YsQ0FBQyxDQUFDO0lBQ0YsTUFBTXdJLDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRThPLGdFQUFpQjtNQUN2Qm5ILElBQUksRUFBRTVILE1BQU0sQ0FBQzRIO0lBQ2YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLE9BQU95SSxHQUFHLEVBQUU7SUFDWmxRLE9BQU8sQ0FBQzBJLEtBQUssQ0FBQ3dILEdBQUcsQ0FBQztJQUNsQixNQUFNRCw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUVzRyxrRUFBbUI7TUFDekJxQixJQUFJLEVBQUV5SSxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3JCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxTQUFTcUssZ0JBQWdCLENBQUNySyxJQUFJLEVBQUM7RUFFN0IsTUFBTXNLLFNBQVMsR0FBR3RLLElBQUksQ0FBQ29JLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFFdkM3UCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUU4UixTQUFTLENBQUM7RUFFckMsT0FBT2pHLDRDQUFLLENBQUM4RSxNQUFNLENBQUUsaUJBQWdCbUIsU0FBVSxFQUFDLENBQUM7QUFDbkQ7QUFFQSxTQUFTQyxvQkFBb0IsQ0FBQ3ZLLElBQUksRUFBQztFQUVqQyxNQUFNc0ssU0FBUyxHQUFHdEssSUFBSSxDQUFDb0ksR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUV2QzdQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRThSLFNBQVMsQ0FBQztFQUVyQyxPQUFPakcsNENBQUssQ0FBQzJFLEtBQUssQ0FBRSxxQkFBb0JzQixTQUFVLEVBQUMsRUFBRXRLLElBQUksQ0FBQztBQUU1RDtBQUVBLFVBQVV3SyxhQUFhLENBQUNwUyxNQUFNLEVBQUM7RUFDN0IsSUFBRztJQUNELE1BQU1xUyxZQUFZLEdBQUcsTUFBTWxDLCtEQUFJLENBQUM4QixnQkFBZ0IsRUFBRWpTLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUM5RCxNQUFNMEssWUFBWSxHQUFHLE1BQU1uQywrREFBSSxDQUFDZ0Msb0JBQW9CLEVBQUVuUyxNQUFNLENBQUM0SCxJQUFJLENBQUM7SUFDbEUsTUFBTXdJLDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRTJHLHFFQUFzQjtNQUM1QmdCLElBQUksRUFBRXlLLFlBQVksQ0FBQ3pLO0lBQ3JCLENBQUMsQ0FBQztJQUNGLE1BQU13SSw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUU4RywwRUFBMkI7TUFDakNhLElBQUksRUFBRTBLLFlBQVksQ0FBQzFLO0lBQ3JCLENBQUMsQ0FBQztJQUNGLE1BQU13SSw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUU4TyxnRUFBaUI7TUFDdkJuSCxJQUFJLEVBQUU1SCxNQUFNLENBQUM0SDtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUksR0FBRyxFQUFFO0lBQ1psUSxPQUFPLENBQUMwSSxLQUFLLENBQUN3SCxHQUFHLENBQUM7SUFDbEIsTUFBTUQsOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFNEcscUVBQXNCO01BQzVCZSxJQUFJLEVBQUV5SSxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3JCLENBQUMsQ0FBQztJQUNGLE1BQU13SSw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUUrRywwRUFBMkI7TUFDakNZLElBQUksRUFBRXlJLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDMUk7SUFDckIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUVBLFNBQVMySyxhQUFhLENBQUMzSyxJQUFJLEVBQUU7RUFFN0IsTUFBTW1JLE1BQU0sR0FBR25JLElBQUksQ0FBQ29JLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFFL0IsT0FBTy9ELDRDQUFLLENBQUN4TCxJQUFJLENBQUUsU0FBUXNQLE1BQU8sVUFBUyxFQUFFbkksSUFBSSxDQUFDO0FBQ3BEO0FBRUEsVUFBVTRLLFVBQVUsQ0FBQ3hTLE1BQU0sRUFBRTtFQUMzQixJQUFJO0lBQ0QsTUFBTWtRLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDb0MsYUFBYSxFQUFFdlMsTUFBTSxDQUFDNEgsSUFBSSxDQUFDO0lBRXRELE1BQU13SSw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUV3RyxrRUFBbUI7TUFDekJtQixJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUksR0FBRyxFQUFFO0lBQ1psUSxPQUFPLENBQUMwSSxLQUFLLENBQUN3SCxHQUFHLENBQUM7SUFDbEIsTUFBTUQsOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFeUcsa0VBQW1CO01BQ3hCa0IsSUFBSSxFQUFFeUksR0FBRyxDQUFDQyxRQUFRLENBQUMxSTtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsU0FBUzZLLFlBQVksQ0FBQzdLLElBQUksRUFBQztFQUN6QixPQUFPcUUsNENBQUssQ0FBQ3hMLElBQUksQ0FBRSxpQkFBZ0IsRUFBRW1ILElBQUksQ0FBQztBQUM1QztBQUVBLFVBQVU4SyxTQUFTLENBQUMxUyxNQUFNLEVBQUM7RUFDekIsSUFBSTtJQUNGLE1BQU1rUSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ3NDLFlBQVksRUFBRXpTLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUVyRCxNQUFNd0ksOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFOEQsaUVBQWtCO01BQ3hCNkQsSUFBSSxFQUFFc0ksTUFBTSxDQUFDdEk7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lJLEdBQUcsRUFBRTtJQUNabFEsT0FBTyxDQUFDMEksS0FBSyxDQUFDLGFBQWEsRUFBRXdILEdBQUcsQ0FBQztJQUNqQyxNQUFNRCw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUUrRCxpRUFBa0I7TUFDdkI0RCxJQUFJLEVBQUV5SSxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Q7QUFFQSxTQUFTK0ssZ0JBQWdCLENBQUMvSyxJQUFJLEVBQUM7RUFDN0IsT0FBT3FFLDRDQUFLLENBQUMrRCxHQUFHLENBQUUscUJBQW9CcUIsa0JBQWtCLENBQUN6SixJQUFJLENBQUUsRUFBQyxFQUFFQSxJQUFJLENBQUM7QUFDekU7QUFFQSxVQUFVZ0wsYUFBYSxDQUFDNVMsTUFBTSxFQUFDO0VBQzdCLElBQUk7SUFDRixNQUFNa1EsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUN3QyxnQkFBZ0IsRUFBRTNTLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUV6RCxNQUFNd0ksOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFb0gscUVBQXNCO01BQzVCTyxJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUksR0FBRyxFQUFFO0lBQ1osTUFBTUQsOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFcUgscUVBQXNCO01BQzNCTSxJQUFJLEVBQUV5SSxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Q7QUFFQSxTQUFTaUwsaUJBQWlCLENBQUNqTCxJQUFJLEVBQUM7RUFDOUIsT0FBT3FFLDRDQUFLLENBQUMrRCxHQUFHLENBQUUscUJBQW9CcUIsa0JBQWtCLENBQUN6SixJQUFJLENBQUUsRUFBQyxFQUFFQSxJQUFJLENBQUM7QUFDekU7QUFFQSxVQUFVa0wsY0FBYyxDQUFDOVMsTUFBTSxFQUFDO0VBQzlCLElBQUk7SUFDRixNQUFNa1EsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUMwQyxpQkFBaUIsRUFBRTdTLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUUxRCxNQUFNd0ksOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFdUgsc0VBQXVCO01BQzdCSSxJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUksR0FBRyxFQUFFO0lBQ1osTUFBTUQsOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFd0gsc0VBQXVCO01BQzVCRyxJQUFJLEVBQUV5SSxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Q7QUFHQSxVQUFVbUwsWUFBWSxHQUFHO0VBQ3ZCLE1BQU1DLHFFQUFVLENBQUMvTCw4REFBZSxFQUFFZ0osT0FBTyxDQUFDO0FBQzVDO0FBR0EsVUFBVWdELGFBQWEsR0FBRztFQUN4QixNQUFNRCxxRUFBVSxDQUFDdE8sZ0VBQWlCLEVBQUVtTSxRQUFRLENBQUM7QUFDL0M7QUFHQSxVQUFVcUMsaUJBQWlCLEdBQUc7RUFDNUIsTUFBTUYscUVBQVUsQ0FBQy9PLG9FQUFxQixFQUFFdU0sWUFBWSxDQUFDO0FBQ3ZEO0FBRUEsVUFBVTJDLHFCQUFxQixHQUFFO0VBQy9CLE1BQU1ILHFFQUFVLENBQUM1Tyx5RUFBMEIsRUFBRXFNLGdCQUFnQixDQUFDO0FBQ2hFO0FBRUEsVUFBVTJDLGlCQUFpQixHQUFHO0VBQzVCLE1BQU1KLHFFQUFVLENBQUN6TywrRUFBZ0MsRUFBRW1NLFlBQVksQ0FBQztBQUNsRTtBQUVBLFVBQVUyQyxlQUFlLEdBQUc7RUFDMUIsTUFBTUwscUVBQVUsQ0FBQ25PLGtFQUFtQixFQUFFbU0sVUFBVSxDQUFDO0FBQ25EO0FBRUEsVUFBVXNDLGNBQWMsR0FBRztFQUN6QixNQUFNQyxtRUFBUSxDQUFDLElBQUksRUFBRXZPLGlFQUFrQixFQUFFd00sU0FBUyxDQUFDO0FBQ3JEO0FBRUEsVUFBVWdDLGFBQWEsR0FBRztFQUN4QixNQUFNUixxRUFBVSxDQUFDMU4sZ0VBQWlCLEVBQUU0TCxRQUFRLENBQUM7QUFDL0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVV1QyxxQkFBcUIsR0FBRztFQUNoQyxNQUFNRixtRUFBUSxDQUFDLElBQUksRUFBRTNOLHlFQUEwQixFQUFFMEwsZ0JBQWdCLENBQUM7QUFDcEU7QUFFQSxVQUFVb0MsWUFBWSxHQUFHO0VBQ3ZCLE1BQU1WLHFFQUFVLENBQUNqTiwrREFBZ0IsRUFBRTZMLE9BQU8sQ0FBQztBQUM3QztBQUVBLFVBQVUrQixlQUFlLEdBQUc7RUFDMUIsTUFBTVgscUVBQVUsQ0FBQzlNLGtFQUFtQixFQUFFNEwsVUFBVSxDQUFDO0FBQ25EO0FBRUEsVUFBVThCLGVBQWUsR0FBRztFQUMxQixNQUFNWixxRUFBVSxDQUFDM00sa0VBQW1CLEVBQUUyTCxVQUFVLENBQUM7QUFDbkQ7QUFFQSxVQUFVNkIsa0JBQWtCLEdBQUU7RUFDNUIsTUFBTWIscUVBQVUsQ0FBQ3JNLHFFQUFzQixFQUFFeUwsYUFBYSxDQUFDO0FBQ3pEO0FBRUEsVUFBVTBCLGlCQUFpQixHQUFFO0VBQzNCLE1BQU1kLHFFQUFVLENBQUM3TixxRUFBc0IsRUFBRXVNLFlBQVksQ0FBQztBQUN4RDtBQUVBLFVBQVVxQyxlQUFlLEdBQUc7RUFDMUIsTUFBTWYscUVBQVUsQ0FBQ3hNLGtFQUFtQixFQUFFZ00sVUFBVSxDQUFDO0FBQ25EO0FBRUEsVUFBVXdCLGNBQWMsR0FBRztFQUN6QixNQUFNaEIscUVBQVUsQ0FBQ2xQLGlFQUFrQixFQUFFNE8sU0FBUyxDQUFDO0FBQ2pEO0FBRUEsVUFBVXVCLGtCQUFrQixHQUFHO0VBQzdCLE1BQU1qQixxRUFBVSxDQUFDNUwscUVBQXNCLEVBQUV3TCxhQUFhLENBQUM7QUFDekQ7QUFFQSxVQUFVc0IsbUJBQW1CLEdBQUc7RUFDOUIsTUFBTWxCLHFFQUFVLENBQUN6TCxzRUFBdUIsRUFBRXVMLGNBQWMsQ0FBQztBQUMzRDtBQUVlLFVBQVVsRCxRQUFRLEdBQUc7RUFDbEMsTUFBTUYsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDb0QsWUFBWSxDQUFDLEVBQ2xCcEQsK0RBQUksQ0FBQ3VELGlCQUFpQixDQUFDLEVBQ3ZCdkQsK0RBQUksQ0FBQ3dELHFCQUFxQixDQUFDLEVBQzNCeEQsK0RBQUksQ0FBQ3lELGlCQUFpQixDQUFDLEVBQ3ZCekQsK0RBQUksQ0FBQ3NELGFBQWEsQ0FBQyxFQUNuQnRELCtEQUFJLENBQUMwRCxlQUFlLENBQUMsRUFDckIxRCwrREFBSSxDQUFDK0QsWUFBWSxDQUFDLEVBQ2xCL0QsK0RBQUksQ0FBQ2dFLGVBQWUsQ0FBQyxFQUNyQmhFLCtEQUFJLENBQUMyRCxjQUFjLENBQUMsRUFDcEIzRCwrREFBSSxDQUFDdUUsbUJBQW1CLENBQUMsRUFDekJ2RSwrREFBSSxDQUFDOEQscUJBQXFCLENBQUMsRUFDM0I5RCwrREFBSSxDQUFDNkQsYUFBYSxDQUFDLEVBQ25CN0QsK0RBQUksQ0FBQ2lFLGVBQWUsQ0FBQyxFQUNyQmpFLCtEQUFJLENBQUNrRSxrQkFBa0IsQ0FBQyxFQUN4QmxFLCtEQUFJLENBQUNzRSxrQkFBa0IsQ0FBQyxFQUN4QnRFLCtEQUFJLENBQUNvRSxlQUFlLENBQUMsRUFDckJwRSwrREFBSSxDQUFDcUUsY0FBYyxDQUFDLEVBQ3BCckUsK0RBQUksQ0FBQ21FLGlCQUFpQixDQUFDLENBQ3hCLENBQUM7QUFDSixDOzs7Ozs7Ozs7Ozs7QUNoa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2lEO0FBa0JqRDtBQUUxQixTQUFTSyx1QkFBdUIsQ0FBQ3ZNLElBQUksRUFBQztFQUNsQyxPQUFPcUUsNENBQUssQ0FBQytELEdBQUcsQ0FBRSxTQUFRcEksSUFBSyxRQUFPLENBQUM7QUFDM0M7QUFFQSxVQUFVd00sb0JBQW9CLENBQUNwVSxNQUFNLEVBQUM7RUFDbEMsSUFBRztJQUNDLE1BQU1rUSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2dFLHVCQUF1QixFQUFFblUsTUFBTSxDQUFDNEgsSUFBSSxDQUFDO0lBQy9ELE1BQU13SSw4REFBRyxDQUFDO01BQ05uUSxJQUFJLEVBQUU2TSw4RUFBK0I7TUFDckNsRixJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNqQixDQUFDLENBQUM7RUFDTixDQUFDLFFBQU15SSxHQUFHLEVBQUM7SUFDUGxRLE9BQU8sQ0FBQzBJLEtBQUssQ0FBQ3dILEdBQUcsQ0FBQztJQUNsQixNQUFNRCw4REFBRyxDQUFDO01BQ05uUSxJQUFJLEVBQUU4TSw4RUFBK0I7TUFDckNsRSxLQUFLLEVBQUV3SCxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3hCLENBQUMsQ0FBQztFQUNOO0FBQ0o7QUFHQSxTQUFTeU0sa0JBQWtCLENBQUN6TSxJQUFJLEVBQUM7RUFDN0IsT0FBT3FFLDRDQUFLLENBQUM4RSxNQUFNLENBQUUsa0JBQWlCbkosSUFBSyxFQUFDLENBQUM7QUFDakQ7QUFFQSxVQUFVME0sY0FBYyxDQUFDdFUsTUFBTSxFQUFDO0VBQzVCLElBQUc7SUFDSCxNQUFNa1EsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNrRSxrQkFBa0IsRUFBRXJVLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUMxRCxNQUFNd0ksOERBQUcsQ0FBQztNQUNOblEsSUFBSSxFQUFFa08sc0VBQXVCO01BQzdCdkcsSUFBSSxFQUFFc0ksTUFBTSxDQUFDdEk7SUFDakIsQ0FBQyxDQUFDO0VBQ0YsQ0FBQyxRQUFNeUksR0FBRyxFQUFDO0lBQ1BsUSxPQUFPLENBQUMwSSxLQUFLLENBQUN3SCxHQUFHLENBQUM7SUFDbEIsTUFBTUQsOERBQUcsQ0FBQztNQUNOblEsSUFBSSxFQUFFbU8sc0VBQXVCO01BQzdCdkYsS0FBSyxFQUFFd0gsR0FBRyxDQUFDQyxRQUFRLENBQUMxSTtJQUN4QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBRUEsU0FBUzJNLFdBQVcsQ0FBQzNNLElBQUksRUFBRTtFQUN2QnpILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRXdILElBQUksQ0FBQztFQUNoQyxPQUFPcUUsNENBQUssQ0FBQytELEdBQUcsQ0FBRSxTQUFRcEksSUFBSyxFQUFDLENBQUM7QUFDbkM7QUFFQSxVQUFVNE0sUUFBUSxDQUFDeFUsTUFBTSxFQUFFO0VBQ3pCLElBQUk7SUFDRixNQUFNa1EsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNvRSxXQUFXLEVBQUV2VSxNQUFNLENBQUM0SCxJQUFJLENBQUM7SUFDbkQsTUFBTXdJLDhEQUFHLENBQUM7TUFDUm5RLElBQUksRUFBRXVNLGdFQUFpQjtNQUN2QjVFLElBQUksRUFBRXNJLE1BQU0sQ0FBQ3RJO0lBQ2YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLE9BQU95SSxHQUFHLEVBQUU7SUFDWmxRLE9BQU8sQ0FBQzBJLEtBQUssQ0FBQ3dILEdBQUcsQ0FBQztJQUNsQixNQUFNRCw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUV3TSxnRUFBaUI7TUFDdkI1RCxLQUFLLEVBQUV3SCxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFHRixTQUFTNk0sZ0JBQWdCLENBQUM3TSxJQUFJLEVBQUM7RUFDM0IsT0FBT3FFLDRDQUFLLENBQUMrRCxHQUFHLENBQUMsaUJBQWlCLEVBQUVwSSxJQUFJLENBQUM7QUFDN0M7QUFFQSxVQUFVOE0sYUFBYSxDQUFDMVUsTUFBTSxFQUFDO0VBQzNCLElBQUc7SUFDSCxNQUFNa1EsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNzRSxnQkFBZ0IsRUFBRXpVLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUN4RCxNQUFNd0ksOERBQUcsQ0FBQztNQUNOblEsSUFBSSxFQUFFcU8scUVBQXNCO01BQzVCMUcsSUFBSSxFQUFFc0ksTUFBTSxDQUFDdEk7SUFDakIsQ0FBQyxDQUFDO0VBQ0YsQ0FBQyxRQUFNeUksR0FBRyxFQUFDO0lBQ1BsUSxPQUFPLENBQUMwSSxLQUFLLENBQUN3SCxHQUFHLENBQUM7SUFDbEIsTUFBTUQsOERBQUcsQ0FBQztNQUNOblEsSUFBSSxFQUFFc08scUVBQXNCO01BQzVCMUYsS0FBSyxFQUFFd0gsR0FBRyxDQUFDQyxRQUFRLENBQUMxSTtJQUN4QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBRUEsU0FBUytNLGlCQUFpQixDQUFDL00sSUFBSSxFQUFDO0VBQzVCLE9BQU9xRSw0Q0FBSyxDQUFDK0QsR0FBRyxDQUFDLGtCQUFrQixFQUFFcEksSUFBSSxDQUFDO0FBQzlDO0FBRUEsVUFBVWdOLGNBQWMsQ0FBQzVVLE1BQU0sRUFBQztFQUM1QixJQUFHO0lBQ0gsTUFBTWtRLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDd0UsaUJBQWlCLEVBQUUzVSxNQUFNLENBQUM0SCxJQUFJLENBQUM7SUFDekQsTUFBTXdJLDhEQUFHLENBQUM7TUFDTm5RLElBQUksRUFBRXdPLHNFQUF1QjtNQUM3QjdHLElBQUksRUFBRXNJLE1BQU0sQ0FBQ3RJO0lBQ2pCLENBQUMsQ0FBQztFQUNGLENBQUMsUUFBTXlJLEdBQUcsRUFBQztJQUNQbFEsT0FBTyxDQUFDMEksS0FBSyxDQUFDd0gsR0FBRyxDQUFDO0lBQ2xCLE1BQU1ELDhEQUFHLENBQUM7TUFDTm5RLElBQUksRUFBRXlPLHNFQUF1QjtNQUM3QjdGLEtBQUssRUFBRXdILEdBQUcsQ0FBQ0MsUUFBUSxDQUFDMUk7SUFDeEIsQ0FBQyxDQUFDO0VBQ047QUFDSjtBQUtBLFNBQVNpTixhQUFhLENBQUNqTixJQUFJLEVBQUM7RUFDeEJ6SCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRzBVLElBQUksQ0FBQ0MsU0FBUyxDQUFDbk4sSUFBSSxDQUFDLENBQUM7RUFDcEQsT0FBT3FFLDRDQUFLLENBQUMyRSxLQUFLLENBQUMsWUFBWSxFQUFFaEosSUFBSSxDQUFDO0FBQzFDO0FBRUEsVUFBVW9OLFVBQVUsQ0FBQ2hWLE1BQU0sRUFBQztFQUN4QixJQUFHO0lBQ0gsTUFBTWtRLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDMEUsYUFBYSxFQUFFN1UsTUFBTSxDQUFDNEgsSUFBSSxDQUFDO0lBQ3JELE1BQU13SSw4REFBRyxDQUFDO01BQ05uUSxJQUFJLEVBQUV5TixrRUFBbUI7TUFDekI5RixJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNqQixDQUFDLENBQUM7RUFDRixDQUFDLFFBQU15SSxHQUFHLEVBQUM7SUFDUGxRLE9BQU8sQ0FBQzBJLEtBQUssQ0FBQ3dILEdBQUcsQ0FBQztJQUNsQixNQUFNRCw4REFBRyxDQUFDO01BQ05uUSxJQUFJLEVBQUUwTixrRUFBbUI7TUFDekI5RSxLQUFLLEVBQUV3SCxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3hCLENBQUMsQ0FBQztFQUNOO0FBQ0o7QUFHQSxTQUFTcU4sYUFBYSxHQUFFO0VBQ3BCLE9BQU9oSiw0Q0FBSyxDQUFDK0QsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUM3QjtBQUVBLFVBQVVrRixVQUFVLENBQUNsVixNQUFNLEVBQUM7RUFDeEIsSUFBRztJQUNILE1BQU1rUSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQzhFLGFBQWEsRUFBRWpWLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUNyRCxNQUFNd0ksOERBQUcsQ0FBQztNQUNOblEsSUFBSSxFQUFFME0sbUVBQW9CO01BQzFCL0UsSUFBSSxFQUFFc0ksTUFBTSxDQUFDdEk7SUFDakIsQ0FBQyxDQUFDO0VBQ0YsQ0FBQyxRQUFNeUksR0FBRyxFQUFDO0lBQ1BsUSxPQUFPLENBQUMwSSxLQUFLLENBQUN3SCxHQUFHLENBQUM7SUFDbEIsTUFBTUQsOERBQUcsQ0FBQztNQUNOblEsSUFBSSxFQUFFMk0sbUVBQW9CO01BQzFCL0QsS0FBSyxFQUFFd0gsR0FBRyxDQUFDQyxRQUFRLENBQUMxSTtJQUN4QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBRUEsU0FBU3VOLFNBQVMsQ0FBQ3ZOLElBQUksRUFBQztFQUNwQixPQUFPcUUsNENBQUssQ0FBQzJFLEtBQUssQ0FBRSxTQUFRaEosSUFBSyxTQUFRLEVBQUVBLElBQUksQ0FBQztBQUNwRDtBQUVBLFVBQVV3TixNQUFNLENBQUNwVixNQUFNLEVBQUM7RUFDcEIsSUFBRztJQUNGLE1BQU1rUSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2dGLFNBQVMsRUFBRW5WLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUNsRCxNQUFNd0ksOERBQUcsQ0FBQztNQUNOblEsSUFBSSxFQUFFNE4sNkRBQWM7TUFDcEJqRyxJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNqQixDQUFDLENBQUM7RUFDRixDQUFDLFFBQU15SSxHQUFHLEVBQUM7SUFDUGxRLE9BQU8sQ0FBQzBJLEtBQUssQ0FBQ3dILEdBQUcsQ0FBQztJQUNsQixNQUFNRCw4REFBRyxDQUFDO01BQ05uUSxJQUFJLEVBQUU2Tiw2REFBYztNQUNwQmpGLEtBQUssRUFBRXdILEdBQUcsQ0FBQ0MsUUFBUSxDQUFDMUk7SUFDeEIsQ0FBQyxDQUFDO0VBQ047QUFDSjtBQUVBLFNBQVN5TixXQUFXLENBQUN6TixJQUFJLEVBQUM7RUFDdEIsT0FBT3FFLDRDQUFLLENBQUM4RSxNQUFNLENBQUUsU0FBUW5KLElBQUssV0FBVSxFQUFFQSxJQUFJLENBQUM7QUFDdkQ7QUFFQSxVQUFVME4sUUFBUSxDQUFDdFYsTUFBTSxFQUFDO0VBQ3RCLElBQUc7SUFDRixNQUFNa1EsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNrRixXQUFXLEVBQUVyVixNQUFNLENBQUM0SCxJQUFJLENBQUM7SUFDcEQsTUFBTTJOLGdFQUFLLENBQUMsSUFBSSxDQUFDO0lBQ2pCLE1BQU1uRiw4REFBRyxDQUFDO01BQ05uUSxJQUFJLEVBQUUrTiwrREFBZ0I7TUFDdEJwRyxJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNqQixDQUFDLENBQUM7RUFDRixDQUFDLFFBQU15SSxHQUFHLEVBQUM7SUFDUGxRLE9BQU8sQ0FBQzBJLEtBQUssQ0FBQ3dILEdBQUcsQ0FBQztJQUNsQixNQUFNRCw4REFBRyxDQUFDO01BQ05uUSxJQUFJLEVBQUVnTywrREFBZ0I7TUFDdEJwRixLQUFLLEVBQUV3SCxHQUFHLENBQUNDLFFBQVEsQ0FBQzFJO0lBQ3hCLENBQUMsQ0FBQztFQUNOO0FBQ0o7QUFHQSxTQUFTNE4sUUFBUSxDQUFDNU4sSUFBSSxFQUFDO0VBQ25CLE9BQU9xRSw0Q0FBSyxDQUFDeEwsSUFBSSxDQUFDLGFBQWEsRUFBRW1ILElBQUksQ0FBQztBQUMxQzs7QUFFQTtBQUNBLFVBQVU2TixLQUFLLENBQUN6VixNQUFNLEVBQUM7RUFDbkIsSUFBRztJQUNKLE1BQU1rUSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ3FGLFFBQVEsRUFBRXhWLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUMvQyxNQUFNd0ksOERBQUcsQ0FBQztNQUNOblEsSUFBSSxFQUFFbU4sNkRBQWM7TUFDcEJ4RixJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNqQixDQUFDLENBQUM7RUFDRixDQUFDLFFBQU15SSxHQUFHLEVBQUM7SUFDUGxRLE9BQU8sQ0FBQzBJLEtBQUssQ0FBQ3dILEdBQUcsQ0FBQztJQUNsQixNQUFNRCw4REFBRyxDQUFDO01BQ05uUSxJQUFJLEVBQUVvTiw2REFBYztNQUNwQnhFLEtBQUssRUFBRXdILEdBQUcsQ0FBQ0MsUUFBUSxDQUFDMUk7SUFDeEIsQ0FBQyxDQUFDO0VBQ047QUFDSjtBQUVBLFNBQVM4TixTQUFTLEdBQUU7RUFDaEIsT0FBT3pKLDRDQUFLLENBQUN4TCxJQUFJLENBQUMsY0FBYyxDQUFDO0FBQ3JDO0FBRUEsVUFBVWtWLE1BQU0sR0FBRTtFQUNkLElBQUc7SUFDSCxNQUFNeEYsK0RBQUksQ0FBQ3VGLFNBQVMsQ0FBQztJQUNyQixNQUFNdEYsOERBQUcsQ0FBQztNQUNOblEsSUFBSSxFQUFFZ04sOERBQWVBO0lBQ3pCLENBQUMsQ0FBQztFQUNGLENBQUMsUUFBTW9ELEdBQUcsRUFBQztJQUNQbFEsT0FBTyxDQUFDMEksS0FBSyxDQUFDd0gsR0FBRyxDQUFDO0lBQ2xCLE1BQU1ELDhEQUFHLENBQUM7TUFDTm5RLElBQUksRUFBRWlOLDhEQUFlO01BQ3JCckUsS0FBSyxFQUFFd0gsR0FBRyxDQUFDQyxRQUFRLENBQUMxSTtJQUN4QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBRUEsU0FBU2dPLFNBQVMsQ0FBQ2hPLElBQUksRUFBQztFQUNwQixPQUFPcUUsNENBQUssQ0FBQ3hMLElBQUksQ0FBQyxPQUFPLEVBQUVtSCxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3RDOztBQUVBLFVBQVVpTyxNQUFNLENBQUM3VixNQUFNLEVBQUM7RUFDcEIsSUFBRztJQUNOLE1BQU1rUSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ3lGLFNBQVMsRUFBRTVWLE1BQU0sQ0FBQzRILElBQUksQ0FBQztJQUNqRHpILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOFAsTUFBTSxDQUFDO0lBQ2hCLE1BQU1FLDhEQUFHLENBQUM7TUFDTm5RLElBQUksRUFBRXNOLDhEQUFlQTtJQUV6QixDQUFDLENBQUM7RUFDRixDQUFDLFFBQU04QyxHQUFHLEVBQUM7SUFDUCxNQUFNRCw4REFBRyxDQUFDO01BRU5uUSxJQUFJLEVBQUV1Tiw4REFBZTtNQUNyQjNFLEtBQUssRUFBRXdILEdBQUcsQ0FBQ0MsUUFBUSxDQUFDMUk7SUFDeEIsQ0FBQyxDQUFDO0VBQ047QUFDSjtBQUVBLFNBQVMySSxlQUFlLENBQUMzSSxJQUFJLEVBQUU7RUFDM0J6SCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRXdILElBQUksQ0FBQztFQUNuQyxPQUFPcUUsNENBQUssQ0FBQzJFLEtBQUssQ0FBQyxvQkFBb0IsRUFBRWhKLElBQUksQ0FBQztBQUNoRDtBQUVBLFVBQVU0SSxZQUFZLENBQUN4USxNQUFNLEVBQUU7RUFDN0IsSUFBSTtJQUNELE1BQU1rUSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0ksZUFBZSxFQUFFdlEsTUFBTSxDQUFDNEgsSUFBSSxDQUFDO0lBRXhELE1BQU13SSw4REFBRyxDQUFDO01BQ1JuUSxJQUFJLEVBQUUyTywyRUFBNEI7TUFDbENoSCxJQUFJLEVBQUVzSSxNQUFNLENBQUN0STtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUksR0FBRyxFQUFFO0lBQ1psUSxPQUFPLENBQUMwSSxLQUFLLENBQUN3SCxHQUFHLENBQUM7SUFDbEIsTUFBTUQsOERBQUcsQ0FBQztNQUNSblEsSUFBSSxFQUFFNE8sMkVBQTRCO01BQ2xDaEcsS0FBSyxFQUFFd0gsR0FBRyxDQUFDQyxRQUFRLENBQUMxSTtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUYsVUFBVWtPLGVBQWUsR0FBRztFQUN4QixNQUFNOUMscUVBQVUsQ0FBQ3RHLG1FQUFvQixFQUFFd0ksVUFBVSxDQUFDO0FBQ3BEO0FBRUEsVUFBVWEsa0JBQWtCLEdBQUc7RUFDN0IsTUFBTS9DLHFFQUFVLENBQUNyRSwyRUFBNEIsRUFBRTZCLFlBQVksQ0FBQztBQUM5RDtBQUVGLFVBQVV3RixtQkFBbUIsR0FBRTtFQUMzQixNQUFNaEQscUVBQVUsQ0FBQzlFLHNFQUF1QixFQUFFb0csY0FBYyxDQUFDO0FBQzdEO0FBRUEsVUFBVTJCLGtCQUFrQixHQUFFO0VBQzFCLE1BQU1qRCxxRUFBVSxDQUFDM0UscUVBQXNCLEVBQUVxRyxhQUFhLENBQUM7QUFDM0Q7QUFFQSxVQUFVd0IsbUJBQW1CLEdBQUU7RUFDM0IsTUFBTWxELHFFQUFVLENBQUN4RSxzRUFBdUIsRUFBRW9HLGNBQWMsQ0FBQztBQUM3RDtBQUVBLFVBQVV1QixTQUFTLEdBQUU7RUFDakIsTUFBTW5ELHFFQUFVLENBQUN2RixrRUFBbUIsRUFBRXVILFVBQVUsQ0FBQztBQUNyRDtBQUVBLFVBQVVvQixhQUFhLEdBQUc7RUFDdEIsTUFBTXBELHFFQUFVLENBQUN6RyxnRUFBaUIsRUFBRWlJLFFBQVEsQ0FBQztBQUMvQztBQUVGLFVBQVU2Qix5QkFBeUIsR0FBRTtFQUNqQyxNQUFNckQscUVBQVUsQ0FBQ25HLDhFQUErQixFQUFFdUgsb0JBQW9CLENBQUM7QUFDM0U7QUFFQSxVQUFVa0MsV0FBVyxHQUFFO0VBQ25CLE1BQU10RCxxRUFBVSxDQUFDcEYsNkRBQWMsRUFBRXdILE1BQU0sQ0FBQztBQUM1QztBQUVBLFVBQVVtQixhQUFhLEdBQUU7RUFDckIsTUFBTXZELHFFQUFVLENBQUNqRiwrREFBZ0IsRUFBRXVILFFBQVEsQ0FBQztBQUNoRDtBQUVBLFVBQVVrQixVQUFVLEdBQUU7RUFDbEIsTUFBTXhELHFFQUFVLENBQUM3Riw2REFBYyxFQUFFc0ksS0FBSyxDQUFDO0FBQzNDO0FBRUEsVUFBVWdCLFdBQVcsR0FBRTtFQUNuQixNQUFNekQscUVBQVUsQ0FBQ2hHLDhEQUFlLEVBQUUySSxNQUFNLENBQUM7QUFDN0M7QUFFQSxVQUFVZSxXQUFXLEdBQUU7RUFDbkJ2VyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDekIsTUFBTTRTLHFFQUFVLENBQUMxRiw4REFBZSxFQUFFdUksTUFBTSxDQUFDO0FBQzdDO0FBRWUsVUFBVWhHLFFBQVEsR0FBRTtFQUMvQixNQUFNSCw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNvRyxrQkFBa0IsQ0FBQyxFQUN4QnBHLCtEQUFJLENBQUNtRyxlQUFlLENBQUMsRUFDckJuRywrREFBSSxDQUFDMEcseUJBQXlCLENBQUMsRUFDL0IxRywrREFBSSxDQUFDcUcsbUJBQW1CLENBQUMsRUFDekJyRywrREFBSSxDQUFDc0csa0JBQWtCLENBQUMsRUFDeEJ0RywrREFBSSxDQUFDdUcsbUJBQW1CLENBQUMsRUFDekJ2RywrREFBSSxDQUFDd0csU0FBUyxDQUFDLEVBQ2Z4RywrREFBSSxDQUFDeUcsYUFBYSxDQUFDLEVBQ25CekcsK0RBQUksQ0FBQzJHLFdBQVcsQ0FBQyxFQUNqQjNHLCtEQUFJLENBQUM0RyxhQUFhLENBQUMsRUFDbkI1RywrREFBSSxDQUFDNkcsVUFBVSxDQUFDLEVBQ2hCN0csK0RBQUksQ0FBQzhHLFdBQVcsQ0FBQyxFQUNqQjlHLCtEQUFJLENBQUMrRyxXQUFXLENBQUMsQ0FDcEIsQ0FBQztBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQzs7Ozs7Ozs7Ozs7O0FDbFhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7QUFDVztBQUNDO0FBQ2pCO0FBRVo7QUFDRjtBQUVoQyxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDO0VBQUU3SyxRQUFRO0VBQUVDO0FBQVMsQ0FBQyxLQUFNNkssSUFBSSxJQUFNNVcsTUFBTSxJQUFLO0VBQ3pFRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDO0VBQ25CLE9BQU80VyxJQUFJLENBQUM1VyxNQUFNLENBQUM7QUFDckIsQ0FBQztBQUVELE1BQU02VyxjQUFjLEdBQUcsTUFBTTtFQUMzQixNQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUFFO0VBQzdDLE1BQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFjLEVBQUVILGdCQUFnQixDQUFDO0VBQ3RELE1BQU1NLFFBQVEsR0FBRyxRQUNiQyxTQUF3QyxHQUN4Q0Msb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBVyxDQUFDLENBQUM7RUFDeEQsTUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDaFAsaURBQU8sRUFBRTJPLFFBQVEsQ0FBQztFQUM1Q0ksS0FBSyxDQUFDRSxRQUFRLEdBQUdULGNBQWMsQ0FBQ1UsR0FBRyxDQUFDL0gsOENBQVEsQ0FBQztFQUM3QyxPQUFPNEgsS0FBSztBQUNkLENBQUM7QUFFRCxNQUFNelgsT0FBTyxHQUFHNlgsd0VBQWEsQ0FBQ1osY0FBYyxFQUFFO0VBQzVDYSxLQUFLO0FBQ1AsQ0FBQyxDQUFDO0FBRWE5WCxzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUM1QnRCO0FBQUE7QUFBQTtBQUEyQztBQUU1QixnRUFBQyxHQUFHK1gsSUFBSSxLQUFLO0VBQzFCQyx1REFBUyxFQUFFO0VBQ1gsT0FBT3JQLHFEQUFPLENBQUMsR0FBR29QLElBQUksQ0FBQztBQUN6QixDQUFDO0FBQ0Qsb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0ICcuLi9wYWdlcy9jc3MvY2FsZW5kYXIuY3NzJztcclxuaW1wb3J0Jy4uL3BhZ2VzL2Nzcy9hcHBsYXlvdXQuY3NzJztcclxuXHJcbmNvbnN0ICBGYXNoaW9uYXJ5PSAoe0NvbXBvbmVudH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgICA8dGl0bGU+RmFzaGlvbmFyeTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcblxyXG59O1xyXG4vL19hcHAuanPripQgcGFnZXPrk6TsnZgg6rO17Ya1IOu2gOu2hFxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChGYXNoaW9uYXJ5KTsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyLCBcclxuICAgICAgICAgICAgICAgIHBvc3RcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsIi8vaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbi8vaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgc2luZ2xlUG9zdDogbnVsbCxcclxuICBrZXl3b3JkczogbnVsbCxcclxuICBuZXdMb29rS2V5d29yZHM6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHVwZGF0ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1cGRhdGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgdXBkYXRlUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICByZXR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgcmV0d2VldEVycm9yOiBudWxsLFxyXG4gIHVwbG9hZFVwZGF0ZUxvb2tpbWFnZUxvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZFVwZGF0ZUxvb2tpbWFnZUVycm9yOiBudWxsLFxyXG4gIHVwbG9hZFVwZGF0ZUxvb2tpbWFnZURvbmU6IGZhbHNlLFxyXG4gIHVwZGF0ZUNvbW1lbnRSYXRlTG9hZGluZzogZmFsc2UsXHJcbiAgdXBkYXRlQ29tbWVudFJhdGVFcnJvcjogbnVsbCxcclxuICB1cGRhdGVDb21tZW50UmF0ZURvbmU6IGZhbHNlLFxyXG4gIGNoZWNrRGF0ZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoZWNrRGF0ZUVycm9yOiBudWxsLFxyXG4gIGNoZWNrRGF0ZURvbmU6IGZhbHNlLFxyXG4gIHNlYXJjaEtleXdvcmRMb2FkaW5nOiBmYWxzZSxcclxuICBzZWFyY2hLZXl3b3JkRXJyb3I6IG51bGwsXHJcbiAgc2VhcmNoS2V5d29yZERvbmU6IGZhbHNlLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDSEVDS19EQVRFX1JFUVVFU1QgPSAnQ0hFQ0tfREFURV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIRUNLX0RBVEVfU1VDQ0VTUyA9ICdDSEVDS19EQVRFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfREFURV9GQUlMVVJFID0gJ0NIRUNLX0RBVEVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19DT01NRU5UX0lNQUdFU19SRVFVRVNUID0gJ05FV19DT01NRU5UX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE5FV19DT01NRU5UX0lNQUdFU19TVUNDRVNTID0gJ05FV19DT01NRU5UX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE5FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFID0gJ05FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCA9J1VQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9TVUNDRVNTID0nVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX0ZBSUxVUkUgPSdVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX05FV19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTkVXX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9ORVdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX05FV19QT1NUU19GQUlMVVJFID0gJ0xPQURfTkVXX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9SRVFVRVNUID0gJ1VQREFURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1RfU1VDQ0VTUyA9ICdVUERBVEVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUX0ZBSUxVUkUgPSAnVVBEQVRFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUID0gJ1JFTU9WRV9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyA9ICdSRU1PVkVfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUgPSAnUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTU1FTlRfUkFURV9SRVFVRVNUID0gJ1VQREFURV9DT01NRU5UX1JBVEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ09NTUVOVF9SQVRFX1NVQ0NFU1MgPSAnVVBEQVRFX0NPTU1FTlRfUkFURV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DT01NRU5UX1JBVEVfRkFJTFVSRSA9ICdVUERBVEVfQ09NTUVOVF9SQVRFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9SRVFVRVNUID0gJ1NFQVJDSF9LRVlXT1JEX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyA9ICdTRUFSQ0hfS0VZV09SRF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUgPSAnU0VBUkNIX0tFWVdPUkRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QgPSAnTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1MgPSAnTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTkVXTE9PS19LRVlXT1JEX0ZBSUxVUkUgPSAnTkVXTE9PS19LRVlXT1JEX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4vLyAgIGRhdGEsXHJcbi8vIH0pO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuLy8gICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4vLyAgIGRhdGEsXHJcbi8vIH0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gIH0sXHJcbn0pO1xyXG4vLyDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7IC8v66as7Yq47JyX65CcIOqyjOyLnOq4gCDrqZTsnbjtj6zsiqTtirjsl5Ag7LaU6rCAXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgIGNhc2UgTkVXX0NPTU1FTlRfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBORVdfQ09NTUVOVF9JTUFHRVNfU1VDQ0VTUzpcclxuICAgICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVkdWNlciBpbWFnZVwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgIGNhc2UgTkVXX0NPTU1FTlRfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOntcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0LnNpbmdsZVBvc3Q7XHJcbiAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOntcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0LnNpbmdsZVBvc3Q7XHJcbiAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgY2FzZSBMT0FEX05FV19QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBMT0FEX05FV19QT1NUU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX05FV19QT1NUU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdOyAvL+yXheuhnOuTnCDtlojripTrjbAg7J2066+47KeAIOyjvOyGjCDrgqjslYTsnojsnLzrqbQg7JWI65CY64uI6rmMIOyjvOyGjCDstIjquLDtmZRcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUERBVEVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7JeF642w7J207Yq4IOyZhOujjCDtm4Qg642w7J207YSwOiBcIiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQuc2luZ2xlUG9zdDtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIFxyXG4gICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IG51bGw7ICAgIFxyXG4gICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi64yT6riAIOyCreygnCDrpqzrk4DshJw6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LnNpbmdsZVBvc3QuQ29tbWVudHMgPSBkcmFmdC5zaW5nbGVQb3N0LkNvbW1lbnRzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudXBsb2FkVXBkYXRlTG9va2ltYWdlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZUVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQudXBsb2FkVXBkYXRlTG9va2ltYWdlRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQudXBsb2FkVXBkYXRlTG9va2ltYWdlRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cGxvYWRVcGRhdGVMb29raW1hZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVVBEQVRFX0NPTU1FTlRfUkFURV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRSYXRlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudFJhdGVFcnJvciA9ICBudWxsO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRSYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9DT01NRU5UX1JBVEVfU1VDQ0VTUzpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuMk+q4gCDsoJDsiJgg7IiY7KCVIOyEseqztTogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50UmF0ZUxvYWRpbmcgPSBmYWxzZTsgXHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudFJhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgZHJhZnQuc2luZ2xlUG9zdC5yYXRlQXZlcmFnZSA9IGFjdGlvbi5kYXRhLnJhdGVBdmVyYWdlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9DT01NRU5UX1JBVEVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50UmF0ZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50UmF0ZUVycm9yID0gIGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQ0hFQ0tfREFURV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoZWNrRGF0ZUxvYWRpbmc9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlRXJyb3IgPSAgbnVsbDtcclxuICAgICAgICBkcmFmdC5jaGVja0RhdGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgIENIRUNLX0RBVEVfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5jaGVja0RhdGVMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGVja0RhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEVDS19EQVRFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLrgqDsp5wg7JeQ65+sIO2ZleyduFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlRXJyb3IgPSAgYWN0aW9uLmRhdGEubWVzc2FnZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1Q6XHJcblxyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZEVycm9yID0gbnVsbDtcclxuICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1M6XHJcbiAgICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgZHJhZnQua2V5d29yZHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkU6XHJcblxyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRFcnJvciA9ICBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIE5FV0xPT0tfS0VZV09SRF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubmV3TG9va0tleXdvcmRzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE5FV0xPT0tfS0VZV09SRF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRIHRydWXsnbTrqbQg66Gc65Sp7LC9IOudhOyasOq4sFxyXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIGxvYWRVc2VyQ2FsZW5kYXJEYXRhTG9hZGluZzogZmFsc2UsIC8v7Jyg7KCAIOy6mOumsOuNlCDrjbDsnbTthLAg6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gIGxvYWRVc2VyQ2FsZW5kYXJEYXRhRG9uZTogZmFsc2UsXHJcbiAgbG9hZFVzZXJDYWxlbmRhckRhdGFFcnJvcjogZmFsc2UsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7ZSE66Gc7ZWEIOygleuztCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgY2hhbmdlSW5mb0RvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZUluZm9FcnJvcjogbnVsbCxcclxuICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcclxuICBsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcclxuICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICB1c2VySW5mbzogbnVsbCxcclxuICB1c2VyQ2FsZW5kYXJEYXRhOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9sb2dpbicpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihyZXMuZGF0YSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfUkVRVUVTVCA9ICdMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9DQUxFTkRBUl9EQVRBX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9GQUlMVVJFID0gJ0xPQURfVVNFUl9DQUxFTkRBUl9EQVRBX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9JTkZPX1JFUVVFU1QgPSAnQ0hBTkdFX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfSU5GT19TVUNDRVNTID0gJ0NIQU5HRV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0lORk9fRkFJTFVSRSA9ICdDSEFOR0VfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QUk9GSUxFX0lNQUdFX1JFUVVFU1QgPSAnVVBMT0FEX1BST0ZJTEVfSU1BR0VfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfUFJPRklMRV9JTUFHRV9TVUNDRVNTID0gJ1VQTE9BRF9QUk9GSUxFX0lNQUdFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BST0ZJTEVfSU1BR0VfRkFJTFVSRSA9ICdVUExPQURfUFJPRklMRV9JTUFHRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICBpZDogMSxcclxuICAgIFBvc3RzOiBbe2lkOiAxfV0sXHJcbiAgICBGb2xsb3dpbmdzOiBbe25pY2tuYW1lOiAn67aA6riw7LSIJ30sIHtuaWNrbmFtZTogJ0NoYW5obyBMZWUnfSwge25pY2tuYW1lOiAnbmV1ZSB6ZWFsJ31dLFxyXG4gICAgRm9sbG93ZXJzOiBbe25pY2tuYW1lOiAn67aA6riw7LSIJ30sIHtuaWNrbmFtZTogJ0NoYW5obyBMZWUnfSwge25pY2tuYW1lOiAnbmV1ZSB6ZWFsJ31dXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNUXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLy9kcmFmdOulvCDrsJTqvrjrqbQgaW1tZXLqsIAgc3RhdGXrpbwg67aI67OA7ISxIOyeiOqyjCDslYzslYTshJwg67CU6r+U7KSMICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/tmZTsgrTtkZzqsIAgcmV0dXJuIOyXre2VoOydhCDrjIDsi6DtlaguICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9SRVFVRVNUOiAvL+uLrOugpSDrjbDsnbTthLBcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckNhbGVuZGFyRGF0YUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyQ2FsZW5kYXJEYXRhRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyQ2FsZW5kYXJEYXRhRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9DQUxFTkRBUl9EQVRBX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJDYWxlbmRhckRhdGFMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXNlckNhbGVuZGFyRGF0YSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyQ2FsZW5kYXJEYXRhRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckNhbGVuZGFyRGF0YUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckNhbGVuZGFyRGF0YUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlSW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX0lORk9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuY2hhbmdlSW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAvLyBkcmFmdC51c2VySW5mby5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Vc2VySWQpLmluZm8gPSBhY3Rpb24uZGF0YS5pbmZvO1xyXG4gICAgIGRyYWZ0Lm1lLmluZm8gPSBhY3Rpb24uZGF0YS5pbmZvO1xyXG4gICAgIGRyYWZ0LmNoYW5nZUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVVBMT0FEX1BST0ZJTEVfSU1BR0VfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9QUk9GSUxFX0lNQUdFX1NVQ0NFU1M6e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVkdWNlciBpbWFnZTo6OjpcIiAsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVVBMT0FEX1BST0ZJTEVfSU1BR0VfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHthbGwsICBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHM9IHRydWU7XHJcbiAvL+uwseydmCBhcHAuanPsl5DshJwgQ3JlZGVudGlhbHM6IHRydWXrpbwg7ZaI6riwIOuVjOusuCjsv6DtgqQg7KCE64usKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcblxyXG4gICAgXSk7XHJcbn1cclxuXHJcbi8vZm9yazog7ZW064u5IO2VqOyImOulvCDsi6TtlontlZzri6TripQg65y7LiBjYWxs6rO8IOuLpOumhC5cclxuLy9mb3Jr64qUIOu5hOuPmeq4sCwgY2FsbOydgCDrj5nquLAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwsIGNhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBDSEVDS19EQVRFX0ZBSUxVUkUsXHJcbiAgQ0hFQ0tfREFURV9SRVFVRVNULFxyXG4gIENIRUNLX0RBVEVfU1VDQ0VTUyxcclxuICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX05FV19QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfTkVXX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9ORVdfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICBORVdMT09LX0tFWVdPUkRfRkFJTFVSRSxcclxuICBORVdMT09LX0tFWVdPUkRfUkVRVUVTVCxcclxuICBORVdMT09LX0tFWVdPUkRfU1VDQ0VTUyxcclxuICBORVdfQ09NTUVOVF9JTUFHRVNfRkFJTFVSRSxcclxuICBORVdfQ09NTUVOVF9JTUFHRVNfUkVRVUVTVCxcclxuICBORVdfQ09NTUVOVF9JTUFHRVNfU1VDQ0VTUyxcclxuICBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgUkVUV0VFVF9SRVFVRVNULFxyXG4gIFJFVFdFRVRfU1VDQ0VTUyxcclxuICBTRUFSQ0hfS0VZV09SRF9GQUlMVVJFLFxyXG4gIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QsXHJcbiAgU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVUERBVEVfQ09NTUVOVF9SQVRFX0ZBSUxVUkUsXHJcbiAgVVBEQVRFX0NPTU1FTlRfUkFURV9SRVFVRVNULFxyXG4gIFVQREFURV9DT01NRU5UX1JBVEVfU1VDQ0VTUyxcclxuICBVUERBVEVfUE9TVF9GQUlMVVJFLFxyXG4gIFVQREFURV9QT1NUX1JFUVVFU1QsXHJcbiAgVVBEQVRFX1BPU1RfU1VDQ0VTUyxcclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfRkFJTFVSRSxcclxuICBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCxcclxuICBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSkge1xyXG4gIGNvbnN0IHBvc3RJZCA9IGRhdGEuZ2V0KCdwb3N0SWQnKTtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtwb3N0SWR9L3JlZmVyZW5jZWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbmV3Q29tbWVudEltYWdlcyhhY3Rpb24pe1xyXG4gIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTkVXX0NPTU1FTlRfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBORVdfQ09NTUVOVF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB1cGRhdGVJbWFnZXNBUEkoZGF0YSl7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogdXBkYXRlSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgIFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufSAgICAgICAgICAgICAgICAgLy/so7zshozsl5Ag6re464OlIO2VnOq4gCztirnsiJjrrLjsnpDqsIAg65Ok7Ja06rCA66m0IOyXkOufrOuCmOyEnCBlbmNvZGVVUklDb21wb25lbnTroZwg6rCQ7Iu47KSY7JW8IO2VnOuLpC5cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzL2FsbExvb2tzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE5ld1Bvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHNgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWROZXdQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTmV3UG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTkVXX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX05FV19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQb3N0QVBJKGRhdGEpe1xyXG4gIGNvbnN0IHBvc3RJZCA9IGRhdGEuZ2V0KCdwb3N0SWQnKTtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7cG9zdElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBkYXRlUG9zdChhY3Rpb24pe1xyXG4gIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGRhdGVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUERBVEVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNhdGNoKGVycil7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgdHlwZTogVVBEQVRFX1BPU1RfRkFJTFVSRSxcclxuICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvbW1lbnRBUEkoZGF0YSl7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRJZCA9IGRhdGEuZ2V0KCdjb21tZW50SWQnKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCLrjJPquIAg7IKt7KCcIOyVhOydtOuUlDogXCIsIGNvbW1lbnRJZCk7XHJcblxyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0L2NvbW1lbnQvJHtjb21tZW50SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbW1lbnRSYXRlQVBJKGRhdGEpe1xyXG5cclxuICBjb25zdCBjb21tZW50SWQgPSBkYXRhLmdldCgnY29tbWVudElkJyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwi64yT6riAIOygkOyImCDslYTsnbTrlJQ6IFwiLCBjb21tZW50SWQpO1xyXG5cclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0L2NvbW1lbnRSYXRlLyR7Y29tbWVudElkfWAsIGRhdGEpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUNvbW1lbnQoYWN0aW9uKXtcclxuICB0cnl7XHJcbiAgICBjb25zdCByZW1vdmVSZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnN0IHVwZGF0ZVJlc3VsdCA9IHlpZWxkIGNhbGwodXBkYXRlQ29tbWVudFJhdGVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlbW92ZVJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUERBVEVfQ09NTUVOVF9SQVRFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHVwZGF0ZVJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUERBVEVfQ09NTUVOVF9SQVRFX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuXHJcbmNvbnN0IHBvc3RJZCA9IGRhdGEuZ2V0KCdwb3N0SWQnKTtcclxuIFxyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke3Bvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgIFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tEYXRlQVBJKGRhdGEpe1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC9jaGVja0RhdGVgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoZWNrRGF0ZShhY3Rpb24pe1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoZWNrRGF0ZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gIFxyXG4gICB5aWVsZCBwdXQoe1xyXG4gICAgIHR5cGU6IENIRUNLX0RBVEVfU1VDQ0VTUyxcclxuICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgfSk7XHJcbiB9IGNhdGNoIChlcnIpIHtcclxuICAgY29uc29sZS5lcnJvcihcIuuCoOynnCDtmZXsnbgg7JeQ65+sIO2ZleyduFwiLCBlcnIpO1xyXG4gICB5aWVsZCBwdXQoe1xyXG4gICAgIHR5cGU6IENIRUNLX0RBVEVfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgIH0pO1xyXG4gfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hLZXl3b3JkQVBJKGRhdGEpe1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnL2tleXdvcmRzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2VhcmNoS2V5d29yZChhY3Rpb24pe1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNlYXJjaEtleXdvcmRBUEksIGFjdGlvbi5kYXRhKTtcclxuICBcclxuICAgeWllbGQgcHV0KHtcclxuICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9TVUNDRVNTLFxyXG4gICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICB9KTtcclxuIH0gY2F0Y2ggKGVycikge1xyXG4gICB5aWVsZCBwdXQoe1xyXG4gICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICB9KTtcclxuIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmV3TG9va0tleXdvcmRBUEkoZGF0YSl7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcva2V5d29yZHMvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBuZXdMb29rS2V5d29yZChhY3Rpb24pe1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKG5ld0xvb2tLZXl3b3JkQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgXHJcbiAgIHlpZWxkIHB1dCh7XHJcbiAgICAgdHlwZTogTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1MsXHJcbiAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgIH0pO1xyXG4gfSBjYXRjaCAoZXJyKSB7XHJcbiAgIHlpZWxkIHB1dCh7XHJcbiAgICAgdHlwZTogTkVXTE9PS19LRVlXT1JEX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICB9KTtcclxuIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hOZXdDb21tZW50SW1hZ2VzKCl7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChORVdfQ09NTUVOVF9JTUFHRVNfUkVRVUVTVCwgbmV3Q29tbWVudEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwZGF0ZUltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9SRVFVRVNULCB1cGRhdGVJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuLy8gICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwZGF0ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUERBVEVfUE9TVF9SRVFVRVNULCB1cGRhdGVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVDb21tZW50KCl7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfQ09NTUVOVF9SRVFVRVNULCByZW1vdmVDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE5ld1Bvc3RzKCl7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX05FV19QT1NUU19SRVFVRVNULCBsb2FkTmV3UG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoZWNrRGF0ZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENIRUNLX0RBVEVfUkVRVUVTVCwgY2hlY2tEYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2VhcmNoS2V5d29yZCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QsIHNlYXJjaEtleXdvcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hOZXdMb29rS2V5d29yZCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KE5FV0xPT0tfS0VZV09SRF9SRVFVRVNULCBuZXdMb29rS2V5d29yZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoTmV3Q29tbWVudEltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoVXBkYXRlSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVW5MaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVXBkYXRlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hOZXdMb29rS2V5d29yZCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZUNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFNlYXJjaEtleXdvcmQpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaENoZWNrRGF0ZSksXHJcbiAgICBmb3JrKHdhdGNoTG9hZE5ld1Bvc3RzKVxyXG4gIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge2FsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgQ0hBTkdFX0lORk9fRkFJTFVSRSwgQ0hBTkdFX0lORk9fUkVRVUVTVCwgQ0hBTkdFX0lORk9fU1VDQ0VTUywgXHJcbiAgICBGT0xMT1dfRkFJTFVSRSwgRk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBcclxuICAgIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsIFxyXG4gICAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUywgXHJcbiAgICBMT0FEX01ZX0lORk9fRkFJTFVSRSwgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfTVlfSU5GT19TVUNDRVNTLCBcclxuICAgIExPR19JTl9GQUlMVVJFLCBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLCBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSwgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFxyXG4gICAgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUywgXHJcbiAgICBVUExPQURfUFJPRklMRV9JTUFHRV9SRVFVRVNULCBVUExPQURfUFJPRklMRV9JTUFHRV9TVUNDRVNTLCBVUExPQURfUFJPRklMRV9JTUFHRV9GQUlMVVJFLCBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9TVUNDRVNTLCBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9GQUlMVVJFLCBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9SRVFVRVNULFxyXG5cclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJDYWxlbmRhckRhdGFBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlckNhbGVuZGFyRGF0YShhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJDYWxlbmRhckRhdGFBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9DQUxFTkRBUl9EQVRBX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2Vyc0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCLroZzrk5wg7Jyg7KCAIOuNsOydtO2EsDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93aW5ncycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICBcclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VJbmZvQVBJKGRhdGEpe1xyXG4gICAgY29uc29sZS5sb2coJ3NhZ2FzIGRhdGE6Ojo6JyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvaW5mbycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlSW5mbyhhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VJbmZvQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IENIQU5HRV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vdW5mb2xsb3dgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbi8vYWN0aW9uID0gbG9naW4sIGFjdGlvbi50eXBlOiDroZzqt7jsnbgg66as7YCY7Iqk7Yq4LCBhY3Rpb24uZGF0YTog66Gc6re47J24IOuNsOydtO2EsFxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKXtcclxuICAgIHRyeXtcclxuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTXHJcbiAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7IC8vZGF0YeuKlCBlbWFpbCwgcGFzc3dvcmQsIG5pY2tuYW1l7J20652864qUIOqwneyytFxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNhZ2EgaW1hZ2U6Ojo6XCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9wcm9maWxlSW1hZ2UnLCBkYXRhKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgIFxyXG4gICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IFVQTE9BRF9QUk9GSUxFX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBVUExPQURfUFJPRklMRV9JTUFHRV9GQUlMVVJFLFxyXG4gICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24qIHdhdGNoVXBsb2FkUHJvZmlsZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX1BST0ZJTEVfSU1BR0VfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgbG9hZEZvbGxvd2luZ3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hJbmZvKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9JTkZPX1JFUVVFU1QsIGNoYW5nZUluZm8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlckNhbGVuZGFyRGF0YSgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9SRVFVRVNULCBsb2FkVXNlckNhbGVuZGFyRGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIGNvbnNvbGUubG9nKFwid2F0Y2hTaW5VcFwiKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZFByb2ZpbGUpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFVzZXJDYWxlbmRhckRhdGEpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcbiAgICAgICAgZm9yayh3YXRjaEluZm8pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9naW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApXHJcbiAgICBdKSAgIFxyXG59XHJcblxyXG4vL3B1dOydtCBkaXNwYXRjaOydmCDsl63tlaAsIOyVhOuemCDshLjqsJzqsIAg7J2067Kk7Yq466as7Iqk64SI7JmAIOqwmeydgCDsl63tlaBcclxuLy90YWtl64qUIOydvO2ajOyEseydtOudvCB3aGlsZeusuOycvOuhnCDqsJDsi7jslbwg66y07ZWc7Z6IIOyLpO2WiSDqsIDriqVcclxuLy93aGlsZSB0YWtl64qUIOuPmeq4sOyggeycvOuhnCDrj5nsnpHtlZjsp4Drp4wgdGFrZUV2ZXJ564qUIOu5hOuPmeq4sOuhnCDrj5nsnpEuIHRha2VFdmVyeeuhnCB3aGlsZeusuCDrjIDssrRcclxuLy90YWtlTGF0ZXN0OiDsi6TsiJjroZwg7Jes65+s67KIIOuPmeyLnOyXkCDriIzrn6zrj4Qg6rCA7J6lIOuniOyngOuniSDsmpTssq3rp4wg7IiY7ZaJLuuhnOuUqeykkeyduCDslZ7shKAg7JqU7LKt7J20IO2VtOuLuVxyXG4vL3Rha2VMYXRlc3TripQg7J2R64u17J2EIOy3qOyGjO2VmOuKlOqxsOyngCDsmpTssq3snYQg7Leo7IaM7ZWY64qU6rKMIOyVhOuLmC5cclxuLy90YWtlTGVhZGluZzogdGFrZUxhdGVzdOyZgCDrsJjrjIDroZwg6rCA7J6lIOyymOydjCDsmpTssq3rp4wg7IiY7ZaJIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsImltcG9ydCB7IGVuYWJsZUVTNSwgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XHJcbiAgZW5hYmxlRVM1KCk7XHJcbiAgcmV0dXJuIHByb2R1Y2UoLi4uYXJncyk7XHJcbn07XHJcbi8v7J247YSw64S3IOydteyKpO2UjOuhnOufrOyXkOyEnCDsnbTrqLjqsIAg7J6R64+Z7J2EIOyViO2VtOyEnCDshKTsoJXsnYQg7ZW07KSY7JW8IO2VqC4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9