module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__("cDcd"));
var _router = __webpack_require__("nOHt");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (false) {}
  return WithRouterWrapper;
}

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "1zst":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LAVF");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("p+NB");
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Vn7o");
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const AppLayout = ({
  children
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    me,
    logOutLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const {
    keywords
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const resultWords = keywords === null || keywords === void 0 ? void 0 : keywords.map(items => ({
    value: items.name
  }));
  const {
    0: searchInput,
    1: setSearchInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  console.log(resultWords);
  const onChangeSearchInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const value = e.target.value;
    setSearchInput(value);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__[/* SEARCH_KEYWORD_REQUEST */ "P"],
      data: value
    });
  }, [dispatch]);
  const onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(`/hashtag/${searchInput}`);
  }, [searchInput]);
  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__[/* logoutRequestAction */ "Q"])());
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace(`/`);
  }, []);
  const handleSelect = value => {
    setSearchInput(value);
  };
  return __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    id: "menu1",
    mode: "horizontal"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("h1", {
    className: "item1"
  }, "FASHIONARY"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile"
  }, __jsx("h3", {
    className: "item1"
  }, "My Profile"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/allPosts"
  }, __jsx("h3", {
    className: "item1"
  }, "All Looks"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    className: "item2"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "\uCC3E\uACE0 \uC2F6\uC740 \uBE0C\uB79C\uB4DC\uB97C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694."
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    dropdownMatchSelectWidth: 200,
    options: resultWords,
    id: "layout",
    onSelect: handleSelect
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
    id: "layout",
    className: "search1",
    value: searchInput,
    onChange: onChangeSearchInput,
    onSearch: onSearch
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, __jsx("h4", {
    className: "item1"
  }, me ? "현재 로그인 계정: " + me.nickname : null)), me ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "button1",
    onClick: onLogOut,
    loading: logOutLoading
  }, "\uB85C\uADF8\uC544\uC6C3")) : null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 8
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 6
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12
  }, children)), __jsx(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_7__["Footer"], {
    className: "footer"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"], {
    title: "Info"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "\uAC1C\uBC1C\uC790"
  }, "\uACFD\uB2E4\uC740"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "\uC5F0\uB77D\uCC98"
  }, "010 - 3384 - 2874"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "Git-Hub"
  }, __jsx("a", {
    target: "_blank",
    href: "https://github.com/Gwak-daeun/fashionary.git"
  }, "Source code")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "\uC774\uB825\uC11C"
  }, __jsx("a", {
    target: "_blank",
    href: "https://knowing-yogurt-cd2.notion.site/3dbeb300ba74486689474100d5c98971"
  }, "\uAC1C\uBC1C\uC790\uC758 Notion")))));
};
/* harmony default export */ __webpack_exports__["a"] = (AppLayout);

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Qrvq");


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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Qrvq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/AppLayout.js
var AppLayout = __webpack_require__("1zst");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/userComponent/userDateCellRender.js
var __jsx = external_react_default.a.createElement;







