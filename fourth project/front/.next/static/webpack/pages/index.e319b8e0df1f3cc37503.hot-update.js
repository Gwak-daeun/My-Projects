webpackHotUpdate_N_E("pages/index",{

/***/ "./components/followers.js":
/*!*********************************!*\
  !*** ./components/followers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Desktop\\fashionary\\front\\components\\followers.js",
  _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Li = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "followers__Li",
  componentId: "sc-iwcsl6-0"
})([".ficon{font-size:15px;}"]);
_c = Li;
var OneFollwer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "followers__OneFollwer",
  componentId: "sc-iwcsl6-1"
})([".card1{width:360px;height:215px;}.card2{width:110px;}.img1{width:100%;}.a1{margin-left:30px;}"]);
_c2 = OneFollwer;
var Followers = function Followers() {
  _s();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    isModalOpen = _useState[0],
    setIsModalOpen = _useState[1];
  console.log("팔로워리스트", me);
  var referModal = function referModal() {
    setIsModalOpen(true);
  };
  var handleCancel = function handleCancel() {
    setIsModalOpen(false);
  };
  var IfFollower = function IfFollower() {
    if (me.Followers[0] !== undefined) {
      return __jsx(Li, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "ficon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 20
        }
      }), " ", me.Followers[0].nickname);
    }
    if (me.Followers[1] !== undefined) {
      return __jsx(Li, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "ficon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 20
        }
      }), me.Followers[1].nickname);
    }
    if (me.Followers[2] !== undefined) {
      return __jsx(Li, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 16
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "ficon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 20
        }
      }), me.Followers[2].nickname);
    } else {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Empty"], {
        description: __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 23
          }
        }, "\uC544\uC9C1 \uD314\uB85C\uC6CC\uAC00 \uC5C6\uC5B4\uC694."),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }));
    }
  };
  var originalImage = "https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg";
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(OneFollwer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: "Followers",
    extra: __jsx("a", {
      onClick: referModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 18
      }
    }, "More"),
    className: "card1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(IfFollower, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: me.nickname + " 의 팔로워 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: me.Followers,
    renderItem: function renderItem(items) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      }, __jsx(OneFollwer, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 19
        }
      }, __jsx("a", {
        href: "http://localhost:3000/user/".concat(items.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        size: 100,
        src: items.Image.src === originalImage ? originalImage : "http://localhost:3065/".concat(items.Image.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }
      })), __jsx("a", {
        className: "a1",
        href: "http://localhost:3000/user/".concat(items.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 19
        }
      }, items.nickname)));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }))));
};

// {me.Followers.map((follower) => (
//   <ul key={follower.id}>
//     <p><FontAwesomeIcon icon={faSquare} style={{fontSize:15, color: 'pink'}} /> 
//     <img style={{width: 60}} src={following.Image.src === originalImage ? originalImage : `http://localhost:3065/${follower.Image.src}`} />
//     </p>
//   </ul>
//   ))}
_s(Followers, "h3CisytTkK80Z+DB1zyNViCM6+I=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});
_c3 = Followers;
/* harmony default export */ __webpack_exports__["default"] = (Followers);
var _c, _c2, _c3;
$RefreshReg$(_c, "Li");
$RefreshReg$(_c2, "OneFollwer");
$RefreshReg$(_c3, "Followers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb2xsb3dlcnMuanMiXSwibmFtZXMiOlsiTGkiLCJzdHlsZWQiLCJsaSIsIk9uZUZvbGx3ZXIiLCJkaXYiLCJGb2xsb3dlcnMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiY29uc29sZSIsImxvZyIsInJlZmVyTW9kYWwiLCJoYW5kbGVDYW5jZWwiLCJJZkZvbGxvd2VyIiwidW5kZWZpbmVkIiwiZmFTcXVhcmUiLCJuaWNrbmFtZSIsIm9yaWdpbmFsSW1hZ2UiLCJndXR0ZXIiLCJjb2x1bW4iLCJpdGVtcyIsImlkIiwiSW1hZ2UiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ0Y7QUFDUDtBQUN2QjtBQUNTO0FBQ0g7QUFFdkMsSUFBTUEsRUFBRSxHQUFHQyx5REFBTSxDQUFDQyxFQUFFO0VBQUE7RUFBQTtBQUFBLCtCQUluQjtBQUFDLEtBSklGLEVBQUU7QUFNUixJQUFNRyxVQUFVLEdBQUdGLHlEQUFNLENBQUNHLEdBQUc7RUFBQTtFQUFBO0FBQUEscUdBYzVCO0FBQUMsTUFkSUQsVUFBVTtBQWdCaEIsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVMsR0FBUztFQUFBO0VBRXRCLG1CQUFhQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQXhDQyxFQUFFLGdCQUFGQSxFQUFFO0VBRVQsZ0JBQXNDQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUE5Q0MsV0FBVztJQUFFQyxjQUFjO0VBRWxDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVMLEVBQUUsQ0FBQztFQUV6QixJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBVSxHQUFTO0lBQ3ZCSCxjQUFjLENBQUMsSUFBSSxDQUFDO0VBQ3RCLENBQUM7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VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ1IsTUFBQyxVQUFVO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FPVDtRQUFHLElBQUksdUNBQWdDQSxLQUFLLENBQUNDLEVBQUUsQ0FBRztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ2xELE1BQUMsMkNBQU07UUFBQyxJQUFJLEVBQUUsR0FBSTtRQUFDLEdBQUcsRUFBRUQsS0FBSyxDQUFDRSxLQUFLLENBQUNDLEdBQUcsS0FBS04sYUFBYSxHQUFHQSxhQUFhLG1DQUE0QkcsS0FBSyxDQUFDRSxLQUFLLENBQUNDLEdBQUcsQ0FBRztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBQUcsQ0FDeEgsRUFDSjtRQUFHLFNBQVMsRUFBQyxJQUFJO1FBQUMsSUFBSSx1Q0FBZ0NILEtBQUssQ0FBQ0MsRUFBRSxDQUFHO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FBR0QsS0FBSyxDQUFDSixRQUFRLENBQUssQ0FDMUUsQ0FDSDtJQUFBLENBQ2Q7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUVHLENBQ0QsQ0FDSyxDQUNUO0FBR1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLEdBaEdNZixTQUFTO0VBQUEsUUFFQUMsdURBQVc7QUFBQTtBQUFBLE1BRnBCRCxTQUFTO0FBa0dBQSx3RUFBUyxFQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTMxOWI4ZTBkZjFmM2NjMzc1MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhU3F1YXJlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIEVtcHR5LCBMaXN0LCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTGkgPSBzdHlsZWQubGlgXHJcbiAgLmZpY29ue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE9uZUZvbGx3ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5jYXJkMXtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGhlaWdodDogMjE1cHg7XHJcbiAgfVxyXG4gIC5jYXJkMntcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICB9XHJcbiAgLmltZzF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmExe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRm9sbG93ZXJzID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwi7YyU66Gc7JuM66as7Iqk7Yq4XCIsIG1lKTtcclxuXHJcbiAgY29uc3QgcmVmZXJNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBJZkZvbGxvd2VyID0gKCkgPT4ge1xyXG5cclxuICAgICAgaWYobWUuRm9sbG93ZXJzWzBdICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybiA8TGk+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNxdWFyZX0gY2xhc3NOYW1lPSdmaWNvbicgLz4ge21lLkZvbGxvd2Vyc1swXS5uaWNrbmFtZX08L0xpPjtcclxuICAgICAgfVxyXG4gICAgICBpZihtZS5Gb2xsb3dlcnNbMV0gIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgcmV0dXJuIDxMaT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3F1YXJlfSBjbGFzc05hbWU9J2ZpY29uJyAvPnttZS5Gb2xsb3dlcnNbMV0ubmlja25hbWV9PC9MaT47XHJcbiAgICAgIH1cclxuICAgICAgaWYobWUuRm9sbG93ZXJzWzJdICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybiA8TGk+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNxdWFyZX0gY2xhc3NOYW1lPSdmaWNvbicgLz57bWUuRm9sbG93ZXJzWzJdLm5pY2tuYW1lfTwvTGk+O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eSBcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7JWE7KeBIO2MlOuhnOybjOqwgCDsl4bslrTsmpQuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yaWdpbmFsSW1hZ2UgPSBgaHR0cHM6Ly9zdGF0aWMudmVjdGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvcHJldmlld3MvMDAyLzMxOC8yNzEvb3JpZ2luYWwvdXNlci1wcm9maWxlLWljb24tZnJlZS12ZWN0b3IuanBnYDtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE9uZUZvbGx3ZXI+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIHRpdGxlPVwiRm9sbG93ZXJzXCJcclxuICAgICAgICAgIGV4dHJhPXs8YSBvbkNsaWNrPXtyZWZlck1vZGFsfT5Nb3JlPC9hPn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQxXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWZGb2xsb3dlciAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8TW9kYWwgdGl0bGU9e21lLm5pY2tuYW1lICsgXCIg7J2YIO2MlOuhnOybjCDrqqnroZ1cIn0gZm9vdGVyPXtudWxsfSBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfSBvcGVuPXtpc01vZGFsT3Blbn0+XHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgZ3JpZD17e1xyXG4gICAgICAgICAgICAgICAgZ3V0dGVyOiA1MCxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogM1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZT17bWUuRm9sbG93ZXJzfVxyXG4gICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE9uZUZvbGx3ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkMidcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyLyR7aXRlbXMuaWR9YH0gPntpdGVtcy5uaWNrbmFtZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyPXs8YSBocmVmPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXIvJHtpdGVtcy5pZH1gfSA+PE9uZUZvbGx3ZXI+PGltZyBjbGFzc05hbWU9J2ltZzEnYWx0PVwiZXhhbXBsZVwiIHNyYz17aXRlbXMuSW1hZ2Uuc3JjID09PSBvcmlnaW5hbEltYWdlID8gb3JpZ2luYWxJbWFnZSA6IGBodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpdGVtcy5JbWFnZS5zcmN9YH0gLz48L09uZUZvbGx3ZXI+PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXIvJHtpdGVtcy5pZH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXsxMDB9IHNyYz17aXRlbXMuSW1hZ2Uuc3JjID09PSBvcmlnaW5hbEltYWdlID8gb3JpZ2luYWxJbWFnZSA6IGBodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpdGVtcy5JbWFnZS5zcmN9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2ExJyBocmVmPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXIvJHtpdGVtcy5pZH1gfSA+e2l0ZW1zLm5pY2tuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9PbmVGb2xsd2VyPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgIDwvTGlzdD4gXHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L09uZUZvbGx3ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG4vLyB7bWUuRm9sbG93ZXJzLm1hcCgoZm9sbG93ZXIpID0+IChcclxuLy8gICA8dWwga2V5PXtmb2xsb3dlci5pZH0+XHJcbi8vICAgICA8cD48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3F1YXJlfSBzdHlsZT17e2ZvbnRTaXplOjE1LCBjb2xvcjogJ3BpbmsnfX0gLz4gXHJcbi8vICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6IDYwfX0gc3JjPXtmb2xsb3dpbmcuSW1hZ2Uuc3JjID09PSBvcmlnaW5hbEltYWdlID8gb3JpZ2luYWxJbWFnZSA6IGBodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtmb2xsb3dlci5JbWFnZS5zcmN9YH0gLz5cclxuLy8gICAgIDwvcD5cclxuLy8gICA8L3VsPlxyXG4vLyAgICkpfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93ZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=