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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/layout/layout */ "antd/lib/layout/layout");
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const AppLayout = ({
  children
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    me,
    logOutLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);
  const {
    keywords
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.post);
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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["SEARCH_KEYWORD_REQUEST"],
      data: value
    });
  }, [dispatch]);
  const onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/hashtag/${searchInput}`);
  }, [searchInput]);
  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_6__["logoutRequestAction"])());
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace(`/`);
  }, []);
  const handleSelect = value => {
    setSearchInput(value);
  };
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    id: "menu1",
    mode: "horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 16
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "item1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 32
    }
  }, "FASHIONARY"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "item1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 39
    }
  }, "My Profile"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/allPosts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "item1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 45
    }
  }, "All Looks"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    className: "item2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "\uCC3E\uACE0 \uC2F6\uC740 \uBE0C\uB79C\uB4DC\uB97C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    dropdownMatchSelectWidth: 200,
    options: resultWords,
    id: "layout",
    onSelect: handleSelect,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
    id: "layout",
    className: "search1",
    value: searchInput,
    onChange: onChangeSearchInput,
    onSearch: onSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "item1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, me ? "현재 로그인 계정: " + me.nickname : null)), me ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "button1",
    onClick: onLogOut,
    loading: logOutLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, "\uB85C\uADF8\uC544\uC6C3")) : null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, children)), __jsx(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_8__["Footer"], {
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"], {
    title: "Info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "\uAC1C\uBC1C\uC790",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "\uACFD\uB2E4\uC740"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "\uC5F0\uB77D\uCC98",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "010 - 3384 - 2874"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "Git-Hub",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("a", {
    target: "_blank",
    href: "https://github.com/Gwak-daeun/fashionary.git",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 56
    }
  }, "Source code")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "\uC774\uB825\uC11C",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx("a", {
    target: "_blank",
    href: "https://knowing-yogurt-cd2.notion.site/3dbeb300ba74486689474100d5c98971",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 52
    }
  }, "\uAC1C\uBC1C\uC790\uC758 Notion")))));
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/comments.js":
/*!********************************!*\
  !*** ./components/comments.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score */ "./components/score.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\comments.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const OneComments = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "comments__OneComments",
  componentId: "sc-8a0us7-0"
})([".card1{width:390px;height:665px;margin-left:740px;border-color:#F0F0F0;}.div1{margin-left:70px;}.icon1{font-size:30px;}.button1{margin-left:210px;margin-top:595px;position:absolute;}"]);
const Comments = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: fileList,
    1: setFileList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: postsPerPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  // console.log("댓글: ", post.Comments);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentComments = post.Comments.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  console.log("total opinions " + post.Comments.length);
  console.log("postsPerPage " + postsPerPage);
  for (let i = 1; i <= Math.ceil(post.Comments.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleRate = value => {
    setValue(value);
    console.log("점수:::" + value);
  };

  //댓글 다음 페이지로 이동
  const upClick = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("마지막 댓글이에요.");
    }
    ;
  };

  //댓글 이전 페이지로 이동
  const downClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      alert("가장 최신 댓글이에요.");
    }
    ;
  };
  const onRemoveComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    const formData = new FormData();
    formData.append('PostId', singlePost.id);
    formData.append('commentId', currentComments[0].id);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["REMOVE_COMMENT_REQUEST"],
      data: formData
    }, window.location.reload());
  }, [id]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(OneComments, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    encType: "multipart/form-data",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, id && currentComments[0].UserId === id ? __jsx(OneComments, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "danger",
    className: "button1",
    onClick: onRemoveComment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, "\uB313\uAE00 \uC0AD\uC81C")) : null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 23
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 23
    }
  }, "Comment"), __jsx("div", {
    className: "div1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 23
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CaretLeftOutlined"], {
    className: "icon1",
    onClick: downClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 27
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CaretRightOutlined"], {
    className: "icon1",
    onClick: upClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 27
    }
  })), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 23
    }
  }, " ", currentPage, " / ", post.Comments.length, " "))), __jsx(_score__WEBPACK_IMPORTED_MODULE_4__["default"], {
    comments: currentComments,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ }),

/***/ "./components/newComment.js":
/*!**********************************!*\
  !*** ./components/newComment.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/TextArea */ "antd/lib/input/TextArea");
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\newComment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const OneComment = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "newComment__OneComment",
  componentId: "sc-j00rf7-0"
})([".card1{width:390px;height:665px;margin-left:740px;border-color:'#F0F0F0';}.rate1{font-size:50px;}.textArea1{height:110px;resize:'none';}"]);
const NewComment = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: fileList,
    1: setFileList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isUploading,
    1: setIsUploading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    imagePaths,
    addCommentDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [content, onChangeContent, setContent] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addCommentDone === true) {
      setContent('');
      setFileList([]);
      setValue(0);
    }
  }, [addCommentDone]);
  const handleRate = value => {
    setValue(value);
    console.log("점수:::" + value);
  };
  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(({
    fileList: newFileList
  }) => {
    setFileList(newFileList);
  }, []);
  const beforeUpload = file => {
    const imageFormData = new FormData();
    imageFormData.append('image', file);
    if (isUploading) {
      return false;
    }
    setIsUploading(true);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["NEW_COMMENT_IMAGES_REQUEST"],
      data: imageFormData
    }).then(() => {
      setIsUploading(false);
    }).catch(() => {
      setIsUploading(false);
    });
    return false;
  };

  //미리보기
  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow === null || imgWindow === void 0 ? void 0 : imgWindow.document.write(image.outerHTML);
  };

  //댓글 등록
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(({
    fileList: newFileList
  }) => {
    if (!content || !content.trim()) {
      return alert('댓글 내용을 작성하세요.');
    }
    if (value === 0) {
      return alert('별점으로 Look의 점수를 주세요.');
    }
    const formData = new FormData();
    setFileList(fileList);
    for (let i = 0; i < fileList.length; i++) {
      formData.append('image', fileList[i].originFileObj);
    }
    formData.append('content', content);
    formData.append('rate', value);
    formData.append('postId', post.id);
    formData.append('userId', id);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_REQUEST"],
      data: formData
    });
  }, [content, value, imagePaths]);
  const onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["REMOVE_IMAGE"],
      data: index
    });
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx(OneComment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "card1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 22
    }
  }, "Comment")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 22
    }
  }, "My rate is...")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 16
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    className: "rate1",
    onChange: handleRate,
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 20
    }
  }, "My commnet is...")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, " ", __jsx(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_2___default.a, {
    showCount: true,
    maxLength: 250,
    value: content,
    onChange: onChangeContent,
    className: "textArea1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 22
    }
  }, "I recommend this!")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 22
    }
  }, "\uC544\uC774\uD15C \uCD94\uCC9C\uC740 2\uAC1C\uAE4C\uC9C0 \uAC00\uB2A5\uD574\uC694.")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    name: "image",
    listType: "picture-card",
    multiple: true,
    fileList: fileList,
    onChange: onChangeImages,
    onPreview: onPreview,
    onRemove: onRemoveImage,
    beforeUpload: beforeUpload,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 16
    }
  }, fileList.length < 2 && 'Drag images or click')), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, "\uB313\uAE00 \uB2EC\uAE30")))));
};
/* harmony default export */ __webpack_exports__["default"] = (NewComment);

/***/ }),

/***/ "./components/noComments.js":
/*!**********************************!*\
  !*** ./components/noComments.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\noComments.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const OneNoComment = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "noComments__OneNoComment",
  componentId: "sc-1551tpu-0"
})([".card1{width:390px;height:665px;margin-left:740px;border-color:'#F0F0F0';}.div1{text-align:center;margin-right:50px;}.img1{width:100px;}"]);
const NoComments = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(OneNoComment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: "card1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "div1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "img1",
    src: "https://cdn-icons-png.flaticon.com/512/142/142313.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "\uB313\uAE00\uC774 \uC5C6\uC5B4\uC694! ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 30
    }
  }), " \uCCAB \uB313\uAE00\uC744 \uB2EC\uC544\uC8FC\uC138\uC694.")))));
};
/* harmony default export */ __webpack_exports__["default"] = (NoComments);

/***/ }),

/***/ "./components/score.js":
/*!*****************************!*\
  !*** ./components/score.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input/TextArea */ "antd/lib/input/TextArea");
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\score.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const OneSore = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "score__OneSore",
  componentId: "sc-350mca-0"
})([".rate1{font-size:50px;}.textArea1{height:110px;resize:none;}.img1{width:100px;}.button1{margin-left:100px;}"]);
const Score = ({
  comments
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(OneSore, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 14
    }
  }, "My rate is...")), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 16
    }
  }, comments.map(comment => __jsx("li", {
    key: comment.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(OneSore, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
    className: "rate1",
    disabled: true,
    defaultValue: comment.rate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 24
    }
  }))))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 20
    }
  }, "My commnet is...")), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, comments.map(comment => __jsx("li", {
    key: comment.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(OneSore, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_1___default.a, {
    showCount: true,
    maxLength: 250,
    defaultValue: comment.content,
    readOnly: true,
    className: "textArea1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }))))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, comments[0].Images.length === 0 ? null : __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 59
    }
  }, "I recommend this!")), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(OneSore, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, " ", comments[0].Images[0] ? __jsx("img", {
    className: "img1",
    src: `http://localhost:3065/${comments[0].Images[0].src}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 53
    }
  }) : null, " "), __jsx(OneSore, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, " ", comments[0].Images[1] ? __jsx("img", {
    className: "img1",
    src: `http://localhost:3065/${comments[0].Images[1].src}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 53
    }
  }) : null, " "))));
};
/* harmony default export */ __webpack_exports__["default"] = (Score);

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");



/* harmony default export */ __webpack_exports__["default"] = ((initialValue = null) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const worth = e.target.value;
    setValue(worth);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEWLOOK_KEYWORD_REQUEST"],
      data: worth
    });
  }, [dispatch]);
  return [value, handler, setValue];
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
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
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
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
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
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

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
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
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
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
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
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
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
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
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
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
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
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
    if (true) {
      return;
    }
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
    if (false) {}
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
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
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
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
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
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
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
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
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
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
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/css/post[id].module.css":
/*!***************************************!*\
  !*** ./pages/css/post[id].module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"heart": "post_id__heart__2FF5g"
};


/***/ }),

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input/TextArea */ "antd/lib/input/TextArea");
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_newComment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/newComment */ "./components/newComment.js");
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/comments */ "./components/comments.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_noComments__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/noComments */ "./components/noComments.js");
/* harmony import */ var _css_post_id_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../css/post[id].module.css */ "./pages/css/post[id].module.css");
/* harmony import */ var _css_post_id_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_css_post_id_module_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\pages\\post\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;























const {
  Meta
} = antd__WEBPACK_IMPORTED_MODULE_1__["Card"];

const OneLook = styled_components__WEBPACK_IMPORTED_MODULE_20___default.a.div.withConfig({
  displayName: "id__OneLook",
  componentId: "sc-74jz14-0"
})([".div1{width:1120px;position:relative;z-index:1;}.div2{width:30px;}.switch1{margin-left:900px;margin-top:36px;}.icon1{position:absolute;z-index:5;font-size:30px;margin-left:200px;margin-top:10px;}.icon2{position:absolute;z-index:5;font-size:30px;margin-left:243px;margin-top:10px;}.icon3{z-index:10;}.img1{margin-left:120px;margin-top:20px;height:330px;}.img2{height:550px;width:100%;}.button1{margin-left:188px;}.button2{background-color:black;color:white;margin-bottom:10px;}.button3{background-color:black;color:white;margin-bottom:10px;}.button4{margin-left:20%;margin-top:5px;background-color:black;color:white;}.button5{margin-left:10%;margin-top:5px;background-color:black;color:white;}.col1{float:left;}.card1{width:280px;z-index:1;}.card2{margin-left:15px;width:400px;}.card3{margin-top:24px;margin-left:15px;width:400px;height:245px;}.li1{display:inline-block;}.li2{display:inline-block;margin-left:10px;}.body1{text-align:center;}.input1{color:black;text-align:center;}.textArea1{height:110px;resize:none;margin-top:20px;}"]);
const Post = () => {
  var _singlePost$Images$, _singlePost$Images$2;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.user);
  const {
    imagePaths,
    singlePost,
    retweetError,
    retweetDone,
    updatePostDone,
    likePostDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.post);
  const {
    0: read,
    1: setRead
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: previewImg,
    1: setPreviewImg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [rtConent, onChangeRtContent, setRtContent] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_19__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //로그인 아이디와 게시글 아이디가 같으면 수정, 삭제 활성화
    if (me.id === singlePost.UserId) {
      setRead(false);
    }
    if (updatePostDone === true) {
      window.alert('Look 수정 완료.');
    }
    if (retweetError) {
      window.alert(retweetError);
      window.location.reload();
    }
    if (retweetDone === true) {
      window.alert('인용 완료!');
    }
  }, [me && me.id, singlePost, updatePostDone, retweetError, retweetDone]);
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(singlePost.content);
  const onChangeContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const contentValue = e.target.value;
    setContent(contentValue);
  }, []);
  const {
    0: top,
    1: setTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(singlePost.top);
  const onChangeTop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const topValue = e.target.value;
    setTop(topValue);
  }, []);
  const {
    0: bottom,
    1: setBottom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(singlePost.bottom);
  const onChangeBottom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const bottomValue = e.target.value;
    setBottom(bottomValue);
  }, []);
  const {
    0: dress,
    1: setDress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(singlePost.dress);
  const onChangeDress = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const dressValue = e.target.value;
    setDress(dressValue);
  }, []);
  const {
    0: shoes,
    1: setShoes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(singlePost.shoes);
  const onChangeShoes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const shoesValue = e.target.value;
    setShoes(shoesValue);
  }, []);
  const {
    0: acc,
    1: setAcc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(singlePost.acc);
  const onChangeAcc = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const accValue = e.target.value;
    setAcc(accValue);
  }, []);
  const {
    0: outer,
    1: setOuter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(singlePost.outer);
  const onChangeOuter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const outerValue = e.target.value;
    setOuter(outerValue);
  }, []);
  const {
    0: lookName,
    1: setLookName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(singlePost.lookName);
  const onChangeLookName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    const lookNameValue = e.target.value;
    setLookName(lookNameValue);
  }, []);
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  console.log("singlePost::::: ", singlePost);
  console.log("me::::::", me);
  const liked = singlePost === null || singlePost === void 0 ? void 0 : singlePost.Likers[0];
  const isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(v => v.id === singlePost.UserId);
  console.log("좋아요: ", liked);

  //해시태그 #붙여서 뿌리기
  const tags = [];
  for (let i = 0; i < singlePost.Hashtags.length; i++) {
    if (singlePost.Hashtags !== undefined) {
      tags.push("#" + singlePost.Hashtags[i].name);
    }
  }

  //댓글 쓰기, 보기 선택
  const onSelect = () => {
    setIndex(!index);
    console.log("index: ", index);
  };

  //좋아요
  const onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LIKE_POST_REQUEST"],
      data: id
    });
  }, [id]);

  //좋아요 취소
  const onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["UNLIKE_POST_REQUEST"],
      data: id
    });
  }, [id]);

  //팔로우
  const onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_REQUEST"],
        data: singlePost.UserId
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["FOLLOW_REQUEST"],
        data: singlePost.UserId
      });
    }
  }, [isFollowing]);

  //리트윗모달
  const retweetModal = () => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    setIsModalOpen(true);
  };

  //리트윗
  const retweetSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const formData = new FormData();
    formData.append('content', rtConent);
    formData.append('postId', singlePost.id);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["RETWEET_REQUEST"],
      data: formData
    }, setIsModalOpen(false));
  }, [content]);

  //리트윗 모달 창 닫기
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //댓글 없을 때
  const IfComments = () => {
    if (index === false) {
      if (singlePost.Comments.length === 0) {
        return __jsx(_components_noComments__WEBPACK_IMPORTED_MODULE_17__["default"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 24
          }
        });
      } else {
        return __jsx(_components_comments__WEBPACK_IMPORTED_MODULE_13__["default"], {
          post: singlePost,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 23
          }
        });
      }
    } else {
      return null;
    }
  };

  //이미지 수정을 위한 창 띄우기
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  //게시글 삭제 요청
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    if (confirm("이 Look을 삭제하시겠습니까?")) {
      return dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["REMOVE_POST_REQUEST"],
        data: singlePost.id
      }, next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace(`/`));
    } else {
      window.alert("삭제 취소");
    }
  }, [id]);

  //게시글 수정 요청
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const formData = new FormData();
    imagePaths.forEach(p => {
      formData.append('image', p);
    });
    formData.append('content', content);
    formData.append('top', top);
    formData.append('bottom', bottom);
    formData.append('dress', dress);
    formData.append('shoes', shoes);
    formData.append('acc', acc);
    formData.append('outer', outer);
    formData.append('lookName', lookName);
    formData.append('postId', id);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["UPDATE_POST_REQUEST"],
      data: formData
    });
  }, [content, imagePaths]);

  //이미지 미리보기
  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
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
      imageFormData.append('image', f);
    });
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_UPDATE_LOOK_IMAGE_REQUEST"],
      data: imageFormData
    });
  });
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 9
    }
  }, __jsx(OneLook, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "div1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 8
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 9
    }
  }, "DailyLook"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    defaultChecked: index,
    onChange: onSelect,
    className: "switch1",
    checkedChildren: "\uB313\uAE00\uC4F0\uAE30",
    unCheckedChildren: "\uB313\uAE00\uBCF4\uAE30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 9
    }
  })), me.id === singlePost.UserId ? null : __jsx(OneLook, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "\uB0B4 \uACC4\uC815\uC5D0 \uC778\uC6A9\uD558\uAE30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
    className: "icon1",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faPenToSquare"],
    onClick: retweetModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uC778\uC6A9\uD558\uAE30",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: retweetSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    value: rtConent,
    onChange: onChangeRtContent,
    maxLength: 200,
    placeholder: "\uC778\uC6A9 \uBA54\uBAA8\uB97C \uB0A8\uACA8\uBCF4\uC138\uC694.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 21
    }
  }), __jsx(OneLook, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 19
    }
  }, " ", __jsx("img", {
    className: "img1",
    src: `http://localhost:3065/${(_singlePost$Images$ = singlePost.Images[0]) === null || _singlePost$Images$ === void 0 ? void 0 : _singlePost$Images$.src}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 29
    }
  }), " "), __jsx(OneLook, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 19
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "button1",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 29
    }
  }, "\uC778\uC6A9\uD558\uAE30")))), liked ? __jsx(OneLook, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "\uC88B\uC544\uC694 \uCDE8\uC18C",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
    onClick: onUnlike,
    twoToneColor: "#fc83c6",
    className: "icon2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 9
    }
  }))) : __jsx(OneLook, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "\uC88B\uC544\uC694",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
    onClick: onLike,
    className: "icon2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 9
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "col1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 13
    }
  }, __jsx("input", {
    name: "image",
    type: "file",
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "card1",
    cover: __jsx(OneLook, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 24
      }
    }, __jsx("img", {
      className: "img2",
      alt: "example",
      src: previewImg ? previewImg : `http://localhost:3065/${(_singlePost$Images$2 = singlePost.Images[0]) === null || _singlePost$Images$2 === void 0 ? void 0 : _singlePost$Images$2.src}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 33
      }
    })),
    actions: id && singlePost.UserId === me.id ? [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      title: "\uC774\uBBF8\uC9C0 \uC218\uC815",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onClickImageUpload,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UploadOutlined"], {
      key: "upload",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 21
      }
    })))] : [__jsx(OneLook, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468,
        columnNumber: 20
      }
    }, isFollowing ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      title: "\uC5B8\uD314\uB85C\uC6B0",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 21
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faHeartCrack"],
      fontSize: 20,
      onClick: onClickButton,
      className: "icon3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472,
        columnNumber: 25
      }
    })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      title: isFollowing ? '언팔로우' : '팔로우',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 21
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faHeartPulse"],
      fontSize: 20,
      onClick: onClickButton,
      className: "icon3",
      key: "unfollow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 481,
        columnNumber: 25
      }
    }))), __jsx(OneLook, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      title: singlePost.User.nickname + "의 홈 방문하기",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: `http://localhost:3000/user/${singlePost.UserId}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faHouse"],
      fontSize: 20,
      className: "icon3",
      key: "home",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 25
      }
    }))))],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    title: "글쓴이:  " + singlePost.User.nickname,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 17
    }
  }, singlePost.Comments.length === 0 ? __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 19
    }
  }, "No points yet.") : __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 19
    }
  }, "This look is...", singlePost.rateAverage, " points."), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 18
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 19
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
    className: "icon4",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faPenToSquare"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 22
    }
  }), "\xA0 Refer: ", singlePost.References.length), __jsx("div", {
    className: "div2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 21
    }
  }), "\xA0 Like: ", singlePost.Likers.length)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      float: 'left',
      width: 500
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "li1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 33
    }
  }, "\uB370\uC77C\uB9AC\uB8E9 \uC81C\uBAA9")), __jsx("li", {
    className: "li2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "lookname",
    readOnly: read,
    value: lookName,
    onChange: onChangeLookName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 33
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "card2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "button2",
    block: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 13
    }
  }, "Information"), __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 1
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 5
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 5
    }
  }, "\uBD84\uB958"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 5
    }
  }, "\uBE0C\uB79C\uB4DC\uBA85"))), __jsx("tbody", {
    className: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 1
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: "\uC0C1\uC758",
    className: "input1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "top",
    value: top,
    readOnly: read,
    onChange: onChangeTop,
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: "\uD558\uC758",
    className: "input1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: bottom,
    readOnly: read,
    onChange: onChangeBottom,
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: "\uC6D0\uD53C\uC2A4",
    className: "input1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: dress,
    readOnly: read,
    onChange: onChangeDress,
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: "\uC544\uC6B0\uD130",
    className: "input1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: outer,
    readOnly: read,
    onChange: onChangeOuter,
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: "\uC2E0\uBC1C",
    className: "input1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: shoes,
    readOnly: read,
    onChange: onChangeShoes,
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: "\uD328\uC158\uC7A1\uD654",
    className: "input1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: acc,
    readOnly: read,
    onChange: onChangeAcc,
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 10
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "card3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 1
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "button3",
    block: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 1
    }
  }, "Daily Record "), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 1
    }
  }, "\uD574\uC2DC\uD0DC\uADF8: ", tags), __jsx(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: onChangeContent,
    showCount: true,
    maxLength: 250,
    value: content,
    readOnly: read,
    className: "textArea1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 1
    }
  })), id && singlePost.UserId === me.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(OneLook, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "button4",
    onClick: onRemovePost,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 13
    }
  }, "\uC0AD\uC81C\uD558\uAE30"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "button5",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 13
    }
  }, "\uC218\uC815\uD558\uAE30"))) : null)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 1
    }
  }, index === true ? __jsx(_components_newComment__WEBPACK_IMPORTED_MODULE_12__["default"], {
    post: singlePost,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 24
    }
  }) : null, __jsx(IfComments, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 5
    }
  })));
};
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_7__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_11___default.a.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_MY_INFO_REQUEST"]
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POST_REQUEST"],
    data: context.params.id //혹은 context.query.id
  });

  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_8__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (Post);

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

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!******************************************************!*\
  !*** external "@fortawesome/free-regular-svg-icons" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/input/TextArea":
