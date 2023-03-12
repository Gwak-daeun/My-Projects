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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/[id].js");
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

/***/ "./components/userComponent/userDateCellRender.js":
/*!********************************************************!*\
  !*** ./components/userComponent/userDateCellRender.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\userComponent\\userDateCellRender.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const OneImage = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "userDateCellRender__OneImage",
  componentId: "sc-1tyjog1-0"
})([".img1{width:60px;}"]);
const UserDateCellRender = value => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    userCalendarData,
    userInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_CALENDAR_DATA_REQUEST"],
      data: userInfo.id
    });
  }, []);
  const getDayInfo = () => {
    const calendarData = [];
    let diaryMoment;
    for (let i = 0; i < userCalendarData.length; i++) {
      // console.log("생성 날짜",  moment(userCalendarData[i].createdAt).format("YYYY-MM-DD"));
      diaryMoment = moment__WEBPACK_IMPORTED_MODULE_2___default()(userCalendarData[i].createdAt).format("YYYY-MM-DD");
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
    switch (moment__WEBPACK_IMPORTED_MODULE_2___default()(value).format("YY-MM-DD")) {
      case moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format("YY-MM-DD"):
        return __jsx("a", {
          href: `http://localhost:3000/post/${postId}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }
        }, __jsx(OneImage, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 16
          }
        }, __jsx("img", {
          className: "img1",
          src: `http://localhost:3065/${photo}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 26
          }
        })));
      default:
        return __jsx("div", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }
        });
    }
  };
  const NameRander = ({
    date,
    name
  }) => {
    switch (moment__WEBPACK_IMPORTED_MODULE_2___default()(value).format("YY-MM-DD")) {
      case moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format("YY-MM-DD"):
        return __jsx("h5", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }
        }, name);
      default:
        return __jsx("div", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }
        });
    }
  };
  const dayInfo = getDayInfo();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 3
    }
  }, dayInfo.map(info => __jsx("div", {
    key: info.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 10
    }
  }, __jsx(NameRander, {
    date: info.createdAt,
    name: info.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }), __jsx(PhotoRander, {
    postId: info.id,
    date: info.createdAt,
    photo: info.photo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 10
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (UserDateCellRender);

/***/ }),

/***/ "./components/userComponent/userFollowers.js":
/*!***************************************************!*\
  !*** ./components/userComponent/userFollowers.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\userComponent\\userFollowers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Li = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.li.withConfig({
  displayName: "userFollowers__Li",
  componentId: "sc-154qdjs-0"
})([".fIcon{font-size:15px;}"]);
const OneUserFollower = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "userFollowers__OneUserFollower",
  componentId: "sc-154qdjs-1"
})([".card1{width:360px;height:215px;}.card2{width:110px;}.img1{width:100%;}.a1{margin-left:30px;}"]);
const UserFollowers = () => {
  const {
    userInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const referModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const IfFollower = () => {
    if (userInfo.Followers[0] !== undefined) {
      return __jsx(Li, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "ficon",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 20
        }
      }), " ", userInfo.Followers[0].nickname);
    }
    if (userInfo.Followers[1] !== undefined) {
      return __jsx(Li, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "ficon",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 20
        }
      }), userInfo.Followers[1].nickname);
    }
    if (userInfo.Followers[2] !== undefined) {
      return __jsx(Li, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "ficon",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 20
        }
      }), userInfo.Followers[2].nickname);
    } else {
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Empty"], {
        description: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 23
          }
        }, "\uC544\uC9C1 \uD314\uB85C\uC6CC\uAC00 \uC5C6\uC5B4\uC694."),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }));
    }
  };
  const originalImage = `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(OneUserFollower, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: "Followers",
    extra: __jsx("a", {
      onClick: referModal,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 18
      }
    }, "More"),
    className: "card1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(IfFollower, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: userInfo.nickname + " 의 팔로워 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: userInfo.Followers,
    renderItem: items => __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, __jsx(OneUserFollower, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: `http://localhost:3000/user/${items.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      size: 100,
      src: items.Image.src === originalImage ? originalImage : `http://localhost:3065/${items.Image.src}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    })), __jsx("a", {
      className: "a1",
      href: `http://localhost:3000/user/${items.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 19
      }
    }, items.nickname))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (UserFollowers);

/***/ }),

/***/ "./components/userComponent/userFollowings.js":
/*!****************************************************!*\
  !*** ./components/userComponent/userFollowings.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\userComponent\\userFollowings.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const OneUserFollowing = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "userFollowings__OneUserFollowing",
  componentId: "sc-1jf08l-0"
})([".icons{font-size:15px;}.card1{width:360px;margin-left:30px;height:215px;}.img1{width:100%;}.card2{width:110px;}.a1{margin-left:30px;}"]);
const UserFollowings = () => {
  const {
    userInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const referModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const IfFollowing = () => {
    if (userInfo.Followings[0] !== undefined) {
      return __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "icons",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 18
        }
      }), " ", userInfo.Followings[0].nickname);
    }
    if (userInfo.Followings[1] !== undefined) {
      return __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 14
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "icons",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 18
        }
      }), userInfo.Followings[1].nickname);
    }
    if (userInfo.Followings[2] !== undefined) {
      return __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 14
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "icons",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 18
        }
      }), userInfo.Followings[2].nickname);
    } else {
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Empty"], {
        description: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 19
          }
        }, "\uC544\uC9C1 \uD314\uB85C\uC789\uC774 \uC5C6\uC5B4\uC694."),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }));
    }
  };
  const originalImage = `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`;
  return __jsx("div", {
    className: "site-card-border-less-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(OneUserFollowing, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: "Followings",
    className: "card1",
    extra: __jsx("a", {
      onClick: referModal,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 18
      }
    }, "More"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(IfFollowing, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: userInfo.nickname + " 의 팔로잉 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: userInfo.Followings,
    renderItem: items => __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }, __jsx(OneUserFollowing, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: `http://localhost:3000/user/${items.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      size: 100,
      src: items.Image.src === originalImage ? originalImage : `http://localhost:3065/${items.Image.src}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    })), __jsx("a", {
      className: "a1",
      href: `http://localhost:3000/user/${items.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 19
      }
    }, items.nickname))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (UserFollowings);

/***/ }),

/***/ "./components/userComponent/userInfo.js":
/*!**********************************************!*\
  !*** ./components/userComponent/userInfo.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_css_myInfo_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/css/myInfo.module.css */ "./pages/css/myInfo.module.css");
/* harmony import */ var _pages_css_myInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_css_myInfo_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\userComponent\\userInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  Meta
} = antd__WEBPACK_IMPORTED_MODULE_2__["Card"];

const OneUserInfo = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "userInfo__OneUserInfo",
  componentId: "sc-1ll5eeg-0"
})([".card1{margin-left:15px;width:250px;}.img1{width:100%;height:350px;}"]);
const originalImage = `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`;
const UserInfo = () => {
  const {
    userInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  console.log("유저인포: ", userInfo);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(OneUserInfo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    encType: "multipart/form-data",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    title: userInfo.nickname + "'s Info",
    className: "card1",
    cover: __jsx(OneUserInfo, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 28
      }
    }, __jsx("img", {
      className: "img1",
      src: userInfo.Image.src === originalImage ? userInfo.Image.src : `http://localhost:3065/${userInfo.Image.src}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 41
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    title: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      readOnly: true,
      defaultValue: userInfo.nickname,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 26
      }
    }),
    description: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      readOnly: true,
      defaultValue: userInfo.info === null ? "자기자신을 한 단어로 표현한다면?" : "한마디:  " + userInfo.info,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./components/userComponent/userLikeList.js":
/*!**************************************************!*\
  !*** ./components/userComponent/userLikeList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\userComponent\\userLikeList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const OneUserLikeList = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "userLikeList__OneUserLikeList",
  componentId: "sc-bbhc3b-0"
})([".icons{font-size:15px;}.card1{width:250px;height:240px;margin-top:40px;margin-left:18px;}.img1{width:100%;}"]);
const UserLikeList = () => {
  const {
    userInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  console.log("인용리스트", userInfo);
  const referModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const IfLike = () => {
    if (userInfo.Liked[0] !== undefined) {
      return __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeart"],
        className: "icons",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 20
        }
      }), " ", userInfo.Liked[0].lookName);
    }
    if (userInfo.Liked[1] !== undefined) {
      return __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeart"],
        className: "icons",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 20
        }
      }), userInfo.Liked[1].lookName);
    }
    if (userInfo.Liked[2] !== undefined) {
      return __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeart"],
        className: "icons",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 20
        }
      }), userInfo.Liked[2].lookName);
    } else {
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Empty"], {
        description: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }
        }, "\uC88B\uC544\uC694\uB97C \uD55C Look\uC774 \uC5C6\uC5B4\uC694."),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 19
        }
      }));
    }
  };
  return __jsx("div", {
    className: "site-card-border-less-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(OneUserLikeList, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: "I like this!",
    className: "card1",
    extra: __jsx("a", {
      onClick: referModal,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 22
      }
    }, "More"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(IfLike, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: userInfo.nickname + " 의 좋아요 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: userInfo.Liked,
    renderItem: item => __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      title: __jsx("a", {
        href: `http://localhost:3000/post/${item.id}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 28
        }
      }, item.lookName),
      cover: __jsx("a", {
        href: `http://localhost:3000/post/${item.id}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 28
        }
      }, __jsx(OneUserLikeList, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 79
        }
      }, __jsx("img", {
        className: "img1",
        alt: "example",
        src: `http://localhost:3065/${item.Images[0].src}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 96
        }
      }))),
      className: "card2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (UserLikeList);

/***/ }),

/***/ "./components/userComponent/userMention.js":
/*!*************************************************!*\
  !*** ./components/userComponent/userMention.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\userComponent\\userMention.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  Meta
} = antd__WEBPACK_IMPORTED_MODULE_1__["Card"];

const OneUserMention = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "userMention__OneUserMention",
  componentId: "sc-1k9eub8-0"
})([".card1{width:250px;height:220px;float:'left';margin-left:17px;margin-top:36px;}.icons{font-size:15px;}.img1{width:100%;}.card2{width:110px;}"]);
const UserMention = () => {
  const {
    userInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
      return __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPenNib"],
        className: "icons",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 20
        }
      }), userInfo.References[0].content);
    }
    if (userInfo.References[1] !== undefined) {
      return __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPenNib"],
        className: "icons",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 20
        }
      }), userInfo.References[1].content);
    }
    if (userInfo.References[2] !== undefined) {
      return __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPenNib"],
        className: "icons",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 20
        }
      }), userInfo.References[2].content);
    } else {
      return __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
        description: __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }
        }, "\uC544\uC9C1 \uC778\uC6A9\uC774 \uC5C6\uC5B4\uC694."),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 19
        }
      }));
    }
  };
  return __jsx(OneUserMention, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "I refered...",
    extra: __jsx("a", {
      onClick: referModal,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 20
      }
    }, "More"),
    className: "card1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(IfRefer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: userInfo.nickname + " 의 인용 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: userInfo.References,
    renderItem: item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      cover: __jsx("a", {
        href: `http://localhost:3000/post/${item.id}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 28
        }
      }, __jsx(OneUserMention, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 79
        }
      }, __jsx("img", {
        className: "img1",
        alt: "example",
        src: `http://localhost:3065/${item.referSrc}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 95
        }
      }))),
      className: "card2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    }, __jsx(Meta, {
      description: item.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 23
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (UserMention);

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

/***/ "./pages/css/myInfo.module.css":
/*!*************************************!*\
  !*** ./pages/css/myInfo.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"myInfo": "myInfo_myInfo__1YHqK",
	"myInfo2": "myInfo_myInfo2__23gMB",
	"card1": "myInfo_card1__3VIjB",
	"formcontrol": "myInfo_formcontrol__JCO83",
	"formcontrol2": "myInfo_formcontrol2__3HGUI",
	"formcontrol3": "myInfo_formcontrol3__3ICNH",
	"formcontrol4": "myInfo_formcontrol4__ILtG4"
};


/***/ }),

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_userComponent_userDateCellRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/userComponent/userDateCellRender */ "./components/userComponent/userDateCellRender.js");
/* harmony import */ var _components_userComponent_userInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/userComponent/userInfo */ "./components/userComponent/userInfo.js");
/* harmony import */ var _components_userComponent_userLikeList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/userComponent/userLikeList */ "./components/userComponent/userLikeList.js");
/* harmony import */ var _components_userComponent_userMention__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/userComponent/userMention */ "./components/userComponent/userMention.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_userComponent_userFollowers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/userComponent/userFollowers */ "./components/userComponent/userFollowers.js");
/* harmony import */ var _components_userComponent_userFollowings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/userComponent/userFollowings */ "./components/userComponent/userFollowings.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\pages\\user\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

















const OneUser = styled_components__WEBPACK_IMPORTED_MODULE_15___default.a.div.withConfig({
  displayName: "id__OneUser",
  componentId: "sc-18hvwfa-0"
})([".div1{position:relative;width:1250px;}.div2{float:left;}.section1{margin-top:50px;}.button1{background-color:black;color:white;}.calendar1{width:700px;height:1010px;}.row1{margin-top:15px;}"]);
const User = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    userInfo,
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    //다른 유저 프로필로 이동 시, 접속 중인 아이디와 같은지 비교 후 같다면 홈화면으로 이동
    if (id == me.id) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.replace('/');
    }
    if (!(me && me.id)) {
      alert("로그인 후 이용 가능합니다.");
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    }
  }, []);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(OneUser, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "div1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: "section1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 18
    }
  }, userInfo.nickname, "'s Profile")), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "div2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Calendar"], {
    className: "calendar1",
    dateCellRender: _components_userComponent_userDateCellRender__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "div2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_components_userComponent_userInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }), __jsx(_components_userComponent_userMention__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx(_components_userComponent_userLikeList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    className: "row1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(_components_userComponent_userFollowers__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), __jsx(_components_userComponent_userFollowings__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }))))));
};
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_10__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_11___default.a.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOAD_USER_REQUEST"],
    data: context.params.id
  });
  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOAD_MY_INFO_REQUEST"]
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_12__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (User);

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlckNvbXBvbmVudC91c2VyRGF0ZUNlbGxSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyQ29tcG9uZW50L3VzZXJGb2xsb3dlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyQ29tcG9uZW50L3VzZXJGb2xsb3dpbmdzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlckNvbXBvbmVudC91c2VySW5mby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VzZXJDb21wb25lbnQvdXNlckxpa2VMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlckNvbXBvbmVudC91c2VyTWVudGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jc3MvbXlJbmZvLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlci8uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbGF5b3V0L2xheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibWUiLCJsb2dPdXRMb2FkaW5nIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJrZXl3b3JkcyIsInBvc3QiLCJyZXN1bHRXb3JkcyIsIm1hcCIsIml0ZW1zIiwidmFsdWUiLCJuYW1lIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInVzZVN0YXRlIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwiU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCIsImRhdGEiLCJvblNlYXJjaCIsIlJvdXRlciIsInB1c2giLCJvbkxvZ091dCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZXBsYWNlIiwiaGFuZGxlU2VsZWN0Iiwibmlja25hbWUiLCJPbmVJbWFnZSIsInN0eWxlZCIsImRpdiIsIlVzZXJEYXRlQ2VsbFJlbmRlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VyQ2FsZW5kYXJEYXRhIiwidXNlckluZm8iLCJ1c2VFZmZlY3QiLCJMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9SRVFVRVNUIiwiZ2V0RGF5SW5mbyIsImNhbGVuZGFyRGF0YSIsImRpYXJ5TW9tZW50IiwiaSIsImxlbmd0aCIsIm1vbWVudCIsImNyZWF0ZWRBdCIsImZvcm1hdCIsInBob3RvIiwiSW1hZ2VzIiwic3JjIiwidGl0bGUiLCJsb29rTmFtZSIsImRhdGUiLCJQaG90b1JhbmRlciIsInBvc3RJZCIsIk5hbWVSYW5kZXIiLCJkYXlJbmZvIiwiaW5mbyIsIkxpIiwibGkiLCJPbmVVc2VyRm9sbG93ZXIiLCJVc2VyRm9sbG93ZXJzIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsInJlZmVyTW9kYWwiLCJoYW5kbGVDYW5jZWwiLCJJZkZvbGxvd2VyIiwiRm9sbG93ZXJzIiwidW5kZWZpbmVkIiwiZmFTcXVhcmUiLCJvcmlnaW5hbEltYWdlIiwiZ3V0dGVyIiwiY29sdW1uIiwiSW1hZ2UiLCJPbmVVc2VyRm9sbG93aW5nIiwiVXNlckZvbGxvd2luZ3MiLCJJZkZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJNZXRhIiwiQ2FyZCIsIk9uZVVzZXJJbmZvIiwiVXNlckluZm8iLCJPbmVVc2VyTGlrZUxpc3QiLCJVc2VyTGlrZUxpc3QiLCJJZkxpa2UiLCJMaWtlZCIsImZhSGVhcnQiLCJpdGVtIiwiT25lVXNlck1lbnRpb24iLCJVc2VyTWVudGlvbiIsIklmUmVmZXIiLCJSZWZlcmVuY2VzIiwiZmFQZW5OaWIiLCJjb250ZW50IiwicmVmZXJTcmMiLCJpbml0aWFsVmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJ3b3J0aCIsIk5FV0xPT0tfS0VZV09SRF9SRVFVRVNUIiwiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJlcnJvciIsInByZWZldGNoIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImNhdGNoIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwicGF0aG5hbWUiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaXNMb2NhbFVSTCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJpbnRlcnBvbGF0ZUFzIiwicm91dGUiLCJhc1BhdGhuYW1lIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImxvY2FsZXMiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwicmVsb2FkIiwibG9jYXRpb24iLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYWdlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInJld3JpdGVzIiwicHJvbWlzZWRCdWlsZE1hbmlmZXN0IiwicGFyc2VkIiwiX3Jlc29sdmVIcmVmIiwidXJsSXNOZXciLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsImZpbHRlciIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJwYWdlIiwiZmV0Y2hDb21wb25lbnQiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJyZXF1aXJlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsImZvcm1hdFVybCIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwiRFVNTVlfQkFTRSIsInBhcnNlUmVsYXRpdmVVcmwiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJtYXRjaCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwiZ2V0Um91dGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJPbmVVc2VyIiwiVXNlciIsImFsZXJ0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid3JhcHBlciIsImNvbnRleHQiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiYXhpb3MiLCJkZWZhdWx0cyIsIkNvb2tpZSIsInN0b3JlIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkVORCIsInNhZ2FUYXNrIiwidG9Qcm9taXNlIiwicm9vdFJlZHVjZXIiLCJhY3Rpb24iLCJIWURSQVRFIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJzaW5nbGVQb3N0IiwibmV3TG9va0tleXdvcmRzIiwiaGFzTW9yZVBvc3RzIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwidXBkYXRlUG9zdExvYWRpbmciLCJ1cGRhdGVQb3N0RG9uZSIsInVwZGF0ZVBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJyZW1vdmVDb21tZW50TG9hZGluZyIsInJlbW92ZUNvbW1lbnREb25lIiwicmVtb3ZlQ29tbWVudEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJ1cGxvYWRVcGRhdGVMb29raW1hZ2VMb2FkaW5nIiwidXBsb2FkVXBkYXRlTG9va2ltYWdlRXJyb3IiLCJ1cGxvYWRVcGRhdGVMb29raW1hZ2VEb25lIiwidXBkYXRlQ29tbWVudFJhdGVMb2FkaW5nIiwidXBkYXRlQ29tbWVudFJhdGVFcnJvciIsInVwZGF0ZUNvbW1lbnRSYXRlRG9uZSIsImNoZWNrRGF0ZUxvYWRpbmciLCJjaGVja0RhdGVFcnJvciIsImNoZWNrRGF0ZURvbmUiLCJzZWFyY2hLZXl3b3JkTG9hZGluZyIsInNlYXJjaEtleXdvcmRFcnJvciIsInNlYXJjaEtleXdvcmREb25lIiwiQ0hFQ0tfREFURV9SRVFVRVNUIiwiQ0hFQ0tfREFURV9TVUNDRVNTIiwiQ0hFQ0tfREFURV9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTkVXX0NPTU1FTlRfSU1BR0VTX1JFUVVFU1QiLCJORVdfQ09NTUVOVF9JTUFHRVNfU1VDQ0VTUyIsIk5FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFIiwiVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1QiLCJVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfU1VDQ0VTUyIsIlVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCIsIkxPQURfTkVXX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX05FV19QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiVVBEQVRFX1BPU1RfUkVRVUVTVCIsIlVQREFURV9QT1NUX1NVQ0NFU1MiLCJVUERBVEVfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwiVVBEQVRFX0NPTU1FTlRfUkFURV9SRVFVRVNUIiwiVVBEQVRFX0NPTU1FTlRfUkFURV9TVUNDRVNTIiwiVVBEQVRFX0NPTU1FTlRfUkFURV9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyIsIlNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUiLCJORVdMT09LX0tFWVdPUkRfU1VDQ0VTUyIsIk5FV0xPT0tfS0VZV09SRF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiZHVtbXlQb3N0IiwiQ29tbWVudHMiLCJkdW1teUNvbW1lbnQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwidiIsInVuc2hpZnQiLCJMaWtlcnMiLCJVc2VySWQiLCJjb25jYXQiLCJQb3N0SWQiLCJyYXRlQXZlcmFnZSIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZFVzZXJDYWxlbmRhckRhdGFMb2FkaW5nIiwibG9hZFVzZXJDYWxlbmRhckRhdGFEb25lIiwibG9hZFVzZXJDYWxlbmRhckRhdGFFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VJbmZvTG9hZGluZyIsImNoYW5nZUluZm9Eb25lIiwiY2hhbmdlSW5mb0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwibG9naW5BY3Rpb24iLCJnZXRTdGF0ZSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImxvZ2luRmFpbHVyZUFjdGlvbiIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfU1VDQ0VTUyIsIkxPQURfVVNFUl9DQUxFTkRBUl9EQVRBX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfSU5GT19SRVFVRVNUIiwiQ0hBTkdFX0lORk9fU1VDQ0VTUyIsIkNIQU5HRV9JTkZPX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJVUExPQURfUFJPRklMRV9JTUFHRV9SRVFVRVNUIiwiVVBMT0FEX1BST0ZJTEVfSU1BR0VfU1VDQ0VTUyIsIlVQTE9BRF9QUk9GSUxFX0lNQUdFX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsInJldHdlZXRBUEkiLCJyZXR3ZWV0IiwiY2FsbCIsInB1dCIsInJlc3BvbnNlIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwibmV3Q29tbWVudEltYWdlcyIsInVwZGF0ZUltYWdlcyIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwibG9hZFBvc3RBUEkiLCJsb2FkUG9zdCIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJsYXN0SWQiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwibG9hZFBvc3RzQVBJIiwibG9hZFBvc3RzIiwibG9hZE5ld1Bvc3RzQVBJIiwibG9hZE5ld1Bvc3RzIiwiYWRkUG9zdEFQSSIsImFkZFBvc3QiLCJ1cGRhdGVQb3N0QVBJIiwidXBkYXRlUG9zdCIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwicmVtb3ZlQ29tbWVudEFQSSIsImNvbW1lbnRJZCIsInVwZGF0ZUNvbW1lbnRSYXRlQVBJIiwicmVtb3ZlQ29tbWVudCIsInJlbW92ZVJlc3VsdCIsInVwZGF0ZVJlc3VsdCIsImFkZENvbW1lbnRBUEkiLCJhZGRDb21tZW50IiwiY2hlY2tEYXRlQVBJIiwiY2hlY2tEYXRlIiwic2VhcmNoS2V5d29yZEFQSSIsInNlYXJjaEtleXdvcmQiLCJuZXdMb29rS2V5d29yZEFQSSIsIm5ld0xvb2tLZXl3b3JkIiwid2F0Y2hSZXR3ZWV0IiwidGFrZUxhdGVzdCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTmV3Q29tbWVudEltYWdlcyIsIndhdGNoVXBkYXRlSW1hZ2VzIiwid2F0Y2hVbkxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExvYWRIYXNodGFnUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFVwZGF0ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZUNvbW1lbnQiLCJ3YXRjaExvYWROZXdQb3N0cyIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoQ2hlY2tEYXRlIiwid2F0Y2hTZWFyY2hLZXl3b3JkIiwid2F0Y2hOZXdMb29rS2V5d29yZCIsImxvYWRVc2VyQ2FsZW5kYXJEYXRhQVBJIiwibG9hZFVzZXJDYWxlbmRhckRhdGEiLCJyZW1vdmVGb2xsb3dlcnNBUEkiLCJyZW1vdmVGb2xsb3dlciIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJjaGFuZ2VJbmZvQVBJIiwiSlNPTiIsInN0cmluZ2lmeSIsImNoYW5nZUluZm8iLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJkZWxheSIsImxvZ2luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaFVwbG9hZFByb2ZpbGUiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoSW5mbyIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaExvYWRVc2VyQ2FsZW5kYXJEYXRhIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJsb2dnZXJNaWRkbGV3YXJlIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJlbmFibGVFUzUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFEO0FBQ21DO0FBQzNEO0FBQ1k7QUFDUjtBQUNzQjtBQUNBO0FBQ0c7QUFDVjtBQUdoRCxNQUFNQSxTQUFTLEdBQUcsQ0FBQztFQUFDQztBQUFRLENBQUMsS0FBSztFQUU5QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFFOUIsTUFBTTtJQUFDQyxFQUFFO0lBQUVDO0VBQWEsQ0FBQyxHQUFHQywrREFBVyxDQUFFQyxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO0VBRTlELE1BQU07SUFBQ0M7RUFBUSxDQUFDLEdBQUdILCtEQUFXLENBQUVDLEtBQUssSUFBS0EsS0FBSyxDQUFDRyxJQUFJLENBQUM7RUFFckQsTUFBTUMsV0FBVyxHQUFHRixRQUFRLGFBQVJBLFFBQVEsdUJBQVJBLFFBQVEsQ0FBRUcsR0FBRyxDQUFDQyxLQUFLLEtBQUs7SUFBQ0MsS0FBSyxFQUFFRCxLQUFLLENBQUNFO0VBQUksQ0FBQyxDQUFDLENBQUM7RUFFakUsTUFBTTtJQUFBLEdBQUNDLFdBQVc7SUFBQSxHQUFFQztFQUFjLElBQUlDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0VBRWxEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsV0FBVyxDQUFDO0VBRXhCLE1BQU1VLG1CQUFtQixHQUFHQyx5REFBVyxDQUFFQyxDQUFDLElBQUs7SUFDM0MsTUFBTVQsS0FBSyxHQUFHUyxDQUFDLENBQUNDLE1BQU0sQ0FBQ1YsS0FBSztJQUM1QkcsY0FBYyxDQUFDSCxLQUFLLENBQUM7SUFDckJaLFFBQVEsQ0FBQztNQUNMdUIsSUFBSSxFQUFFQyxxRUFBc0I7TUFDNUJDLElBQUksRUFBRWI7SUFDVixDQUFDLENBQUM7RUFDTixDQUFDLEVBQUUsQ0FBQ1osUUFBUSxDQUFDLENBQUM7RUFFZCxNQUFNMEIsUUFBUSxHQUFHTix5REFBVyxDQUFDLE1BQU07SUFDL0JPLGtEQUFNLENBQUNDLElBQUksQ0FBRSxZQUFXZCxXQUFZLEVBQUMsQ0FBQztFQUN4QyxDQUFDLEVBQUUsQ0FBQ0EsV0FBVyxDQUFDLENBQUM7RUFFbkIsTUFBTWUsUUFBUSxHQUFHVCx5REFBVyxDQUFDLE1BQU07SUFDbkNwQixRQUFRLENBQUM4QiwwRUFBbUIsRUFBRSxDQUFDO0lBQy9CSCxrREFBTSxDQUFDSSxPQUFPLENBQUUsR0FBRSxDQUFDO0VBQ25CLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixNQUFNQyxZQUFZLEdBQUlwQixLQUFLLElBQUs7SUFDNUJHLGNBQWMsQ0FBQ0gsS0FBSyxDQUFDO0VBQ3ZCLENBQUM7RUFFSCxPQUNJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDTyxNQUFDLHlDQUFJO0lBQUMsRUFBRSxFQUFDLE9BQU87SUFBQyxJQUFJLEVBQUMsWUFBWTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRWpDLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDVixNQUFDLGdEQUFJO0lBQUMsSUFBSSxFQUFDLEdBQUc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFDO0lBQUksU0FBUyxFQUFDLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxnQkFBaUIsQ0FBTyxDQUNoRCxFQUNaLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDVixNQUFDLGdEQUFJO0lBQUMsSUFBSSxFQUFDLFVBQVU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFDO0lBQUksU0FBUyxFQUFDLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxnQkFBaUIsQ0FBTyxDQUN0RCxFQUNiLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDVixNQUFDLGdEQUFJO0lBQUMsSUFBSSxFQUFDLGdCQUFnQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUM7SUFBSSxTQUFTLEVBQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGVBQWdCLENBQU8sQ0FDNUQsRUFDWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLFNBQVMsRUFBQyxPQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDeEIsTUFBQyw0Q0FBTztJQUFDLEtBQUssRUFBQywwRkFBb0I7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUMvQixNQUFDLGlEQUFZO0lBQ1Qsd0JBQXdCLEVBQUUsR0FBSTtJQUM5QixPQUFPLEVBQUVILFdBQVk7SUFDckIsRUFBRSxFQUFDLFFBQVE7SUFDWCxRQUFRLEVBQUV1QixZQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFdkIsTUFBQywwQ0FBSyxDQUFDLE1BQU07SUFDYixFQUFFLEVBQUMsUUFBUTtJQUNYLFNBQVMsRUFBQyxTQUFTO0lBQ25CLEtBQUssRUFBRWxCLFdBQVk7SUFDbkIsUUFBUSxFQUFFSyxtQkFBb0I7SUFDOUIsUUFBUSxFQUFFTyxRQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDakIsQ0FDUyxDQUNULENBQ0YsRUFDWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1Y7SUFBSSxTQUFTLEVBQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUd4QixFQUFFLEdBQUcsYUFBYSxHQUFHQSxFQUFFLENBQUMrQixRQUFRLEdBQUcsSUFBSSxDQUFNLENBQ3pELEVBQ1YvQixFQUFFLEdBRUosTUFBQyx5Q0FBSSxDQUFDLElBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNOLE1BQUMsMkNBQU07SUFBQyxTQUFTLEVBQUMsU0FBUztJQUFDLE9BQU8sRUFBRTJCLFFBQVM7SUFBQyxPQUFPLEVBQUUxQixhQUFjO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBQWUsQ0FDN0UsR0FFWixJQUFJLENBR0QsRUFDUCxNQUFDLHdDQUFHO0lBQUMsTUFBTSxFQUFFLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNYLE1BQUMsd0NBQUc7SUFBQyxFQUFFLEVBQUUsRUFBRztJQUFDLEVBQUUsRUFBRSxDQUFFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDYixFQUNOLE1BQUMsd0NBQUc7SUFBQyxFQUFFLEVBQUUsRUFBRztJQUFDLEVBQUUsRUFBRSxFQUFHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBRUosUUFBUSxDQUFPLENBQ25DLEVBQ04sTUFBQyw2REFBTTtJQUNQLFNBQVMsRUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFZCxNQUFDLGlEQUFZO0lBQUMsS0FBSyxFQUFDLE1BQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUN0QixNQUFDLGlEQUFZLENBQUMsSUFBSTtJQUFDLEtBQUssRUFBQyxvQkFBSztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQUF3QixFQUN0RCxNQUFDLGlEQUFZLENBQUMsSUFBSTtJQUFDLEtBQUssRUFBQyxvQkFBSztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHVCQUFzQyxFQUNwRSxNQUFDLGlEQUFZLENBQUMsSUFBSTtJQUFDLEtBQUssRUFBQyxTQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBQztJQUFHLE1BQU0sRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDLDhDQUE4QztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGlCQUFnQixDQUFvQixFQUM3SSxNQUFDLGlEQUFZLENBQUMsSUFBSTtJQUFDLEtBQUssRUFBQyxvQkFBSztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUM7SUFBRyxNQUFNLEVBQUMsUUFBUTtJQUFDLElBQUksRUFBQyx5RUFBeUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxxQ0FBZ0IsQ0FBb0IsQ0FDekosQ0FDVixDQUNQO0FBR2QsQ0FBQztBQUVjRCx3RUFBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0c0QztBQUNiO0FBQzNCO0FBQ0M7QUFDeUM7QUFDOUI7QUFDRDtBQUV2QyxNQUFNb0MsUUFBUSxHQUFHQyx3REFBTSxDQUFDQyxHQUFHO0VBQUE7RUFBQTtBQUFBLDBCQU0xQjtBQUVELE1BQU1DLGtCQUFrQixHQUFJekIsS0FBSyxJQUFLO0VBRW5DLE1BQU1aLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUU5QixNQUFNcUMsTUFBTSxHQUFHQyw2REFBUyxFQUFFO0VBQzFCLE1BQU07SUFBRUM7RUFBRyxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csS0FBSztFQUUzQixNQUFNO0lBQUNDLGdCQUFnQjtJQUFFQztFQUFRLENBQUMsR0FBR3ZDLCtEQUFXLENBQUVDLEtBQUssSUFBS0EsS0FBSyxDQUFDQyxJQUFJLENBQUM7RUFFdkVzQyx1REFBUyxDQUFDLE1BQU07SUFDYjVDLFFBQVEsQ0FBQztNQUNOdUIsSUFBSSxFQUFFc0IsOEVBQStCO01BQ3JDcEIsSUFBSSxFQUFFa0IsUUFBUSxDQUFDSDtJQUNsQixDQUFDLENBQUM7RUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sTUFBTU0sVUFBVSxHQUFHLE1BQU07SUFDdEIsTUFBTUMsWUFBWSxHQUFHLEVBQUU7SUFDdkIsSUFBSUMsV0FBVztJQUVmLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUCxnQkFBZ0IsQ0FBQ1EsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUMvQztNQUNBRCxXQUFXLEdBQUdHLDZDQUFNLENBQUNULGdCQUFnQixDQUFDTyxDQUFDLENBQUMsQ0FBQ0csU0FBUyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7TUFHeEUsSUFBR0wsV0FBVyxFQUFDO1FBQ1pELFlBQVksQ0FBQ25CLElBQUksQ0FBRTtVQUNoQjBCLEtBQUssRUFBRVosZ0JBQWdCLENBQUNPLENBQUMsQ0FBQyxDQUFDTSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUc7VUFDeENDLEtBQUssRUFBRWYsZ0JBQWdCLENBQUNPLENBQUMsQ0FBQyxDQUFDUyxRQUFRO1VBQ25DQyxJQUFJLEVBQUVYLFdBQVc7VUFDakJJLFNBQVMsRUFBRVYsZ0JBQWdCLENBQUNPLENBQUMsQ0FBQyxDQUFDRyxTQUFTO1VBQ3hDWixFQUFFLEVBQUVFLGdCQUFnQixDQUFDTyxDQUFDLENBQUMsQ0FBQ1Q7UUFDM0IsQ0FBQyxDQUFDO01BQ0w7SUFDSDtJQUVBLE9BQU9PLFlBQVksSUFBSSxFQUFFO0VBQzVCLENBQUM7RUFFRCxNQUFNYSxXQUFXLEdBQUcsQ0FBQztJQUFDRCxJQUFJO0lBQUVMLEtBQUs7SUFBRU87RUFBTSxDQUFDLEtBQUs7SUFHNUMsUUFBT1YsNkNBQU0sQ0FBQ3ZDLEtBQUssQ0FBQyxDQUFDeUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztNQUNwQyxLQUFLRiw2Q0FBTSxDQUFDUSxJQUFJLENBQUMsQ0FBQ04sTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxPQUNHO1VBQUcsSUFBSSxFQUFHLDhCQUE2QlEsTUFBTyxFQUFFO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsR0FDN0MsTUFBQyxRQUFRO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsR0FBQztVQUFLLFNBQVMsRUFBQyxNQUFNO1VBQUMsR0FBRyxFQUFHLHlCQUF3QlAsS0FBTSxFQUFFO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsRUFBRyxDQUFXLENBQ25GO01BRVA7UUFDQSxPQUNHO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsRUFBVztJQUNaO0VBRVIsQ0FBQztFQUVELE1BQU1RLFVBQVUsR0FBRyxDQUFDO0lBQUNILElBQUk7SUFBRTlDO0VBQUksQ0FBQyxLQUFLO0lBRWxDLFFBQU9zQyw2Q0FBTSxDQUFDdkMsS0FBSyxDQUFDLENBQUN5QyxNQUFNLENBQUMsVUFBVSxDQUFDO01BQ3BDLEtBQUtGLDZDQUFNLENBQUNRLElBQUksQ0FBQyxDQUFDTixNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLE9BQ0c7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQSxHQUFLeEMsSUFBSSxDQUFNO01BRWxCO1FBQ0EsT0FDRztVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFBLEVBQVc7SUFDWjtFQUdSLENBQUM7RUFFRCxNQUFNa0QsT0FBTyxHQUFHakIsVUFBVSxFQUFFO0VBRTlCLE9BQ0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFaUIsT0FBTyxDQUFDckQsR0FBRyxDQUFFc0QsSUFBSSxJQUVaO0lBQUssR0FBRyxFQUFFQSxJQUFJLENBQUN4QixFQUFHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FNakIsTUFBQyxVQUFVO0lBQUMsSUFBSSxFQUFFd0IsSUFBSSxDQUFDWixTQUFVO0lBQUUsSUFBSSxFQUFFWSxJQUFJLENBQUNQLEtBQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3hELE1BQUMsV0FBVztJQUFDLE1BQU0sRUFBRU8sSUFBSSxDQUFDeEIsRUFBRztJQUFDLElBQUksRUFBRXdCLElBQUksQ0FBQ1osU0FBVTtJQUFDLEtBQUssRUFBRVksSUFBSSxDQUFDVixLQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUk5RSxDQUFDLENBQ0c7QUFFUixDQUFDO0FBSWNqQixpRkFBa0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HZ0M7QUFDRjtBQUNQO0FBQ3ZCO0FBQ1M7QUFDSDtBQUV2QyxNQUFNNEIsRUFBRSxHQUFHOUIsd0RBQU0sQ0FBQytCLEVBQUU7RUFBQTtFQUFBO0FBQUEsK0JBSW5CO0FBRUQsTUFBTUMsZUFBZSxHQUFHaEMsd0RBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxxR0FjakM7QUFFRCxNQUFNZ0MsYUFBYSxHQUFHLE1BQU07RUFFMUIsTUFBTTtJQUFDekI7RUFBUSxDQUFDLEdBQUd2QywrREFBVyxDQUFFQyxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO0VBRXJELE1BQU07SUFBQSxHQUFDK0QsV0FBVztJQUFBLEdBQUVDO0VBQWMsSUFBSXRELHNEQUFRLENBQUMsS0FBSyxDQUFDO0VBR3JELE1BQU11RCxVQUFVLEdBQUcsTUFBTTtJQUN2QkQsY0FBYyxDQUFDLElBQUksQ0FBQztFQUN0QixDQUFDO0VBRUQsTUFBTUUsWUFBWSxHQUFHLE1BQU07SUFDekJGLGNBQWMsQ0FBQyxLQUFLLENBQUM7RUFDdkIsQ0FBQztFQUVELE1BQU1HLFVBQVUsR0FBRyxNQUFNO0lBRXJCLElBQUc5QixRQUFRLENBQUMrQixTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsRUFBQztNQUNyQyxPQUFPLE1BQUMsRUFBRTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUMsTUFBQyw4RUFBZTtRQUFDLElBQUksRUFBRUMsNEVBQVM7UUFBQyxTQUFTLEVBQUMsT0FBTztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBQUcsT0FBRWpDLFFBQVEsQ0FBQytCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3pDLFFBQVEsQ0FBTTtJQUN4RztJQUNBLElBQUdVLFFBQVEsQ0FBQytCLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxFQUFDO01BQ3JDLE9BQU8sTUFBQyxFQUFFO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FBQyxNQUFDLDhFQUFlO1FBQUMsSUFBSSxFQUFFQyw0RUFBUztRQUFDLFNBQVMsRUFBQyxPQUFPO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFBRyxFQUFDakMsUUFBUSxDQUFDK0IsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDekMsUUFBUSxDQUFNO0lBQ3ZHO0lBQ0EsSUFBR1UsUUFBUSxDQUFDK0IsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEVBQUM7TUFDckMsT0FBTyxNQUFDLEVBQUU7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUFDLE1BQUMsOEVBQWU7UUFBQyxJQUFJLEVBQUVDLDRFQUFTO1FBQUMsU0FBUyxFQUFDLE9BQU87UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUFHLEVBQUNqQyxRQUFRLENBQUMrQixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUN6QyxRQUFRLENBQU07SUFDdkcsQ0FBQyxNQUNHO01BQ0YsT0FBUTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0ksTUFBQywwQ0FBSztRQUNOLFdBQVcsRUFDVDtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFBLCtEQUdEO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFDQyxDQUNBO0lBQ2hCO0VBRUosQ0FBQztFQUVELE1BQU00QyxhQUFhLEdBQUksOEdBQTZHO0VBRWxJLE9BQ0U7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsZUFBZTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ2hCLE1BQUMseUNBQUk7SUFDSCxLQUFLLEVBQUMsV0FBVztJQUNqQixLQUFLLEVBQUU7TUFBRyxPQUFPLEVBQUVOLFVBQVc7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxVQUFVO0lBQ3hDLFNBQVMsRUFBQyxPQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFakIsTUFBQyxVQUFVO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUVULEVBR1AsTUFBQywwQ0FBSztJQUFDLEtBQUssRUFBRTVCLFFBQVEsQ0FBQ1YsUUFBUSxHQUFHLFdBQVk7SUFBQyxNQUFNLEVBQUUsSUFBSztJQUFDLFFBQVEsRUFBRXVDLFlBQWE7SUFBQyxJQUFJLEVBQUVILFdBQVk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUduRyxNQUFDLHlDQUFJO0lBQ0YsSUFBSSxFQUFFO01BQ0xTLE1BQU0sRUFBRSxFQUFFO01BQ1ZDLE1BQU0sRUFBRTtJQUNWLENBQUU7SUFDRixVQUFVLEVBQUVwQyxRQUFRLENBQUMrQixTQUFVO0lBQy9CLFVBQVUsRUFBRy9ELEtBQUssSUFDaEIsTUFBQyx5Q0FBSSxDQUFDLElBQUk7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNSLE1BQUMsZUFBZTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBT2Q7TUFBRyxJQUFJLEVBQUcsOEJBQTZCQSxLQUFLLENBQUM2QixFQUFHLEVBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNsRCxNQUFDLDJDQUFNO01BQUMsSUFBSSxFQUFFLEdBQUk7TUFBQyxHQUFHLEVBQUU3QixLQUFLLENBQUNxRSxLQUFLLENBQUN4QixHQUFHLEtBQUtxQixhQUFhLEdBQUdBLGFBQWEsR0FBSSx5QkFBd0JsRSxLQUFLLENBQUNxRSxLQUFLLENBQUN4QixHQUFJLEVBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLENBQ3RILEVBQ047TUFBRyxTQUFTLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBRyw4QkFBNkI3QyxLQUFLLENBQUM2QixFQUFHLEVBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUFHN0IsS0FBSyxDQUFDc0IsUUFBUSxDQUFLLENBQ3JFLENBRXRCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFFRyxDQUNELENBQ1UsQ0FDZDtBQUdaLENBQUM7QUFFY21DLDRFQUFhLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SHFDO0FBQ0o7QUFDTDtBQUN2QjtBQUNTO0FBQ0g7QUFFdkMsTUFBTWEsZ0JBQWdCLEdBQUc5Qyx3REFBTSxDQUFDQyxHQUFHO0VBQUE7RUFBQTtBQUFBLDZJQWtCbEM7QUFFRCxNQUFNOEMsY0FBYyxHQUFHLE1BQU07RUFFM0IsTUFBTTtJQUFDdkM7RUFBUSxDQUFDLEdBQUd2QywrREFBVyxDQUFFQyxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO0VBRXJELE1BQU07SUFBQSxHQUFDK0QsV0FBVztJQUFBLEdBQUVDO0VBQWMsSUFBSXRELHNEQUFRLENBQUMsS0FBSyxDQUFDO0VBR3JELE1BQU11RCxVQUFVLEdBQUcsTUFBTTtJQUN2QkQsY0FBYyxDQUFDLElBQUksQ0FBQztFQUN0QixDQUFDO0VBRUQsTUFBTUUsWUFBWSxHQUFHLE1BQU07SUFDekJGLGNBQWMsQ0FBQyxLQUFLLENBQUM7RUFDdkIsQ0FBQztFQUVELE1BQU1hLFdBQVcsR0FBRyxNQUFNO0lBRXhCLElBQUd4QyxRQUFRLENBQUN5QyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUtULFNBQVMsRUFBQztNQUN0QyxPQUFPO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FBSSxNQUFDLDhFQUFlO1FBQUMsSUFBSSxFQUFFQywwRUFBUztRQUFDLFNBQVMsRUFBQyxPQUFPO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFBRyxPQUFFakMsUUFBUSxDQUFDeUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDbkQsUUFBUSxDQUFNO0lBQ3pHO0lBQ0EsSUFBR1UsUUFBUSxDQUFDeUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLVCxTQUFTLEVBQUM7TUFDdEMsT0FBTztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUksTUFBQyw4RUFBZTtRQUFDLElBQUksRUFBRUMsMEVBQVM7UUFBQyxTQUFTLEVBQUMsT0FBTztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBQUcsRUFBQ2pDLFFBQVEsQ0FBQ3lDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ25ELFFBQVEsQ0FBTTtJQUN4RztJQUNBLElBQUdVLFFBQVEsQ0FBQ3lDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBS1QsU0FBUyxFQUFDO01BQ3RDLE9BQU87UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUFJLE1BQUMsOEVBQWU7UUFBQyxJQUFJLEVBQUVDLDBFQUFTO1FBQUMsU0FBUyxFQUFDLE9BQU87UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUFHLEVBQUNqQyxRQUFRLENBQUN5QyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNuRCxRQUFRLENBQU07SUFDeEcsQ0FBQyxNQUNHO01BQ0YsT0FBUTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0UsTUFBQywwQ0FBSztRQUNOLFdBQVcsRUFDVDtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFBLCtEQUdEO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFDQyxDQUNFO0lBQ2hCO0VBRUosQ0FBQztFQUVELE1BQU00QyxhQUFhLEdBQUksOEdBQTZHO0VBRWhJLE9BQ0k7SUFBSyxTQUFTLEVBQUMsK0JBQStCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDNUMsTUFBQyxnQkFBZ0I7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNuQixNQUFDLHlDQUFJO0lBQ0gsS0FBSyxFQUFDLFlBQVk7SUFDbEIsU0FBUyxFQUFDLE9BQU87SUFDakIsS0FBSyxFQUFFO01BQUcsT0FBTyxFQUFFTixVQUFXO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsVUFBVTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRXhDLE1BQUMsV0FBVztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FFZCxFQUNQLE1BQUMsMENBQUs7SUFBQyxLQUFLLEVBQUU1QixRQUFRLENBQUNWLFFBQVEsR0FBRyxXQUFZO0lBQUMsTUFBTSxFQUFFLElBQUs7SUFBQyxRQUFRLEVBQUV1QyxZQUFhO0lBQUMsSUFBSSxFQUFFSCxXQUFZO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFL0YsTUFBQyx5Q0FBSTtJQUNGLElBQUksRUFBRTtNQUNMUyxNQUFNLEVBQUUsRUFBRTtNQUNWQyxNQUFNLEVBQUU7SUFDWixDQUFFO0lBQ0EsVUFBVSxFQUFFcEMsUUFBUSxDQUFDeUMsVUFBVztJQUNoQyxVQUFVLEVBQUd6RSxLQUFLLElBQ2hCLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDUixNQUFDLGdCQUFnQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBT2Y7TUFBRyxJQUFJLEVBQUcsOEJBQTZCQSxLQUFLLENBQUM2QixFQUFHLEVBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNsRCxNQUFDLDJDQUFNO01BQUMsSUFBSSxFQUFFLEdBQUk7TUFBQyxHQUFHLEVBQUU3QixLQUFLLENBQUNxRSxLQUFLLENBQUN4QixHQUFHLEtBQUtxQixhQUFhLEdBQUdBLGFBQWEsR0FBSSx5QkFBd0JsRSxLQUFLLENBQUNxRSxLQUFLLENBQUN4QixHQUFJLEVBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLENBQ3hILEVBQ0o7TUFBRyxTQUFTLEVBQUMsSUFBSTtNQUFDLElBQUksRUFBRyw4QkFBNkI3QyxLQUFLLENBQUM2QixFQUFHLEVBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUFHN0IsS0FBSyxDQUFDc0IsUUFBUSxDQUFLLENBQ3BFLENBRXZCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFHSyxDQUVILENBQ1csQ0FDZjtBQUdaLENBQUM7QUFFY2lELDZFQUFjLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSEg7QUFDaUI7QUFDRjtBQUVDO0FBRTFDLE1BQU07RUFBRUc7QUFBSyxDQUFDLEdBQUdDLHlDQUFJO0FBQ2tCO0FBRXZDLE1BQU1DLFdBQVcsR0FBR3BELHdEQUFNLENBQUNDLEdBQUc7RUFBQTtFQUFBO0FBQUEsNEVBUzdCO0FBRUQsTUFBTXlDLGFBQWEsR0FBSSw4R0FBNkc7QUFFcEksTUFBTVcsUUFBUSxHQUFHLE1BQU07RUFFckIsTUFBTTtJQUFDN0M7RUFBUSxDQUFDLEdBQUd2QywrREFBVyxDQUFFQyxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO0VBRXJEVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUV5QixRQUFRLENBQUM7RUFFN0IsT0FDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxXQUFXO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDUixNQUFDLHlDQUFJO0lBQUMsT0FBTyxFQUFDLHFCQUFxQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQy9CLE1BQUMseUNBQUk7SUFDRCxLQUFLLEVBQUVBLFFBQVEsQ0FBQ1YsUUFBUSxHQUFDLFNBQVU7SUFDbkMsU0FBUyxFQUFDLE9BQU87SUFDakIsS0FBSyxFQUFFLE1BQUMsV0FBVztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQUM7TUFBSyxTQUFTLEVBQUMsTUFBTTtNQUFDLEdBQUcsRUFBR1UsUUFBUSxDQUFDcUMsS0FBSyxDQUFDeEIsR0FBRyxLQUFLcUIsYUFBYSxHQUFHbEMsUUFBUSxDQUFDcUMsS0FBSyxDQUFDeEIsR0FBRyxHQUFJLHlCQUF3QmIsUUFBUSxDQUFDcUMsS0FBSyxDQUFDeEIsR0FBSSxFQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxDQUFlO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFaEwsTUFBQyxJQUFJO0lBQ0gsS0FBSyxFQUFFLE1BQUMsMENBQUs7TUFBRSxRQUFRO01BQUMsWUFBWSxFQUFFYixRQUFRLENBQUNWLFFBQVM7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFJO0lBQzVELFdBQVcsRUFDVCxNQUFDLDBDQUFLO01BQUUsUUFBUTtNQUFDLFlBQVksRUFBR1UsUUFBUSxDQUFDcUIsSUFBSSxLQUFLLElBQUksR0FBRSxvQkFBb0IsR0FBRyxRQUFRLEdBQUdyQixRQUFRLENBQUNxQixJQUFLO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFDekc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUNELENBQ0csQ0FDSixDQUNLLENBQ1Y7QUFHWixDQUFDO0FBRWN3Qix1RUFBUSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkQwQztBQUNMO0FBQ1o7QUFDZjtBQUNTO0FBQ0g7QUFFdkMsTUFBTUMsZUFBZSxHQUFHdEQsd0RBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxtSEFhakM7QUFFRCxNQUFNc0QsWUFBWSxHQUFHLE1BQU07RUFFekIsTUFBTTtJQUFDL0M7RUFBUSxDQUFDLEdBQUd2QywrREFBVyxDQUFFQyxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO0VBRXJELE1BQU07SUFBQSxHQUFDK0QsV0FBVztJQUFBLEdBQUVDO0VBQWMsSUFBSXRELHNEQUFRLENBQUMsS0FBSyxDQUFDO0VBRXJEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUV5QixRQUFRLENBQUM7RUFFOUIsTUFBTTRCLFVBQVUsR0FBRyxNQUFNO0lBQ3ZCRCxjQUFjLENBQUMsSUFBSSxDQUFDO0VBQ3RCLENBQUM7RUFFRCxNQUFNRSxZQUFZLEdBQUcsTUFBTTtJQUN6QkYsY0FBYyxDQUFDLEtBQUssQ0FBQztFQUN2QixDQUFDO0VBRUQsTUFBTXFCLE1BQU0sR0FBRyxNQUFNO0lBRWpCLElBQUdoRCxRQUFRLENBQUNpRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUtqQixTQUFTLEVBQUM7TUFDakMsT0FBTztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUksTUFBQyw4RUFBZTtRQUFDLElBQUksRUFBRWtCLHlFQUFRO1FBQUMsU0FBUyxFQUFDLE9BQU87UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUFHLE9BQUVsRCxRQUFRLENBQUNpRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNsQyxRQUFRLENBQU07SUFDbkc7SUFDQSxJQUFHZixRQUFRLENBQUNpRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUtqQixTQUFTLEVBQUM7TUFDakMsT0FBTztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUksTUFBQyw4RUFBZTtRQUFDLElBQUksRUFBRWtCLHlFQUFRO1FBQUMsU0FBUyxFQUFDLE9BQU87UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUFHLEVBQUNsRCxRQUFRLENBQUNpRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNsQyxRQUFRLENBQU07SUFDbEc7SUFDQSxJQUFHZixRQUFRLENBQUNpRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUtqQixTQUFTLEVBQUM7TUFDakMsT0FBTztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUksTUFBQyw4RUFBZTtRQUFDLElBQUksRUFBRWtCLHlFQUFRO1FBQUMsU0FBUyxFQUFDLE9BQU87UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUFHLEVBQUNsRCxRQUFRLENBQUNpRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNsQyxRQUFRLENBQU07SUFDbEcsQ0FBQyxNQUNHO01BQ0YsT0FBUTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0UsTUFBQywwQ0FBSztRQUNOLFdBQVcsRUFDVDtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFBLG9FQUdEO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFDQyxDQUNFO0lBQ2hCO0VBRUosQ0FBQztFQUdDLE9BQ0k7SUFBSyxTQUFTLEVBQUMsK0JBQStCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDNUMsTUFBQyxlQUFlO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDZCxNQUFDLHlDQUFJO0lBQ0gsS0FBSyxFQUFDLGNBQWM7SUFDcEIsU0FBUyxFQUFDLE9BQU87SUFDakIsS0FBSyxFQUFFO01BQUcsT0FBTyxFQUFFYSxVQUFXO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsVUFBVTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRXhDLE1BQUMsTUFBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDTCxFQUNQLE1BQUMsMENBQUs7SUFBQyxLQUFLLEVBQUU1QixRQUFRLENBQUNWLFFBQVEsR0FBRyxXQUFZO0lBQUMsTUFBTSxFQUFFLElBQUs7SUFBQyxRQUFRLEVBQUV1QyxZQUFhO0lBQUMsSUFBSSxFQUFFSCxXQUFZO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDdkcsTUFBQyx5Q0FBSTtJQUNGLElBQUksRUFBRTtNQUNMUyxNQUFNLEVBQUUsRUFBRTtNQUNWQyxNQUFNLEVBQUU7SUFDWixDQUFFO0lBQ0EsVUFBVSxFQUFFcEMsUUFBUSxDQUFDaUQsS0FBTTtJQUMzQixVQUFVLEVBQUdFLElBQUksSUFDZixNQUFDLHlDQUFJLENBQUMsSUFBSTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ04sTUFBQyx5Q0FBSTtNQUNMLEtBQUssRUFBRTtRQUFHLElBQUksRUFBRyw4QkFBNkJBLElBQUksQ0FBQ3RELEVBQUcsRUFBRTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUdzRCxJQUFJLENBQUNwQyxRQUFRLENBQU07TUFDOUUsS0FBSyxFQUFFO1FBQUcsSUFBSSxFQUFHLDhCQUE2Qm9DLElBQUksQ0FBQ3RELEVBQUcsRUFBRTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUUsTUFBQyxlQUFlO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FBQztRQUFLLFNBQVMsRUFBQyxNQUFNO1FBQUMsR0FBRyxFQUFDLFNBQVM7UUFBQyxHQUFHLEVBQUcseUJBQXdCc0QsSUFBSSxDQUFDdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFJLEVBQUU7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUFHLENBQWtCLENBQUs7TUFDNUwsU0FBUyxFQUFDLE9BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUVWLENBRWI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUdLLENBRUMsQ0FDTSxDQUNkO0FBR1osQ0FBQztBQUVja0MsMkVBQVksRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdxQjtBQUNOO0FBQ1Q7QUFDTztBQUN5QjtBQUNKO0FBQzdELE1BQU07RUFBRUw7QUFBSyxDQUFDLEdBQUdDLHlDQUFJO0FBQ2tCO0FBRXZDLE1BQU1TLGNBQWMsR0FBRzVELHdEQUFNLENBQUNDLEdBQUc7RUFBQTtFQUFBO0FBQUEsb0pBaUJoQztBQUdELE1BQU00RCxXQUFXLEdBQUcsTUFBTTtFQUV4QixNQUFNO0lBQUNyRDtFQUFRLENBQUMsR0FBR3ZDLCtEQUFXLENBQUVDLEtBQUssSUFBS0EsS0FBSyxDQUFDQyxJQUFJLENBQUM7RUFFckQsTUFBTWdDLE1BQU0sR0FBR0MsNkRBQVMsRUFBRTtFQUMxQixNQUFNO0lBQUNDO0VBQUUsQ0FBQyxHQUFHRixNQUFNLENBQUNHLEtBQUs7RUFFekIsTUFBTTtJQUFBLEdBQUM0QixXQUFXO0lBQUEsR0FBRUM7RUFBYyxJQUFJdEQsc0RBQVEsQ0FBQyxLQUFLLENBQUM7RUFFckQsTUFBTXVELFVBQVUsR0FBRyxNQUFNO0lBQ3ZCRCxjQUFjLENBQUMsSUFBSSxDQUFDO0VBQ3RCLENBQUM7RUFFRCxNQUFNRSxZQUFZLEdBQUcsTUFBTTtJQUN6QkYsY0FBYyxDQUFDLEtBQUssQ0FBQztFQUN2QixDQUFDO0VBRUQsTUFBTTJCLE9BQU8sR0FBRyxNQUFNO0lBRXBCO0lBQ0E7SUFDQTs7SUFFRSxJQUFHdEQsUUFBUSxDQUFDdUQsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLdkIsU0FBUyxFQUFDO01BQ3RDLE9BQU87UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUFJLE1BQUMsOEVBQWU7UUFBQyxJQUFJLEVBQUV3QiwwRUFBUztRQUFDLFNBQVMsRUFBQyxPQUFPO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFBRyxFQUFDeEQsUUFBUSxDQUFDdUQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDRSxPQUFPLENBQU07SUFDdkc7SUFDQSxJQUFHekQsUUFBUSxDQUFDdUQsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLdkIsU0FBUyxFQUFDO01BQ3RDLE9BQU87UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUFJLE1BQUMsOEVBQWU7UUFBQyxJQUFJLEVBQUV3QiwwRUFBUztRQUFDLFNBQVMsRUFBQyxPQUFPO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFBRyxFQUFDeEQsUUFBUSxDQUFDdUQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDRSxPQUFPLENBQU07SUFDdkc7SUFDQSxJQUFHekQsUUFBUSxDQUFDdUQsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLdkIsU0FBUyxFQUFDO01BQ3RDLE9BQU87UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUFJLE1BQUMsOEVBQWU7UUFBQyxJQUFJLEVBQUV3QiwwRUFBUztRQUFDLFNBQVMsRUFBQyxPQUFPO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFBRyxFQUFDeEQsUUFBUSxDQUFDdUQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDRSxPQUFPLENBQU07SUFDdkcsQ0FBQyxNQUNHO01BQ0YsT0FBUTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0UsTUFBQywwQ0FBSztRQUNOLFdBQVcsRUFDVDtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFBLHlEQUdEO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFDQyxDQUNFO0lBQ2hCO0VBR0osQ0FBQztFQUVDLE9BQ0ksTUFBQyxjQUFjO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDWCxNQUFDLHlDQUFJO0lBQ0wsS0FBSyxFQUFDLGNBQWM7SUFDcEIsS0FBSyxFQUFFO01BQUcsT0FBTyxFQUFFN0IsVUFBVztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLFVBQVU7SUFDeEMsU0FBUyxFQUFDLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUVmLE1BQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDTixFQUNQLE1BQUMsMENBQUs7SUFBQyxLQUFLLEVBQUU1QixRQUFRLENBQUNWLFFBQVEsR0FBRyxVQUFXO0lBQUMsTUFBTSxFQUFFLElBQUs7SUFBQyxRQUFRLEVBQUV1QyxZQUFhO0lBQUMsSUFBSSxFQUFFSCxXQUFZO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FHdEcsTUFBQyx5Q0FBSTtJQUNGLElBQUksRUFBRTtNQUNMUyxNQUFNLEVBQUUsRUFBRTtNQUNWQyxNQUFNLEVBQUU7SUFDWixDQUFFO0lBQ0EsVUFBVSxFQUFFcEMsUUFBUSxDQUFDdUQsVUFBVztJQUNoQyxVQUFVLEVBQUdKLElBQUksSUFDZixNQUFDLHlDQUFJLENBQUMsSUFBSTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ04sTUFBQyx5Q0FBSTtNQUNMLEtBQUssRUFBRTtRQUFHLElBQUksRUFBRyw4QkFBNkJBLElBQUksQ0FBQ3RELEVBQUcsRUFBRTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUUsTUFBQyxjQUFjO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FBQztRQUFLLFNBQVMsRUFBQyxNQUFNO1FBQUMsR0FBRyxFQUFDLFNBQVM7UUFBQyxHQUFHLEVBQUcseUJBQXdCc0QsSUFBSSxDQUFDTyxRQUFTLEVBQUU7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUFHLENBQWlCLENBQUs7TUFDckwsU0FBUyxFQUFDLE9BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUVmLE1BQUMsSUFBSTtNQUFDLFdBQVcsRUFBRVAsSUFBSSxDQUFDTSxPQUFRO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxDQUM5QixDQUViO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFFSyxDQUNDLENBQ0s7QUFFekIsQ0FBQztBQUdjSiwwRUFBVyxFOzs7Ozs7Ozs7Ozs7QUNoSDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUNGO0FBQ2lCO0FBSTVDLGdFQUFDTSxZQUFZLEdBQUcsSUFBSSxLQUFLO0VBRXBDLE1BQU10RyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsTUFBTTtJQUFBLEdBQUNXLEtBQUs7SUFBQSxHQUFFMkY7RUFBUSxJQUFJdkYsc0RBQVEsQ0FBQ3NGLFlBQVksQ0FBQztFQUNoRCxNQUFNRSxPQUFPLEdBQUdwRix5REFBVyxDQUFFQyxDQUFDLElBQUs7SUFDL0IsTUFBTW9GLEtBQUssR0FBR3BGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDVixLQUFLO0lBQzVCMkYsUUFBUSxDQUFDRSxLQUFLLENBQUM7SUFDZnpHLFFBQVEsQ0FBQztNQUNMdUIsSUFBSSxFQUFFbUYsc0VBQXVCO01BQzdCakYsSUFBSSxFQUFFZ0Y7SUFDVixDQUFDLENBQUM7RUFDTixDQUFDLEVBQUUsQ0FBQ3pHLFFBQVEsQ0FBQyxDQUFDO0VBRWQsT0FBTyxDQUFDWSxLQUFLLEVBQUU0RixPQUFPLEVBQUVELFFBQVEsQ0FBQztBQUNyQyxDQUFDLEU7Ozs7Ozs7Ozs7O0FDcEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQVFBO0FBc0JBLElBQUlJLGNBQUo7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSUMsR0FBSixFQUFsQjtBQUNBLE1BQU1DLG9CQUFvQixHQUN4QixRQUFnQ0MsU0FBaEMsR0FBOEQsSUFEaEU7QUFFQSxNQUFNQyxVQUEyQyxHQUFHLEVBQXBEO0FBRUEsU0FBU0MsV0FBVCxHQUF5RDtFQUN2RDtFQUNBLElBQUlOLGNBQUosRUFBb0I7SUFDbEIsT0FBT0EsY0FBUDtFQUNELENBRUQ7RUFDQSxJQUFJLENBQUNHLG9CQUFMLEVBQTJCO0lBQ3pCLE9BQU9uQyxTQUFQO0VBQ0Q7RUFFRCxPQUFRZ0MsY0FBYyxHQUFHLElBQUlHLG9CQUFKLENBQ3RCSSxPQUFELElBQWE7SUFDWEEsT0FBTyxDQUFDQyxPQUFSRCxDQUFpQkUsS0FBRCxJQUFXO01BQ3pCLElBQUksQ0FBQ1IsU0FBUyxDQUFDUyxHQUFWVCxDQUFjUSxLQUFLLENBQUM5RixNQUFwQnNGLENBQUwsRUFBa0M7UUFDaEM7TUFDRDtNQUVELE1BQU1VLEVBQUUsR0FBR1YsU0FBUyxDQUFDVyxHQUFWWCxDQUFjUSxLQUFLLENBQUM5RixNQUFwQnNGLENBQVg7TUFDQSxJQUFJUSxLQUFLLENBQUNJLGNBQU5KLElBQXdCQSxLQUFLLENBQUNLLGlCQUFOTCxHQUEwQixDQUF0RCxFQUF5RDtRQUN2RFQsY0FBYyxDQUFDZSxTQUFmZixDQUF5QlMsS0FBSyxDQUFDOUYsTUFBL0JxRjtRQUNBQyxTQUFTLENBQUNlLE1BQVZmLENBQWlCUSxLQUFLLENBQUM5RixNQUF2QnNGO1FBQ0FVLEVBQUU7TUFDSDtJQUNGLENBWERKO0VBWUQsQ0Fkc0IsRUFldkI7SUFBRVUsVUFBVSxFQUFFO0VBQWQsQ0FmdUIsQ0FBekI7QUFpQkQ7QUFFRCxNQUFNQyxxQkFBcUIsR0FBRyxDQUFDQyxFQUFELEVBQWNSLEVBQWQsS0FBaUM7RUFDN0QsTUFBTVMsUUFBUSxHQUFHZCxXQUFXLEVBQTVCO0VBQ0EsSUFBSSxDQUFDYyxRQUFMLEVBQWU7SUFDYixPQUFPLE1BQU0sQ0FBRSxDQUFmO0VBQ0Q7RUFFREEsUUFBUSxDQUFDQyxPQUFURCxDQUFpQkQsRUFBakJDO0VBQ0FuQixTQUFTLENBQUNxQixHQUFWckIsQ0FBY2tCLEVBQWRsQixFQUFrQlUsRUFBbEJWO0VBQ0EsT0FBTyxNQUFNO0lBQ1gsSUFBSTtNQUNGbUIsUUFBUSxDQUFDTCxTQUFUSyxDQUFtQkQsRUFBbkJDO0lBQ0QsQ0FBQyxRQUFPRyxHQUFQLEVBQVk7TUFDWmpILE9BQU8sQ0FBQ2tILEtBQVJsSCxDQUFjaUgsR0FBZGpIO0lBQ0Q7SUFDRDJGLFNBQVMsQ0FBQ2UsTUFBVmYsQ0FBaUJrQixFQUFqQmxCO0VBQ0QsQ0FQRDtBQVFELENBaEJEO0FBa0JBLFNBQVN3QixRQUFULENBQ0U5RixNQURGLEVBRUUrRixJQUZGLEVBR0VDLEVBSEYsRUFJRUMsT0FKRixFQUtRO0VBQ04sVUFBbUM7RUFDbkMsSUFBSSxDQUFDLHdCQUFXRixJQUFYLENBQUwsRUFBdUIsT0FDdkI7RUFDQTtFQUNBO0VBQ0E7RUFDQS9GLE1BQU0sQ0FBQzhGLFFBQVA5RixDQUFnQitGLElBQWhCL0YsRUFBc0JnRyxFQUF0QmhHLEVBQTBCaUcsT0FBMUJqRyxFQUFtQ2tHLEtBQW5DbEcsQ0FBMEM0RixHQUFELElBQVM7SUFDaEQsVUFBMkM7TUFDekM7TUFDQSxNQUFNQSxHQUFOO0lBQ0Q7RUFDRixDQUxENUYsRUFNQTtFQUNBMEUsVUFBVSxDQUFDcUIsSUFBSSxHQUFHLEdBQVBBLEdBQWFDLEVBQWQsQ0FBVnRCLEdBQThCLElBQTlCQTtBQUNEO0FBRUQsU0FBU3lCLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWtEO0VBQ2hELE1BQU07SUFBRXBIO0VBQUYsSUFBYW9ILEtBQUssQ0FBQ0MsYUFBekI7RUFDQSxPQUNHckgsTUFBTSxJQUFJQSxNQUFNLEtBQUssT0FBdEIsSUFDQW9ILEtBQUssQ0FBQ0UsT0FETixJQUVBRixLQUFLLENBQUNHLE9BRk4sSUFHQUgsS0FBSyxDQUFDSSxRQUhOLElBSUFKLEtBQUssQ0FBQ0ssTUFKTjtFQUlnQjtFQUNmTCxLQUFLLENBQUNNLFdBQU5OLElBQXFCQSxLQUFLLENBQUNNLFdBQU5OLENBQWtCTyxLQUFsQlAsS0FBNEIsQ0FOcEQ7QUFRRDtBQUVELFNBQVNRLFdBQVQsQ0FDRTdILENBREYsRUFFRWlCLE1BRkYsRUFHRStGLElBSEYsRUFJRUMsRUFKRixFQUtFdkcsT0FMRixFQU1Fb0gsT0FORixFQU9FQyxNQVBGLEVBUVE7RUFDTixNQUFNO0lBQUVDO0VBQUYsSUFBZWhJLENBQUMsQ0FBQ3NILGFBQXZCO0VBRUEsSUFBSVUsUUFBUSxLQUFLLEdBQWJBLEtBQXFCWixlQUFlLENBQUNwSCxDQUFELENBQWZvSCxJQUFzQixDQUFDLHdCQUFXSixJQUFYLENBQTVDZ0IsQ0FBSixFQUFtRTtJQUNqRTtJQUNBO0VBQ0Q7RUFFRGhJLENBQUMsQ0FBQ2lJLGNBQUZqSSxHQUVBO0VBQ0EsSUFBSStILE1BQU0sSUFBSSxJQUFkLEVBQW9CO0lBQ2xCQSxNQUFNLEdBQUdkLEVBQUUsQ0FBQ2lCLE9BQUhqQixDQUFXLEdBQVhBLElBQWtCLENBQTNCYztFQUNELENBRUQ7RUFDQTlHLE1BQU0sQ0FBQ1AsT0FBTyxHQUFHLFNBQUgsR0FBZSxNQUF2QixDQUFOTyxDQUFxQytGLElBQXJDL0YsRUFBMkNnRyxFQUEzQ2hHLEVBQStDO0lBQUU2RztFQUFGLENBQS9DN0csRUFBNERrSCxJQUE1RGxILENBQ0dtSCxPQUFELElBQXNCO0lBQ3BCLElBQUksQ0FBQ0EsT0FBTCxFQUFjO0lBQ2QsSUFBSUwsTUFBSixFQUFZO01BQ1ZyQyxNQUFNLENBQUMyQyxRQUFQM0MsQ0FBZ0IsQ0FBaEJBLEVBQW1CLENBQW5CQTtNQUNBNEMsUUFBUSxDQUFDQyxJQUFURCxDQUFjRSxLQUFkRjtJQUNEO0VBQ0YsQ0FQSHJIO0FBU0Q7QUFFRCxTQUFTd0gsSUFBVCxDQUFjQyxLQUFkLEVBQXlEO0VBQ3ZELFVBQTJDO0lBQ3pDLFNBQVNDLGVBQVQsQ0FBeUJDLElBQXpCLEVBSUc7TUFDRCxPQUFPLElBQUlDLEtBQUosQ0FDSixnQ0FBK0JELElBQUksQ0FBQ0UsR0FBSSxnQkFBZUYsSUFBSSxDQUFDRyxRQUFTLDZCQUE0QkgsSUFBSSxDQUFDSSxNQUFPLGFBQTlHLElBQ0csUUFDRyxTQURILEdBRUcsRUFITixDQURLLENBQVA7SUFNRCxDQUVEO0lBQ0EsTUFBTUMsa0JBQW1ELEdBQUc7TUFDMURqQyxJQUFJLEVBQUU7SUFEb0QsQ0FBNUQ7SUFHQSxNQUFNa0MsYUFBa0MsR0FBR0MsTUFBTSxDQUFDQyxJQUFQRCxDQUN6Q0Ysa0JBRHlDRSxDQUEzQztJQUdBLGFBQWEsQ0FBQ3JELE9BQWQsQ0FBdUJnRCxHQUFELElBQTRCO01BQ2hELElBQUlBLEdBQUcsS0FBSyxNQUFaLEVBQW9CO1FBQ2xCLElBQ0VKLEtBQUssQ0FBQ0ksR0FBRCxDQUFMSixJQUFjLElBQWRBLElBQ0MsT0FBT0EsS0FBSyxDQUFDSSxHQUFELENBQVosS0FBc0IsUUFBdEIsSUFBa0MsT0FBT0osS0FBSyxDQUFDSSxHQUFELENBQVosS0FBc0IsUUFGM0QsRUFHRTtVQUNBLE1BQU1ILGVBQWUsQ0FBQztZQUNwQkcsR0FEb0I7WUFFcEJDLFFBQVEsRUFBRSxzQkFGVTtZQUdwQkMsTUFBTSxFQUFFTixLQUFLLENBQUNJLEdBQUQsQ0FBTEosS0FBZSxJQUFmQSxHQUFzQixNQUF0QkEsR0FBK0IsT0FBT0EsS0FBSyxDQUFDSSxHQUFEO1VBSC9CLENBQUQsQ0FBckI7UUFLRDtNQUNGLENBWEQsTUFXTztRQUNMO1FBQ0E7UUFDQSxNQUFNTyxDQUFRLEdBQUdQLEdBQWpCO01BQ0Q7SUFDRixDQWpCRCxFQW1CQTtJQUNBLE1BQU1RLGtCQUFtRCxHQUFHO01BQzFEckMsRUFBRSxFQUFFLElBRHNEO01BRTFEdkcsT0FBTyxFQUFFLElBRmlEO01BRzFEcUgsTUFBTSxFQUFFLElBSGtEO01BSTFERCxPQUFPLEVBQUUsSUFKaUQ7TUFLMUR5QixRQUFRLEVBQUUsSUFMZ0Q7TUFNMUR4QyxRQUFRLEVBQUU7SUFOZ0QsQ0FBNUQ7SUFRQSxNQUFNeUMsYUFBa0MsR0FBR0wsTUFBTSxDQUFDQyxJQUFQRCxDQUN6Q0csa0JBRHlDSCxDQUEzQztJQUdBLGFBQWEsQ0FBQ3JELE9BQWQsQ0FBdUJnRCxHQUFELElBQTRCO01BQ2hELElBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO1FBQ2hCLElBQ0VKLEtBQUssQ0FBQ0ksR0FBRCxDQUFMSixJQUNBLE9BQU9BLEtBQUssQ0FBQ0ksR0FBRCxDQUFaLEtBQXNCLFFBRHRCSixJQUVBLE9BQU9BLEtBQUssQ0FBQ0ksR0FBRCxDQUFaLEtBQXNCLFFBSHhCLEVBSUU7VUFDQSxNQUFNSCxlQUFlLENBQUM7WUFDcEJHLEdBRG9CO1lBRXBCQyxRQUFRLEVBQUUsc0JBRlU7WUFHcEJDLE1BQU0sRUFBRSxPQUFPTixLQUFLLENBQUNJLEdBQUQ7VUFIQSxDQUFELENBQXJCO1FBS0Q7TUFDRixDQVpELE1BWU8sSUFDTEEsR0FBRyxLQUFLLFNBQVJBLElBQ0FBLEdBQUcsS0FBSyxRQURSQSxJQUVBQSxHQUFHLEtBQUssU0FGUkEsSUFHQUEsR0FBRyxLQUFLLFVBSFJBLElBSUFBLEdBQUcsS0FBSyxVQUxILEVBTUw7UUFDQSxJQUFJSixLQUFLLENBQUNJLEdBQUQsQ0FBTEosSUFBYyxJQUFkQSxJQUFzQixPQUFPQSxLQUFLLENBQUNJLEdBQUQsQ0FBWixLQUFzQixTQUFoRCxFQUEyRDtVQUN6RCxNQUFNSCxlQUFlLENBQUM7WUFDcEJHLEdBRG9CO1lBRXBCQyxRQUFRLEVBQUUsV0FGVTtZQUdwQkMsTUFBTSxFQUFFLE9BQU9OLEtBQUssQ0FBQ0ksR0FBRDtVQUhBLENBQUQsQ0FBckI7UUFLRDtNQUNGLENBZE0sTUFjQTtRQUNMO1FBQ0E7UUFDQSxNQUFNTyxDQUFRLEdBQUdQLEdBQWpCO01BQ0Q7SUFDRixDQWhDRCxFQWtDQTtJQUNBO0lBQ0EsTUFBTVcsU0FBUyxHQUFHQyxlQUFNQyxNQUFORCxDQUFhLEtBQWJBLENBQWxCO0lBQ0EsSUFBSWhCLEtBQUssQ0FBQzNCLFFBQU4yQixJQUFrQixDQUFDZSxTQUFTLENBQUNHLE9BQWpDLEVBQTBDO01BQ3hDSCxTQUFTLENBQUNHLE9BQVZILEdBQW9CLElBQXBCQTtNQUNBN0osT0FBTyxDQUFDaUssSUFBUmpLLENBQ0UsbUtBREZBO0lBR0Q7RUFDRjtFQUNELE1BQU1rSyxDQUFDLEdBQUdwQixLQUFLLENBQUMzQixRQUFOMkIsS0FBbUIsS0FBN0I7RUFFQSxNQUFNLENBQUNxQixRQUFELEVBQVdDLFdBQVgsSUFBMEJOLGVBQU0vSixRQUFOK0osRUFBaEM7RUFFQSxNQUFNekksTUFBTSxHQUFHLHlCQUFmO0VBQ0EsTUFBTWdKLFFBQVEsR0FBSWhKLE1BQU0sSUFBSUEsTUFBTSxDQUFDZ0osUUFBbEIsSUFBK0IsR0FBaEQ7RUFFQSxNQUFNO0lBQUVqRCxJQUFGO0lBQVFDO0VBQVIsSUFBZXlDLGVBQU1RLE9BQU5SLENBQWMsTUFBTTtJQUN2QyxNQUFNLENBQUNTLFlBQUQsRUFBZUMsVUFBZixJQUE2Qix5QkFBWUgsUUFBWixFQUFzQnZCLEtBQUssQ0FBQzFCLElBQTVCLEVBQWtDLElBQWxDLENBQW5DO0lBQ0EsT0FBTztNQUNMQSxJQUFJLEVBQUVtRCxZQUREO01BRUxsRCxFQUFFLEVBQUV5QixLQUFLLENBQUN6QixFQUFOeUIsR0FDQSx5QkFBWXVCLFFBQVosRUFBc0J2QixLQUFLLENBQUN6QixFQUE1QixDQURBeUIsR0FFQTBCLFVBQVUsSUFBSUQ7SUFKYixDQUFQO0VBTUQsQ0FSb0JULEVBUWxCLENBQUNPLFFBQUQsRUFBV3ZCLEtBQUssQ0FBQzFCLElBQWpCLEVBQXVCMEIsS0FBSyxDQUFDekIsRUFBN0IsQ0FSa0J5QyxDQUFyQjtFQVVBLGVBQU1uSSxTQUFOLENBQWdCLE1BQU07SUFDcEIsSUFDRXVJLENBQUMsSUFDRHJFLG9CQURBcUUsSUFFQUMsUUFGQUQsSUFHQUMsUUFBUSxDQUFDTSxPQUhUUCxJQUlBLHdCQUFXOUMsSUFBWCxDQUxGLEVBTUU7TUFDQTtNQUNBLE1BQU1zRCxZQUFZLEdBQUczRSxVQUFVLENBQUNxQixJQUFJLEdBQUcsR0FBUEEsR0FBYUMsRUFBZCxDQUEvQjtNQUNBLElBQUksQ0FBQ3FELFlBQUwsRUFBbUI7UUFDakIsT0FBTzlELHFCQUFxQixDQUFDdUQsUUFBRCxFQUFXLE1BQU07VUFDM0NoRCxRQUFRLENBQUM5RixNQUFELEVBQVMrRixJQUFULEVBQWVDLEVBQWYsQ0FBUkY7UUFDRCxDQUYyQixDQUE1QjtNQUdEO0lBQ0Y7RUFDRixDQWhCRCxFQWdCRyxDQUFDK0MsQ0FBRCxFQUFJQyxRQUFKLEVBQWMvQyxJQUFkLEVBQW9CQyxFQUFwQixFQUF3QmhHLE1BQXhCLENBaEJIO0VBa0JBLElBQUk7SUFBRXZDLFFBQUY7SUFBWWdDLE9BQVo7SUFBcUJvSCxPQUFyQjtJQUE4QkM7RUFBOUIsSUFBeUNXLEtBQTdDLENBQ0E7RUFDQSxJQUFJLE9BQU9oSyxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0lBQ2hDQSxRQUFRLGdCQUFHLHdDQUFJQSxRQUFKLENBQVhBO0VBQ0QsQ0FFRDtFQUNBLE1BQU02TCxLQUFVLEdBQUdDLGdCQUFTQyxJQUFURCxDQUFjOUwsUUFBZDhMLENBQW5CO0VBQ0EsTUFBTUUsVUFLTCxHQUFHO0lBQ0ZDLEdBQUcsRUFBR2xFLEVBQUQsSUFBYTtNQUNoQixJQUFJQSxFQUFKLEVBQVF1RCxXQUFXLENBQUN2RCxFQUFELENBQVh1RDtNQUVSLElBQUlPLEtBQUssSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQTFCQSxJQUFzQ0EsS0FBSyxDQUFDSSxHQUFoRCxFQUFxRDtRQUNuRCxJQUFJLE9BQU9KLEtBQUssQ0FBQ0ksR0FBYixLQUFxQixVQUF6QixFQUFxQ0osS0FBSyxDQUFDSSxHQUFOSixDQUFVOUQsRUFBVjhELEVBQXJDLEtBQ0ssSUFBSSxPQUFPQSxLQUFLLENBQUNJLEdBQWIsS0FBcUIsUUFBekIsRUFBbUM7VUFDdENKLEtBQUssQ0FBQ0ksR0FBTkosQ0FBVVgsT0FBVlcsR0FBb0I5RCxFQUFwQjhEO1FBQ0Q7TUFDRjtJQUNGLENBVkM7SUFXRkssT0FBTyxFQUFHNUssQ0FBRCxJQUF5QjtNQUNoQyxJQUFJdUssS0FBSyxDQUFDN0IsS0FBTjZCLElBQWUsT0FBT0EsS0FBSyxDQUFDN0IsS0FBTjZCLENBQVlLLE9BQW5CLEtBQStCLFVBQWxELEVBQThEO1FBQzVETCxLQUFLLENBQUM3QixLQUFONkIsQ0FBWUssT0FBWkwsQ0FBb0J2SyxDQUFwQnVLO01BQ0Q7TUFDRCxJQUFJLENBQUN2SyxDQUFDLENBQUM2SyxnQkFBUCxFQUF5QjtRQUN2QmhELFdBQVcsQ0FBQzdILENBQUQsRUFBSWlCLE1BQUosRUFBWStGLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCdkcsT0FBdEIsRUFBK0JvSCxPQUEvQixFQUF3Q0MsTUFBeEMsQ0FBWEY7TUFDRDtJQUNGO0VBbEJDLENBTEo7RUEwQkEsSUFBSWlDLENBQUosRUFBTztJQUNMWSxVQUFVLENBQUNJLFlBQVhKLEdBQTJCMUssQ0FBRCxJQUF5QjtNQUNqRCxJQUFJLENBQUMsd0JBQVdnSCxJQUFYLENBQUwsRUFBdUI7TUFDdkIsSUFBSXVELEtBQUssQ0FBQzdCLEtBQU42QixJQUFlLE9BQU9BLEtBQUssQ0FBQzdCLEtBQU42QixDQUFZTyxZQUFuQixLQUFvQyxVQUF2RCxFQUFtRTtRQUNqRVAsS0FBSyxDQUFDN0IsS0FBTjZCLENBQVlPLFlBQVpQLENBQXlCdkssQ0FBekJ1SztNQUNEO01BQ0R4RCxRQUFRLENBQUM5RixNQUFELEVBQVMrRixJQUFULEVBQWVDLEVBQWYsRUFBbUI7UUFBRThELFFBQVEsRUFBRTtNQUFaLENBQW5CLENBQVJoRTtJQUNELENBTkQyRDtFQU9ELENBRUQ7RUFDQTtFQUNBLElBQUloQyxLQUFLLENBQUNhLFFBQU5iLElBQW1CNkIsS0FBSyxDQUFDckssSUFBTnFLLEtBQWUsR0FBZkEsSUFBc0IsRUFBRSxVQUFVQSxLQUFLLENBQUM3QixLQUFsQixDQUE3QyxFQUF3RTtJQUN0RWdDLFVBQVUsQ0FBQzFELElBQVgwRCxHQUFrQix5QkFDaEIsdUJBQVV6RCxFQUFWLEVBQWNoRyxNQUFNLElBQUlBLE1BQU0sQ0FBQytKLE1BQS9CLEVBQXVDL0osTUFBTSxJQUFJQSxNQUFNLENBQUNnSyxhQUF4RCxDQURnQixDQUFsQlA7RUFHRDtFQUVELG9CQUFPaEIsZUFBTXdCLFlBQU54QixDQUFtQmEsS0FBbkJiLEVBQTBCZ0IsVUFBMUJoQixDQUFQO0FBQ0Q7ZUFFY2pCLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQ3RWZjs7O0FBR08sU0FBUzBDLHVCQUFULENBQWlDQyxJQUFqQyxFQUF1RDtFQUM1RCxPQUFPQSxJQUFJLENBQUNDLFFBQUxELENBQWMsR0FBZEEsS0FBc0JBLElBQUksS0FBSyxHQUEvQkEsR0FBcUNBLElBQUksQ0FBQ0UsS0FBTEYsQ0FBVyxDQUFYQSxFQUFjLENBQUMsQ0FBZkEsQ0FBckNBLEdBQXlEQSxJQUFoRTtBQUNELENBRUQ7Ozs7QUFJTyxNQUFNRywwQkFBMEIsR0FBR0MsU0FDckNKLFNBRHFDSSxHQVV0Q0wsdUJBVkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQO0FBQ0E7OztBQUNBO0FBc0hBO3lDQXpIQTtBQW1CQSxNQUFNTSxlQUFvQyxHQUFHO0VBQzNDeEssTUFBTSxFQUFFLElBRG1DO0VBQzdCO0VBQ2R5SyxjQUFjLEVBQUUsRUFGMkI7RUFHM0NDLEtBQUssQ0FBQzFGLEVBQUQsRUFBaUI7SUFDcEIsSUFBSSxLQUFLaEYsTUFBVCxFQUFpQixPQUFPZ0YsRUFBRSxFQUFUO0lBQ2pCLFdBQW1DLEVBRWxDO0VBQ0Y7QUFSMEMsQ0FBN0MsQ0FXQTtBQUNBLE1BQU0yRixpQkFBaUIsR0FBRyxDQUN4QixVQUR3QixFQUV4QixPQUZ3QixFQUd4QixPQUh3QixFQUl4QixRQUp3QixFQUt4QixZQUx3QixFQU14QixZQU53QixFQU94QixVQVB3QixFQVF4QixRQVJ3QixFQVN4QixTQVR3QixFQVV4QixlQVZ3QixDQUExQjtBQVlBLE1BQU1DLFlBQVksR0FBRyxDQUNuQixrQkFEbUIsRUFFbkIscUJBRm1CLEVBR25CLHFCQUhtQixFQUluQixrQkFKbUIsRUFLbkIsaUJBTG1CLEVBTW5CLG9CQU5tQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLENBQ3ZCLE1BRHVCLEVBRXZCLFNBRnVCLEVBR3ZCLFFBSHVCLEVBSXZCLE1BSnVCLEVBS3ZCLFVBTHVCLEVBTXZCLGdCQU51QixDQUF6QixDQVNBO0FBQ0EzQyxNQUFNLENBQUM0QyxjQUFQNUMsQ0FBc0JzQyxlQUF0QnRDLEVBQXVDLFFBQXZDQSxFQUFpRDtFQUMvQ2pELEdBQUcsR0FBRztJQUNKLE9BQU81RixpQkFBTzBMLE1BQWQ7RUFDRDtBQUg4QyxDQUFqRDdDO0FBTUF5QyxpQkFBaUIsQ0FBQzlGLE9BQWxCOEYsQ0FBMkJLLEtBQUQsSUFBVztFQUNuQztFQUNBO0VBQ0E7RUFDQTtFQUNBOUMsTUFBTSxDQUFDNEMsY0FBUDVDLENBQXNCc0MsZUFBdEJ0QyxFQUF1QzhDLEtBQXZDOUMsRUFBOEM7SUFDNUNqRCxHQUFHLEdBQUc7TUFDSixNQUFNakYsTUFBTSxHQUFHaUwsU0FBUyxFQUF4QjtNQUNBLE9BQU9qTCxNQUFNLENBQUNnTCxLQUFELENBQWI7SUFDRDtFQUoyQyxDQUE5QzlDO0FBTUQsQ0FYRHlDO0FBYUEsZ0JBQWdCLENBQUM5RixPQUFqQixDQUEwQm1HLEtBQUQsSUFBVztFQUNsQztFQUNBO0VBQUVSLGVBQUQsQ0FBeUJRLEtBQXpCLElBQWtDLENBQUMsR0FBR3JELElBQUosS0FBb0I7SUFDckQsTUFBTTNILE1BQU0sR0FBR2lMLFNBQVMsRUFBeEI7SUFDQSxPQUFPakwsTUFBTSxDQUFDZ0wsS0FBRCxDQUFOaEwsQ0FBYyxHQUFHMkgsSUFBakIzSCxDQUFQO0VBQ0QsQ0FIQTtBQUlGLENBTkQ7QUFRQTRLLFlBQVksQ0FBQy9GLE9BQWIrRixDQUFzQnhFLEtBQUQsSUFBVztFQUM5Qm9FLGVBQWUsQ0FBQ0UsS0FBaEJGLENBQXNCLE1BQU07SUFDMUJuTCxpQkFBTzBMLE1BQVAxTCxDQUFjNkwsRUFBZDdMLENBQWlCK0csS0FBakIvRyxFQUF3QixDQUFDLEdBQUdzSSxJQUFKLEtBQWE7TUFDbkMsTUFBTXdELFVBQVUsR0FBSSxLQUFJL0UsS0FBSyxDQUFDZ0YsTUFBTmhGLENBQWEsQ0FBYkEsRUFBZ0JpRixXQUFoQmpGLEVBQThCLEdBQUVBLEtBQUssQ0FBQ2tGLFNBQU5sRixDQUN0RCxDQURzREEsQ0FFdEQsRUFGRjtNQUdBLE1BQU1tRixnQkFBZ0IsR0FBR2YsZUFBekI7TUFDQSxJQUFJZSxnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFwQixFQUFrQztRQUNoQyxJQUFJO1VBQ0ZJLGdCQUFnQixDQUFDSixVQUFELENBQWhCSSxDQUE2QixHQUFHNUQsSUFBaEM0RDtRQUNELENBQUMsUUFBTzNGLEdBQVAsRUFBWTtVQUNaakgsT0FBTyxDQUFDa0gsS0FBUmxILENBQWUsd0NBQXVDd00sVUFBVyxFQUFqRXhNO1VBQ0FBLE9BQU8sQ0FBQ2tILEtBQVJsSCxDQUFlLEdBQUVpSCxHQUFHLENBQUM0RixPQUFRLEtBQUk1RixHQUFHLENBQUM2RixLQUFNLEVBQTNDOU07UUFDRDtNQUNGO0lBQ0YsQ0FiRFU7RUFjRCxDQWZEbUw7QUFnQkQsQ0FqQkRJO0FBbUJBLFNBQVNLLFNBQVQsR0FBNkI7RUFDM0IsSUFBSSxDQUFDVCxlQUFlLENBQUN4SyxNQUFyQixFQUE2QjtJQUMzQixNQUFNd0wsT0FBTyxHQUNYLGdDQUNBLHlFQUZGO0lBR0EsTUFBTSxJQUFJNUQsS0FBSixDQUFVNEQsT0FBVixDQUFOO0VBQ0Q7RUFDRCxPQUFPaEIsZUFBZSxDQUFDeEssTUFBdkI7QUFDRCxDQUVEO2VBQ2V3SyxlLENBRWY7O0FBR08sU0FBU3ZLLFNBQVQsR0FBaUM7RUFDdEMsT0FBT3dJLGVBQU1pRCxVQUFOakQsQ0FBaUJrRCw0QkFBakJsRCxDQUFQO0FBQ0QsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDTyxNQUFNbUQsWUFBWSxHQUFHLENBQUMsR0FBR2pFLElBQUosS0FBaUM7RUFDM0Q2QyxlQUFlLENBQUN4SyxNQUFoQndLLEdBQXlCLElBQUluTCxnQkFBSixDQUFXLEdBQUdzSSxJQUFkLENBQXpCNkM7RUFDQUEsZUFBZSxDQUFDQyxjQUFoQkQsQ0FBK0IzRixPQUEvQjJGLENBQXdDeEYsRUFBRCxJQUFRQSxFQUFFLEVBQWpEd0Y7RUFDQUEsZUFBZSxDQUFDQyxjQUFoQkQsR0FBaUMsRUFBakNBO0VBRUEsT0FBT0EsZUFBZSxDQUFDeEssTUFBdkI7QUFDRCxDQU5NLENBUVA7O0FBQ08sU0FBUzZMLHdCQUFULENBQWtDN0wsTUFBbEMsRUFBOEQ7RUFDbkUsTUFBTThMLE9BQU8sR0FBRzlMLE1BQWhCO0VBQ0EsTUFBTStMLFFBQVEsR0FBRyxFQUFqQjtFQUVBLEtBQUssTUFBTUMsUUFBWCxJQUF1QnJCLGlCQUF2QixFQUEwQztJQUN4QyxJQUFJLE9BQU9tQixPQUFPLENBQUNFLFFBQUQsQ0FBZCxLQUE2QixRQUFqQyxFQUEyQztNQUN6Q0QsUUFBUSxDQUFDQyxRQUFELENBQVJELEdBQXFCN0QsTUFBTSxDQUFDK0QsTUFBUC9ELENBQ25CZ0UsS0FBSyxDQUFDQyxPQUFORCxDQUFjSixPQUFPLENBQUNFLFFBQUQsQ0FBckJFLElBQW1DLEVBQW5DQSxHQUF3QyxFQURyQmhFLEVBRW5CNEQsT0FBTyxDQUFDRSxRQUFELENBRlk5RCxDQUFyQjZELENBR0U7TUFDRjtJQUNEO0lBRURBLFFBQVEsQ0FBQ0MsUUFBRCxDQUFSRCxHQUFxQkQsT0FBTyxDQUFDRSxRQUFELENBQTVCRDtFQUNELENBRUQ7RUFDQUEsUUFBUSxDQUFDaEIsTUFBVGdCLEdBQWtCMU0saUJBQU8wTCxNQUF6QmdCO0VBRUFsQixnQkFBZ0IsQ0FBQ2hHLE9BQWpCZ0csQ0FBMEJHLEtBQUQsSUFBVztJQUNsQ2UsUUFBUSxDQUFDZixLQUFELENBQVJlLEdBQWtCLENBQUMsR0FBR3BFLElBQUosS0FBb0I7TUFDcEMsT0FBT21FLE9BQU8sQ0FBQ2QsS0FBRCxDQUFQYyxDQUFlLEdBQUduRSxJQUFsQm1FLENBQVA7SUFDRCxDQUZEQztFQUdELENBSkRsQjtFQU1BLE9BQU9rQixRQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6S0Q7QUFFQTtBQVdlLFNBQVNLLFVBQVQsQ0FJYkMsaUJBSmEsRUFLK0I7RUFDNUMsU0FBU0MsaUJBQVQsQ0FBMkI3RSxLQUEzQixFQUF1QztJQUNyQyxvQkFBTyw2QkFBQyxpQkFBRDtNQUFtQixNQUFNLEVBQUU7SUFBM0IsR0FBNENBLEtBQTVDLEVBQVA7RUFDRDtFQUVELGlCQUFpQixDQUFDOEUsZUFBbEIsR0FBb0NGLGlCQUFpQixDQUFDRSxlQUN0RDtFQUFBO0VBQ0VELGlCQUFELENBQTJCRSxtQkFBM0IsR0FBa0RILGlCQUFELENBQTJCRyxtQkFBNUU7RUFDRCxVQUEyQztJQUN6QyxNQUFNak8sSUFBSSxHQUNSOE4saUJBQWlCLENBQUNJLFdBQWxCSixJQUFpQ0EsaUJBQWlCLENBQUM5TixJQUFuRDhOLElBQTJELFNBRDdEO0lBRUFDLGlCQUFpQixDQUFDRyxXQUFsQkgsR0FBaUMsY0FBYS9OLElBQUssR0FBbkQrTjtFQUNEO0VBRUQsT0FBT0EsaUJBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNqQ1k7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQThDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBb0Q7QUFDN0U7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5QkFBeUIsMENBQTBDO0FBQ25FO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCLDJDQUEyQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBNEM7QUFDckU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGlCQUFpQixtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQSxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLG9FQUFvRSxVQUFVLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaURBQWlELEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msd09BQXdPLFVBQVUsRUFBRTtBQUNwUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2REFBNkQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7Ozs7Ozt1QkNyWkE7Ozs7OzswQkFBQSxDQVlBO0FBQ0E7QUFDQTtBQVVlLFNBQVNJLElBQVQsR0FBNkI7RUFDMUMsTUFBTUMsR0FBK0IsR0FBR3pFLE1BQU0sQ0FBQzBFLE1BQVAxRSxDQUFjLElBQWRBLENBQXhDO0VBRUEsT0FBTztJQUNMZ0QsRUFBRSxDQUFDak0sSUFBRCxFQUFlaUYsT0FBZixFQUFpQztNQUNqQztNQUFDLENBQUN5SSxHQUFHLENBQUMxTixJQUFELENBQUgwTixLQUFjQSxHQUFHLENBQUMxTixJQUFELENBQUgwTixHQUFZLEVBQTFCQSxDQUFELEVBQWdDck4sSUFBaEMsQ0FBcUM0RSxPQUFyQztJQUNGLENBSEk7SUFLTDJJLEdBQUcsQ0FBQzVOLElBQUQsRUFBZWlGLE9BQWYsRUFBaUM7TUFDbEMsSUFBSXlJLEdBQUcsQ0FBQzFOLElBQUQsQ0FBUCxFQUFlO1FBQ2IwTixHQUFHLENBQUMxTixJQUFELENBQUgwTixDQUFVRyxNQUFWSCxDQUFpQkEsR0FBRyxDQUFDMU4sSUFBRCxDQUFIME4sQ0FBVTFGLE9BQVYwRixDQUFrQnpJLE9BQWxCeUksTUFBK0IsQ0FBaERBLEVBQW1ELENBQW5EQTtNQUNEO0lBQ0YsQ0FUSTtJQVdMSSxJQUFJLENBQUM5TixJQUFELEVBQWUsR0FBRytOLElBQWxCLEVBQStCO01BQ2pDO01BQ0E7TUFBQyxDQUFDTCxHQUFHLENBQUMxTixJQUFELENBQUgwTixJQUFhLEVBQWQsRUFBa0J0QyxLQUFsQixHQUEwQmpNLEdBQTFCLENBQStCOEYsT0FBRCxJQUFzQjtRQUNuREEsT0FBTyxDQUFDLEdBQUc4SSxJQUFKLENBQVA5STtNQUNELENBRkE7SUFHRjtFQWhCSSxDQUFQO0FBa0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7QUFLQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Q0EzQkEsNEJBQ0E7QUF3Q0EsTUFBTStJLFFBQVEsR0FBSTFDLE1BQUQsSUFBa0QsRUFBbkU7QUFFQSxTQUFTMkMsc0JBQVQsR0FBa0M7RUFDaEMsT0FBT2hGLE1BQU0sQ0FBQytELE1BQVAvRCxDQUFjLElBQUlOLEtBQUosQ0FBVSxpQkFBVixDQUFkTSxFQUE0QztJQUNqRGlGLFNBQVMsRUFBRTtFQURzQyxDQUE1Q2pGLENBQVA7QUFHRDtBQUVELFNBQVNrRixhQUFULENBQXVCakQsSUFBdkIsRUFBcUNrRCxNQUFyQyxFQUFzRDtFQUNwRCxPQUFPQSxNQUFNLElBQUlsRCxJQUFJLENBQUNtRCxVQUFMbkQsQ0FBZ0IsR0FBaEJBLENBQVZrRCxHQUNIbEQsSUFBSSxLQUFLLEdBQVRBLEdBQ0Usd0RBQTJCa0QsTUFBM0IsQ0FERmxELEdBRUcsR0FBRWtELE1BQU8sR0FBRWxELElBQUssRUFIaEJrRCxHQUlIbEQsSUFKSjtBQUtEO0FBRU0sU0FBU29ELFNBQVQsQ0FDTHBELElBREssRUFFTEosTUFGSyxFQUdMQyxhQUhLLEVBSUw7RUFDQSxJQUFJTyxLQUFKLEVBQXFDLEVBSXBDO0VBQ0QsT0FBT0osSUFBUDtBQUNEO0FBRU0sU0FBU3FELFNBQVQsQ0FBbUJyRCxJQUFuQixFQUFpQ0osTUFBakMsRUFBa0Q7RUFDdkQsSUFBSVEsS0FBSixFQUFxQyxFQUlwQztFQUNELE9BQU9KLElBQVA7QUFDRDtBQUVNLFNBQVNzRCxXQUFULENBQXFCdEQsSUFBckIsRUFBNEM7RUFDakQsT0FBT0EsSUFBSSxLQUFLOEMsUUFBVDlDLElBQXFCQSxJQUFJLENBQUNtRCxVQUFMbkQsQ0FBZ0I4QyxRQUFRLEdBQUcsR0FBM0I5QyxDQUE1QjtBQUNEO0FBRU0sU0FBU3VELFdBQVQsQ0FBcUJ2RCxJQUFyQixFQUEyQztFQUNoRDtFQUNBLE9BQU9pRCxhQUFhLENBQUNqRCxJQUFELEVBQU84QyxRQUFQLENBQXBCO0FBQ0Q7QUFFTSxTQUFTVSxXQUFULENBQXFCeEQsSUFBckIsRUFBMkM7RUFDaEQsT0FBT0EsSUFBSSxDQUFDRSxLQUFMRixDQUFXOEMsUUFBUSxDQUFDck0sTUFBcEJ1SixLQUErQixHQUF0QztBQUNELENBRUQ7OztBQUdPLFNBQVN5RCxVQUFULENBQW9CQyxHQUFwQixFQUEwQztFQUMvQyxJQUFJQSxHQUFHLENBQUNQLFVBQUpPLENBQWUsR0FBZkEsQ0FBSixFQUF5QixPQUFPLElBQVA7RUFDekIsSUFBSTtJQUNGO0lBQ0EsTUFBTUMsY0FBYyxHQUFHLCtCQUF2QjtJQUNBLE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxHQUFKLENBQVFILEdBQVIsRUFBYUMsY0FBYixDQUFqQjtJQUNBLE9BQU9DLFFBQVEsQ0FBQ0UsTUFBVEYsS0FBb0JELGNBQXBCQyxJQUFzQ04sV0FBVyxDQUFDTSxRQUFRLENBQUMvRSxRQUFWLENBQXhEO0VBQ0QsQ0FBQyxRQUFPWixDQUFQLEVBQVU7SUFDVixPQUFPLEtBQVA7RUFDRDtBQUNGO0FBSU0sU0FBUzhGLGFBQVQsQ0FDTEMsS0FESyxFQUVMQyxVQUZLLEVBR0xqTyxLQUhLLEVBSUw7RUFDQSxJQUFJa08saUJBQWlCLEdBQUcsRUFBeEI7RUFFQSxNQUFNQyxZQUFZLEdBQUcsK0JBQWNILEtBQWQsQ0FBckI7RUFDQSxNQUFNSSxhQUFhLEdBQUdELFlBQVksQ0FBQ0UsTUFBbkM7RUFDQSxNQUFNQyxjQUFjO0VBQ2xCO0VBQ0EsQ0FBQ0wsVUFBVSxLQUFLRCxLQUFmQyxHQUF1QixtQ0FBZ0JFLFlBQWhCLEVBQThCRixVQUE5QixDQUF2QkEsR0FBbUUsRUFBcEU7RUFDQTtFQUNBO0VBQ0FqTyxLQUxGO0VBT0FrTyxpQkFBaUIsR0FBR0YsS0FBcEJFO0VBQ0EsTUFBTUssTUFBTSxHQUFHeEcsTUFBTSxDQUFDQyxJQUFQRCxDQUFZcUcsYUFBWnJHLENBQWY7RUFFQSxJQUNFLENBQUN3RyxNQUFNLENBQUNDLEtBQVBELENBQWNFLEtBQUQsSUFBVztJQUN2QixJQUFJdFEsS0FBSyxHQUFHbVEsY0FBYyxDQUFDRyxLQUFELENBQWRILElBQXlCLEVBQXJDO0lBQ0EsTUFBTTtNQUFFSSxNQUFGO01BQVVDO0lBQVYsSUFBdUJQLGFBQWEsQ0FBQ0ssS0FBRCxDQUExQyxDQUVBO0lBQ0E7SUFDQSxJQUFJRyxRQUFRLEdBQUksSUFBR0YsTUFBTSxHQUFHLEtBQUgsR0FBVyxFQUFHLEdBQUVELEtBQU0sR0FBL0M7SUFDQSxJQUFJRSxRQUFKLEVBQWM7TUFDWkMsUUFBUSxHQUFJLEdBQUUsQ0FBQ3pRLEtBQUQsR0FBUyxHQUFULEdBQWUsRUFBRyxJQUFHeVEsUUFBUyxHQUE1Q0E7SUFDRDtJQUNELElBQUlGLE1BQU0sSUFBSSxDQUFDM0MsS0FBSyxDQUFDQyxPQUFORCxDQUFjNU4sS0FBZDROLENBQWYsRUFBcUM1TixLQUFLLEdBQUcsQ0FBQ0EsS0FBRCxDQUFSQTtJQUVyQyxPQUNFLENBQUN3USxRQUFRLElBQUlGLEtBQUssSUFBSUgsY0FBdEI7SUFDQTtJQUNDSixpQkFBaUIsR0FDaEJBLGlCQUFpQixDQUFFNU8sT0FBbkI0TyxDQUNFVSxRQURGVixFQUVFUSxNQUFNLEdBQ0R2USxLQUFELENBQW9CRixHQUFwQixDQUF3QjRRLDZCQUF4QixFQUE4Q0MsSUFBOUMsQ0FBbUQsR0FBbkQsQ0FERSxHQUVGLG1DQUFxQjNRLEtBQXJCLENBSk4rUCxLQUtLLEdBUlAsQ0FERjtFQVdELENBdkJBSyxDQURILEVBeUJFO0lBQ0FMLGlCQUFpQixHQUFHLEVBQXBCQSxDQUF1QjtJQUV2QjtJQUNBO0VBQ0Q7RUFDRCxPQUFPO0lBQ0xLLE1BREs7SUFFTFEsTUFBTSxFQUFFYjtFQUZILENBQVA7QUFJRDtBQUVELFNBQVNjLGtCQUFULENBQTRCaFAsS0FBNUIsRUFBbUR1TyxNQUFuRCxFQUFxRTtFQUNuRSxNQUFNVSxhQUE2QixHQUFHLEVBQXRDO0VBRUFsSCxNQUFNLENBQUNDLElBQVBELENBQVkvSCxLQUFaK0gsRUFBbUJyRCxPQUFuQnFELENBQTRCTCxHQUFELElBQVM7SUFDbEMsSUFBSSxDQUFDNkcsTUFBTSxDQUFDVyxRQUFQWCxDQUFnQjdHLEdBQWhCNkcsQ0FBTCxFQUEyQjtNQUN6QlUsYUFBYSxDQUFDdkgsR0FBRCxDQUFidUgsR0FBcUJqUCxLQUFLLENBQUMwSCxHQUFELENBQTFCdUg7SUFDRDtFQUNGLENBSkRsSDtFQUtBLE9BQU9rSCxhQUFQO0FBQ0QsQ0FFRDs7OztBQUlPLFNBQVNFLFdBQVQsQ0FDTEMsV0FESyxFQUVMeEosSUFGSyxFQUdMeUosU0FISyxFQUlHO0VBQ1I7RUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSXpCLEdBQUosQ0FBUXVCLFdBQVIsRUFBcUIsVUFBckIsQ0FBYjtFQUNBLE1BQU1HLFdBQVcsR0FDZixPQUFPM0osSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsSUFBM0IsR0FBa0MsaUNBQXFCQSxJQUFyQixDQURwQztFQUVBLElBQUk7SUFDRixNQUFNNEosUUFBUSxHQUFHLElBQUkzQixHQUFKLENBQVEwQixXQUFSLEVBQXFCRCxJQUFyQixDQUFqQjtJQUNBRSxRQUFRLENBQUMzRyxRQUFUMkcsR0FBb0Isd0RBQTJCQSxRQUFRLENBQUMzRyxRQUFwQyxDQUFwQjJHO0lBQ0EsSUFBSUMsY0FBYyxHQUFHLEVBQXJCO0lBRUEsSUFDRSwrQkFBZUQsUUFBUSxDQUFDM0csUUFBeEIsS0FDQTJHLFFBQVEsQ0FBQ0UsWUFEVCxJQUVBTCxTQUhGLEVBSUU7TUFDQSxNQUFNclAsS0FBSyxHQUFHLHlDQUF1QndQLFFBQVEsQ0FBQ0UsWUFBaEMsQ0FBZDtNQUVBLE1BQU07UUFBRVgsTUFBRjtRQUFVUjtNQUFWLElBQXFCUixhQUFhLENBQ3RDeUIsUUFBUSxDQUFDM0csUUFENkIsRUFFdEMyRyxRQUFRLENBQUMzRyxRQUY2QixFQUd0QzdJLEtBSHNDLENBQXhDO01BTUEsSUFBSStPLE1BQUosRUFBWTtRQUNWVSxjQUFjLEdBQUcsaUNBQXFCO1VBQ3BDNUcsUUFBUSxFQUFFa0csTUFEMEI7VUFFcENZLElBQUksRUFBRUgsUUFBUSxDQUFDRyxJQUZxQjtVQUdwQzNQLEtBQUssRUFBRWdQLGtCQUFrQixDQUFDaFAsS0FBRCxFQUFRdU8sTUFBUjtRQUhXLENBQXJCLENBQWpCa0I7TUFLRDtJQUNGLENBRUQ7SUFDQSxNQUFNMUcsWUFBWSxHQUNoQnlHLFFBQVEsQ0FBQzFCLE1BQVQwQixLQUFvQkYsSUFBSSxDQUFDeEIsTUFBekIwQixHQUNJQSxRQUFRLENBQUM1SixJQUFUNEosQ0FBY3RGLEtBQWRzRixDQUFvQkEsUUFBUSxDQUFDMUIsTUFBVDBCLENBQWdCL08sTUFBcEMrTyxDQURKQSxHQUVJQSxRQUFRLENBQUM1SixJQUhmO0lBS0EsT0FBUXlKLFNBQVMsR0FDYixDQUFDdEcsWUFBRCxFQUFlMEcsY0FBYyxJQUFJMUcsWUFBakMsQ0FEYSxHQUViQSxZQUZKO0VBR0QsQ0FBQyxRQUFPZCxDQUFQLEVBQVU7SUFDVixPQUFRb0gsU0FBUyxHQUFHLENBQUNFLFdBQUQsQ0FBSCxHQUFtQkEsV0FBcEM7RUFDRDtBQUNGO0FBRUQsTUFBTUssZUFBZSxHQUFHQyxNQUFNLENBQUMsaUJBQUQsQ0FBOUI7QUFDTyxTQUFTQyxnQkFBVCxDQUEwQnJLLEdBQTFCLEVBQTZDO0VBQ2xELE9BQU9zQyxNQUFNLENBQUM0QyxjQUFQNUMsQ0FBc0J0QyxHQUF0QnNDLEVBQTJCNkgsZUFBM0I3SCxFQUE0QyxFQUE1Q0EsQ0FBUDtBQUNEO0FBRUQsU0FBU2dJLFlBQVQsQ0FBc0JsUSxNQUF0QixFQUEwQzZOLEdBQTFDLEVBQW9EN0gsRUFBcEQsRUFBNkQ7RUFDM0Q7RUFDQTtFQUNBLE9BQU87SUFDTDZILEdBQUcsRUFBRUgsV0FBVyxDQUFDNEIsV0FBVyxDQUFDdFAsTUFBTSxDQUFDZ0osUUFBUixFQUFrQjZFLEdBQWxCLENBQVosQ0FEWDtJQUVMN0gsRUFBRSxFQUFFQSxFQUFFLEdBQUcwSCxXQUFXLENBQUM0QixXQUFXLENBQUN0UCxNQUFNLENBQUNnSixRQUFSLEVBQWtCaEQsRUFBbEIsQ0FBWixDQUFkLEdBQW1EQTtFQUZwRCxDQUFQO0FBSUQ7QUFxREQsTUFBTW1LLHVCQUF1QixHQUMzQjVGLFVBRUEsS0FIRjtBQUtBLFNBQVM2RixVQUFULENBQW9CdkMsR0FBcEIsRUFBaUN3QyxRQUFqQyxFQUFpRTtFQUMvRCxPQUFPLEtBQUssQ0FBQ3hDLEdBQUQsRUFBTTtJQUNoQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0F5QyxXQUFXLEVBQUU7RUFaRyxDQUFOLENBQUwsQ0FhSnBKLElBYkksQ0FhRXFKLEdBQUQsSUFBUztJQUNmLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxFQUFULEVBQWE7TUFDWCxJQUFJSCxRQUFRLEdBQUcsQ0FBWEEsSUFBZ0JFLEdBQUcsQ0FBQ0UsTUFBSkYsSUFBYyxHQUFsQyxFQUF1QztRQUNyQyxPQUFPSCxVQUFVLENBQUN2QyxHQUFELEVBQU13QyxRQUFRLEdBQUcsQ0FBakIsQ0FBakI7TUFDRDtNQUNELE1BQU0sSUFBSXpJLEtBQUosQ0FBVyw2QkFBWCxDQUFOO0lBQ0Q7SUFFRCxPQUFPMkksR0FBRyxDQUFDRyxJQUFKSCxFQUFQO0VBQ0QsQ0F0Qk0sQ0FBUDtBQXVCRDtBQUVELFNBQVNJLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQXlDQyxjQUF6QyxFQUFrRTtFQUNoRSxPQUFPLFVBQVUsQ0FBQ0QsUUFBRCxFQUFXQyxjQUFjLEdBQUcsQ0FBSCxHQUFPLENBQWhDLENBQVYsQ0FBNkMzSyxLQUE3QyxDQUFvRE4sR0FBRCxJQUFnQjtJQUN4RTtJQUNBO0lBQ0E7SUFDQSxJQUFJLENBQUNpTCxjQUFMLEVBQXFCO01BQ25CWixnQkFBZ0IsQ0FBQ3JLLEdBQUQsQ0FBaEJxSztJQUNEO0lBQ0QsTUFBTXJLLEdBQU47RUFDRCxDQVJNLENBQVA7QUFTRDtBQUVjLE1BQU12RyxNQUE2QjtFQU9oRDs7QUFQZ0QsSUFPaEQsQ0FJQTtFQWtCQXlSLFdBQVcsQ0FDVDlILFNBRFMsRUFFVDdJLE1BRlMsRUFHVDZGLEdBSFMsRUFJVDtJQUNFK0ssWUFERjtJQUVFQyxVQUZGO0lBR0VDLEdBSEY7SUFJRUMsT0FKRjtJQUtFQyxTQUxGO0lBTUVDLGtCQU5GO0lBT0V4TCxHQVBGO0lBUUV5TCxZQVJGO0lBU0VDLFVBVEY7SUFVRXZILE1BVkY7SUFXRXdILE9BWEY7SUFZRXZIO0VBWkYsQ0FKUyxFQStCVDtJQUFBLEtBM0RGbUUsS0EyREU7SUFBQSxLQTFERm5GLFFBMERFO0lBQUEsS0F6REY3SSxLQXlERTtJQUFBLEtBeERGcVIsTUF3REU7SUFBQSxLQXZERnZFLFFBdURFO0lBQUEsS0FsREZ3RSxVQWtERTtJQUFBLEtBaERGQyxHQWdERSxHQWhEa0MsRUFnRGxDO0lBQUEsS0EvQ0ZDLEdBK0NFO0lBQUEsS0E5Q0ZDLEdBOENFO0lBQUEsS0E3Q0ZaLFVBNkNFO0lBQUEsS0E1Q0ZhLElBNENFO0lBQUEsS0EzQ0Y5RyxNQTJDRTtJQUFBLEtBMUNGK0csUUEwQ0U7SUFBQSxLQXpDRkMsS0F5Q0U7SUFBQSxLQXhDRlQsVUF3Q0U7SUFBQSxLQXZDRlUsY0F1Q0U7SUFBQSxLQXRDRkMsUUFzQ0U7SUFBQSxLQXJDRmxJLE1BcUNFO0lBQUEsS0FwQ0Z3SCxPQW9DRTtJQUFBLEtBbkNGdkgsYUFtQ0U7SUFBQSxLQXFHRmtJLFVBckdFLEdBcUdZblQsQ0FBRCxJQUE0QjtNQUN2QyxNQUFNaEIsS0FBSyxHQUFHZ0IsQ0FBQyxDQUFDaEIsS0FBaEI7TUFFQSxJQUFJLENBQUNBLEtBQUwsRUFBWTtRQUNWO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07VUFBRWlMLFFBQUY7VUFBWTdJO1FBQVosSUFBc0IsSUFBNUI7UUFDQSxLQUFLZ1MsV0FBTCxDQUNFLGNBREYsRUFFRSxpQ0FBcUI7VUFBRW5KLFFBQVEsRUFBRTBFLFdBQVcsQ0FBQzFFLFFBQUQsQ0FBdkI7VUFBbUM3STtRQUFuQyxDQUFyQixDQUZGLEVBR0Usb0JBSEY7UUFLQTtNQUNEO01BRUQsSUFBSSxDQUFDcEMsS0FBSyxDQUFDcVUsR0FBWCxFQUFnQjtRQUNkO01BQ0Q7TUFFRCxNQUFNO1FBQUV2RSxHQUFGO1FBQU83SCxFQUFQO1FBQVdDO01BQVgsSUFBdUJsSSxLQUE3QjtNQUVBLE1BQU07UUFBRWlMO01BQUYsSUFBZSx3Q0FBaUI2RSxHQUFqQixDQUFyQixDQUVBO01BQ0E7TUFDQSxJQUFJLEtBQUtrRSxLQUFMLElBQWMvTCxFQUFFLEtBQUssS0FBS3dMLE1BQTFCLElBQW9DeEksUUFBUSxLQUFLLEtBQUtBLFFBQTFELEVBQW9FO1FBQ2xFO01BQ0QsQ0FFRDtNQUNBO01BQ0EsSUFBSSxLQUFLNkksSUFBTCxJQUFhLENBQUMsS0FBS0EsSUFBTCxDQUFVOVQsS0FBVixDQUFsQixFQUFvQztRQUNsQztNQUNEO01BRUQsS0FBS3NVLE1BQUwsQ0FDRSxjQURGLEVBRUV4RSxHQUZGLEVBR0U3SCxFQUhGLEVBSUVrQyxNQUFNLENBQUMrRCxNQUFQL0QsQ0FBYyxFQUFkQSxFQUFrQmpDLE9BQWxCaUMsRUFBMkI7UUFDekJyQixPQUFPLEVBQUVaLE9BQU8sQ0FBQ1ksT0FBUlosSUFBbUIsS0FBS2dNO01BRFIsQ0FBM0IvSixDQUpGO0lBUUQsQ0F2SkMsQ0FDQTtJQUNBLEtBQUtpRyxLQUFMLEdBQWEscURBQXdCbkYsU0FBeEIsQ0FBYixDQUVBO0lBQ0EsS0FBS3lJLFVBQUwsR0FBa0IsRUFBbEIsQ0FDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJekksU0FBUSxLQUFLLFNBQWpCLEVBQTRCO01BQzFCLEtBQUt5SSxVQUFMLENBQWdCLEtBQUt0RCxLQUFyQixJQUE4QjtRQUM1QmdELFNBRDRCO1FBRTVCbUIsV0FBVyxFQUFFbEIsa0JBRmU7UUFHNUIzSixLQUFLLEVBQUVzSixZQUhxQjtRQUk1Qm5MLEdBSjRCO1FBSzVCMk0sT0FBTyxFQUFFeEIsWUFBWSxJQUFJQSxZQUFZLENBQUN3QixPQUxWO1FBTTVCQyxPQUFPLEVBQUV6QixZQUFZLElBQUlBLFlBQVksQ0FBQ3lCO01BTlYsQ0FBOUI7SUFRRDtJQUVELEtBQUtmLFVBQUwsQ0FBZ0IsT0FBaEIsSUFBMkI7TUFDekJOLFNBQVMsRUFBRUYsR0FEYztNQUV6QnFCLFdBQVcsRUFBRTtJQUZZLENBQTNCLENBT0E7SUFDQTtJQUNBLEtBQUt2SCxNQUFMLEdBQWMxTCxNQUFNLENBQUMwTCxNQUFyQjtJQUVBLEtBQUtpRyxVQUFMLEdBQWtCQSxVQUFsQjtJQUNBLEtBQUtoSSxRQUFMLEdBQWdCQSxTQUFoQjtJQUNBLEtBQUs3SSxLQUFMLEdBQWFBLE1BQWIsQ0FDQTtJQUNBO0lBQ0EsS0FBS3FSLE1BQUw7SUFDRTtJQUNBLCtCQUFleEksU0FBZixLQUE0QnlKLGFBQWEsQ0FBQ0MsVUFBMUMsR0FBdUQxSixTQUF2RCxHQUFrRWhELEdBRnBFO0lBR0EsS0FBS2lILFFBQUwsR0FBZ0JBLFFBQWhCO0lBQ0EsS0FBSzBFLEdBQUwsR0FBV04sWUFBWDtJQUNBLEtBQUtPLEdBQUwsR0FBVyxJQUFYO0lBQ0EsS0FBS0UsUUFBTCxHQUFnQlosT0FBaEIsQ0FDQTtJQUNBO0lBQ0EsS0FBS2EsS0FBTCxHQUFhLElBQWI7SUFFQSxLQUFLVCxVQUFMLEdBQWtCQSxVQUFsQjtJQUVBLElBQUkvRyxLQUFKLEVBQXFDLEVBSXBDO0lBRUQsV0FBbUMsRUEyQ2xDO0VBQ0Y7RUFzRERvSSxNQUFNLEdBQVM7SUFDYmxPLE1BQU0sQ0FBQ21PLFFBQVBuTyxDQUFnQmtPLE1BQWhCbE87RUFDRCxDQUVEOzs7RUFHQW9PLElBQUksR0FBRztJQUNMcE8sTUFBTSxDQUFDcU8sT0FBUHJPLENBQWVvTyxJQUFmcE87RUFDRCxDQUVEOzs7Ozs7RUFNQW5GLElBQUksQ0FBQ3VPLEdBQUQsRUFBVzdILEVBQU8sR0FBRzZILEdBQXJCLEVBQTBCNUgsT0FBMEIsR0FBRyxFQUF2RCxFQUEyRDtJQUM3RDtJQUFDLENBQUM7TUFBRTRILEdBQUY7TUFBTzdIO0lBQVAsSUFBY2tLLFlBQVksQ0FBQyxJQUFELEVBQU9yQyxHQUFQLEVBQVk3SCxFQUFaLENBQTNCO0lBQ0QsT0FBTyxLQUFLcU0sTUFBTCxDQUFZLFdBQVosRUFBeUJ4RSxHQUF6QixFQUE4QjdILEVBQTlCLEVBQWtDQyxPQUFsQyxDQUFQO0VBQ0QsQ0FFRDs7Ozs7O0VBTUF4RyxPQUFPLENBQUNvTyxHQUFELEVBQVc3SCxFQUFPLEdBQUc2SCxHQUFyQixFQUEwQjVILE9BQTBCLEdBQUcsRUFBdkQsRUFBMkQ7SUFDaEU7SUFBQyxDQUFDO01BQUU0SCxHQUFGO01BQU83SDtJQUFQLElBQWNrSyxZQUFZLENBQUMsSUFBRCxFQUFPckMsR0FBUCxFQUFZN0gsRUFBWixDQUEzQjtJQUNELE9BQU8sS0FBS3FNLE1BQUwsQ0FBWSxjQUFaLEVBQTRCeEUsR0FBNUIsRUFBaUM3SCxFQUFqQyxFQUFxQ0MsT0FBckMsQ0FBUDtFQUNEO0VBRUQsTUFBTW9NLE1BQU4sQ0FDRVUsTUFERixFQUVFbEYsR0FGRixFQUdFN0gsRUFIRixFQUlFQyxPQUpGLEVBS29CO0lBQ2xCLElBQUksQ0FBQzJILFVBQVUsQ0FBQ0MsR0FBRCxDQUFmLEVBQXNCO01BQ3BCcEosTUFBTSxDQUFDbU8sUUFBUG5PLENBQWdCc0IsSUFBaEJ0QixHQUF1Qm9KLEdBQXZCcEo7TUFDQSxPQUFPLEtBQVA7SUFDRDtJQUVELElBQUksQ0FBRXdCLE9BQUQsQ0FBaUIrTSxFQUF0QixFQUEwQjtNQUN4QixLQUFLakIsS0FBTCxHQUFhLEtBQWI7SUFDRCxDQUNEO0lBQ0EsSUFBSWtCLFNBQUosRUFBUTtNQUNOQyxXQUFXLENBQUNDLElBQVpELENBQWlCLGFBQWpCQTtJQUNEO0lBRUQsSUFBSSxLQUFLbEIsY0FBVCxFQUF5QjtNQUN2QixLQUFLb0Isa0JBQUwsQ0FBd0IsS0FBS3BCLGNBQTdCO0lBQ0Q7SUFFRGhNLEVBQUUsR0FBR3VILFNBQVMsQ0FBQ3ZILEVBQUQsRUFBSyxLQUFLK0QsTUFBVixFQUFrQixLQUFLQyxhQUF2QixDQUFkaEU7SUFDQSxNQUFNcU4sU0FBUyxHQUFHN0YsU0FBUyxDQUN6QkMsV0FBVyxDQUFDekgsRUFBRCxDQUFYeUgsR0FBa0JFLFdBQVcsQ0FBQzNILEVBQUQsQ0FBN0J5SCxHQUFvQ3pILEVBRFgsRUFFekIsS0FBSytELE1BRm9CLENBQTNCO0lBSUEsS0FBS2lJLGNBQUwsR0FBc0JoTSxFQUF0QixDQUVBO0lBQ0E7SUFFQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLENBQUVDLE9BQUQsQ0FBaUIrTSxFQUFsQixJQUF3QixLQUFLTSxlQUFMLENBQXFCRCxTQUFyQixDQUE1QixFQUE2RDtNQUMzRCxLQUFLN0IsTUFBTCxHQUFjNkIsU0FBZDtNQUNBaFUsTUFBTSxDQUFDMEwsTUFBUDFMLENBQWMwTixJQUFkMU4sQ0FBbUIsaUJBQW5CQSxFQUFzQzJHLEVBQXRDM0csRUFDQTtNQUNBLEtBQUs4UyxXQUFMLENBQWlCWSxNQUFqQixFQUF5QmxGLEdBQXpCLEVBQThCN0gsRUFBOUIsRUFBa0NDLE9BQWxDO01BQ0EsS0FBS3NOLFlBQUwsQ0FBa0JGLFNBQWxCO01BQ0EsS0FBS0csTUFBTCxDQUFZLEtBQUsvQixVQUFMLENBQWdCLEtBQUt0RCxLQUFyQixDQUFaO01BQ0E5TyxNQUFNLENBQUMwTCxNQUFQMUwsQ0FBYzBOLElBQWQxTixDQUFtQixvQkFBbkJBLEVBQXlDMkcsRUFBekMzRztNQUNBLE9BQU8sSUFBUDtJQUNELENBRUQ7SUFDQTtJQUNBO0lBQ0EsTUFBTW9VLEtBQUssR0FBRyxNQUFNLEtBQUt6QyxVQUFMLENBQWdCMEMsV0FBaEIsRUFBcEI7SUFDQSxNQUFNO01BQUVDLFVBQVUsRUFBRUM7SUFBZCxJQUEyQixNQUFNLEtBQUs1QyxVQUFMLENBQWdCNkMscUJBQXZEO0lBRUEsSUFBSUMsTUFBTSxHQUFHLHdDQUFpQmpHLEdBQWpCLENBQWI7SUFFQSxJQUFJO01BQUU3RSxRQUFGO01BQVk3STtJQUFaLElBQXNCMlQsTUFBMUI7SUFFQUEsTUFBTSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JELE1BQWxCLEVBQTBCTCxLQUExQixDQUFUSztJQUVBLElBQUlBLE1BQU0sQ0FBQzlLLFFBQVA4SyxLQUFvQjlLLFFBQXhCLEVBQWtDO01BQ2hDQSxRQUFRLEdBQUc4SyxNQUFNLENBQUM5SyxRQUFsQkE7TUFDQTZFLEdBQUcsR0FBRyxpQ0FBcUJpRyxNQUFyQixDQUFOakc7SUFDRCxDQUVEO0lBQ0E7SUFDQTtJQUNBN0UsUUFBUSxHQUFHQSxRQUFRLEdBQ2YscURBQXdCMkUsV0FBVyxDQUFDM0UsUUFBRCxDQUFuQyxDQURlLEdBRWZBLFFBRkpBLENBSUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBQyxLQUFLZ0wsUUFBTCxDQUFjWCxTQUFkLENBQUwsRUFBK0I7TUFDN0JOLE1BQU0sR0FBRyxjQUFUQTtJQUNEO0lBRUQsSUFBSTVFLEtBQUssR0FBRyxxREFBd0JuRixRQUF4QixDQUFaO0lBQ0EsTUFBTTtNQUFFbkMsT0FBTyxHQUFHO0lBQVosSUFBc0JaLE9BQTVCLENBRUE7SUFDQTtJQUNBLElBQUlrRCxVQUFVLEdBQUduRCxFQUFqQjtJQUVBLElBQUl1RSxJQUFKLEVBQXFDO01BQ25DcEIsVUFBVSxHQUFHLDhCQUNYLHdDQUFpQm5ELEVBQWpCLEVBQXFCZ0QsUUFEVixFQUVYeUssS0FGVyxFQUdYeEcsUUFIVyxFQUlYMkcsUUFKVyxFQUtYelQsS0FMVyxFQU1WMEksQ0FBRCxJQUFlLEtBQUtrTCxZQUFMLENBQWtCO1FBQUUvSyxRQUFRLEVBQUVIO01BQVosQ0FBbEIsRUFBbUM0SyxLQUFuQyxFQUEwQ3pLLFFBTjlDLENBQWJHO01BU0EsSUFBSUEsVUFBVSxLQUFLbkQsRUFBbkIsRUFBdUI7UUFDckIsTUFBTWlPLGFBQWEsR0FBRyxxREFDcEIsS0FBS0YsWUFBTCxDQUNFN0wsTUFBTSxDQUFDK0QsTUFBUC9ELENBQWMsRUFBZEEsRUFBa0I0TCxNQUFsQjVMLEVBQTBCO1VBQUVjLFFBQVEsRUFBRUc7UUFBWixDQUExQmpCLENBREYsRUFFRXVMLEtBRkYsRUFHRSxLQUhGLEVBSUV6SyxRQUxrQixDQUF0QixDQVFBO1FBQ0E7UUFDQSxJQUFJeUssS0FBSyxDQUFDcEUsUUFBTm9FLENBQWVRLGFBQWZSLENBQUosRUFBbUM7VUFDakN0RixLQUFLLEdBQUc4RixhQUFSOUY7VUFDQW5GLFFBQVEsR0FBR2lMLGFBQVhqTDtVQUNBOEssTUFBTSxDQUFDOUssUUFBUDhLLEdBQWtCOUssUUFBbEI4SztVQUNBakcsR0FBRyxHQUFHLGlDQUFxQmlHLE1BQXJCLENBQU5qRztRQUNEO01BQ0Y7SUFDRjtJQUNEMUUsVUFBVSxHQUFHcUUsU0FBUyxDQUFDRyxXQUFXLENBQUN4RSxVQUFELENBQVosRUFBMEIsS0FBS1ksTUFBL0IsQ0FBdEJaO0lBRUEsSUFBSSwrQkFBZWdGLEtBQWYsQ0FBSixFQUEyQjtNQUN6QixNQUFNK0YsUUFBUSxHQUFHLHdDQUFpQi9LLFVBQWpCLENBQWpCO01BQ0EsTUFBTWlGLFVBQVUsR0FBRzhGLFFBQVEsQ0FBQ2xMLFFBQTVCO01BRUEsTUFBTW1MLFVBQVUsR0FBRywrQkFBY2hHLEtBQWQsQ0FBbkI7TUFDQSxNQUFNaUcsVUFBVSxHQUFHLG1DQUFnQkQsVUFBaEIsRUFBNEIvRixVQUE1QixDQUFuQjtNQUNBLE1BQU1pRyxpQkFBaUIsR0FBR2xHLEtBQUssS0FBS0MsVUFBcEM7TUFDQSxNQUFNd0IsY0FBYyxHQUFHeUUsaUJBQWlCLEdBQ3BDbkcsYUFBYSxDQUFDQyxLQUFELEVBQVFDLFVBQVIsRUFBb0JqTyxLQUFwQixDQUR1QixHQUVuQyxFQUZMO01BSUEsSUFBSSxDQUFDaVUsVUFBRCxJQUFnQkMsaUJBQWlCLElBQUksQ0FBQ3pFLGNBQWMsQ0FBQ1YsTUFBekQsRUFBa0U7UUFDaEUsTUFBTW9GLGFBQWEsR0FBR3BNLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWWlNLFVBQVUsQ0FBQzNGLE1BQXZCdEcsRUFBK0JxTSxNQUEvQnJNLENBQ25CMEcsS0FBRCxJQUFXLENBQUN6TyxLQUFLLENBQUN5TyxLQUFELENBREcxRyxDQUF0QjtRQUlBLElBQUlvTSxhQUFhLENBQUMxVCxNQUFkMFQsR0FBdUIsQ0FBM0IsRUFBOEI7VUFDNUIsVUFBMkM7WUFDekMzVixPQUFPLENBQUNpSyxJQUFSakssQ0FDRyxHQUNDMFYsaUJBQWlCLEdBQ1osb0JBRFksR0FFWixpQ0FDTiw4QkFKRCxHQUtHLGVBQWNDLGFBQWEsQ0FBQ3JGLElBQWRxRixDQUNiLElBRGFBLENBRWIsOEJBUk4zVjtVQVVEO1VBRUQsTUFBTSxJQUFJaUosS0FBSixDQUNKLENBQUN5TSxpQkFBaUIsR0FDYiwwQkFBeUJ4RyxHQUFJLG9DQUFtQ3lHLGFBQWEsQ0FBQ3JGLElBQWRxRixDQUMvRCxJQUQrREEsQ0FFL0QsaUNBSFksR0FJYiw4QkFBNkJsRyxVQUFXLDhDQUE2Q0QsS0FBTSxLQUpoRyxJQUtHLDRDQUNDa0csaUJBQWlCLEdBQ2IsMkJBRGEsR0FFYixzQkFDTCxFQVZDLENBQU47UUFZRDtNQUNGLENBaENELE1BZ0NPLElBQUlBLGlCQUFKLEVBQXVCO1FBQzVCck8sRUFBRSxHQUFHLGlDQUNIa0MsTUFBTSxDQUFDK0QsTUFBUC9ELENBQWMsRUFBZEEsRUFBa0JnTSxRQUFsQmhNLEVBQTRCO1VBQzFCYyxRQUFRLEVBQUU0RyxjQUFjLENBQUNWLE1BREM7VUFFMUIvTyxLQUFLLEVBQUVnUCxrQkFBa0IsQ0FBQ2hQLEtBQUQsRUFBUXlQLGNBQWMsQ0FBQ2xCLE1BQXZCO1FBRkMsQ0FBNUJ4RyxDQURHLENBQUxsQztNQU1ELENBUE0sTUFPQTtRQUNMO1FBQ0FrQyxNQUFNLENBQUMrRCxNQUFQL0QsQ0FBYy9ILEtBQWQrSCxFQUFxQmtNLFVBQXJCbE07TUFDRDtJQUNGO0lBRUQ3SSxNQUFNLENBQUMwTCxNQUFQMUwsQ0FBYzBOLElBQWQxTixDQUFtQixrQkFBbkJBLEVBQXVDMkcsRUFBdkMzRztJQUVBLElBQUk7TUFDRixNQUFNbVYsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUN0QnRHLEtBRHNCLEVBRXRCbkYsUUFGc0IsRUFHdEI3SSxLQUhzQixFQUl0QjZGLEVBSnNCLEVBS3RCYSxPQUxzQixDQUF4QjtNQU9BLElBQUk7UUFBRWhCLEtBQUY7UUFBUzRCLEtBQVQ7UUFBZ0I4SyxPQUFoQjtRQUF5QkM7TUFBekIsSUFBcUNnQyxTQUF6QyxDQUVBO01BQ0EsSUFDRSxDQUFDakMsT0FBTyxJQUFJQyxPQUFaLEtBQ0EvSyxLQURBLElBRUNBLEtBQUQsQ0FBZWlOLFNBRmYsSUFHQ2pOLEtBQUQsQ0FBZWlOLFNBQWYsQ0FBeUJDLFlBSjNCLEVBS0U7UUFDQSxNQUFNQyxXQUFXLEdBQUluTixLQUFELENBQWVpTixTQUFmLENBQXlCQyxZQUE3QyxDQUVBO1FBQ0E7UUFDQTtRQUNBLElBQUlDLFdBQVcsQ0FBQ3RILFVBQVpzSCxDQUF1QixHQUF2QkEsQ0FBSixFQUFpQztVQUMvQixNQUFNQyxVQUFVLEdBQUcsd0NBQWlCRCxXQUFqQixDQUFuQjtVQUNBLEtBQUtiLFlBQUwsQ0FBa0JjLFVBQWxCLEVBQThCcEIsS0FBOUI7VUFFQSxJQUFJQSxLQUFLLENBQUNwRSxRQUFOb0UsQ0FBZW9CLFVBQVUsQ0FBQzdMLFFBQTFCeUssQ0FBSixFQUF5QztZQUN2QyxPQUFPLEtBQUtwQixNQUFMLENBQ0wsY0FESyxFQUVMdUMsV0FGSyxFQUdMQSxXQUhLLEVBSUwzTyxPQUpLLENBQVA7VUFNRDtRQUNGO1FBRUR4QixNQUFNLENBQUNtTyxRQUFQbk8sQ0FBZ0JzQixJQUFoQnRCLEdBQXVCbVEsV0FBdkJuUTtRQUNBLE9BQU8sSUFBSXFRLE9BQUosQ0FBWSxNQUFNLENBQUUsQ0FBcEIsQ0FBUDtNQUNEO01BRUR6VixNQUFNLENBQUMwTCxNQUFQMUwsQ0FBYzBOLElBQWQxTixDQUFtQixxQkFBbkJBLEVBQTBDMkcsRUFBMUMzRztNQUNBLEtBQUs4UyxXQUFMLENBQ0VZLE1BREYsRUFFRWxGLEdBRkYsRUFHRU4sU0FBUyxDQUFDdkgsRUFBRCxFQUFLLEtBQUsrRCxNQUFWLEVBQWtCLEtBQUtDLGFBQXZCLENBSFgsRUFJRS9ELE9BSkY7TUFPQSxVQUEyQztRQUN6QyxNQUFNOE8sT0FBWSxHQUFHLEtBQUt0RCxVQUFMLENBQWdCLE9BQWhCLEVBQXlCTixTQUE5QztRQUNFMU0sTUFBRCxDQUFnQnVRLElBQWhCLENBQXFCQyxhQUFyQixHQUNDRixPQUFPLENBQUN4SSxlQUFSd0ksS0FBNEJBLE9BQU8sQ0FBQ3ZJLG1CQUFwQ3VJLElBQ0EsQ0FBRVAsU0FBUyxDQUFDckQsU0FBWCxDQUE2QjVFLGVBRi9CO01BR0Y7TUFFRCxNQUFNLEtBQUs1RyxHQUFMLENBQVN3SSxLQUFULEVBQWdCbkYsUUFBaEIsRUFBMkI3SSxLQUEzQixFQUFrQ2tULFNBQWxDLEVBQTZDbUIsU0FBN0MsRUFBd0R0TyxLQUF4RCxDQUNIbkgsQ0FBRCxJQUFPO1FBQ0wsSUFBSUEsQ0FBQyxDQUFDb08sU0FBTixFQUFpQnRILEtBQUssR0FBR0EsS0FBSyxJQUFJOUcsQ0FBakI4RyxDQUFqQixLQUNLLE1BQU05RyxDQUFOO01BQ04sQ0FKRyxDQUFOO01BT0EsSUFBSThHLEtBQUosRUFBVztRQUNUeEcsTUFBTSxDQUFDMEwsTUFBUDFMLENBQWMwTixJQUFkMU4sQ0FBbUIsa0JBQW5CQSxFQUF1Q3dHLEtBQXZDeEcsRUFBOENnVSxTQUE5Q2hVO1FBQ0EsTUFBTXdHLEtBQU47TUFDRDtNQUVELElBQUkwRSxLQUFKLEVBQTJDLEVBSTFDO01BQ0RsTCxNQUFNLENBQUMwTCxNQUFQMUwsQ0FBYzBOLElBQWQxTixDQUFtQixxQkFBbkJBLEVBQTBDMkcsRUFBMUMzRztNQUVBLE9BQU8sSUFBUDtJQUNELENBQUMsUUFBT3VHLEdBQVAsRUFBWTtNQUNaLElBQUlBLEdBQUcsQ0FBQ3VILFNBQVIsRUFBbUI7UUFDakIsT0FBTyxLQUFQO01BQ0Q7TUFDRCxNQUFNdkgsR0FBTjtJQUNEO0VBQ0Y7RUFFRHVNLFdBQVcsQ0FDVFksTUFEUyxFQUVUbEYsR0FGUyxFQUdUN0gsRUFIUyxFQUlUQyxPQUEwQixHQUFHLEVBSnBCLEVBS0g7SUFDTixVQUEyQztNQUN6QyxJQUFJLE9BQU94QixNQUFNLENBQUNxTyxPQUFkLEtBQTBCLFdBQTlCLEVBQTJDO1FBQ3pDblUsT0FBTyxDQUFDa0gsS0FBUmxILENBQWUsMkNBQWZBO1FBQ0E7TUFDRDtNQUVELElBQUksT0FBTzhGLE1BQU0sQ0FBQ3FPLE9BQVByTyxDQUFlc08sTUFBZnRPLENBQVAsS0FBa0MsV0FBdEMsRUFBbUQ7UUFDakQ5RixPQUFPLENBQUNrSCxLQUFSbEgsQ0FBZSwyQkFBMEJvVSxNQUFPLG1CQUFoRHBVO1FBQ0E7TUFDRDtJQUNGO0lBRUQsSUFBSW9VLE1BQU0sS0FBSyxXQUFYQSxJQUEwQix5QkFBYS9NLEVBQTNDLEVBQStDO01BQzdDLEtBQUtpTSxRQUFMLEdBQWdCaE0sT0FBTyxDQUFDWSxPQUF4QjtNQUNBLE1BQU0sQ0FBQ2lNLE9BQVAsQ0FBZUMsTUFBZixFQUNFO1FBQ0VsRixHQURGO1FBRUU3SCxFQUZGO1FBR0VDLE9BSEY7UUFJRW1NLEdBQUcsRUFBRTtNQUpQLENBREY7TUFPRTtNQUNBO01BQ0E7TUFDQSxFQVZGLEVBV0VwTSxFQVhGO0lBYUQ7RUFDRjtFQUVELE1BQU1rUCxvQkFBTixDQUNFdFAsR0FERixFQUVFb0QsUUFGRixFQUdFN0ksS0FIRixFQUlFNkYsRUFKRixFQUtFbVAsYUFMRixFQU02QjtJQUMzQixJQUFJdlAsR0FBRyxDQUFDdUgsU0FBUixFQUFtQjtNQUNqQjtNQUNBLE1BQU12SCxHQUFOO0lBQ0Q7SUFFRCxJQUFJbUssZUFBZSxJQUFJbkssR0FBbkJtSyxJQUEwQm9GLGFBQTlCLEVBQTZDO01BQzNDOVYsTUFBTSxDQUFDMEwsTUFBUDFMLENBQWMwTixJQUFkMU4sQ0FBbUIsa0JBQW5CQSxFQUF1Q3VHLEdBQXZDdkcsRUFBNEMyRyxFQUE1QzNHLEVBRUE7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBb0YsTUFBTSxDQUFDbU8sUUFBUG5PLENBQWdCc0IsSUFBaEJ0QixHQUF1QnVCLEVBQXZCdkIsQ0FFQTtNQUNBO01BQ0EsTUFBTXlJLHNCQUFzQixFQUE1QjtJQUNEO0lBRUQsSUFBSTtNQUNGLE1BQU07UUFBRWtJLElBQUksRUFBRWpFLFNBQVI7UUFBbUJtQjtNQUFuQixJQUFtQyxNQUFNLEtBQUsrQyxjQUFMLENBQzdDLFNBRDZDLENBQS9DO01BR0EsTUFBTWIsU0FBMkIsR0FBRztRQUNsQ3JELFNBRGtDO1FBRWxDbUIsV0FGa0M7UUFHbEMxTSxHQUhrQztRQUlsQ0MsS0FBSyxFQUFFRDtNQUoyQixDQUFwQztNQU9BLElBQUk7UUFDRjRPLFNBQVMsQ0FBQy9NLEtBQVYrTSxHQUFrQixNQUFNLEtBQUtqSSxlQUFMLENBQXFCNEUsU0FBckIsRUFBZ0M7VUFDdER2TCxHQURzRDtVQUV0RG9ELFFBRnNEO1VBR3REN0k7UUFIc0QsQ0FBaEMsQ0FBeEJxVTtNQUtELENBQUMsUUFBT2MsTUFBUCxFQUFlO1FBQ2YzVyxPQUFPLENBQUNrSCxLQUFSbEgsQ0FBYyx5Q0FBZEEsRUFBeUQyVyxNQUF6RDNXO1FBQ0E2VixTQUFTLENBQUMvTSxLQUFWK00sR0FBa0IsRUFBbEJBO01BQ0Q7TUFFRCxPQUFPQSxTQUFQO0lBQ0QsQ0FBQyxRQUFPZSxZQUFQLEVBQXFCO01BQ3JCLE9BQU8sS0FBS0wsb0JBQUwsQ0FBMEJLLFlBQTFCLEVBQXdDdk0sUUFBeEMsRUFBa0Q3SSxLQUFsRCxFQUF5RDZGLEVBQXpELEVBQTZELElBQTdELENBQVA7SUFDRDtFQUNGO0VBRUQsTUFBTXlPLFlBQU4sQ0FDRXRHLEtBREYsRUFFRW5GLFFBRkYsRUFHRTdJLEtBSEYsRUFJRTZGLEVBSkYsRUFLRWEsT0FBZ0IsR0FBRyxLQUxyQixFQU02QjtJQUMzQixJQUFJO01BQ0YsTUFBTTJPLGVBQWUsR0FBRyxLQUFLL0QsVUFBTCxDQUFnQnRELEtBQWhCLENBQXhCO01BRUEsSUFBSXRILE9BQU8sSUFBSTJPLGVBQVgzTyxJQUE4QixLQUFLc0gsS0FBTCxLQUFlQSxLQUFqRCxFQUF3RDtRQUN0RCxPQUFPcUgsZUFBUDtNQUNEO01BRUQsTUFBTWhCLFNBQTJCLEdBQUdnQixlQUFlLEdBQy9DQSxlQUQrQyxHQUUvQyxNQUFNLEtBQUtILGNBQUwsQ0FBb0JsSCxLQUFwQixFQUEyQmpILElBQTNCLENBQWlDcUosR0FBRCxLQUFVO1FBQzlDWSxTQUFTLEVBQUVaLEdBQUcsQ0FBQzZFLElBRCtCO1FBRTlDOUMsV0FBVyxFQUFFL0IsR0FBRyxDQUFDK0IsV0FGNkI7UUFHOUNDLE9BQU8sRUFBRWhDLEdBQUcsQ0FBQ2tGLEdBQUpsRixDQUFRZ0MsT0FINkI7UUFJOUNDLE9BQU8sRUFBRWpDLEdBQUcsQ0FBQ2tGLEdBQUpsRixDQUFRaUM7TUFKNkIsQ0FBVixDQUFoQyxDQUZWO01BU0EsTUFBTTtRQUFFckIsU0FBRjtRQUFhb0IsT0FBYjtRQUFzQkM7TUFBdEIsSUFBa0NnQyxTQUF4QztNQUVBLFVBQTJDO1FBQ3pDLE1BQU07VUFBRWtCO1FBQUYsSUFBeUJDLG1CQUFPLENBQUMsMEJBQUQsQ0FBdEM7UUFDQSxJQUFJLENBQUNELGtCQUFrQixDQUFDdkUsU0FBRCxDQUF2QixFQUFvQztVQUNsQyxNQUFNLElBQUl2SixLQUFKLENBQ0gseURBQXdEb0IsUUFBUyxHQUQ5RCxDQUFOO1FBR0Q7TUFDRjtNQUVELElBQUk0SCxRQUFKO01BRUEsSUFBSTJCLE9BQU8sSUFBSUMsT0FBZixFQUF3QjtRQUN0QjVCLFFBQVEsR0FBRyxLQUFLSSxVQUFMLENBQWdCNEUsV0FBaEIsQ0FDVCxpQ0FBcUI7VUFBRTVNLFFBQUY7VUFBWTdJO1FBQVosQ0FBckIsQ0FEUyxFQUVUd04sV0FBVyxDQUFDM0gsRUFBRCxDQUZGLEVBR1R1TSxPQUhTLEVBSVQsS0FBS3hJLE1BSkksRUFLVCxLQUFLQyxhQUxJLENBQVg0RztNQU9EO01BRUQsTUFBTW5KLEtBQUssR0FBRyxNQUFNLEtBQUtvTyxRQUFMLENBQWdDLE1BQ2xEdEQsT0FBTyxHQUNILEtBQUt1RCxjQUFMLENBQW9CbEYsUUFBcEIsQ0FERyxHQUVINEIsT0FBTyxHQUNQLEtBQUt1RCxjQUFMLENBQW9CbkYsUUFBcEIsQ0FETyxHQUVQLEtBQUtyRSxlQUFMLENBQ0U0RSxTQURGO01BRUU7TUFDQTtRQUNFbkksUUFERjtRQUVFN0ksS0FGRjtRQUdFcVIsTUFBTSxFQUFFeEw7TUFIVixDQUhGLENBTGMsQ0FBcEI7TUFnQkF3TyxTQUFTLENBQUMvTSxLQUFWK00sR0FBa0IvTSxLQUFsQitNO01BQ0EsS0FBSy9DLFVBQUwsQ0FBZ0J0RCxLQUFoQixJQUF5QnFHLFNBQXpCO01BQ0EsT0FBT0EsU0FBUDtJQUNELENBQUMsUUFBTzVPLEdBQVAsRUFBWTtNQUNaLE9BQU8sS0FBS3NQLG9CQUFMLENBQTBCdFAsR0FBMUIsRUFBK0JvRCxRQUEvQixFQUF5QzdJLEtBQXpDLEVBQWdENkYsRUFBaEQsQ0FBUDtJQUNEO0VBQ0Y7RUFFREwsR0FBRyxDQUNEd0ksS0FEQyxFQUVEbkYsUUFGQyxFQUdEN0ksS0FIQyxFQUlENkYsRUFKQyxFQUtEN0csSUFMQyxFQU1jO0lBQ2YsS0FBS21TLFVBQUwsR0FBa0IsS0FBbEI7SUFFQSxLQUFLbkQsS0FBTCxHQUFhQSxLQUFiO0lBQ0EsS0FBS25GLFFBQUwsR0FBZ0JBLFFBQWhCO0lBQ0EsS0FBSzdJLEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUtxUixNQUFMLEdBQWN4TCxFQUFkO0lBQ0EsT0FBTyxLQUFLd04sTUFBTCxDQUFZclUsSUFBWixDQUFQO0VBQ0QsQ0FFRDs7OztFQUlBNlcsY0FBYyxDQUFDaFIsRUFBRCxFQUE2QjtJQUN6QyxLQUFLNk0sSUFBTCxHQUFZN00sRUFBWjtFQUNEO0VBRURzTyxlQUFlLENBQUN0TixFQUFELEVBQXNCO0lBQ25DLElBQUksQ0FBQyxLQUFLd0wsTUFBVixFQUFrQixPQUFPLEtBQVA7SUFDbEIsTUFBTSxDQUFDeUUsWUFBRCxFQUFlQyxPQUFmLElBQTBCLEtBQUsxRSxNQUFMLENBQVkyRSxLQUFaLENBQWtCLEdBQWxCLENBQWhDO0lBQ0EsTUFBTSxDQUFDQyxZQUFELEVBQWVDLE9BQWYsSUFBMEJyUSxFQUFFLENBQUNtUSxLQUFIblEsQ0FBUyxHQUFUQSxDQUFoQyxDQUVBO0lBQ0EsSUFBSXFRLE9BQU8sSUFBSUosWUFBWSxLQUFLRyxZQUE1QkMsSUFBNENILE9BQU8sS0FBS0csT0FBNUQsRUFBcUU7TUFDbkUsT0FBTyxJQUFQO0lBQ0QsQ0FFRDtJQUNBLElBQUlKLFlBQVksS0FBS0csWUFBckIsRUFBbUM7TUFDakMsT0FBTyxLQUFQO0lBQ0QsQ0FFRDtJQUNBO0lBQ0E7SUFDQTtJQUNBLE9BQU9GLE9BQU8sS0FBS0csT0FBbkI7RUFDRDtFQUVEOUMsWUFBWSxDQUFDdk4sRUFBRCxFQUFtQjtJQUM3QixNQUFNLEdBQUc4SixJQUFILElBQVc5SixFQUFFLENBQUNtUSxLQUFIblEsQ0FBUyxHQUFUQSxDQUFqQixDQUNBO0lBQ0EsSUFBSThKLElBQUksS0FBSyxFQUFiLEVBQWlCO01BQ2ZyTCxNQUFNLENBQUMyQyxRQUFQM0MsQ0FBZ0IsQ0FBaEJBLEVBQW1CLENBQW5CQTtNQUNBO0lBQ0QsQ0FFRDtJQUNBLE1BQU02UixJQUFJLEdBQUdqUCxRQUFRLENBQUNrUCxjQUFUbFAsQ0FBd0J5SSxJQUF4QnpJLENBQWI7SUFDQSxJQUFJaVAsSUFBSixFQUFVO01BQ1JBLElBQUksQ0FBQ0UsY0FBTEY7TUFDQTtJQUNELENBQ0Q7SUFDQTtJQUNBLE1BQU1HLE1BQU0sR0FBR3BQLFFBQVEsQ0FBQ3FQLGlCQUFUclAsQ0FBMkJ5SSxJQUEzQnpJLEVBQWlDLENBQWpDQSxDQUFmO0lBQ0EsSUFBSW9QLE1BQUosRUFBWTtNQUNWQSxNQUFNLENBQUNELGNBQVBDO0lBQ0Q7RUFDRjtFQUVEekMsUUFBUSxDQUFDeEMsTUFBRCxFQUEwQjtJQUNoQyxPQUFPLEtBQUtBLE1BQUwsS0FBZ0JBLE1BQXZCO0VBQ0Q7RUFFRHVDLFlBQVksQ0FBQ2MsVUFBRCxFQUF3QnBCLEtBQXhCLEVBQXlDa0QsYUFBYSxHQUFHLElBQXpELEVBQStEO0lBQ3pFLE1BQU07TUFBRTNOO0lBQUYsSUFBZTZMLFVBQXJCO0lBQ0EsTUFBTStCLGFBQWEsR0FBRyxxREFDcEIsOENBQW9CRCxhQUFhLEdBQUdoSixXQUFXLENBQUMzRSxRQUFELENBQWQsR0FBNEJBLFFBQTdELENBRG9CLENBQXRCO0lBSUEsSUFBSTROLGFBQWEsS0FBSyxNQUFsQkEsSUFBNEJBLGFBQWEsS0FBSyxTQUFsRCxFQUE2RDtNQUMzRCxPQUFPL0IsVUFBUDtJQUNELENBRUQ7SUFDQSxJQUFJLENBQUNwQixLQUFLLENBQUNwRSxRQUFOb0UsQ0FBZW1ELGFBQWZuRCxDQUFMLEVBQXFDO01BQ25DO01BQ0FBLEtBQUssQ0FBQ29ELElBQU5wRCxDQUFZMkIsSUFBRCxJQUFVO1FBQ25CLElBQ0UsK0JBQWVBLElBQWYsS0FDQSwrQkFBY0EsSUFBZCxFQUFvQjBCLEVBQXBCLENBQXVCQyxJQUF2QixDQUE0QkgsYUFBNUIsQ0FGRixFQUdFO1VBQ0EvQixVQUFVLENBQUM3TCxRQUFYNkwsR0FBc0I4QixhQUFhLEdBQUdqSixXQUFXLENBQUMwSCxJQUFELENBQWQsR0FBdUJBLElBQTFEUDtVQUNBLE9BQU8sSUFBUDtRQUNEO01BQ0YsQ0FSRHBCO0lBU0Q7SUFDRCxPQUFPb0IsVUFBUDtFQUNELENBRUQ7Ozs7OztFQU1BLE1BQU0vTyxRQUFOLENBQ0UrSCxHQURGLEVBRUUyRCxNQUFjLEdBQUczRCxHQUZuQixFQUdFNUgsT0FBd0IsR0FBRyxFQUg3QixFQUlpQjtJQUNmLElBQUk2TixNQUFNLEdBQUcsd0NBQWlCakcsR0FBakIsQ0FBYjtJQUVBLElBQUk7TUFBRTdFO0lBQUYsSUFBZThLLE1BQW5CO0lBRUEsTUFBTUwsS0FBSyxHQUFHLE1BQU0sS0FBS3pDLFVBQUwsQ0FBZ0IwQyxXQUFoQixFQUFwQjtJQUVBSSxNQUFNLEdBQUcsS0FBS0MsWUFBTCxDQUFrQkQsTUFBbEIsRUFBMEJMLEtBQTFCLENBQVRLO0lBRUEsSUFBSUEsTUFBTSxDQUFDOUssUUFBUDhLLEtBQW9COUssUUFBeEIsRUFBa0M7TUFDaENBLFFBQVEsR0FBRzhLLE1BQU0sQ0FBQzlLLFFBQWxCQTtNQUNBNkUsR0FBRyxHQUFHLGlDQUFxQmlHLE1BQXJCLENBQU5qRztJQUNELENBRUQ7SUFDQSxVQUEyQztNQUN6QztJQUNEO0lBRUQsTUFBTU0sS0FBSyxHQUFHLHFEQUF3Qm5GLFFBQXhCLENBQWQ7SUFDQSxNQUFNOEwsT0FBTyxDQUFDbkksR0FBUm1JLENBQVksQ0FDaEIsS0FBSzlELFVBQUwsQ0FBZ0JnRyxZQUFoQixDQUNFbkosR0FERixFQUVFMkQsTUFGRixFQUdFLEtBQUt6SCxNQUhQLEVBSUUsS0FBS0MsYUFKUCxDQURnQixFQU9oQixLQUFLZ0gsVUFBTCxDQUFnQi9LLE9BQU8sQ0FBQzZELFFBQVI3RCxHQUFtQixVQUFuQkEsR0FBZ0MsVUFBaEQsRUFBNERrSSxLQUE1RCxDQVBnQixDQUFaMkcsQ0FBTjtFQVNEO0VBRUQsTUFBTU8sY0FBTixDQUFxQmxILEtBQXJCLEVBQTREO0lBQzFELElBQUloQixTQUFTLEdBQUcsS0FBaEI7SUFDQSxNQUFNOEosTUFBTSxHQUFJLEtBQUtyRixHQUFMLEdBQVcsTUFBTTtNQUMvQnpFLFNBQVMsR0FBRyxJQUFaQTtJQUNELENBRkQ7SUFJQSxNQUFNK0osZUFBZSxHQUFHLE1BQU0sS0FBS2xHLFVBQUwsQ0FBZ0JtRyxRQUFoQixDQUF5QmhKLEtBQXpCLENBQTlCO0lBRUEsSUFBSWhCLFNBQUosRUFBZTtNQUNiLE1BQU10SCxLQUFVLEdBQUcsSUFBSStCLEtBQUosQ0FDaEIsd0NBQXVDdUcsS0FBTSxHQUQ3QixDQUFuQjtNQUdBdEksS0FBSyxDQUFDc0gsU0FBTnRILEdBQWtCLElBQWxCQTtNQUNBLE1BQU1BLEtBQU47SUFDRDtJQUVELElBQUlvUixNQUFNLEtBQUssS0FBS3JGLEdBQXBCLEVBQXlCO01BQ3ZCLEtBQUtBLEdBQUwsR0FBVyxJQUFYO0lBQ0Q7SUFFRCxPQUFPc0YsZUFBUDtFQUNEO0VBRURyQixRQUFRLENBQUl1QixFQUFKLEVBQXNDO0lBQzVDLElBQUlqSyxTQUFTLEdBQUcsS0FBaEI7SUFDQSxNQUFNOEosTUFBTSxHQUFHLE1BQU07TUFDbkI5SixTQUFTLEdBQUcsSUFBWkE7SUFDRCxDQUZEO0lBR0EsS0FBS3lFLEdBQUwsR0FBV3FGLE1BQVg7SUFDQSxPQUFPRyxFQUFFLEdBQUdsUSxJQUFMa1EsQ0FBV2pZLElBQUQsSUFBVTtNQUN6QixJQUFJOFgsTUFBTSxLQUFLLEtBQUtyRixHQUFwQixFQUF5QjtRQUN2QixLQUFLQSxHQUFMLEdBQVcsSUFBWDtNQUNEO01BRUQsSUFBSXpFLFNBQUosRUFBZTtRQUNiLE1BQU12SCxHQUFRLEdBQUcsSUFBSWdDLEtBQUosQ0FBVSxpQ0FBVixDQUFqQjtRQUNBaEMsR0FBRyxDQUFDdUgsU0FBSnZILEdBQWdCLElBQWhCQTtRQUNBLE1BQU1BLEdBQU47TUFDRDtNQUVELE9BQU96RyxJQUFQO0lBQ0QsQ0FaTWlZLENBQVA7RUFhRDtFQUVEdEIsY0FBYyxDQUFDbEYsUUFBRCxFQUFvQztJQUNoRCxNQUFNO01BQUU3SyxJQUFJLEVBQUVzUjtJQUFSLElBQXFCLElBQUlySixHQUFKLENBQVE0QyxRQUFSLEVBQWtCbk0sTUFBTSxDQUFDbU8sUUFBUG5PLENBQWdCc0IsSUFBbEMsQ0FBM0I7SUFDQSxJQUFJd0UsS0FBSixFQUFpRSxFQUVoRTtJQUNELE9BQU9vRyxhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLbUIsS0FBaEIsQ0FBYnBCLENBQW9DekosSUFBcEN5SixDQUEwQ3hSLElBQUQsSUFBVTtNQUN4RCxLQUFLdVMsR0FBTCxDQUFTMkYsUUFBVCxJQUFxQmxZLElBQXJCO01BQ0EsT0FBT0EsSUFBUDtJQUNELENBSE13UixDQUFQO0VBSUQ7RUFFRG9GLGNBQWMsQ0FBQ25GLFFBQUQsRUFBb0M7SUFDaEQsT0FBT0QsYUFBYSxDQUFDQyxRQUFELEVBQVcsS0FBS21CLEtBQWhCLENBQXBCO0VBQ0Q7RUFFRHhGLGVBQWUsQ0FDYjRFLFNBRGEsRUFFYm1HLEdBRmEsRUFHQztJQUNkLE1BQU07TUFBRW5HLFNBQVMsRUFBRUY7SUFBYixJQUFxQixLQUFLUSxVQUFMLENBQWdCLE9BQWhCLENBQTNCO0lBQ0EsTUFBTThGLE9BQU8sR0FBRyxLQUFLekYsUUFBTCxDQUFjYixHQUFkLENBQWhCO0lBQ0FxRyxHQUFHLENBQUNDLE9BQUpELEdBQWNDLE9BQWREO0lBQ0EsT0FBTyxnQ0FBNENyRyxHQUE1QyxFQUFpRDtNQUN0RHNHLE9BRHNEO01BRXREcEcsU0FGc0Q7TUFHdERuUixNQUFNLEVBQUUsSUFIOEM7TUFJdERzWDtJQUpzRCxDQUFqRCxDQUFQO0VBTUQ7RUFFRGxFLGtCQUFrQixDQUFDcE4sRUFBRCxFQUFtQjtJQUNuQyxJQUFJLEtBQUs0TCxHQUFULEVBQWM7TUFDWnZTLE1BQU0sQ0FBQzBMLE1BQVAxTCxDQUFjME4sSUFBZDFOLENBQW1CLGtCQUFuQkEsRUFBdUM2TixzQkFBc0IsRUFBN0Q3TixFQUFpRTJHLEVBQWpFM0c7TUFDQSxLQUFLdVMsR0FBTDtNQUNBLEtBQUtBLEdBQUwsR0FBVyxJQUFYO0lBQ0Q7RUFDRjtFQUVENEIsTUFBTSxDQUFDclUsSUFBRCxFQUF3QztJQUM1QyxPQUFPLEtBQUt3UyxHQUFMLENBQVN4UyxJQUFULEVBQWUsS0FBS3NTLFVBQUwsQ0FBZ0IsT0FBaEIsRUFBeUJOLFNBQXhDLENBQVA7RUFDRDtBQTEzQitDOztBQUE3QjlSLE0sQ0EyQlowTCxNLEdBQXNCLG9COzs7Ozs7Ozs7Ozs7Ozs7dUNDN1cvQjtBQUNlLFNBQVNpRSxvQkFBVCxDQUE4QndJLE9BQTlCLEVBQXVEO0VBQ3BFLE9BQU9BLE9BQU8sQ0FBQy9YLE9BQVIrWCxDQUFnQixRQUFoQkEsRUFBMkJDLElBQUQsSUFBa0JDLGtCQUFrQixDQUFDRCxJQUFELENBQTlERCxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3FCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLE1BQU1HLGdCQUFnQixHQUFHLHdCQUF6QjtBQUVPLFNBQVNDLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQXNDO0VBQzNDLElBQUk7SUFBRUMsSUFBRjtJQUFRQztFQUFSLElBQXFCRixNQUF6QjtFQUNBLElBQUlHLFFBQVEsR0FBR0gsTUFBTSxDQUFDRyxRQUFQSCxJQUFtQixFQUFsQztFQUNBLElBQUk3TyxRQUFRLEdBQUc2TyxNQUFNLENBQUM3TyxRQUFQNk8sSUFBbUIsRUFBbEM7RUFDQSxJQUFJL0gsSUFBSSxHQUFHK0gsTUFBTSxDQUFDL0gsSUFBUCtILElBQWUsRUFBMUI7RUFDQSxJQUFJMVgsS0FBSyxHQUFHMFgsTUFBTSxDQUFDMVgsS0FBUDBYLElBQWdCLEVBQTVCO0VBQ0EsSUFBSUksSUFBb0IsR0FBRyxLQUEzQjtFQUVBSCxJQUFJLEdBQUdBLElBQUksR0FBR0osa0JBQWtCLENBQUNJLElBQUQsQ0FBbEJKLENBQXlCalksT0FBekJpWSxDQUFpQyxNQUFqQ0EsRUFBeUMsR0FBekNBLElBQWdELEdBQW5ELEdBQXlELEVBQXBFSTtFQUVBLElBQUlELE1BQU0sQ0FBQ0ksSUFBWCxFQUFpQjtJQUNmQSxJQUFJLEdBQUdILElBQUksR0FBR0QsTUFBTSxDQUFDSSxJQUFyQkE7RUFDRCxDQUZELE1BRU8sSUFBSUYsUUFBSixFQUFjO0lBQ25CRSxJQUFJLEdBQUdILElBQUksSUFBSSxDQUFDQyxRQUFRLENBQUM5USxPQUFUOFEsQ0FBaUIsR0FBakJBLENBQUQsR0FBMEIsSUFBR0EsUUFBUyxHQUF0QyxHQUEyQ0EsUUFBL0MsQ0FBWEU7SUFDQSxJQUFJSixNQUFNLENBQUNLLElBQVgsRUFBaUI7TUFDZkQsSUFBSSxJQUFJLE1BQU1KLE1BQU0sQ0FBQ0ssSUFBckJEO0lBQ0Q7RUFDRjtFQUVELElBQUk5WCxLQUFLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUE5QixFQUF3QztJQUN0Q0EsS0FBSyxHQUFHZ1ksTUFBTSxDQUFDQyxXQUFXLENBQUNDLHNCQUFaRCxDQUFtQ2pZLEtBQW5DaVksQ0FBRCxDQUFkalk7RUFDRDtFQUVELElBQUltWSxNQUFNLEdBQUdULE1BQU0sQ0FBQ1MsTUFBUFQsSUFBa0IxWCxLQUFLLElBQUssSUFBR0EsS0FBTSxFQUFyQzBYLElBQTJDLEVBQXhEO0VBRUEsSUFBSUcsUUFBUSxJQUFJQSxRQUFRLENBQUNPLE1BQVRQLENBQWdCLENBQUMsQ0FBakJBLE1BQXdCLEdBQXhDLEVBQTZDQSxRQUFRLElBQUksR0FBWkE7RUFFN0MsSUFDRUgsTUFBTSxDQUFDVyxPQUFQWCxJQUNDLENBQUMsQ0FBQ0csUUFBRCxJQUFhTCxnQkFBZ0IsQ0FBQ1osSUFBakJZLENBQXNCSyxRQUF0QkwsQ0FBZCxLQUFrRE0sSUFBSSxLQUFLLEtBRjlELEVBR0U7SUFDQUEsSUFBSSxHQUFHLFFBQVFBLElBQUksSUFBSSxFQUFoQixDQUFQQTtJQUNBLElBQUlqUCxRQUFRLElBQUlBLFFBQVEsQ0FBQyxDQUFELENBQVJBLEtBQWdCLEdBQWhDLEVBQXFDQSxRQUFRLEdBQUcsTUFBTUEsUUFBakJBO0VBQ3RDLENBTkQsTUFNTyxJQUFJLENBQUNpUCxJQUFMLEVBQVc7SUFDaEJBLElBQUksR0FBRyxFQUFQQTtFQUNEO0VBRUQsSUFBSW5JLElBQUksSUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBSkEsS0FBWSxHQUF4QixFQUE2QkEsSUFBSSxHQUFHLE1BQU1BLElBQWJBO0VBQzdCLElBQUl3SSxNQUFNLElBQUlBLE1BQU0sQ0FBQyxDQUFELENBQU5BLEtBQWMsR0FBNUIsRUFBaUNBLE1BQU0sR0FBRyxNQUFNQSxNQUFmQTtFQUVqQ3RQLFFBQVEsR0FBR0EsUUFBUSxDQUFDdkosT0FBVHVKLENBQWlCLE9BQWpCQSxFQUEwQjBPLGtCQUExQjFPLENBQVhBO0VBQ0FzUCxNQUFNLEdBQUdBLE1BQU0sQ0FBQzdZLE9BQVA2WSxDQUFlLEdBQWZBLEVBQW9CLEtBQXBCQSxDQUFUQTtFQUVBLE9BQVEsR0FBRU4sUUFBUyxHQUFFQyxJQUFLLEdBQUVqUCxRQUFTLEdBQUVzUCxNQUFPLEdBQUV4SSxJQUFLLEVBQXJEO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3dDQ3hFRDtBQUNBLE1BQU0ySSxVQUFVLEdBQUcsc0JBQW5CO0FBRU8sU0FBU0MsY0FBVCxDQUF3QnZLLEtBQXhCLEVBQWdEO0VBQ3JELE9BQU9zSyxVQUFVLENBQUMxQixJQUFYMEIsQ0FBZ0J0SyxLQUFoQnNLLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUVBLE1BQU1FLFVBQVUsR0FBRyxJQUFJM0ssR0FBSixDQUNqQixPQUFnQyxVQUFoQyxHQUE2QyxTQUQ1QixDQUFuQixDQUlBOzs7Ozs7QUFNTyxTQUFTNEssZ0JBQVQsQ0FBMEIvSyxHQUExQixFQUF1QzRCLElBQXZDLEVBQXNEO0VBQzNELE1BQU1vSixZQUFZLEdBQUdwSixJQUFJLEdBQUcsSUFBSXpCLEdBQUosQ0FBUXlCLElBQVIsRUFBY2tKLFVBQWQsQ0FBSCxHQUErQkEsVUFBeEQ7RUFDQSxNQUFNO0lBQ0ozUCxRQURJO0lBRUo2RyxZQUZJO0lBR0p5SSxNQUhJO0lBSUp4SSxJQUpJO0lBS0ovSixJQUxJO0lBTUprSSxNQU5JO0lBT0orSjtFQVBJLElBUUYsSUFBSWhLLEdBQUosQ0FBUUgsR0FBUixFQUFhZ0wsWUFBYixDQVJKO0VBU0EsSUFDRTVLLE1BQU0sS0FBSzBLLFVBQVUsQ0FBQzFLLE1BQXRCQSxJQUNDK0osUUFBUSxLQUFLLE9BQWJBLElBQXdCQSxRQUFRLEtBQUssUUFGeEMsRUFHRTtJQUNBLE1BQU0sSUFBSXBRLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0VBQ0Q7RUFDRCxPQUFPO0lBQ0xvQixRQURLO0lBRUw3SSxLQUFLLEVBQUUseUNBQXVCMFAsWUFBdkIsQ0FGRjtJQUdMeUksTUFISztJQUlMeEksSUFKSztJQUtML0osSUFBSSxFQUFFQSxJQUFJLENBQUNzRSxLQUFMdEUsQ0FBVzRTLFVBQVUsQ0FBQzFLLE1BQVgwSyxDQUFrQi9YLE1BQTdCbUY7RUFMRCxDQUFQO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTyxNQUFNK1MsY0FDYyxHQUFHO0VBQzVCQyxTQUFTLEVBQUUsS0FEaUI7RUFFNUJDLFNBQVMsRUFBRTtBQUZpQixDQUR2Qjs7QUFNQSxNQUFNQyx5QkFDYyxtQ0FDdEJILGNBRHlCO0VBRTVCSSxNQUFNLEVBQUU7QUFGb0IsRUFEdkI7O2VBTVEsQ0FBQ0MsV0FBVyxHQUFHLEtBQWYsS0FBeUI7RUFDdEMsT0FBUWhQLElBQUQsSUFBa0I7SUFDdkIsTUFBTWhDLElBQXdCLEdBQUcsRUFBakM7SUFDQSxNQUFNaVIsWUFBWSxHQUFHQyxZQUFZLENBQUNBLFlBQWJBLENBQ25CbFAsSUFEbUJrUCxFQUVuQmxSLElBRm1Ca1IsRUFHbkJGLFdBQVcsR0FBR0YseUJBQUgsR0FBK0JILGNBSHZCTyxDQUFyQjtJQUtBLE1BQU1DLE9BQU8sR0FBR0QsWUFBWSxDQUFDRSxnQkFBYkYsQ0FBOEJELFlBQTlCQyxFQUE0Q2xSLElBQTVDa1IsQ0FBaEI7SUFFQSxPQUFPLENBQUNyUSxRQUFELEVBQXNDMEYsTUFBdEMsS0FBdUQ7TUFDNUQsTUFBTTZCLEdBQUcsR0FBR3ZILFFBQVEsSUFBSSxJQUFaQSxHQUFtQixLQUFuQkEsR0FBMkJzUSxPQUFPLENBQUN0USxRQUFELENBQTlDO01BQ0EsSUFBSSxDQUFDdUgsR0FBTCxFQUFVO1FBQ1IsT0FBTyxLQUFQO01BQ0Q7TUFFRCxJQUFJNEksV0FBSixFQUFpQjtRQUNmLEtBQUssTUFBTXRSLEdBQVgsSUFBa0JNLElBQWxCLEVBQXdCO1VBQ3RCO1VBQ0E7VUFDQSxJQUFJLE9BQU9OLEdBQUcsQ0FBQ3RKLElBQVgsS0FBb0IsUUFBeEIsRUFBa0M7WUFDaEMsT0FBUWdTLEdBQUcsQ0FBQzdCLE1BQUwsQ0FBb0I3RyxHQUFHLENBQUN0SixJQUF4QixDQUFQO1VBQ0Q7UUFDRjtNQUNGO01BRUQsdUNBQVltUSxNQUFMLEdBQWdCNkIsR0FBRyxDQUFDN0IsTUFBM0I7SUFDRCxDQWpCRDtFQWtCRCxDQTNCRDtBQTRCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZSxTQUFTOEssa0JBQVQsQ0FDYjVFLFdBRGEsRUFFYmxHLE1BRmEsRUFHYnZPLEtBSGEsRUFJYnNaLG1CQUphLEVBS2J4TSxRQUxhLEVBTWI7RUFDQSxJQUFJeU0saUJBS21DLEdBQUcsRUFMMUM7RUFPQSxJQUFJOUUsV0FBVyxDQUFDdEgsVUFBWnNILENBQXVCLEdBQXZCQSxDQUFKLEVBQWlDO0lBQy9COEUsaUJBQWlCLEdBQUcsd0NBQWlCOUUsV0FBakIsQ0FBcEI4RTtFQUNELENBRkQsTUFFTztJQUNMLE1BQU07TUFDSjFRLFFBREk7TUFFSjZHLFlBRkk7TUFHSkMsSUFISTtNQUlKaUksUUFKSTtNQUtKRyxJQUxJO01BTUpGLFFBTkk7TUFPSk0sTUFQSTtNQVFKdlM7SUFSSSxJQVNGLElBQUlpSSxHQUFKLENBQVE0RyxXQUFSLENBVEo7SUFXQThFLGlCQUFpQixHQUFHO01BQ2xCMVEsUUFEa0I7TUFFbEI3SSxLQUFLLEVBQUUseUNBQXVCMFAsWUFBdkIsQ0FGVztNQUdsQkMsSUFIa0I7TUFJbEJrSSxRQUprQjtNQUtsQkQsUUFMa0I7TUFNbEJHLElBTmtCO01BT2xCSSxNQVBrQjtNQVFsQnZTO0lBUmtCLENBQXBCMlQ7RUFVRDtFQUVELE1BQU1DLFNBQVMsR0FBR0QsaUJBQWlCLENBQUN2WixLQUFwQztFQUNBLE1BQU15WixRQUFRLEdBQUksR0FBRUYsaUJBQWlCLENBQUMxUSxRQUFVLEdBQzlDMFEsaUJBQWlCLENBQUM1SixJQUFsQjRKLElBQTBCLEVBQzNCLEVBRkQ7RUFHQSxNQUFNRyxpQkFBcUMsR0FBRyxFQUE5QztFQUNBUixZQUFZLENBQUNBLFlBQWJBLENBQTBCTyxRQUExQlAsRUFBb0NRLGlCQUFwQ1I7RUFFQSxNQUFNUyxjQUFjLEdBQUdELGlCQUFpQixDQUFDemIsR0FBbEJ5YixDQUF1QmhTLEdBQUQsSUFBU0EsR0FBRyxDQUFDdEosSUFBbkNzYixDQUF2QjtFQUVBLElBQUlFLG1CQUFtQixHQUFHLFlBQVksQ0FBQ0MsT0FBYixDQUN4QkosUUFEd0I7RUFFeEI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7SUFBRUssUUFBUSxFQUFFO0VBQVosQ0FSd0IsQ0FBMUI7RUFVQSxJQUFJQyxNQUFKLENBRUE7RUFDQSxLQUFLLE1BQU0sQ0FBQ3JTLEdBQUQsRUFBTXNTLFVBQU4sQ0FBWCxJQUFnQ2pTLE1BQU0sQ0FBQ3RELE9BQVBzRCxDQUFleVIsU0FBZnpSLENBQWhDLEVBQTJEO0lBQ3pELElBQUk1SixLQUFLLEdBQUc0TixLQUFLLENBQUNDLE9BQU5ELENBQWNpTyxVQUFkak8sSUFBNEJpTyxVQUFVLENBQUMsQ0FBRCxDQUF0Q2pPLEdBQTRDaU8sVUFBeEQ7SUFDQSxJQUFJN2IsS0FBSixFQUFXO01BQ1Q7TUFDQTtNQUNBQSxLQUFLLEdBQUksSUFBR0EsS0FBTSxFQUFsQkE7TUFDQSxNQUFNOGIsYUFBYSxHQUFHZixZQUFZLENBQUNXLE9BQWJYLENBQXFCL2EsS0FBckIrYSxFQUE0QjtRQUFFWSxRQUFRLEVBQUU7TUFBWixDQUE1QlosQ0FBdEI7TUFDQS9hLEtBQUssR0FBRzhiLGFBQWEsQ0FBQzFMLE1BQUQsQ0FBYjBMLENBQXNCN0IsTUFBdEI2QixDQUE2QixDQUE3QkEsQ0FBUjliO0lBQ0Q7SUFDRHFiLFNBQVMsQ0FBQzlSLEdBQUQsQ0FBVDhSLEdBQWlCcmIsS0FBakJxYjtFQUNELENBRUQ7RUFDQTtFQUNBLE1BQU1VLFNBQVMsR0FBR25TLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWXdHLE1BQVp4RyxDQUFsQjtFQUVBLElBQ0V1UixtQkFBbUIsSUFDbkIsQ0FBQ1ksU0FBUyxDQUFDeEQsSUFBVndELENBQWdCeFMsR0FBRCxJQUFTaVMsY0FBYyxDQUFDekssUUFBZnlLLENBQXdCalMsR0FBeEJpUyxDQUF4Qk8sQ0FGSCxFQUdFO0lBQ0EsS0FBSyxNQUFNeFMsR0FBWCxJQUFrQndTLFNBQWxCLEVBQTZCO01BQzNCLElBQUksRUFBRXhTLEdBQUcsSUFBSThSLFNBQVQsQ0FBSixFQUF5QjtRQUN2QkEsU0FBUyxDQUFDOVIsR0FBRCxDQUFUOFIsR0FBaUJqTCxNQUFNLENBQUM3RyxHQUFELENBQXZCOFI7TUFDRDtJQUNGO0VBQ0Y7RUFFRCxNQUFNVyxpQkFBaUIsR0FBRzFGLFdBQVcsQ0FBQ3RILFVBQVpzSCxDQUF1QixHQUF2QkEsS0FBK0IzSCxRQUF6RDtFQUVBLElBQUk7SUFDRmlOLE1BQU0sR0FBSSxHQUFFSSxpQkFBaUIsR0FBR3JOLFFBQUgsR0FBYyxFQUFHLEdBQUU4TSxtQkFBbUIsQ0FDakVyTCxNQURpRSxDQUVqRSxFQUZGd0w7SUFJQSxNQUFNLENBQUNsUixRQUFELEVBQVc4RyxJQUFYLElBQW1Cb0ssTUFBTSxDQUFDL0QsS0FBUCtELENBQWEsR0FBYkEsQ0FBekI7SUFDQVIsaUJBQWlCLENBQUMxUSxRQUFsQjBRLEdBQTZCMVEsUUFBN0IwUTtJQUNBQSxpQkFBaUIsQ0FBQzVKLElBQWxCNEosR0FBMEIsR0FBRTVKLElBQUksR0FBRyxHQUFILEdBQVMsRUFBRyxHQUFFQSxJQUFJLElBQUksRUFBRyxFQUF6RDRKO0lBQ0EsT0FBT0EsaUJBQWlCLENBQUNwQixNQUF6QjtFQUNELENBQUMsUUFBTzFTLEdBQVAsRUFBWTtJQUNaLElBQUlBLEdBQUcsQ0FBQzRGLE9BQUo1RixDQUFZMlUsS0FBWjNVLENBQWtCLDhDQUFsQkEsQ0FBSixFQUF1RTtNQUNyRSxNQUFNLElBQUlnQyxLQUFKLENBQ0gsd0tBREcsQ0FBTjtJQUdEO0lBQ0QsTUFBTWhDLEdBQU47RUFDRCxDQUVEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E4VCxpQkFBaUIsQ0FBQ3ZaLEtBQWxCdVosbUNBQ0t2WixLQURxQixHQUVyQnVaLGlCQUFpQixDQUFDdlosS0FGRyxDQUExQnVaO0VBS0EsT0FBTztJQUNMUSxNQURLO0lBRUxSO0VBRkssQ0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ITSxTQUFTYyxzQkFBVCxDQUNMM0ssWUFESyxFQUVXO0VBQ2hCLE1BQU0xUCxLQUFxQixHQUFHLEVBQTlCO0VBQ0EwUCxZQUFZLENBQUNoTCxPQUFiZ0wsQ0FBcUIsQ0FBQ3ZSLEtBQUQsRUFBUXVKLEdBQVIsS0FBZ0I7SUFDbkMsSUFBSSxPQUFPMUgsS0FBSyxDQUFDMEgsR0FBRCxDQUFaLEtBQXNCLFdBQTFCLEVBQXVDO01BQ3JDMUgsS0FBSyxDQUFDMEgsR0FBRCxDQUFMMUgsR0FBYTdCLEtBQWI2QjtJQUNELENBRkQsTUFFTyxJQUFJK0wsS0FBSyxDQUFDQyxPQUFORCxDQUFjL0wsS0FBSyxDQUFDMEgsR0FBRCxDQUFuQnFFLENBQUosRUFBK0I7TUFDcEM7TUFBRS9MLEtBQUssQ0FBQzBILEdBQUQsQ0FBTixDQUF5QnZJLElBQXpCLENBQThCaEIsS0FBOUI7SUFDRixDQUZNLE1BRUE7TUFDTDZCLEtBQUssQ0FBQzBILEdBQUQsQ0FBTDFILEdBQWEsQ0FBQ0EsS0FBSyxDQUFDMEgsR0FBRCxDQUFOLEVBQXVCdkosS0FBdkIsQ0FBYjZCO0lBQ0Q7RUFDRixDQVJEMFA7RUFTQSxPQUFPMVAsS0FBUDtBQUNEO0FBRUQsU0FBU3NhLHNCQUFULENBQWdDN0wsS0FBaEMsRUFBdUQ7RUFDckQsSUFDRSxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQ0MsT0FBT0EsS0FBUCxLQUFpQixRQUFqQixJQUE2QixDQUFDOEwsS0FBSyxDQUFDOUwsS0FBRCxDQURwQyxJQUVBLE9BQU9BLEtBQVAsS0FBaUIsU0FIbkIsRUFJRTtJQUNBLE9BQU91SixNQUFNLENBQUN2SixLQUFELENBQWI7RUFDRCxDQU5ELE1BTU87SUFDTCxPQUFPLEVBQVA7RUFDRDtBQUNGO0FBRU0sU0FBU3lKLHNCQUFULENBQ0xzQyxRQURLLEVBRVk7RUFDakIsTUFBTXpMLE1BQU0sR0FBRyxJQUFJMEwsZUFBSixFQUFmO0VBQ0ExUyxNQUFNLENBQUN0RCxPQUFQc0QsQ0FBZXlTLFFBQWZ6UyxFQUF5QnJELE9BQXpCcUQsQ0FBaUMsQ0FBQyxDQUFDTCxHQUFELEVBQU12SixLQUFOLENBQUQsS0FBa0I7SUFDakQsSUFBSTROLEtBQUssQ0FBQ0MsT0FBTkQsQ0FBYzVOLEtBQWQ0TixDQUFKLEVBQTBCO01BQ3hCNU4sS0FBSyxDQUFDdUcsT0FBTnZHLENBQWVrRixJQUFELElBQVUwTCxNQUFNLENBQUMyTCxNQUFQM0wsQ0FBY3JILEdBQWRxSCxFQUFtQnVMLHNCQUFzQixDQUFDalgsSUFBRCxDQUF6QzBMLENBQXhCNVE7SUFDRCxDQUZELE1BRU87TUFDTDRRLE1BQU0sQ0FBQ3ZKLEdBQVB1SixDQUFXckgsR0FBWHFILEVBQWdCdUwsc0JBQXNCLENBQUNuYyxLQUFELENBQXRDNFE7SUFDRDtFQUNGLENBTkRoSDtFQU9BLE9BQU9nSCxNQUFQO0FBQ0Q7QUFFTSxTQUFTakQsTUFBVCxDQUNMak4sTUFESyxFQUVMLEdBQUc4YixnQkFGRSxFQUdZO0VBQ2pCQSxnQkFBZ0IsQ0FBQ2pXLE9BQWpCaVcsQ0FBMEJqTCxZQUFELElBQWtCO0lBQ3pDM0QsS0FBSyxDQUFDNk8sSUFBTjdPLENBQVcyRCxZQUFZLENBQUMxSCxJQUFiMEgsRUFBWDNELEVBQWdDckgsT0FBaENxSCxDQUF5Q3JFLEdBQUQsSUFBUzdJLE1BQU0sQ0FBQ3FHLE1BQVByRyxDQUFjNkksR0FBZDdJLENBQWpEa047SUFDQTJELFlBQVksQ0FBQ2hMLE9BQWJnTCxDQUFxQixDQUFDdlIsS0FBRCxFQUFRdUosR0FBUixLQUFnQjdJLE1BQU0sQ0FBQzZiLE1BQVA3YixDQUFjNkksR0FBZDdJLEVBQW1CVixLQUFuQlUsQ0FBckM2UTtFQUNELENBSERpTDtFQUlBLE9BQU85YixNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BERDtBQUNBO0FBRUE7Ozs7OztBQUVBLE1BQU1nYyxrQkFBa0IsR0FBRyx3QkFBVSxJQUFWLENBQTNCO0FBRWUsU0FBU0MsZUFBVCxDQUNiekosTUFEYSxFQUViaUMsS0FGYSxFQUdieEcsUUFIYSxFQUliMkcsUUFKYSxFQUtielQsS0FMYSxFQU1ibVAsV0FOYSxFQU9iO0VBQ0EsSUFBSSxDQUFDbUUsS0FBSyxDQUFDcEUsUUFBTm9FLENBQWVqQyxNQUFmaUMsQ0FBTCxFQUE2QjtJQUMzQixLQUFLLE1BQU15SCxPQUFYLElBQXNCdEgsUUFBdEIsRUFBZ0M7TUFDOUIsTUFBTTBGLE9BQU8sR0FBRzBCLGtCQUFrQixDQUFDRSxPQUFPLENBQUNDLE1BQVQsQ0FBbEM7TUFDQSxNQUFNek0sTUFBTSxHQUFHNEssT0FBTyxDQUFDOUgsTUFBRCxDQUF0QjtNQUVBLElBQUk5QyxNQUFKLEVBQVk7UUFDVixJQUFJLENBQUN3TSxPQUFPLENBQUN0RyxXQUFiLEVBQTBCO1VBQ3hCO1VBQ0E7UUFDRDtRQUNELE1BQU13RyxPQUFPLEdBQUcsaUNBQ2RGLE9BQU8sQ0FBQ3RHLFdBRE0sRUFFZGxHLE1BRmMsRUFHZHZPLEtBSGMsRUFJZCxJQUpjLEVBS2QrYSxPQUFPLENBQUNqTyxRQUFSaU8sS0FBcUIsS0FBckJBLEdBQTZCLEVBQTdCQSxHQUFrQ2pPLFFBTHBCLENBQWhCO1FBT0F1RSxNQUFNLEdBQUc0SixPQUFPLENBQUMxQixpQkFBUjBCLENBQTBCcFMsUUFBbkN3STtRQUNBdEosTUFBTSxDQUFDK0QsTUFBUC9ELENBQWMvSCxLQUFkK0gsRUFBcUJrVCxPQUFPLENBQUMxQixpQkFBUjBCLENBQTBCamIsS0FBL0MrSDtRQUVBLElBQUl1TCxLQUFLLENBQUNwRSxRQUFOb0UsQ0FBZSxxREFBd0JqQyxNQUF4QixDQUFmaUMsQ0FBSixFQUFxRDtVQUNuRDtVQUNBO1VBQ0E7UUFDRCxDQUVEO1FBQ0EsTUFBTXZLLFlBQVksR0FBR29HLFdBQVcsQ0FBQ2tDLE1BQUQsQ0FBaEM7UUFFQSxJQUFJdEksWUFBWSxLQUFLc0ksTUFBakJ0SSxJQUEyQnVLLEtBQUssQ0FBQ3BFLFFBQU5vRSxDQUFldkssWUFBZnVLLENBQS9CLEVBQTZEO1VBQzNEO1FBQ0Q7TUFDRjtJQUNGO0VBQ0Y7RUFDRCxPQUFPakMsTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRE0sU0FBUzZKLGVBQVQsQ0FBeUJsSCxVQUF6QixFQUF1RTtFQUM1RSxNQUFNO0lBQUUyQyxFQUFGO0lBQU10STtFQUFOLElBQWlCMkYsVUFBdkI7RUFDQSxPQUFRbkwsUUFBRCxJQUF5QztJQUM5QyxNQUFNb0wsVUFBVSxHQUFHMEMsRUFBRSxDQUFDd0UsSUFBSHhFLENBQVE5TixRQUFSOE4sQ0FBbkI7SUFDQSxJQUFJLENBQUMxQyxVQUFMLEVBQWlCO01BQ2YsT0FBTyxLQUFQO0lBQ0Q7SUFFRCxNQUFNbUgsTUFBTSxHQUFJM00sS0FBRCxJQUFtQjtNQUNoQyxJQUFJO1FBQ0YsT0FBTzRNLGtCQUFrQixDQUFDNU0sS0FBRCxDQUF6QjtNQUNELENBQUMsUUFBT3hHLENBQVAsRUFBVTtRQUNWLE1BQU14QyxHQUE4QixHQUFHLElBQUlnQyxLQUFKLENBQ3JDLHdCQURxQyxDQUF2QztRQUdBaEMsR0FBRyxDQUFDNlYsSUFBSjdWLEdBQVcsZUFBWEE7UUFDQSxNQUFNQSxHQUFOO01BQ0Q7SUFDRixDQVZEO0lBV0EsTUFBTThJLE1BQWtELEdBQUcsRUFBM0Q7SUFFQXhHLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWXNHLE1BQVp0RyxFQUFvQnJELE9BQXBCcUQsQ0FBNkJ3VCxRQUFELElBQXNCO01BQ2hELE1BQU1DLENBQUMsR0FBR25OLE1BQU0sQ0FBQ2tOLFFBQUQsQ0FBaEI7TUFDQSxNQUFNRSxDQUFDLEdBQUd4SCxVQUFVLENBQUN1SCxDQUFDLENBQUNFLEdBQUgsQ0FBcEI7TUFDQSxJQUFJRCxDQUFDLEtBQUt2WixTQUFWLEVBQXFCO1FBQ25CcU0sTUFBTSxDQUFDZ04sUUFBRCxDQUFOaE4sR0FBbUIsQ0FBQ2tOLENBQUMsQ0FBQzNVLE9BQUYyVSxDQUFVLEdBQVZBLENBQUQsR0FDZkEsQ0FBQyxDQUFDekYsS0FBRnlGLENBQVEsR0FBUkEsRUFBYXhkLEdBQWJ3ZCxDQUFrQjlXLEtBQUQsSUFBV3lXLE1BQU0sQ0FBQ3pXLEtBQUQsQ0FBbEM4VyxDQURlLEdBRWZELENBQUMsQ0FBQzlNLE1BQUY4TSxHQUNBLENBQUNKLE1BQU0sQ0FBQ0ssQ0FBRCxDQUFQLENBREFELEdBRUFKLE1BQU0sQ0FBQ0ssQ0FBRCxDQUpWbE47TUFLRDtJQUNGLENBVkR4RztJQVdBLE9BQU93RyxNQUFQO0VBQ0QsQ0EvQkQ7QUFnQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3NDQzlCRDtBQUNBO0FBQ0EsU0FBU29OLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQWtDO0VBQ2hDLE9BQU9BLEdBQUcsQ0FBQ3RjLE9BQUpzYyxDQUFZLHNCQUFaQSxFQUFvQyxNQUFwQ0EsQ0FBUDtBQUNEO0FBRUQsU0FBU0MsY0FBVCxDQUF3QnBOLEtBQXhCLEVBQXVDO0VBQ3JDLE1BQU1FLFFBQVEsR0FBR0YsS0FBSyxDQUFDdEIsVUFBTnNCLENBQWlCLEdBQWpCQSxLQUF5QkEsS0FBSyxDQUFDeEUsUUFBTndFLENBQWUsR0FBZkEsQ0FBMUM7RUFDQSxJQUFJRSxRQUFKLEVBQWM7SUFDWkYsS0FBSyxHQUFHQSxLQUFLLENBQUN2RSxLQUFOdUUsQ0FBWSxDQUFaQSxFQUFlLENBQUMsQ0FBaEJBLENBQVJBO0VBQ0Q7RUFDRCxNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ3RCLFVBQU5zQixDQUFpQixLQUFqQkEsQ0FBZjtFQUNBLElBQUlDLE1BQUosRUFBWTtJQUNWRCxLQUFLLEdBQUdBLEtBQUssQ0FBQ3ZFLEtBQU51RSxDQUFZLENBQVpBLENBQVJBO0VBQ0Q7RUFDRCxPQUFPO0lBQUUvRyxHQUFHLEVBQUUrRyxLQUFQO0lBQWNDLE1BQWQ7SUFBc0JDO0VBQXRCLENBQVA7QUFDRDtBQUVNLFNBQVNtTixhQUFULENBQ0xDLGVBREssRUFPTDtFQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDRCxlQUFlLENBQUN6YyxPQUFoQnljLENBQXdCLEtBQXhCQSxFQUErQixFQUEvQkEsS0FBc0MsR0FBdkMsRUFDZDdSLEtBRGMsQ0FDUixDQURRLEVBRWQ4TCxLQUZjLENBRVIsR0FGUSxDQUFqQjtFQUlBLE1BQU0zSCxNQUFzQyxHQUFHLEVBQS9DO0VBQ0EsSUFBSTROLFVBQVUsR0FBRyxDQUFqQjtFQUNBLE1BQU1DLGtCQUFrQixHQUFHRixRQUFRLENBQ2hDL2QsR0FEd0IrZCxDQUNuQjNFLE9BQUQsSUFBYTtJQUNoQixJQUFJQSxPQUFPLENBQUNsSyxVQUFSa0ssQ0FBbUIsR0FBbkJBLEtBQTJCQSxPQUFPLENBQUNwTixRQUFSb04sQ0FBaUIsR0FBakJBLENBQS9CLEVBQXNEO01BQ3BELE1BQU07UUFBRTNQLEdBQUY7UUFBT2lILFFBQVA7UUFBaUJEO01BQWpCLElBQTRCbU4sY0FBYyxDQUFDeEUsT0FBTyxDQUFDbk4sS0FBUm1OLENBQWMsQ0FBZEEsRUFBaUIsQ0FBQyxDQUFsQkEsQ0FBRCxDQUFoRDtNQUNBaEosTUFBTSxDQUFDM0csR0FBRCxDQUFOMkcsR0FBYztRQUFFcU4sR0FBRyxFQUFFTyxVQUFVLEVBQWpCO1FBQXFCdk4sTUFBckI7UUFBNkJDO01BQTdCLENBQWROO01BQ0EsT0FBT0ssTUFBTSxHQUFJQyxRQUFRLEdBQUcsYUFBSCxHQUFtQixRQUEvQixHQUEyQyxXQUF4RDtJQUNELENBSkQsTUFJTztNQUNMLE9BQVEsSUFBR2dOLFdBQVcsQ0FBQ3RFLE9BQUQsQ0FBVSxFQUFoQztJQUNEO0VBQ0YsQ0FUd0IyRSxFQVV4QmxOLElBVndCa04sQ0FVbkIsRUFWbUJBLENBQTNCLENBWUE7RUFDQTtFQUNBLFVBQW1DO0lBQ2pDLElBQUlHLGdCQUFnQixHQUFHLEVBQXZCO0lBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsQ0FBekIsQ0FFQTtJQUNBLE1BQU1DLGVBQWUsR0FBRyxNQUFNO01BQzVCLElBQUlDLFFBQVEsR0FBRyxFQUFmO01BRUEsS0FBSyxJQUFJOWIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRiLGtCQUFwQixFQUF3QzViLENBQUMsRUFBekMsRUFBNkM7UUFDM0M4YixRQUFRLElBQUl0RSxNQUFNLENBQUN1RSxZQUFQdkUsQ0FBb0JtRSxnQkFBcEJuRSxDQUFac0U7UUFDQUgsZ0JBQWdCO1FBRWhCLElBQUlBLGdCQUFnQixHQUFHLEdBQXZCLEVBQTRCO1VBQzFCQyxrQkFBa0I7VUFDbEJELGdCQUFnQixHQUFHLEVBQW5CQTtRQUNEO01BQ0Y7TUFDRCxPQUFPRyxRQUFQO0lBQ0QsQ0FiRDtJQWVBLE1BQU1FLFNBQXNDLEdBQUcsRUFBL0M7SUFFQSxJQUFJQyx1QkFBdUIsR0FBR1QsUUFBUSxDQUNuQy9kLEdBRDJCK2QsQ0FDdEIzRSxPQUFELElBQWE7TUFDaEIsSUFBSUEsT0FBTyxDQUFDbEssVUFBUmtLLENBQW1CLEdBQW5CQSxLQUEyQkEsT0FBTyxDQUFDcE4sUUFBUm9OLENBQWlCLEdBQWpCQSxDQUEvQixFQUFzRDtRQUNwRCxNQUFNO1VBQUUzUCxHQUFGO1VBQU9pSCxRQUFQO1VBQWlCRDtRQUFqQixJQUE0Qm1OLGNBQWMsQ0FBQ3hFLE9BQU8sQ0FBQ25OLEtBQVJtTixDQUFjLENBQWRBLEVBQWlCLENBQUMsQ0FBbEJBLENBQUQsQ0FBaEQsQ0FDQTtRQUNBO1FBQ0EsSUFBSXFGLFVBQVUsR0FBR2hWLEdBQUcsQ0FBQ3BJLE9BQUpvSSxDQUFZLEtBQVpBLEVBQW1CLEVBQW5CQSxDQUFqQjtRQUNBLElBQUlpVixVQUFVLEdBQUcsS0FBakIsQ0FFQTtRQUNBO1FBQ0EsSUFBSUQsVUFBVSxDQUFDamMsTUFBWGljLEtBQXNCLENBQXRCQSxJQUEyQkEsVUFBVSxDQUFDamMsTUFBWGljLEdBQW9CLEVBQW5ELEVBQXVEO1VBQ3JEQyxVQUFVLEdBQUcsSUFBYkE7UUFDRDtRQUNELElBQUksQ0FBQ3BDLEtBQUssQ0FBQ3FDLFFBQVEsQ0FBQ0YsVUFBVSxDQUFDdEUsTUFBWHNFLENBQWtCLENBQWxCQSxFQUFxQixDQUFyQkEsQ0FBRCxDQUFULENBQVYsRUFBK0M7VUFDN0NDLFVBQVUsR0FBRyxJQUFiQTtRQUNEO1FBRUQsSUFBSUEsVUFBSixFQUFnQjtVQUNkRCxVQUFVLEdBQUdMLGVBQWUsRUFBNUJLO1FBQ0Q7UUFFREYsU0FBUyxDQUFDRSxVQUFELENBQVRGLEdBQXdCOVUsR0FBeEI4VTtRQUNBLE9BQU85TixNQUFNLEdBQ1RDLFFBQVEsR0FDTCxVQUFTK04sVUFBVyxTQURmLEdBRUwsT0FBTUEsVUFBVyxPQUhYLEdBSVIsT0FBTUEsVUFBVyxVQUp0QjtNQUtELENBMUJELE1BMEJPO1FBQ0wsT0FBUSxJQUFHZixXQUFXLENBQUN0RSxPQUFELENBQVUsRUFBaEM7TUFDRDtJQUNGLENBL0IyQjJFLEVBZ0MzQmxOLElBaEMyQmtOLENBZ0N0QixFQWhDc0JBLENBQTlCO0lBa0NBLE9BQU87TUFDTHJGLEVBQUUsRUFBRSxJQUFJa0csTUFBSixDQUFZLElBQUdYLGtCQUFtQixTQUFsQyxDQURDO01BRUw3TixNQUZLO01BR0xtTyxTQUhLO01BSUxNLFVBQVUsRUFBRyxJQUFHTCx1QkFBd0I7SUFKbkMsQ0FBUDtFQU1EO0VBRUQsT0FBTztJQUNMOUYsRUFBRSxFQUFFLElBQUlrRyxNQUFKLENBQVksSUFBR1gsa0JBQW1CLFNBQWxDLENBREM7SUFFTDdOO0VBRkssQ0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhELDZJQXlRQTs7O0FBR08sU0FBUzBPLFFBQVQsQ0FDTDlGLEVBREssRUFFRjtFQUNILElBQUkrRixJQUFJLEdBQUcsS0FBWDtFQUNBLElBQUlqTyxNQUFKO0VBRUEsT0FBUSxDQUFDLEdBQUd2SCxJQUFKLEtBQW9CO0lBQzFCLElBQUksQ0FBQ3dWLElBQUwsRUFBVztNQUNUQSxJQUFJLEdBQUcsSUFBUEE7TUFDQWpPLE1BQU0sR0FBR2tJLEVBQUUsQ0FBQyxHQUFHelAsSUFBSixDQUFYdUg7SUFDRDtJQUNELE9BQU9BLE1BQVA7RUFDRCxDQU5EO0FBT0Q7QUFFTSxTQUFTa08saUJBQVQsR0FBNkI7RUFDbEMsTUFBTTtJQUFFcEYsUUFBRjtJQUFZRCxRQUFaO0lBQXNCRztFQUF0QixJQUErQnpULE1BQU0sQ0FBQ21PLFFBQTVDO0VBQ0EsT0FBUSxHQUFFb0YsUUFBUyxLQUFJRCxRQUFTLEdBQUVHLElBQUksR0FBRyxNQUFNQSxJQUFULEdBQWdCLEVBQUcsRUFBekQ7QUFDRDtBQUVNLFNBQVNtRixNQUFULEdBQWtCO0VBQ3ZCLE1BQU07SUFBRXRYO0VBQUYsSUFBV3RCLE1BQU0sQ0FBQ21PLFFBQXhCO0VBQ0EsTUFBTTNFLE1BQU0sR0FBR21QLGlCQUFpQixFQUFoQztFQUNBLE9BQU9yWCxJQUFJLENBQUN1RixTQUFMdkYsQ0FBZWtJLE1BQU0sQ0FBQ3JOLE1BQXRCbUYsQ0FBUDtBQUNEO0FBRU0sU0FBU3VYLGNBQVQsQ0FBMkJuTSxTQUEzQixFQUF3RDtFQUM3RCxPQUFPLE9BQU9BLFNBQVAsS0FBcUIsUUFBckIsR0FDSEEsU0FERyxHQUVIQSxTQUFTLENBQUMxRSxXQUFWMEUsSUFBeUJBLFNBQVMsQ0FBQzVTLElBQW5DNFMsSUFBMkMsU0FGL0M7QUFHRDtBQUVNLFNBQVNvTSxTQUFULENBQW1CaE4sR0FBbkIsRUFBd0M7RUFDN0MsT0FBT0EsR0FBRyxDQUFDaU4sUUFBSmpOLElBQWdCQSxHQUFHLENBQUNrTixXQUEzQjtBQUNEO0FBRU0sZUFBZUMsbUJBQWYsQ0FJTHpNLEdBSkssRUFJNkJxRyxHQUo3QixFQUlrRDtFQUN2RCxVQUEyQztJQUFBO0lBQ3pDLHNCQUFJckcsR0FBRyxDQUFDME0sU0FBUixxQkFBSTFNLGVBQWUxRSxlQUFuQixFQUFvQztNQUNsQyxNQUFNZixPQUFPLEdBQUksSUFBRzhSLGNBQWMsQ0FDaENyTSxHQURnQyxDQUVoQywwSkFGRjtNQUdBLE1BQU0sSUFBSXJKLEtBQUosQ0FBVTRELE9BQVYsQ0FBTjtJQUNEO0VBQ0YsQ0FDRDtFQUNBLE1BQU0rRSxHQUFHLEdBQUcrRyxHQUFHLENBQUMvRyxHQUFKK0csSUFBWUEsR0FBRyxDQUFDQSxHQUFKQSxJQUFXQSxHQUFHLENBQUNBLEdBQUpBLENBQVEvRyxHQUEzQztFQUVBLElBQUksQ0FBQ1UsR0FBRyxDQUFDMUUsZUFBVCxFQUEwQjtJQUN4QixJQUFJK0ssR0FBRyxDQUFDQSxHQUFKQSxJQUFXQSxHQUFHLENBQUNuRyxTQUFuQixFQUE4QjtNQUM1QjtNQUNBLE9BQU87UUFDTHVELFNBQVMsRUFBRSxNQUFNZ0osbUJBQW1CLENBQUNwRyxHQUFHLENBQUNuRyxTQUFMLEVBQWdCbUcsR0FBRyxDQUFDQSxHQUFwQjtNQUQvQixDQUFQO0lBR0Q7SUFDRCxPQUFPLEVBQVA7RUFDRDtFQUVELE1BQU03UCxLQUFLLEdBQUcsTUFBTXdKLEdBQUcsQ0FBQzFFLGVBQUowRSxDQUFvQnFHLEdBQXBCckcsQ0FBcEI7RUFFQSxJQUFJVixHQUFHLElBQUlnTixTQUFTLENBQUNoTixHQUFELENBQXBCLEVBQTJCO0lBQ3pCLE9BQU85SSxLQUFQO0VBQ0Q7RUFFRCxJQUFJLENBQUNBLEtBQUwsRUFBWTtJQUNWLE1BQU0rRCxPQUFPLEdBQUksSUFBRzhSLGNBQWMsQ0FDaENyTSxHQURnQyxDQUVoQywrREFBOER4SixLQUFNLFlBRnRFO0lBR0EsTUFBTSxJQUFJRyxLQUFKLENBQVU0RCxPQUFWLENBQU47RUFDRDtFQUVELFVBQTJDO0lBQ3pDLElBQUl0RCxNQUFNLENBQUNDLElBQVBELENBQVlULEtBQVpTLEVBQW1CdEgsTUFBbkJzSCxLQUE4QixDQUE5QkEsSUFBbUMsQ0FBQ29QLEdBQUcsQ0FBQ0EsR0FBNUMsRUFBaUQ7TUFDL0MzWSxPQUFPLENBQUNpSyxJQUFSakssQ0FDRyxHQUFFMmUsY0FBYyxDQUNmck0sR0FEZSxDQUVmLDhLQUhKdFM7SUFLRDtFQUNGO0VBRUQsT0FBTzhJLEtBQVA7QUFDRDtBQUVNLE1BQU1tVyxhQUFhLEdBQUcsQ0FDM0IsTUFEMkIsRUFFM0IsTUFGMkIsRUFHM0IsTUFIMkIsRUFJM0IsVUFKMkIsRUFLM0IsTUFMMkIsRUFNM0IsTUFOMkIsRUFPM0IsVUFQMkIsRUFRM0IsTUFSMkIsRUFTM0IsVUFUMkIsRUFVM0IsT0FWMkIsRUFXM0IsUUFYMkIsRUFZM0IsU0FaMkIsQ0FBdEI7O0FBZUEsU0FBU0Msb0JBQVQsQ0FBOEJoUSxHQUE5QixFQUFzRDtFQUMzRCxVQUE0QztJQUMxQyxJQUFJQSxHQUFHLEtBQUssSUFBUkEsSUFBZ0IsT0FBT0EsR0FBUCxLQUFlLFFBQW5DLEVBQTZDO01BQzNDM0YsTUFBTSxDQUFDQyxJQUFQRCxDQUFZMkYsR0FBWjNGLEVBQWlCckQsT0FBakJxRCxDQUEwQkwsR0FBRCxJQUFTO1FBQ2hDLElBQUkrVixhQUFhLENBQUMzVyxPQUFkMlcsQ0FBc0IvVixHQUF0QitWLE1BQStCLENBQUMsQ0FBcEMsRUFBdUM7VUFDckNqZixPQUFPLENBQUNpSyxJQUFSakssQ0FDRyxxREFBb0RrSixHQUFJLEVBRDNEbEo7UUFHRDtNQUNGLENBTkR1SjtJQU9EO0VBQ0Y7RUFFRCxPQUFPLDBCQUFVMkYsR0FBVixDQUFQO0FBQ0Q7QUFFTSxNQUFNaVEsRUFBRSxHQUFHLE9BQU81SyxXQUFQLEtBQXVCLFdBQWxDOztBQUNBLE1BQU1ELEVBQUUsR0FDYjZLLEVBQUUsSUFDRixPQUFPNUssV0FBVyxDQUFDQyxJQUFuQixLQUE0QixVQUQ1QjJLLElBRUEsT0FBTzVLLFdBQVcsQ0FBQzZLLE9BQW5CLEtBQStCLFVBSDFCOzs7Ozs7Ozs7Ozs7O0FDeFlNLHdCQUF3QiwwQ0FBMEMsZ0RBQWdELGdDQUFnQyxnQ0FBZ0MsbUNBQW1DLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHlCQUF5QixVQUFVO0FBQ3BWLGlEOzs7Ozs7Ozs7OztBQ0RBLGlCQUFpQixtQkFBTyxDQUFDLG1FQUFvQjs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDJDO0FBQ0Y7QUFDUjtBQUNRO0FBQ0M7QUFDUztBQUNnQztBQUNwQjtBQUNRO0FBQ0Y7QUFDUztBQUM3QjtBQUN2QjtBQUNPO0FBQ3dDO0FBQ0U7QUFDcEM7QUFFdkMsTUFBTUMsT0FBTyxHQUFHbmUseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxxTUFzQnpCO0FBRUQsTUFBTW1lLElBQUksR0FBRyxNQUFNO0VBRWYsTUFBTWplLE1BQU0sR0FBR0MsNkRBQVMsRUFBRTtFQUMxQixNQUFNO0lBQUNDO0VBQUUsQ0FBQyxHQUFHRixNQUFNLENBQUNHLEtBQUs7RUFFekIsTUFBTTtJQUFDRSxRQUFRO0lBQUV6QztFQUFFLENBQUMsR0FBR0UsK0RBQVcsQ0FBRUMsS0FBSyxJQUFLQSxLQUFLLENBQUNDLElBQUksQ0FBQztFQUd6RHNDLHVEQUFTLENBQUMsTUFBTTtJQUNoQjtJQUNJLElBQUdKLEVBQUUsSUFBSXRDLEVBQUUsQ0FBQ3NDLEVBQUUsRUFBQztNQUNYYixrREFBTSxDQUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3ZCO0lBQ0EsSUFBRyxFQUFFN0IsRUFBRSxJQUFJQSxFQUFFLENBQUNzQyxFQUFFLENBQUMsRUFBRTtNQUNmZ2UsS0FBSyxDQUFDLGlCQUFpQixDQUFDO01BQ3hCN2Usa0RBQU0sQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQjtFQUdKLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixPQUNJLE1BQUMsNkRBQVM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNOLE1BQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1I7SUFBSyxTQUFTLEVBQUMsTUFBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3JCO0lBQVMsU0FBUyxFQUFDLFVBQVU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUM3QixNQUFDLHdDQUFHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUtlLFFBQVEsQ0FBQ1YsUUFBUSxlQUFnQixDQUFNLEVBQ2pELE1BQUMsd0NBQUc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNKO0lBQUssU0FBUyxFQUFDLE1BQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNyQixNQUFDLHlDQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRCxNQUFDLDZDQUFRO0lBQ1QsU0FBUyxFQUFDLFdBQVc7SUFDckIsY0FBYyxFQUFFSSxvRkFBbUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUNqQyxDQUVDLENBQ0QsRUFDTjtJQUFLLFNBQVMsRUFBQyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDakIsTUFBQywwRUFBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDWixNQUFDLDZFQUFXO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNmLE1BQUMsOEVBQVk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQ2QsQ0FDQSxFQUNOLE1BQUMsd0NBQUc7SUFBQyxTQUFTLEVBQUMsTUFBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRWpCLE1BQUMsZ0ZBQWE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ2pCLE1BQUMsaUZBQWM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQ2hCLENBQ0ksQ0FDSixDQUNJLENBQ0Y7QUFFcEIsQ0FBQztBQUVNLE1BQU1vZSxrQkFBa0IsR0FBR0MsOERBQU8sQ0FBQ0Qsa0JBQWtCLENBQUMsTUFBTUUsT0FBTyxJQUFLO0VBRTNFLE1BQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxHQUFHLEdBQUdGLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDQyxPQUFPLENBQUNGLE1BQU0sR0FBRyxFQUFFO0VBQzVERyw2Q0FBSyxDQUFDQyxRQUFRLENBQUNGLE9BQU8sQ0FBQ0csTUFBTSxHQUFHLEVBQUU7RUFDbEMsSUFBR04sT0FBTyxDQUFDRSxHQUFHLElBQUlELE1BQU0sRUFBQztJQUNyQkcsNkNBQUssQ0FBQ0MsUUFBUSxDQUFDRixPQUFPLENBQUNHLE1BQU0sR0FBR0wsTUFBTTtFQUMxQztFQUNBRCxPQUFPLENBQUNPLEtBQUssQ0FBQ2xoQixRQUFRLENBQUM7SUFDbkJ1QixJQUFJLEVBQUU0ZixnRUFBaUI7SUFDdkIxZixJQUFJLEVBQUVrZixPQUFPLENBQUMzUCxNQUFNLENBQUN4TztFQUN6QixDQUFDLENBQUM7RUFFRm1lLE9BQU8sQ0FBQ08sS0FBSyxDQUFDbGhCLFFBQVEsQ0FBQztJQUNuQnVCLElBQUksRUFBRTZmLG1FQUFvQkE7RUFDOUIsQ0FBQyxDQUFDO0VBRUhULE9BQU8sQ0FBQ08sS0FBSyxDQUFDbGhCLFFBQVEsQ0FBQ3FoQiwrQ0FBRyxDQUFDO0VBQzNCLE1BQU1WLE9BQU8sQ0FBQ08sS0FBSyxDQUFDSSxRQUFRLENBQUNDLFNBQVMsRUFBRTtBQUN6QyxDQUFDLENBQUM7QUFHV2hCLG1FQUFJLEU7Ozs7Ozs7Ozs7OztBQ3RIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDbkI7QUFDQTtBQUNjO0FBRXhDLE1BQU1pQixXQUFXLEdBQUcsQ0FBQ25oQixLQUFLLEVBQUVvaEIsTUFBTSxLQUFLO0VBQ25DLFFBQU9BLE1BQU0sQ0FBQ2xnQixJQUFJO0lBQ2QsS0FBS21nQiwwREFBTztNQUNSemdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRXVnQixNQUFNLENBQUM7TUFDOUIsT0FBT0EsTUFBTSxDQUFDRSxPQUFPO0lBQ3pCO01BQVM7UUFDTCxNQUFNQyxlQUFlLEdBQUdDLDZEQUFlLENBQUM7VUFDcEN2aEIsbURBQUk7VUFDSkUsbURBQUlBO1FBQ1IsQ0FBQyxDQUFDO1FBQ0YsT0FBT29oQixlQUFlLENBQUN2aEIsS0FBSyxFQUFFb2hCLE1BQU0sQ0FBQztNQUN6QztFQUFDO0FBRVQsQ0FBQztBQUdjRCwwRUFBVyxFOzs7Ozs7Ozs7Ozs7QUNyQjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFc0M7QUFFL0IsTUFBTU0sWUFBWSxHQUFHO0VBQzFCQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxVQUFVLEVBQUUsRUFBRTtFQUNkQyxVQUFVLEVBQUUsSUFBSTtFQUNoQjFoQixRQUFRLEVBQUUsSUFBSTtFQUNkMmhCLGVBQWUsRUFBRSxJQUFJO0VBQ3JCQyxZQUFZLEVBQUUsSUFBSTtFQUNsQkMsbUJBQW1CLEVBQUUsS0FBSztFQUMxQkMsZ0JBQWdCLEVBQUUsS0FBSztFQUN2QkMsaUJBQWlCLEVBQUUsSUFBSTtFQUN2QkMsZUFBZSxFQUFFLEtBQUs7RUFDdEJDLFlBQVksRUFBRSxLQUFLO0VBQ25CQyxhQUFhLEVBQUUsSUFBSTtFQUNuQkMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLGVBQWUsRUFBRSxJQUFJO0VBQ3JCQyxnQkFBZ0IsRUFBRSxLQUFLO0VBQ3ZCQyxhQUFhLEVBQUUsS0FBSztFQUNwQkMsY0FBYyxFQUFFLElBQUk7RUFDcEJDLGVBQWUsRUFBRSxLQUFLO0VBQ3RCQyxZQUFZLEVBQUUsS0FBSztFQUNuQkMsYUFBYSxFQUFFLElBQUk7RUFDbkJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxXQUFXLEVBQUUsS0FBSztFQUNsQkMsWUFBWSxFQUFFLElBQUk7RUFDbEJDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLGVBQWUsRUFBRSxJQUFJO0VBQ3JCQyxvQkFBb0IsRUFBRSxLQUFLO0VBQzNCQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCQyxrQkFBa0IsRUFBRSxJQUFJO0VBQ3hCQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsZUFBZSxFQUFFLElBQUk7RUFDckJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxXQUFXLEVBQUUsS0FBSztFQUNsQkMsWUFBWSxFQUFFLElBQUk7RUFDbEJDLDRCQUE0QixFQUFFLEtBQUs7RUFDbkNDLDBCQUEwQixFQUFFLElBQUk7RUFDaENDLHlCQUF5QixFQUFFLEtBQUs7RUFDaENDLHdCQUF3QixFQUFFLEtBQUs7RUFDL0JDLHNCQUFzQixFQUFFLElBQUk7RUFDNUJDLHFCQUFxQixFQUFFLEtBQUs7RUFDNUJDLGdCQUFnQixFQUFFLEtBQUs7RUFDdkJDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxhQUFhLEVBQUUsS0FBSztFQUNwQkMsb0JBQW9CLEVBQUUsS0FBSztFQUMzQkMsa0JBQWtCLEVBQUUsSUFBSTtFQUN4QkMsaUJBQWlCLEVBQUU7QUFDckIsQ0FBQztBQUdNLE1BQU1DLGtCQUFrQixHQUFHLG9CQUFvQjtBQUMvQyxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBb0I7QUFDL0MsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQW9CO0FBRS9DLE1BQU1DLHFCQUFxQixHQUFHLHVCQUF1QjtBQUNyRCxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBdUI7QUFDckQsTUFBTUMscUJBQXFCLEdBQUcsdUJBQXVCO0FBRXJELE1BQU1DLDBCQUEwQixHQUFHLDRCQUE0QjtBQUMvRCxNQUFNQywwQkFBMEIsR0FBRyw0QkFBNEI7QUFDL0QsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQTRCO0FBRS9ELE1BQU1DLGdDQUFnQyxHQUFFLGtDQUFrQztBQUMxRSxNQUFNQyxnQ0FBZ0MsR0FBRSxrQ0FBa0M7QUFDMUUsTUFBTUMsZ0NBQWdDLEdBQUUsa0NBQWtDO0FBRTFFLE1BQU1DLGlCQUFpQixHQUFHLG1CQUFtQjtBQUM3QyxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBbUI7QUFDN0MsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQW1CO0FBRTdDLE1BQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUNqRCxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFDakQsTUFBTUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBRWpELE1BQU1DLGtCQUFrQixHQUFHLG9CQUFvQjtBQUMvQyxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBb0I7QUFDL0MsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQW9CO0FBRS9DLE1BQU1DLHNCQUFzQixHQUFHLHdCQUF3QjtBQUN2RCxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBd0I7QUFDdkQsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQXdCO0FBRXZELE1BQU1DLGlCQUFpQixHQUFHLG1CQUFtQjtBQUM3QyxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBbUI7QUFDN0MsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQW1CO0FBRTdDLE1BQU1DLHVCQUF1QixHQUFHLHlCQUF5QjtBQUN6RCxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBeUI7QUFDekQsTUFBTUMsdUJBQXVCLEdBQUcseUJBQXlCO0FBRXpELE1BQU1DLDBCQUEwQixHQUFHLDRCQUE0QjtBQUMvRCxNQUFNQywwQkFBMEIsR0FBRyw0QkFBNEI7QUFDL0QsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQTRCO0FBRS9ELE1BQU1DLGdCQUFnQixHQUFHLGtCQUFrQjtBQUMzQyxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBa0I7QUFDM0MsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQWtCO0FBRTNDLE1BQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUNqRCxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFDakQsTUFBTUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBRWpELE1BQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUNqRCxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFDakQsTUFBTUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBRWpELE1BQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUNqRCxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFDakQsTUFBTUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBRWpELE1BQU1DLHNCQUFzQixHQUFHLHdCQUF3QjtBQUN2RCxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBd0I7QUFDdkQsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQXdCO0FBRXZELE1BQU1DLDJCQUEyQixHQUFHLDZCQUE2QjtBQUNqRSxNQUFNQywyQkFBMkIsR0FBRyw2QkFBNkI7QUFDakUsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQTZCO0FBRWpFLE1BQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFDekMsTUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxNQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBRXpDLE1BQU05bUIsc0JBQXNCLEdBQUcsd0JBQXdCO0FBQ3ZELE1BQU0rbUIsc0JBQXNCLEdBQUcsd0JBQXdCO0FBQ3ZELE1BQU1DLHNCQUFzQixHQUFHLHdCQUF3QjtBQUV2RCxNQUFNOWhCLHVCQUF1QixHQUFHLHlCQUF5QjtBQUN6RCxNQUFNK2hCLHVCQUF1QixHQUFHLHlCQUF5QjtBQUN6RCxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBeUI7QUFFekQsTUFBTUMsWUFBWSxHQUFHLGNBQWM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFNBQVMsR0FBSW5uQixJQUFJLEtBQU07RUFDM0JlLEVBQUUsRUFBRWYsSUFBSSxDQUFDZSxFQUFFO0VBQ1g0RCxPQUFPLEVBQUUzRSxJQUFJLENBQUMyRSxPQUFPO0VBQ3JCbWEsSUFBSSxFQUFFO0lBQ0ovZCxFQUFFLEVBQUUsQ0FBQztJQUNMUCxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0RzQixNQUFNLEVBQUUsRUFBRTtFQUNWc2xCLFFBQVEsRUFBRTtBQUNaLENBQUMsQ0FBQztBQUVGLE1BQU1DLFlBQVksR0FBSXJuQixJQUFJLEtBQU07RUFDOUJlLEVBQUUsRUFBRXVtQixPQUFPLENBQUNDLFFBQVEsRUFBRTtFQUN0QjVpQixPQUFPLEVBQUUzRSxJQUFJO0VBQ2I4ZSxJQUFJLEVBQUU7SUFDSi9kLEVBQUUsRUFBRSxDQUFDO0lBQ0xQLFFBQVEsRUFBRTtFQUNaO0FBQ0YsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxNQUFNZ25CLE9BQU8sR0FBRyxDQUFDNW9CLEtBQUssR0FBR3loQixZQUFZLEVBQUVMLE1BQU0sS0FBS3lILDZEQUFPLENBQUM3b0IsS0FBSyxFQUFHOG9CLEtBQUssSUFBSztFQUMxRSxRQUFRMUgsTUFBTSxDQUFDbGdCLElBQUk7SUFDakIsS0FBS29uQixZQUFZO01BQ2ZRLEtBQUssQ0FBQ25ILFVBQVUsR0FBR21ILEtBQUssQ0FBQ25ILFVBQVUsQ0FBQ25MLE1BQU0sQ0FBQyxDQUFDdVMsQ0FBQyxFQUFFbm1CLENBQUMsS0FBS0EsQ0FBQyxLQUFLd2UsTUFBTSxDQUFDaGdCLElBQUksQ0FBQztNQUN2RTtJQUNBLEtBQUsybUIsZUFBZTtNQUNwQmUsS0FBSyxDQUFDakYsY0FBYyxHQUFHLElBQUk7TUFDM0JpRixLQUFLLENBQUNoRixXQUFXLEdBQUcsS0FBSztNQUN6QmdGLEtBQUssQ0FBQy9FLFlBQVksR0FBRyxJQUFJO01BQ3pCO0lBQ0YsS0FBS2lFLGVBQWU7TUFDbEJjLEtBQUssQ0FBQ2pGLGNBQWMsR0FBRyxLQUFLO01BQzVCaUYsS0FBSyxDQUFDaEYsV0FBVyxHQUFHLElBQUk7TUFDeEJnRixLQUFLLENBQUNwSCxTQUFTLENBQUNzSCxPQUFPLENBQUM1SCxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUN0QztJQUNGLEtBQUs2bUIsZUFBZTtNQUNsQmEsS0FBSyxDQUFDakYsY0FBYyxHQUFHLEtBQUs7TUFDNUJpRixLQUFLLENBQUMvRSxZQUFZLEdBQUczQyxNQUFNLENBQUN0WixLQUFLO01BQ2pDO0lBRUYsS0FBS2lkLHFCQUFxQjtJQUN4QixLQUFLRywwQkFBMEI7TUFDL0I0RCxLQUFLLENBQUMvRyxtQkFBbUIsR0FBRyxJQUFJO01BQ2hDK0csS0FBSyxDQUFDOUcsZ0JBQWdCLEdBQUcsS0FBSztNQUM5QjhHLEtBQUssQ0FBQzdHLGlCQUFpQixHQUFHLElBQUk7TUFDOUI7SUFFQSxLQUFLK0MscUJBQXFCO0lBQ3hCLEtBQUtHLDBCQUEwQjtNQUNqQztRQUNFdmtCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRXVnQixNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO1FBQ3pDMG5CLEtBQUssQ0FBQ25ILFVBQVUsR0FBR1AsTUFBTSxDQUFDaGdCLElBQUk7UUFDOUIwbkIsS0FBSyxDQUFDL0csbUJBQW1CLEdBQUcsS0FBSztRQUNqQytHLEtBQUssQ0FBQzlHLGdCQUFnQixHQUFHLElBQUk7UUFDN0I7TUFDRjtJQUNGLEtBQUtpRCxxQkFBcUI7SUFDeEIsS0FBS0csMEJBQTBCO01BQy9CMEQsS0FBSyxDQUFDL0csbUJBQW1CLEdBQUcsS0FBSztNQUNqQytHLEtBQUssQ0FBQzdHLGlCQUFpQixHQUFHYixNQUFNLENBQUN0WixLQUFLO01BQ3RDO0lBRUYsS0FBSzBkLGlCQUFpQjtNQUNwQnNELEtBQUssQ0FBQzVHLGVBQWUsR0FBRyxJQUFJO01BQzVCNEcsS0FBSyxDQUFDM0csWUFBWSxHQUFHLEtBQUs7TUFDMUIyRyxLQUFLLENBQUMxRyxhQUFhLEdBQUcsSUFBSTtNQUMxQjtJQUNGLEtBQUtxRCxpQkFBaUI7TUFBQztRQUNyQixNQUFNdGxCLElBQUksR0FBRzJvQixLQUFLLENBQUNsSCxVQUFVO1FBQzdCemhCLElBQUksQ0FBQzhvQixNQUFNLENBQUMxbkIsSUFBSSxDQUFDO1VBQUNZLEVBQUUsRUFBRWlmLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM4bkI7UUFBTSxDQUFDLENBQUM7UUFDMUNKLEtBQUssQ0FBQzVHLGVBQWUsR0FBRyxLQUFLO1FBQzdCNEcsS0FBSyxDQUFDM0csWUFBWSxHQUFHLElBQUk7UUFDekI7TUFDRjtJQUNBLEtBQUt1RCxpQkFBaUI7TUFDcEJvRCxLQUFLLENBQUM1RyxlQUFlLEdBQUcsS0FBSztNQUM3QjRHLEtBQUssQ0FBQzFHLGFBQWEsR0FBR2hCLE1BQU0sQ0FBQ3RaLEtBQUs7TUFDbEM7SUFDRixLQUFLNmQsbUJBQW1CO01BQ3RCbUQsS0FBSyxDQUFDekcsaUJBQWlCLEdBQUcsSUFBSTtNQUM5QnlHLEtBQUssQ0FBQ3hHLGNBQWMsR0FBRyxLQUFLO01BQzVCd0csS0FBSyxDQUFDdkcsZUFBZSxHQUFHLElBQUk7TUFDNUI7SUFDRixLQUFLcUQsbUJBQW1CO01BQUM7UUFDdkIsTUFBTXpsQixJQUFJLEdBQUcyb0IsS0FBSyxDQUFDbEgsVUFBVTtRQUM3QnpoQixJQUFJLENBQUM4b0IsTUFBTSxHQUFHOW9CLElBQUksQ0FBQzhvQixNQUFNLENBQUN6UyxNQUFNLENBQUV1UyxDQUFDLElBQUtBLENBQUMsQ0FBQzVtQixFQUFFLEtBQUtpZixNQUFNLENBQUNoZ0IsSUFBSSxDQUFDOG5CLE1BQU0sQ0FBQztRQUNwRUosS0FBSyxDQUFDekcsaUJBQWlCLEdBQUcsS0FBSztRQUMvQnlHLEtBQUssQ0FBQ3hHLGNBQWMsR0FBRyxJQUFJO1FBQzNCO01BQ0Y7SUFDQSxLQUFLdUQsbUJBQW1CO01BQ3RCaUQsS0FBSyxDQUFDekcsaUJBQWlCLEdBQUcsS0FBSztNQUMvQnlHLEtBQUssQ0FBQ3ZHLGVBQWUsR0FBR25CLE1BQU0sQ0FBQ3RaLEtBQUs7TUFDcEM7SUFDQTtJQUNFLEtBQUtnZSxrQkFBa0I7SUFDdkIsS0FBS1ksMEJBQTBCO0lBQy9CLEtBQUtULHNCQUFzQjtNQUM3QjZDLEtBQUssQ0FBQ3RHLGdCQUFnQixHQUFHLElBQUk7TUFDN0JzRyxLQUFLLENBQUNyRyxhQUFhLEdBQUcsS0FBSztNQUMzQnFHLEtBQUssQ0FBQ3BHLGNBQWMsR0FBRyxJQUFJO01BQzNCO0lBQ0E7SUFDRSxLQUFLaUUsMEJBQTBCO0lBQy9CLEtBQUtaLGtCQUFrQjtJQUN2QixLQUFLRyxzQkFBc0I7TUFDN0I0QyxLQUFLLENBQUN0RyxnQkFBZ0IsR0FBRyxLQUFLO01BQzlCc0csS0FBSyxDQUFDckcsYUFBYSxHQUFHLElBQUk7TUFDMUJxRyxLQUFLLENBQUNwSCxTQUFTLEdBQUdvSCxLQUFLLENBQUNwSCxTQUFTLENBQUN5SCxNQUFNLENBQUMvSCxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO01BQ3JEMG5CLEtBQUssQ0FBQ2hILFlBQVksR0FBR2dILEtBQUssQ0FBQ3BILFNBQVMsQ0FBQzdlLE1BQU0sS0FBSyxFQUFFO01BQ2xEO0lBQ0E7SUFDRSxLQUFLK2pCLDBCQUEwQjtJQUMvQixLQUFLWixrQkFBa0I7SUFDdkIsS0FBS0csc0JBQXNCO01BQzdCMkMsS0FBSyxDQUFDdEcsZ0JBQWdCLEdBQUcsS0FBSztNQUM5QnNHLEtBQUssQ0FBQ3BHLGNBQWMsR0FBR3RCLE1BQU0sQ0FBQ3RaLEtBQUs7TUFDbkM7SUFDQSxLQUFLc2UsaUJBQWlCO01BQ3RCMEMsS0FBSyxDQUFDbkcsZUFBZSxHQUFHLElBQUk7TUFDNUJtRyxLQUFLLENBQUNsRyxZQUFZLEdBQUcsS0FBSztNQUMxQmtHLEtBQUssQ0FBQ2pHLGFBQWEsR0FBRyxJQUFJO01BQzFCO0lBQ0YsS0FBS3dELGlCQUFpQjtNQUNwQnlDLEtBQUssQ0FBQ25HLGVBQWUsR0FBRyxLQUFLO01BQzdCbUcsS0FBSyxDQUFDbEcsWUFBWSxHQUFHLElBQUk7TUFDekJrRyxLQUFLLENBQUNsSCxVQUFVLEdBQUdSLE1BQU0sQ0FBQ2hnQixJQUFJO01BQzlCO0lBQ0YsS0FBS2tsQixpQkFBaUI7TUFDcEJ3QyxLQUFLLENBQUNuRyxlQUFlLEdBQUcsS0FBSztNQUM3Qm1HLEtBQUssQ0FBQ2pHLGFBQWEsR0FBR3pCLE1BQU0sQ0FBQ3RaLEtBQUs7TUFDbEM7SUFDRixLQUFLK2UsZ0JBQWdCO01BQ25CaUMsS0FBSyxDQUFDaEcsY0FBYyxHQUFHLElBQUk7TUFDM0JnRyxLQUFLLENBQUMvRixXQUFXLEdBQUcsS0FBSztNQUN6QitGLEtBQUssQ0FBQzlGLFlBQVksR0FBRyxJQUFJO01BQ3pCO0lBQ0YsS0FBSzhELGdCQUFnQjtNQUNuQmdDLEtBQUssQ0FBQ2hHLGNBQWMsR0FBRyxLQUFLO01BQzVCZ0csS0FBSyxDQUFDL0YsV0FBVyxHQUFHLElBQUk7TUFDeEIrRixLQUFLLENBQUNwSCxTQUFTLENBQUNzSCxPQUFPLENBQUM1SCxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO01BQ3BDMG5CLEtBQUssQ0FBQ25ILFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztNQUN2QjtJQUNGLEtBQUtvRixnQkFBZ0I7TUFDbkIrQixLQUFLLENBQUNoRyxjQUFjLEdBQUcsS0FBSztNQUM1QmdHLEtBQUssQ0FBQzlGLFlBQVksR0FBRzVCLE1BQU0sQ0FBQ3RaLEtBQUs7TUFDakM7SUFDQSxLQUFLa2YsbUJBQW1CO01BQ3RCOEIsS0FBSyxDQUFDN0YsaUJBQWlCLEdBQUcsSUFBSTtNQUM5QjZGLEtBQUssQ0FBQzVGLGNBQWMsR0FBRyxLQUFLO01BQzVCNEYsS0FBSyxDQUFDM0YsZUFBZSxHQUFHLElBQUk7TUFDOUI7SUFDQSxLQUFLOEQsbUJBQW1CO01BQ3RCNkIsS0FBSyxDQUFDN0YsaUJBQWlCLEdBQUcsS0FBSztNQUMvQjZGLEtBQUssQ0FBQzVGLGNBQWMsR0FBRyxJQUFJO01BQzNCdGlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFdWdCLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM7TUFDM0MwbkIsS0FBSyxDQUFDbEgsVUFBVSxHQUFHUixNQUFNLENBQUNoZ0IsSUFBSTtNQUNoQztJQUNBLEtBQUs4bEIsbUJBQW1CO01BQ3RCNEIsS0FBSyxDQUFDN0YsaUJBQWlCLEdBQUcsS0FBSztNQUMvQjZGLEtBQUssQ0FBQzNGLGVBQWUsR0FBRy9CLE1BQU0sQ0FBQ3RaLEtBQUs7TUFDdEM7SUFDRixLQUFLcWYsbUJBQW1CO01BQ3RCMkIsS0FBSyxDQUFDMUYsaUJBQWlCLEdBQUcsSUFBSTtNQUM5QjBGLEtBQUssQ0FBQ3pGLGNBQWMsR0FBRyxLQUFLO01BQzVCeUYsS0FBSyxDQUFDeEYsZUFBZSxHQUFHLElBQUk7TUFDNUI7SUFDRixLQUFLOEQsbUJBQW1CO01BQ3RCMEIsS0FBSyxDQUFDMUYsaUJBQWlCLEdBQUcsS0FBSztNQUMvQjBGLEtBQUssQ0FBQ3pGLGNBQWMsR0FBRyxJQUFJO01BQzNCeUYsS0FBSyxDQUFDcEgsU0FBUyxHQUFHb0gsS0FBSyxDQUFDcEgsU0FBUyxDQUFDbEwsTUFBTSxDQUFFdVMsQ0FBQyxJQUFLQSxDQUFDLENBQUM1bUIsRUFBRSxLQUFLaWYsTUFBTSxDQUFDaGdCLElBQUksQ0FBQ2dvQixNQUFNLENBQUM7TUFDNUU7SUFDRixLQUFLL0IsbUJBQW1CO01BQ3RCeUIsS0FBSyxDQUFDMUYsaUJBQWlCLEdBQUcsS0FBSztNQUMvQjBGLEtBQUssQ0FBQ3hGLGVBQWUsR0FBR2xDLE1BQU0sQ0FBQ3RaLEtBQUs7TUFDcEM7SUFDRixLQUFLd2YsbUJBQW1CO01BQ3RCd0IsS0FBSyxDQUFDcEYsaUJBQWlCLEdBQUcsSUFBSTtNQUM5Qm9GLEtBQUssQ0FBQ25GLGNBQWMsR0FBRyxLQUFLO01BQzVCbUYsS0FBSyxDQUFDbEYsZUFBZSxHQUFHLElBQUk7TUFDNUI7SUFDQSxLQUFLMkQsbUJBQW1CO01BQUU7UUFDMUIsTUFBTXBuQixJQUFJLEdBQUcyb0IsS0FBSyxDQUFDbEgsVUFBVTtRQUM3QnpoQixJQUFJLENBQUNxb0IsUUFBUSxDQUFDUSxPQUFPLENBQUM1SCxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO1FBQ2xDMG5CLEtBQUssQ0FBQ3BGLGlCQUFpQixHQUFHLEtBQUs7UUFDL0JvRixLQUFLLENBQUNuRixjQUFjLEdBQUcsSUFBSTtRQUMzQm1GLEtBQUssQ0FBQ25ILFVBQVUsR0FBRyxFQUFFO1FBQ3JCO01BQ0E7SUFDRixLQUFLNkYsbUJBQW1CO01BQ3RCc0IsS0FBSyxDQUFDcEYsaUJBQWlCLEdBQUcsS0FBSztNQUMvQm9GLEtBQUssQ0FBQ2xGLGVBQWUsR0FBR3hDLE1BQU0sQ0FBQ3RaLEtBQUs7TUFDcEM7SUFDRixLQUFLMmYsc0JBQXNCO01BRXpCcUIsS0FBSyxDQUFDdkYsb0JBQW9CLEdBQUcsSUFBSTtNQUNqQ3VGLEtBQUssQ0FBQ3RGLGlCQUFpQixHQUFHLEtBQUs7TUFDL0JzRixLQUFLLENBQUNyRixrQkFBa0IsR0FBRyxJQUFJO0lBQ2pDLEtBQUtpRSxzQkFBc0I7TUFDekJvQixLQUFLLENBQUN2RixvQkFBb0IsR0FBRyxLQUFLO01BQ2xDdUYsS0FBSyxDQUFDdEYsaUJBQWlCLEdBQUcsSUFBSTtNQUM5QjVpQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUV1Z0IsTUFBTSxDQUFDaGdCLElBQUksQ0FBQztNQUN2QzBuQixLQUFLLENBQUNsSCxVQUFVLENBQUM0RyxRQUFRLEdBQUdNLEtBQUssQ0FBQ2xILFVBQVUsQ0FBQzRHLFFBQVEsQ0FBQ2hTLE1BQU0sQ0FBRXVTLENBQUMsSUFBS0EsQ0FBQyxDQUFDNW1CLEVBQUUsS0FBS2lmLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUNlLEVBQUUsQ0FBQztNQUM1RjtJQUNGLEtBQUt3bEIsc0JBQXNCO01BQ3pCbUIsS0FBSyxDQUFDdkYsb0JBQW9CLEdBQUcsS0FBSztNQUNsQ3VGLEtBQUssQ0FBQ3JGLGtCQUFrQixHQUFHckMsTUFBTSxDQUFDdFosS0FBSztNQUN2QztJQUVGLEtBQU11ZCxnQ0FBZ0M7TUFDcEN5RCxLQUFLLENBQUM5RSw0QkFBNEIsR0FBRyxJQUFJO01BQ3pDOEUsS0FBSyxDQUFDN0UsMEJBQTBCLEdBQUcsSUFBSTtNQUN2QzZFLEtBQUssQ0FBQzVFLHlCQUF5QixHQUFHLEtBQUs7TUFDdkM7SUFDRixLQUFLb0IsZ0NBQWdDO01BQ25Dd0QsS0FBSyxDQUFDbkgsVUFBVSxHQUFHUCxNQUFNLENBQUNoZ0IsSUFBSTtNQUM5QjBuQixLQUFLLENBQUM1RSx5QkFBeUIsR0FBRyxJQUFJO01BQ3RDNEUsS0FBSyxDQUFDOUUsNEJBQTRCLEdBQUcsS0FBSztNQUMxQztJQUNGLEtBQUt1QixnQ0FBZ0M7TUFDbkN1RCxLQUFLLENBQUM5RSw0QkFBNEIsR0FBRyxLQUFLO01BQzFDOEUsS0FBSyxDQUFDN0UsMEJBQTBCLEdBQUc3QyxNQUFNLENBQUN0WixLQUFLO01BQy9DO0lBRUEsS0FBSzhmLDJCQUEyQjtNQUM5QmtCLEtBQUssQ0FBQzNFLHdCQUF3QixHQUFHLElBQUk7TUFDckMyRSxLQUFLLENBQUMxRSxzQkFBc0IsR0FBSSxJQUFJO01BQ3BDMEUsS0FBSyxDQUFDekUscUJBQXFCLEdBQUcsS0FBSztNQUNuQztJQUNGLEtBQUt3RCwyQkFBMkI7TUFDOUJqbkIsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFdWdCLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM7TUFDekMwbkIsS0FBSyxDQUFDM0Usd0JBQXdCLEdBQUcsS0FBSztNQUN0QzJFLEtBQUssQ0FBQ3pFLHFCQUFxQixHQUFHLElBQUk7TUFDakN5RSxLQUFLLENBQUNsSCxVQUFVLENBQUN5SCxXQUFXLEdBQUdqSSxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDaW9CLFdBQVc7TUFDdkQ7SUFDRixLQUFLdkIsMkJBQTJCO01BQzlCZ0IsS0FBSyxDQUFDM0Usd0JBQXdCLEdBQUcsS0FBSztNQUN0QzJFLEtBQUssQ0FBQzFFLHNCQUFzQixHQUFJaEQsTUFBTSxDQUFDdFosS0FBSztNQUM1QztJQUVGLEtBQUs4YyxrQkFBa0I7TUFDckJrRSxLQUFLLENBQUN4RSxnQkFBZ0IsR0FBRSxJQUFJO01BQzVCd0UsS0FBSyxDQUFDdkUsY0FBYyxHQUFJLElBQUk7TUFDNUJ1RSxLQUFLLENBQUN0RSxhQUFhLEdBQUcsS0FBSztNQUMzQjtJQUNGLEtBQU1LLGtCQUFrQjtNQUN0QmlFLEtBQUssQ0FBQ3hFLGdCQUFnQixHQUFFLEtBQUs7TUFDN0J3RSxLQUFLLENBQUN0RSxhQUFhLEdBQUcsSUFBSTtNQUMxQjtJQUNGLEtBQUtNLGtCQUFrQjtNQUNyQmdFLEtBQUssQ0FBQ3hFLGdCQUFnQixHQUFFLEtBQUs7TUFDN0IxakIsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFdWdCLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM7TUFDcEMwbkIsS0FBSyxDQUFDdkUsY0FBYyxHQUFJbkQsTUFBTSxDQUFDaGdCLElBQUksQ0FBQ3FNLE9BQU87TUFDM0M7SUFDQSxLQUFLdE0sc0JBQXNCO01BRXpCMm5CLEtBQUssQ0FBQ3JFLG9CQUFvQixHQUFHLElBQUk7TUFDakNxRSxLQUFLLENBQUNwRSxrQkFBa0IsR0FBRyxJQUFJO01BQy9Cb0UsS0FBSyxDQUFDbkUsaUJBQWlCLEdBQUcsS0FBSztNQUMvQjtJQUNGLEtBQUt1RCxzQkFBc0I7TUFDekJZLEtBQUssQ0FBQ3JFLG9CQUFvQixHQUFHLEtBQUs7TUFDbENxRSxLQUFLLENBQUNuRSxpQkFBaUIsR0FBRyxJQUFJO01BQzlCbUUsS0FBSyxDQUFDNW9CLFFBQVEsR0FBR2toQixNQUFNLENBQUNoZ0IsSUFBSTtNQUM1QjtJQUVGLEtBQUsrbUIsc0JBQXNCO01BRXpCVyxLQUFLLENBQUNyRSxvQkFBb0IsR0FBRyxLQUFLO01BQ2xDcUUsS0FBSyxDQUFDcEUsa0JBQWtCLEdBQUl0RCxNQUFNLENBQUNoZ0IsSUFBSTtNQUN2QztJQUNBLEtBQUtpRix1QkFBdUI7TUFDMUI7SUFDRixLQUFLK2hCLHVCQUF1QjtNQUMxQlUsS0FBSyxDQUFDckUsb0JBQW9CLEdBQUcsS0FBSztNQUNsQ3FFLEtBQUssQ0FBQ25FLGlCQUFpQixHQUFHLElBQUk7TUFDOUJtRSxLQUFLLENBQUNqSCxlQUFlLEdBQUdULE1BQU0sQ0FBQ2hnQixJQUFJO01BQ25DO0lBQ0EsS0FBS2luQix1QkFBdUI7TUFDMUI7SUFDUjtNQUNBO0VBQU07QUFFWixDQUFDLENBQUM7QUFFYU8sc0VBQU8sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JiSTtBQUNZO0FBRS9CLE1BQU1uSCxZQUFZLEdBQUc7RUFDMUI2SCxpQkFBaUIsRUFBRSxLQUFLO0VBQUU7RUFDMUJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMsZUFBZSxFQUFFLEtBQUs7RUFBRTtFQUN4QkMsWUFBWSxFQUFFLEtBQUs7RUFDbkJDLGFBQWEsRUFBRSxJQUFJO0VBQ25CQywyQkFBMkIsRUFBRSxLQUFLO0VBQUU7RUFDcENDLHdCQUF3QixFQUFFLEtBQUs7RUFDL0JDLHlCQUF5QixFQUFFLEtBQUs7RUFDaENDLGFBQWEsRUFBRSxLQUFLO0VBQUU7RUFDdEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsZUFBZSxFQUFFLEtBQUs7RUFBRTtFQUN4QkMsWUFBWSxFQUFFLEtBQUs7RUFDbkJDLGFBQWEsRUFBRSxJQUFJO0VBQ25CQyxZQUFZLEVBQUUsS0FBSztFQUFFO0VBQ3JCQyxTQUFTLEVBQUUsS0FBSztFQUNoQkMsVUFBVSxFQUFFLElBQUk7RUFDaEJ6cUIsYUFBYSxFQUFFLEtBQUs7RUFBRTtFQUN0QjBxQixVQUFVLEVBQUUsS0FBSztFQUNqQkMsV0FBVyxFQUFFLElBQUk7RUFDakJDLGFBQWEsRUFBRSxLQUFLO0VBQUU7RUFDdEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsaUJBQWlCLEVBQUUsS0FBSztFQUFFO0VBQzFCQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsZUFBZSxFQUFFLElBQUk7RUFDckJDLHFCQUFxQixFQUFFLEtBQUs7RUFDNUJDLGtCQUFrQixFQUFFLEtBQUs7RUFDekJDLG1CQUFtQixFQUFFLElBQUk7RUFDekJDLG9CQUFvQixFQUFFLEtBQUs7RUFDM0JDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJDLGtCQUFrQixFQUFFLElBQUk7RUFDeEJDLHFCQUFxQixFQUFFLEtBQUs7RUFDNUJDLGtCQUFrQixFQUFFLEtBQUs7RUFDekJDLG1CQUFtQixFQUFFLElBQUk7RUFDekIzckIsRUFBRSxFQUFFLElBQUk7RUFDUnlDLFFBQVEsRUFBRSxJQUFJO0VBQ2RELGdCQUFnQixFQUFFLEVBQUU7RUFDcEJzZixVQUFVLEVBQUU7QUFDZCxDQUFDO0FBRU0sTUFBTThKLFdBQVcsR0FBSXJxQixJQUFJLElBQUs7RUFDakMsT0FBTSxDQUFDekIsUUFBUSxFQUFFK3JCLFFBQVEsS0FBSztJQUMxQixNQUFNMXJCLEtBQUssR0FBRzByQixRQUFRLEVBQUU7SUFDeEIvckIsUUFBUSxDQUFDZ3NCLGtCQUFrQixFQUFFLENBQUM7SUFDOUJqTCw0Q0FBSyxDQUFDdmdCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDdkJnSixJQUFJLENBQUVxSixHQUFHLElBQUs7TUFDWDdTLFFBQVEsQ0FBQ2lzQixrQkFBa0IsQ0FBQ3BaLEdBQUcsQ0FBQ3BSLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUNEK0csS0FBSyxDQUFFcUssR0FBRyxJQUFLO01BQ1o3UyxRQUFRLENBQUNrc0Isa0JBQWtCLENBQUNyWixHQUFHLENBQUNwUixJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUM7RUFDTixDQUFDO0FBQ0wsQ0FBQztBQUVNLE1BQU0wZixpQkFBaUIsR0FBRyxtQkFBbUI7QUFDN0MsTUFBTWdMLGlCQUFpQixHQUFHLG1CQUFtQjtBQUM3QyxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBbUI7QUFFN0MsTUFBTWhMLG9CQUFvQixHQUFHLHNCQUFzQjtBQUNuRCxNQUFNaUwsb0JBQW9CLEdBQUcsc0JBQXNCO0FBQ25ELE1BQU1DLG9CQUFvQixHQUFHLHNCQUFzQjtBQUVuRCxNQUFNenBCLCtCQUErQixHQUFHLGlDQUFpQztBQUN6RSxNQUFNMHBCLCtCQUErQixHQUFHLGlDQUFpQztBQUN6RSxNQUFNQywrQkFBK0IsR0FBRyxpQ0FBaUM7QUFFekUsTUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxNQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBQ3pDLE1BQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFFekMsTUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxNQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBQ3ZDLE1BQU1DLGNBQWMsR0FBRyxnQkFBZ0I7QUFFdkMsTUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxNQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBQ3pDLE1BQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFFekMsTUFBTUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pELE1BQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUNqRCxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFFakQsTUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxNQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBQ3ZDLE1BQU1DLGNBQWMsR0FBRyxnQkFBZ0I7QUFFdkMsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQWtCO0FBQzNDLE1BQU1DLGdCQUFnQixHQUFHLGtCQUFrQjtBQUMzQyxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBa0I7QUFFM0MsTUFBTUMsdUJBQXVCLEdBQUcseUJBQXlCO0FBQ3pELE1BQU1DLHVCQUF1QixHQUFHLHlCQUF5QjtBQUN6RCxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBeUI7QUFFekQsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQXdCO0FBQ3ZELE1BQU1DLHNCQUFzQixHQUFHLHdCQUF3QjtBQUN2RCxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBd0I7QUFFdkQsTUFBTUMsdUJBQXVCLEdBQUcseUJBQXlCO0FBQ3pELE1BQU1DLHVCQUF1QixHQUFHLHlCQUF5QjtBQUN6RCxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBeUI7QUFFekQsTUFBTUMsNEJBQTRCLEdBQUcsOEJBQThCO0FBQ25FLE1BQU1DLDRCQUE0QixHQUFHLDhCQUE4QjtBQUNuRSxNQUFNQyw0QkFBNEIsR0FBRyw4QkFBOEI7QUFFbkUsTUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBbUI7QUFFcEQsTUFBTUMsU0FBUyxHQUFJaHRCLElBQUksb0NBQ2hCQSxJQUFJO0VBQ1BRLFFBQVEsRUFBRSxLQUFLO0VBQ2ZPLEVBQUUsRUFBRSxDQUFDO0VBQ0xrc0IsS0FBSyxFQUFFLENBQUM7SUFBQ2xzQixFQUFFLEVBQUU7RUFBQyxDQUFDLENBQUM7RUFDaEI0QyxVQUFVLEVBQUUsQ0FBQztJQUFDbkQsUUFBUSxFQUFFO0VBQUssQ0FBQyxFQUFFO0lBQUNBLFFBQVEsRUFBRTtFQUFZLENBQUMsRUFBRTtJQUFDQSxRQUFRLEVBQUU7RUFBVyxDQUFDLENBQUM7RUFDbEZ5QyxTQUFTLEVBQUUsQ0FBQztJQUFDekMsUUFBUSxFQUFFO0VBQUssQ0FBQyxFQUFFO0lBQUNBLFFBQVEsRUFBRTtFQUFZLENBQUMsRUFBRTtJQUFDQSxRQUFRLEVBQUU7RUFBVyxDQUFDO0FBQUMsRUFDbkY7QUFHSyxNQUFNK3BCLGtCQUFrQixHQUFJdnFCLElBQUksSUFBSztFQUN4QyxPQUFNO0lBQ0ZGLElBQUksRUFBRXFyQixjQUFjO0lBQ3BCbnJCO0VBQ0osQ0FBQztBQUNMLENBQUM7QUFFTSxNQUFNSyxtQkFBbUIsR0FBSUwsSUFBSSxJQUFLO0VBQ3pDLE9BQU07SUFDRkYsSUFBSSxFQUFFa3JCO0VBQ1YsQ0FBQztBQUNMLENBQUM7O0FBR0Q7QUFDNEM7QUFDNUMsTUFBTXhELE9BQU8sR0FBRyxDQUFDNW9CLEtBQUssR0FBR3loQixZQUFZLEVBQUVMLE1BQU0sS0FBS3lILDZEQUFPLENBQUM3b0IsS0FBSyxFQUFHOG9CLEtBQUssSUFBSztFQUMxRSxRQUFRMUgsTUFBTSxDQUFDbGdCLElBQUk7SUFDakIsS0FBSzRmLGlCQUFpQjtNQUNwQmdJLEtBQUssQ0FBQ1csZUFBZSxHQUFHLElBQUk7TUFDNUJYLEtBQUssQ0FBQ2EsYUFBYSxHQUFHLElBQUk7TUFDMUJiLEtBQUssQ0FBQ1ksWUFBWSxHQUFHLEtBQUs7TUFDMUI7SUFDRixLQUFLb0MsaUJBQWlCO01BQ3BCaEQsS0FBSyxDQUFDVyxlQUFlLEdBQUcsS0FBSztNQUM3QlgsS0FBSyxDQUFDeG1CLFFBQVEsR0FBRzhlLE1BQU0sQ0FBQ2hnQixJQUFJO01BQzVCMG5CLEtBQUssQ0FBQ1ksWUFBWSxHQUFHLElBQUk7TUFDekI7SUFDRixLQUFLcUMsaUJBQWlCO01BQ3BCakQsS0FBSyxDQUFDVyxlQUFlLEdBQUcsS0FBSztNQUM3QlgsS0FBSyxDQUFDYSxhQUFhLEdBQUd2SSxNQUFNLENBQUN0WixLQUFLO01BQ2xDO0lBQ0EsS0FBS3RGLCtCQUErQjtNQUFFO01BQ3BDc21CLEtBQUssQ0FBQ2MsMkJBQTJCLEdBQUcsSUFBSTtNQUN4Q2QsS0FBSyxDQUFDZ0IseUJBQXlCLEdBQUcsSUFBSTtNQUN0Q2hCLEtBQUssQ0FBQ2Usd0JBQXdCLEdBQUcsS0FBSztNQUN0QztJQUNGLEtBQUtxQywrQkFBK0I7TUFDbENwRCxLQUFLLENBQUNjLDJCQUEyQixHQUFHLEtBQUs7TUFDekNkLEtBQUssQ0FBQ3ptQixnQkFBZ0IsR0FBRytlLE1BQU0sQ0FBQ2hnQixJQUFJO01BQ3BDMG5CLEtBQUssQ0FBQ2Usd0JBQXdCLEdBQUcsSUFBSTtNQUNyQztJQUNGLEtBQUtzQywrQkFBK0I7TUFDbENyRCxLQUFLLENBQUNjLDJCQUEyQixHQUFHLEtBQUs7TUFDekNkLEtBQUssQ0FBQ2dCLHlCQUF5QixHQUFHMUksTUFBTSxDQUFDdFosS0FBSztNQUM5QztJQUNKLEtBQUt3bEIsdUJBQXVCO01BQzFCeEUsS0FBSyxDQUFDd0MscUJBQXFCLEdBQUcsSUFBSTtNQUNsQ3hDLEtBQUssQ0FBQzBDLG1CQUFtQixHQUFHLElBQUk7TUFDaEMxQyxLQUFLLENBQUN5QyxrQkFBa0IsR0FBRyxLQUFLO01BQ2hDO0lBQ0YsS0FBS2dDLHVCQUF1QjtNQUMxQnpFLEtBQUssQ0FBQ3dDLHFCQUFxQixHQUFHLEtBQUs7TUFDbkN4QyxLQUFLLENBQUNqcEIsRUFBRSxDQUFDd0UsU0FBUyxHQUFHeWtCLEtBQUssQ0FBQ2pwQixFQUFFLENBQUNrRixVQUFVLENBQUN5UixNQUFNLENBQUV1UyxDQUFDLElBQUtBLENBQUMsQ0FBQzVtQixFQUFFLEtBQUtpZixNQUFNLENBQUNoZ0IsSUFBSSxDQUFDOG5CLE1BQU0sQ0FBQztNQUNuRkosS0FBSyxDQUFDeUMsa0JBQWtCLEdBQUcsSUFBSTtNQUMvQjtJQUNGLEtBQUtpQyx1QkFBdUI7TUFDMUIxRSxLQUFLLENBQUN3QyxxQkFBcUIsR0FBRyxLQUFLO01BQ25DeEMsS0FBSyxDQUFDMEMsbUJBQW1CLEdBQUdwSyxNQUFNLENBQUN0WixLQUFLO01BQ3hDO0lBRUYsS0FBSzhsQix1QkFBdUI7TUFDMUI5RSxLQUFLLENBQUNrQyxxQkFBcUIsR0FBRyxJQUFJO01BQ2xDbEMsS0FBSyxDQUFDb0MsbUJBQW1CLEdBQUcsSUFBSTtNQUNoQ3BDLEtBQUssQ0FBQ21DLGtCQUFrQixHQUFHLEtBQUs7TUFDaEM7SUFDRixLQUFLNEMsdUJBQXVCO01BQzFCL0UsS0FBSyxDQUFDa0MscUJBQXFCLEdBQUcsS0FBSztNQUNuQ2xDLEtBQUssQ0FBQ2pwQixFQUFFLENBQUNrRixVQUFVLEdBQUdxYyxNQUFNLENBQUNoZ0IsSUFBSTtNQUNqQzBuQixLQUFLLENBQUNtQyxrQkFBa0IsR0FBRyxJQUFJO01BQy9CO0lBQ0YsS0FBSzZDLHVCQUF1QjtNQUMxQmhGLEtBQUssQ0FBQ2tDLHFCQUFxQixHQUFHLEtBQUs7TUFDbkNsQyxLQUFLLENBQUNvQyxtQkFBbUIsR0FBRzlKLE1BQU0sQ0FBQ3RaLEtBQUs7TUFDeEM7SUFFRixLQUFLMmxCLHNCQUFzQjtNQUN6QjNFLEtBQUssQ0FBQ3FDLG9CQUFvQixHQUFHLElBQUk7TUFDakNyQyxLQUFLLENBQUN1QyxrQkFBa0IsR0FBRyxJQUFJO01BQy9CdkMsS0FBSyxDQUFDc0MsaUJBQWlCLEdBQUcsS0FBSztNQUMvQjtJQUNGLEtBQUtzQyxzQkFBc0I7TUFDekI1RSxLQUFLLENBQUNxQyxvQkFBb0IsR0FBRyxLQUFLO01BQ2xDckMsS0FBSyxDQUFDanBCLEVBQUUsQ0FBQ3dFLFNBQVMsR0FBRytjLE1BQU0sQ0FBQ2hnQixJQUFJO01BQ2hDMG5CLEtBQUssQ0FBQ3NDLGlCQUFpQixHQUFHLElBQUk7TUFDOUI7SUFDRixLQUFLdUMsc0JBQXNCO01BQ3pCN0UsS0FBSyxDQUFDcUMsb0JBQW9CLEdBQUcsS0FBSztNQUNsQ3JDLEtBQUssQ0FBQ3VDLGtCQUFrQixHQUFHakssTUFBTSxDQUFDdFosS0FBSztNQUN2QztJQUVGLEtBQUtpWixvQkFBb0I7TUFDdkIrSCxLQUFLLENBQUNRLGlCQUFpQixHQUFHLElBQUk7TUFDOUJSLEtBQUssQ0FBQ1UsZUFBZSxHQUFHLElBQUk7TUFDNUJWLEtBQUssQ0FBQ1MsY0FBYyxHQUFHLEtBQUs7TUFDNUI7SUFDRixLQUFLeUMsb0JBQW9CO01BQ3ZCbEQsS0FBSyxDQUFDUSxpQkFBaUIsR0FBRyxLQUFLO01BQy9CUixLQUFLLENBQUNqcEIsRUFBRSxHQUFHdWhCLE1BQU0sQ0FBQ2hnQixJQUFJO01BQ3RCMG5CLEtBQUssQ0FBQ1MsY0FBYyxHQUFHLElBQUk7TUFDM0I7SUFDRixLQUFLMEMsb0JBQW9CO01BQ3ZCbkQsS0FBSyxDQUFDUSxpQkFBaUIsR0FBRyxLQUFLO01BQy9CUixLQUFLLENBQUNVLGVBQWUsR0FBR3BJLE1BQU0sQ0FBQ3RaLEtBQUs7TUFDcEM7SUFFRixLQUFLa2xCLGNBQWM7TUFDakJsRSxLQUFLLENBQUNpQixhQUFhLEdBQUcsSUFBSTtNQUMxQmpCLEtBQUssQ0FBQ21CLFdBQVcsR0FBRyxJQUFJO01BQ3hCbkIsS0FBSyxDQUFDa0IsVUFBVSxHQUFHLEtBQUs7TUFDeEI7SUFDRixLQUFLaUQsY0FBYztNQUNqQm5FLEtBQUssQ0FBQ2lCLGFBQWEsR0FBRyxLQUFLO01BQzNCakIsS0FBSyxDQUFDanBCLEVBQUUsQ0FBQ2tGLFVBQVUsQ0FBQ3hELElBQUksQ0FBQztRQUFFWSxFQUFFLEVBQUVpZixNQUFNLENBQUNoZ0IsSUFBSSxDQUFDOG5CO01BQU8sQ0FBQyxDQUFDO01BQ3BESixLQUFLLENBQUNrQixVQUFVLEdBQUcsSUFBSTtNQUN2QjtJQUNGLEtBQUtrRCxjQUFjO01BQ2pCcEUsS0FBSyxDQUFDaUIsYUFBYSxHQUFHLEtBQUs7TUFDM0JqQixLQUFLLENBQUNtQixXQUFXLEdBQUc3SSxNQUFNLENBQUN0WixLQUFLO01BQ2hDO0lBQ0YsS0FBS3FsQixnQkFBZ0I7TUFDbkJyRSxLQUFLLENBQUNvQixlQUFlLEdBQUcsSUFBSTtNQUM1QnBCLEtBQUssQ0FBQ3NCLGFBQWEsR0FBRyxJQUFJO01BQzFCdEIsS0FBSyxDQUFDcUIsWUFBWSxHQUFHLEtBQUs7TUFDMUI7SUFDRixLQUFLaUQsZ0JBQWdCO01BQ25CdEUsS0FBSyxDQUFDb0IsZUFBZSxHQUFHLEtBQUs7TUFDN0JwQixLQUFLLENBQUNqcEIsRUFBRSxDQUFDa0YsVUFBVSxHQUFHK2pCLEtBQUssQ0FBQ2pwQixFQUFFLENBQUNrRixVQUFVLENBQUN5UixNQUFNLENBQUV1UyxDQUFDLElBQUtBLENBQUMsQ0FBQzVtQixFQUFFLEtBQUtpZixNQUFNLENBQUNoZ0IsSUFBSSxDQUFDOG5CLE1BQU0sQ0FBQztNQUNwRkosS0FBSyxDQUFDcUIsWUFBWSxHQUFHLElBQUk7TUFDekI7SUFDRixLQUFLa0QsZ0JBQWdCO01BQ25CdkUsS0FBSyxDQUFDb0IsZUFBZSxHQUFHLEtBQUs7TUFDN0JwQixLQUFLLENBQUNzQixhQUFhLEdBQUdoSixNQUFNLENBQUN0WixLQUFLO01BQ2xDO0lBQ0YsS0FBS3lrQixjQUFjO01BQ2pCekQsS0FBSyxDQUFDdUIsWUFBWSxHQUFHLElBQUk7TUFDekJ2QixLQUFLLENBQUN5QixVQUFVLEdBQUcsSUFBSTtNQUN2QnpCLEtBQUssQ0FBQ3dCLFNBQVMsR0FBRyxLQUFLO01BQ3ZCO0lBQ0YsS0FBS2tDLGNBQWM7TUFDakIxRCxLQUFLLENBQUN1QixZQUFZLEdBQUcsS0FBSztNQUMxQnZCLEtBQUssQ0FBQ2pwQixFQUFFLEdBQUd1aEIsTUFBTSxDQUFDaGdCLElBQUk7TUFDdEIwbkIsS0FBSyxDQUFDd0IsU0FBUyxHQUFHLElBQUk7TUFDdEI7SUFDRixLQUFLbUMsY0FBYztNQUNqQjNELEtBQUssQ0FBQ3VCLFlBQVksR0FBRyxLQUFLO01BQzFCdkIsS0FBSyxDQUFDeUIsVUFBVSxHQUFHbkosTUFBTSxDQUFDdFosS0FBSztNQUMvQjtJQUNGLEtBQUtza0IsZUFBZTtNQUNsQnRELEtBQUssQ0FBQ2hwQixhQUFhLEdBQUcsSUFBSTtNQUMxQmdwQixLQUFLLENBQUMyQixXQUFXLEdBQUcsSUFBSTtNQUN4QjNCLEtBQUssQ0FBQzBCLFVBQVUsR0FBRyxLQUFLO01BQ3hCO0lBQ0YsS0FBSzZCLGVBQWU7TUFDbEJ2RCxLQUFLLENBQUNocEIsYUFBYSxHQUFHLEtBQUs7TUFDM0JncEIsS0FBSyxDQUFDMEIsVUFBVSxHQUFHLElBQUk7TUFDdkIxQixLQUFLLENBQUNqcEIsRUFBRSxHQUFHLElBQUk7TUFDZjtJQUNGLEtBQUt5c0IsZUFBZTtNQUNsQnhELEtBQUssQ0FBQ2hwQixhQUFhLEdBQUcsS0FBSztNQUMzQmdwQixLQUFLLENBQUMyQixXQUFXLEdBQUdySixNQUFNLENBQUN0WixLQUFLO01BQ2hDO0lBQ0YsS0FBSzRrQixlQUFlO01BQ2xCNUQsS0FBSyxDQUFDNEIsYUFBYSxHQUFHLElBQUk7TUFDMUI1QixLQUFLLENBQUM4QixXQUFXLEdBQUcsSUFBSTtNQUN4QjlCLEtBQUssQ0FBQzZCLFVBQVUsR0FBRyxLQUFLO01BQ3hCO0lBQ0YsS0FBS2dDLGVBQWU7TUFDbEI3RCxLQUFLLENBQUM0QixhQUFhLEdBQUcsS0FBSztNQUMzQjVCLEtBQUssQ0FBQzZCLFVBQVUsR0FBRyxJQUFJO01BQ3ZCO0lBQ0YsS0FBS2lDLGVBQWU7TUFDbEI5RCxLQUFLLENBQUM0QixhQUFhLEdBQUcsS0FBSztNQUMzQjVCLEtBQUssQ0FBQzhCLFdBQVcsR0FBR3hKLE1BQU0sQ0FBQ3RaLEtBQUs7TUFDaEM7SUFDRixLQUFLK2tCLG1CQUFtQjtNQUN0Qi9ELEtBQUssQ0FBQytCLGlCQUFpQixHQUFHLElBQUk7TUFDOUIvQixLQUFLLENBQUNpQyxlQUFlLEdBQUcsSUFBSTtNQUM1QmpDLEtBQUssQ0FBQ2dDLGNBQWMsR0FBRyxLQUFLO01BQzVCO0lBQ0YsS0FBS2dDLG1CQUFtQjtNQUN0QmhFLEtBQUssQ0FBQytCLGlCQUFpQixHQUFHLEtBQUs7TUFDaEM7TUFDQS9CLEtBQUssQ0FBQ2pwQixFQUFFLENBQUM4RCxJQUFJLEdBQUd5ZCxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDdUMsSUFBSTtNQUNoQ21sQixLQUFLLENBQUNnQyxjQUFjLEdBQUcsSUFBSTtNQUMxQjtJQUNGLEtBQUtpQyxtQkFBbUI7TUFDdEJqRSxLQUFLLENBQUMrQixpQkFBaUIsR0FBRyxLQUFLO01BQy9CL0IsS0FBSyxDQUFDaUMsZUFBZSxHQUFHM0osTUFBTSxDQUFDdFosS0FBSztNQUNwQztJQUNGLEtBQUtvbUIsY0FBYztNQUNqQnBGLEtBQUssQ0FBQ2pwQixFQUFFLENBQUN3dUIsS0FBSyxDQUFDckYsT0FBTyxDQUFDO1FBQUU3bUIsRUFBRSxFQUFFaWYsTUFBTSxDQUFDaGdCO01BQUssQ0FBQyxDQUFDO01BQzNDO0lBRUYsS0FBSytzQixpQkFBaUI7TUFDcEJyRixLQUFLLENBQUNqcEIsRUFBRSxDQUFDd3VCLEtBQUssR0FBR3ZGLEtBQUssQ0FBQ2pwQixFQUFFLENBQUN3dUIsS0FBSyxDQUFDN1gsTUFBTSxDQUFFdVMsQ0FBQyxJQUFLQSxDQUFDLENBQUM1bUIsRUFBRSxLQUFLaWYsTUFBTSxDQUFDaGdCLElBQUksQ0FBQztNQUNuRTtJQUVBLEtBQUsyc0IsNEJBQTRCO01BQy9CakYsS0FBSyxDQUFDL0csbUJBQW1CLEdBQUcsSUFBSTtNQUNoQytHLEtBQUssQ0FBQzlHLGdCQUFnQixHQUFHLEtBQUs7TUFDOUI4RyxLQUFLLENBQUM3RyxpQkFBaUIsR0FBRyxJQUFJO01BQzlCO0lBQ0YsS0FBSytMLDRCQUE0QjtNQUFDO1FBQ2hDcHRCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFHdWdCLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM7UUFDOUMwbkIsS0FBSyxDQUFDbkgsVUFBVSxHQUFHUCxNQUFNLENBQUNoZ0IsSUFBSTtRQUM5QjBuQixLQUFLLENBQUMvRyxtQkFBbUIsR0FBRyxLQUFLO1FBQ2pDK0csS0FBSyxDQUFDOUcsZ0JBQWdCLEdBQUcsSUFBSTtRQUM3QjtNQUNGO0lBQ0EsS0FBS2lNLDRCQUE0QjtNQUMvQm5GLEtBQUssQ0FBQy9HLG1CQUFtQixHQUFHLEtBQUs7TUFDakMrRyxLQUFLLENBQUM3RyxpQkFBaUIsR0FBR2IsTUFBTSxDQUFDdFosS0FBSztNQUN0QztJQUVKO01BQ0U7RUFBTTtBQUVaLENBQUMsQ0FBQztBQUVhOGdCLHNFQUFPLEU7Ozs7Ozs7Ozs7OztBQ3pWdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QztBQUNwQjtBQUVJO0FBQ0E7QUFFOUJsSSw0Q0FBSyxDQUFDQyxRQUFRLENBQUMyTixPQUFPLEdBQUcsdUJBQXVCO0FBQ2hENU4sNENBQUssQ0FBQ0MsUUFBUSxDQUFDNE4sZUFBZSxHQUFFLElBQUk7QUFDbkM7QUFDYyxVQUFVQyxRQUFRLEdBQUU7RUFDL0IsTUFBTTVmLDhEQUFHLENBQUMsQ0FDTjZmLCtEQUFJLENBQUNDLDZDQUFRLENBQUMsRUFDZEQsK0RBQUksQ0FBQ0UsNkNBQVEsQ0FBQyxDQUVqQixDQUFDO0FBQ047O0FBRUE7QUFDQSxxQjs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDc0Q7QUErRHREO0FBRTJDO0FBR3JFLFNBQVNDLFVBQVUsQ0FBQ3h0QixJQUFJLEVBQUU7RUFDeEIsTUFBTW9DLE1BQU0sR0FBR3BDLElBQUksQ0FBQzhGLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDakMsT0FBT3daLDRDQUFLLENBQUN2Z0IsSUFBSSxDQUFFLFNBQVFxRCxNQUFPLFlBQVcsRUFBRXBDLElBQUksQ0FBQztBQUN0RDtBQUVBLFVBQVV5dEIsT0FBTyxDQUFDek4sTUFBTSxFQUFFO0VBQ3hCLElBQUk7SUFDRCxNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDRixVQUFVLEVBQUV4TixNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBRW5ELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRThtQiw4REFBZTtNQUNyQjVtQixJQUFJLEVBQUUrUCxNQUFNLENBQUMvUDtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUcsR0FBRyxFQUFFO0lBQ1pqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUUrbUIsOERBQWU7TUFDckJuZ0IsS0FBSyxFQUFFRCxHQUFHLENBQUNtbkIsUUFBUSxDQUFDNXRCO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFHQSxTQUFTNnRCLGVBQWUsQ0FBQzd0QixJQUFJLEVBQUU7RUFDN0IsT0FBT3NmLDRDQUFLLENBQUN2Z0IsSUFBSSxDQUFDLGNBQWMsRUFBRWlCLElBQUksQ0FBQztBQUN6QztBQUVBLFVBQVU4dEIsWUFBWSxDQUFDOU4sTUFBTSxFQUFFO0VBQzdCLElBQUk7SUFDRCxNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDRyxlQUFlLEVBQUU3TixNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBRXhELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRThqQixvRUFBcUI7TUFDM0I1akIsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lHLEdBQUcsRUFBRTtJQUNaakgsT0FBTyxDQUFDa0gsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDbEIsTUFBTWtuQiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFK2pCLG9FQUFxQjtNQUMzQm5kLEtBQUssRUFBRUQsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsVUFBVSt0QixnQkFBZ0IsQ0FBQy9OLE1BQU0sRUFBQztFQUNoQyxJQUFHO0lBQ0QsTUFBTWpRLE1BQU0sR0FBRyxNQUFNMmQsK0RBQUksQ0FBQ0csZUFBZSxFQUFFN04sTUFBTSxDQUFDaGdCLElBQUksQ0FBQztJQUV2RCxNQUFNMnRCLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUVpa0IseUVBQTBCO01BQ2hDL2pCLElBQUksRUFBRStQLE1BQU0sQ0FBQy9QO0lBQ2YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLE9BQU95RyxHQUFHLEVBQUU7SUFDWmpILE9BQU8sQ0FBQ2tILEtBQUssQ0FBQ0QsR0FBRyxDQUFDO0lBQ2xCLE1BQU1rbkIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRWtrQix5RUFBMEI7TUFDaEN0ZCxLQUFLLEVBQUVELEdBQUcsQ0FBQ21uQixRQUFRLENBQUM1dEI7SUFDdEIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVWd1QixZQUFZLENBQUNoTyxNQUFNLEVBQUU7RUFDN0IsSUFBSTtJQUNELE1BQU1qUSxNQUFNLEdBQUcsTUFBTTJkLCtEQUFJLENBQUNHLGVBQWUsRUFBRTdOLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM7SUFFeEQsTUFBTTJ0Qiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFb2tCLCtFQUFnQztNQUN0Q2xrQixJQUFJLEVBQUUrUCxNQUFNLENBQUMvUDtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUcsR0FBRyxFQUFFO0lBQ1pqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUVxa0IsK0VBQWdDO01BQ3RDemQsS0FBSyxFQUFFRCxHQUFHLENBQUNtbkIsUUFBUSxDQUFDNXRCO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFHQSxTQUFTaXVCLFdBQVcsQ0FBQ2p1QixJQUFJLEVBQUU7RUFDekIsT0FBT3NmLDRDQUFLLENBQUM0TyxLQUFLLENBQUUsU0FBUWx1QixJQUFLLE9BQU0sQ0FBQztBQUMxQztBQUVBLFVBQVVtdUIsUUFBUSxDQUFDbk8sTUFBTSxFQUFFO0VBQ3pCLElBQUk7SUFDRCxNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDTyxXQUFXLEVBQUVqTyxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBRXBELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRXVrQixnRUFBaUI7TUFDdkJya0IsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lHLEdBQUcsRUFBRTtJQUNaakgsT0FBTyxDQUFDa0gsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDbEIsTUFBTWtuQiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFd2tCLGdFQUFpQjtNQUN2QjVkLEtBQUssRUFBRUQsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsU0FBU291QixhQUFhLENBQUNwdUIsSUFBSSxFQUFFO0VBQzNCLE9BQU9zZiw0Q0FBSyxDQUFDcFosTUFBTSxDQUFFLFNBQVFsRyxJQUFLLE9BQU0sQ0FBQztBQUMzQztBQUVBLFVBQVVxdUIsVUFBVSxDQUFDck8sTUFBTSxFQUFFO0VBQzNCLElBQUk7SUFDRCxNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDVSxhQUFhLEVBQUVwTyxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBRXRELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRTBrQixrRUFBbUI7TUFDekJ4a0IsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lHLEdBQUcsRUFBRTtJQUNaakgsT0FBTyxDQUFDa0gsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDbEIsTUFBTWtuQiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFMmtCLGtFQUFtQjtNQUN6Qi9kLEtBQUssRUFBRUQsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsU0FBU3N1QixXQUFXLENBQUN0dUIsSUFBSSxFQUFFO0VBQ3pCLE9BQU9zZiw0Q0FBSyxDQUFDeFosR0FBRyxDQUFFLFNBQVE5RixJQUFLLEVBQUMsQ0FBQztBQUNuQztBQUVBLFVBQVV1dUIsUUFBUSxDQUFDdk8sTUFBTSxFQUFFO0VBQ3pCLElBQUk7SUFDRCxNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDWSxXQUFXLEVBQUV0TyxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBRXBELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRW1sQixnRUFBaUI7TUFDdkJqbEIsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lHLEdBQUcsRUFBRTtJQUNaakgsT0FBTyxDQUFDa0gsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDbEIsTUFBTWtuQiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFb2xCLGdFQUFpQjtNQUN2QnhlLEtBQUssRUFBRUQsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBR0EsU0FBU3d1QixtQkFBbUIsQ0FBQ3h1QixJQUFJLEVBQUV5dUIsTUFBTSxFQUFFO0VBQ3pDLE9BQU9uUCw0Q0FBSyxDQUFDeFosR0FBRyxDQUFFLFlBQVd5UyxrQkFBa0IsQ0FBQ3ZZLElBQUksQ0FBRSxXQUFVeXVCLE1BQU0sSUFBSSxDQUFFLEVBQUMsQ0FBQztBQUNoRixDQUFDLENBQWlCOztBQUVsQixVQUFVQyxnQkFBZ0IsQ0FBQzFPLE1BQU0sRUFBRTtFQUNqQyxJQUFJO0lBQ0YsTUFBTWpRLE1BQU0sR0FBRyxNQUFNMmQsK0RBQUksQ0FBQ2MsbUJBQW1CLEVBQUV4TyxNQUFNLENBQUNoZ0IsSUFBSSxFQUFFZ2dCLE1BQU0sQ0FBQ3lPLE1BQU0sQ0FBQztJQUMxRSxNQUFNZCw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFeWxCLHlFQUEwQjtNQUNoQ3ZsQixJQUFJLEVBQUUrUCxNQUFNLENBQUMvUDtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUcsR0FBRyxFQUFFO0lBQ1pqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUUwbEIseUVBQTBCO01BQ2hDeGxCLElBQUksRUFBRXlHLEdBQUcsQ0FBQ21uQixRQUFRLENBQUM1dEI7SUFDckIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUVBLFNBQVMydUIsWUFBWSxDQUFDRixNQUFNLEVBQUU7RUFDNUIsT0FBT25QLDRDQUFLLENBQUN4WixHQUFHLENBQUUsMEJBQXlCMm9CLE1BQU0sSUFBSSxDQUFFLEVBQUMsQ0FBQztBQUMzRDtBQUVBLFVBQVVHLFNBQVMsQ0FBQzVPLE1BQU0sRUFBRTtFQUMxQixJQUFJO0lBQ0YsTUFBTWpRLE1BQU0sR0FBRyxNQUFNMmQsK0RBQUksQ0FBQ2lCLFlBQVksRUFBRTNPLE1BQU0sQ0FBQ3lPLE1BQU0sQ0FBQztJQUN0RCxNQUFNZCw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFNmtCLGlFQUFrQjtNQUN4QjNrQixJQUFJLEVBQUUrUCxNQUFNLENBQUMvUDtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUcsR0FBRyxFQUFFO0lBQ1pqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUU4a0IsaUVBQWtCO01BQ3hCbGUsS0FBSyxFQUFFRCxHQUFHLENBQUNtbkIsUUFBUSxDQUFDNXRCO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxTQUFTNnVCLGVBQWUsQ0FBQzd1QixJQUFJLEVBQUU7RUFDN0IsT0FBT3NmLDRDQUFLLENBQUN4WixHQUFHLENBQUUsUUFBTyxDQUFDO0FBQzVCO0FBRUEsVUFBVWdwQixZQUFZLENBQUM5TyxNQUFNLEVBQUU7RUFDN0IsSUFBSTtJQUNGLE1BQU1qUSxNQUFNLEdBQUcsTUFBTTJkLCtEQUFJLENBQUNtQixlQUFlLEVBQUU3TyxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBQ3ZELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRWdsQixxRUFBc0I7TUFDNUI5a0IsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lHLEdBQUcsRUFBRTtJQUNaakgsT0FBTyxDQUFDa0gsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDbEIsTUFBTWtuQiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFaWxCLHFFQUFzQjtNQUM1QnJlLEtBQUssRUFBRUQsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsU0FBUyt1QixVQUFVLENBQUMvdUIsSUFBSSxFQUFFO0VBQ3hCLE9BQU9zZiw0Q0FBSyxDQUFDdmdCLElBQUksQ0FBQyxPQUFPLEVBQUVpQixJQUFJLENBQUM7QUFDbEM7QUFFQSxVQUFVZ3ZCLE9BQU8sQ0FBQ2hQLE1BQU0sRUFBRTtFQUN4QixJQUFJO0lBQ0QsTUFBTWpRLE1BQU0sR0FBRyxNQUFNMmQsK0RBQUksQ0FBQ3FCLFVBQVUsRUFBRS9PLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM7SUFDbkQsTUFBTTJ0Qiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFNGxCLCtEQUFnQjtNQUN0QjFsQixJQUFJLEVBQUUrUCxNQUFNLENBQUMvUDtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUcsR0FBRyxFQUFFO0lBQ1pqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUU2bEIsK0RBQWdCO01BQ3RCamYsS0FBSyxFQUFFRCxHQUFHLENBQUNtbkIsUUFBUSxDQUFDNXRCO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxTQUFTaXZCLGFBQWEsQ0FBQ2p2QixJQUFJLEVBQUM7RUFDMUIsTUFBTW9DLE1BQU0sR0FBR3BDLElBQUksQ0FBQzhGLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDakMsT0FBT3daLDRDQUFLLENBQUM0TyxLQUFLLENBQUUsU0FBUTlyQixNQUFPLEVBQUMsRUFBRXBDLElBQUksQ0FBQztBQUM3QztBQUVBLFVBQVVrdkIsVUFBVSxDQUFDbFAsTUFBTSxFQUFDO0VBQzFCLElBQUc7SUFDQyxNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDdUIsYUFBYSxFQUFFalAsTUFBTSxDQUFDaGdCLElBQUksQ0FBQztJQUN2RCxNQUFNMnRCLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUUrbEIsa0VBQW1CO01BQ3pCN2xCLElBQUksRUFBRStQLE1BQU0sQ0FBQy9QO0lBQ2YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUNELE9BQU15RyxHQUFHLEVBQUM7SUFDUmpILE9BQU8sQ0FBQ2tILEtBQUssQ0FBQ0QsR0FBRyxDQUFDO0lBQ2xCLE1BQU1rbkIsOERBQUcsQ0FBQztNQUNWN3RCLElBQUksRUFBRWdtQixrRUFBbUI7TUFDekJwZixLQUFLLEVBQUVELEdBQUcsQ0FBQ21uQixRQUFRLENBQUM1dEI7SUFDdEIsQ0FBQyxDQUFDO0VBQ0Y7QUFDRjtBQUVBLFNBQVNtdkIsYUFBYSxDQUFDbnZCLElBQUksRUFBRTtFQUMzQixPQUFPc2YsNENBQUssQ0FBQ3BaLE1BQU0sQ0FBRSxTQUFRbEcsSUFBSyxFQUFDLENBQUM7QUFDdEM7QUFFQSxVQUFVb3ZCLFVBQVUsQ0FBQ3BQLE1BQU0sRUFBRTtFQUMzQixJQUFJO0lBQ0YsTUFBTWpRLE1BQU0sR0FBRyxNQUFNMmQsK0RBQUksQ0FBQ3lCLGFBQWEsRUFBRW5QLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM7SUFFckQsTUFBTTJ0Qiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFa21CLGtFQUFtQjtNQUN6QmhtQixJQUFJLEVBQUUrUCxNQUFNLENBQUMvUDtJQUNmLENBQUMsQ0FBQztJQUNGLE1BQU0ydEIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRWl0QixnRUFBaUI7TUFDdkIvc0IsSUFBSSxFQUFFZ2dCLE1BQU0sQ0FBQ2hnQjtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUcsR0FBRyxFQUFFO0lBQ1pqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUVtbUIsa0VBQW1CO01BQ3pCam1CLElBQUksRUFBRXlHLEdBQUcsQ0FBQ21uQixRQUFRLENBQUM1dEI7SUFDckIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUVBLFNBQVNxdkIsZ0JBQWdCLENBQUNydkIsSUFBSSxFQUFDO0VBRTdCLE1BQU1zdkIsU0FBUyxHQUFHdHZCLElBQUksQ0FBQzhGLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFFdkN0RyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUU2dkIsU0FBUyxDQUFDO0VBRXJDLE9BQU9oUSw0Q0FBSyxDQUFDcFosTUFBTSxDQUFFLGlCQUFnQm9wQixTQUFVLEVBQUMsQ0FBQztBQUNuRDtBQUVBLFNBQVNDLG9CQUFvQixDQUFDdnZCLElBQUksRUFBQztFQUVqQyxNQUFNc3ZCLFNBQVMsR0FBR3R2QixJQUFJLENBQUM4RixHQUFHLENBQUMsV0FBVyxDQUFDO0VBRXZDdEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFFNnZCLFNBQVMsQ0FBQztFQUVyQyxPQUFPaFEsNENBQUssQ0FBQzRPLEtBQUssQ0FBRSxxQkFBb0JvQixTQUFVLEVBQUMsRUFBRXR2QixJQUFJLENBQUM7QUFFNUQ7QUFFQSxVQUFVd3ZCLGFBQWEsQ0FBQ3hQLE1BQU0sRUFBQztFQUM3QixJQUFHO0lBQ0QsTUFBTXlQLFlBQVksR0FBRyxNQUFNL0IsK0RBQUksQ0FBQzJCLGdCQUFnQixFQUFFclAsTUFBTSxDQUFDaGdCLElBQUksQ0FBQztJQUM5RCxNQUFNMHZCLFlBQVksR0FBRyxNQUFNaEMsK0RBQUksQ0FBQzZCLG9CQUFvQixFQUFFdlAsTUFBTSxDQUFDaGdCLElBQUksQ0FBQztJQUNsRSxNQUFNMnRCLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUV3bUIscUVBQXNCO01BQzVCdG1CLElBQUksRUFBRXl2QixZQUFZLENBQUN6dkI7SUFDckIsQ0FBQyxDQUFDO0lBQ0YsTUFBTTJ0Qiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFMm1CLDBFQUEyQjtNQUNqQ3ptQixJQUFJLEVBQUUwdkIsWUFBWSxDQUFDMXZCO0lBQ3JCLENBQUMsQ0FBQztJQUNGLE1BQU0ydEIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRWl0QixnRUFBaUI7TUFDdkIvc0IsSUFBSSxFQUFFZ2dCLE1BQU0sQ0FBQ2hnQjtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUcsR0FBRyxFQUFFO0lBQ1pqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUV5bUIscUVBQXNCO01BQzVCdm1CLElBQUksRUFBRXlHLEdBQUcsQ0FBQ21uQixRQUFRLENBQUM1dEI7SUFDckIsQ0FBQyxDQUFDO0lBQ0YsTUFBTTJ0Qiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFNG1CLDBFQUEyQjtNQUNqQzFtQixJQUFJLEVBQUV5RyxHQUFHLENBQUNtbkIsUUFBUSxDQUFDNXRCO0lBQ3JCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxTQUFTMnZCLGFBQWEsQ0FBQzN2QixJQUFJLEVBQUU7RUFFN0IsTUFBTW9DLE1BQU0sR0FBR3BDLElBQUksQ0FBQzhGLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFFL0IsT0FBT3daLDRDQUFLLENBQUN2Z0IsSUFBSSxDQUFFLFNBQVFxRCxNQUFPLFVBQVMsRUFBRXBDLElBQUksQ0FBQztBQUNwRDtBQUVBLFVBQVU0dkIsVUFBVSxDQUFDNVAsTUFBTSxFQUFFO0VBQzNCLElBQUk7SUFDRCxNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDaUMsYUFBYSxFQUFFM1AsTUFBTSxDQUFDaGdCLElBQUksQ0FBQztJQUV0RCxNQUFNMnRCLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUVxbUIsa0VBQW1CO01BQ3pCbm1CLElBQUksRUFBRStQLE1BQU0sQ0FBQy9QO0lBQ2YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLE9BQU95RyxHQUFHLEVBQUU7SUFDWmpILE9BQU8sQ0FBQ2tILEtBQUssQ0FBQ0QsR0FBRyxDQUFDO0lBQ2xCLE1BQU1rbkIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRXNtQixrRUFBbUI7TUFDeEJwbUIsSUFBSSxFQUFFeUcsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsU0FBUzZ2QixZQUFZLENBQUM3dkIsSUFBSSxFQUFDO0VBQ3pCLE9BQU9zZiw0Q0FBSyxDQUFDdmdCLElBQUksQ0FBRSxpQkFBZ0IsRUFBRWlCLElBQUksQ0FBQztBQUM1QztBQUVBLFVBQVU4dkIsU0FBUyxDQUFDOVAsTUFBTSxFQUFDO0VBQ3pCLElBQUk7SUFDRixNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDbUMsWUFBWSxFQUFFN1AsTUFBTSxDQUFDaGdCLElBQUksQ0FBQztJQUVyRCxNQUFNMnRCLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUUyakIsaUVBQWtCO01BQ3hCempCLElBQUksRUFBRStQLE1BQU0sQ0FBQy9QO0lBQ2YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLE9BQU95RyxHQUFHLEVBQUU7SUFDWmpILE9BQU8sQ0FBQ2tILEtBQUssQ0FBQyxhQUFhLEVBQUVELEdBQUcsQ0FBQztJQUNqQyxNQUFNa25CLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUU0akIsaUVBQWtCO01BQ3ZCMWpCLElBQUksRUFBRXlHLEdBQUcsQ0FBQ21uQixRQUFRLENBQUM1dEI7SUFDdEIsQ0FBQyxDQUFDO0VBQ0o7QUFDRDtBQUVBLFNBQVMrdkIsZ0JBQWdCLENBQUMvdkIsSUFBSSxFQUFDO0VBQzdCLE9BQU9zZiw0Q0FBSyxDQUFDeFosR0FBRyxDQUFFLHFCQUFvQnlTLGtCQUFrQixDQUFDdlksSUFBSSxDQUFFLEVBQUMsRUFBRUEsSUFBSSxDQUFDO0FBQ3pFO0FBRUEsVUFBVWd3QixhQUFhLENBQUNoUSxNQUFNLEVBQUM7RUFDN0IsSUFBSTtJQUNGLE1BQU1qUSxNQUFNLEdBQUcsTUFBTTJkLCtEQUFJLENBQUNxQyxnQkFBZ0IsRUFBRS9QLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM7SUFFekQsTUFBTTJ0Qiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFZ25CLHFFQUFzQjtNQUM1QjltQixJQUFJLEVBQUUrUCxNQUFNLENBQUMvUDtJQUNmLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxPQUFPeUcsR0FBRyxFQUFFO0lBQ1osTUFBTWtuQiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFaW5CLHFFQUFzQjtNQUMzQi9tQixJQUFJLEVBQUV5RyxHQUFHLENBQUNtbkIsUUFBUSxDQUFDNXRCO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Q7QUFFQSxTQUFTaXdCLGlCQUFpQixDQUFDandCLElBQUksRUFBQztFQUM5QixPQUFPc2YsNENBQUssQ0FBQ3haLEdBQUcsQ0FBRSxxQkFBb0J5UyxrQkFBa0IsQ0FBQ3ZZLElBQUksQ0FBRSxFQUFDLEVBQUVBLElBQUksQ0FBQztBQUN6RTtBQUVBLFVBQVVrd0IsY0FBYyxDQUFDbFEsTUFBTSxFQUFDO0VBQzlCLElBQUk7SUFDRixNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDdUMsaUJBQWlCLEVBQUVqUSxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBRTFELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRWtuQixzRUFBdUI7TUFDN0JobkIsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lHLEdBQUcsRUFBRTtJQUNaLE1BQU1rbkIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRW1uQixzRUFBdUI7TUFDNUJqbkIsSUFBSSxFQUFFeUcsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNEO0FBR0EsVUFBVW13QixZQUFZLEdBQUc7RUFDdkIsTUFBTUMscUVBQVUsQ0FBQ3pKLDhEQUFlLEVBQUU4RyxPQUFPLENBQUM7QUFDNUM7QUFHQSxVQUFVNEMsYUFBYSxHQUFHO0VBQ3hCLE1BQU1ELHFFQUFVLENBQUNoTSxnRUFBaUIsRUFBRStKLFFBQVEsQ0FBQztBQUMvQztBQUdBLFVBQVVtQyxpQkFBaUIsR0FBRztFQUM1QixNQUFNRixxRUFBVSxDQUFDek0sb0VBQXFCLEVBQUVtSyxZQUFZLENBQUM7QUFDdkQ7QUFFQSxVQUFVeUMscUJBQXFCLEdBQUU7RUFDL0IsTUFBTUgscUVBQVUsQ0FBQ3RNLHlFQUEwQixFQUFFaUssZ0JBQWdCLENBQUM7QUFDaEU7QUFFQSxVQUFVeUMsaUJBQWlCLEdBQUc7RUFDNUIsTUFBTUoscUVBQVUsQ0FBQ25NLCtFQUFnQyxFQUFFK0osWUFBWSxDQUFDO0FBQ2xFO0FBRUEsVUFBVXlDLGVBQWUsR0FBRztFQUMxQixNQUFNTCxxRUFBVSxDQUFDN0wsa0VBQW1CLEVBQUU4SixVQUFVLENBQUM7QUFDbkQ7QUFFQSxVQUFVcUMsY0FBYyxHQUFHO0VBQ3pCLE1BQU1DLG1FQUFRLENBQUMsSUFBSSxFQUFFak0saUVBQWtCLEVBQUVrSyxTQUFTLENBQUM7QUFDckQ7QUFFQSxVQUFVZ0MsYUFBYSxHQUFHO0VBQ3hCLE1BQU1SLHFFQUFVLENBQUNwTCxnRUFBaUIsRUFBRXVKLFFBQVEsQ0FBQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVXNDLHFCQUFxQixHQUFHO0VBQ2hDLE1BQU1GLG1FQUFRLENBQUMsSUFBSSxFQUFFckwseUVBQTBCLEVBQUVvSixnQkFBZ0IsQ0FBQztBQUNwRTtBQUVBLFVBQVVvQyxZQUFZLEdBQUc7RUFDdkIsTUFBTVYscUVBQVUsQ0FBQzNLLCtEQUFnQixFQUFFdUosT0FBTyxDQUFDO0FBQzdDO0FBRUEsVUFBVStCLGVBQWUsR0FBRztFQUMxQixNQUFNWCxxRUFBVSxDQUFDeEssa0VBQW1CLEVBQUVzSixVQUFVLENBQUM7QUFDbkQ7QUFFQSxVQUFVOEIsZUFBZSxHQUFHO0VBQzFCLE1BQU1aLHFFQUFVLENBQUNySyxrRUFBbUIsRUFBRXFKLFVBQVUsQ0FBQztBQUNuRDtBQUVBLFVBQVU2QixrQkFBa0IsR0FBRTtFQUM1QixNQUFNYixxRUFBVSxDQUFDL0oscUVBQXNCLEVBQUVtSixhQUFhLENBQUM7QUFDekQ7QUFFQSxVQUFVMEIsaUJBQWlCLEdBQUU7RUFDM0IsTUFBTWQscUVBQVUsQ0FBQ3ZMLHFFQUFzQixFQUFFaUssWUFBWSxDQUFDO0FBQ3hEO0FBRUEsVUFBVXFDLGVBQWUsR0FBRztFQUMxQixNQUFNZixxRUFBVSxDQUFDbEssa0VBQW1CLEVBQUUwSixVQUFVLENBQUM7QUFDbkQ7QUFFQSxVQUFVd0IsY0FBYyxHQUFHO0VBQ3pCLE1BQU1oQixxRUFBVSxDQUFDNU0saUVBQWtCLEVBQUVzTSxTQUFTLENBQUM7QUFDakQ7QUFFQSxVQUFVdUIsa0JBQWtCLEdBQUc7RUFDN0IsTUFBTWpCLHFFQUFVLENBQUNyd0IscUVBQXNCLEVBQUVpd0IsYUFBYSxDQUFDO0FBQ3pEO0FBRUEsVUFBVXNCLG1CQUFtQixHQUFHO0VBQzlCLE1BQU1sQixxRUFBVSxDQUFDbnJCLHNFQUF1QixFQUFFaXJCLGNBQWMsQ0FBQztBQUMzRDtBQUVlLFVBQVU1QyxRQUFRLEdBQUc7RUFDbEMsTUFBTTlmLDhEQUFHLENBQUMsQ0FDUjZmLCtEQUFJLENBQUM4QyxZQUFZLENBQUMsRUFDbEI5QywrREFBSSxDQUFDaUQsaUJBQWlCLENBQUMsRUFDdkJqRCwrREFBSSxDQUFDa0QscUJBQXFCLENBQUMsRUFDM0JsRCwrREFBSSxDQUFDbUQsaUJBQWlCLENBQUMsRUFDdkJuRCwrREFBSSxDQUFDZ0QsYUFBYSxDQUFDLEVBQ25CaEQsK0RBQUksQ0FBQ29ELGVBQWUsQ0FBQyxFQUNyQnBELCtEQUFJLENBQUN5RCxZQUFZLENBQUMsRUFDbEJ6RCwrREFBSSxDQUFDMEQsZUFBZSxDQUFDLEVBQ3JCMUQsK0RBQUksQ0FBQ3FELGNBQWMsQ0FBQyxFQUNwQnJELCtEQUFJLENBQUNpRSxtQkFBbUIsQ0FBQyxFQUN6QmpFLCtEQUFJLENBQUN3RCxxQkFBcUIsQ0FBQyxFQUMzQnhELCtEQUFJLENBQUN1RCxhQUFhLENBQUMsRUFDbkJ2RCwrREFBSSxDQUFDMkQsZUFBZSxDQUFDLEVBQ3JCM0QsK0RBQUksQ0FBQzRELGtCQUFrQixDQUFDLEVBQ3hCNUQsK0RBQUksQ0FBQ2dFLGtCQUFrQixDQUFDLEVBQ3hCaEUsK0RBQUksQ0FBQzhELGVBQWUsQ0FBQyxFQUNyQjlELCtEQUFJLENBQUMrRCxjQUFjLENBQUMsRUFDcEIvRCwrREFBSSxDQUFDNkQsaUJBQWlCLENBQUMsQ0FDeEIsQ0FBQztBQUNKLEM7Ozs7Ozs7Ozs7OztBQ2hrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDaUQ7QUFrQmpEO0FBRTFCLFNBQVNLLHVCQUF1QixDQUFDdnhCLElBQUksRUFBQztFQUNsQyxPQUFPc2YsNENBQUssQ0FBQ3haLEdBQUcsQ0FBRSxTQUFROUYsSUFBSyxRQUFPLENBQUM7QUFDM0M7QUFFQSxVQUFVd3hCLG9CQUFvQixDQUFDeFIsTUFBTSxFQUFDO0VBQ2xDLElBQUc7SUFDQyxNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDNkQsdUJBQXVCLEVBQUV2UixNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBQy9ELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNON3RCLElBQUksRUFBRWdyQiw4RUFBK0I7TUFDckM5cUIsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDakIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxRQUFNeUcsR0FBRyxFQUFDO0lBQ1BqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDTjd0QixJQUFJLEVBQUVpckIsOEVBQStCO01BQ3JDcmtCLEtBQUssRUFBRUQsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN4QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBR0EsU0FBU3l4QixrQkFBa0IsQ0FBQ3p4QixJQUFJLEVBQUM7RUFDN0IsT0FBT3NmLDRDQUFLLENBQUNwWixNQUFNLENBQUUsa0JBQWlCbEcsSUFBSyxFQUFDLENBQUM7QUFDakQ7QUFFQSxVQUFVMHhCLGNBQWMsQ0FBQzFSLE1BQU0sRUFBQztFQUM1QixJQUFHO0lBQ0gsTUFBTWpRLE1BQU0sR0FBRyxNQUFNMmQsK0RBQUksQ0FBQytELGtCQUFrQixFQUFFelIsTUFBTSxDQUFDaGdCLElBQUksQ0FBQztJQUMxRCxNQUFNMnRCLDhEQUFHLENBQUM7TUFDTjd0QixJQUFJLEVBQUVxc0Isc0VBQXVCO01BQzdCbnNCLElBQUksRUFBRStQLE1BQU0sQ0FBQy9QO0lBQ2pCLENBQUMsQ0FBQztFQUNGLENBQUMsUUFBTXlHLEdBQUcsRUFBQztJQUNQakgsT0FBTyxDQUFDa0gsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDbEIsTUFBTWtuQiw4REFBRyxDQUFDO01BQ043dEIsSUFBSSxFQUFFc3NCLHNFQUF1QjtNQUM3QjFsQixLQUFLLEVBQUVELEdBQUcsQ0FBQ21uQixRQUFRLENBQUM1dEI7SUFDeEIsQ0FBQyxDQUFDO0VBQ047QUFDSjtBQUVBLFNBQVMyeEIsV0FBVyxDQUFDM3hCLElBQUksRUFBRTtFQUN2QlIsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFFTyxJQUFJLENBQUM7RUFDaEMsT0FBT3NmLDRDQUFLLENBQUN4WixHQUFHLENBQUUsU0FBUTlGLElBQUssRUFBQyxDQUFDO0FBQ25DO0FBRUEsVUFBVTR4QixRQUFRLENBQUM1UixNQUFNLEVBQUU7RUFDekIsSUFBSTtJQUNGLE1BQU1qUSxNQUFNLEdBQUcsTUFBTTJkLCtEQUFJLENBQUNpRSxXQUFXLEVBQUUzUixNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBQ25ELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRTRxQixnRUFBaUI7TUFDdkIxcUIsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT3lHLEdBQUcsRUFBRTtJQUNaakgsT0FBTyxDQUFDa0gsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDbEIsTUFBTWtuQiw4REFBRyxDQUFDO01BQ1I3dEIsSUFBSSxFQUFFNnFCLGdFQUFpQjtNQUN2QmprQixLQUFLLEVBQUVELEdBQUcsQ0FBQ21uQixRQUFRLENBQUM1dEI7SUFDdEIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUdGLFNBQVM2eEIsZ0JBQWdCLENBQUM3eEIsSUFBSSxFQUFDO0VBQzNCLE9BQU9zZiw0Q0FBSyxDQUFDeFosR0FBRyxDQUFDLGlCQUFpQixFQUFFOUYsSUFBSSxDQUFDO0FBQzdDO0FBRUEsVUFBVTh4QixhQUFhLENBQUM5UixNQUFNLEVBQUM7RUFDM0IsSUFBRztJQUNILE1BQU1qUSxNQUFNLEdBQUcsTUFBTTJkLCtEQUFJLENBQUNtRSxnQkFBZ0IsRUFBRTdSLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM7SUFDeEQsTUFBTTJ0Qiw4REFBRyxDQUFDO01BQ043dEIsSUFBSSxFQUFFd3NCLHFFQUFzQjtNQUM1QnRzQixJQUFJLEVBQUUrUCxNQUFNLENBQUMvUDtJQUNqQixDQUFDLENBQUM7RUFDRixDQUFDLFFBQU15RyxHQUFHLEVBQUM7SUFDUGpILE9BQU8sQ0FBQ2tILEtBQUssQ0FBQ0QsR0FBRyxDQUFDO0lBQ2xCLE1BQU1rbkIsOERBQUcsQ0FBQztNQUNON3RCLElBQUksRUFBRXlzQixxRUFBc0I7TUFDNUI3bEIsS0FBSyxFQUFFRCxHQUFHLENBQUNtbkIsUUFBUSxDQUFDNXRCO0lBQ3hCLENBQUMsQ0FBQztFQUNOO0FBQ0o7QUFFQSxTQUFTK3hCLGlCQUFpQixDQUFDL3hCLElBQUksRUFBQztFQUM1QixPQUFPc2YsNENBQUssQ0FBQ3haLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRTlGLElBQUksQ0FBQztBQUM5QztBQUVBLFVBQVVneUIsY0FBYyxDQUFDaFMsTUFBTSxFQUFDO0VBQzVCLElBQUc7SUFDSCxNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDcUUsaUJBQWlCLEVBQUUvUixNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBQ3pELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNON3RCLElBQUksRUFBRTJzQixzRUFBdUI7TUFDN0J6c0IsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDakIsQ0FBQyxDQUFDO0VBQ0YsQ0FBQyxRQUFNeUcsR0FBRyxFQUFDO0lBQ1BqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDTjd0QixJQUFJLEVBQUU0c0Isc0VBQXVCO01BQzdCaG1CLEtBQUssRUFBRUQsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN4QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBS0EsU0FBU2l5QixhQUFhLENBQUNqeUIsSUFBSSxFQUFDO0VBQ3hCUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBR3l5QixJQUFJLENBQUNDLFNBQVMsQ0FBQ255QixJQUFJLENBQUMsQ0FBQztFQUNwRCxPQUFPc2YsNENBQUssQ0FBQzRPLEtBQUssQ0FBQyxZQUFZLEVBQUVsdUIsSUFBSSxDQUFDO0FBQzFDO0FBRUEsVUFBVW95QixVQUFVLENBQUNwUyxNQUFNLEVBQUM7RUFDeEIsSUFBRztJQUNILE1BQU1qUSxNQUFNLEdBQUcsTUFBTTJkLCtEQUFJLENBQUN1RSxhQUFhLEVBQUVqUyxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBQ3JELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNON3RCLElBQUksRUFBRTRyQixrRUFBbUI7TUFDekIxckIsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDakIsQ0FBQyxDQUFDO0VBQ0YsQ0FBQyxRQUFNeUcsR0FBRyxFQUFDO0lBQ1BqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDTjd0QixJQUFJLEVBQUU2ckIsa0VBQW1CO01BQ3pCamxCLEtBQUssRUFBRUQsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN4QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBR0EsU0FBU3F5QixhQUFhLEdBQUU7RUFDcEIsT0FBTy9TLDRDQUFLLENBQUN4WixHQUFHLENBQUMsT0FBTyxDQUFDO0FBQzdCO0FBRUEsVUFBVXdzQixVQUFVLENBQUN0UyxNQUFNLEVBQUM7RUFDeEIsSUFBRztJQUNILE1BQU1qUSxNQUFNLEdBQUcsTUFBTTJkLCtEQUFJLENBQUMyRSxhQUFhLEVBQUVyUyxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBQ3JELE1BQU0ydEIsOERBQUcsQ0FBQztNQUNON3RCLElBQUksRUFBRThxQixtRUFBb0I7TUFDMUI1cUIsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDakIsQ0FBQyxDQUFDO0VBQ0YsQ0FBQyxRQUFNeUcsR0FBRyxFQUFDO0lBQ1BqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDTjd0QixJQUFJLEVBQUUrcUIsbUVBQW9CO01BQzFCbmtCLEtBQUssRUFBRUQsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN4QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBRUEsU0FBU3V5QixTQUFTLENBQUN2eUIsSUFBSSxFQUFDO0VBQ3BCLE9BQU9zZiw0Q0FBSyxDQUFDNE8sS0FBSyxDQUFFLFNBQVFsdUIsSUFBSyxTQUFRLEVBQUVBLElBQUksQ0FBQztBQUNwRDtBQUVBLFVBQVV3eUIsTUFBTSxDQUFDeFMsTUFBTSxFQUFDO0VBQ3BCLElBQUc7SUFDRixNQUFNalEsTUFBTSxHQUFHLE1BQU0yZCwrREFBSSxDQUFDNkUsU0FBUyxFQUFFdlMsTUFBTSxDQUFDaGdCLElBQUksQ0FBQztJQUNsRCxNQUFNMnRCLDhEQUFHLENBQUM7TUFDTjd0QixJQUFJLEVBQUUrckIsNkRBQWM7TUFDcEI3ckIsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDakIsQ0FBQyxDQUFDO0VBQ0YsQ0FBQyxRQUFNeUcsR0FBRyxFQUFDO0lBQ1BqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDTjd0QixJQUFJLEVBQUVnc0IsNkRBQWM7TUFDcEJwbEIsS0FBSyxFQUFFRCxHQUFHLENBQUNtbkIsUUFBUSxDQUFDNXRCO0lBQ3hCLENBQUMsQ0FBQztFQUNOO0FBQ0o7QUFFQSxTQUFTeXlCLFdBQVcsQ0FBQ3p5QixJQUFJLEVBQUM7RUFDdEIsT0FBT3NmLDRDQUFLLENBQUNwWixNQUFNLENBQUUsU0FBUWxHLElBQUssV0FBVSxFQUFFQSxJQUFJLENBQUM7QUFDdkQ7QUFFQSxVQUFVMHlCLFFBQVEsQ0FBQzFTLE1BQU0sRUFBQztFQUN0QixJQUFHO0lBQ0YsTUFBTWpRLE1BQU0sR0FBRyxNQUFNMmQsK0RBQUksQ0FBQytFLFdBQVcsRUFBRXpTLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM7SUFDcEQsTUFBTTJ5QixnRUFBSyxDQUFDLElBQUksQ0FBQztJQUNqQixNQUFNaEYsOERBQUcsQ0FBQztNQUNON3RCLElBQUksRUFBRWtzQiwrREFBZ0I7TUFDdEJoc0IsSUFBSSxFQUFFK1AsTUFBTSxDQUFDL1A7SUFDakIsQ0FBQyxDQUFDO0VBQ0YsQ0FBQyxRQUFNeUcsR0FBRyxFQUFDO0lBQ1BqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDTjd0QixJQUFJLEVBQUVtc0IsK0RBQWdCO01BQ3RCdmxCLEtBQUssRUFBRUQsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN4QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBR0EsU0FBUzR5QixRQUFRLENBQUM1eUIsSUFBSSxFQUFDO0VBQ25CLE9BQU9zZiw0Q0FBSyxDQUFDdmdCLElBQUksQ0FBQyxhQUFhLEVBQUVpQixJQUFJLENBQUM7QUFDMUM7O0FBRUE7QUFDQSxVQUFVNnlCLEtBQUssQ0FBQzdTLE1BQU0sRUFBQztFQUNuQixJQUFHO0lBQ0osTUFBTWpRLE1BQU0sR0FBRyxNQUFNMmQsK0RBQUksQ0FBQ2tGLFFBQVEsRUFBRTVTLE1BQU0sQ0FBQ2hnQixJQUFJLENBQUM7SUFDL0MsTUFBTTJ0Qiw4REFBRyxDQUFDO01BQ043dEIsSUFBSSxFQUFFc3JCLDZEQUFjO01BQ3BCcHJCLElBQUksRUFBRStQLE1BQU0sQ0FBQy9QO0lBQ2pCLENBQUMsQ0FBQztFQUNGLENBQUMsUUFBTXlHLEdBQUcsRUFBQztJQUNQakgsT0FBTyxDQUFDa0gsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDbEIsTUFBTWtuQiw4REFBRyxDQUFDO01BQ043dEIsSUFBSSxFQUFFdXJCLDZEQUFjO01BQ3BCM2tCLEtBQUssRUFBRUQsR0FBRyxDQUFDbW5CLFFBQVEsQ0FBQzV0QjtJQUN4QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBRUEsU0FBUzh5QixTQUFTLEdBQUU7RUFDaEIsT0FBT3hULDRDQUFLLENBQUN2Z0IsSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUNyQztBQUVBLFVBQVVnMEIsTUFBTSxHQUFFO0VBQ2QsSUFBRztJQUNILE1BQU1yRiwrREFBSSxDQUFDb0YsU0FBUyxDQUFDO0lBQ3JCLE1BQU1uRiw4REFBRyxDQUFDO01BQ043dEIsSUFBSSxFQUFFbXJCLDhEQUFlQTtJQUN6QixDQUFDLENBQUM7RUFDRixDQUFDLFFBQU14a0IsR0FBRyxFQUFDO0lBQ1BqSCxPQUFPLENBQUNrSCxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUNsQixNQUFNa25CLDhEQUFHLENBQUM7TUFDTjd0QixJQUFJLEVBQUVvckIsOERBQWU7TUFDckJ4a0IsS0FBSyxFQUFFRCxHQUFHLENBQUNtbkIsUUFBUSxDQUFDNXRCO0lBQ3hCLENBQUMsQ0FBQztFQUNOO0FBQ0o7QUFFQSxTQUFTZ3pCLFNBQVMsQ0FBQ2h6QixJQUFJLEVBQUM7RUFDcEIsT0FBT3NmLDRDQUFLLENBQUN2Z0IsSUFBSSxDQUFDLE9BQU8sRUFBRWlCLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdEM7O0FBRUEsVUFBVWl6QixNQUFNLENBQUNqVCxNQUFNLEVBQUM7RUFDcEIsSUFBRztJQUNOLE1BQU1qUSxNQUFNLEdBQUcsTUFBTTJkLCtEQUFJLENBQUNzRixTQUFTLEVBQUVoVCxNQUFNLENBQUNoZ0IsSUFBSSxDQUFDO0lBQ2pEUixPQUFPLENBQUNDLEdBQUcsQ0FBQ3NRLE1BQU0sQ0FBQztJQUNoQixNQUFNNGQsOERBQUcsQ0FBQztNQUNON3RCLElBQUksRUFBRXlyQiw4REFBZUE7SUFFekIsQ0FBQyxDQUFDO0VBQ0YsQ0FBQyxRQUFNOWtCLEdBQUcsRUFBQztJQUNQLE1BQU1rbkIsOERBQUcsQ0FBQztNQUVON3RCLElBQUksRUFBRTByQiw4REFBZTtNQUNyQjlrQixLQUFLLEVBQUVELEdBQUcsQ0FBQ21uQixRQUFRLENBQUM1dEI7SUFDeEIsQ0FBQyxDQUFDO0VBQ047QUFDSjtBQUVBLFNBQVM2dEIsZUFBZSxDQUFDN3RCLElBQUksRUFBRTtFQUMzQlIsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVPLElBQUksQ0FBQztFQUNuQyxPQUFPc2YsNENBQUssQ0FBQzRPLEtBQUssQ0FBQyxvQkFBb0IsRUFBRWx1QixJQUFJLENBQUM7QUFDaEQ7QUFFQSxVQUFVOHRCLFlBQVksQ0FBQzlOLE1BQU0sRUFBRTtFQUM3QixJQUFJO0lBQ0QsTUFBTWpRLE1BQU0sR0FBRyxNQUFNMmQsK0RBQUksQ0FBQ0csZUFBZSxFQUFFN04sTUFBTSxDQUFDaGdCLElBQUksQ0FBQztJQUV4RCxNQUFNMnRCLDhEQUFHLENBQUM7TUFDUjd0QixJQUFJLEVBQUU4c0IsMkVBQTRCO01BQ2xDNXNCLElBQUksRUFBRStQLE1BQU0sQ0FBQy9QO0lBQ2YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLE9BQU95RyxHQUFHLEVBQUU7SUFDWmpILE9BQU8sQ0FBQ2tILEtBQUssQ0FBQ0QsR0FBRyxDQUFDO0lBQ2xCLE1BQU1rbkIsOERBQUcsQ0FBQztNQUNSN3RCLElBQUksRUFBRStzQiwyRUFBNEI7TUFDbENubUIsS0FBSyxFQUFFRCxHQUFHLENBQUNtbkIsUUFBUSxDQUFDNXRCO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFRixVQUFVa3pCLGVBQWUsR0FBRztFQUN4QixNQUFNOUMscUVBQVUsQ0FBQ3pRLG1FQUFvQixFQUFFMlMsVUFBVSxDQUFDO0FBQ3BEO0FBRUEsVUFBVWEsa0JBQWtCLEdBQUc7RUFDN0IsTUFBTS9DLHFFQUFVLENBQUN6RCwyRUFBNEIsRUFBRW1CLFlBQVksQ0FBQztBQUM5RDtBQUVGLFVBQVVzRixtQkFBbUIsR0FBRTtFQUMzQixNQUFNaEQscUVBQVUsQ0FBQ2xFLHNFQUF1QixFQUFFd0YsY0FBYyxDQUFDO0FBQzdEO0FBRUEsVUFBVTJCLGtCQUFrQixHQUFFO0VBQzFCLE1BQU1qRCxxRUFBVSxDQUFDL0QscUVBQXNCLEVBQUV5RixhQUFhLENBQUM7QUFDM0Q7QUFFQSxVQUFVd0IsbUJBQW1CLEdBQUU7RUFDM0IsTUFBTWxELHFFQUFVLENBQUM1RCxzRUFBdUIsRUFBRXdGLGNBQWMsQ0FBQztBQUM3RDtBQUVBLFVBQVV1QixTQUFTLEdBQUU7RUFDakIsTUFBTW5ELHFFQUFVLENBQUMzRSxrRUFBbUIsRUFBRTJHLFVBQVUsQ0FBQztBQUNyRDtBQUVBLFVBQVVvQixhQUFhLEdBQUc7RUFDdEIsTUFBTXBELHFFQUFVLENBQUMxUSxnRUFBaUIsRUFBRWtTLFFBQVEsQ0FBQztBQUMvQztBQUVGLFVBQVU2Qix5QkFBeUIsR0FBRTtFQUNqQyxNQUFNckQscUVBQVUsQ0FBQ2h2Qiw4RUFBK0IsRUFBRW93QixvQkFBb0IsQ0FBQztBQUMzRTtBQUVBLFVBQVVrQyxXQUFXLEdBQUU7RUFDbkIsTUFBTXRELHFFQUFVLENBQUN4RSw2REFBYyxFQUFFNEcsTUFBTSxDQUFDO0FBQzVDO0FBRUEsVUFBVW1CLGFBQWEsR0FBRTtFQUNyQixNQUFNdkQscUVBQVUsQ0FBQ3JFLCtEQUFnQixFQUFFMkcsUUFBUSxDQUFDO0FBQ2hEO0FBRUEsVUFBVWtCLFVBQVUsR0FBRTtFQUNsQixNQUFNeEQscUVBQVUsQ0FBQ2pGLDZEQUFjLEVBQUUwSCxLQUFLLENBQUM7QUFDM0M7QUFFQSxVQUFVZ0IsV0FBVyxHQUFFO0VBQ25CLE1BQU16RCxxRUFBVSxDQUFDcEYsOERBQWUsRUFBRStILE1BQU0sQ0FBQztBQUM3QztBQUVBLFVBQVVlLFdBQVcsR0FBRTtFQUNuQnQwQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDekIsTUFBTTJ3QixxRUFBVSxDQUFDOUUsOERBQWUsRUFBRTJILE1BQU0sQ0FBQztBQUM3QztBQUVlLFVBQVUxRixRQUFRLEdBQUU7RUFDL0IsTUFBTS9mLDhEQUFHLENBQUMsQ0FDTjZmLCtEQUFJLENBQUM4RixrQkFBa0IsQ0FBQyxFQUN4QjlGLCtEQUFJLENBQUM2RixlQUFlLENBQUMsRUFDckI3RiwrREFBSSxDQUFDb0cseUJBQXlCLENBQUMsRUFDL0JwRywrREFBSSxDQUFDK0YsbUJBQW1CLENBQUMsRUFDekIvRiwrREFBSSxDQUFDZ0csa0JBQWtCLENBQUMsRUFDeEJoRywrREFBSSxDQUFDaUcsbUJBQW1CLENBQUMsRUFDekJqRywrREFBSSxDQUFDa0csU0FBUyxDQUFDLEVBQ2ZsRywrREFBSSxDQUFDbUcsYUFBYSxDQUFDLEVBQ25CbkcsK0RBQUksQ0FBQ3FHLFdBQVcsQ0FBQyxFQUNqQnJHLCtEQUFJLENBQUNzRyxhQUFhLENBQUMsRUFDbkJ0RywrREFBSSxDQUFDdUcsVUFBVSxDQUFDLEVBQ2hCdkcsK0RBQUksQ0FBQ3dHLFdBQVcsQ0FBQyxFQUNqQnhHLCtEQUFJLENBQUN5RyxXQUFXLENBQUMsQ0FDcEIsQ0FBQztBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQzs7Ozs7Ozs7Ozs7O0FDbFhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7QUFDVztBQUNDO0FBQ2pCO0FBRVo7QUFDRjtBQUVoQyxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDO0VBQUV4MUIsUUFBUTtFQUFFK3JCO0FBQVMsQ0FBQyxLQUFNelUsSUFBSSxJQUFNbUssTUFBTSxJQUFLO0VBQ3pFeGdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdWdCLE1BQU0sQ0FBQztFQUNuQixPQUFPbkssSUFBSSxDQUFDbUssTUFBTSxDQUFDO0FBQ3JCLENBQUM7QUFFRCxNQUFNZ1UsY0FBYyxHQUFHLE1BQU07RUFDM0IsTUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBRTtFQUM3QyxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBYyxFQUFFRixnQkFBZ0IsQ0FBQztFQUN0RCxNQUFNSyxRQUFRLEdBQUcsUUFDYkMsU0FBd0MsR0FDeENDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQVcsQ0FBQyxDQUFDO0VBQ3hELE1BQU0xVSxLQUFLLEdBQUcrVSx5REFBVyxDQUFDaE4saURBQU8sRUFBRTRNLFFBQVEsQ0FBQztFQUM1QzNVLEtBQUssQ0FBQ0ksUUFBUSxHQUFHb1UsY0FBYyxDQUFDUSxHQUFHLENBQUNySCw4Q0FBUSxDQUFDO0VBQzdDLE9BQU8zTixLQUFLO0FBQ2QsQ0FBQztBQUVELE1BQU1SLE9BQU8sR0FBR3lWLHdFQUFhLENBQUNWLGNBQWMsRUFBRTtFQUM1Q1csS0FBSztBQUNQLENBQUMsQ0FBQztBQUVhMVYsc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDNUJ0QjtBQUFBO0FBQUE7QUFBMkM7QUFFNUIsZ0VBQUMsR0FBR3pXLElBQUksS0FBSztFQUMxQm9zQix1REFBUyxFQUFFO0VBQ1gsT0FBT25OLHFEQUFPLENBQUMsR0FBR2pmLElBQUksQ0FBQztBQUN6QixDQUFDO0FBQ0Qsb0M7Ozs7Ozs7Ozs7O0FDTkEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvdXNlci9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2VyL1tpZF0uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtJbnB1dCwgTWVudSwgUm93LCBDb2wsIEJ1dHRvbiwgVG9vbHRpcCwgQXV0b0NvbXBsZXRlLCBEZXNjcmlwdGlvbnN9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBsb2dvdXRSZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCJhbnRkL2xpYi9sYXlvdXQvbGF5b3V0XCI7XHJcblxyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qge21lLCBsb2dPdXRMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgY29uc3Qge2tleXdvcmRzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0V29yZHMgPSBrZXl3b3Jkcz8ubWFwKGl0ZW1zID0+ICh7dmFsdWU6IGl0ZW1zLm5hbWV9KSk7XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0V29yZHMpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlU2VhcmNoSW5wdXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0U2VhcmNoSW5wdXQodmFsdWUpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICAgIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaElucHV0fWApO1xyXG4gICAgICB9LCBbc2VhcmNoSW5wdXRdKTtcclxuXHJcbiAgICBjb25zdCBvbkxvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICBSb3V0ZXIucmVwbGFjZShgL2ApO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaElucHV0KHZhbHVlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgIDxNZW51IGlkPVwibWVudTFcIiBtb2RlPSdob3Jpem9udGFsJz4gICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxoMSBjbGFzc05hbWU9XCJpdGVtMVwiID5GQVNISU9OQVJZPC9oMT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj48aDMgY2xhc3NOYW1lPVwiaXRlbTFcIiA+TXkgUHJvZmlsZTwvaDM+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9hbGxQb3N0c1wiPjxoMyBjbGFzc05hbWU9XCJpdGVtMVwiID5BbGwgTG9va3M8L2gzPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPiBcclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gY2xhc3NOYW1lPVwiaXRlbTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT0n7LC+6rOgIOyLtuydgCDruIzrnpzrk5zrpbwg6rKA7IOJ7ZW067O07IS47JqULic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Jlc3VsdFdvcmRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2xheW91dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbGF5b3V0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJpdGVtMVwiPnsgbWUgPyBcIu2YhOyerCDroZzqt7jsnbgg6rOE7KCVOiBcIiArIG1lLm5pY2tuYW1lIDogbnVsbH08L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICB7IG1lIFxyXG4gICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24xXCIgb25DbGljaz17b25Mb2dPdXR9IGxvYWRpbmc9e2xvZ091dExvYWRpbmd9ID7roZzqt7jslYTsm4M8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT57Y2hpbGRyZW59PC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvb3RlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMgdGl0bGU9XCJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwi6rCc67Cc7J6QXCI+6rO964uk7J2APC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9XCLsl7Drnb3ssphcIj4wMTAgLSAzMzg0IC0gMjg3NDwvRGVzY3JpcHRpb25zLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiR2l0LUh1YlwiPjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0d3YWstZGFldW4vZmFzaGlvbmFyeS5naXRcIj5Tb3VyY2UgY29kZTwvYT48L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIuydtOugpeyEnFwiPjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPVwiaHR0cHM6Ly9rbm93aW5nLXlvZ3VydC1jZDIubm90aW9uLnNpdGUvM2RiZWIzMDBiYTc0NDg2Njg5NDc0MTAwZDVjOTg5NzFcIj7qsJzrsJzsnpDsnZggTm90aW9uPC9hPjwvRGVzY3JpcHRpb25zLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9ucz5cclxuICAgICAgICAgICAgPC9Gb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlRWxlbWVudCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgT25lSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG5cclxuICAgLmltZzF7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICB9XHJcblxyXG5gO1xyXG5cclxuY29uc3QgVXNlckRhdGVDZWxsUmVuZGVyID0gKHZhbHVlKSA9PiB7XHJcblxyXG4gICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgY29uc3Qge3VzZXJDYWxlbmRhckRhdGEsIHVzZXJJbmZvfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgIHR5cGU6IExPQURfVVNFUl9DQUxFTkRBUl9EQVRBX1JFUVVFU1QsXHJcbiAgICAgICAgIGRhdGE6IHVzZXJJbmZvLmlkXHJcbiAgICAgIH0pO1xyXG4gICB9LCBbXSk7XHJcblxyXG4gICBjb25zdCBnZXREYXlJbmZvID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYWxlbmRhckRhdGEgPSBbXTtcclxuICAgICAgbGV0IGRpYXJ5TW9tZW50O1xyXG5cclxuICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCB1c2VyQ2FsZW5kYXJEYXRhLmxlbmd0aDsgaSsrICl7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi7IOd7ISxIOuCoOynnFwiLCAgbW9tZW50KHVzZXJDYWxlbmRhckRhdGFbaV0uY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKTtcclxuICAgICAgICAgZGlhcnlNb21lbnQgPSBtb21lbnQodXNlckNhbGVuZGFyRGF0YVtpXS5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVktTU0tRERcIik7XHJcblxyXG5cclxuICAgICAgICAgaWYoZGlhcnlNb21lbnQpe1xyXG4gICAgICAgICAgICBjYWxlbmRhckRhdGEucHVzaCgge1xyXG4gICAgICAgICAgICAgICBwaG90bzogdXNlckNhbGVuZGFyRGF0YVtpXS5JbWFnZXNbMF0uc3JjLFxyXG4gICAgICAgICAgICAgICB0aXRsZTogdXNlckNhbGVuZGFyRGF0YVtpXS5sb29rTmFtZSxcclxuICAgICAgICAgICAgICAgZGF0ZTogZGlhcnlNb21lbnQsXHJcbiAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogdXNlckNhbGVuZGFyRGF0YVtpXS5jcmVhdGVkQXQsXHJcbiAgICAgICAgICAgICAgIGlkOiB1c2VyQ2FsZW5kYXJEYXRhW2ldLmlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjYWxlbmRhckRhdGEgfHwgW107XHJcbiAgIH07XHJcblxyXG4gICBjb25zdCBQaG90b1JhbmRlciA9ICh7ZGF0ZSwgcGhvdG8sIHBvc3RJZH0pID0+IHtcclxuXHJcbiAgIFxyXG4gICAgICBzd2l0Y2gobW9tZW50KHZhbHVlKS5mb3JtYXQoXCJZWS1NTS1ERFwiKSl7XHJcbiAgICAgICAgIGNhc2UgbW9tZW50KGRhdGUpLmZvcm1hdChcIllZLU1NLUREXCIpOiAgXHJcbiAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdC8ke3Bvc3RJZH1gfSA+XHJcbiAgICAgICAgICAgICAgIDxPbmVJbWFnZT48aW1nIGNsYXNzTmFtZT1cImltZzFcIiBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtwaG90b31gfSAvPjwvT25lSW1hZ2U+IFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICk7XHJcbiAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgKTsgICBcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgY29uc3QgTmFtZVJhbmRlciA9ICh7ZGF0ZSwgbmFtZX0pID0+IHtcclxuXHJcbiAgICAgIHN3aXRjaChtb21lbnQodmFsdWUpLmZvcm1hdChcIllZLU1NLUREXCIpKXtcclxuICAgICAgICAgY2FzZSBtb21lbnQoZGF0ZSkuZm9ybWF0KFwiWVktTU0tRERcIikgOiBcclxuICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8aDU+e25hbWV9PC9oNT5cclxuICAgICAgICAgKTtcclxuICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICApOyAgIFxyXG4gICAgICB9XHJcblxyXG4gICB9O1xyXG5cclxuICAgY29uc3QgZGF5SW5mbyA9IGdldERheUluZm8oKTtcclxuXHJcbiByZXR1cm4oXHJcbiAgPGRpdj5cclxuICAge2RheUluZm8ubWFwKChpbmZvKSA9PiAoXHJcblxyXG4gICAgICAgICA8ZGl2IGtleT17aW5mby5pZH0gPlxyXG4gICAgICAgICAgICB7LyogPExvb2tSYW5kZXIgZGF0ZT17aW5mby5kYXRlfSBwaG90bz17aW5mby5waG90b30gdGl0bGU9e2luZm8udGl0bGV9IC8+ICAqL31cclxuICAgICAgICAgICAgICB7LyogPGg1PntpbmZvLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogNTB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbmZvLnBob3RvfWB9IC8+XHJcbiAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICA8TmFtZVJhbmRlciBkYXRlPXtpbmZvLmNyZWF0ZWRBdH0gIG5hbWU9e2luZm8udGl0bGV9IC8+IFxyXG4gICAgICAgICA8UGhvdG9SYW5kZXIgcG9zdElkPXtpbmZvLmlkfSBkYXRlPXtpbmZvLmNyZWF0ZWRBdH0gcGhvdG89e2luZm8ucGhvdG99IC8+XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICkpfVxyXG4gIDwvZGl2PlxyXG4gKTtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckRhdGVDZWxsUmVuZGVyOyIsImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhU3F1YXJlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIEVtcHR5LCBMaXN0LCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTGkgPSBzdHlsZWQubGlgXHJcbiAgLmZJY29ue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE9uZVVzZXJGb2xsb3dlciA9IHN0eWxlZC5kaXZgXHJcbiAgLmNhcmQxe1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgaGVpZ2h0OiAyMTVweDtcclxuICB9XHJcbiAgLmNhcmQye1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gIH1cclxuICAuaW1nMXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYTF7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyRm9sbG93ZXJzID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7dXNlckluZm99ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICBjb25zdCByZWZlck1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IElmRm9sbG93ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgICBpZih1c2VySW5mby5Gb2xsb3dlcnNbMF0gIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgcmV0dXJuIDxMaT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3F1YXJlfSBjbGFzc05hbWU9J2ZpY29uJyAvPiB7dXNlckluZm8uRm9sbG93ZXJzWzBdLm5pY2tuYW1lfTwvTGk+O1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHVzZXJJbmZvLkZvbGxvd2Vyc1sxXSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICByZXR1cm4gPExpPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcXVhcmV9IGNsYXNzTmFtZT0nZmljb24nIC8+e3VzZXJJbmZvLkZvbGxvd2Vyc1sxXS5uaWNrbmFtZX08L0xpPjtcclxuICAgICAgfVxyXG4gICAgICBpZih1c2VySW5mby5Gb2xsb3dlcnNbMl0gIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgcmV0dXJuIDxMaT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3F1YXJlfSBjbGFzc05hbWU9J2ZpY29uJyAvPnt1c2VySW5mby5Gb2xsb3dlcnNbMl0ubmlja25hbWV9PC9MaT47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICByZXR1cm4gIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDslYTsp4Eg7YyU66Gc7JuM6rCAIOyXhuyWtOyalC5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3JpZ2luYWxJbWFnZSA9IGBodHRwczovL3N0YXRpYy52ZWN0ZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDIvMzE4LzI3MS9vcmlnaW5hbC91c2VyLXByb2ZpbGUtaWNvbi1mcmVlLXZlY3Rvci5qcGdgO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8T25lVXNlckZvbGxvd2VyPlxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICB0aXRsZT1cIkZvbGxvd2Vyc1wiXHJcbiAgICAgICAgICBleHRyYT17PGEgb25DbGljaz17cmVmZXJNb2RhbH0+TW9yZTwvYT59XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkMVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElmRm9sbG93ZXIgLz5cclxuICAgICAgICBcclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPE1vZGFsIHRpdGxlPXt1c2VySW5mby5uaWNrbmFtZSArIFwiIOydmCDtjJTroZzsm4wg66qp66GdXCJ9IGZvb3Rlcj17bnVsbH0gb25DYW5jZWw9e2hhbmRsZUNhbmNlbH0gb3Blbj17aXNNb2RhbE9wZW59PlxyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgIGdyaWQ9e3tcclxuICAgICAgICAgICAgICAgIGd1dHRlcjogNTAsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW46IDNcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3VzZXJJbmZvLkZvbGxvd2Vyc31cclxuICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbXMpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxPbmVVc2VyRm9sbG93ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkMidcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0LyR7aXRlbS5pZH1gfSA+e2l0ZW0ubmlja25hbWV9PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICBjb3Zlcj17PGEgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0LyR7aXRlbS5pZH1gfSA+PE9uZVVzZXJGb2xsb3dlcj48aW1nIGNsYXNzTmFtZT0naW1nMSdhbHQ9XCJleGFtcGxlXCIgc3JjPXtpdGVtLkltYWdlLnNyYyA9PT0gb3JpZ2luYWxJbWFnZSA/IG9yaWdpbmFsSW1hZ2UgOiBgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aXRlbS5JbWFnZS5zcmN9YH0gLz48L09uZVVzZXJGb2xsb3dlcj48L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlci8ke2l0ZW1zLmlkfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezEwMH0gc3JjPXtpdGVtcy5JbWFnZS5zcmMgPT09IG9yaWdpbmFsSW1hZ2UgPyBvcmlnaW5hbEltYWdlIDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2l0ZW1zLkltYWdlLnNyY31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdhMScgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyLyR7aXRlbXMuaWR9YH0gPntpdGVtcy5uaWNrbmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvT25lVXNlckZvbGxvd2VyPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgIDwvTGlzdD4gXHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L09uZVVzZXJGb2xsb3dlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJGb2xsb3dlcnM7IiwiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFTcXVhcmUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIEVtcHR5LCBMaXN0LCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgT25lVXNlckZvbGxvd2luZyA9IHN0eWxlZC5kaXZgXHJcbiAgLmljb25ze1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgfVxyXG4gIC5jYXJkMXtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgIGhlaWdodDogMjE1cHg7XHJcbiAgfVxyXG4gIC5pbWcxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jYXJkMntcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICB9XHJcbiAgLmExe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlckZvbGxvd2luZ3MgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHt1c2VySW5mb30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0IHJlZmVyTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgSWZGb2xsb3dpbmcgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYodXNlckluZm8uRm9sbG93aW5nc1swXSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgcmV0dXJuIDxsaT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3F1YXJlfSBjbGFzc05hbWU9XCJpY29uc1wiIC8+IHt1c2VySW5mby5Gb2xsb3dpbmdzWzBdLm5pY2tuYW1lfTwvbGk+O1xyXG4gICAgfVxyXG4gICAgaWYodXNlckluZm8uRm9sbG93aW5nc1sxXSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgcmV0dXJuIDxsaT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3F1YXJlfSBjbGFzc05hbWU9XCJpY29uc1wiIC8+e3VzZXJJbmZvLkZvbGxvd2luZ3NbMV0ubmlja25hbWV9PC9saT47XHJcbiAgICB9XHJcbiAgICBpZih1c2VySW5mby5Gb2xsb3dpbmdzWzJdICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm4gPGxpPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcXVhcmV9IGNsYXNzTmFtZT1cImljb25zXCIgLz57dXNlckluZm8uRm9sbG93aW5nc1syXS5uaWNrbmFtZX08L2xpPjtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxFbXB0eSBcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAg7JWE7KeBIO2MlOuhnOyeieydtCDsl4bslrTsmpQuXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5jb25zdCBvcmlnaW5hbEltYWdlID0gYGh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwMi8zMTgvMjcxL29yaWdpbmFsL3VzZXItcHJvZmlsZS1pY29uLWZyZWUtdmVjdG9yLmpwZ2A7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1jYXJkLWJvcmRlci1sZXNzLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxPbmVVc2VyRm9sbG93aW5nPlxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICB0aXRsZT1cIkZvbGxvd2luZ3NcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdjYXJkMSdcclxuICAgICAgICAgIGV4dHJhPXs8YSBvbkNsaWNrPXtyZWZlck1vZGFsfT5Nb3JlPC9hPn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWZGb2xsb3dpbmcgLz5cclxuXHJcbiAgICA8L0NhcmQ+XHJcbiAgICA8TW9kYWwgdGl0bGU9e3VzZXJJbmZvLm5pY2tuYW1lICsgXCIg7J2YIO2MlOuhnOyeiSDrqqnroZ1cIn0gZm9vdGVyPXtudWxsfSBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfSBvcGVuPXtpc01vZGFsT3Blbn0+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgZ3JpZD17e1xyXG4gICAgICAgICAgICAgICAgZ3V0dGVyOiA1MCxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogM1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3VzZXJJbmZvLkZvbGxvd2luZ3N9XHJcbiAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8T25lVXNlckZvbGxvd2luZz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPENhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdC8ke2l0ZW0uaWR9YH0gPntpdGVtLm5pY2tuYW1lfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXI9ezxhIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdC8ke2l0ZW0uaWR9YH0gPjxPbmVVc2VyRm9sbG93aW5nPjxpbWcgY2xhc3NOYW1lPSdpbWcxJyBhbHQ9XCJleGFtcGxlXCIgc3JjPXtpdGVtLkltYWdlLnNyYyA9PT0gb3JpZ2luYWxJbWFnZSA/IG9yaWdpbmFsSW1hZ2UgOiBgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aXRlbS5JbWFnZS5zcmN9YH0gLz48L09uZVVzZXJGb2xsb3dpbmc+PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQyJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlci8ke2l0ZW1zLmlkfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezEwMH0gc3JjPXtpdGVtcy5JbWFnZS5zcmMgPT09IG9yaWdpbmFsSW1hZ2UgPyBvcmlnaW5hbEltYWdlIDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2l0ZW1zLkltYWdlLnNyY31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYTEnIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlci8ke2l0ZW1zLmlkfWB9ID57aXRlbXMubmlja25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L09uZVVzZXJGb2xsb3dpbmc+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuXHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L09uZVVzZXJGb2xsb3dpbmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyRm9sbG93aW5nczsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAnLi4vLi4vcGFnZXMvY3NzL215SW5mby5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgQ2FyZCwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBPbmVVc2VySW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgLmNhcmQxe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIC5pbWcxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IG9yaWdpbmFsSW1hZ2UgPSBgaHR0cHM6Ly9zdGF0aWMudmVjdGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvcHJldmlld3MvMDAyLzMxOC8yNzEvb3JpZ2luYWwvdXNlci1wcm9maWxlLWljb24tZnJlZS12ZWN0b3IuanBnYDtcclxuXHJcbmNvbnN0IFVzZXJJbmZvID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7dXNlckluZm99ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCLsnKDsoIDsnbjtj6w6IFwiLCB1c2VySW5mbyk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxPbmVVc2VySW5mbz5cclxuICAgICAgICAgICAgPEZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiA+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt1c2VySW5mby5uaWNrbmFtZStcIidzIEluZm9cIn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQxJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyPXs8T25lVXNlckluZm8+PGltZyBjbGFzc05hbWU9XCJpbWcxXCIgc3JjPXsgdXNlckluZm8uSW1hZ2Uuc3JjID09PSBvcmlnaW5hbEltYWdlID8gdXNlckluZm8uSW1hZ2Uuc3JjIDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3VzZXJJbmZvLkltYWdlLnNyY31gfSAvPjwvT25lVXNlckluZm8+fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1ldGFcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9ezxJbnB1dCAgcmVhZE9ubHkgZGVmYXVsdFZhbHVlPXt1c2VySW5mby5uaWNrbmFtZX0gLz59XHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgIHJlYWRPbmx5IGRlZmF1bHRWYWx1ZT17IHVzZXJJbmZvLmluZm8gPT09IG51bGw/IFwi7J6Q6riw7J6Q7Iug7J2EIO2VnCDri6jslrTroZwg7ZGc7ZiE7ZWc64uk66m0P1wiIDogXCLtlZzrp4jrlJQ6ICBcIiArIHVzZXJJbmZvLmluZm99IC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvT25lVXNlckluZm8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mbzsiLCJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUhlYXJ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgQ2FyZCwgRW1wdHksIExpc3QsIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBPbmVVc2VyTGlrZUxpc3QgPSBzdHlsZWQuZGl2YFxyXG4gIC5pY29uc3tcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gIH1cclxuICAuY2FyZDF7XHJcbiAgICB3aWR0aDogMjUwcHg7IFxyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICB9XHJcbiAgLmltZzF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyTGlrZUxpc3QgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHt1c2VySW5mb30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCLsnbjsmqnrpqzsiqTtirhcIiwgdXNlckluZm8pO1xyXG5cclxuICBjb25zdCByZWZlck1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IElmTGlrZSA9ICgpID0+IHtcclxuXHJcbiAgICAgIGlmKHVzZXJJbmZvLkxpa2VkWzBdICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybiA8bGk+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhlYXJ0fSBjbGFzc05hbWU9J2ljb25zJyAvPiB7dXNlckluZm8uTGlrZWRbMF0ubG9va05hbWV9PC9saT47XHJcbiAgICAgIH1cclxuICAgICAgaWYodXNlckluZm8uTGlrZWRbMV0gIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgcmV0dXJuIDxsaT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGVhcnR9IGNsYXNzTmFtZT0naWNvbnMnIC8+e3VzZXJJbmZvLkxpa2VkWzFdLmxvb2tOYW1lfTwvbGk+O1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHVzZXJJbmZvLkxpa2VkWzJdICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybiA8bGk+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhlYXJ0fSBjbGFzc05hbWU9J2ljb25zJyAvPnt1c2VySW5mby5MaWtlZFsyXS5sb29rTmFtZX08L2xpPjtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHJldHVybiAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPEVtcHR5XHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIOyii+yVhOyalOulvCDtlZwgTG9va+ydtCDsl4bslrTsmpQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1jYXJkLWJvcmRlci1sZXNzLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxPbmVVc2VyTGlrZUxpc3Q+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJJIGxpa2UgdGhpcyFcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZDEnXHJcbiAgICAgICAgICAgICAgZXh0cmE9ezxhIG9uQ2xpY2s9e3JlZmVyTW9kYWx9Pk1vcmU8L2E+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElmTGlrZSAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxNb2RhbCB0aXRsZT17dXNlckluZm8ubmlja25hbWUgKyBcIiDsnZgg7KKL7JWE7JqUIOuqqeuhnVwifSBmb290ZXI9e251bGx9IG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9IG9wZW49e2lzTW9kYWxPcGVufT5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgZ3JpZD17e1xyXG4gICAgICAgICAgICAgICAgZ3V0dGVyOiA1MCxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogM1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3VzZXJJbmZvLkxpa2VkfVxyXG4gICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3QvJHtpdGVtLmlkfWB9ID57aXRlbS5sb29rTmFtZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyPXs8YSBocmVmPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3QvJHtpdGVtLmlkfWB9ID48T25lVXNlckxpa2VMaXN0PjxpbWcgY2xhc3NOYW1lPSdpbWcxJyBhbHQ9XCJleGFtcGxlXCIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aXRlbS5JbWFnZXNbMF0uc3JjfWB9IC8+PC9PbmVVc2VyTGlrZUxpc3Q+PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQyJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuXHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9PbmVVc2VyTGlrZUxpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTGlrZUxpc3Q7IiwiaW1wb3J0IHsgQ2FyZCwgRW1wdHksIExpc3QsIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYVBlbk5pYiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBPbmVVc2VyTWVudGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgLmNhcmQxe1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGZsb2F0OiAnbGVmdCc7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxuICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgfVxyXG4gIC5pY29uc3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmltZzF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNhcmQye1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBVc2VyTWVudGlvbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qge3VzZXJJbmZvfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByZWZlck1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IElmUmVmZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IG1lLlJlZmVyZW5jZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgLy8gICByZXR1cm4oIDxsaT57bWUuUmVmZXJlbmNlc1tpXS5jb250ZW50fTwvbGk+KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAgIGlmKHVzZXJJbmZvLlJlZmVyZW5jZXNbMF0gIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgcmV0dXJuIDxsaT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGVuTmlifSBjbGFzc05hbWU9XCJpY29uc1wiIC8+e3VzZXJJbmZvLlJlZmVyZW5jZXNbMF0uY29udGVudH08L2xpPjtcclxuICAgICAgfVxyXG4gICAgICBpZih1c2VySW5mby5SZWZlcmVuY2VzWzFdICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybiA8bGk+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlbk5pYn0gY2xhc3NOYW1lPVwiaWNvbnNcIiAvPnt1c2VySW5mby5SZWZlcmVuY2VzWzFdLmNvbnRlbnR9PC9saT47XHJcbiAgICAgIH1cclxuICAgICAgaWYodXNlckluZm8uUmVmZXJlbmNlc1syXSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICByZXR1cm4gPGxpPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFQZW5OaWJ9IGNsYXNzTmFtZT1cImljb25zXCIgLz57dXNlckluZm8uUmVmZXJlbmNlc1syXS5jb250ZW50fTwvbGk+O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8RW1wdHlcclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAg7JWE7KeBIOyduOyaqeydtCDsl4bslrTsmpQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICB9XHJcbiAgXHJcblxyXG4gIH07XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxPbmVVc2VyTWVudGlvbj5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgdGl0bGU9XCJJIHJlZmVyZWQuLi5cIlxyXG4gICAgICAgICAgICBleHRyYT17PGEgb25DbGljaz17cmVmZXJNb2RhbH0+TW9yZTwvYT59XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQxXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJZlJlZmVyIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPE1vZGFsIHRpdGxlPXt1c2VySW5mby5uaWNrbmFtZSArIFwiIOydmCDsnbjsmqkg66qp66GdXCJ9IGZvb3Rlcj17bnVsbH0gb25DYW5jZWw9e2hhbmRsZUNhbmNlbH0gb3Blbj17aXNNb2RhbE9wZW59ID5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgIGdyaWQ9e3tcclxuICAgICAgICAgICAgICAgIGd1dHRlcjogNTAsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW46IDNcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBkYXRhU291cmNlPXt1c2VySW5mby5SZWZlcmVuY2VzfVxyXG4gICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXI9ezxhIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdC8ke2l0ZW0uaWR9YH0gPjxPbmVVc2VyTWVudGlvbj48aW1nIGNsYXNzTmFtZT0naW1nMScgYWx0PVwiZXhhbXBsZVwiIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2l0ZW0ucmVmZXJTcmN9YH0gLz48L09uZVVzZXJNZW50aW9uPjwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkMidcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWV0YSBkZXNjcmlwdGlvbj17aXRlbS5jb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L09uZVVzZXJNZW50aW9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTWVudGlvbjsiLCJpbXBvcnQge3VzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGluaXRpYWxWYWx1ZSA9IG51bGwpID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zdCB3b3J0aCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFZhbHVlKHdvcnRoKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE5FV0xPT0tfS0VZV09SRF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiB3b3J0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gICAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xyXG59OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJteUluZm9cIjogXCJteUluZm9fbXlJbmZvX18xWUhxS1wiLFxuXHRcIm15SW5mbzJcIjogXCJteUluZm9fbXlJbmZvMl9fMjNnTUJcIixcblx0XCJjYXJkMVwiOiBcIm15SW5mb19jYXJkMV9fM1ZJakJcIixcblx0XCJmb3JtY29udHJvbFwiOiBcIm15SW5mb19mb3JtY29udHJvbF9fSkNPODNcIixcblx0XCJmb3JtY29udHJvbDJcIjogXCJteUluZm9fZm9ybWNvbnRyb2wyX18zSEdVSVwiLFxuXHRcImZvcm1jb250cm9sM1wiOiBcIm15SW5mb19mb3JtY29udHJvbDNfXzNJQ05IXCIsXG5cdFwiZm9ybWNvbnRyb2w0XCI6IFwibXlJbmZvX2Zvcm1jb250cm9sNF9fSUx0RzRcIlxufTtcbiIsImltcG9ydCB7IENhbGVuZGFyLCBDYXJkLCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyAgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IFVzZXJEYXRlQ2VsbFJlbmRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VyQ29tcG9uZW50L3VzZXJEYXRlQ2VsbFJlbmRlclwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlckNvbXBvbmVudC91c2VySW5mb1wiO1xyXG5pbXBvcnQgVXNlckxpa2VMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VzZXJDb21wb25lbnQvdXNlckxpa2VMaXN0XCI7XHJcbmltcG9ydCBVc2VyTWVudGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VyQ29tcG9uZW50L3VzZXJNZW50aW9uXCI7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX1VTRVJfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCBVc2VyRm9sbG93ZXJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VzZXJDb21wb25lbnQvdXNlckZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgVXNlckZvbGxvd2luZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlckNvbXBvbmVudC91c2VyRm9sbG93aW5nc1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgT25lVXNlciA9IHN0eWxlZC5kaXZgXHJcbiAgICAuZGl2MXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEyNTBweDtcclxuICAgIH1cclxuICAgIC5kaXYye1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24xe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmNhbGVuZGFyMXtcclxuICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDEwcHg7XHJcbiAgICB9XHJcbiAgICAucm93MXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3Qge3VzZXJJbmZvLCBtZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8v64uk66W4IOycoOyggCDtlITroZztlYTroZwg7J2064+ZIOyLnCwg7KCR7IaNIOykkeyduCDslYTsnbTrlJTsmYAg6rCZ7J2A7KeAIOu5hOq1kCDtm4Qg6rCZ64uk66m0IO2ZiO2ZlOuptOycvOuhnCDsnbTrj5lcclxuICAgICAgICBpZihpZCA9PSBtZS5pZCl7XHJcbiAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi66Gc6re47J24IO2bhCDsnbTsmqkg6rCA64ql7ZWp64uI64ukLlwiKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPE9uZVVzZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MVwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uMVwiID5cclxuICAgICAgICAgICAgPFJvdz48aDE+e3VzZXJJbmZvLm5pY2tuYW1lfSdzIFByb2ZpbGU8L2gxPjwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjJcIj5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYWxlbmRhcjFcIlxyXG4gICAgICAgICAgICAgICAgZGF0ZUNlbGxSZW5kZXI9e1VzZXJEYXRlQ2VsbFJlbmRlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjJcIj5cclxuICAgICAgICAgICAgICAgIDxVc2VySW5mbyAvPiBcclxuICAgICAgICAgICAgICAgIDxVc2VyTWVudGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJMaWtlTGlzdCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwicm93MVwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VXNlckZvbGxvd2VycyAvPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJGb2xsb3dpbmdzIC8+XHJcbiAgICAgICAgICAgIDwvUm93PiAgXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvT25lVXNlcj5cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMoY29udGV4dCkgPT4geyBcclxuICAgIFxyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJzsgXHJcbiAgICBpZihjb250ZXh0LnJlcSAmJiBjb29raWUpeyBcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1RcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICB9KTtcclxuICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlciwgXHJcbiAgICAgICAgICAgICAgICBwb3N0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCIvL2ltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG4vL2ltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAga2V5d29yZHM6IG51bGwsXHJcbiAgbmV3TG9va0tleXdvcmRzOiBudWxsLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICB1cGRhdGVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdXBkYXRlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVwZGF0ZVBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUNvbW1lbnRFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gIHJldHdlZXRFcnJvcjogbnVsbCxcclxuICB1cGxvYWRVcGRhdGVMb29raW1hZ2VMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRVcGRhdGVMb29raW1hZ2VFcnJvcjogbnVsbCxcclxuICB1cGxvYWRVcGRhdGVMb29raW1hZ2VEb25lOiBmYWxzZSxcclxuICB1cGRhdGVDb21tZW50UmF0ZUxvYWRpbmc6IGZhbHNlLFxyXG4gIHVwZGF0ZUNvbW1lbnRSYXRlRXJyb3I6IG51bGwsXHJcbiAgdXBkYXRlQ29tbWVudFJhdGVEb25lOiBmYWxzZSxcclxuICBjaGVja0RhdGVMb2FkaW5nOiBmYWxzZSxcclxuICBjaGVja0RhdGVFcnJvcjogbnVsbCxcclxuICBjaGVja0RhdGVEb25lOiBmYWxzZSxcclxuICBzZWFyY2hLZXl3b3JkTG9hZGluZzogZmFsc2UsXHJcbiAgc2VhcmNoS2V5d29yZEVycm9yOiBudWxsLFxyXG4gIHNlYXJjaEtleXdvcmREb25lOiBmYWxzZSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ0hFQ0tfREFURV9SRVFVRVNUID0gJ0NIRUNLX0RBVEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEVDS19EQVRFX1NVQ0NFU1MgPSAnQ0hFQ0tfREFURV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIRUNLX0RBVEVfRkFJTFVSRSA9ICdDSEVDS19EQVRFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBORVdfQ09NTUVOVF9JTUFHRVNfUkVRVUVTVCA9ICdORVdfQ09NTUVOVF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBORVdfQ09NTUVOVF9JTUFHRVNfU1VDQ0VTUyA9ICdORVdfQ09NTUVOVF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBORVdfQ09NTUVOVF9JTUFHRVNfRkFJTFVSRSA9ICdORVdfQ09NTUVOVF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1QgPSdVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfU1VDQ0VTUyA9J1VQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9GQUlMVVJFID0nVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTkVXX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX05FV19QT1NUU19TVUNDRVNTID0gJ0xPQURfTkVXX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9ORVdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX05FV19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1RfUkVRVUVTVCA9ICdVUERBVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUX1NVQ0NFU1MgPSAnVVBEQVRFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9GQUlMVVJFID0gJ1VQREFURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCA9ICdSRU1PVkVfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MgPSAnUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFID0gJ1JFTU9WRV9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9DT01NRU5UX1JBVEVfUkVRVUVTVCA9ICdVUERBVEVfQ09NTUVOVF9SQVRFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTU1FTlRfUkFURV9TVUNDRVNTID0gJ1VQREFURV9DT01NRU5UX1JBVEVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ09NTUVOVF9SQVRFX0ZBSUxVUkUgPSAnVVBEQVRFX0NPTU1FTlRfUkFURV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCA9ICdTRUFSQ0hfS0VZV09SRF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1MgPSAnU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9GQUlMVVJFID0gJ1NFQVJDSF9LRVlXT1JEX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV0xPT0tfS0VZV09SRF9SRVFVRVNUID0gJ05FV0xPT0tfS0VZV09SRF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE5FV0xPT0tfS0VZV09SRF9TVUNDRVNTID0gJ05FV0xPT0tfS0VZV09SRF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE5FV0xPT0tfS0VZV09SRF9GQUlMVVJFID0gJ05FV0xPT0tfS0VZV09SRF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuLy8gICBkYXRhLFxyXG4vLyB9KTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuLy8gICBkYXRhLFxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgY29udGVudDogZGF0YSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICB9LFxyXG59KTtcclxuLy8g7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCjrtojrs4DshLHsnYAg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpOyAvL+umrO2KuOycl+uQnCDqsozsi5zquIAg66mU7J247Y+s7Iqk7Yq47JeQIOy2lOqwgFxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICBjYXNlIE5FV19DT01NRU5UX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTkVXX0NPTU1FTlRfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlZHVjZXIgaW1hZ2VcIiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICBjYXNlIE5FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzp7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5zaW5nbGVQb3N0O1xyXG4gICAgICBwb3N0Lkxpa2Vycy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzp7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5zaW5nbGVQb3N0O1xyXG4gICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgICAgLy8gY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9ORVdfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgICAgLy8gY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTE9BRF9ORVdfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPT09IDEwO1xyXG4gICAgICBicmVhaztcclxuICAgICAgLy8gY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGNhc2UgTE9BRF9ORVdfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTsgLy/sl4XroZzrk5wg7ZaI64qU642wIOydtOuvuOyngCDso7zshowg64Ko7JWE7J6I7Jy866m0IOyViOuQmOuLiOq5jCDso7zshowg7LSI6riw7ZmUXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuyXheuNsOydtO2KuCDsmYTro4wg7ZuEIOuNsOydtO2EsDogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0LnNpbmdsZVBvc3Q7XHJcbiAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBcclxuICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVDb21tZW50RXJyb3IgPSBudWxsOyAgICBcclxuICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuuMk+q4gCDsgq3soJwg66as65OA7IScOiBcIiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5zaW5nbGVQb3N0LkNvbW1lbnRzID0gZHJhZnQuc2luZ2xlUG9zdC5Db21tZW50cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLmlkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cGxvYWRVcGRhdGVMb29raW1hZ2VFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZURvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFVwZGF0ZUxvb2tpbWFnZURvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cGxvYWRVcGRhdGVMb29raW1hZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudXBsb2FkVXBkYXRlTG9va2ltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cGxvYWRVcGRhdGVMb29raW1hZ2VFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFVQREFURV9DT01NRU5UX1JBVEVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50UmF0ZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRSYXRlRXJyb3IgPSAgbnVsbDtcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50UmF0ZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUERBVEVfQ09NTUVOVF9SQVRFX1NVQ0NFU1M6XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLrjJPquIAg7KCQ7IiYIOyImOyglSDshLHqs7U6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudFJhdGVMb2FkaW5nID0gZmFsc2U7IFxyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRSYXRlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QucmF0ZUF2ZXJhZ2UgPSBhY3Rpb24uZGF0YS5yYXRlQXZlcmFnZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUERBVEVfQ09NTUVOVF9SQVRFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudFJhdGVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudFJhdGVFcnJvciA9ICBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIENIRUNLX0RBVEVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGVja0RhdGVMb2FkaW5nPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoZWNrRGF0ZUVycm9yID0gIG51bGw7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICBDSEVDS19EQVRFX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEYXRlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hFQ0tfREFURV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoZWNrRGF0ZUxvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi64Kg7KecIOyXkOufrCDtmZXsnbhcIiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmNoZWNrRGF0ZUVycm9yID0gIGFjdGlvbi5kYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTRUFSQ0hfS0VZV09SRF9SRVFVRVNUOlxyXG5cclxuICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTRUFSQ0hfS0VZV09SRF9TVUNDRVNTOlxyXG4gICAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gdHJ1ZTtcclxuICAgICAgICAgIGRyYWZ0LmtleXdvcmRzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBTRUFSQ0hfS0VZV09SRF9GQUlMVVJFOlxyXG5cclxuICAgICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRXJyb3IgPSAgYWN0aW9uLmRhdGFcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBORVdMT09LX0tFWVdPUkRfUkVRVUVTVDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIE5FV0xPT0tfS0VZV09SRF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm5ld0xvb2tLZXl3b3JkcyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBORVdMT09LX0tFWVdPUkRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg6rCA7KC47Jik6riwIOyLnOuPhOykkSB0cnVl7J2066m0IOuhnOuUqeywvSDrnYTsmrDquLBcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgbG9hZFVzZXJFcnJvcjogbnVsbCxcclxuICBsb2FkVXNlckNhbGVuZGFyRGF0YUxvYWRpbmc6IGZhbHNlLCAvL+ycoOyggCDsupjrprDrjZQg642w7J207YSwIOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICBsb2FkVXNlckNhbGVuZGFyRGF0YURvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyQ2FsZW5kYXJEYXRhRXJyb3I6IGZhbHNlLFxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VJbmZvTG9hZGluZzogZmFsc2UsIC8vIO2UhOuhnO2VhCDsoJXrs7Qg67OA6rK9IOyLnOuPhOykkVxyXG4gIGNoYW5nZUluZm9Eb25lOiBmYWxzZSxcclxuICBjaGFuZ2VJbmZvRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgdXNlckluZm86IG51bGwsXHJcbiAgdXNlckNhbGVuZGFyRGF0YTogW10sXHJcbiAgaW1hZ2VQYXRoczogW11cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybihkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24ocmVzLmRhdGEpKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9DQUxFTkRBUl9EQVRBX1JFUVVFU1QgPSAnTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9TVUNDRVNTID0gJ0xPQURfVVNFUl9DQUxFTkRBUl9EQVRBX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfRkFJTFVSRSA9ICdMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfSU5GT19SRVFVRVNUID0gJ0NIQU5HRV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0lORk9fU1VDQ0VTUyA9ICdDSEFOR0VfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9JTkZPX0ZBSUxVUkUgPSAnQ0hBTkdFX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfUFJPRklMRV9JTUFHRV9SRVFVRVNUID0gJ1VQTE9BRF9QUk9GSUxFX0lNQUdFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BST0ZJTEVfSU1BR0VfU1VDQ0VTUyA9ICdVUExPQURfUFJPRklMRV9JTUFHRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QUk9GSUxFX0lNQUdFX0ZBSUxVUkUgPSAnVVBMT0FEX1BST0ZJTEVfSU1BR0VfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgaWQ6IDEsXHJcbiAgICBQb3N0czogW3tpZDogMX1dLFxyXG4gICAgRm9sbG93aW5nczogW3tuaWNrbmFtZTogJ+u2gOq4sOy0iCd9LCB7bmlja25hbWU6ICdDaGFuaG8gTGVlJ30sIHtuaWNrbmFtZTogJ25ldWUgemVhbCd9XSxcclxuICAgIEZvbGxvd2VyczogW3tuaWNrbmFtZTogJ+u2gOq4sOy0iCd9LCB7bmlja25hbWU6ICdDaGFuaG8gTGVlJ30sIHtuaWNrbmFtZTogJ25ldWUgemVhbCd9XVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVFxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8vZHJhZnTrpbwg67CU6r6466m0IGltbWVy6rCAIHN0YXRl66W8IOu2iOuzgOyEsSDsnojqsowg7JWM7JWE7IScIOuwlOq/lOykjCAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v7ZmU7IK07ZGc6rCAIHJldHVybiDsl63tlaDsnYQg64yA7Iug7ZWoLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfUkVRVUVTVDogLy/ri6zroKUg642w7J207YSwXHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJDYWxlbmRhckRhdGFMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckNhbGVuZGFyRGF0YUVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckNhbGVuZGFyRGF0YURvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyQ2FsZW5kYXJEYXRhTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXJDYWxlbmRhckRhdGEgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckNhbGVuZGFyRGF0YURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9DQUxFTkRBUl9EQVRBX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJDYWxlbmRhckRhdGFMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJDYWxlbmRhckRhdGFFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlSW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuY2hhbmdlSW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgLy8gZHJhZnQudXNlckluZm8uZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuVXNlcklkKS5pbmZvID0gYWN0aW9uLmRhdGEuaW5mbztcclxuICAgICBkcmFmdC5tZS5pbmZvID0gYWN0aW9uLmRhdGEuaW5mbztcclxuICAgICBkcmFmdC5jaGFuZ2VJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfSU5GT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFVQTE9BRF9QUk9GSUxFX0lNQUdFX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfUFJPRklMRV9JTUFHRV9TVUNDRVNTOntcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlZHVjZXIgaW1hZ2U6Ojo6XCIgLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVQTE9BRF9QUk9GSUxFX0lNQUdFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7YWxsLCAgZm9ya30gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzPSB0cnVlO1xyXG4gLy/rsLHsnZggYXBwLmpz7JeQ7IScIENyZWRlbnRpYWxzOiB0cnVl66W8IO2WiOq4sCDrlYzrrLgo7L+g7YKkIOyghOuLrClcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG5cclxuICAgIF0pO1xyXG59XHJcblxyXG4vL2Zvcms6IO2VtOuLuSDtlajsiJjrpbwg7Iuk7ZaJ7ZWc64uk64qUIOucuy4gY2FsbOqzvCDri6TrpoQuXHJcbi8vZm9ya+uKlCDruYTrj5nquLAsIGNhbGzsnYAg64+Z6riwIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBjYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgQ0hFQ0tfREFURV9GQUlMVVJFLFxyXG4gIENIRUNLX0RBVEVfUkVRVUVTVCxcclxuICBDSEVDS19EQVRFX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9ORVdfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX05FV19QT1NUU19SRVFVRVNULFxyXG4gIExPQURfTkVXX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTkVXTE9PS19LRVlXT1JEX0ZBSUxVUkUsXHJcbiAgTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QsXHJcbiAgTkVXTE9PS19LRVlXT1JEX1NVQ0NFU1MsXHJcbiAgTkVXX0NPTU1FTlRfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgTkVXX0NPTU1FTlRfSU1BR0VTX1JFUVVFU1QsXHJcbiAgTkVXX0NPTU1FTlRfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcclxuICBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgUkVUV0VFVF9GQUlMVVJFLFxyXG4gIFJFVFdFRVRfUkVRVUVTVCxcclxuICBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgU0VBUkNIX0tFWVdPUkRfRkFJTFVSRSxcclxuICBTRUFSQ0hfS0VZV09SRF9SRVFVRVNULFxyXG4gIFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgVVBEQVRFX0NPTU1FTlRfUkFURV9GQUlMVVJFLFxyXG4gIFVQREFURV9DT01NRU5UX1JBVEVfUkVRVUVTVCxcclxuICBVUERBVEVfQ09NTUVOVF9SQVRFX1NVQ0NFU1MsXHJcbiAgVVBEQVRFX1BPU1RfRkFJTFVSRSxcclxuICBVUERBVEVfUE9TVF9SRVFVRVNULFxyXG4gIFVQREFURV9QT1NUX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1QsXHJcbiAgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICBjb25zdCBwb3N0SWQgPSBkYXRhLmdldCgncG9zdElkJyk7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7cG9zdElkfS9yZWZlcmVuY2VgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIG5ld0NvbW1lbnRJbWFnZXMoYWN0aW9uKXtcclxuICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IE5FV19DT01NRU5UX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTkVXX0NPTU1FTlRfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gdXBkYXRlSW1hZ2VzQVBJKGRhdGEpe1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24qIHVwZGF0ZUltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgIFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC8ke2RhdGF9YCk7IFxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgIFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn0gICAgICAgICAgICAgICAgIC8v7KO87IaM7JeQIOq3uOuDpSDtlZzquIAs7Yq57IiY66y47J6Q6rCAIOuTpOyWtOqwgOuptCDsl5Drn6zrgpjshJwgZW5jb2RlVVJJQ29tcG9uZW5066GcIOqwkOyLuOykmOyVvCDtlZzri6QuXHJcblxyXG5mdW5jdGlvbiogbG9hZEhhc2h0YWdQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkSGFzaHRhZ1Bvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cy9hbGxMb29rcz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWROZXdQb3N0c0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTmV3UG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE5ld1Bvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX05FV19QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9ORVdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUG9zdEFQSShkYXRhKXtcclxuICBjb25zdCBwb3N0SWQgPSBkYXRhLmdldCgncG9zdElkJyk7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke3Bvc3RJZH1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwZGF0ZVBvc3QoYWN0aW9uKXtcclxuICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBkYXRlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBEQVRFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuICBjYXRjaChlcnIpe1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgIHR5cGU6IFVQREFURV9QT1NUX0ZBSUxVUkUsXHJcbiAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDb21tZW50QVBJKGRhdGEpe1xyXG5cclxuICBjb25zdCBjb21tZW50SWQgPSBkYXRhLmdldCgnY29tbWVudElkJyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwi64yT6riAIOyCreygnCDslYTsnbTrlJQ6IFwiLCBjb21tZW50SWQpO1xyXG5cclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC9jb21tZW50LyR7Y29tbWVudElkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDb21tZW50UmF0ZUFQSShkYXRhKXtcclxuXHJcbiAgY29uc3QgY29tbWVudElkID0gZGF0YS5nZXQoJ2NvbW1lbnRJZCcpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIuuMk+q4gCDsoJDsiJgg7JWE7J2065SUOiBcIiwgY29tbWVudElkKTtcclxuXHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC9jb21tZW50UmF0ZS8ke2NvbW1lbnRJZH1gLCBkYXRhKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVDb21tZW50KGFjdGlvbil7XHJcbiAgdHJ5e1xyXG4gICAgY29uc3QgcmVtb3ZlUmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zdCB1cGRhdGVSZXN1bHQgPSB5aWVsZCBjYWxsKHVwZGF0ZUNvbW1lbnRSYXRlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZW1vdmVSZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBEQVRFX0NPTU1FTlRfUkFURV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiB1cGRhdGVSZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBEQVRFX0NPTU1FTlRfUkFURV9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcblxyXG5jb25zdCBwb3N0SWQgPSBkYXRhLmdldCgncG9zdElkJyk7XHJcbiBcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtwb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRGF0ZUFQSShkYXRhKXtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvY2hlY2tEYXRlYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGVja0RhdGUoYWN0aW9uKXtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGVja0RhdGVBUEksIGFjdGlvbi5kYXRhKTtcclxuICBcclxuICAgeWllbGQgcHV0KHtcclxuICAgICB0eXBlOiBDSEVDS19EQVRFX1NVQ0NFU1MsXHJcbiAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgIH0pO1xyXG4gfSBjYXRjaCAoZXJyKSB7XHJcbiAgIGNvbnNvbGUuZXJyb3IoXCLrgqDsp5wg7ZmV7J24IOyXkOufrCDtmZXsnbhcIiwgZXJyKTtcclxuICAgeWllbGQgcHV0KHtcclxuICAgICB0eXBlOiBDSEVDS19EQVRFX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICB9KTtcclxuIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoS2V5d29yZEFQSShkYXRhKXtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy9rZXl3b3Jkcy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNlYXJjaEtleXdvcmQoYWN0aW9uKXtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzZWFyY2hLZXl3b3JkQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgXHJcbiAgIHlpZWxkIHB1dCh7XHJcbiAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyxcclxuICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgfSk7XHJcbiB9IGNhdGNoIChlcnIpIHtcclxuICAgeWllbGQgcHV0KHtcclxuICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgfSk7XHJcbiB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld0xvb2tLZXl3b3JkQVBJKGRhdGEpe1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnL2tleXdvcmRzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbmV3TG9va0tleXdvcmQoYWN0aW9uKXtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChuZXdMb29rS2V5d29yZEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gIFxyXG4gICB5aWVsZCBwdXQoe1xyXG4gICAgIHR5cGU6IE5FV0xPT0tfS0VZV09SRF9TVUNDRVNTLFxyXG4gICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICB9KTtcclxuIH0gY2F0Y2ggKGVycikge1xyXG4gICB5aWVsZCBwdXQoe1xyXG4gICAgIHR5cGU6IE5FV0xPT0tfS0VZV09SRF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgfSk7XHJcbiB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVUV0VFVF9SRVFVRVNULCByZXR3ZWV0KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTmV3Q29tbWVudEltYWdlcygpe1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTkVXX0NPTU1FTlRfSU1BR0VTX1JFUVVFU1QsIG5ld0NvbW1lbnRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGRhdGVJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCwgdXBkYXRlSW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5MaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbi8vICAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBsb2FkSGFzaHRhZ1Bvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGRhdGVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBEQVRFX1BPU1RfUkVRVUVTVCwgdXBkYXRlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlQ29tbWVudCgpe1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCwgcmVtb3ZlQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWROZXdQb3N0cygpe1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCwgbG9hZE5ld1Bvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGVja0RhdGUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEVDS19EQVRFX1JFUVVFU1QsIGNoZWNrRGF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNlYXJjaEtleXdvcmQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTRUFSQ0hfS0VZV09SRF9SRVFVRVNULCBzZWFyY2hLZXl3b3JkKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTmV3TG9va0tleXdvcmQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChORVdMT09LX0tFWVdPUkRfUkVRVUVTVCwgbmV3TG9va0tleXdvcmQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hSZXR3ZWV0KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaE5ld0NvbW1lbnRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaFVwZGF0ZUltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVuTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVwZGF0ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTmV3TG9va0tleXdvcmQpLFxyXG4gICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hTZWFyY2hLZXl3b3JkKSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hDaGVja0RhdGUpLFxyXG4gICAgZm9yayh3YXRjaExvYWROZXdQb3N0cylcclxuICBdKTtcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHthbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3R9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IENIQU5HRV9JTkZPX0ZBSUxVUkUsIENIQU5HRV9JTkZPX1JFUVVFU1QsIENIQU5HRV9JTkZPX1NVQ0NFU1MsIFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgXHJcbiAgICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLCBMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLCBcclxuICAgIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsIFxyXG4gICAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsIExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX01ZX0lORk9fU1VDQ0VTUywgXHJcbiAgICBMT0dfSU5fRkFJTFVSRSwgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBcclxuICAgIExPR19PVVRfRkFJTFVSRSwgTE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBcclxuICAgIFVORk9MTE9XX0ZBSUxVUkUsIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MsIFxyXG4gICAgVVBMT0FEX1BST0ZJTEVfSU1BR0VfUkVRVUVTVCwgVVBMT0FEX1BST0ZJTEVfSU1BR0VfU1VDQ0VTUywgVVBMT0FEX1BST0ZJTEVfSU1BR0VfRkFJTFVSRSwgTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfU1VDQ0VTUywgTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfRkFJTFVSRSwgTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfUkVRVUVTVCxcclxuXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQ2FsZW5kYXJEYXRhQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0c2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXJDYWxlbmRhckRhdGEoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQ2FsZW5kYXJEYXRhQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfQ0FMRU5EQVJfREFUQV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlcnNBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi66Gc65OcIOycoOyggCDrjbDsnbTthLA6IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX1gKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXJzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgXHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlSW5mb0FQSShkYXRhKXtcclxuICAgIGNvbnNvbGUubG9nKCdzYWdhcyBkYXRhOjo6OicgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL2luZm8nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZUluZm8oYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlSW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBDSEFOR0VfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L3VuZm9sbG93YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG4vL2FjdGlvbiA9IGxvZ2luLCBhY3Rpb24udHlwZTog66Gc6re47J24IOumrO2AmOyKpO2KuCwgYWN0aW9uLmRhdGE6IOuhnOq3uOyduCDrjbDsnbTthLBcclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCl7XHJcbiAgICB0cnl7XHJcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTU1xyXG4gICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpOyAvL2RhdGHripQgZW1haWwsIHBhc3N3b3JkLCBuaWNrbmFtZeydtOudvOuKlCDqsJ3ssrRcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYWdhIGltYWdlOjo6OlwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvcHJvZmlsZUltYWdlJywgZGF0YSk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICBcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBVUExPQURfUFJPRklMRV9JTUFHRV9TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogVVBMT0FEX1BST0ZJTEVfSU1BR0VfRkFJTFVSRSxcclxuICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uKiB3YXRjaFVwbG9hZFByb2ZpbGUoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9QUk9GSUxFX0lNQUdFX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2Vycygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkRm9sbG93ZXJzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2luZ3MoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoSW5mbygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfSU5GT19SRVFVRVNULCBjaGFuZ2VJbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJDYWxlbmRhckRhdGEoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX0NBTEVOREFSX0RBVEFfUkVRVUVTVCwgbG9hZFVzZXJDYWxlbmRhckRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIndhdGNoU2luVXBcIik7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hVcGxvYWRQcm9maWxlKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyQ2FsZW5kYXJEYXRhKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2luZ3MpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ2luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKVxyXG4gICAgXSkgICBcclxufVxyXG5cclxuLy9wdXTsnbQgZGlzcGF0Y2jsnZgg7Jet7ZWgLCDslYTrnpgg7IS46rCc6rCAIOydtOuypO2KuOumrOyKpOuEiOyZgCDqsJnsnYAg7Jet7ZWgXHJcbi8vdGFrZeuKlCDsnbztmozshLHsnbTrnbwgd2hpbGXrrLjsnLzroZwg6rCQ7Iu47JW8IOustO2VnO2eiCDsi6Ttlokg6rCA64qlXHJcbi8vd2hpbGUgdGFrZeuKlCDrj5nquLDsoIHsnLzroZwg64+Z7J6R7ZWY7KeA66eMIHRha2VFdmVyeeuKlCDruYTrj5nquLDroZwg64+Z7J6RLiB0YWtlRXZlcnnroZwgd2hpbGXrrLgg64yA7LK0XHJcbi8vdGFrZUxhdGVzdDog7Iuk7IiY66GcIOyXrOufrOuyiCDrj5nsi5zsl5Ag64iM65+s64+EIOqwgOyepSDrp4jsp4Drp4kg7JqU7LKt66eMIOyImO2WiS7roZzrlKnspJHsnbgg7JWe7ISgIOyalOyyreydtCDtlbTri7lcclxuLy90YWtlTGF0ZXN064qUIOydkeuLteydhCDst6jshoztlZjripTqsbDsp4Ag7JqU7LKt7J2EIOy3qOyGjO2VmOuKlOqyjCDslYTri5guXHJcbi8vdGFrZUxlYWRpbmc6IHRha2VMYXRlc3TsmYAg67CY64yA66GcIOqwgOyepSDsspjsnYwg7JqU7LKt66eMIOyImO2WiSIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJpbXBvcnQgeyBlbmFibGVFUzUsIHByb2R1Y2UgfSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xyXG4gIGVuYWJsZUVTNSgpO1xyXG4gIHJldHVybiBwcm9kdWNlKC4uLmFyZ3MpO1xyXG59O1xyXG4vL+yduO2EsOuEtyDsnbXsiqTtlIzroZzrn6zsl5DshJwg7J2066i46rCAIOyekeuPmeydhCDslYjtlbTshJwg7ISk7KCV7J2EIO2VtOykmOyVvCDtlaguIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xheW91dC9sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==