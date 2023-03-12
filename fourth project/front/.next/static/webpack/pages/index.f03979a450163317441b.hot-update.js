webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _this = undefined,
  _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\pages\\login.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var OneLogin = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "login__OneLogin",
  componentId: "sc-xi36ep-0"
})([".card1{width:60%;margin:auto;margin-top:300px;margin-bottom:300px;}.login-form{width:50%;margin:auto;padding-top:30px;}.login-form-button{background-color:black;color:white;}.a1{color:black;}.col1{text-align :center;}"]);
_c = OneLogin;
var Login = function Login() {
  _s();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
      return state.user;
    }),
    loginLoading = _useSelector.loginLoading,
    logInError = _useSelector.logInError,
    logInDone = _useSelector.logInDone;
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    nickname = _useInput2[0],
    onChangeNickname = _useInput2[1];
  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
    _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
    password = _useInput4[0],
    onChangePassword = _useInput4[1];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (logInError) {
      alert(logInError);
    }
    if (logInDone) {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.replace('/');
    }
  }, [logInError, logInDone]);

  // const style = useMemo(() => ({marginTop: 10}), []);

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log(nickname, password);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_6__["loginRequestAction"])({
      nickname: nickname,
      password: password
    }));
  }, [nickname, password]);
  return __jsx(OneLogin, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "card1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Log in"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "normal_login",
    className: "login-form",
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: nickname,
    onChange: onChangeNickname,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
      className: "site-form-item-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 75
      }
    }),
    placeholder: "Username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LockOutlined"], {
      className: "site-form-item-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    }),
    type: "password",
    value: password,
    onChange: onChangePassword,
    placeholder: "Password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    loading: loginLoading,
    htmlType: "submit",
    className: "login-form-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "\uB85C\uADF8\uC778"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }), "Or", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }), __jsx("a", {
    href: "./signup",
    className: "a1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 49
    }
  }, "\uD68C\uC6D0\uAC00\uC785 \uD558\uB7EC \uAC00\uAE30")))))));
};
_s(Login, "goBsilF+Knutv3xryEE4Lqj4pO4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});
_c2 = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);
var _c, _c2;
$RefreshReg$(_c, "OneLogin");
$RefreshReg$(_c2, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiT25lTG9naW4iLCJzdHlsZWQiLCJkaXYiLCJMb2dpbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImxvZ2luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJsb2dJbkRvbmUiLCJ1c2VJbnB1dCIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInVzZUVmZmVjdCIsImFsZXJ0IiwiUm91dGVyIiwicmVwbGFjZSIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImxvZ2luUmVxdWVzdEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ1M7QUFDQztBQUNUO0FBQ2Q7QUFDYTtBQUNuQjtBQUNJO0FBRXZDLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSxpT0F3QjFCO0FBQUMsS0F4QklGLFFBQVE7QUEwQmQsSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQUssR0FBUztFQUFBO0VBRWxCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUM5QixtQkFBOENDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtJQUFBLEVBQUM7SUFBekVDLFlBQVksZ0JBQVpBLFlBQVk7SUFBRUMsVUFBVSxnQkFBVkEsVUFBVTtJQUFFQyxTQUFTLGdCQUFUQSxTQUFTO0VBQzFDLGdCQUFxQ0MsK0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUExQ0MsUUFBUTtJQUFFQyxnQkFBZ0I7RUFDakMsaUJBQXFDRiwrREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQTFDRyxRQUFRO0lBQUVDLGdCQUFnQjtFQUVqQ0MsdURBQVMsQ0FB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RCxDQUNELENBQ0U7QUFHakIsQ0FBQztBQUFBLEdBcEVLTixLQUFLO0VBQUEsUUFFUUUsdURBQVcsRUFDa0JDLHVEQUFXLEVBQ3BCTSx1REFBUSxFQUNSQSx1REFBUTtBQUFBO0FBQUEsTUFMekNULEtBQUs7QUFzRUlBLG9FQUFLLEVBQUM7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjAzOTc5YTQ1MDE2MzMxNzQ0MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExvY2tPdXRsaW5lZCwgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENoZWNrYm94LCBGb3JtLCBJbnB1dCwgQ29sIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgIFJvdXRlciAgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBPbmVMb2dpbiA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIC5jYXJkMXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwMHB4O1xyXG4gIH1cclxuICAubG9naW4tZm9ybXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0tYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5hMXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLmNvbDF7XHJcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gIH1cclxuXHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHtsb2dpbkxvYWRpbmcsIGxvZ0luRXJyb3IsIGxvZ0luRG9uZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYobG9nSW5FcnJvcil7XHJcbiAgICAgICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBpZihsb2dJbkRvbmUpe1xyXG4gICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgIH1cclxuICB9LCBbbG9nSW5FcnJvciwgbG9nSW5Eb25lXSk7XHJcblxyXG4gIC8vIGNvbnN0IHN0eWxlID0gdXNlTWVtbygoKSA9PiAoe21hcmdpblRvcDogMTB9KSwgW10pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG5pY2tuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbih7bmlja25hbWUsIHBhc3N3b3JkfSkpO1xyXG4gICAgIFxyXG4gIH0sIFtuaWNrbmFtZSwgcGFzc3dvcmRdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8T25lTG9naW4+XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZDFcIj5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sMVwiPlxyXG4gICAgICAgICAgPGgxID5Mb2cgaW48L2gxPlxyXG4gICAgICAgICAgPEZvcm1cclxuICAgICAgICAgIG5hbWU9XCJub3JtYWxfbG9naW5cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiXHJcbiAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRGb3JtfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17bmlja25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfSBwcmVmaXg9ezxVc2VyT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fSBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBwcmVmaXg9ezxMb2NrT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtsb2dpbkxvYWRpbmd9IGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIE9yIFxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIuL3NpZ251cFwiIGNsYXNzTmFtZT1cImExXCI+PGgzPu2ajOybkOqwgOyehSDtlZjrn6wg6rCA6riwPC9oMz48L2E+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L09uZUxvZ2luPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=