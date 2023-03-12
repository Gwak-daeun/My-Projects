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
    className: "footer",
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
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "\uAC1C\uBC1C\uC790",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "\uACFD\uB2E4\uC740"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "\uC5F0\uB77D\uCC98",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "010 - 3384 - 2874"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "Git-Hub",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("a", {
    target: "_blank",
    href: "https://github.com/Gwak-daeun/fashionary.git",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 56
    }
  }, "Source code")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Descriptions"].Item, {
    label: "Resume",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx("a", {
    target: "_blank",
    href: "https://knowing-yogurt-cd2.notion.site/3dbeb300ba74486689474100d5c98971",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 55
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImxvZ091dExvYWRpbmciLCJwb3N0Iiwia2V5d29yZHMiLCJyZXN1bHRXb3JkcyIsIm1hcCIsIml0ZW1zIiwidmFsdWUiLCJuYW1lIiwidXNlU3RhdGUiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwiU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCIsImRhdGEiLCJvblNlYXJjaCIsIlJvdXRlciIsInB1c2giLCJvbkxvZ091dCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZXBsYWNlIiwiaGFuZGxlU2VsZWN0Iiwibmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDbUM7QUFDM0Q7QUFDWTtBQUNSO0FBQ3NCO0FBQ0E7QUFDRztBQUNWO0FBR2hELElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTLE9BQW1CO0VBQUE7RUFBQSxJQUFkQyxRQUFRLFFBQVJBLFFBQVE7RUFFeEIsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBRTlCLG1CQUE0QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUF2REMsRUFBRSxnQkFBRkEsRUFBRTtJQUFFQyxhQUFhLGdCQUFiQSxhQUFhO0VBRXhCLG9CQUFtQkosK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDSSxJQUFJO0lBQUEsRUFBQztJQUE5Q0MsUUFBUSxpQkFBUkEsUUFBUTtFQUVmLElBQU1DLFdBQVcsR0FBR0QsUUFBUSxhQUFSQSxRQUFRLHVCQUFSQSxRQUFRLENBQUVFLEdBQUcsQ0FBQyxVQUFBQyxLQUFLO0lBQUEsT0FBSztNQUFDQyxLQUFLLEVBQUVELEtBQUssQ0FBQ0U7SUFBSSxDQUFDO0VBQUEsQ0FBQyxDQUFDO0VBRWpFLGdCQUFzQ0Msc0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBM0NDLFdBQVc7SUFBRUMsY0FBYztFQUVsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNULFdBQVcsQ0FBQztFQUV4QixJQUFNVSxtQkFBbUIsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFDLEVBQUs7SUFDM0MsSUFBTVQsS0FBSyxHQUFHUyxDQUFDLENBQUNDLE1BQU0sQ0FBQ1YsS0FBSztJQUM1QkksY0FBYyxDQUFDSixLQUFLLENBQUM7SUFDckJaLFFBQVEsQ0FBQztNQUNMdUIsSUFBSSxFQUFFQyxxRUFBc0I7TUFDNUJDLElBQUksRUFBRWI7SUFDVixDQUFDLENBQUM7RUFDTixDQUFDLEVBQUUsQ0FBQ1osUUFBUSxDQUFDLENBQUM7RUFFZCxJQUFNMEIsUUFBUSxHQUFHTix5REFBVyxDQUFDLFlBQU07SUFDL0JPLGtEQUFNLENBQUNDLElBQUksb0JBQWFiLFdBQVcsRUFBRztFQUN4QyxDQUFDLEVBQUUsQ0FBQ0EsV0FBVyxDQUFDLENBQUM7RUFFbkIsSUFBTWMsUUFBUSxHQUFHVCx5REFBVyxDQUFDLFlBQU07SUFDbkNwQixRQUFRLENBQUM4QiwwRUFBbUIsRUFBRSxDQUFDO0lBQy9CSCxrREFBTSxDQUFDSSxPQUFPLEtBQUs7RUFDbkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUlwQixLQUFLLEVBQUs7SUFDNUJJLGNBQWMsQ0FBQ0osS0FBSyxDQUFDO0VBQ3ZCLENBQUM7RUFFSCxPQUNJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDTyxNQUFDLHlDQUFJO0lBQUMsRUFBRSxFQUFDLE9BQU87SUFBQyxJQUFJLEVBQUMsWUFBWTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRWpDLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDVixNQUFDLGdEQUFJO0lBQUMsSUFBSSxFQUFDLEdBQUc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFDO0lBQUksU0FBUyxFQUFDLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxnQkFBaUIsQ0FBTyxDQUNoRCxFQUNaLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDVixNQUFDLGdEQUFJO0lBQUMsSUFBSSxFQUFDLFVBQVU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFDO0lBQUksU0FBUyxFQUFDLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxnQkFBaUIsQ0FBTyxDQUN0RCxFQUNiLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDVixNQUFDLGdEQUFJO0lBQUMsSUFBSSxFQUFDLGdCQUFnQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUM7SUFBSSxTQUFTLEVBQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGVBQWdCLENBQU8sQ0FDNUQsRUFDWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLFNBQVMsRUFBQyxPQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDeEIsTUFBQyw0Q0FBTztJQUFDLEtBQUssRUFBQywwRkFBb0I7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUMvQixNQUFDLGlEQUFZO0lBQ1Qsd0JBQXdCLEVBQUUsR0FBSTtJQUM5QixPQUFPLEVBQUVILFdBQVk7SUFDckIsRUFBRSxFQUFDLFFBQVE7SUFDWCxRQUFRLEVBQUV1QixZQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFdkIsTUFBQywwQ0FBSyxDQUFDLE1BQU07SUFDYixFQUFFLEVBQUMsUUFBUTtJQUNYLFNBQVMsRUFBQyxTQUFTO0lBQ25CLEtBQUssRUFBRWpCLFdBQVk7SUFDbkIsUUFBUSxFQUFFSSxtQkFBb0I7SUFDOUIsUUFBUSxFQUFFTyxRQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDakIsQ0FDUyxDQUNULENBQ0YsRUFDWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1Y7SUFBSSxTQUFTLEVBQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUdyQixFQUFFLEdBQUcsYUFBYSxHQUFHQSxFQUFFLENBQUM0QixRQUFRLEdBQUcsSUFBSSxDQUFNLENBQ3pELEVBQ1Y1QixFQUFFLEdBRUosTUFBQyx5Q0FBSSxDQUFDLElBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNOLE1BQUMsMkNBQU07SUFBQyxTQUFTLEVBQUMsU0FBUztJQUFDLE9BQU8sRUFBRXdCLFFBQVM7SUFBQyxPQUFPLEVBQUV2QixhQUFjO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBQWUsQ0FDN0UsR0FFWixJQUFJLENBR0QsRUFDUCxNQUFDLHdDQUFHO0lBQUMsTUFBTSxFQUFFLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNYLE1BQUMsd0NBQUc7SUFBQyxFQUFFLEVBQUUsRUFBRztJQUFDLEVBQUUsRUFBRSxDQUFFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDYixFQUNOLE1BQUMsd0NBQUc7SUFBQyxFQUFFLEVBQUUsRUFBRztJQUFDLEVBQUUsRUFBRSxFQUFHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBRVAsUUFBUSxDQUFPLENBQ25DLEVBQ04sTUFBQyw2REFBTTtJQUNQLFNBQVMsRUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFZCxNQUFDLGlEQUFZO0lBQUMsS0FBSyxFQUFDLE1BQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUN0QixNQUFDLGlEQUFZLENBQUMsSUFBSTtJQUFDLEtBQUssRUFBQyxvQkFBSztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQUF3QixFQUN0RCxNQUFDLGlEQUFZLENBQUMsSUFBSTtJQUFDLEtBQUssRUFBQyxvQkFBSztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHVCQUFzQyxFQUNwRSxNQUFDLGlEQUFZLENBQUMsSUFBSTtJQUFDLEtBQUssRUFBQyxTQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBQztJQUFHLE1BQU0sRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDLDhDQUE4QztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGlCQUFnQixDQUFvQixFQUM3SSxNQUFDLGlEQUFZLENBQUMsSUFBSTtJQUFDLEtBQUssRUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBQztJQUFHLE1BQU0sRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDLHlFQUF5RTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHFDQUFnQixDQUFvQixDQUM1SixDQUNWLENBQ1A7QUFHZCxDQUFDO0FBQUMsR0FsR0lELFNBQVM7RUFBQSxRQUVNRyx1REFBVyxFQUVBQyx1REFBVyxFQUVwQkEsdURBQVc7QUFBQTtBQUFBLEtBTjVCSixTQUFTO0FBb0dBQSx3RUFBUyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZmRmZTMxMjU2YTQ1ZDg0OWQ4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0lucHV0LCBNZW51LCBSb3csIENvbCwgQnV0dG9uLCBUb29sdGlwLCBBdXRvQ29tcGxldGUsIERlc2NyaXB0aW9uc30gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgeyBTRUFSQ0hfS0VZV09SRF9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcImFudGQvbGliL2xheW91dC9sYXlvdXRcIjtcclxuXHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7bWUsIGxvZ091dExvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBjb25zdCB7a2V5d29yZHN9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHRXb3JkcyA9IGtleXdvcmRzPy5tYXAoaXRlbXMgPT4gKHt2YWx1ZTogaXRlbXMubmFtZX0pKTtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRXb3Jkcyk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VTZWFyY2hJbnB1dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRTZWFyY2hJbnB1dCh2YWx1ZSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XHJcbiAgICAgIH0sIFtzZWFyY2hJbnB1dF0pO1xyXG5cclxuICAgIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICAgIFJvdXRlci5yZXBsYWNlKGAvYCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoSW5wdXQodmFsdWUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgPE1lbnUgaWQ9XCJtZW51MVwiIG1vZGU9J2hvcml6b250YWwnPiAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGgxIGNsYXNzTmFtZT1cIml0ZW0xXCIgPkZBU0hJT05BUlk8L2gxPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxoMyBjbGFzc05hbWU9XCJpdGVtMVwiID5NeSBQcm9maWxlPC9oMz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbSA+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L2FsbFBvc3RzXCI+PGgzIGNsYXNzTmFtZT1cIml0ZW0xXCIgPkFsbCBMb29rczwvaDM+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+IFxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBjbGFzc05hbWU9XCJpdGVtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPSfssL7qs6Ag7Iu27J2AIOu4jOuenOuTnOulvCDqsoDsg4ntlbTrs7TshLjsmpQuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9Db21wbGV0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cmVzdWx0V29yZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbGF5b3V0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdsYXlvdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIml0ZW0xXCI+eyBtZSA/IFwi7ZiE7J6sIOuhnOq3uOyduCDqs4TsoJU6IFwiICsgbWUubmlja25hbWUgOiBudWxsfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIHsgbWUgXHJcbiAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbjFcIiBvbkNsaWNrPXtvbkxvZ091dH0gbG9hZGluZz17bG9nT3V0TG9hZGluZ30gPuuhnOq3uOyVhOybgzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PntjaGlsZHJlbn08L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxGb290ZXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucyB0aXRsZT1cIkluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9XCLqsJzrsJzsnpBcIj7qs73ri6TsnYA8L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIuyXsOudveyymFwiPjAxMCAtIDMzODQgLSAyODc0PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9XCJHaXQtSHViXCI+PGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vR3dhay1kYWV1bi9mYXNoaW9uYXJ5LmdpdFwiPlNvdXJjZSBjb2RlPC9hPjwvRGVzY3JpcHRpb25zLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiUmVzdW1lXCI+PGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9XCJodHRwczovL2tub3dpbmcteW9ndXJ0LWNkMi5ub3Rpb24uc2l0ZS8zZGJlYjMwMGJhNzQ0ODY2ODk0NzQxMDBkNWM5ODk3MVwiPuqwnOuwnOyekOydmCBOb3Rpb248L2E+PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb25zPlxyXG4gICAgICAgICAgICA8L0Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=