/*!******************************************!*\
  !*** external "antd/lib/input/TextArea" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/TextArea");

/***/ }),

/***/ "antd/lib/layout/layout":
/*!*****************************************!*\
  !*** external "antd/lib/layout/layout" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/layout");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdDb21tZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm9Db21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Njb3JlLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUlucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Nzcy9wb3N0Li9wYWdlcy9jc3MvcG9zdFtpZF0ubW9kdWxlLmNzcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3QvLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9wcm9kdWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvaW5wdXQvVGV4dEFyZWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9sYXlvdXQvbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsImxvZ091dExvYWRpbmciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImtleXdvcmRzIiwicG9zdCIsInJlc3VsdFdvcmRzIiwibWFwIiwiaXRlbXMiLCJ2YWx1ZSIsIm5hbWUiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwidXNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2VTZWFyY2hJbnB1dCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInR5cGUiLCJTRUFSQ0hfS0VZV09SRF9SRVFVRVNUIiwiZGF0YSIsIm9uU2VhcmNoIiwiUm91dGVyIiwicHVzaCIsIm9uTG9nT3V0IiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlcGxhY2UiLCJoYW5kbGVTZWxlY3QiLCJuaWNrbmFtZSIsIk9uZUNvbW1lbnRzIiwic3R5bGVkIiwiZGl2IiwiQ29tbWVudHMiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInBvc3RzUGVyUGFnZSIsImlkIiwic2V0VmFsdWUiLCJpbmRleE9mTGFzdFBvc3QiLCJpbmRleE9mRmlyc3RQb3N0IiwiY3VycmVudENvbW1lbnRzIiwic2xpY2UiLCJwYWdlTnVtYmVycyIsImxlbmd0aCIsImkiLCJNYXRoIiwiY2VpbCIsImhhbmRsZVJhdGUiLCJ1cENsaWNrIiwiYWxlcnQiLCJkb3duQ2xpY2siLCJvblJlbW92ZUNvbW1lbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2luZ2xlUG9zdCIsIlJFTU9WRV9DT01NRU5UX1JFUVVFU1QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIlVzZXJJZCIsIk9uZUNvbW1lbnQiLCJOZXdDb21tZW50IiwiaXNVcGxvYWRpbmciLCJzZXRJc1VwbG9hZGluZyIsImltYWdlUGF0aHMiLCJhZGRDb21tZW50RG9uZSIsImNvbnRlbnQiLCJvbkNoYW5nZUNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlSW5wdXQiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZUltYWdlcyIsIm5ld0ZpbGVMaXN0IiwiYmVmb3JlVXBsb2FkIiwiZmlsZSIsImltYWdlRm9ybURhdGEiLCJORVdfQ09NTUVOVF9JTUFHRVNfUkVRVUVTVCIsInRoZW4iLCJjYXRjaCIsIm9uUHJldmlldyIsInNyYyIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvcmlnaW5GaWxlT2JqIiwib25sb2FkIiwicmVzdWx0IiwiaW1hZ2UiLCJJbWFnZSIsImltZ1dpbmRvdyIsIm9wZW4iLCJkb2N1bWVudCIsIndyaXRlIiwib3V0ZXJIVE1MIiwib25TdWJtaXQiLCJ0cmltIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9JTUFHRSIsIk9uZU5vQ29tbWVudCIsIk5vQ29tbWVudHMiLCJPbmVTb3JlIiwiU2NvcmUiLCJjb21tZW50cyIsImNvbW1lbnQiLCJyYXRlIiwiSW1hZ2VzIiwiaW5pdGlhbFZhbHVlIiwiaGFuZGxlciIsIndvcnRoIiwiTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QiLCJjYWNoZWRPYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImVycm9yIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImJvZHkiLCJmb2N1cyIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwicGF0aG5hbWUiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQXJyYXkiLCJpc0FycmF5Iiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJjYW5jZWxsZWQiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsImFkZExvY2FsZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiYWRkQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImlzTG9jYWxVUkwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiaW50ZXJwb2xhdGVBcyIsInJvdXRlIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwiam9pbiIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImxvY2FsZXMiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFnZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJyZXdyaXRlcyIsInByb21pc2VkQnVpbGRNYW5pZmVzdCIsInBhcnNlZCIsIl9yZXNvbHZlSHJlZiIsInVybElzTmV3IiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJmaWx0ZXIiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJwYWdlIiwiZmV0Y2hDb21wb25lbnQiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJyZXF1aXJlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsImZvcm1hdFVybCIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwiRFVNTVlfQkFTRSIsInBhcnNlUmVsYXRpdmVVcmwiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJtYXRjaCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJ1c2VkIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXRVUkwiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiU1AiLCJtZWFzdXJlIiwiTWV0YSIsIkNhcmQiLCJPbmVMb29rIiwiUG9zdCIsInJldHdlZXRFcnJvciIsInJldHdlZXREb25lIiwidXBkYXRlUG9zdERvbmUiLCJsaWtlUG9zdERvbmUiLCJyZWFkIiwic2V0UmVhZCIsInByZXZpZXdJbWciLCJzZXRQcmV2aWV3SW1nIiwicnRDb25lbnQiLCJvbkNoYW5nZVJ0Q29udGVudCIsInNldFJ0Q29udGVudCIsImNvbnRlbnRWYWx1ZSIsInRvcCIsInNldFRvcCIsIm9uQ2hhbmdlVG9wIiwidG9wVmFsdWUiLCJib3R0b20iLCJzZXRCb3R0b20iLCJvbkNoYW5nZUJvdHRvbSIsImJvdHRvbVZhbHVlIiwiZHJlc3MiLCJzZXREcmVzcyIsIm9uQ2hhbmdlRHJlc3MiLCJkcmVzc1ZhbHVlIiwic2hvZXMiLCJzZXRTaG9lcyIsIm9uQ2hhbmdlU2hvZXMiLCJzaG9lc1ZhbHVlIiwiYWNjIiwic2V0QWNjIiwib25DaGFuZ2VBY2MiLCJhY2NWYWx1ZSIsIm91dGVyIiwic2V0T3V0ZXIiLCJvbkNoYW5nZU91dGVyIiwib3V0ZXJWYWx1ZSIsImxvb2tOYW1lIiwic2V0TG9va05hbWUiLCJvbkNoYW5nZUxvb2tOYW1lIiwibG9va05hbWVWYWx1ZSIsImltYWdlSW5wdXQiLCJzZXRJbmRleCIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJsaWtlZCIsIkxpa2VycyIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwidGFncyIsIkhhc2h0YWdzIiwib25TZWxlY3QiLCJvbkxpa2UiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIm9uVW5saWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uQ2xpY2tCdXR0b24iLCJVTkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJyZXR3ZWV0TW9kYWwiLCJyZXR3ZWV0U3VibWl0IiwiUkVUV0VFVF9SRVFVRVNUIiwiaGFuZGxlQ2FuY2VsIiwiSWZDb21tZW50cyIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImNsaWNrIiwib25SZW1vdmVQb3N0IiwiY29uZmlybSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJVUERBVEVfUE9TVF9SRVFVRVNUIiwiZmlsZXMiLCJvbmxvYWRlbmQiLCJwcmV2aWV3SW1nVXJsIiwiY2FsbCIsImYiLCJVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCIsImZhUGVuVG9TcXVhcmUiLCJmYUhlYXJ0Q3JhY2siLCJmYUhlYXJ0UHVsc2UiLCJVc2VyIiwiZmFIb3VzZSIsInJhdGVBdmVyYWdlIiwiUmVmZXJlbmNlcyIsImZsb2F0Iiwid2lkdGgiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJ3cmFwcGVyIiwiY29udGV4dCIsImNvb2tpZSIsInJlcSIsImhlYWRlcnMiLCJheGlvcyIsImRlZmF1bHRzIiwiQ29va2llIiwic3RvcmUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfUE9TVF9SRVFVRVNUIiwiRU5EIiwic2FnYVRhc2siLCJ0b1Byb21pc2UiLCJyb290UmVkdWNlciIsImFjdGlvbiIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwibmV3TG9va0tleXdvcmRzIiwiaGFzTW9yZVBvc3RzIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwidXBkYXRlUG9zdExvYWRpbmciLCJ1cGRhdGVQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwicmVtb3ZlQ29tbWVudExvYWRpbmciLCJyZW1vdmVDb21tZW50RG9uZSIsInJlbW92ZUNvbW1lbnRFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudEVycm9yIiwicmV0d2VldExvYWRpbmciLCJ1cGxvYWRVcGRhdGVMb29raW1hZ2VMb2FkaW5nIiwidXBsb2FkVXBkYXRlTG9va2ltYWdlRXJyb3IiLCJ1cGxvYWRVcGRhdGVMb29raW1hZ2VEb25lIiwidXBkYXRlQ29tbWVudFJhdGVMb2FkaW5nIiwidXBkYXRlQ29tbWVudFJhdGVFcnJvciIsInVwZGF0ZUNvbW1lbnRSYXRlRG9uZSIsImNoZWNrRGF0ZUxvYWRpbmciLCJjaGVja0RhdGVFcnJvciIsImNoZWNrRGF0ZURvbmUiLCJzZWFyY2hLZXl3b3JkTG9hZGluZyIsInNlYXJjaEtleXdvcmRFcnJvciIsInNlYXJjaEtleXdvcmREb25lIiwiQ0hFQ0tfREFURV9SRVFVRVNUIiwiQ0hFQ0tfREFURV9TVUNDRVNTIiwiQ0hFQ0tfREFURV9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTkVXX0NPTU1FTlRfSU1BR0VTX1NVQ0NFU1MiLCJORVdfQ09NTUVOVF9JTUFHRVNfRkFJTFVSRSIsIlVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9TVUNDRVNTIiwiVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX0ZBSUxVUkUiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX05FV19QT1NUU19SRVFVRVNUIiwiTE9BRF9ORVdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfTkVXX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiVVBEQVRFX1BPU1RfU1VDQ0VTUyIsIlVQREFURV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9DT01NRU5UX0ZBSUxVUkUiLCJVUERBVEVfQ09NTUVOVF9SQVRFX1JFUVVFU1QiLCJVUERBVEVfQ09NTUVOVF9SQVRFX1NVQ0NFU1MiLCJVUERBVEVfQ09NTUVOVF9SQVRFX0ZBSUxVUkUiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJTRUFSQ0hfS0VZV09SRF9TVUNDRVNTIiwiU0VBUkNIX0tFWVdPUkRfRkFJTFVSRSIsIk5FV0xPT0tfS0VZV09SRF9TVUNDRVNTIiwiTkVXTE9PS19LRVlXT1JEX0ZBSUxVUkUiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImNvbmNhdCIsIlBvc3RJZCIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZFVzZXJDYWxlbmRhckRhdGFMb2FkaW5nIiwibG9hZFVzZXJDYWxlbmRhckRhdGFEb25lIiwibG9hZFVzZXJDYWxlbmRhckRhdGFFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VJbmZvTG9hZGluZyIsImNoYW5nZUluZm9Eb25lIiwiY2hhbmdlSW5mb0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwidXNlckluZm8iLCJ1c2VyQ2FsZW5kYXJEYXRhIiwibG9naW5BY3Rpb24iLCJnZXRTdGF0ZSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImxvZ2luRmFpbHVyZUFjdGlvbiIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9SRVFVRVNUIiwiTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfU1VDQ0VTUyIsIkxPQURfVVNFUl9DQUxFTkRBUl9EQVRBX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfSU5GT19SRVFVRVNUIiwiQ0hBTkdFX0lORk9fU1VDQ0VTUyIsIkNIQU5HRV9JTkZPX0ZBSUxVUkUiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJVUExPQURfUFJPRklMRV9JTUFHRV9SRVFVRVNUIiwiVVBMT0FEX1BST0ZJTEVfSU1BR0VfU1VDQ0VTUyIsIlVQTE9BRF9QUk9GSUxFX0lNQUdFX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dlcnMiLCJpbmZvIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJyZXR3ZWV0QVBJIiwicG9zdElkIiwicmV0d2VldCIsInB1dCIsInJlc3BvbnNlIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwibmV3Q29tbWVudEltYWdlcyIsInVwZGF0ZUltYWdlcyIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwibG9hZFBvc3RBUEkiLCJsb2FkUG9zdCIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJsYXN0SWQiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwibG9hZFBvc3RzQVBJIiwibG9hZFBvc3RzIiwibG9hZE5ld1Bvc3RzQVBJIiwibG9hZE5ld1Bvc3RzIiwiYWRkUG9zdEFQSSIsImFkZFBvc3QiLCJ1cGRhdGVQb3N0QVBJIiwidXBkYXRlUG9zdCIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwicmVtb3ZlQ29tbWVudEFQSSIsImNvbW1lbnRJZCIsInVwZGF0ZUNvbW1lbnRSYXRlQVBJIiwicmVtb3ZlQ29tbWVudCIsInJlbW92ZVJlc3VsdCIsInVwZGF0ZVJlc3VsdCIsImFkZENvbW1lbnRBUEkiLCJhZGRDb21tZW50IiwiY2hlY2tEYXRlQVBJIiwiY2hlY2tEYXRlIiwic2VhcmNoS2V5d29yZEFQSSIsInNlYXJjaEtleXdvcmQiLCJuZXdMb29rS2V5d29yZEFQSSIsIm5ld0xvb2tLZXl3b3JkIiwid2F0Y2hSZXR3ZWV0IiwidGFrZUxhdGVzdCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTmV3Q29tbWVudEltYWdlcyIsIndhdGNoVXBkYXRlSW1hZ2VzIiwid2F0Y2hVbkxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExvYWRIYXNodGFnUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFVwZGF0ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZUNvbW1lbnQiLCJ3YXRjaExvYWROZXdQb3N0cyIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoQ2hlY2tEYXRlIiwid2F0Y2hTZWFyY2hLZXl3b3JkIiwid2F0Y2hOZXdMb29rS2V5d29yZCIsImxvYWRVc2VyQ2FsZW5kYXJEYXRhQVBJIiwibG9hZFVzZXJDYWxlbmRhckRhdGEiLCJyZW1vdmVGb2xsb3dlcnNBUEkiLCJyZW1vdmVGb2xsb3dlciIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJjaGFuZ2VJbmZvQVBJIiwiSlNPTiIsInN0cmluZ2lmeSIsImNoYW5nZUluZm8iLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJkZWxheSIsImxvZ2luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaFVwbG9hZFByb2ZpbGUiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoSW5mbyIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaExvYWRVc2VyQ2FsZW5kYXJEYXRhIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJsb2dnZXJNaWRkbGV3YXJlIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJlbmFibGVFUzUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwr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QSwyRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9wb3N0L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Bvc3QvW2lkXS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0lucHV0LCBNZW51LCBSb3csIENvbCwgQnV0dG9uLCBUb29sdGlwLCBBdXRvQ29tcGxldGUsIERlc2NyaXB0aW9uc30gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgeyBTRUFSQ0hfS0VZV09SRF9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcImFudGQvbGliL2xheW91dC9sYXlvdXRcIjtcclxuXHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7bWUsIGxvZ091dExvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBjb25zdCB7a2V5d29yZHN9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHRXb3JkcyA9IGtleXdvcmRzPy5tYXAoaXRlbXMgPT4gKHt2YWx1ZTogaXRlbXMubmFtZX0pKTtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRXb3Jkcyk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VTZWFyY2hJbnB1dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRTZWFyY2hJbnB1dCh2YWx1ZSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XHJcbiAgICAgIH0sIFtzZWFyY2hJbnB1dF0pO1xyXG5cclxuICAgIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICAgIFJvdXRlci5yZXBsYWNlKGAvYCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoSW5wdXQodmFsdWUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgPE1lbnUgaWQ9XCJtZW51MVwiIG1vZGU9J2hvcml6b250YWwnPiAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGgxIGNsYXNzTmFtZT1cIml0ZW0xXCIgPkZBU0hJT05BUlk8L2gxPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxoMyBjbGFzc05hbWU9XCJpdGVtMVwiID5NeSBQcm9maWxlPC9oMz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L2FsbFBvc3RzXCI+PGgzIGNsYXNzTmFtZT1cIml0ZW0xXCIgPkFsbCBMb29rczwvaDM+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+IFxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBjbGFzc05hbWU9XCJpdGVtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPSfssL7qs6Ag7Iu27J2AIOu4jOuenOuTnOulvCDqsoDsg4ntlbTrs7TshLjsmpQuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9Db21wbGV0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmVzdWx0V29yZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbGF5b3V0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdsYXlvdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIml0ZW0xXCI+eyBtZSA/IFwi7ZiE7J6sIOuhnOq3uOyduCDqs4TsoJU6IFwiICsgbWUubmlja25hbWUgOiBudWxsfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIHsgbWUgXHJcbiAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbjFcIiBvbkNsaWNrPXtvbkxvZ091dH0gbG9hZGluZz17bG9nT3V0TG9hZGluZ30gPuuhnOq3uOyVhOybgzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PntjaGlsZHJlbn08L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxGb290ZXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucyB0aXRsZT1cIkluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9XCLqsJzrsJzsnpBcIj7qs73ri6TsnYA8L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIuyXsOudveyymFwiPjAxMCAtIDMzODQgLSAyODc0PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9XCJHaXQtSHViXCI+PGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vR3dhay1kYWV1bi9mYXNoaW9uYXJ5LmdpdFwiPlNvdXJjZSBjb2RlPC9hPjwvRGVzY3JpcHRpb25zLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwi7J2066Cl7IScXCI+PGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9XCJodHRwczovL2tub3dpbmcteW9ndXJ0LWNkMi5ub3Rpb24uc2l0ZS8zZGJlYjMwMGJhNzQ0ODY2ODk0NzQxMDBkNWM5ODk3MVwiPuqwnOuwnOyekOydmCBOb3Rpb248L2E+PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb25zPlxyXG4gICAgICAgICAgICA8L0Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyIsImltcG9ydCB7IENhcmV0TGVmdE91dGxpbmVkLCBDYXJldFJpZ2h0T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIEZvcm0sIFJvdyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFNjb3JlIGZyb20gXCIuL3Njb3JlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5cclxuY29uc3QgT25lQ29tbWVudHMgPSBzdHlsZWQuZGl2YFxyXG4gIC5jYXJkMXtcclxuICAgIHdpZHRoOiAzOTBweDtcclxuICAgIGhlaWdodDogNjY1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzQwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNGMEYwRjA7XHJcbiAgfVxyXG4gIC5kaXYxe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgfVxyXG4gIC5pY29uMXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLmJ1dHRvbjF7XHJcbiAgICBtYXJnaW4tbGVmdDogMjEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1OTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgQ29tbWVudHMgPSAoe3Bvc3R9KSA9PiB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3Bvc3RzUGVyUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwi64yT6riAOiBcIiwgcG9zdC5Db21tZW50cyk7XHJcblxyXG4gICAgY29uc3QgaW5kZXhPZkxhc3RQb3N0ID0gY3VycmVudFBhZ2UgKiBwb3N0c1BlclBhZ2U7XHJcbiAgICBjb25zdCBpbmRleE9mRmlyc3RQb3N0ID0gaW5kZXhPZkxhc3RQb3N0IC0gcG9zdHNQZXJQYWdlO1xyXG4gICAgY29uc3QgY3VycmVudENvbW1lbnRzID0gcG9zdC5Db21tZW50cy5zbGljZShpbmRleE9mRmlyc3RQb3N0LCBpbmRleE9mTGFzdFBvc3QpO1xyXG5cclxuICAgIGNvbnN0IHBhZ2VOdW1iZXJzID0gW107XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0b3RhbCBvcGluaW9ucyBcIiArIHBvc3QuQ29tbWVudHMubGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKFwicG9zdHNQZXJQYWdlIFwiICsgcG9zdHNQZXJQYWdlKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwocG9zdC5Db21tZW50cy5sZW5ndGggLyBwb3N0c1BlclBhZ2UpOyBpKyspIHtcclxuICAgICAgICBwYWdlTnVtYmVycy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSYXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgIHNldFZhbHVlKHZhbHVlKTtcclxuICAgICAgY29uc29sZS5sb2coXCLsoJDsiJg6OjpcIiArIHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgICAgIC8v64yT6riAIOuLpOydjCDtjpjsnbTsp4DroZwg7J2064+ZXHJcbiAgICAgICAgY29uc3QgdXBDbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYoY3VycmVudFBhZ2UgPCBwYWdlTnVtYmVycy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXCLrp4jsp4Drp4kg64yT6riA7J207JeQ7JqULlwiKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICAgICAgLy/rjJPquIAg7J207KCEIO2OmOydtOyngOuhnCDsnbTrj5lcclxuICAgICAgICAgIGNvbnN0IGRvd25DbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYoY3VycmVudFBhZ2UgPiAxKXtcclxuICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSAtIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwi6rCA7J6lIOy1nOyLoCDrjJPquIDsnbTsl5DsmpQuXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IG9uUmVtb3ZlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdQb3N0SWQnLCBzaW5nbGVQb3N0LmlkKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbW1lbnRJZCcsIGN1cnJlbnRDb21tZW50c1swXS5pZCk7XHJcbiAgXHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGFcclxuICAgICAgICB9LCB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICApO1xyXG4gICAgICB9LCBbaWRdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8T25lQ29tbWVudHM+XHJcbiAgICAgICAgICAgIDxGb3JtIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgPlxyXG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkICYmIGN1cnJlbnRDb21tZW50c1swXS5Vc2VySWQgPT09IGlkXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgIDxPbmVDb21tZW50cz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgY2xhc3NOYW1lPVwiYnV0dG9uMVwiIG9uQ2xpY2s9e29uUmVtb3ZlQ29tbWVudH0gPuuMk+q4gCDsgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9PbmVDb21tZW50cz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDI+Q29tbWVudDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmV0TGVmdE91dGxpbmVkIGNsYXNzTmFtZT1cImljb24xXCIgb25DbGljaz17ZG93bkNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJldFJpZ2h0T3V0bGluZWQgY2xhc3NOYW1lPVwiaWNvbjFcIiBvbkNsaWNrPXt1cENsaWNrfSAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzID4ge2N1cnJlbnRQYWdlfSAvIHtwb3N0LkNvbW1lbnRzLmxlbmd0aH0gPC9oMz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxTY29yZSBjb21tZW50cz17Y3VycmVudENvbW1lbnRzfSAvPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvT25lQ29tbWVudHM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7IiwiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBGb3JtLCBSYXRlLCBSb3csIFVwbG9hZCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiYW50ZC9saWIvaW5wdXQvVGV4dEFyZWFcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCwgTkVXX0NPTU1FTlRfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSwgVVBMT0FEX0lNQUdFU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE9uZUNvbW1lbnQgPSBzdHlsZWQuZGl2YFxyXG4gIC5jYXJkMXtcclxuICAgIHdpZHRoOiAzOTBweDtcclxuICAgIGhlaWdodDogNjY1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzQwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICcjRjBGMEYwJztcclxuICB9XHJcbiAgLnJhdGUxe1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuICAudGV4dEFyZWExe1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIHJlc2l6ZTogJ25vbmUnO1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBOZXdDb21tZW50ID0gKHtwb3N0fSkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuXHJcbiAgICBjb25zdCB7aW1hZ2VQYXRocywgYWRkQ29tbWVudERvbmV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFsgY29udGVudCwgb25DaGFuZ2VDb250ZW50LCBzZXRDb250ZW50IF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYoYWRkQ29tbWVudERvbmUgPT09IHRydWUpe1xyXG4gICAgICAgIHNldENvbnRlbnQoJycpO1xyXG4gICAgICAgIHNldEZpbGVMaXN0KFtdKTtcclxuICAgICAgICBzZXRWYWx1ZSgwKTtcclxuICAgICAgfVxyXG4gICAgfSwgW2FkZENvbW1lbnREb25lXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmF0ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBzZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi7KCQ7IiYOjo6XCIgKyB2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKHsgZmlsZUxpc3Q6IG5ld0ZpbGVMaXN0IH0pID0+IHtcclxuICAgICAgc2V0RmlsZUxpc3QobmV3RmlsZUxpc3QpO1xyXG4gICAgICBcclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgICAgY29uc3QgYmVmb3JlVXBsb2FkID0gKGZpbGUpID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzVXBsb2FkaW5nKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IE5FV19DT01NRU5UX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8v66+466as67O06riwXHJcbiAgICAgIGNvbnN0IG9uUHJldmlldyA9IGFzeW5jIChmaWxlKSA9PiB7XHJcbiAgICAgICAgbGV0IHNyYyA9IGZpbGUudXJsO1xyXG4gICAgICAgIGlmICghc3JjKSB7XHJcbiAgICAgICAgICBzcmMgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgICAgICBjb25zdCBpbWdXaW5kb3cgPSB3aW5kb3cub3BlbihzcmMpO1xyXG4gICAgICAgIGltZ1dpbmRvdz8uZG9jdW1lbnQud3JpdGUoaW1hZ2Uub3V0ZXJIVE1MKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8v64yT6riAIOuTseuhnVxyXG4gICAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCh7IGZpbGVMaXN0OiBuZXdGaWxlTGlzdCB9KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKCFjb250ZW50IHx8ICFjb250ZW50LnRyaW0oKSl7XHJcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uMk+q4gCDrgrTsmqnsnYQg7J6R7ISx7ZWY7IS47JqULicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih2YWx1ZSA9PT0gMCl7XHJcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uzhOygkOycvOuhnCBMb29r7J2YIOygkOyImOulvCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICBzZXRGaWxlTGlzdChmaWxlTGlzdCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTwgZmlsZUxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGVMaXN0W2ldLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgY29udGVudCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyYXRlJywgdmFsdWUpO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3RJZCcsIHBvc3QuaWQpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcklkJywgaWQpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgICAgZGF0YTogZm9ybURhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgfSwgW2NvbnRlbnQsIHZhbHVlLCBpbWFnZVBhdGhzXSk7XHJcblxyXG4gICAgICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgICAgICAgIGRhdGE6IGluZGV4XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPE9uZUNvbW1lbnQ+XHJcbiAgICAgICAgICA8Rm9ybSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQxXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJvdz48aDI+Q29tbWVudDwvaDI+PC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93PjxoMj5NeSByYXRlIGlzLi4uPC9oMj48L1Jvdz5cclxuICAgICAgICAgICAgICAgPFJvdz48UmF0ZSBjbGFzc05hbWU9XCJyYXRlMVwiIG9uQ2hhbmdlPXtoYW5kbGVSYXRlfSB2YWx1ZT17dmFsdWV9IC8+PC9Sb3c+ICBcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8Um93PjxoMj5NeSBjb21tbmV0IGlzLi4uPC9oMj48L1Jvdz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8Um93PiA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q291bnRcclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezI1MH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dEFyZWExJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdz48aDI+SSByZWNvbW1lbmQgdGhpcyE8L2gyPjwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdz48aDM+7JWE7J207YWcIOy2lOyynOydgCAy6rCc6rmM7KeAIOqwgOuKpe2VtOyalC48L2gzPjwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgICAgICBuYW1lPSdpbWFnZSdcclxuICAgICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICBmaWxlTGlzdD17ZmlsZUxpc3R9XHJcbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc31cclxuICAgICAgICAgICAgICAgb25QcmV2aWV3PXtvblByZXZpZXd9XHJcbiAgICAgICAgICAgICAgIG9uUmVtb3ZlPXtvblJlbW92ZUltYWdlfVxyXG4gICAgICAgICAgICAgICBiZWZvcmVVcGxvYWQ9e2JlZm9yZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICB7LyogeyBmaWxlTGlzdCAgPyAgZmlsZUxpc3QubGVuZ3RoIDwgMiAmJiAnRHJhZyBpbWFnZXMgb3IgY2xpY2snIDogPGgzPuuMk+q4gCDsl4XroZzrk5wg7JmE66OMPC9oMz59ICovfVxyXG4gICAgICAgICAgICAgICB7IGZpbGVMaXN0Lmxlbmd0aCA8IDIgJiYgJ0RyYWcgaW1hZ2VzIG9yIGNsaWNrJyB9XHJcbiAgICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGh0bWxUeXBlPVwic3VibWl0XCI+64yT6riAIOuLrOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L09uZUNvbW1lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3Q29tbWVudDsiLCJpbXBvcnQgeyBDYXJkIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgT25lTm9Db21tZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIC5jYXJkMXtcclxuICAgICAgICB3aWR0aDogMzkwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNzQwcHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAnI0YwRjBGMCc7XHJcbiAgICB9XHJcbiAgICAuZGl2MXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmltZzF7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgIE5vQ29tbWVudHMgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE9uZU5vQ29tbWVudD5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZDFcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nMVwiIHNyYz0naHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvMTQyLzE0MjMxMy5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxoMj7rjJPquIDsnbQg7JeG7Ja07JqUISA8YnIgLz4g7LKrIOuMk+q4gOydhCDri6zslYTso7zshLjsmpQuPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L09uZU5vQ29tbWVudD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vQ29tbWVudHM7IiwiaW1wb3J0IHsgUmF0ZSwgUm93IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gXCJhbnRkL2xpYi9pbnB1dC9UZXh0QXJlYVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBPbmVTb3JlID0gc3R5bGVkLmRpdmBcclxuICAucmF0ZTF7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG4gIC50ZXh0QXJlYTF7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gIH1cclxuICAuaW1nMXtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbiAgLmJ1dHRvbjF7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2NvcmUgPSAoe2NvbW1lbnRzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxPbmVTb3JlPlxyXG4gICAgICAgIDxSb3c+PGgyPk15IHJhdGUgaXMuLi48L2gyPjwvUm93PlxyXG4gICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICB7Y29tbWVudHMubWFwKGNvbW1lbnQgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtjb21tZW50LmlkfT5cclxuICAgICAgICAgICAgICA8T25lU29yZT48UmF0ZSBjbGFzc05hbWU9XCJyYXRlMVwiIGRpc2FibGVkIGRlZmF1bHRWYWx1ZT17Y29tbWVudC5yYXRlfSAvPjwvT25lU29yZT4gXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvUm93PiAgXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPFJvdz48aDI+TXkgY29tbW5ldCBpcy4uLjwvaDI+PC9Sb3c+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICB7Y29tbWVudHMubWFwKGNvbW1lbnQgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtjb21tZW50LmlkfT5cclxuICAgICAgICAgICAgICA8T25lU29yZT5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjUwfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y29tbWVudC5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dEFyZWExXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L09uZVNvcmU+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICB7Y29tbWVudHNbMF0uSW1hZ2VzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiA8aDI+SSByZWNvbW1lbmQgdGhpcyE8L2gyPn1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8T25lU29yZT4geyBjb21tZW50c1swXS5JbWFnZXNbMF0gPyA8aW1nIGNsYXNzTmFtZT1cImltZzFcIiBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtjb21tZW50c1swXS5JbWFnZXNbMF0uc3JjfWB9IC8+IDogbnVsbCB9IDwvT25lU29yZT5cclxuICAgICAgICAgICAgICAgIDxPbmVTb3JlPiB7IGNvbW1lbnRzWzBdLkltYWdlc1sxXSA/IDxpbWcgY2xhc3NOYW1lPVwiaW1nMVwiIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2NvbW1lbnRzWzBdLkltYWdlc1sxXS5zcmN9YH0gLz4gOiBudWxsIH0gPC9PbmVTb3JlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICAgIGlkICYmIGNvbW1lbnRzWzBdLlVzZXJJZCA9PT0gaWRcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgPE9uZVNvcmU+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIGNsYXNzTmFtZT1cImJ1dHRvbjFcIiBvbkNsaWNrPXtvblJlbW92ZUNvbW1lbnR9ID7rjJPquIAg7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvT25lU29yZT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L09uZVNvcmU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7XHJcbiIsImltcG9ydCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBORVdMT09LX0tFWVdPUkRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaW5pdGlhbFZhbHVlID0gbnVsbCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdvcnRoID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0VmFsdWUod29ydGgpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHdvcnRoXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV07XHJcbn07IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYXJ0XCI6IFwicG9zdF9pZF9faGVhcnRfXzJGRjVnXCJcbn07XG4iLCJcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIEZvcm0sIElucHV0LCBNb2RhbCwgUm93LCBTd2l0Y2gsIFRvb2x0aXAgIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEhlYXJ0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgVXBsb2FkT3V0bGluZWQgIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcImFudGQvbGliL2lucHV0L1RleHRBcmVhXCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRVRXRUVUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFVQREFURV9QT1NUX1JFUVVFU1QsIFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uLy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0ICBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBOZXdDb21tZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmV3Q29tbWVudCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1lbnRzJztcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtmYVBlblRvU3F1YXJlfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHtmYUhlYXJ0UHVsc2V9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgZmFIZWFydENyYWNrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFIb3VzZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBOb0NvbW1lbnRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbm9Db21tZW50cyc7XHJcbmltcG9ydCAnLi4vY3NzL3Bvc3RbaWRdLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgT25lTG9vayA9IHN0eWxlZC5kaXZgXHJcblxyXG4gICAgLmRpdjF7XHJcbiAgICAgICAgd2lkdGg6IDExMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC5kaXYye1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnN3aXRjaDF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDkwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbjF7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmljb24ye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjQzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5pY29uM3tcclxuICAgICAgICB6LWluZGV4OjEwO1xyXG4gICAgfVxyXG4gICAgLmltZzF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMzBweDtcclxuICAgIH1cclxuICAgIC5pbWcye1xyXG4gICAgICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTg4cHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5idXR0b24ze1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5idXR0b241e1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmNvbDF7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY2FyZDF7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAuY2FyZDJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI0NXB4O1xyXG4gICAgfVxyXG4gICAgLmxpMXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAubGkye1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5ib2R5MXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQxe1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dEFyZWExe1xyXG4gICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7aW1hZ2VQYXRocywgc2luZ2xlUG9zdCwgcmV0d2VldEVycm9yLCByZXR3ZWV0RG9uZSwgdXBkYXRlUG9zdERvbmUsIGxpa2VQb3N0RG9uZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW3JlYWQsIHNldFJlYWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbcHJldmlld0ltZywgc2V0UHJldmlld0ltZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbcnRDb25lbnQsIG9uQ2hhbmdlUnRDb250ZW50LCBzZXRSdENvbnRlbnRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy/roZzqt7jsnbgg7JWE7J2065SU7JmAIOqyjOyLnOq4gCDslYTsnbTrlJTqsIAg6rCZ7Jy866m0IOyImOyglSwg7IKt7KCcIO2ZnOyEse2ZlFxyXG4gICAgICAgIGlmKG1lLmlkID09PSBzaW5nbGVQb3N0LlVzZXJJZCl7XHJcbiAgICAgICAgICAgIHNldFJlYWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih1cGRhdGVQb3N0RG9uZSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnTG9vayDsiJjsoJUg7JmE66OMLicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHJldHdlZXRFcnJvcil7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChyZXR3ZWV0RXJyb3IpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHJldHdlZXREb25lID09PSB0cnVlKXtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KCfsnbjsmqkg7JmE66OMIScpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZCwgc2luZ2xlUG9zdCwgdXBkYXRlUG9zdERvbmUsIHJldHdlZXRFcnJvciwgcmV0d2VldERvbmVdKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5jb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUNvbnRlbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldENvbnRlbnQoY29udGVudFZhbHVlKTtcclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFt0b3AsIHNldFRvcF0gPSB1c2VTdGF0ZShzaW5nbGVQb3N0LnRvcCk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VUb3AgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvcFZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0VG9wKHRvcFZhbHVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbYm90dG9tLCBzZXRCb3R0b21dID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5ib3R0b20pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlQm90dG9tID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IGJvdHRvbVZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRCb3R0b20oYm90dG9tVmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFtkcmVzcywgc2V0RHJlc3NdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5kcmVzcyk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VEcmVzcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHJlc3NWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldERyZXNzKGRyZXNzVmFsdWUpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICAgICAgY29uc3QgW3Nob2VzLCBzZXRTaG9lc10gPSB1c2VTdGF0ZShzaW5nbGVQb3N0LnNob2VzKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVNob2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IHNob2VzVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFNob2VzKHNob2VzVmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFthY2MsIHNldEFjY10gPSB1c2VTdGF0ZShzaW5nbGVQb3N0LmFjYyk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VBY2MgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjY1ZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0QWNjKGFjY1ZhbHVlKTtcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW291dGVyLCBzZXRPdXRlcl0gPSB1c2VTdGF0ZShzaW5nbGVQb3N0Lm91dGVyKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZU91dGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IG91dGVyVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldE91dGVyKG91dGVyVmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFtsb29rTmFtZSwgc2V0TG9va05hbWVdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5sb29rTmFtZSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VMb29rTmFtZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9va05hbWVWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldExvb2tOYW1lKGxvb2tOYW1lVmFsdWUpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInNpbmdsZVBvc3Q6Ojo6OiBcIiwgc2luZ2xlUG9zdCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJtZTo6Ojo6OlwiLCBtZSk7XHJcblxyXG4gICAgY29uc3QgbGlrZWQgPSBzaW5nbGVQb3N0Py5MaWtlcnNbMF07XHJcblxyXG4gICAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZT8uRm9sbG93aW5ncy5maW5kKCh2KSA9PiB2LmlkID09PSBzaW5nbGVQb3N0LlVzZXJJZCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCLsoovslYTsmpQ6IFwiLCBsaWtlZCk7XHJcblxyXG4gICAgLy/tlbTsi5ztg5zqt7ggI+u2meyXrOyEnCDrv4zrpqzquLBcclxuICAgIGNvbnN0IHRhZ3MgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2luZ2xlUG9zdC5IYXNodGFncy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoc2luZ2xlUG9zdC5IYXNodGFncyAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGFncy5wdXNoKCBcIiNcIiArIHNpbmdsZVBvc3QuSGFzaHRhZ3NbaV0ubmFtZSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+uMk+q4gCDsk7DquLAsIOuztOq4sCDshKDtg51cclxuICAgIGNvbnN0IG9uU2VsZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluZGV4KCFpbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleDogXCIsIGluZGV4KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8v7KKL7JWE7JqUXHJcbiAgICAgIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxbaWRdKTtcclxuXHJcbiAgICAgICAgLy/soovslYTsmpQg7Leo7IaMXHJcbiAgICAgICAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogaWRcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFtpZF0pO1xyXG5cclxuICAgICAgICAvL+2MlOuhnOyasFxyXG4gICAgICAgIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzRm9sbG93aW5nKXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHNpbmdsZVBvc3QuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHNpbmdsZVBvc3QuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sW2lzRm9sbG93aW5nXSk7XHJcblxyXG4gICAgICAgIC8v66as7Yq47JyX66qo64usXHJcbiAgICAgICAgY29uc3QgcmV0d2VldE1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v66as7Yq47JyXXHJcbiAgICAgICAgY29uc3QgcmV0d2VldFN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIHJ0Q29uZW50KTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0SWQnLCBzaW5nbGVQb3N0LmlkKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFJFVFdFRVRfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgIH0sIHNldElzTW9kYWxPcGVuKGZhbHNlKSk7XHJcbiAgICAgICAgfSwgW2NvbnRlbnRdKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+umrO2KuOyclyDrqqjri6wg7LC9IOuLq+q4sFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAvL+uMk+q4gCDsl4bsnYQg65WMXHJcbiAgICBjb25zdCBJZkNvbW1lbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGluZGV4ID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGlmKHNpbmdsZVBvc3QuQ29tbWVudHMubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Tm9Db21tZW50cyAvPjtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgIHJldHVybiA8Q29tbWVudHMgcG9zdD17c2luZ2xlUG9zdH0gLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL+ydtOuvuOyngCDsiJjsoJXsnYQg7JyE7ZWcIOywvSDrnYTsmrDquLBcclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgICAvL+qyjOyLnOq4gCDsgq3soJwg7JqU7LKtXHJcbiAgICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb25maXJtKFwi7J20IExvb2vsnYQg7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMP1wiKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogc2luZ2xlUG9zdC5pZCwgXHJcbiAgICAgICAgICAgIH0sIFJvdXRlci5yZXBsYWNlKGAvYCkpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi7IKt7KCcIOy3qOyGjFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LCBbaWRdKTtcclxuXHJcblxyXG4vL+qyjOyLnOq4gCDsiJjsoJUg7JqU7LKtXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBpbWFnZVBhdGhzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIGNvbnRlbnQpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9wJywgdG9wKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2JvdHRvbScsIGJvdHRvbSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkcmVzcycsIGRyZXNzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Nob2VzJywgc2hvZXMpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYWNjJywgYWNjKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ291dGVyJywgb3V0ZXIpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbG9va05hbWUnLCBsb29rTmFtZSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0SWQnLCBpZCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBVUERBVEVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFtjb250ZW50LCBpbWFnZVBhdGhzXSk7XHJcblxyXG4gICAgLy/snbTrr7jsp4Ag66+466as67O06riwXHJcbiAgICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LmZpbGVzWzBdKXtcclxuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByZXZpZXdJbWdVcmwgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgaWYocHJldmlld0ltZ1VybCl7XHJcbiAgICAgICAgICAgIHNldFByZXZpZXdJbWcocHJldmlld0ltZ1VybCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgXHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZikgPT4ge1xyXG4gICAgICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcExheW91dCA+XHJcbiAgICAgICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgICAgICA8Rm9ybSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdjEnPlxyXG4gICAgICAgPFJvdz5cclxuICAgICAgICA8aDE+RGFpbHlMb29rPC9oMT5cclxuICAgICAgICA8U3dpdGNoIGRlZmF1bHRDaGVja2VkPXtpbmRleH0gb25DaGFuZ2U9e29uU2VsZWN0fSBjbGFzc05hbWU9J3N3aXRjaDEnIGNoZWNrZWRDaGlsZHJlbj1cIuuMk+q4gOyTsOq4sFwiIHVuQ2hlY2tlZENoaWxkcmVuPVwi64yT6riA67O06riwXCIgLz5cclxuICAgICAgIDwvUm93PlxyXG4gICAgICAge21lLmlkID09PSBzaW5nbGVQb3N0LlVzZXJJZCBcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPE9uZUxvb2s+XHJcbiAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi64K0IOqzhOygleyXkCDsnbjsmqntlZjquLBcIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ljb24xJ1xyXG4gICAgICAgICAgICAgICAgICAgIGljb249e2ZhUGVuVG9TcXVhcmV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JldHdlZXRNb2RhbH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgPC9PbmVMb29rPlxyXG4gICAgICAgfVxyXG4gICAgICAgICAgICB7Lyog66as7Yq47JyXIOuqqOuLrCAqL31cclxuICAgICAgICAgICAgPE1vZGFsIHRpdGxlPVwi7J247Jqp7ZWY6riwXCIgZm9vdGVyPXtudWxsfSBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfSBvcGVuPXtpc01vZGFsT3Blbn0gPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gIG9uRmluaXNoPXtyZXR3ZWV0U3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J0Q29uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVJ0Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyduOyaqSDrqZTrqqjrpbwg64Ko6rKo67O07IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPE9uZUxvb2s+IDxpbWcgY2xhc3NOYW1lPSdpbWcxJyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtzaW5nbGVQb3N0LkltYWdlc1swXT8uc3JjfWB9IC8+IDwvT25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgPE9uZUxvb2s+IDxCdXR0b24gY2xhc3NOYW1lPSdidXR0b24xJyBodG1sVHlwZT1cInN1Ym1pdFwiPuyduOyaqe2VmOq4sDwvQnV0dG9uPjwvT25lTG9vaz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAge2xpa2VkID8gXHJcbiAgICAgICAgPE9uZUxvb2s+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLsoovslYTsmpQg7Leo7IaMXCI+XHJcbiAgICAgICAgPEhlYXJ0VHdvVG9uZSBvbkNsaWNrPXtvblVubGlrZX0gdHdvVG9uZUNvbG9yPVwiI2ZjODNjNlwiIGNsYXNzTmFtZT0naWNvbjInLz4gXHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgICA6XHJcbiAgICAgICAgPE9uZUxvb2s+IFxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwi7KKL7JWE7JqUXCI+XHJcbiAgICAgICAgPEhlYXJ0T3V0bGluZWQgb25DbGljaz17b25MaWtlfSBjbGFzc05hbWU9J2ljb24yJyAvPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8L09uZUxvb2s+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9J2NvbDEnID5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbWFnZVwiIHR5cGU9XCJmaWxlXCIgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZDEnXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvdmVyPXs8T25lTG9vaz48aW1nIGNsYXNzTmFtZT0naW1nMicgYWx0PVwiZXhhbXBsZVwiIHNyYz17IHByZXZpZXdJbWcgPyBwcmV2aWV3SW1nIDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3NpbmdsZVBvc3QuSW1hZ2VzWzBdPy5zcmN9YH0gLz48L09uZUxvb2s+fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgJiYgc2luZ2xlUG9zdC5Vc2VySWQgPT09IG1lLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLsnbTrr7jsp4Ag7IiY7KCVXCI+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9ID4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkT3V0bGluZWQga2V5PVwidXBsb2FkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD4gICBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgWyBcclxuICAgICAgICAgICAgICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0ZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT0n7Ja47YyU66Gc7JqwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUhlYXJ0Q3JhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtpc0ZvbGxvd2luZyA/ICfslrjtjJTroZzsmrAnIDogJ+2MlOuhnOyasCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ZhSGVhcnRQdWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ljb24zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9J3VuZm9sbG93J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PbmVMb29rPlxyXG4gICAgICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgICAgICA8T25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17c2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lICsgXCLsnZgg7ZmIIOuwqeusuO2VmOq4sFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyLyR7c2luZ2xlUG9zdC5Vc2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ZhSG91c2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0naG9tZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PbmVMb29rPlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID4gICAgICBcclxuICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPXtcIuq4gOyTtOydtDogIFwiICsgc2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIHtzaW5nbGVQb3N0LkNvbW1lbnRzLmxlbmd0aCA9PT0gMCBcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgPGgxPk5vIHBvaW50cyB5ZXQuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgPGgxPlRoaXMgbG9vayBpcy4uLntzaW5nbGVQb3N0LnJhdGVBdmVyYWdlfSBwb2ludHMuPC9oMT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uNCdcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtmYVBlblRvU3F1YXJlfSBcclxuICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsgUmVmZXI6IHtzaW5nbGVQb3N0LlJlZmVyZW5jZXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdjInIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz4gICBcclxuICAgICAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyBMaWtlOiB7c2luZ2xlUG9zdC5MaWtlcnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3tmbG9hdDogJ2xlZnQnLCB3aWR0aDo1MDB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xpMSc+PGgzID7rjbDsnbzrpqzro6kg7KCc66qpPC9oMz48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaTInPjxJbnB1dCBuYW1lPSdsb29rbmFtZScgcmVhZE9ubHk9e3JlYWR9IHZhbHVlPXtsb29rTmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTG9va05hbWV9ICAvPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdjYXJkMic+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdidXR0b24yJyBibG9jayA+SW5mb3JtYXRpb248L0J1dHRvbj5cclxuPHRoZWFkPlxyXG4gICAgPHRyID5cclxuICAgIDx0aD7rtoTrpZg8L3RoPlxyXG4gICAgPHRoPuu4jOuenOuTnOuqhTwvdGg+XHJcbiAgICBcclxuICAgIDwvdHI+XHJcbjwvdGhlYWQ+XHJcbjx0Ym9keSBjbGFzc05hbWU9J2JvZHkxJyA+XHJcbiAgICA8dHI+XHJcbiAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCBkZWZhdWx0VmFsdWU9XCLsg4HsnZhcIiBjbGFzc05hbWU9J2lucHV0MScgLz48L3RkPlxyXG4gICAgPHRkPiA8SW5wdXQgbmFtZT0ndG9wJyB2YWx1ZT17dG9wfSByZWFkT25seT17cmVhZH0gb25DaGFuZ2U9e29uQ2hhbmdlVG9wfSAgdHlwZT1cInRleHRcIiAgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIu2VmOydmFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCAgdmFsdWU9e2JvdHRvbX0gcmVhZE9ubHk9e3JlYWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUJvdHRvbX0gdHlwZT1cInRleHRcIiAvPjwvdGQ+IFxyXG4gICAgPC90cj5cclxuXHJcbiAgICA8dHI+XHJcbiAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7JuQ7ZS87IqkXCIgY2xhc3NOYW1lPSdpbnB1dDEnIC8+PC90ZD5cclxuICAgIDx0ZD4gPElucHV0ICB2YWx1ZT17ZHJlc3N9IHJlYWRPbmx5PXtyZWFkfSBvbkNoYW5nZT17b25DaGFuZ2VEcmVzc30gdHlwZT1cInRleHRcIiAvPjwvdGQ+IFxyXG4gICAgPC90cj5cclxuXHJcbiAgICA8dHI+XHJcbiAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7JWE7Jqw7YSwXCIgY2xhc3NOYW1lPSdpbnB1dDEnIC8+PC90ZD5cclxuICAgIDx0ZD4gPElucHV0ICB2YWx1ZT17b3V0ZXJ9IHJlYWRPbmx5PXtyZWFkfSBvbkNoYW5nZT17b25DaGFuZ2VPdXRlcn0gdHlwZT1cInRleHRcIiAvPjwvdGQ+IFxyXG4gICAgPC90cj5cclxuXHJcbiAgICA8dHI+XHJcbiAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7Iug67CcXCIgY2xhc3NOYW1lPSdpbnB1dDEnIC8+PC90ZD5cclxuICAgIDx0ZD4gPElucHV0IHZhbHVlPXtzaG9lc30gcmVhZE9ubHk9e3JlYWR9IG9uQ2hhbmdlPXtvbkNoYW5nZVNob2VzfSAgdHlwZT1cInRleHRcIiAvPjwvdGQ+IFxyXG4gICAgPC90cj5cclxuXHJcbiAgICA8dHI+XHJcbiAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7Yyo7IWY7J6h7ZmUXCIgY2xhc3NOYW1lPSdpbnB1dDEnIC8+PC90ZD5cclxuICAgIDx0ZD4gPElucHV0IHZhbHVlPXthY2N9IHJlYWRPbmx5PXtyZWFkfSAgb25DaGFuZ2U9e29uQ2hhbmdlQWNjfSAgdHlwZT1cInRleHRcIiAvPjwvdGQ+IFxyXG4gICAgPC90cj5cclxuXHJcbjwvdGJvZHk+XHJcbjwvQ2FyZD5cclxuPC9kaXY+XHJcbjxDYXJkIGNsYXNzTmFtZT0nY2FyZDMnPlxyXG48QnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uMycgYmxvY2sgPkRhaWx5IFJlY29yZCA8L0J1dHRvbj5cclxuPGg0Pu2VtOyLnO2DnOq3uDoge3RhZ3N9PC9oND5cclxuPFRleHRBcmVhXHJcbiAgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGVudH1cclxuICBzaG93Q291bnRcclxuICBtYXhMZW5ndGg9ezI1MH1cclxuICB2YWx1ZT17Y29udGVudH0gXHJcbiAgcmVhZE9ubHk9e3JlYWR9XHJcbiAgY2xhc3NOYW1lPSd0ZXh0QXJlYTEnXHJcbi8+XHJcblxyXG48L0NhcmQ+XHJcbiAgICB7IGlkICYmIHNpbmdsZVBvc3QuVXNlcklkID09PSBtZS5pZFxyXG4gICAgP1xyXG4gICAgICAgIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE9uZUxvb2s+XHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uNCdcclxuICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmVQb3N0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDsgq3soJztlZjquLBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b241J1xyXG4gICAgICAgICAgICBodG1sVHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDsiJjsoJXtlZjquLBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIDpcclxuICAgICAgICBudWxsXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbjwvQ29sPlxyXG5cclxuPC9kaXY+XHJcbjwvRm9ybT5cclxuPC9PbmVMb29rPlxyXG5cclxuey8qIOuMk+q4gCAqL31cclxuPENvbD5cclxuICAgIHtpbmRleCA9PT0gdHJ1ZSAgPyA8TmV3Q29tbWVudCBwb3N0PXtzaW5nbGVQb3N0fSAvPiA6IG51bGwgfVxyXG4gICAgey8qIHtpbmRleCA9PT0gZmFsc2UgID8gKHNpbmdsZVBvc3QuQ29tbWVudHMubGVuZ3RoICE9PSAwID8gPENvbW1lbnRzIHBvc3Q9e3NpbmdsZVBvc3R9IC8+IDogPE5vQ29tbWVudHMgLz4pIDogbnVsbCB9ICovfVxyXG4gICAgPElmQ29tbWVudHMgLz5cclxuPC9Db2w+XHJcblxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyhjb250ZXh0KSA9PiB7IFxyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJzsgXHJcbiAgICBpZihjb250ZXh0LnJlcSAmJiBjb29raWUpeyBcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1RcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQgLy/tmLnsnYAgY29udGV4dC5xdWVyeS5pZFxyXG4gICAgfSk7XHJcbiAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyLCBcclxuICAgICAgICAgICAgICAgIHBvc3RcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsIi8vaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbi8vaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgc2luZ2xlUG9zdDogbnVsbCxcclxuICBrZXl3b3JkczogbnVsbCxcclxuICBuZXdMb29rS2V5d29yZHM6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHVwZGF0ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1cGRhdGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgdXBkYXRlUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICByZXR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgcmV0d2VldEVycm9yOiBudWxsLFxyXG4gIHVwbG9hZFVwZGF0ZUxvb2tpbWFnZUxvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZFVwZGF0ZUxvb2tpbWFnZUVycm9yOiBudWxsLFxyXG4gIHVwbG9hZFVwZGF0ZUxvb2tpbWFnZURvbmU6IGZhbHNlLFxyXG4gIHVwZGF0ZUNvbW1lbnRSYXRlTG9hZGluZzogZmFsc2UsXHJcbiAgdXBkYXRlQ29tbWVudFJhdGVFcnJvcjogbnVsbCxcclxuICB1cGRhdGVDb21tZW50UmF0ZURvbmU6IGZhbHNlLFxyXG4gIGNoZWNrRGF0ZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoZWNrRGF0ZUVycm9yOiBudWxsLFxyXG4gIGNoZWNrRGF0ZURvbmU6IGZhbHNlLFxyXG4gIHNlYXJjaEtleXdvcmRMb2FkaW5nOiBmYWxzZSxcclxuICBzZWFyY2hLZXl3b3JkRXJyb3I6IG51bGwsXHJcbiAgc2VhcmNoS2V5d29yZERvbmU6IGZhbHNlLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDSEVDS19EQVRFX1JFUVVFU1QgPSAnQ0hFQ0tfREFURV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIRUNLX0RBVEVfU1VDQ0VTUyA9ICdDSEVDS19EQVRFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfREFURV9GQUlMVVJFID0gJ0NIRUNLX0RBVEVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19DT01NRU5UX0lNQUdFU19SRVFVRVNUID0gJ05FV19DT01NRU5UX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE5FV19DT01NRU5UX0lNQUdFU19TVUNDRVNTID0gJ05FV19DT01NRU5UX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE5FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFID0gJ05FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCA9J1VQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9TVUNDRVNTID0nVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX0ZBSUxVUkUgPSdVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX05FV19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTkVXX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9ORVdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX05FV19QT1NUU19GQUlMVVJFID0gJ0xPQURfTkVXX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9SRVFVRVNUID0gJ1VQREFURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1RfU1VDQ0VTUyA9ICdVUERBVEVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUX0ZBSUxVUkUgPSAnVVBEQVRFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUID0gJ1JFTU9WRV9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyA9ICdSRU1PVkVfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUgPSAnUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTU1FTlRfUkFURV9SRVFVRVNUID0gJ1VQREFURV9DT01NRU5UX1JBVEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ09NTUVOVF9SQVRFX1NVQ0NFU1MgPSAnVVBEQVRFX0NPTU1FTlRfUkFURV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DT01NRU5UX1JBVEVfRkFJTFVSRSA9ICdVUERBVEVfQ09NTUVOVF9SQVRFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9SRVFVRVNUID0gJ1NFQVJDSF9LRVlXT1JEX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyA9ICdTRUFSQ0hfS0VZV09SRF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUgPSAnU0VBUkNIX0tFWVdPUkRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QgPSAnTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1MgPSAnTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTkVXTE9PS19LRVlXT1JEX0ZBSUxVUkUgPSAnTkVXTE9PS19LRVlXT1JEX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4vLyAgIGRhdGEsXHJcbi8vIH0pO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuLy8gICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4vLyAgIGRhdGEsXHJcbi8vIH0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gIH0sXHJcbn0pO1xyXG4vLyDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7IC8v66as7Yq47JyX65CcIOqyjOyLnOq4gCDrqZTsnbjtj6zsiqTtirjsl5Ag7LaU6rCAXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgIGNhc2UgTkVXX0NPTU1FTlRfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBORVdfQ09NTUVOVF9JTUFHRVNfU1VDQ0VTUzpcclxuICAgICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVkdWNlciBpbWFnZVwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgIGNhc2UgTkVXX0NPTU1FTlRfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOntcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0LnNpbmdsZVBvc3Q7XHJcbiAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOntcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0LnNpbmdsZVBvc3Q7XHJcbiAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgY2FzZSBMT0FEX05FV19QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgY2FzZSBMT0FEX05FV19QT1NUU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX05FV19QT1NUU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdOyAvL+yXheuhnOuTnCDtlojripTrjbAg7J2066+47KeAIOyjvOyGjCDrgqjslYTsnojsnLzrqbQg7JWI65CY64uI6rmMIOyjvOyGjCDstIjquLDtmZRcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUERBVEVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7JeF642w7J207Yq4IOyZhOujjCDtm4Qg642w7J207YSwOiBcIiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQuc2luZ2xlUG9zdDtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIFxyXG4gICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IG51bGw7ICAgIFxyXG4gICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi64yT6riAIOyCreygnCDrpqzrk4DshJw6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LnNpbmdsZVBvc3QuQ29tbWVudHMgPSBkcmFmdC5zaW5nbGVQb3N0LkNvbW1lbnRzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudXBsb2FkVXBkYXRlTG9va2ltYWdlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZUVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQudXBsb2FkVXBkYXRlTG9va2ltYWdlRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQudXBsb2FkVXBkYXRlTG9va2ltYWdlRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cGxvYWRVcGRhdGVMb29raW1hZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVVBEQVRFX0NPTU1FTlRfUkFURV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRSYXRlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudFJhdGVFcnJvciA9ICBudWxsO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRSYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9DT01NRU5UX1JBVEVfU1VDQ0VTUzpcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuMk+q4gCDsoJDsiJgg7IiY7KCVIOyEseqztTogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50UmF0ZUxvYWRpbmcgPSBmYWxzZTsgXHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudFJhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgZHJhZnQuc2luZ2xlUG9zdC5yYXRlQXZlcmFnZSA9IGFjdGlvbi5kYXRhLnJhdGVBdmVyYWdlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9DT01NRU5UX1JBVEVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50UmF0ZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50UmF0ZUVycm9yID0gIGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQ0hFQ0tfREFURV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoZWNrRGF0ZUxvYWRpbmc9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlRXJyb3IgPSAgbnVsbDtcclxuICAgICAgICBkcmFmdC5jaGVja0RhdGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgIENIRUNLX0RBVEVfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5jaGVja0RhdGVMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGVja0RhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEVDS19EQVRFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLrgqDsp5wg7JeQ65+sIO2ZleyduFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlRXJyb3IgPSAgYWN0aW9uLmRhdGEubWVzc2FnZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1Q6XHJcblxyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZEVycm9yID0gbnVsbDtcclxuICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1M6XHJcbiAgICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgZHJhZnQua2V5d29yZHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkU6XHJcblxyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRFcnJvciA9ICBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIE5FV0xPT0tfS0VZV09SRF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubmV3TG9va0tleXdvcmRzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE5FV0xPT0tfS0VZV09SRF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRIHRydWXsnbTrqbQg66Gc65Sp7LC9IOudhOyasOq4sFxyXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIGxvYWRVc2VyQ2FsZW5kYXJEYXRhTG9hZGluZzogZmFsc2UsIC8v7Jyg7KCAIOy6mOumsOuNlCDrjbDsnbTthLAg6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gIGxvYWRVc2VyQ2FsZW5kYXJEYXRhRG9uZTogZmFsc2UsXHJcbiAgbG9hZFVzZXJDYWxlbmRhckRhdGFFcnJvcjogZmFsc2UsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7ZSE66Gc7ZWEIOygleuztCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgY2hhbmdlSW5mb0RvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZUluZm9FcnJvcjogbnVsbCxcclxuICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcclxuICBsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcclxuICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICB1c2VySW5mbzogbnVsbCxcclxuICB1c2VyQ2FsZW5kYXJEYXRhOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9sb2dpbicpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihyZXMuZGF0YSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfUkVRVUVTVCA9ICdMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9DQUxFTkRBUl9EQVRBX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9GQUlMVVJFID0gJ0xPQURfVVNFUl9DQUxFTkRBUl9EQVRBX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9JTkZPX1JFUVVFU1QgPSAnQ0hBTkdFX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfSU5GT19TVUNDRVNTID0gJ0NIQU5HRV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0lORk9fRkFJTFVSRSA9ICdDSEFOR0VfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QUk9GSUxFX0lNQUdFX1JFUVVFU1QgPSAnVVBMT0FEX1BST0ZJTEVfSU1BR0VfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfUFJPRklMRV9JTUFHRV9TVUNDRVNTID0gJ1VQTE9BRF9QUk9GSUxFX0lNQUdFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BST0ZJTEVfSU1BR0VfRkFJTFVSRSA9ICdVUExPQURfUFJPRklMRV9JTUFHRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICBpZDogMSxcclxuICAgIFBvc3RzOiBbe2lkOiAxfV0sXHJcbiAgICBGb2xsb3dpbmdzOiBbe25pY2tuYW1lOiAn67aA6riw7LSIJ30sIHtuaWNrbmFtZTogJ0NoYW5obyBMZWUnfSwge25pY2tuYW1lOiAnbmV1ZSB6ZWFsJ31dLFxyXG4gICAgRm9sbG93ZXJzOiBbe25pY2tuYW1lOiAn67aA6riw7LSIJ30sIHtuaWNrbmFtZTogJ0NoYW5obyBMZWUnfSwge25pY2tuYW1lOiAnbmV1ZSB6ZWFsJ31dXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNUXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLy9kcmFmdOulvCDrsJTqvrjrqbQgaW1tZXLqsIAgc3RhdGXrpbwg67aI67OA7ISxIOyeiOqyjCDslYzslYTshJwg67CU6r+U7KSMICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/tmZTsgrTtkZzqsIAgcmV0dXJuIOyXre2VoOydhCDrjIDsi6DtlaguICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9SRVFVRVNUOiAvL+uLrOugpSDrjbDsnbTthLBcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckNhbGVuZGFyRGF0YUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyQ2FsZW5kYXJEYXRhRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyQ2FsZW5kYXJEYXRhRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9DQUxFTkRBUl9EQVRBX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJDYWxlbmRhckRhdGFMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXNlckNhbGVuZGFyRGF0YSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyQ2FsZW5kYXJEYXRhRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckNhbGVuZGFyRGF0YUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckNhbGVuZGFyRGF0YUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlSW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX0lORk9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuY2hhbmdlSW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAvLyBkcmFmdC51c2VySW5mby5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Vc2VySWQpLmluZm8gPSBhY3Rpb24uZGF0YS5pbmZvO1xyXG4gICAgIGRyYWZ0Lm1lLmluZm8gPSBhY3Rpb24uZGF0YS5pbmZvO1xyXG4gICAgIGRyYWZ0LmNoYW5nZUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVVBMT0FEX1BST0ZJTEVfSU1BR0VfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9QUk9GSUxFX0lNQUdFX1NVQ0NFU1M6e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVkdWNlciBpbWFnZTo6OjpcIiAsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVVBMT0FEX1BST0ZJTEVfSU1BR0VfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHthbGwsICBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHM9IHRydWU7XHJcbiAvL+uwseydmCBhcHAuanPsl5DshJwgQ3JlZGVudGlhbHM6IHRydWXrpbwg7ZaI6riwIOuVjOusuCjsv6DtgqQg7KCE64usKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcblxyXG4gICAgXSk7XHJcbn1cclxuXHJcbi8vZm9yazog7ZW064u5IO2VqOyImOulvCDsi6TtlontlZzri6TripQg65y7LiBjYWxs6rO8IOuLpOumhC5cclxuLy9mb3Jr64qUIOu5hOuPmeq4sCwgY2FsbOydgCDrj5nquLAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwsIGNhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBDSEVDS19EQVRFX0ZBSUxVUkUsXHJcbiAgQ0hFQ0tfREFURV9SRVFVRVNULFxyXG4gIENIRUNLX0RBVEVfU1VDQ0VTUyxcclxuICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX05FV19QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfTkVXX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9ORVdfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICBORVdMT09LX0tFWVdPUkRfRkFJTFVSRSxcclxuICBORVdMT09LX0tFWVdPUkRfUkVRVUVTVCxcclxuICBORVdMT09LX0tFWVdPUkRfU1VDQ0VTUyxcclxuICBORVdfQ09NTUVOVF9JTUFHRVNfRkFJTFVSRSxcclxuICBORVdfQ09NTUVOVF9JTUFHRVNfUkVRVUVTVCxcclxuICBORVdfQ09NTUVOVF9JTUFHRVNfU1VDQ0VTUyxcclxuICBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgUkVUV0VFVF9SRVFVRVNULFxyXG4gIFJFVFdFRVRfU1VDQ0VTUyxcclxuICBTRUFSQ0hfS0VZV09SRF9GQUlMVVJFLFxyXG4gIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QsXHJcbiAgU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVUERBVEVfQ09NTUVOVF9SQVRFX0ZBSUxVUkUsXHJcbiAgVVBEQVRFX0NPTU1FTlRfUkFURV9SRVFVRVNULFxyXG4gIFVQREFURV9DT01NRU5UX1JBVEVfU1VDQ0VTUyxcclxuICBVUERBVEVfUE9TVF9GQUlMVVJFLFxyXG4gIFVQREFURV9QT1NUX1JFUVVFU1QsXHJcbiAgVVBEQVRFX1BPU1RfU1VDQ0VTUyxcclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfRkFJTFVSRSxcclxuICBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCxcclxuICBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSkge1xyXG4gIGNvbnN0IHBvc3RJZCA9IGRhdGEuZ2V0KCdwb3N0SWQnKTtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtwb3N0SWR9L3JlZmVyZW5jZWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbmV3Q29tbWVudEltYWdlcyhhY3Rpb24pe1xyXG4gIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTkVXX0NPTU1FTlRfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBORVdfQ09NTUVOVF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB1cGRhdGVJbWFnZXNBUEkoZGF0YSl7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogdXBkYXRlSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgIFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufSAgICAgICAgICAgICAgICAgLy/so7zshozsl5Ag6re464OlIO2VnOq4gCztirnsiJjrrLjsnpDqsIAg65Ok7Ja06rCA66m0IOyXkOufrOuCmOyEnCBlbmNvZGVVUklDb21wb25lbnTroZwg6rCQ7Iu47KSY7JW8IO2VnOuLpC5cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzL2FsbExvb2tzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE5ld1Bvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHNgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWROZXdQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTmV3UG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTkVXX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX05FV19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQb3N0QVBJKGRhdGEpe1xyXG4gIGNvbnN0IHBvc3RJZCA9IGRhdGEuZ2V0KCdwb3N0SWQnKTtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7cG9zdElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBkYXRlUG9zdChhY3Rpb24pe1xyXG4gIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGRhdGVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUERBVEVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNhdGNoKGVycil7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgdHlwZTogVVBEQVRFX1BPU1RfRkFJTFVSRSxcclxuICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvbW1lbnRBUEkoZGF0YSl7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRJZCA9IGRhdGEuZ2V0KCdjb21tZW50SWQnKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCLrjJPquIAg7IKt7KCcIOyVhOydtOuUlDogXCIsIGNvbW1lbnRJZCk7XHJcblxyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0L2NvbW1lbnQvJHtjb21tZW50SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbW1lbnRSYXRlQVBJKGRhdGEpe1xyXG5cclxuICBjb25zdCBjb21tZW50SWQgPSBkYXRhLmdldCgnY29tbWVudElkJyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwi64yT6riAIOygkOyImCDslYTsnbTrlJQ6IFwiLCBjb21tZW50SWQpO1xyXG5cclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0L2NvbW1lbnRSYXRlLyR7Y29tbWVudElkfWAsIGRhdGEpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUNvbW1lbnQoYWN0aW9uKXtcclxuICB0cnl7XHJcbiAgICBjb25zdCByZW1vdmVSZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnN0IHVwZGF0ZVJlc3VsdCA9IHlpZWxkIGNhbGwodXBkYXRlQ29tbWVudFJhdGVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlbW92ZVJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUERBVEVfQ09NTUVOVF9SQVRFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHVwZGF0ZVJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUERBVEVfQ09NTUVOVF9SQVRFX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuXHJcbmNvbnN0IHBvc3RJZCA9IGRhdGEuZ2V0KCdwb3N0SWQnKTtcclxuIFxyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke3Bvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgIFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tEYXRlQVBJKGRhdGEpe1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC9jaGVja0RhdGVgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoZWNrRGF0ZShhY3Rpb24pe1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoZWNrRGF0ZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gIFxyXG4gICB5aWVsZCBwdXQoe1xyXG4gICAgIHR5cGU6IENIRUNLX0RBVEVfU1VDQ0VTUyxcclxuICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgfSk7XHJcbiB9IGNhdGNoIChlcnIpIHtcclxuICAgY29uc29sZS5lcnJvcihcIuuCoOynnCDtmZXsnbgg7JeQ65+sIO2ZleyduFwiLCBlcnIpO1xyXG4gICB5aWVsZCBwdXQoe1xyXG4gICAgIHR5cGU6IENIRUNLX0RBVEVfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgIH0pO1xyXG4gfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hLZXl3b3JkQVBJKGRhdGEpe1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnL2tleXdvcmRzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2VhcmNoS2V5d29yZChhY3Rpb24pe1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNlYXJjaEtleXdvcmRBUEksIGFjdGlvbi5kYXRhKTtcclxuICBcclxuICAgeWllbGQgcHV0KHtcclxuICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9TVUNDRVNTLFxyXG4gICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICB9KTtcclxuIH0gY2F0Y2ggKGVycikge1xyXG4gICB5aWVsZCBwdXQoe1xyXG4gICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICB9KTtcclxuIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmV3TG9va0tleXdvcmRBUEkoZGF0YSl7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcva2V5d29yZHMvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBuZXdMb29rS2V5d29yZChhY3Rpb24pe1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKG5ld0xvb2tLZXl3b3JkQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgXHJcbiAgIHlpZWxkIHB1dCh7XHJcbiAgICAgdHlwZTogTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1MsXHJcbiAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgIH0pO1xyXG4gfSBjYXRjaCAoZXJyKSB7XHJcbiAgIHlpZWxkIHB1dCh7XHJcbiAgICAgdHlwZTogTkVXTE9PS19LRVlXT1JEX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICB9KTtcclxuIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hOZXdDb21tZW50SW1hZ2VzKCl7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChORVdfQ09NTUVOVF9JTUFHRVNfUkVRVUVTVCwgbmV3Q29tbWVudEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwZGF0ZUltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9SRVFVRVNULCB1cGRhdGVJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuLy8gICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwZGF0ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUERBVEVfUE9TVF9SRVFVRVNULCB1cGRhdGVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVDb21tZW50KCl7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfQ09NTUVOVF9SRVFVRVNULCByZW1vdmVDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE5ld1Bvc3RzKCl7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX05FV19QT1NUU19SRVFVRVNULCBsb2FkTmV3UG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoZWNrRGF0ZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENIRUNLX0RBVEVfUkVRVUVTVCwgY2hlY2tEYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2VhcmNoS2V5d29yZCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QsIHNlYXJjaEtleXdvcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hOZXdMb29rS2V5d29yZCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KE5FV0xPT0tfS0VZV09SRF9SRVFVRVNULCBuZXdMb29rS2V5d29yZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoTmV3Q29tbWVudEltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoVXBkYXRlSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVW5MaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVXBkYXRlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hOZXdMb29rS2V5d29yZCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZUNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFNlYXJjaEtleXdvcmQpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaENoZWNrRGF0ZSksXHJcbiAgICBmb3JrKHdhdGNoTG9hZE5ld1Bvc3RzKVxyXG4gIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge2FsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgQ0hBTkdFX0lORk9fRkFJTFVSRSwgQ0hBTkdFX0lORk9fUkVRVUVTVCwgQ0hBTkdFX0lORk9fU1VDQ0VTUywgXHJcbiAgICBGT0xMT1dfRkFJTFVSRSwgRk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBcclxuICAgIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsIFxyXG4gICAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUywgXHJcbiAgICBMT0FEX01ZX0lORk9fRkFJTFVSRSwgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfTVlfSU5GT19TVUNDRVNTLCBcclxuICAgIExPR19JTl9GQUlMVVJFLCBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLCBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSwgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFxyXG4gICAgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUywgXHJcbiAgICBVUExPQURfUFJPRklMRV9JTUFHRV9SRVFVRVNULCBVUExPQURfUFJPRklMRV9JTUFHRV9TVUNDRVNTLCBVUExPQURfUFJPRklMRV9JTUFHRV9GQUlMVVJFLCBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9TVUNDRVNTLCBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9GQUlMVVJFLCBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9SRVFVRVNULFxyXG5cclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJDYWxlbmRhckRhdGFBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlckNhbGVuZGFyRGF0YShhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJDYWxlbmRhckRhdGFBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9DQUxFTkRBUl9EQVRBX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2Vyc0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCLroZzrk5wg7Jyg7KCAIOuNsOydtO2EsDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93aW5ncycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICBcclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VJbmZvQVBJKGRhdGEpe1xyXG4gICAgY29uc29sZS5sb2coJ3NhZ2FzIGRhdGE6Ojo6JyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvaW5mbycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlSW5mbyhhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VJbmZvQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IENIQU5HRV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vdW5mb2xsb3dgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbi8vYWN0aW9uID0gbG9naW4sIGFjdGlvbi50eXBlOiDroZzqt7jsnbgg66as7YCY7Iqk7Yq4LCBhY3Rpb24uZGF0YTog66Gc6re47J24IOuNsOydtO2EsFxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKXtcclxuICAgIHRyeXtcclxuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTXHJcbiAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7IC8vZGF0YeuKlCBlbWFpbCwgcGFzc3dvcmQsIG5pY2tuYW1l7J20652864qUIOqwneyytFxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNhZ2EgaW1hZ2U6Ojo6XCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9wcm9maWxlSW1hZ2UnLCBkYXRhKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgIFxyXG4gICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IFVQTE9BRF9QUk9GSUxFX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBVUExPQURfUFJPRklMRV9JTUFHRV9GQUlMVVJFLFxyXG4gICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24qIHdhdGNoVXBsb2FkUHJvZmlsZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX1BST0ZJTEVfSU1BR0VfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgbG9hZEZvbGxvd2luZ3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hJbmZvKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9JTkZPX1JFUVVFU1QsIGNoYW5nZUluZm8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlckNhbGVuZGFyRGF0YSgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9SRVFVRVNULCBsb2FkVXNlckNhbGVuZGFyRGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIGNvbnNvbGUubG9nKFwid2F0Y2hTaW5VcFwiKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZFByb2ZpbGUpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFVzZXJDYWxlbmRhckRhdGEpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcbiAgICAgICAgZm9yayh3YXRjaEluZm8pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9naW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApXHJcbiAgICBdKSAgIFxyXG59XHJcblxyXG4vL3B1dOydtCBkaXNwYXRjaOydmCDsl63tlaAsIOyVhOuemCDshLjqsJzqsIAg7J2067Kk7Yq466as7Iqk64SI7JmAIOqwmeydgCDsl63tlaBcclxuLy90YWtl64qUIOydvO2ajOyEseydtOudvCB3aGlsZeusuOycvOuhnCDqsJDsi7jslbwg66y07ZWc7Z6IIOyLpO2WiSDqsIDriqVcclxuLy93aGlsZSB0YWtl64qUIOuPmeq4sOyggeycvOuhnCDrj5nsnpHtlZjsp4Drp4wgdGFrZUV2ZXJ564qUIOu5hOuPmeq4sOuhnCDrj5nsnpEuIHRha2VFdmVyeeuhnCB3aGlsZeusuCDrjIDssrRcclxuLy90YWtlTGF0ZXN0OiDsi6TsiJjroZwg7Jes65+s67KIIOuPmeyLnOyXkCDriIzrn6zrj4Qg6rCA7J6lIOuniOyngOuniSDsmpTssq3rp4wg7IiY7ZaJLuuhnOuUqeykkeyduCDslZ7shKAg7JqU7LKt7J20IO2VtOuLuVxyXG4vL3Rha2VMYXRlc3TripQg7J2R64u17J2EIOy3qOyGjO2VmOuKlOqxsOyngCDsmpTssq3snYQg7Leo7IaM7ZWY64qU6rKMIOyVhOuLmC5cclxuLy90YWtlTGVhZGluZzogdGFrZUxhdGVzdOyZgCDrsJjrjIDroZwg6rCA7J6lIOyymOydjCDsmpTssq3rp4wg7IiY7ZaJIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsImltcG9ydCB7IGVuYWJsZUVTNSwgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XHJcbiAgZW5hYmxlRVM1KCk7XHJcbiAgcmV0dXJuIHByb2R1Y2UoLi4uYXJncyk7XHJcbn07XHJcbi8v7J247YSw64S3IOydteyKpO2UjOuhnOufrOyXkOyEnCDsnbTrqLjqsIAg7J6R64+Z7J2EIOyViO2VtOyEnCDshKTsoJXsnYQg7ZW07KSY7JW8IO2VqC4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvaW5wdXQvVGV4dEFyZWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbGF5b3V0L2xheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=