const OneImage = external_styled_components_default.a.div.withConfig({
  displayName: "userDateCellRender__OneImage",
  componentId: "sc-1tyjog1-0"
})([".img1{width:60px;}"]);
const UserDateCellRender = value => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const {
    id
  } = router.query;
  const {
    userCalendarData,
    userInfo
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  Object(external_react_["useEffect"])(() => {
    dispatch({
      type: user["q" /* LOAD_USER_CALENDAR_DATA_REQUEST */],
      data: userInfo.id
    });
  }, []);
  const getDayInfo = () => {
    const calendarData = [];
    let diaryMoment;
    for (let i = 0; i < userCalendarData.length; i++) {
      // console.log("생성 날짜",  moment(userCalendarData[i].createdAt).format("YYYY-MM-DD"));
      diaryMoment = external_moment_default()(userCalendarData[i].createdAt).format("YYYY-MM-DD");
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
    switch (external_moment_default()(value).format("YY-MM-DD")) {
      case external_moment_default()(date).format("YY-MM-DD"):
        return __jsx("a", {
          href: `http://localhost:3000/post/${postId}`
        }, __jsx(OneImage, null, __jsx("img", {
          className: "img1",
          src: `http://localhost:3065/${photo}`
        })));
      default:
        return __jsx("div", null);
    }
  };
  const NameRander = ({
    date,
    name
  }) => {
    switch (external_moment_default()(value).format("YY-MM-DD")) {
      case external_moment_default()(date).format("YY-MM-DD"):
        return __jsx("h5", null, name);
      default:
        return __jsx("div", null);
    }
  };
  const dayInfo = getDayInfo();
  return __jsx("div", null, dayInfo.map(info => __jsx("div", {
    key: info.id
  }, __jsx(NameRander, {
    date: info.createdAt,
    name: info.title
  }), __jsx(PhotoRander, {
    postId: info.id,
    date: info.createdAt,
    photo: info.photo
  }))));
};
/* harmony default export */ var userDateCellRender = (UserDateCellRender);
// CONCATENATED MODULE: ./components/userComponent/userInfo.js
var userInfo_jsx = external_react_default.a.createElement;




const {
  Meta
} = external_antd_["Card"];

const OneUserInfo = external_styled_components_default.a.div.withConfig({
  displayName: "userInfo__OneUserInfo",
  componentId: "sc-1ll5eeg-0"
})([".card1{margin-left:15px;width:250px;}.img1{width:100%;height:350px;}"]);
const userInfo_originalImage = `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`;
const UserInfo = () => {
  const {
    userInfo
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  console.log("유저인포: ", userInfo);
  return userInfo_jsx("div", null, userInfo_jsx(OneUserInfo, null, userInfo_jsx(external_antd_["Form"], {
    encType: "multipart/form-data"
  }, userInfo_jsx(external_antd_["Card"], {
    title: userInfo.nickname + "'s Info",
    className: "card1",
    cover: userInfo_jsx(OneUserInfo, null, userInfo_jsx("img", {
      className: "img1",
      src: userInfo.Image.src === userInfo_originalImage ? userInfo.Image.src : `http://localhost:3065/${userInfo.Image.src}`
    }))
  }, userInfo_jsx(Meta, {
    title: userInfo_jsx(external_antd_["Input"], {
      readOnly: true,
      defaultValue: userInfo.nickname
    }),
    description: userInfo_jsx(external_antd_["Input"], {
      readOnly: true,
      defaultValue: userInfo.info === null ? "자기자신을 한 단어로 표현한다면?" : "한마디:  " + userInfo.info
    })
  })))));
};
/* harmony default export */ var userComponent_userInfo = (UserInfo);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// CONCATENATED MODULE: ./components/userComponent/userLikeList.js

var userLikeList_jsx = external_react_default.a.createElement;






const OneUserLikeList = external_styled_components_default.a.div.withConfig({
  displayName: "userLikeList__OneUserLikeList",
  componentId: "sc-bbhc3b-0"
})([".icons{font-size:15px;}.card1{width:250px;height:240px;margin-top:40px;margin-left:18px;}.img1{width:100%;}"]);
const UserLikeList = () => {
  const {
    userInfo
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(external_react_["useState"])(false);
  console.log("인용리스트", userInfo);
  const referModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const IfLike = () => {
    if (userInfo.Liked[0] !== undefined) {
      return userLikeList_jsx("li", null, userLikeList_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faHeart"],
        className: "icons"
      }), " ", userInfo.Liked[0].lookName);
    }
    if (userInfo.Liked[1] !== undefined) {
      return userLikeList_jsx("li", null, userLikeList_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faHeart"],
        className: "icons"
      }), userInfo.Liked[1].lookName);
    }
    if (userInfo.Liked[2] !== undefined) {
      return userLikeList_jsx("li", null, userLikeList_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faHeart"],
        className: "icons"
      }), userInfo.Liked[2].lookName);
    } else {
      return userLikeList_jsx("div", null, userLikeList_jsx(external_antd_["Empty"], {
        description: userLikeList_jsx("span", null, "\uC88B\uC544\uC694\uB97C \uD55C Look\uC774 \uC5C6\uC5B4\uC694.")
      }));
    }
  };
  return userLikeList_jsx("div", {
    className: "site-card-border-less-wrapper"
  }, userLikeList_jsx(OneUserLikeList, null, userLikeList_jsx(external_antd_["Card"], {
    title: "I like this!",
    className: "card1",
    extra: userLikeList_jsx("a", {
      onClick: referModal
    }, "More")
  }, userLikeList_jsx(IfLike, null)), userLikeList_jsx(external_antd_["Modal"], {
    title: userInfo.nickname + " 의 좋아요 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen
  }, userLikeList_jsx(external_antd_["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: userInfo.Liked,
    renderItem: item => userLikeList_jsx(external_antd_["List"].Item, null, userLikeList_jsx(external_antd_["Card"], {
      title: userLikeList_jsx("a", {
        href: `http://localhost:3000/post/${item.id}`
      }, item.lookName),
      cover: userLikeList_jsx("a", {
        href: `http://localhost:3000/post/${item.id}`
      }, userLikeList_jsx(OneUserLikeList, null, userLikeList_jsx("img", {
        className: "img1",
        alt: "example",
        src: `http://localhost:3065/${item.Images[0].src}`
      }))),
      className: "card2"
    }))
  }))));
};
/* harmony default export */ var userLikeList = (UserLikeList);
// CONCATENATED MODULE: ./components/userComponent/userMention.js

