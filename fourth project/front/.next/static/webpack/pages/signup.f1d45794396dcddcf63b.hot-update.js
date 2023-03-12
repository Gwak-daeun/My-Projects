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
})([".card1{width:60%;margin:auto;margin-top:200px;}.form1{width:50%;margin:auto;}.login-form-button{background-color:black;color:white;}.col1{text-align :center;}"]);
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
      lineNumber: 92,
      columnNumber: 3
    }
  }, __jsx(OneMyInfo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "\uD68C\uC6D0\uAC00\uC785")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "card1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, "Sign in"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    name: "normal_login",
    className: "form1",
    initialValues: {
      remember: true
    },
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, "\uB2C9\uB124\uC784"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
      className: "site-form-item-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
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
      lineNumber: 111,
      columnNumber: 7
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {
      className: "site-form-item-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
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
      lineNumber: 123,
      columnNumber: 7
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {
      className: "site-form-item-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
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
      lineNumber: 136,
      columnNumber: 7
    }
  }), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 28
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }
  }, "\uD68C\uC6D0\uAC00\uC785 \uD6C4 \uC544\uC774\uB514\uB294 \uBCC0\uACBD \uBD88\uAC00 \uD569\uB2C8\uB2E4."), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 27
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    loading: signUpLoading,
    htmlType: "submit",
    className: "login-form-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, "\uD68C\uC6D0\uAC00\uC785 \uD558\uAE30")))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIk9uZU15SW5mbyIsIlNpZ251cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVQRXJyb3IiLCJtZSIsInVzZUlucHV0Iiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwidGVybSIsInNldFRlcm0iLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiU0lHTl9VUF9SRVFVRVNUIiwiZGF0YSIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicmVwbGFjZSIsImFsZXJ0IiwicmVtZW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNUO0FBQ1E7QUFDQztBQUN2QjtBQUNPO0FBQ1Q7QUFDVjtBQUNJO0FBQ2dCO0FBRWpELElBQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxrQkFFOUI7QUFBQyxLQUZJRixZQUFZO0FBSWxCLElBQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxzS0FpQjNCO0FBQUMsTUFqQklDLFNBQVM7QUFvQmYsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1B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LE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDVixNQUFDLDZDQUFRO0lBQUMsSUFBSSxFQUFDLFdBQVc7SUFBQyxPQUFPLEVBQUVJLElBQUs7SUFBQyxRQUFRLEVBQUVPLFlBQWE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSw0R0FBa0MsRUFDMUZULFNBQVMsSUFBSSxNQUFDLFlBQVk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSwyRUFBOEIsQ0FDckQsRUFFWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1IsTUFBQywyQ0FBTTtJQUNQLE9BQU8sRUFBRWQsYUFBYztJQUN2QixRQUFRLEVBQUMsUUFBUTtJQUNqQixTQUFTLEVBQUMsbUJBQW1CO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsMkNBRXBCLENBRUMsQ0FDUCxDQUNBLENBQ0QsQ0FDTSxDQUNBO0FBRWQsQ0FBQztBQUFDLEdBcElJTixNQUFNO0VBQUEsUUFFT0UsdURBQVcsRUFDMkJDLHVEQUFXLEVBRTdCTyx1REFBUSxFQUNSQSx1REFBUTtBQUFBO0FBQUEsTUFOekNWLE1BQU07QUFzSUdBLHFFQUFNLEVBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuZjFkNDU3OTQzOTZkY2RkY2Y2M2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExvY2tPdXRsaW5lZCwgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENoZWNrYm94LCBDb2wsIEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge1NJR05fVVBfUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxyXG4gICAgY29sb3I6IHJlZDtcclxuYDtcclxuXHJcbmNvbnN0IE9uZU15SW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgLmNhcmQxe1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIH1cclxuICAuZm9ybTF7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAubG9naW4tZm9ybS1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmNvbDF7XHJcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHtzaWduVXBMb2FkaW5nLCBzaWduVXBEb25lLCBzaWduVVBFcnJvciwgbWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgfSwgW3Bhc3N3b3JkXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVGVybSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgIHNldFRlcm1FcnJvcihmYWxzZSk7XHJcbiAgfSxbXSk7ICAgIFxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgaWYocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spe1xyXG4gICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoIXRlcm0pe1xyXG4gICAgICAgICAgcmV0dXJuIHNldFRlcm1FcnJvcih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhuaWNrbmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICAgICAgICBkYXRhOiB7cGFzc3dvcmQsIG5pY2tuYW1lfVxyXG4gICAgICB9KTtcclxuICB9LCBbcGFzc3dvcmQsIHBhc3N3b3JkQ2hlY2ssIHRlcm1dKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihtZSAmJiBtZS5pZCkge1xyXG4gICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7IFxyXG4gICAgfVxyXG59LCBbbWUgJiYgbWUuaWRdKTtcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihzaWduVXBEb25lKXtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgfVxyXG59LCBbc2lnblVwRG9uZV0pO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHNpZ25VUEVycm9yKXtcclxuICAgICAgICBhbGVydChzaWduVVBFcnJvcik7XHJcbiAgICB9XHJcbn0sIFtzaWduVVBFcnJvcl0pO1xyXG5cclxucmV0dXJuKFxyXG4gIDxBcHBMYXlvdXQ+XHJcbiAgICA8T25lTXlJbmZvPlxyXG4gICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbDFcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT7tmozsm5DqsIDsnoU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZDFcIj5cclxuICAgIDxoMSA+U2lnbiBpbjwvaDE+XHJcbiAgICA8Rm9ybVxyXG4gICAgbmFtZT1cIm5vcm1hbF9sb2dpblwiXHJcbiAgICBjbGFzc05hbWU9XCJmb3JtMVwiXHJcbiAgICBpbml0aWFsVmFsdWVzPXt7cmVtZW1iZXI6IHRydWUsfX1cclxuICAgIG9uRmluaXNoPXtvblN1Ym1pdH1cclxuICA+XHJcbiAgICA8Rm9ybS5JdGVtXHJcbiAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICA+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICA8SW5wdXQgcHJlZml4PXs8VXNlck91dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn0gXHJcbiAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIFxyXG4gICAgICB2YWx1ZT17bmlja25hbWV9IFxyXG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2VOaWNrbmFtZX1cclxuICAgICAgcmVxdWlyZWRcclxuICAgICAgLz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPEZvcm0uSXRlbVxyXG4gICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgLz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgIDxGb3JtLkl0ZW0+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQtY2hlY2snPuu5hOuwgOuyiO2YuCDssrTtgaw8L2xhYmVsPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBwcmVmaXg9ezxMb2NrT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxyXG4gICAgICAgIG5hbWU9J3Bhc3N3b3JkLWNoZWNrJ1xyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hlY2sgUGFzc3dvcmRcIlxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9IFxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgIC8+XHJcbiAgICAgICAgIHtwYXNzd29yZEVycm9yICYmIDxFcnJvck1lc3NhZ2U+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgPEZvcm0uSXRlbT5cclxuICAgIDxDaGVja2JveCBuYW1lPSd1c2VyLXRlcm0nIGNoZWNrZWQ9e3Rlcm19IG9uQ2hhbmdlPXtvbkNoYW5nZVRlcm19Pu2ajOybkOqwgOyehSDtm4Qg7JWE7J2065SU64qUIOuzgOqyvSDrtojqsIAg7ZWp64uI64ukLjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgPEVycm9yTWVzc2FnZT7slb3qtIDsl5Ag64+Z7J2Y7ZWY7IWU7JW8IO2VqeuLiOuLpC48L0Vycm9yTWVzc2FnZT59XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICA8QnV0dG9uIFxyXG4gICAgICBsb2FkaW5nPXtzaWduVXBMb2FkaW5nfSAgXHJcbiAgICAgIGh0bWxUeXBlPVwic3VibWl0XCIgXHJcbiAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tYnV0dG9uXCI+XHJcbiAgICAgICAg7ZqM7JuQ6rCA7J6FIO2VmOq4sFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgXHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICA8L0Zvcm0+XHJcbiAgPC9DYXJkPlxyXG4gIDwvQ29sPlxyXG4gIDwvT25lTXlJbmZvPlxyXG4gIDwvQXBwTGF5b3V0PlxyXG4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyJdLCJzb3VyY2VSb290IjoiIn0=