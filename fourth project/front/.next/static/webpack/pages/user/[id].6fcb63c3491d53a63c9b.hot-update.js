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
  // const {id} = router.query;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanMiXSwibmFtZXMiOlsiT25lVXNlciIsInN0eWxlZCIsImRpdiIsIlVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZXJJbmZvIiwibWUiLCJ1c2VFZmZlY3QiLCJpZCIsIlJvdXRlciIsInJlcGxhY2UiLCJhbGVydCIsInB1c2giLCJuaWNrbmFtZSIsIlVzZXJEYXRlQ2VsbFJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQzNDO0FBQ2lDO0FBQ1E7QUFDQztBQUNTO0FBQ2dDO0FBQ3BCO0FBQ1E7QUFDRjtBQUtJO0FBQ0U7QUFDcEM7QUFFdkMsSUFBTUEsT0FBTyxHQUFHQywwREFBTSxDQUFDQyxHQUFHO0VBQUE7RUFBQTtBQUFBLHFNQXNCekI7QUFBQyxLQXRCSUYsT0FBTztBQXdCYixJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBSSxHQUFTO0VBQUE7RUFFZjtFQUNBOztFQUVBLG1CQUF1QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUFsREMsUUFBUSxnQkFBUkEsUUFBUTtJQUFFQyxFQUFFLGdCQUFGQSxFQUFFO0VBR25CQyx1REFBUyxDQUFDLFlBQU07SUFDaEI7SUFDSSxJQUFHQyxFQUFFLElBQUlGLEVBQUUsQ0FBQ0UsRUFBRSxFQUFDO01BQ1hDLGtEQUFNLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDdkI7SUFDQSxJQUFHLEVBQUVKLEVBQUUsSUFBSUEsRUFBRSxDQUFDRSxFQUFFLENBQUMsRUFBRTtNQUNmRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7TUFDeEJGLGtEQUFNLENBQUNHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEI7RUFHSixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sT0FDSSxNQUFDLDZEQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDTixNQUFDLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNSO0lBQUssU0FBUyxFQUFDLE1BQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNyQjtJQUFTLFNBQVMsRUFBQyxVQUFVO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDN0IsTUFBQyx3Q0FBRztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFLUCxRQUFRLENBQUNRLFFBQVEsZUFBZ0IsQ0FBTSxFQUNqRCxNQUFDLHdDQUFHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSjtJQUFLLFNBQVMsRUFBQyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDckIsTUFBQyx5Q0FBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0QsTUFBQyw2Q0FBUTtJQUNULFNBQVMsRUFBQyxXQUFXO0lBQ3JCLGNBQWMsRUFBRUMsb0ZBQW1CO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDakMsQ0FFQyxDQUNELEVBQ047SUFBSyxTQUFTLEVBQUMsTUFBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ2pCLE1BQUMsMEVBQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ1osTUFBQyw2RUFBVztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDZixNQUFDLDhFQUFZO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUNkLENBQ0EsRUFDTixNQUFDLHdDQUFHO0lBQUMsU0FBUyxFQUFDLE1BQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUVqQixNQUFDLCtFQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNqQixNQUFDLGlGQUFjO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUNoQixDQUNJLENBQ0osQ0FDSSxDQUNGO0FBRXBCLENBQUM7QUFBQyxHQXJESWIsSUFBSTtFQUFBLFFBS2lCQyx1REFBVztBQUFBO0FBQUEsTUFMaENELElBQUk7QUFBQTtBQTRFS0EsbUVBQUksRUFBQztBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL1tpZF0uNmZjYjYzYzM0OTFkNTNhNjNjOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFyLCBDYXJkLCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgeyAgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IFVzZXJEYXRlQ2VsbFJlbmRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VyQ29tcG9uZW50L3VzZXJEYXRlQ2VsbFJlbmRlclwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlckNvbXBvbmVudC91c2VySW5mb1wiO1xyXG5pbXBvcnQgVXNlckxpa2VMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VzZXJDb21wb25lbnQvdXNlckxpa2VMaXN0XCI7XHJcbmltcG9ydCBVc2VyTWVudGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VyQ29tcG9uZW50L3VzZXJNZW50aW9uXCI7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX1VTRVJfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCBVc2VyRm9sbG93ZXJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VzZXJDb21wb25lbnQvdXNlckZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgVXNlckZvbGxvd2luZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlckNvbXBvbmVudC91c2VyRm9sbG93aW5nc1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgT25lVXNlciA9IHN0eWxlZC5kaXZgXHJcbiAgICAuZGl2MXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEyNTBweDtcclxuICAgIH1cclxuICAgIC5kaXYye1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24xe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmNhbGVuZGFyMXtcclxuICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDEwcHg7XHJcbiAgICB9XHJcbiAgICAucm93MXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlciA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIC8vIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3Qge3VzZXJJbmZvLCBtZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8v64uk66W4IOycoOyggCDtlITroZztlYTroZwg7J2064+ZIOyLnCwg7KCR7IaNIOykkeyduCDslYTsnbTrlJTsmYAg6rCZ7J2A7KeAIOu5hOq1kCDtm4Qg6rCZ64uk66m0IO2ZiO2ZlOuptOycvOuhnCDsnbTrj5lcclxuICAgICAgICBpZihpZCA9PSBtZS5pZCl7XHJcbiAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi66Gc6re47J24IO2bhCDsnbTsmqkg6rCA64ql7ZWp64uI64ukLlwiKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPE9uZVVzZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MVwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uMVwiID5cclxuICAgICAgICAgICAgPFJvdz48aDE+e3VzZXJJbmZvLm5pY2tuYW1lfSdzIFByb2ZpbGU8L2gxPjwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjJcIj5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYWxlbmRhcjFcIlxyXG4gICAgICAgICAgICAgICAgZGF0ZUNlbGxSZW5kZXI9e1VzZXJEYXRlQ2VsbFJlbmRlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjJcIj5cclxuICAgICAgICAgICAgICAgIDxVc2VySW5mbyAvPiBcclxuICAgICAgICAgICAgICAgIDxVc2VyTWVudGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJMaWtlTGlzdCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwicm93MVwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VXNlckZvbGxvd2VycyAvPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJGb2xsb3dpbmdzIC8+XHJcbiAgICAgICAgICAgIDwvUm93PiAgXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvT25lVXNlcj5cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMoY29udGV4dCkgPT4geyBcclxuICAgIFxyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJzsgXHJcbiAgICBpZihjb250ZXh0LnJlcSAmJiBjb29raWUpeyBcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1RcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICB9KTtcclxuICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==