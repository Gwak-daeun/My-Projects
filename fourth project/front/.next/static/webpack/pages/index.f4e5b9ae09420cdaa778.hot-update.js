webpackHotUpdate_N_E("pages/index",{

/***/ "./components/followings.js":
/*!**********************************!*\
  !*** ./components/followings.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Desktop\\fashionary\\front\\components\\followings.js",
  _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var One = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "followings__One",
  componentId: "sc-zjx99m-0"
})([".icons{font-size:15px;}.card1{width:360px;margin-left:30px;height:215px;}.img1{width:100%;}.card2{width:110px;}.a1{margin-left:30px;}"]);
_c = One;
var Followings = function Followings() {
  _s();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    isModalOpen = _useState[0],
    setIsModalOpen = _useState[1];
  var referModal = function referModal() {
    setIsModalOpen(true);
  };
  var handleCancel = function handleCancel() {
    setIsModalOpen(false);
  };
  var IfFollowing = function IfFollowing() {
    if (me.Followings[0] !== undefined) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "icons",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 18
        }
      }), " ", me.Followings[0].nickname);
    }
    if (me.Followings[1] !== undefined) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 14
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "icons",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 18
        }
      }), me.Followings[1].nickname);
    }
    if (me.Followings[2] !== undefined) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 14
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSquare"],
        className: "icons",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 18
        }
      }), me.Followings[2].nickname);
    } else {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Empty"], {
        description: __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 19
          }
        }, "\uC544\uC9C1 \uD314\uB85C\uC789\uC774 \uC5C6\uC5B4\uC694."),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }));
    }
  };
  var originalImage = "https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg";
  return __jsx("div", {
    className: "site-card-border-less-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(One, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: "Followings",
    className: "card1",
    extra: __jsx("a", {
      onClick: referModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 18
      }
    }, "More"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(IfFollowing, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: me.nickname + " 의 팔로잉 목록",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
    grid: {
      gutter: 50,
      column: 3
    },
    dataSource: me.Followings,
    renderItem: function renderItem(items) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }
      }, __jsx(One, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 19
        }
      }, __jsx("a", {
        href: "http://localhost:3000/user/".concat(items.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 19
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        size: 100,
        src: items.Image.src === originalImage ? originalImage : "http://localhost:3065/".concat(items.Image.src),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }
      })), __jsx("a", {
        className: "a1",
        href: "http://localhost:3000/user/".concat(items.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 19
        }
      }, items.nickname)));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }))));
};
_s(Followings, "h3CisytTkK80Z+DB1zyNViCM6+I=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});
_c2 = Followings;
/* harmony default export */ __webpack_exports__["default"] = (Followings);
var _c, _c2;
$RefreshReg$(_c, "One");
$RefreshReg$(_c2, "Followings");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb2xsb3dpbmdzLmpzIl0sIm5hbWVzIjpbIk9uZSIsInN0eWxlZCIsImRpdiIsIkZvbGxvd2luZ3MiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwicmVmZXJNb2RhbCIsImhhbmRsZUNhbmNlbCIsIklmRm9sbG93aW5nIiwidW5kZWZpbmVkIiwiZmFTcXVhcmUiLCJuaWNrbmFtZSIsIm9yaWdpbmFsSW1hZ2UiLCJndXR0ZXIiLCJjb2x1bW4iLCJpdGVtcyIsImlkIiwiSW1hZ2UiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ0o7QUFDTDtBQUN2QjtBQUNTO0FBQ0g7QUFFdkMsSUFBTUEsR0FBRyxHQUFHQyx5REFBTSxDQUFDQyxHQUFHO0VBQUE7RUFBQTtBQUFBLDZJQWtCckI7QUFBQyxLQWxCSUYsR0FBRztBQW9CVCxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVSxHQUFTO0VBQUE7RUFFdkIsbUJBQWFDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtJQUFBLEVBQUM7SUFBeENDLEVBQUUsZ0JBQUZBLEVBQUU7RUFFVCxnQkFBc0NDLHNEQUFRLENBQUMsS0FBSyxDQUFDO0lBQTlDQyxXQUFXO0lBQUVDLGNBQWM7RUFHbEMsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztJQUN2QkQsY0FBYyxDQUFDLElBQUksQ0FBQztFQUN0QixDQUFDO0VBRUQsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVksR0FBUztJQUN6QkYsY0FBYyxDQUFDLEtBQUssQ0FBQztFQUN2QixDQUFDO0VBRUQsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQVcsR0FBUztJQUV4QixJQUFHTixFQUFFLENBQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMs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QUMsMkNBQU07UUFBQyxJQUFJLEVBQUUsR0FBSTtRQUFDLEdBQUcsRUFBRUQsS0FBSyxDQUFDRSxLQUFLLENBQUNDLEdBQUcsS0FBS04sYUFBYSxHQUFHQSxhQUFhLG1DQUE0QkcsS0FBSyxDQUFDRSxLQUFLLENBQUNDLEdBQUcsQ0FBRztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBQUcsQ0FDeEgsRUFDSjtRQUFHLFNBQVMsRUFBQyxJQUFJO1FBQUMsSUFBSSx1Q0FBZ0NILEtBQUssQ0FBQ0MsRUFBRSxDQUFHO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FBR0QsS0FBSyxDQUFDSixRQUFRLENBQUssQ0FDakYsQ0FDSTtJQUFBLENBQ2Q7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUdLLENBRUgsQ0FDRixDQUNGO0FBR1osQ0FBQztBQUFDLEdBdEZJYixVQUFVO0VBQUEsUUFFREMsdURBQVc7QUFBQTtBQUFBLE1BRnBCRCxVQUFVO0FBd0ZEQSx5RUFBVSxFQUFDO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY0ZTViOWFlMDk0MjBjZGFhNzc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYVNxdWFyZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IEF2YXRhciwgQ2FyZCwgRW1wdHksIExpc3QsIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBPbmUgPSBzdHlsZWQuZGl2YFxyXG4gIC5pY29uc3tcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gIH1cclxuICAuY2FyZDF7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICBoZWlnaHQ6IDIxNXB4O1xyXG4gIH1cclxuICAuaW1nMXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY2FyZDJ7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgfVxyXG4gIC5hMXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEZvbGxvd2luZ3MgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0IHJlZmVyTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgSWZGb2xsb3dpbmcgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYobWUuRm9sbG93aW5nc1swXSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgcmV0dXJuIDxsaT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3F1YXJlfSBjbGFzc05hbWU9XCJpY29uc1wiIC8+IHttZS5Gb2xsb3dpbmdzWzBdLm5pY2tuYW1lfTwvbGk+O1xyXG4gICAgfVxyXG4gICAgaWYobWUuRm9sbG93aW5nc1sxXSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgcmV0dXJuIDxsaT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3F1YXJlfSBjbGFzc05hbWU9XCJpY29uc1wiIC8+e21lLkZvbGxvd2luZ3NbMV0ubmlja25hbWV9PC9saT47XHJcbiAgICB9XHJcbiAgICBpZihtZS5Gb2xsb3dpbmdzWzJdICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm4gPGxpPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcXVhcmV9IGNsYXNzTmFtZT1cImljb25zXCIgLz57bWUuRm9sbG93aW5nc1syXS5uaWNrbmFtZX08L2xpPjtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxFbXB0eSBcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAg7JWE7KeBIO2MlOuhnOyeieydtCDsl4bslrTsmpQuXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5jb25zdCBvcmlnaW5hbEltYWdlID0gYGh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwMi8zMTgvMjcxL29yaWdpbmFsL3VzZXItcHJvZmlsZS1pY29uLWZyZWUtdmVjdG9yLmpwZ2A7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1jYXJkLWJvcmRlci1sZXNzLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxPbmU+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIHRpdGxlPVwiRm9sbG93aW5nc1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2NhcmQxJ1xyXG4gICAgICAgICAgZXh0cmE9ezxhIG9uQ2xpY2s9e3JlZmVyTW9kYWx9Pk1vcmU8L2E+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJZkZvbGxvd2luZyAvPlxyXG5cclxuICAgIDwvQ2FyZD5cclxuICAgIDxNb2RhbCB0aXRsZT17bWUubmlja25hbWUgKyBcIiDsnZgg7YyU66Gc7J6JIOuqqeuhnVwifSBmb290ZXI9e251bGx9IG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9IG9wZW49e2lzTW9kYWxPcGVufT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICBncmlkPXt7XHJcbiAgICAgICAgICAgICAgICBndXR0ZXI6IDUwLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uOiAzXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZT17bWUuRm9sbG93aW5nc31cclxuICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbXMpID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxPbmU+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Q2FyZCBcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyLyR7aXRlbXMuaWR9YH0gPntpdGVtcy5uaWNrbmFtZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyPXs8YSBocmVmPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXIvJHtpdGVtcy5pZH1gfSA+PE9uZT48aW1nIGNsYXNzTmFtZT0naW1nMScgYWx0PVwiZXhhbXBsZVwiIHNyYz17aXRlbXMuSW1hZ2Uuc3JjID09PSBvcmlnaW5hbEltYWdlID8gb3JpZ2luYWxJbWFnZSA6IGBodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpdGVtcy5JbWFnZS5zcmN9YH0gLz48L09uZT48L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZDInXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyLyR7aXRlbXMuaWR9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17MTAwfSBzcmM9e2l0ZW1zLkltYWdlLnNyYyA9PT0gb3JpZ2luYWxJbWFnZSA/IG9yaWdpbmFsSW1hZ2UgOiBgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aXRlbXMuSW1hZ2Uuc3JjfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdhMScgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyLyR7aXRlbXMuaWR9YH0gPntpdGVtcy5uaWNrbmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvT25lPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcblxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9PbmU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dpbmdzOyJdLCJzb3VyY2VSb290IjoiIn0=