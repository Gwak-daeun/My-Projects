webpackHotUpdate_N_E("pages/index",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(retweet),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(uploadImages),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(newCommentImages),
  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(updateImages),
  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(likePost),
  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(unlikePost),
  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(loadPost),
  _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(loadHashtagPosts),
  _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(loadPosts),
  _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(loadNewPosts),
  _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(addPost),
  _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(updatePost),
  _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(removePost),
  _marked14 = /*#__PURE__*/_regeneratorRuntime().mark(removeComment),
  _marked15 = /*#__PURE__*/_regeneratorRuntime().mark(addComment),
  _marked16 = /*#__PURE__*/_regeneratorRuntime().mark(checkDate),
  _marked17 = /*#__PURE__*/_regeneratorRuntime().mark(searchKeyword),
  _marked18 = /*#__PURE__*/_regeneratorRuntime().mark(newLookKeyword),
  _marked19 = /*#__PURE__*/_regeneratorRuntime().mark(watchRetweet),
  _marked20 = /*#__PURE__*/_regeneratorRuntime().mark(watchLikePost),
  _marked21 = /*#__PURE__*/_regeneratorRuntime().mark(watchUploadImages),
  _marked22 = /*#__PURE__*/_regeneratorRuntime().mark(watchNewCommentImages),
  _marked23 = /*#__PURE__*/_regeneratorRuntime().mark(watchUpdateImages),
  _marked24 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnLikePost),
  _marked25 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPosts),
  _marked26 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPost),
  _marked27 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadHashtagPosts),
  _marked28 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddPost),
  _marked29 = /*#__PURE__*/_regeneratorRuntime().mark(watchUpdatePost),
  _marked30 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemovePost),
  _marked31 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemoveComment),
  _marked32 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadNewPosts),
  _marked33 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddComment),
  _marked34 = /*#__PURE__*/_regeneratorRuntime().mark(watchCheckDate),
  _marked35 = /*#__PURE__*/_regeneratorRuntime().mark(watchSearchKeyword),
  _marked36 = /*#__PURE__*/_regeneratorRuntime().mark(watchNewLookKeyword),
  _marked37 = /*#__PURE__*/_regeneratorRuntime().mark(postSaga);




function retweetAPI(data) {
  var postId = data.get('postId');
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/post/".concat(postId, "/reference"), data);
}
function retweet(action) {
  var result;
  return _regeneratorRuntime().wrap(function retweet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);
        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
            data: result.data
          });
        case 6:
          _context.next = 13;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
            error: _context.t0.response.data
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}
function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/post/images', data);
}
function uploadImages(action) {
  var result;
  return _regeneratorRuntime().wrap(function uploadImages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
            data: result.data
          });
        case 6:
          _context2.next = 13;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
            error: _context2.t0.response.data
          });
        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}
function newCommentImages(action) {
  var result;
  return _regeneratorRuntime().wrap(function newCommentImages$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEW_COMMENT_IMAGES_SUCCESS"],
            data: result.data
          });
        case 6:
          _context3.next = 13;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEW_COMMENT_IMAGES_FAILURE"],
            error: _context3.t0.response.data
          });
        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

// function updateImagesAPI(data){
//   return axios.post('/post/images', data);
// }

function updateImages(action) {
  var result;
  return _regeneratorRuntime().wrap(function updateImages$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_UPDATE_LOOK_IMAGE_SUCCESS"],
            data: result.data
          });
        case 6:
          _context4.next = 13;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_UPDATE_LOOK_IMAGE_FAILURE"],
            error: _context4.t0.response.data
          });
        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}
function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/post/".concat(data, "/like"));
}
function likePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function likePost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);
        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
            data: result.data
          });
        case 6:
          _context5.next = 13;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
            error: _context5.t0.response.data
          });
        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}
function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/post/".concat(data, "/like"));
}
function unlikePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function unlikePost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);
        case 3:
          result = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
            data: result.data
          });
        case 6:
          _context6.next = 13;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
            error: _context6.t0.response.data
          });
        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}
function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/post/".concat(data));
}
function loadPost(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadPost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);
        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
            data: result.data
          });
        case 6:
          _context7.next = 13;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
            error: _context7.t0.response.data
          });
        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}
