webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");

var _this = undefined,
  _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\pages\\signup.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "signup__ErrorMessage",
  componentId: "sc-1qf8hnm-0"
})(["color:red;"]);
_c = ErrorMessage;
var OneMyInfo = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "signup__OneMyInfo",
  componentId: "sc-1qf8hnm-1"
})([".card1{width:60%;margin:auto;margin-top:200px;}.form1{width:50%;text-align :center;margin:auto;}.login-form-button{background-color:black;color:white;}"]);
_c2 = OneMyInfo;
var Signup = function Signup() {
  _s();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state.user;
    }),
    signUpLoading = _useSelector.signUpLoading,
    signUpDone = _useSelector.signUpDone,
    signUPError = _useSelector.signUPError,
    me = _useSelector.me;
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    nickname = _useInput2[0],
    onChangeNickname = _useInput2[1];
  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
    _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
    password = _useInput4[0],
    onChangePassword = _useInput4[1];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    passwordCheck = _useState[0],
    setPasswordCheck = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    passwordError = _useState2[0],
    setPasswordError = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    termError = _useState3[0],
    setTermError = _useState3[1];
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    term = _useState4[0],
    setTerm = _useState4[1];
  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(nickname, password);
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["SIGN_UP_REQUEST"],
      data: {
        password: password,
        nickname: nickname
      }
    });
  }, [password, passwordCheck, term]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (me && me.id) {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace('/');
    }
  }, [me && me.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (signUpDone) {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace('/');
    }
  }, [signUpDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (signUPError) {
      alert(signUPError);
    }
  }, [signUPError]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 3
    }
  }, __jsx(OneMyInfo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 6
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "\uD68C\uC6D0\uAC00\uC785")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "card1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    name: "normal_login",
    className: "form1",
    initialValues: {
      remember: true
    },
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, "\uB2C9\uB124\uC784"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
      className: "site-form-item-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 22
      }
    }),
    name: "name",
    placeholder: "Username",
    value: nickname,
    onChange: onChangeNickname,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {
      className: "site-form-item-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }),
    name: "password",
    placeholder: "Password",
    value: password,
    type: "password",
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {
      className: "site-form-item-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }
    }),
    name: "password-check",
    placeholder: "Check Password",
    type: "password",
    value: passwordCheck,
    onChange: onChangePasswordCheck,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 28
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }
  }, "\uD68C\uC6D0\uAC00\uC785 \uD6C4 \uC544\uC774\uB514\uB294 \uBCC0\uACBD \uBD88\uAC00 \uD569\uB2C8\uB2E4."), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 27
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    loading: signUpLoading,
    htmlType: "submit",
    className: "login-form-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, "\uD68C\uC6D0\uAC00\uC785 \uD558\uAE30"))))));
};
_s(Signup, "oG0lEzfYeCs6ycMLMkQoePiQvHE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});
_c3 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);
var _c, _c2, _c3;
$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "OneMyInfo");
$RefreshReg$(_c3, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIk9uZU15SW5mbyIsIlNpZ251cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVQRXJyb3IiLCJtZSIsInVzZUlucHV0Iiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwidGVybSIsInNldFRlcm0iLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiU0lHTl9VUF9SRVFVRVNUIiwiZGF0YSIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicmVwbGFjZSIsImFsZXJ0IiwicmVtZW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNUO0FBQ1E7QUFDSjtBQUNsQjtBQUNPO0FBQ1Q7QUFDVjtBQUNJO0FBQ2dCO0FBRWpELElBQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxrQkFFOUI7QUFBQyxLQUZJRixZQUFZO0FBSWxCLElBQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSwrSkFlM0I7QUFBQyxNQWZJQyxTQUFTO0FBa0JmLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFN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QVEsRUFBRU8sWUFBYTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDRHQUFrQyxFQUMxRlQsU0FBUyxJQUFJLE1BQUMsWUFBWTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDJFQUE4QixDQUNyRCxFQUVaLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDUixNQUFDLDJDQUFNO0lBQ1AsT0FBTyxFQUFFZCxhQUFjO0lBQ3ZCLFFBQVEsRUFBQyxRQUFRO0lBQ2pCLFNBQVMsRUFBQyxtQkFBbUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSwyQ0FFcEIsQ0FFQyxDQUNQLENBQ0EsQ0FDSyxDQUNBO0FBRWQsQ0FBQztBQUFDLEdBaklJTixNQUFNO0VBQUEsUUFFT0UsdURBQVcsRUFDMkJDLHVEQUFXLEVBRTdCTyx1REFBUSxFQUNSQSx1REFBUTtBQUFBO0FBQUEsTUFOekNWLE1BQU07QUFtSUdBLHFFQUFNLEVBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuMTc4NzljYjgyNGFmNjdlZDA3M2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExvY2tPdXRsaW5lZCwgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENoZWNrYm94LCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtTSUdOX1VQX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICAgIGNvbG9yOiByZWQ7XHJcbmA7XHJcblxyXG5jb25zdCBPbmVNeUluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIC5jYXJkMXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICB9XHJcbiAgLmZvcm0xe1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHtzaWduVXBMb2FkaW5nLCBzaWduVXBEb25lLCBzaWduVVBFcnJvciwgbWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgfSwgW3Bhc3N3b3JkXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVGVybSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgIHNldFRlcm1FcnJvcihmYWxzZSk7XHJcbiAgfSxbXSk7ICAgIFxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgaWYocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spe1xyXG4gICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoIXRlcm0pe1xyXG4gICAgICAgICAgcmV0dXJuIHNldFRlcm1FcnJvcih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhuaWNrbmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICAgICAgICBkYXRhOiB7cGFzc3dvcmQsIG5pY2tuYW1lfVxyXG4gICAgICB9KTtcclxuICB9LCBbcGFzc3dvcmQsIHBhc3N3b3JkQ2hlY2ssIHRlcm1dKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihtZSAmJiBtZS5pZCkge1xyXG4gICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7IFxyXG4gICAgfVxyXG59LCBbbWUgJiYgbWUuaWRdKTtcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihzaWduVXBEb25lKXtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgfVxyXG59LCBbc2lnblVwRG9uZV0pO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHNpZ25VUEVycm9yKXtcclxuICAgICAgICBhbGVydChzaWduVVBFcnJvcik7XHJcbiAgICB9XHJcbn0sIFtzaWduVVBFcnJvcl0pO1xyXG5cclxucmV0dXJuKFxyXG4gIDxBcHBMYXlvdXQ+XHJcbiAgICA8T25lTXlJbmZvPlxyXG4gICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+7ZqM7JuQ6rCA7J6FPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmQxXCI+XHJcbiAgICBcclxuICAgIDxGb3JtXHJcbiAgICBuYW1lPVwibm9ybWFsX2xvZ2luXCJcclxuICAgIGNsYXNzTmFtZT1cImZvcm0xXCJcclxuICAgIGluaXRpYWxWYWx1ZXM9e3tyZW1lbWJlcjogdHJ1ZSx9fVxyXG4gICAgb25GaW5pc2g9e29uU3VibWl0fVxyXG4gID5cclxuICAgIDxGb3JtLkl0ZW1cclxuICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgID5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPuuLieuEpOyehDwvbGFiZWw+XHJcbiAgICAgIDxJbnB1dCBwcmVmaXg9ezxVc2VyT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fSBcclxuICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgXHJcbiAgICAgIHZhbHVlPXtuaWNrbmFtZX0gXHJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfVxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8Rm9ybS5JdGVtXHJcbiAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICA+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgPEZvcm0uSXRlbT5cclxuICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZC1jaGVjayc+67mE67CA67KI7Zi4IOyytO2BrDwvbGFiZWw+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgbmFtZT0ncGFzc3dvcmQtY2hlY2snXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDaGVjayBQYXNzd29yZFwiXHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICB2YWx1ZT17cGFzc3dvcmRDaGVja30gXHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja31cclxuICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAge3Bhc3N3b3JkRXJyb3IgJiYgPEVycm9yTWVzc2FnZT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L0Vycm9yTWVzc2FnZT59XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICA8Rm9ybS5JdGVtPlxyXG4gICAgPENoZWNrYm94IG5hbWU9J3VzZXItdGVybScgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e29uQ2hhbmdlVGVybX0+7ZqM7JuQ6rCA7J6FIO2bhCDslYTsnbTrlJTripQg67OA6rK9IOu2iOqwgCDtlanri4jri6QuPC9DaGVja2JveD5cclxuICAgICAgICAgICAge3Rlcm1FcnJvciAmJiA8RXJyb3JNZXNzYWdlPuyVveq0gOyXkCDrj5nsnZjtlZjshZTslbwg7ZWp64uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgIDxCdXR0b24gXHJcbiAgICAgIGxvYWRpbmc9e3NpZ25VcExvYWRpbmd9ICBcclxuICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1idXR0b25cIj5cclxuICAgICAgICDtmozsm5DqsIDsnoUg7ZWY6riwXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICBcclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gIDwvRm9ybT5cclxuICA8L0NhcmQ+XHJcbiAgPC9PbmVNeUluZm8+XHJcbiAgPC9BcHBMYXlvdXQ+XHJcbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7Il0sInNvdXJjZVJvb3QiOiIifQ==