var userMention_jsx = external_react_default.a.createElement;






const {
  Meta: userMention_Meta
} = external_antd_["Card"];

const OneUserMention = external_styled_components_default.a.div.withConfig({
  displayName: "userMention__OneUserMention",
  componentId: "sc-1k9eub8-0"
})([".card1{width:250px;height:220px;float:'left';margin-left:17px;margin-top:36px;}.icons{font-size:15px;}.img1{width:100%;}.card2{width:110px;}"]);
const UserMention = () => {
  const {
    userInfo
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
    // for(let i = 0; i < me.References.length; i++){
    //   return( <li>{me.References[i].content}</li>);
    // }

    if (userInfo.References[0] !== undefined) {
      return userMention_jsx("li", null, userMention_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faPenNib"],
        className: "icons"
      }), userInfo.References[0].content);
    }
    if (userInfo.References[1] !== undefined) {
      return userMention_jsx("li", null, userMention_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faPenNib"],
        className: "icons"
      }), userInfo.References[1].content);
    }
    if (userInfo.References[2] !== undefined) {
      return userMention_jsx("li", null, userMention_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faPenNib"],
        className: "icons"
      }), userInfo.References[2].content);
    } else {
      return userMention_jsx("div", null, userMention_jsx(external_antd_["Empty"], {
        description: userMention_jsx("span", null, "\uC544\uC9C1 \uC778\uC6A9\uC774 \uC5C6\uC5B4\uC694.")
      }));
    }
  };
  return userMention_jsx(OneUserMention, null, userMention_jsx(external_antd_["Card"], {
    title: "I refered...",
    extra: userMention_jsx("a", {
      onClick: referModal
    }, "More"),
    className: "card1"
  }, userMention_jsx(IfRefer, null)), userMention_jsx(external_antd_["Modal"], {
    title: userInfo.nickname + " 의 인용 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen
  }, userMention_jsx(external_antd_["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: userInfo.References,
    renderItem: item => userMention_jsx(external_antd_["List"].Item, null, userMention_jsx(external_antd_["Card"], {
      cover: userMention_jsx("a", {
        href: `http://localhost:3000/post/${item.id}`
      }, userMention_jsx(OneUserMention, null, userMention_jsx("img", {
        className: "img1",
        alt: "example",
        src: `http://localhost:3065/${item.referSrc}`
      }))),
      className: "card2"
    }, userMention_jsx(userMention_Meta, {
      description: item.content
    })))
  })));
};
/* harmony default export */ var userMention = (UserMention);
// EXTERNAL MODULE: ./store/configureStore.js + 4 modules
var configureStore = __webpack_require__("AQn3");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__("s7eq");

// CONCATENATED MODULE: ./components/userComponent/userFollowers.js

var userFollowers_jsx = external_react_default.a.createElement;