function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/hashtag/".concat(encodeURIComponent(data), "?lastId=").concat(lastId || 0));
} //주소에 그냥 한글,특수문자가 들어가면 에러나서 encodeURIComponent로 감싸줘야 한다.

function loadHashtagPosts(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadHashtagPosts$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
        case 3:
          result = _context8.sent;
          _context8.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
            data: result.data
          });
        case 6:
          _context8.next = 13;
          break;
        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          console.error(_context8.t0);
          _context8.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
            data: _context8.t0.response.data
          });
        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 8]]);
}
function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/posts/allLooks?lastId=".concat(lastId || 0));
}
function loadPosts(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadPosts$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId);
        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
            data: result.data
          });
        case 6:
          _context9.next = 13;
          break;
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          _context9.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
            error: _context9.t0.response.data
          });
        case 13:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 8]]);
}
function loadNewPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/posts");
}
function loadNewPosts(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadNewPosts$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadNewPostsAPI, action.data);
        case 3:
          result = _context10.sent;
          _context10.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_NEW_POSTS_SUCCESS"],
            data: result.data
          });
        case 6:
          _context10.next = 13;
          break;
        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          _context10.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_NEW_POSTS_FAILURE"],
            error: _context10.t0.response.data
          });
        case 13:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 8]]);
}
function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/post', data);
}
function addPost(action) {
  var result;
  return _regeneratorRuntime().wrap(function addPost$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
        case 3:
          result = _context11.sent;
          _context11.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
            data: result.data
          });
        case 6:
          _context11.next = 13;
          break;
        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          _context11.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
            error: _context11.t0.response.data
          });
        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 8]]);
}
function updatePostAPI(data) {
  var postId = data.get('postId');
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/post/".concat(postId), data);
}
function updatePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function updatePost$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(updatePostAPI, action.data);
        case 3:
          result = _context12.sent;
          _context12.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_POST_SUCCESS"],
            data: result.data
          });
        case 6:
          _context12.next = 13;
          break;
        case 8:
          _context12.prev = 8;
          _context12.t0 = _context12["catch"](0);
          console.error(_context12.t0);
          _context12.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_POST_FAILURE"],
            error: _context12.t0.response.data
          });
        case 13:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12, null, [[0, 8]]);
}
function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/post/".concat(data));
}
function removePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function removePost$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);
        case 3:
          result = _context13.sent;
          _context13.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
            data: result.data
          });
        case 6:
          _context13.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
            data: action.data
          });
        case 8:
          _context13.next = 15;
          break;
        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](0);
          console.error(_context13.t0);
          _context13.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
            data: _context13.t0.response.data
          });
        case 15:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13, null, [[0, 10]]);
}
function removeCommentAPI(data) {
  var commentId = data.get('commentId');
  console.log("댓글 삭제 아이디: ", commentId);
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/post/comment/".concat(commentId));
}
function updateCommentRateAPI(data) {
  var commentId = data.get('commentId');
  console.log("댓글 점수 아이디: ", commentId);
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/post/commentRate/".concat(commentId), data);
}
function removeComment(action) {
  var removeResult, updateResult;
  return _regeneratorRuntime().wrap(function removeComment$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeCommentAPI, action.data);
        case 3:
          removeResult = _context14.sent;
          _context14.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(updateCommentRateAPI, action.data);
        case 6:
          updateResult = _context14.sent;
          _context14.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_SUCCESS"],
            data: removeResult.data
          });
        case 9:
          _context14.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_COMMENT_RATE_SUCCESS"],
            data: updateResult.data
          });
        case 11:
          _context14.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
            data: action.data
          });
        case 13:
          _context14.next = 22;
          break;
        case 15:
          _context14.prev = 15;
          _context14.t0 = _context14["catch"](0);
          console.error(_context14.t0);
          _context14.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_FAILURE"],
            data: _context14.t0.response.data
          });
        case 20:
          _context14.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_COMMENT_RATE_FAILURE"],
            data: _context14.t0.response.data
          });
        case 22:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14, null, [[0, 15]]);
}
function addCommentAPI(data) {
  var postId = data.get('postId');
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/post/".concat(postId, "/comment"), data);
}
function addComment(action) {
  var result;
  return _regeneratorRuntime().wrap(function addComment$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
        case 3:
          result = _context15.sent;
          _context15.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
            data: result.data
          });
        case 6:
          _context15.next = 13;
          break;
        case 8:
          _context15.prev = 8;
          _context15.t0 = _context15["catch"](0);
          console.error(_context15.t0);
          _context15.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
            data: _context15.t0.response.data
          });
        case 13:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15, null, [[0, 8]]);
}
function checkDateAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/post/checkDate", data);
}
function checkDate(action) {
  var result;
  return _regeneratorRuntime().wrap(function checkDate$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(checkDateAPI, action.data);
        case 3:
          result = _context16.sent;
          _context16.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["CHECK_DATE_SUCCESS"],
            data: result.data
          });
        case 6:
          _context16.next = 13;
          break;
        case 8:
          _context16.prev = 8;
          _context16.t0 = _context16["catch"](0);
          console.error("날짜 확인 에러 확인", _context16.t0);
          _context16.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["CHECK_DATE_FAILURE"],
            data: _context16.t0.response.data
          });
        case 13:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16, null, [[0, 8]]);
}
function searchKeywordAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/hashtag/keywords/".concat(encodeURIComponent(data)), data);
}
function searchKeyword(action) {
  var result;
  return _regeneratorRuntime().wrap(function searchKeyword$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(searchKeywordAPI, action.data);
        case 3:
          result = _context17.sent;
          _context17.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEARCH_KEYWORD_SUCCESS"],
            data: result.data
          });
        case 6:
          _context17.next = 12;
          break;
        case 8:
          _context17.prev = 8;
          _context17.t0 = _context17["catch"](0);
          _context17.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEARCH_KEYWORD_FAILURE"],
            data: _context17.t0.response.data
          });
        case 12:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17, null, [[0, 8]]);
}
function newLookKeywordAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/hashtag/keywords/".concat(encodeURIComponent(data)), data);
}
function newLookKeyword(action) {
  var result;
  return _regeneratorRuntime().wrap(function newLookKeyword$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(newLookKeywordAPI, action.data);
        case 3:
          result = _context18.sent;
          _context18.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEWLOOK_KEYWORD_SUCCESS"],
            data: result.data
          });
        case 6:
          _context18.next = 12;
          break;
        case 8:
          _context18.prev = 8;
          _context18.t0 = _context18["catch"](0);
          _context18.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEWLOOK_KEYWORD_FAILURE"],
            data: _context18.t0.response.data
          });
        case 12:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18, null, [[0, 8]]);
}
function watchRetweet() {
  return _regeneratorRuntime().wrap(function watchRetweet$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}
function watchLikePost() {
  return _regeneratorRuntime().wrap(function watchLikePost$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}
function watchUploadImages() {
  return _regeneratorRuntime().wrap(function watchUploadImages$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}
function watchNewCommentImages() {
  return _regeneratorRuntime().wrap(function watchNewCommentImages$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEW_COMMENT_IMAGES_REQUEST"], newCommentImages);
        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}
function watchUpdateImages() {
  return _regeneratorRuntime().wrap(function watchUpdateImages$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_UPDATE_LOOK_IMAGE_REQUEST"], updateImages);
        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}
function watchUnLikePost() {
  return _regeneratorRuntime().wrap(function watchUnLikePost$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
        case 2:
        case "end":
          return _context24.stop();
      }
    }
  }, _marked24);
}
function watchLoadPosts() {
  return _regeneratorRuntime().wrap(function watchLoadPosts$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
        case 2:
        case "end":
          return _context25.stop();
      }
    }
  }, _marked25);
}
function watchLoadPost() {
  return _regeneratorRuntime().wrap(function watchLoadPost$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          _context26.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
        case 2:
        case "end":
          return _context26.stop();
      }
    }
  }, _marked26);
}

