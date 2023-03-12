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
      columnNumber: 6
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIk9uZU15SW5mbyIsIlNpZ251cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVQRXJyb3IiLCJtZSIsInVzZUlucHV0Iiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwidGVybSIsInNldFRlcm0iLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiU0lHTl9VUF9SRVFVRVNUIiwiZGF0YSIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicmVwbGFjZSIsImFsZXJ0IiwicmVtZW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNUO0FBQ1E7QUFDQztBQUN2QjtBQUNPO0FBQ1Q7QUFDVjtBQUNJO0FBQ2dCO0FBRWpELElBQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxrQkFFOUI7QUFBQyxLQUZJRixZQUFZO0FBSWxCLElBQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxzS0FpQjNCO0FBQUMsTUFqQklDLFNBQVM7QUFvQmYsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQU0sR0FBUztFQUFBO0VBRW5CLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUM1QixtQkFBcURDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtJQUFBLEVBQUM7SUFBaEZDLGFBQWEsZ0JBQWJBLGFBQWE7SUFBRUMsVUFBVSxnQkFBVkEsVUFBVTtJQUFFQyxXQUFXLGdCQUFYQSxXQUFXO0lBQUVDLEVBQUUsZ0JBQUZBLEVBQUU7RUFFbkQsZ0JBQXFDQywrREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQTFDQyxRQUFRO0lBQUVDLGdCQUFnQjtFQUNqQyxpQkFBcUNGLCtEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBMUNHLFFBQVE7SUFBRUMsZ0JBQWdCO0VBQ2pDLGdCQUEwQ0Msc0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBL0NDLGFBQWE7SUFBRUMsZ0JBQWdCO0VBQ3RDLGlCQUEwQ0Ysc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBbERHLGFBQWE7SUFBRUMsZ0JBQWdCO0VBQ3RDLGlCQUFrQ0osc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBMUNLLFNBQVM7SUFBRUMsWUFBWTtFQUM5QixpQkFBd0JOLHNEQUFRLENBQUMsRUFBRSxDQUFDO0lBQTdCTyxJQUFJO0lBQUVDLE9BQU87RUFFcEIsSUFBTUMscUJBQXFCLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBQyxFQUFLO0lBQzdDVCxnQkFBZ0IsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUNoQ1QsZ0JBQWdCLENBQUNPLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUtmLFFBQVEsQ0FBQztFQUNqRCxDQUFDLEVBQUUsQ0FBQ0EsUUFBUSxDQUFDLENBQUM7RUFFZCxJQUFNZ0IsWUFBWSxHQUFHSix5REFBVyxDQUFDLFVBQUNDLENBQUMsRUFBSztJQUNwQ0gsT0FBTyxDQUFDRyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO0lBQ3pCVCxZQUFZLENBQUMsS0FBSyxDQUFDO0VBQ3ZCLENBQUMsRUFBQyxFQUFFLENBQUM7RUFFTCxJQUFNVSxRQUFRLEdBQUdOLHlEQUFXLENBQUMsWUFBTTtJQUMvQixJQUFHWixRQUFRLEtBQUtHLGFBQWEsRUFBQztNQUMxQixPQUFPRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7SUFDakM7SUFDQSxJQUFHLENBQUNHLElBQUksRUFBQztNQUNMLE9BQU9ELFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDN0I7SUFDQVcsT0FBTyxDQUFDQyxHQUFHLENBQUN0QixRQUFRLEVBQUVFLFFBQVEsQ0FBQztJQUMvQlosUUFBUSxDQUFDO01BQ0xpQyxJQUFJLEVBQUVDLCtEQUFlO01BQ3JCQyxJQUFJLEVBQUU7UUFBQ3ZCLFFBQVEsRUFBUkEsUUFBUTtRQUFFRixRQUFRLEVBQVJBO01BQVE7SUFDN0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxFQUFFLENBQUNFLFFBQVEsRUFBRUcsYUFBYSxFQUFFTSxJQUFJLENBQUMsQ0FBQztFQUduQ2UsdURBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBRzVCLEVBQUUsSUFBSUEsRUFBRSxDQUFDNkIsRUFBRSxFQUFFO01BQ1pDLGtEQUFNLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDdkI7RUFDSixDQUFDLEVBQUUsQ0FBQy9CLEVBQUUsSUFBSUEsRUFBRSxDQUFDNkIsRUFBRSxDQUFDLENBQUM7RUFFakJELHVEQUFTLENBQUMsWUFBTTtJQUNaLElBQUc5QixVQUFVLEVBQUM7TUFDVmdDLGtEQUFNLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDdkI7RUFDSixDQUFDLEVBQUUsQ0FBQ2pDLFVBQVUsQ0FBQyxDQUFDO0VBRWhCOEIsdURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBRzdCLFdBQVcsRUFBQztNQUNYaUMsS0FBSyxDQUFDakMsV0FBVyxDQUFDO0lBQ3RCO0VBQ0osQ0FBQyxFQUFFLENBQUNBLFdBQVcsQ0FBQyxDQUFDO0VBRWpCLE9BQ0UsTUFBQyw2REFBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1IsTUFBQyxTQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDUixNQUFDLHdDQUFHO0lBQUMsU0FBUyxFQUFDLE1BQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUN0QixNQUFDLGdEQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUFtQixDQUNsQixFQUVULE1BQUMseUNBQUk7SUFBQyxTQUFTLEVBQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRXZCLE1BQUMseUNBQUk7SUFDTCxJQUFJLEVBQUMsY0FBYztJQUNuQixTQUFTLEVBQUMsT0FBTztJQUNqQixhQUFhLEVBQUU7TUFBQ2tDLFFBQVEsRUFBRTtJQUFLLENBQUU7SUFDakMsUUFBUSxFQUFFWCxRQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFbkIsTUFBQyx5Q0FBSSxDQUFDLElBQUk7SUFDUixJQUFJLEVBQUMsVUFBVTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRWY7SUFBTyxPQUFPLEVBQUMsTUFBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQUFZLEVBQ2pDLE1BQUMsMENBQUs7SUFBQyxNQUFNLEVBQUUsTUFBQyw4REFBWTtNQUFDLFNBQVMsRUFBQyxxQkFBcUI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFJO0lBQ2hFLElBQUksRUFBQyxNQUFNO0lBQ1gsV0FBVyxFQUFDLFVBQVU7SUFDdEIsS0FBSyxFQUFFcEIsUUFBUztJQUNoQixRQUFRLEVBQUVDLGdCQUFpQjtJQUMzQixRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDTixDQUNRLEVBQ1osTUFBQyx5Q0FBSSxDQUFDLElBQUk7SUFDUixJQUFJLEVBQUMsVUFBVTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRWY7SUFBTyxPQUFPLEVBQUMsVUFBVTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUFhLEVBQ3RDLE1BQUMsMENBQUs7SUFDSixNQUFNLEVBQUUsTUFBQyw4REFBWTtNQUFDLFNBQVMsRUFBQyxxQkFBcUI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFJO0lBQ3pELElBQUksRUFBQyxVQUFVO0lBQ2YsV0FBVyxFQUFDLFVBQVU7SUFDdEIsS0FBSyxFQUFFQyxRQUFTO0lBQ2hCLElBQUksRUFBQyxVQUFVO0lBQ2YsUUFBUSxFQUFFQyxnQkFBaUI7SUFDM0IsUUFBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQ1IsQ0FDUSxFQUVaLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDVjtJQUFPLE9BQU8sRUFBQyxnQkFBZ0I7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSwyQ0FBZ0IsRUFDN0MsTUFBQywwQ0FBSztJQUNKLE1BQU0sRUFBRSxNQUFDLDhEQUFZO01BQUMsU0FBUyxFQUFDLHFCQUFxQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUk7SUFDekQsSUFBSSxFQUFDLGdCQUFnQjtJQUNyQixXQUFXLEVBQUMsZ0JBQWdCO0lBQzVCLElBQUksRUFBQyxVQUFVO0lBQ2YsS0FBSyxFQUFFRSxhQUFjO0lBQ3JCLFFBQVEsRUFBRVEscUJBQXNCO0lBQ2hDLFFBQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUNSLEVBQ0VOLGFBQWEsSUFBSSxNQUFDLFlBQVk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx1RkFBZ0MsQ0FDeEQsRUFFWixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1YsTUFBQyw2Q0FBUTtJQUFDLElBQUksRUFBQyxXQUFXO0lBQUMsT0FBTyxFQUFFSSxJQUFLO0lBQUMsUUFBUSxFQUFFTyxZQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsNEdBQWtDLEVBQzFGVCxTQUFTLElBQUksTUFBQyxZQUFZO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsMkVBQThCLENBQ3JELEVBRVosTUFBQyx5Q0FBSSxDQUFDLElBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNSLE1BQUMsMkNBQU07SUFDUCxPQUFPLEVBQUVkLGFBQWM7SUFDdkIsUUFBUSxFQUFDLFFBQVE7SUFDakIsU0FBUyxFQUFDLG1CQUFtQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDJDQUVwQixDQUVDLENBQ1AsQ0FDQSxDQUNELENBQ00sQ0FDQTtBQUVkLENBQUM7QUFBQyxHQXBJSU4sTUFBTTtFQUFBLFFBRU9FLHVEQUFXLEVBQzJCQyx1REFBVyxFQUU3Qk8sdURBQVEsRUFDUkEsdURBQVE7QUFBQTtBQUFBLE1BTnpDVixNQUFNO0FBc0lHQSxxRUFBTSxFQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmFmZTRlYzFlOTQ4ODM2YmNjMTQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMb2NrT3V0bGluZWQsIFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDaGVja2JveCwgQ29sLCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtTSUdOX1VQX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICAgIGNvbG9yOiByZWQ7XHJcbmA7XHJcblxyXG5jb25zdCBPbmVNeUluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIC5jYXJkMXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICB9XHJcbiAgLmZvcm0xe1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0tYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5jb2wxe1xyXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7c2lnblVwTG9hZGluZywgc2lnblVwRG9uZSwgc2lnblVQRXJyb3IsIG1lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZXJtRXJyb3IsIHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgc2V0UGFzc3dvcmRFcnJvcihlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmQpO1xyXG4gIH0sIFtwYXNzd29yZF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRlcm0gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICBzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICBzZXRUZXJtRXJyb3IoZmFsc2UpO1xyXG4gIH0sW10pOyAgICBcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGlmKHBhc3N3b3JkICE9PSBwYXNzd29yZENoZWNrKXtcclxuICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCF0ZXJtKXtcclxuICAgICAgICAgIHJldHVybiBzZXRUZXJtRXJyb3IodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cobmlja25hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgICAgICAgZGF0YToge3Bhc3N3b3JkLCBuaWNrbmFtZX1cclxuICAgICAgfSk7XHJcbiAgfSwgW3Bhc3N3b3JkLCBwYXNzd29yZENoZWNrLCB0ZXJtXSk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYobWUgJiYgbWUuaWQpIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpOyBcclxuICAgIH1cclxufSwgW21lICYmIG1lLmlkXSk7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoc2lnblVwRG9uZSl7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgIH1cclxufSwgW3NpZ25VcERvbmVdKTtcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihzaWduVVBFcnJvcil7XHJcbiAgICAgICAgYWxlcnQoc2lnblVQRXJyb3IpO1xyXG4gICAgfVxyXG59LCBbc2lnblVQRXJyb3JdKTtcclxuXHJcbnJldHVybihcclxuICA8QXBwTGF5b3V0PlxyXG4gICAgPE9uZU15SW5mbz5cclxuICAgICAgPENvbCBjbGFzc05hbWU9XCJjb2wxXCI+XHJcbiAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT7tmozsm5DqsIDsnoU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZDFcIj5cclxuICAgIFxyXG4gICAgPEZvcm1cclxuICAgIG5hbWU9XCJub3JtYWxfbG9naW5cIlxyXG4gICAgY2xhc3NOYW1lPVwiZm9ybTFcIlxyXG4gICAgaW5pdGlhbFZhbHVlcz17e3JlbWVtYmVyOiB0cnVlLH19XHJcbiAgICBvbkZpbmlzaD17b25TdWJtaXR9XHJcbiAgPlxyXG4gICAgPEZvcm0uSXRlbVxyXG4gICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+64uJ64Sk7J6EPC9sYWJlbD5cclxuICAgICAgPElucHV0IHByZWZpeD17PFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59IFxyXG4gICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBcclxuICAgICAgdmFsdWU9e25pY2tuYW1lfSBcclxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDxGb3JtLkl0ZW1cclxuICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgID5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBwcmVmaXg9ezxMb2NrT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxyXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICA8Rm9ybS5JdGVtPlxyXG4gICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkLWNoZWNrJz7ruYTrsIDrsojtmLgg7LK07YGsPC9sYWJlbD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICBuYW1lPSdwYXNzd29yZC1jaGVjaydcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNoZWNrIFBhc3N3b3JkXCJcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZENoZWNrfSBcclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfVxyXG4gICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAvPlxyXG4gICAgICAgICB7cGFzc3dvcmRFcnJvciAmJiA8RXJyb3JNZXNzYWdlPuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgIDxGb3JtLkl0ZW0+XHJcbiAgICA8Q2hlY2tib3ggbmFtZT0ndXNlci10ZXJtJyBjaGVja2VkPXt0ZXJtfSBvbkNoYW5nZT17b25DaGFuZ2VUZXJtfT7tmozsm5DqsIDsnoUg7ZuEIOyVhOydtOuUlOuKlCDrs4Dqsr0g67aI6rCAIO2VqeuLiOuLpC48L0NoZWNrYm94PlxyXG4gICAgICAgICAgICB7dGVybUVycm9yICYmIDxFcnJvck1lc3NhZ2U+7JW96rSA7JeQIOuPmeydmO2VmOyFlOyVvCDtlanri4jri6QuPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgPEZvcm0uSXRlbT5cclxuICAgICAgPEJ1dHRvbiBcclxuICAgICAgbG9hZGluZz17c2lnblVwTG9hZGluZ30gIFxyXG4gICAgICBodG1sVHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWJ1dHRvblwiPlxyXG4gICAgICAgIO2ajOybkOqwgOyehSDtlZjquLBcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIFxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcbiAgPC9Gb3JtPlxyXG4gIDwvQ2FyZD5cclxuICA8L0NvbD5cclxuICA8L09uZU15SW5mbz5cclxuICA8L0FwcExheW91dD5cclxuKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwic291cmNlUm9vdCI6IiJ9