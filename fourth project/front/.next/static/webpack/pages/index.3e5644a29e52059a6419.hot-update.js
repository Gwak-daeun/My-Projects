webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/post/allPosts.js":
/*!********************************!*\
  !*** ./pages/post/allPosts.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Documents\\GitHub\\My-Projects\\fourth project\\front\\pages\\post\\allPosts.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var OneAllPosts = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "allPosts__OneAllPosts",
  componentId: "sc-iknx75-0"
})([".card1{width:170px;}.img1{height:250px;width:100%;}"]);
_c = OneAllPosts;
var AllPosts = function AllPosts() {
  _s();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me;
  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state.post;
    }),
    mainPosts = _useSelector2.mainPosts,
    hasMorePosts = _useSelector2.hasMorePosts,
    loadPostsLoading = _useSelector2.loadPostsLoading,
    retweetError = _useSelector2.retweetError;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!(me && me.id)) {
      alert("로그인 후 이용 가능합니다.");
      Router.push('/');
    }
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;
          var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"],
            lastId: lastId
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading, me && me.id]);
  console.log("메인포스트: ", mainPosts);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx(OneAllPosts, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
    grid: {
      gutter: 50,
      column: 4
    },
    dataSource: mainPosts,
    renderItem: function renderItem(items) {
      var _items$Images$;
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        className: "card1",
        title: __jsx("a", {
          href: "http://localhost:3000/post/".concat(items.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 32
          }
        }, items.lookName),
        cover: __jsx("a", {
          href: "http://localhost:3000/post/".concat(items.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 32
          }
        }, __jsx("img", {
          className: "img1",
          alt: "example",
          src: "http://localhost:3065/".concat(items === null || items === void 0 ? void 0 : (_items$Images$ = items.Images[0]) === null || _items$Images$ === void 0 ? void 0 : _items$Images$.src),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 84
          }
        })),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })));
};
_s(AllPosts, "7lElMsInVFF09wlxMISbEKb37Ic=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});
_c2 = AllPosts;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (AllPosts);
var _c, _c2;
$RefreshReg$(_c, "OneAllPosts");
$RefreshReg$(_c2, "AllPosts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9hbGxQb3N0cy5qcyJdLCJuYW1lcyI6WyJPbmVBbGxQb3N0cyIsInN0eWxlZCIsImRpdiIsIkFsbFBvc3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInJldHdlZXRFcnJvciIsInVzZUVmZmVjdCIsImlkIiwiYWxlcnQiLCJSb3V0ZXIiLCJwdXNoIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJsZW5ndGgiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiZ3V0dGVyIiwiY29sdW1uIiwiaXRlbXMiLCJsb29rTmFtZSIsIkltYWdlcyIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFFTztBQUNjO0FBRUU7QUFFTjtBQUNaO0FBRXZDLElBQU1BLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBRztFQUFBO0VBQUE7QUFBQSwyREFXN0I7QUFBQyxLQVhJRixXQUFXO0FBYWpCLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFRLEdBQVM7RUFBQTtFQUVuQixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsbUJBQWFDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtJQUFBLEVBQUM7SUFBeENDLEVBQUUsZ0JBQUZBLEVBQUU7RUFFVCxvQkFBa0VILCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FB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QUFXO0FBQUE7QUFBQSxNQUwzRUgsUUFBUTtBQUFBO0FBeUVDQSx1RUFBUSxFQUFDO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNlNTY0NGEyOWU1MjA1OWE2NDE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IE9uZUFsbFBvc3RzID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgICAuY2FyZDF7XHJcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWcxe1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG5gO1xyXG5cclxuY29uc3QgQWxsUG9zdHMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge21lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgY29uc3Qge21haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nLCByZXR3ZWV0RXJyb3J9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi66Gc6re47J24IO2bhCDsnbTsmqkg6rCA64ql7ZWp64uI64ukLlwiKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKXtcclxuICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCl7XHJcbiAgICAgICAgICAgICAgICBpZihoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0xXT8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgbWUgJiYgbWUuaWRdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIuuplOyduO2PrOyKpO2KuDogXCIsIG1haW5Qb3N0cyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPE9uZUFsbFBvc3RzPlxyXG4gICAgICAgICAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgICAgICBncmlkPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IDRcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXttYWluUG9zdHN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbXMpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0LyR7aXRlbXMuaWR9YH0gPntpdGVtcy5sb29rTmFtZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9ezxhIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdC8ke2l0ZW1zLmlkfWB9ID48aW1nIGNsYXNzTmFtZT1cImltZzFcIiBhbHQ9XCJleGFtcGxlXCIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aXRlbXM/LkltYWdlc1swXT8uc3JjfWB9IC8+PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvT25lQWxsUG9zdHM+XHJcbiAgICAgICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICAgICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMoY29udGV4dCkgPT4geyBcclxuICAgIFxyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJzsgXHJcbiAgICBpZihjb250ZXh0LnJlcSAmJiBjb29raWUpeyBcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG5cclxuICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbFBvc3RzOyJdLCJzb3VyY2VSb290IjoiIn0=