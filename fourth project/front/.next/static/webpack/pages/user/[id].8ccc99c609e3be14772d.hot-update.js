webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_userComponent_userDateCellRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/userComponent/userDateCellRender */ "./components/userComponent/userDateCellRender.js");
/* harmony import */ var _components_userComponent_userInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/userComponent/userInfo */ "./components/userComponent/userInfo.js");
/* harmony import */ var _components_userComponent_userLikeList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/userComponent/userLikeList */ "./components/userComponent/userLikeList.js");
/* harmony import */ var _components_userComponent_userMention__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/userComponent/userMention */ "./components/userComponent/userMention.js");
/* harmony import */ var _components_userComponent_userFollowers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/userComponent/userFollowers */ "./components/userComponent/userFollowers.js");
/* harmony import */ var _components_userComponent_userFollowings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/userComponent/userFollowings */ "./components/userComponent/userFollowings.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\pages\\user\\[id].js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

// import {  useRouter } from "next/router";











var OneUser = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "id__OneUser",
  componentId: "sc-18hvwfa-0"
})([".div1{position:relative;width:1250px;}.div2{float:left;}.section1{margin-top:50px;}.button1{background-color:black;color:white;}.calendar1{width:700px;height:1010px;}.row1{margin-top:15px;}"]);
_c = OneUser;
var User = function User() {
  _s();
  // const router = useRouter();
  var id = router.query.id;
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
      return state.user;
    }),
    userInfo = _useSelector.userInfo,
    me = _useSelector.me;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(OneUser, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "div1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: "section1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 18
    }
  }, userInfo.nickname, "'s Profile")), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "div2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Calendar"], {
    className: "calendar1",
    dateCellRender: _components_userComponent_userDateCellRender__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "div2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_components_userComponent_userInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }), __jsx(_components_userComponent_userMention__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx(_components_userComponent_userLikeList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    className: "row1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(_components_userComponent_userFollowers__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), __jsx(_components_userComponent_userFollowings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }))))));
};
_s(User, "VYS7VbbLFC1uVke6pZzcxPJvDaU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});
_c2 = User;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (User);
var _c, _c2;
$RefreshReg$(_c, "OneUser");
$RefreshReg$(_c2, "User");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanMiXSwibmFtZXMiOlsiT25lVXNlciIsInN0eWxlZCIsImRpdiIsIlVzZXIiLCJpZCIsInJvdXRlciIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VySW5mbyIsIm1lIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicmVwbGFjZSIsImFsZXJ0IiwicHVzaCIsIm5pY2tuYW1lIiwiVXNlckRhdGVDZWxsUmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDM0M7QUFDaUM7QUFDUTtBQUNDO0FBQ1M7QUFDZ0M7QUFDcEI7QUFDUTtBQUNGO0FBS0k7QUFDRTtBQUNwQztBQUV2QyxJQUFNQSxPQUFPLEdBQUdDLDBEQUFNLENBQUNDLEdBQUc7RUFBQTtFQUFBO0FBQUEscU1Bc0J6QjtBQUFDLEtBdEJJRixPQUFPO0FBd0JiLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFJLEdBQVM7RUFBQTtFQUVmO0VBQ0EsSUFBT0MsRUFBRSxHQUFJQyxNQUFNLENBQUNDLEtBQUssQ0FBbEJGLEVBQUU7RUFFVCxtQkFBdUJHLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtJQUFBLEVBQUM7SUFBbERDLFFBQVEsZ0JBQVJBLFFBQVE7SUFBRUMsRUFBRSxnQkFBRkEsRUFBRTtFQUduQkMsdURBQVMsQ0FBQyxZQUFNO0lBQ2hCO0lBQ0ksSUFBR1IsRUFBRSxJQUFJTyxFQUFFLENBQUNQLEVBQUUsRUFBQztNQUNYUyxrREFBTSxDQUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3ZCO0lBQ0EsSUFBRyxFQUFFSCxFQUFFLElBQUlBLEVBQUUsQ0FBQ1AsRUFBRSxDQUFDLEVBQUU7TUFDZlcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO01BQ3hCRixrREFBTSxDQUFDRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCO0VBR0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE9BQ0ksTUFBQyw2REFBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ04sTUFBQyxPQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDUjtJQUFLLFNBQVMsRUFBQyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDckI7SUFBUyxTQUFTLEVBQUMsVUFBVTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQzdCLE1BQUMsd0NBQUc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBS04sUUFBUSxDQUFDTyxRQUFRLGVBQWdCLENBQU0sRUFDakQsTUFBQyx3Q0FBRztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0o7SUFBSyxTQUFTLEVBQUMsTUFBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3JCLE1BQUMseUNBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNELE1BQUMsNkNBQVE7SUFDVCxTQUFTLEVBQUMsV0FBVztJQUNyQixjQUFjLEVBQUVDLG9GQUFtQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQ2pDLENBRUMsQ0FDRCxFQUNOO0lBQUssU0FBUyxFQUFDLE1BQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNqQixNQUFDLDBFQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNaLE1BQUMsNkVBQVc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ2YsTUFBQyw4RUFBWTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDZCxDQUNBLEVBQ04sTUFBQyx3Q0FBRztJQUFDLFNBQVMsRUFBQyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFakIsTUFBQywrRUFBYTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDakIsTUFBQyxpRkFBYztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDaEIsQ0FDSSxDQUNKLENBQ0ksQ0FDRjtBQUVwQixDQUFDO0FBQUMsR0FyRElmLElBQUk7RUFBQSxRQUtpQkksdURBQVc7QUFBQTtBQUFBLE1BTGhDSixJQUFJO0FBQUE7QUE0RUtBLG1FQUFJLEVBQUM7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLjhjY2M5OWM2MDllM2JlMTQ3NzJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhciwgQ2FyZCwgUm93IH0gZnJvbSBcImFudGRcIjtcclxuLy8gaW1wb3J0IHsgIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBVc2VyRGF0ZUNlbGxSZW5kZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlckNvbXBvbmVudC91c2VyRGF0ZUNlbGxSZW5kZXJcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VzZXJDb21wb25lbnQvdXNlckluZm9cIjtcclxuaW1wb3J0IFVzZXJMaWtlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VyQ29tcG9uZW50L3VzZXJMaWtlTGlzdFwiO1xyXG5pbXBvcnQgVXNlck1lbnRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlckNvbXBvbmVudC91c2VyTWVudGlvblwiO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgVXNlckZvbGxvd2VycyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VyQ29tcG9uZW50L3VzZXJGb2xsb3dlcnNcIjtcclxuaW1wb3J0IFVzZXJGb2xsb3dpbmdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VzZXJDb21wb25lbnQvdXNlckZvbGxvd2luZ3NcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IE9uZVVzZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgLmRpdjF7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMjUwcHg7XHJcbiAgICB9XHJcbiAgICAuZGl2MntcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uMXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjF7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5jYWxlbmRhcjF7XHJcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnJvdzF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFVzZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHt1c2VySW5mbywgbWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL+uLpOuluCDsnKDsoIAg7ZSE66Gc7ZWE66GcIOydtOuPmSDsi5wsIOygkeyGjSDspJHsnbgg7JWE7J2065SU7JmAIOqwmeydgOyngCDruYTqtZAg7ZuEIOqwmeuLpOuptCDtmYjtmZTrqbTsnLzroZwg7J2064+ZXHJcbiAgICAgICAgaWYoaWQgPT0gbWUuaWQpe1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighKG1lICYmIG1lLmlkKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIuuhnOq3uOyduCDtm4Qg7J207JqpIOqwgOuKpe2VqeuLiOuLpC5cIik7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxPbmVVc2VyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbjFcIiA+XHJcbiAgICAgICAgICAgIDxSb3c+PGgxPnt1c2VySW5mby5uaWNrbmFtZX0ncyBQcm9maWxlPC9oMT48L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYyXCI+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhbGVuZGFyIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FsZW5kYXIxXCJcclxuICAgICAgICAgICAgICAgIGRhdGVDZWxsUmVuZGVyPXtVc2VyRGF0ZUNlbGxSZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYyXCI+XHJcbiAgICAgICAgICAgICAgICA8VXNlckluZm8gLz4gXHJcbiAgICAgICAgICAgICAgICA8VXNlck1lbnRpb24gLz5cclxuICAgICAgICAgICAgICAgIDxVc2VyTGlrZUxpc3QgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInJvdzFcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFVzZXJGb2xsb3dlcnMgLz5cclxuICAgICAgICAgICAgICAgIDxVc2VyRm9sbG93aW5ncyAvPlxyXG4gICAgICAgICAgICA8L1Jvdz4gIFxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L09uZVVzZXI+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jKGNvbnRleHQpID0+IHsgXHJcbiAgICBcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7IFxyXG4gICAgaWYoY29udGV4dC5yZXEgJiYgY29va2llKXsgXHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNUXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgfSk7XHJcbiAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJzb3VyY2VSb290IjoiIn0=