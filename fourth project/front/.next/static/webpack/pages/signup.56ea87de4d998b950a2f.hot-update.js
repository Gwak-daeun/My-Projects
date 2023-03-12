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
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, "\uD68C\uC6D0\uAC00\uC785")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "card1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "Sign up"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
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
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "\uB2C9\uB124\uC784"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
      className: "site-form-item-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 30
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
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {
      className: "site-form-item-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 23
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
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {
      className: "site-form-item-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 23
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
      columnNumber: 15
    }
  }), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 33
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, "\uD68C\uC6D0\uAC00\uC785 \uD6C4 \uC544\uC774\uB514\uB294 \uBCC0\uACBD \uBD88\uAC00 \uD569\uB2C8\uB2E4."), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    loading: signUpLoading,
    htmlType: "submit",
    className: "login-form-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIk9uZU15SW5mbyIsIlNpZ251cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVQRXJyb3IiLCJtZSIsInVzZUlucHV0Iiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwidGVybSIsInNldFRlcm0iLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiU0lHTl9VUF9SRVFVRVNUIiwiZGF0YSIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicmVwbGFjZSIsImFsZXJ0IiwicmVtZW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNUO0FBQ1E7QUFDQztBQUN2QjtBQUNPO0FBQ1Q7QUFDVjtBQUNJO0FBQ2dCO0FBRWpELElBQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxrQkFFOUI7QUFBQyxLQUZJRixZQUFZO0FBSWxCLElBQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxzS0FpQjNCO0FBQUMsTUFqQklDLFNBQVM7QUFvQmYsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1B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TUFBQyx5Q0FBSSxDQUFDLElBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNSLE1BQUMsNkNBQVE7SUFBQyxJQUFJLEVBQUMsV0FBVztJQUFDLE9BQU8sRUFBRUksSUFBSztJQUFDLFFBQVEsRUFBRU8sWUFBYTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDRHQUFrQyxFQUNsR1QsU0FBUyxJQUFJLE1BQUMsWUFBWTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDJFQUE4QixDQUMvQyxFQUVaLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDUixNQUFDLDJDQUFNO0lBQ1AsT0FBTyxFQUFFZCxhQUFjO0lBQ3ZCLFFBQVEsRUFBQyxRQUFRO0lBQ2pCLFNBQVMsRUFBQyxtQkFBbUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSwyQ0FFcEIsQ0FDQyxDQUNQLENBQ0YsQ0FDSCxDQUNJLENBQ0Y7QUFFZCxDQUFDO0FBQUMsR0FuSUlOLE1BQU07RUFBQSxRQUVPRSx1REFBVyxFQUMyQkMsdURBQVcsRUFFN0JPLHVEQUFRLEVBQ1JBLHVEQUFRO0FBQUE7QUFBQSxNQU56Q1YsTUFBTTtBQXFJR0EscUVBQU0sRUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC41NmVhODdkZTRkOTk4Yjk1MGEyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTG9ja091dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2hlY2tib3gsIENvbCwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7U0lHTl9VUF9SRVFVRVNUfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBjb2xvcjogcmVkO1xyXG5gO1xyXG5cclxuY29uc3QgT25lTXlJbmZvID0gc3R5bGVkLmRpdmBcclxuICAuY2FyZDF7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgfVxyXG4gIC5mb3JtMXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY29sMXtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge3NpZ25VcExvYWRpbmcsIHNpZ25VcERvbmUsIHNpZ25VUEVycm9yLCBtZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZENoZWNrID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTtcclxuICB9LCBbcGFzc3dvcmRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgc2V0VGVybShlLnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgc2V0VGVybUVycm9yKGZhbHNlKTtcclxuICB9LFtdKTsgICAgXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICBpZihwYXNzd29yZCAhPT0gcGFzc3dvcmRDaGVjayl7XHJcbiAgICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZighdGVybSl7XHJcbiAgICAgICAgICByZXR1cm4gc2V0VGVybUVycm9yKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKG5pY2tuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgICAgICAgIGRhdGE6IHtwYXNzd29yZCwgbmlja25hbWV9XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtwYXNzd29yZCwgcGFzc3dvcmRDaGVjaywgdGVybV0pO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKG1lICYmIG1lLmlkKSB7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKTsgXHJcbiAgICB9XHJcbn0sIFttZSAmJiBtZS5pZF0pO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHNpZ25VcERvbmUpe1xyXG4gICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICB9XHJcbn0sIFtzaWduVXBEb25lXSk7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoc2lnblVQRXJyb3Ipe1xyXG4gICAgICAgIGFsZXJ0KHNpZ25VUEVycm9yKTtcclxuICAgIH1cclxufSwgW3NpZ25VUEVycm9yXSk7XHJcblxyXG5yZXR1cm4oXHJcbiAgPEFwcExheW91dD5cclxuICAgIDxPbmVNeUluZm8+XHJcbiAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sMVwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT7tmozsm5DqsIDsnoU8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZDFcIj5cclxuICAgICAgICA8aDEgPlNpZ24gdXA8L2gxPlxyXG4gICAgICAgICAgPEZvcm1cclxuICAgICAgICAgIG5hbWU9XCJub3JtYWxfbG9naW5cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybTFcIlxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17e3JlbWVtYmVyOiB0cnVlLH19XHJcbiAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwcmVmaXg9ezxVc2VyT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fSBcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX0gXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkLWNoZWNrJz7ruYTrsIDrsojtmLgg7LK07YGsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBwcmVmaXg9ezxMb2NrT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxyXG4gICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkLWNoZWNrJ1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hlY2sgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9IFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cGFzc3dvcmRFcnJvciAmJiA8RXJyb3JNZXNzYWdlPuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveCBuYW1lPSd1c2VyLXRlcm0nIGNoZWNrZWQ9e3Rlcm19IG9uQ2hhbmdlPXtvbkNoYW5nZVRlcm19Pu2ajOybkOqwgOyehSDtm4Qg7JWE7J2065SU64qUIOuzgOqyvSDrtojqsIAg7ZWp64uI64ukLjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAge3Rlcm1FcnJvciAmJiA8RXJyb3JNZXNzYWdlPuyVveq0gOyXkCDrj5nsnZjtlZjshZTslbwg7ZWp64uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgbG9hZGluZz17c2lnblVwTG9hZGluZ30gIFxyXG4gICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1idXR0b25cIj5cclxuICAgICAgICAgICAgICDtmozsm5DqsIDsnoUg7ZWY6riwXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L09uZU15SW5mbz5cclxuICA8L0FwcExheW91dD5cclxuKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwic291cmNlUm9vdCI6IiJ9