const Li = external_styled_components_default.a.li.withConfig({
  displayName: "userFollowers__Li",
  componentId: "sc-154qdjs-0"
})([".fIcon{font-size:15px;}"]);
const OneUserFollower = external_styled_components_default.a.div.withConfig({
  displayName: "userFollowers__OneUserFollower",
  componentId: "sc-154qdjs-1"
})([".card1{width:360px;height:215px;}.card2{width:110px;}.img1{width:100%;}.a1{margin-left:30px;}"]);
const UserFollowers = () => {
  const {
    userInfo
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
    if (userInfo.Followers[0] !== undefined) {
      return userFollowers_jsx(Li, null, userFollowers_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_regular_svg_icons_["faSquare"],
        className: "ficon"
      }), " ", userInfo.Followers[0].nickname);
    }
    if (userInfo.Followers[1] !== undefined) {
      return userFollowers_jsx(Li, null, userFollowers_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_regular_svg_icons_["faSquare"],
        className: "ficon"
      }), userInfo.Followers[1].nickname);
    }
    if (userInfo.Followers[2] !== undefined) {
      return userFollowers_jsx(Li, null, userFollowers_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_regular_svg_icons_["faSquare"],
        className: "ficon"
      }), userInfo.Followers[2].nickname);
    } else {
      return userFollowers_jsx("div", null, userFollowers_jsx(external_antd_["Empty"], {
        description: userFollowers_jsx("span", null, "\uC544\uC9C1 \uD314\uB85C\uC6CC\uAC00 \uC5C6\uC5B4\uC694.")
      }));
    }
  };
  const originalImage = `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`;
  return userFollowers_jsx("div", null, userFollowers_jsx(OneUserFollower, null, userFollowers_jsx(external_antd_["Card"], {
    title: "Followers",
    extra: userFollowers_jsx("a", {
      onClick: referModal
    }, "More"),
    className: "card1"
  }, userFollowers_jsx(IfFollower, null)), userFollowers_jsx(external_antd_["Modal"], {
    title: userInfo.nickname + " 의 팔로워 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen
  }, userFollowers_jsx(external_antd_["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: userInfo.Followers,
    renderItem: items => userFollowers_jsx(external_antd_["List"].Item, null, userFollowers_jsx(OneUserFollower, null, userFollowers_jsx("a", {
      href: `http://localhost:3000/user/${items.id}`
    }, userFollowers_jsx(external_antd_["Avatar"], {
      size: 100,
      src: items.Image.src === originalImage ? originalImage : `http://localhost:3065/${items.Image.src}`
    })), userFollowers_jsx("a", {
      className: "a1",
      href: `http://localhost:3000/user/${items.id}`
    }, items.nickname)))
  }))));
};
/* harmony default export */ var userFollowers = (UserFollowers);
// CONCATENATED MODULE: ./components/userComponent/userFollowings.js

var userFollowings_jsx = external_react_default.a.createElement;






const OneUserFollowing = external_styled_components_default.a.div.withConfig({
  displayName: "userFollowings__OneUserFollowing",
  componentId: "sc-1jf08l-0"
})([".icons{font-size:15px;}.card1{width:360px;margin-left:30px;height:215px;}.img1{width:100%;}.card2{width:110px;}.a1{margin-left:30px;}"]);
const UserFollowings = () => {
  const {
    userInfo
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
    if (userInfo.Followings[0] !== undefined) {
      return userFollowings_jsx("li", null, userFollowings_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faSquare"],
        className: "icons"
      }), " ", userInfo.Followings[0].nickname);
    }
    if (userInfo.Followings[1] !== undefined) {
      return userFollowings_jsx("li", null, userFollowings_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faSquare"],
        className: "icons"
      }), userInfo.Followings[1].nickname);
    }
    if (userInfo.Followings[2] !== undefined) {
      return userFollowings_jsx("li", null, userFollowings_jsx(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faSquare"],
        className: "icons"
      }), userInfo.Followings[2].nickname);
    } else {
      return userFollowings_jsx("div", null, userFollowings_jsx(external_antd_["Empty"], {
        description: userFollowings_jsx("span", null, "\uC544\uC9C1 \uD314\uB85C\uC789\uC774 \uC5C6\uC5B4\uC694.")
      }));
    }
  };
  const originalImage = `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`;
  return userFollowings_jsx("div", {
    className: "site-card-border-less-wrapper"
  }, userFollowings_jsx(OneUserFollowing, null, userFollowings_jsx(external_antd_["Card"], {
    title: "Followings",
    className: "card1",
    extra: userFollowings_jsx("a", {
      onClick: referModal
    }, "More")
  }, userFollowings_jsx(IfFollowing, null)), userFollowings_jsx(external_antd_["Modal"], {
    title: userInfo.nickname + " 의 팔로잉 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen
  }, userFollowings_jsx(external_antd_["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: userInfo.Followings,
    renderItem: items => userFollowings_jsx(external_antd_["List"].Item, null, userFollowings_jsx(OneUserFollowing, null, userFollowings_jsx("a", {
      href: `http://localhost:3000/user/${items.id}`
    }, userFollowings_jsx(external_antd_["Avatar"], {
      size: 100,
      src: items.Image.src === originalImage ? originalImage : `http://localhost:3065/${items.Image.src}`
    })), userFollowings_jsx("a", {
      className: "a1",
      href: `http://localhost:3000/user/${items.id}`
    }, items.nickname)))
  }))));
};
/* harmony default export */ var userFollowings = (UserFollowings);
// CONCATENATED MODULE: ./pages/user/[id].js
var _id_jsx = external_react_default.a.createElement;

