// function* watchLoadUserPosts() {
//   yield throttle(5000, LOAD_USER_POSTS_REQUEST, loadUserPosts);
// }

function watchLoadHashtagPosts() {
  return _regeneratorRuntime().wrap(function watchLoadHashtagPosts$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          _context27.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
        case 2:
        case "end":
          return _context27.stop();
      }
    }
  }, _marked27);
}
function watchAddPost() {
  return _regeneratorRuntime().wrap(function watchAddPost$(_context28) {
    while (1) {
      switch (_context28.prev = _context28.next) {
        case 0:
          _context28.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
        case 2:
        case "end":
          return _context28.stop();
      }
    }
  }, _marked28);
}
function watchUpdatePost() {
  return _regeneratorRuntime().wrap(function watchUpdatePost$(_context29) {
    while (1) {
      switch (_context29.prev = _context29.next) {
        case 0:
          _context29.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_POST_REQUEST"], updatePost);
        case 2:
        case "end":
          return _context29.stop();
      }
    }
  }, _marked29);
}
function watchRemovePost() {
  return _regeneratorRuntime().wrap(function watchRemovePost$(_context30) {
    while (1) {
      switch (_context30.prev = _context30.next) {
        case 0:
          _context30.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
        case 2:
        case "end":
          return _context30.stop();
      }
    }
  }, _marked30);
}
function watchRemoveComment() {
  return _regeneratorRuntime().wrap(function watchRemoveComment$(_context31) {
    while (1) {
      switch (_context31.prev = _context31.next) {
        case 0:
          _context31.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_REQUEST"], removeComment);
        case 2:
        case "end":
          return _context31.stop();
      }
    }
  }, _marked31);
}
function watchLoadNewPosts() {
  return _regeneratorRuntime().wrap(function watchLoadNewPosts$(_context32) {
    while (1) {
      switch (_context32.prev = _context32.next) {
        case 0:
          _context32.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_NEW_POSTS_REQUEST"], loadNewPosts);
        case 2:
        case "end":
          return _context32.stop();
      }
    }
  }, _marked32);
}
function watchAddComment() {
  return _regeneratorRuntime().wrap(function watchAddComment$(_context33) {
    while (1) {
      switch (_context33.prev = _context33.next) {
        case 0:
          _context33.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
        case 2:
        case "end":
          return _context33.stop();
      }
    }
  }, _marked33);
}
function watchCheckDate() {
  return _regeneratorRuntime().wrap(function watchCheckDate$(_context34) {
    while (1) {
      switch (_context34.prev = _context34.next) {
        case 0:
          _context34.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["CHECK_DATE_REQUEST"], checkDate);
        case 2:
        case "end":
          return _context34.stop();
      }
    }
  }, _marked34);
}
function watchSearchKeyword() {
  return _regeneratorRuntime().wrap(function watchSearchKeyword$(_context35) {
    while (1) {
      switch (_context35.prev = _context35.next) {
        case 0:
          _context35.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEARCH_KEYWORD_REQUEST"], searchKeyword);
        case 2:
        case "end":
          return _context35.stop();
      }
    }
  }, _marked35);
}
function watchNewLookKeyword() {
  return _regeneratorRuntime().wrap(function watchNewLookKeyword$(_context36) {
    while (1) {
      switch (_context36.prev = _context36.next) {
        case 0:
          _context36.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["NEWLOOK_KEYWORD_REQUEST"], newLookKeyword);
        case 2:
        case "end":
          return _context36.stop();
      }
    }
  }, _marked36);
}
function postSaga() {
  return _regeneratorRuntime().wrap(function postSaga$(_context37) {
    while (1) {
      switch (_context37.prev = _context37.next) {
        case 0:
          _context37.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchNewCommentImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdateImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdatePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchNewLookKeyword), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSearchKeyword), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchCheckDate), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadNewPosts)]);
        case 2:
        case "end":
          return _context37.stop();
      }
    }
  }, _marked37);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJyZXR3ZWV0IiwidXBsb2FkSW1hZ2VzIiwibmV3Q29tbWVudEltYWdlcyIsInVwZGF0ZUltYWdlcyIsImxpa2VQb3N0IiwidW5saWtlUG9zdCIsImxvYWRQb3N0IiwibG9hZEhhc2h0YWdQb3N0cyIsImxvYWRQb3N0cyIsImxvYWROZXdQb3N0cyIsImFkZFBvc3QiLCJ1cGRhdGVQb3N0IiwicmVtb3ZlUG9zdCIsInJlbW92ZUNvbW1lbnQiLCJhZGRDb21tZW50IiwiY2hlY2tEYXRlIiwic2VhcmNoS2V5d29yZCIsIm5ld0xvb2tLZXl3b3JkIiwid2F0Y2hSZXR3ZWV0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hOZXdDb21tZW50SW1hZ2VzIiwid2F0Y2hVcGRhdGVJbWFnZXMiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExvYWRIYXNodGFnUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFVwZGF0ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZUNvbW1lbnQiLCJ3YXRjaExvYWROZXdQb3N0cyIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoQ2hlY2tEYXRlIiwid2F0Y2hTZWFyY2hLZXl3b3JkIiwid2F0Y2hOZXdMb29rS2V5d29yZCIsInBvc3RTYWdhIiwicmV0d2VldEFQSSIsImRhdGEiLCJwb3N0SWQiLCJnZXQiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIlJFVFdFRVRfU1VDQ0VTUyIsImNvbnNvbGUiLCJlcnJvciIsIlJFVFdFRVRfRkFJTFVSRSIsInJlc3BvbnNlIiwidXBsb2FkSW1hZ2VzQVBJIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTkVXX0NPTU1FTlRfSU1BR0VTX1NVQ0NFU1MiLCJORVdfQ09NTUVOVF9JTUFHRVNfRkFJTFVSRSIsIlVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9TVUNDRVNTIiwiVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX0ZBSUxVUkUiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsInVubGlrZVBvc3RBUEkiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsImxvYWRQb3N0QVBJIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJsYXN0SWQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwibG9hZFBvc3RzQVBJIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwibG9hZE5ld1Bvc3RzQVBJIiwiTE9BRF9ORVdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfTkVXX1BPU1RTX0ZBSUxVUkUiLCJhZGRQb3N0QVBJIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJ1cGRhdGVQb3N0QVBJIiwiVVBEQVRFX1BPU1RfU1VDQ0VTUyIsIlVQREFURV9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX09GX01FIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsInJlbW92ZUNvbW1lbnRBUEkiLCJjb21tZW50SWQiLCJsb2ciLCJ1cGRhdGVDb21tZW50UmF0ZUFQSSIsInJlbW92ZVJlc3VsdCIsInVwZGF0ZVJlc3VsdCIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJVUERBVEVfQ09NTUVOVF9SQVRFX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwiVVBEQVRFX0NPTU1FTlRfUkFURV9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiY2hlY2tEYXRlQVBJIiwiQ0hFQ0tfREFURV9TVUNDRVNTIiwiQ0hFQ0tfREFURV9GQUlMVVJFIiwic2VhcmNoS2V5d29yZEFQSSIsIlNFQVJDSF9LRVlXT1JEX1NVQ0NFU1MiLCJTRUFSQ0hfS0VZV09SRF9GQUlMVVJFIiwibmV3TG9va0tleXdvcmRBUEkiLCJORVdMT09LX0tFWVdPUkRfU1VDQ0VTUyIsIk5FV0xPT0tfS0VZV09SRF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIlJFVFdFRVRfUkVRVUVTVCIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiTkVXX0NPTU1FTlRfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJ0aHJvdHRsZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJBRERfUE9TVF9SRVFVRVNUIiwiVVBEQVRFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIiwiTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJDSEVDS19EQVRFX1JFUVVFU1QiLCJTRUFSQ0hfS0VZV09SRF9SRVFVRVNUIiwiTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OytDQUNBO0FBQUEsc0RBeUVVQSxPQUFPO0VBQUEsbURBc0JQQyxZQUFZO0VBQUEsbURBaUJaQyxnQkFBZ0I7RUFBQSxtREFxQmhCQyxZQUFZO0VBQUEsbURBc0JaQyxRQUFRO0VBQUEsbURBcUJSQyxVQUFVO0VBQUEsbURBcUJWQyxRQUFR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QUFJLENBQUMxRyxlQUFlLENBQUMsRUFDckIwRywrREFBSSxDQUFDOUcsY0FBYyxDQUFDLEVBQ3BCOEcsK0RBQUksQ0FBQ25HLG1CQUFtQixDQUFDLEVBQ3pCbUcsK0RBQUksQ0FBQzVHLHFCQUFxQixDQUFDLEVBQzNCNEcsK0RBQUksQ0FBQzdHLGFBQWEsQ0FBQyxFQUNuQjZHLCtEQUFJLENBQUN6RyxlQUFlLENBQUMsRUFDckJ5RywrREFBSSxDQUFDeEcsa0JBQWtCLENBQUMsRUFDeEJ3RywrREFBSSxDQUFDcEcsa0JBQWtCLENBQUMsRUFDeEJvRywrREFBSSxDQUFDdEcsZUFBZSxDQUFDLEVBQ3JCc0csK0RBQUksQ0FBQ3JHLGNBQWMsQ0FBQyxFQUNwQnFHLCtEQUFJLENBQUN2RyxpQkFBaUIsQ0FBQyxDQUN4QixDQUFDO1FBQUE7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmVhNDk5MzM0YmY0YTRjZjExMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIENIRUNLX0RBVEVfRkFJTFVSRSxcclxuICBDSEVDS19EQVRFX1JFUVVFU1QsXHJcbiAgQ0hFQ0tfREFURV9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfTkVXX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX05FV19QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gIE5FV0xPT0tfS0VZV09SRF9GQUlMVVJFLFxyXG4gIE5FV0xPT0tfS0VZV09SRF9SRVFVRVNULFxyXG4gIE5FV0xPT0tfS0VZV09SRF9TVUNDRVNTLFxyXG4gIE5FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFLFxyXG4gIE5FV19DT01NRU5UX0lNQUdFU19SRVFVRVNULFxyXG4gIE5FV19DT01NRU5UX0lNQUdFU19TVUNDRVNTLFxyXG4gIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCxcclxuICBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIFJFVFdFRVRfRkFJTFVSRSxcclxuICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgUkVUV0VFVF9TVUNDRVNTLFxyXG4gIFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUsXHJcbiAgU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICBTRUFSQ0hfS0VZV09SRF9TVUNDRVNTLFxyXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIFVQREFURV9DT01NRU5UX1JBVEVfRkFJTFVSRSxcclxuICBVUERBVEVfQ09NTUVOVF9SQVRFX1JFUVVFU1QsXHJcbiAgVVBEQVRFX0NPTU1FTlRfUkFURV9TVUNDRVNTLFxyXG4gIFVQREFURV9QT1NUX0ZBSUxVUkUsXHJcbiAgVVBEQVRFX1BPU1RfUkVRVUVTVCxcclxuICBVUERBVEVfUE9TVF9TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gIFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9GQUlMVVJFLFxyXG4gIFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9SRVFVRVNULFxyXG4gIFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XHJcbiAgY29uc3QgcG9zdElkID0gZGF0YS5nZXQoJ3Bvc3RJZCcpO1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke3Bvc3RJZH0vcmVmZXJlbmNlYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgIFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgIFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBuZXdDb21tZW50SW1hZ2VzKGFjdGlvbil7XHJcbiAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBORVdfQ09NTUVOVF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IE5FV19DT01NRU5UX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHVwZGF0ZUltYWdlc0FQSShkYXRhKXtcclxuLy8gICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uKiB1cGRhdGVJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgIFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApOyBcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59ICAgICAgICAgICAgICAgICAvL+yjvOyGjOyXkCDqt7jrg6Ug7ZWc6riALO2KueyImOusuOyekOqwgCDrk6TslrTqsIDrqbQg7JeQ65+s64KY7IScIGVuY29kZVVSSUNvbXBvbmVudOuhnCDqsJDsi7jspJjslbwg7ZWc64ukLlxyXG5cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHMvYWxsTG9va3M/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTmV3UG9zdHNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0c2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE5ld1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWROZXdQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9ORVdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTkVXX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBvc3RBUEkoZGF0YSl7XHJcbiAgY29uc3QgcG9zdElkID0gZGF0YS5nZXQoJ3Bvc3RJZCcpO1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtwb3N0SWR9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGRhdGVQb3N0KGFjdGlvbil7XHJcbiAgdHJ5e1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwZGF0ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQREFURV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY2F0Y2goZXJyKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICB0eXBlOiBVUERBVEVfUE9TVF9GQUlMVVJFLFxyXG4gICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ29tbWVudEFQSShkYXRhKXtcclxuXHJcbiAgY29uc3QgY29tbWVudElkID0gZGF0YS5nZXQoJ2NvbW1lbnRJZCcpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIuuMk+q4gCDsgq3soJwg7JWE7J2065SUOiBcIiwgY29tbWVudElkKTtcclxuXHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvY29tbWVudC8ke2NvbW1lbnRJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ29tbWVudFJhdGVBUEkoZGF0YSl7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRJZCA9IGRhdGEuZ2V0KCdjb21tZW50SWQnKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCLrjJPquIAg7KCQ7IiYIOyVhOydtOuUlDogXCIsIGNvbW1lbnRJZCk7XHJcblxyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvY29tbWVudFJhdGUvJHtjb21tZW50SWR9YCwgZGF0YSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlQ29tbWVudChhY3Rpb24pe1xyXG4gIHRyeXtcclxuICAgIGNvbnN0IHJlbW92ZVJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc3QgdXBkYXRlUmVzdWx0ID0geWllbGQgY2FsbCh1cGRhdGVDb21tZW50UmF0ZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVtb3ZlUmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQREFURV9DT01NRU5UX1JBVEVfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogdXBkYXRlUmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQREFURV9DT01NRU5UX1JBVEVfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG5cclxuY29uc3QgcG9zdElkID0gZGF0YS5nZXQoJ3Bvc3RJZCcpO1xyXG4gXHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7cG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0RhdGVBUEkoZGF0YSl7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0L2NoZWNrRGF0ZWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hlY2tEYXRlKGFjdGlvbil7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hlY2tEYXRlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgXHJcbiAgIHlpZWxkIHB1dCh7XHJcbiAgICAgdHlwZTogQ0hFQ0tfREFURV9TVUNDRVNTLFxyXG4gICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICB9KTtcclxuIH0gY2F0Y2ggKGVycikge1xyXG4gICBjb25zb2xlLmVycm9yKFwi64Kg7KecIO2ZleyduCDsl5Drn6wg7ZmV7J24XCIsIGVycik7XHJcbiAgIHlpZWxkIHB1dCh7XHJcbiAgICAgdHlwZTogQ0hFQ0tfREFURV9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgfSk7XHJcbiB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEtleXdvcmRBUEkoZGF0YSl7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcva2V5d29yZHMvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZWFyY2hLZXl3b3JkKGFjdGlvbil7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2VhcmNoS2V5d29yZEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gIFxyXG4gICB5aWVsZCBwdXQoe1xyXG4gICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1MsXHJcbiAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgIH0pO1xyXG4gfSBjYXRjaCAoZXJyKSB7XHJcbiAgIHlpZWxkIHB1dCh7XHJcbiAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgIH0pO1xyXG4gfVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdMb29rS2V5d29yZEFQSShkYXRhKXtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy9rZXl3b3Jkcy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIG5ld0xvb2tLZXl3b3JkKGFjdGlvbil7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobmV3TG9va0tleXdvcmRBUEksIGFjdGlvbi5kYXRhKTtcclxuICBcclxuICAgeWllbGQgcHV0KHtcclxuICAgICB0eXBlOiBORVdMT09LX0tFWVdPUkRfU1VDQ0VTUyxcclxuICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgfSk7XHJcbiB9IGNhdGNoIChlcnIpIHtcclxuICAgeWllbGQgcHV0KHtcclxuICAgICB0eXBlOiBORVdMT09LX0tFWVdPUkRfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgIH0pO1xyXG4gfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE5ld0NvbW1lbnRJbWFnZXMoKXtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KE5FV19DT01NRU5UX0lNQUdFU19SRVFVRVNULCBuZXdDb21tZW50SW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBkYXRlSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1QsIHVwZGF0ZUltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiogd2F0Y2hMb2FkVXNlclBvc3RzKCkge1xyXG4vLyAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBkYXRlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQREFURV9QT1NUX1JFUVVFU1QsIHVwZGF0ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUNvbW1lbnQoKXtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsIHJlbW92ZUNvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTmV3UG9zdHMoKXtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTkVXX1BPU1RTX1JFUVVFU1QsIGxvYWROZXdQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hlY2tEYXRlKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hFQ0tfREFURV9SRVFVRVNULCBjaGVja0RhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTZWFyY2hLZXl3b3JkKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCwgc2VhcmNoS2V5d29yZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE5ld0xvb2tLZXl3b3JkKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QsIG5ld0xvb2tLZXl3b3JkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hOZXdDb21tZW50SW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hVcGRhdGVJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbkxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVcGRhdGVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaE5ld0xvb2tLZXl3b3JkKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoU2VhcmNoS2V5d29yZCksXHJcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoQ2hlY2tEYXRlKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTmV3UG9zdHMpXHJcbiAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9