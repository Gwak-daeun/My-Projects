webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/layout/layout */ "./node_modules/antd/lib/layout/layout.js");
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\components\\AppLayout.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var AppLayout = function AppLayout(_ref) {
  _s();
  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me,
    logOutLoading = _useSelector.logOutLoading;
  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
      return state.post;
    }),
    keywords = _useSelector2.keywords;
  var resultWords = keywords === null || keywords === void 0 ? void 0 : keywords.map(function (items) {
    return {
      value: items.name
    };
  });
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    searchInput = _useState[0],
    setSearchInput = _useState[1];
  console.log(resultWords);
  var onChangeSearchInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    setSearchInput(value);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["SEARCH_KEYWORD_REQUEST"],
      data: value
    });
  }, [dispatch]);
  var onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/hashtag/".concat(searchInput));
  }, [searchInput]);
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_6__["logoutRequestAction"])());
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace("/");
  }, []);
  var handleSelect = function handleSelect(value) {
    setSearchInput(value);
  };
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    id: "menu1",
    mode: "horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 16
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "item1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 32
    }
  }, "FASHIONARY"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "item1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 39
    }
  }, "My Profile"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/allPosts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "item1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 45
    }
  }, "All Looks"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    className: "item2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "\uCC3E\uACE0 \uC2F6\uC740 \uBE0C\uB79C\uB4DC\uB97C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694.",
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "item1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, me ? "현재 로그인 계정: " + me.nickname : null)), me ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "button1",
    onClick: onLogOut,
    loading: logOutLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, "\uB85C\uADF8\uC544\uC6C3")) : null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, children)), __jsx(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_8__["Footer"], {
    style: {
      textAlign: 'center',
      marginTop: '50px',
      fontSize: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"], {
    title: "Info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 1
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "\uAC1C\uBC1C\uC790",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, "\uACFD\uB2E4\uC740"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "\uC5F0\uB77D\uCC98",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, "010 - 3384 - 2874"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "E-mail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, "bbibibbibi22@gmail.com"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "Git-Hub",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://github.com/Gwak-daeun/My-Projects.git",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 40
    }
  }), "Gwak-daeun"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "Notion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx("a", {
    target: "_blank",
    href: "https://knowing-yogurt-cd2.notion.site/3dbeb300ba74486689474100d5c98971",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 39
    }
  }, "\uAC1C\uBC1C\uC790\uC758 Notion")))));
};
_s(AppLayout, "DHekE8jqgvCAr6QfMIx1rlKt2Ew=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});
_c = AppLayout;
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);
var _c;
$RefreshReg$(_c, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImxvZ091dExvYWRpbmciLCJwb3N0Iiwia2V5d29yZHMiLCJyZXN1bHRXb3JkcyIsIm1hcCIsIml0ZW1zIiwidmFsdWUiLCJuYW1lIiwidXNlU3RhdGUiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwiU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCIsImRhdGEiLCJvblNlYXJjaCIsIlJvdXRlciIsInB1c2giLCJvbkxvZ091dCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZXBsYWNlIiwiaGFuZGxlU2VsZWN0Iiwibmlja25hbWUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNtQztBQUMzRDtBQUNZO0FBQ1I7QUFDc0I7QUFDQTtBQUNHO0FBQ1Y7QUFHaEQsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVMsT0FBbUI7RUFBQTtFQUFBLElBQWRDLFFBQVEsUUFBUkEsUUFBUTtFQUV4QixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFFOUIsbUJBQTRCQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQXZEQyxFQUFFLGdCQUFGQSxFQUFFO0lBQUVDLGFBQWEsZ0JBQWJBLGFBQWE7RUFFeEIsb0JBQW1CSiwrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNJLElBQUk7SUFBQSxFQUFD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O0FBR2QsQ0FBQztBQUFDLEdBdkdJdEMsU0FBUztFQUFBLFFBRU1HLHVEQUFXLEVBRUFDLHVEQUFXLEVBRXBCQSx1REFBVztBQUFBO0FBQUEsS0FONUJKLFNBQVM7QUF5R0FBLHdFQUFTLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ5MWE0MDdiZjQxYjU0YTQ1NjVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SW5wdXQsIE1lbnUsIFJvdywgQ29sLCBCdXR0b24sIFRvb2x0aXAsIEF1dG9Db21wbGV0ZSwgRGVzY3JpcHRpb25zfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgbG9nb3V0UmVxdWVzdEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiYW50ZC9saWIvbGF5b3V0L2xheW91dFwiO1xyXG5cclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHttZSwgbG9nT3V0TG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGNvbnN0IHtrZXl3b3Jkc30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdFdvcmRzID0ga2V5d29yZHM/Lm1hcChpdGVtcyA9PiAoe3ZhbHVlOiBpdGVtcy5uYW1lfSkpO1xyXG5cclxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdFdvcmRzKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVNlYXJjaElucHV0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFNlYXJjaElucHV0KHZhbHVlKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgICBjb25zdCBvblNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHtzZWFyY2hJbnB1dH1gKTtcclxuICAgICAgfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gICAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgUm91dGVyLnJlcGxhY2UoYC9gKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hJbnB1dCh2YWx1ZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICA8TWVudSBpZD1cIm1lbnUxXCIgbW9kZT0naG9yaXpvbnRhbCc+ICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48aDEgY2xhc3NOYW1lPVwiaXRlbTFcIiA+RkFTSElPTkFSWTwvaDE+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+PGgzIGNsYXNzTmFtZT1cIml0ZW0xXCIgPk15IFByb2ZpbGU8L2gzPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtID5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvYWxsUG9zdHNcIj48aDMgY2xhc3NOYW1lPVwiaXRlbTFcIiA+QWxsIExvb2tzPC9oMz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT4gXHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGNsYXNzTmFtZT1cIml0ZW0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9J+ywvuqzoCDsi7bsnYAg67iM656c65Oc66W8IOqygOyDie2VtOuztOyEuOyalC4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyZXN1bHRXb3Jkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdsYXlvdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2xheW91dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaXRlbTFcIj57IG1lID8gXCLtmITsnqwg66Gc6re47J24IOqzhOyglTogXCIgKyBtZS5uaWNrbmFtZSA6IG51bGx9PC9oND5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgeyBtZSBcclxuICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uMVwiIG9uQ2xpY2s9e29uTG9nT3V0fSBsb2FkaW5nPXtsb2dPdXRMb2FkaW5nfSA+66Gc6re47JWE7JuDPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezh9PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+e2NoaWxkcmVufTwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPEZvb3RlclxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4J1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuPERlc2NyaXB0aW9ucyB0aXRsZT1cIkluZm9cIj5cclxuICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIuqwnOuwnOyekFwiPuqzveuLpOydgDwvRGVzY3JpcHRpb25zLkl0ZW0+XHJcbiAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9XCLsl7Drnb3ssphcIj4wMTAgLSAzMzg0IC0gMjg3NDwvRGVzY3JpcHRpb25zLkl0ZW0+XHJcbiAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9XCJFLW1haWxcIj5iYmliaWJiaWJpMjJAZ21haWwuY29tPC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIkdpdC1IdWJcIj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0d3YWstZGFldW4vTXktUHJvamVjdHMuZ2l0XCI+PC9hPkd3YWstZGFldW48L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiTm90aW9uXCI+PGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9XCJodHRwczovL2tub3dpbmcteW9ndXJ0LWNkMi5ub3Rpb24uc2l0ZS8zZGJlYjMwMGJhNzQ0ODY2ODk0NzQxMDBkNWM5ODk3MVwiPuqwnOuwnOyekOydmCBOb3Rpb248L2E+PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuPC9EZXNjcmlwdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==