const OneUser = external_styled_components_default.a.div.withConfig({
  displayName: "id__OneUser",
  componentId: "sc-18hvwfa-0"
})([".div1{position:relative;width:1250px;}.div2{float:left;}.section1{margin-top:50px;}.button1{background-color:black;color:white;}.calendar1{width:700px;height:1010px;}.row1{margin-top:15px;}"]);
const User = () => {
  const router = Object(router_["useRouter"])();
  const {
    id
  } = router.query;
  const {
    userInfo,
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  Object(external_react_["useEffect"])(() => {
    //다른 유저 프로필로 이동 시, 접속 중인 아이디와 같은지 비교 후 같다면 홈화면으로 이동
    if (id == me.id) {
      router_default.a.replace('/');
    }
    if (!(me && me.id)) {
      alert("로그인 후 이용 가능합니다.");
      router_default.a.push('/');
    }
  }, []);
  return _id_jsx(AppLayout["a" /* default */], null, _id_jsx(OneUser, null, _id_jsx("div", {
    className: "div1"
  }, _id_jsx("section", {
    className: "section1"
  }, _id_jsx(external_antd_["Row"], null, _id_jsx("h1", null, userInfo.nickname, "'s Profile")), _id_jsx(external_antd_["Row"], null, _id_jsx("div", {
    className: "div2"
  }, _id_jsx(external_antd_["Card"], null, _id_jsx(external_antd_["Calendar"], {
    className: "calendar1",
    dateCellRender: userDateCellRender
  }))), _id_jsx("div", {
    className: "div2"
  }, _id_jsx(userComponent_userInfo, null), _id_jsx(userMention, null), _id_jsx(userLikeList, null))), _id_jsx(external_antd_["Row"], {
    className: "row1"
  }, _id_jsx(userFollowers, null), _id_jsx(userFollowings, null))))));
};
const getServerSideProps = configureStore["a" /* default */].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  external_axios_default.a.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    external_axios_default.a.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: user["t" /* LOAD_USER_REQUEST */],
    data: context.params.id
  });
  context.store.dispatch({
    type: user["n" /* LOAD_MY_INFO_REQUEST */]
  });
  context.store.dispatch(external_redux_saga_["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ var _id_ = __webpack_exports__["default"] = (User);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Vn7o":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/layout");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__("cDcd"));
var _router = __webpack_require__("elyg");
var _router2 = __webpack_require__("nOHt");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (false) {}
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__("X24+");
var _denormalizePagePath = __webpack_require__("wkBG");
var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));
var _utils = __webpack_require__("g/15");
var _isDynamic = __webpack_require__("/jkW");
var _parseRelativeUrl = __webpack_require__("hS4m");
var _querystring = __webpack_require__("3WeD");
var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));
var _routeMatcher = __webpack_require__("gguc");
var _routeRegex = __webpack_require__("YTqd");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (false) {}
  return path;
}
function delLocale(path, locale) {
  if (false) {}
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (false) {}
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (false) {}
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);
      if (false) {}
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (false) {}
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (false) {}
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (false) {}
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__("6D7l"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (false) {}
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (false) {}
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__("g/15");
var _querystring = __webpack_require__("3WeD");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

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

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");
var _interopRequireDefault = __webpack_require__("TqRt");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__("cDcd"));
var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__("Osoz");
var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

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