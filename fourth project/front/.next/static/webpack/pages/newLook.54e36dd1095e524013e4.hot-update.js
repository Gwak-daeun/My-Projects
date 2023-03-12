webpackHotUpdate_N_E("pages/newLook",{

/***/ "./pages/newLook.js":
/*!**************************!*\
  !*** ./pages/newLook.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input/TextArea */ "./node_modules/antd/lib/input/TextArea.js");
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login */ "./pages/login.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.mjs");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _this = undefined,
  _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Desktop\\fashionary\\front\\pages\\newLook.js",
  _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var Meta = antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta;
var Option = antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option;

var OneNewLook = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "newLook__OneNewLook",
  componentId: "sc-29otxw-0"
})([".h2-1{margin-left:600px;margin-top:20px;}.col1{float:left;}.card1{width:280px;}.card2{margin-left:15px;width:400px;}.card3{margin-top:25px;margin-left:15px;width:400px;height:210px;}.card4{width:300px;height:630px;}.img1{height:528px;width:280px;}.img2{width:300px;height:630px;}.li1{display:inline-block;}.li2{display:inline-block;margin-left:10px;}.button1{background-color:black;color:white;margin-bottom:10px;}.button2{background-color:black;color:white;margin-bottom:10px;}.button3{left:34%;margin-top:5px;background-color:black;color:white;}.tbody1{text-align:center;}.td1{color:black;text-align:center;}.div1{margin-left:730px;}.div2{text-align:center;}"]);
_c = OneNewLook;
var NewLook = function NewLook() {
  _s();
  var _mainPosts$, _mainPosts$$Images$, _mainPosts$2, _mainPosts$2$Images$, _mainPosts$3, _mainPosts$3$Images$, _mainPosts$4, _mainPosts$4$Images$;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
    top = _useInput2[0],
    onChangeTop = _useInput2[1],
    setTop = _useInput2[2];
  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 3),
    bottom = _useInput4[0],
    onChangeBottom = _useInput4[1],
    setBottom = _useInput4[2];
  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 3),
    dress = _useInput6[0],
    onChangeDress = _useInput6[1],
    setDress = _useInput6[2];
  var _useInput7 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput7, 3),
    shoes = _useInput8[0],
    onChangeShoes = _useInput8[1],
    setShoes = _useInput8[2];
  var _useInput9 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput9, 3),
    acc = _useInput10[0],
    onChangeAcc = _useInput10[1],
    setAcc = _useInput10[2];
  var _useInput11 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput11, 3),
    outer = _useInput12[0],
    onChangeOuter = _useInput12[1],
    setOuter = _useInput12[2];
  var _useInput13 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput13, 3),
    lookName = _useInput14[0],
    onChangeLookName = _useInput14[1],
    setLookName = _useInput14[2];
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
      return state.post;
    }),
    imagePaths = _useSelector.imagePaths,
    addPostDone = _useSelector.addPostDone,
    mainPosts = _useSelector.mainPosts,
    newLookKeywords = _useSelector.newLookKeywords;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
    previewImg = _useState[0],
    setPreviewImg = _useState[1];
  var words = newLookKeywords === null || newLookKeywords === void 0 ? void 0 : newLookKeywords.map(function (items) {
    return {
      value: items.name
    };
  });
  console.log("데이터: ", top);
  var _useInput15 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput15, 3),
    content = _useInput16[0],
    onChangeContent = _useInput16[1],
    setContent = _useInput16[2];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (addPostDone === true) {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace('/');
    }
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LOAD_NEW_POSTS_REQUEST"]
    });
  }, [addPostDone]);
  console.log("메인포스트: ", mainPosts);
  var today = new Date();
  var year = today.getFullYear(); // 년도
  var month = today.getMonth() + 1; // 월
  var date = today.getDate(); // 날짜

  // 월, 날짜가 10보다 작으면 앞에 0을 붙여주기
  var formattedMonth = month < 10 ? "0".concat(month) : month;
  var formattedDate = date < 10 ? "0".concat(date) : date;
  var todayDateString = "".concat(year, "-").concat(formattedMonth, "-").concat(formattedDate);
  var selectTop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    setTop(value);
  });
  var selectBottom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    setBottom(value);
  });
  var selectDress = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    setDress(value);
  });
  var selectShoes = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    setShoes(value);
  });
  var selectOuter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    setOuter(value);
  });
  var selectAcc = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    setAcc(value);
  });

  //게시글 업로드 요청
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (top && bottom && dress && shoes && acc && outer === undefined) {
      return alert('다섯가지 항목 중 하나 이상은 브랜드명을 작성해야 해요.');
    }
    if (!content || !content.trim()) {
      return alert('오늘의 Look에 대한 내용을 작성하세요.');
    }
    if (imagePaths.length === 0) {
      return alert('오늘의 Look에 필요한 사진을 업로드 해주세요.');
    }
    if (lookName === null) {
      return alert('오늘의 Look의 이름을 작성하세요.');
    }
    var formData = new FormData();
    imagePaths.forEach(function (p) {
      formData.append('image', p);
    });
    formData.append('content', content);
    formData.append('top', top);
    formData.append('bottom', bottom);
    formData.append('dress', dress);
    formData.append('shoes', shoes);
    formData.append('acc', acc);
    formData.append('outer', outer);
    formData.append('lookName', lookName);
    formData.append('today', todayDateString);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [content, imagePaths]);
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);

  //이미지 변경, 이미지 미리보기
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    console.log('images', e.target.files);
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append('image', f);
    });
    var reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = function () {
      var previewImgUrl = reader.result;
      if (previewImgUrl) {
        setPreviewImg(previewImgUrl);
      }
    };
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  });
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_IMAGE"],
        data: index
      });
    };
  });
  var NullImage = function NullImage() {
    return __jsx(OneNewLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: "card4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "div2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faNoteSticky"],
      fontSize: 150,
      style: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 21
      }
    }), __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 21
      }
    }, "\uC544\uC9C1 \uCD5C\uC2E0 \uAC8C\uC2DC\uAE00\uC774 \uB9CE\uC774 \uC5C6\uC5B4\uC694!"))));
  };
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 9
    }
  }, __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      width: 1120
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 29
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 34
    }
  }, "New DailyLook"), " ", __jsx("h2", {
    className: "h2-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 57
    }
  }, "Recent DailyLook")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "card1",
    cover: __jsx(OneNewLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 45
      }
    }, __jsx("img", {
      alt: "example",
      src: previewImg ? previewImg : 'https://media.istockphoto.com/id/900575958/vector/dressmaker-model-vector-icon.jpg?s=612x612&w=0&k=20&c=7rnqVC3c7IqiWFrRkWPAZ34h-NAs-pkdsDGR5HYIv94=',
      ref: imageInput,
      className: "img1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 45
      }
    })),
    actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: onClickImageUpload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 45
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UploadOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 49
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 41
    }
  }, __jsx("input", {
    name: "image",
    type: "file",
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 41
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 33
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: "li1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 37
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 57
    }
  }, "\uB370\uC77C\uB9AC\uB8E9 \uC81C\uBAA9")), __jsx("li", {
    className: "li2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: lookName,
    onChange: onChangeLookName,
    showCount: true,
    maxLength: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 57
    }
  })))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "card2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "button1",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 37
    }
  }, "Information"), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 29
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 29
    }
  }, "\uBD84\uB958"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 29
    }
  }, "\uBE0C\uB79C\uB4DC\uBA85"))), __jsx("tbody", {
    className: "tbody1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC0C1\uC758",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"], {
    id: "top",
    dropdownMatchSelectWidth: 200,
    options: words,
    onSelect: selectTop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    id: "top",
    value: top,
    onChange: onChangeTop,
    name: "top",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uD558\uC758",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"], {
    id: "bottom",
    dropdownMatchSelectWidth: 200,
    options: words,
    onSelect: selectBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    id: "bottom",
    value: bottom,
    onChange: onChangeBottom,
    name: "bottom",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC6D0\uD53C\uC2A4",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"], {
    id: "dress",
    dropdownMatchSelectWidth: 200,
    options: words,
    onSelect: selectDress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: dress,
    onChange: onChangeDress,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC544\uC6B0\uD130",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"], {
    id: "outer",
    dropdownMatchSelectWidth: 200,
    options: words,
    onSelect: selectOuter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: outer,
    onChange: onChangeOuter,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC2E0\uBC1C",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"], {
    id: "shoes",
    dropdownMatchSelectWidth: 200,
    options: words,
    onSelect: selectShoes,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: shoes,
    onChange: onChangeShoes,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uD328\uC158\uC7A1\uD654",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"], {
    id: "acc",
    dropdownMatchSelectWidth: 200,
    options: words,
    onSelect: selectAcc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    id: "acc",
    value: acc,
    onChange: onChangeAcc,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 37
    }
  }))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "card3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "button2",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 25
    }
  }, "Daily Record "), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
    value: content,
    onChange: onChangeContent,
    showCount: true,
    maxLength: 250,
    style: {
      height: 110,
      resize: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "button3",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 25
    }
  }, "\uB370\uC77C\uB9AC\uB8E9 \uB4F1\uB85D\uD558\uAE30"))), __jsx("div", {
    className: "div1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    style: {},
    autoplay: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 33
    }
  }, mainPosts[0] === undefined ? __jsx(NullImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 69
    }
  }) : __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 88
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$ = mainPosts[0]) === null || _mainPosts$ === void 0 ? void 0 : (_mainPosts$$Images$ = _mainPosts$.Images[0]) === null || _mainPosts$$Images$ === void 0 ? void 0 : _mainPosts$$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 101
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 33
    }
  }, mainPosts[1] === undefined ? __jsx(NullImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 69
    }
  }) : __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 89
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$2 = mainPosts[1]) === null || _mainPosts$2 === void 0 ? void 0 : (_mainPosts$2$Images$ = _mainPosts$2.Images[0]) === null || _mainPosts$2$Images$ === void 0 ? void 0 : _mainPosts$2$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 102
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 33
    }
  }, mainPosts[2] === undefined ? __jsx(NullImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 69
    }
  }) : __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 90
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$3 = mainPosts[2]) === null || _mainPosts$3 === void 0 ? void 0 : (_mainPosts$3$Images$ = _mainPosts$3.Images[0]) === null || _mainPosts$3$Images$ === void 0 ? void 0 : _mainPosts$3$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 103
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 33
    }
  }, mainPosts[3] === undefined ? __jsx(NullImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 69
    }
  }) : __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 89
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$4 = mainPosts[3]) === null || _mainPosts$4 === void 0 ? void 0 : (_mainPosts$4$Images$ = _mainPosts$4.Images[0]) === null || _mainPosts$4$Images$ === void 0 ? void 0 : _mainPosts$4$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 102
    }
  }))))))));
};
_s(NewLook, "YoQwPAw/rtuhxIadO2a56lzQ0Ds=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});
_c2 = NewLook;
/* harmony default export */ __webpack_exports__["default"] = (NewLook);
var _c, _c2;
$RefreshReg$(_c, "OneNewLook");
$RefreshReg$(_c2, "NewLook");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3TG9vay5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIk9wdGlvbiIsIlNlbGVjdCIsIk9uZU5ld0xvb2siLCJzdHlsZWQiLCJkaXYiLCJOZXdMb29rIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VJbnB1dCIsInRvcCIsIm9uQ2hhbmdlVG9wIiwic2V0VG9wIiwiYm90dG9tIiwib25DaGFuZ2VCb3R0b20iLCJzZXRCb3R0b20iLCJkcmVzcyIsIm9uQ2hhbmdlRHJlc3MiLCJzZXREcmVzcyIsInNob2VzIiwib25DaGFuZ2VTaG9lcyIsInNldFNob2VzIiwiYWNjIiwib25DaGFuZ2VBY2MiLCJzZXRBY2MiLCJvdXRlciIsIm9uQ2hhbmdlT3V0ZXIiLCJzZXRPdXRlciIsImxvb2tOYW1lIiwib25DaGFuZ2VMb29rTmFtZSIsInNldExvb2tOYW1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJtYWluUG9zdHMiLCJuZXdMb29rS2V5d29yZHMiLCJ1c2VTdGF0ZSIsInByZXZpZXdJbWciLCJzZXRQcmV2aWV3SW1nIiwid29yZHMiLCJtYXAiLCJpdGVtcyIsInZhbHVlIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50Iiwib25DaGFuZ2VDb250ZW50Iiwic2V0Q29udGVudCIsInVzZUVmZmVjdCIsIlJvdXRlciIsInJlcGxhY2UiLCJ0eXBlIiwiTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsImZvcm1hdHRlZE1vbnRoIiwiZm9ybWF0dGVkRGF0ZSIsInRvZGF5RGF0ZVN0cmluZyIsInNlbGVjdFRvcCIsInVzZUNhbGxiYWNrIiwic2VsZWN0Qm90dG9tIiwic2VsZWN0RHJlc3MiLCJzZWxlY3RTaG9lcyIsInNlbGVjdE91dGVyIiwic2VsZWN0QWNjIiwib25TdWJtaXQiLCJ1bmRlZmluZWQiLCJhbGVydCIsInRyaW0iLCJsZW5ndGgiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsInAiLCJhcHBlbmQiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJwcmV2aWV3SW1nVXJsIiwicmVzdWx0IiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwiTnVsbEltYWdlIiwiZmFOb3RlU3RpY2t5Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJJbWFnZXMiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDMkQ7QUFDekM7QUFDbkI7QUFDUTtBQUNVO0FBQ3hCO0FBQ3FIO0FBQ2xJO0FBQ1k7QUFDUDtBQUM4QjtBQUNJO0FBQ25FLElBQVFBLElBQUksR0FBS0MseUNBQUksQ0FBYkQsSUFBSTtBQUNaLElBQVFFLE1BQU0sR0FBS0MsMkNBQU0sQ0FBakJELE1BQU07QUFDeUI7QUFFdkMsSUFBTUUsVUFBVSxHQUFHQywwREFBTSxDQUFDQyxHQUFHO0VBQUE7RUFBQTtBQUFBLDRwQkFzRjVCO0FBQUMsS0F0RklGLFVBQVU7QUF3RmhCLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQVM7RUFBQTtFQUFBO0VBRWxCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUU5QixJQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQUU7RUFFM0IsZ0JBQW1DQywrREFBUSxDQUFD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O0lBQUMsU0FBUyxFQUFDLEtBQUs7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQUssRUFDaEU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJLE1BQUMsaURBQVk7SUFDYixFQUFFLEVBQUMsT0FBTztJQUNWLHdCQUF3QixFQUFFLEdBQUk7SUFDOUIsT0FBTyxFQUFFMkIsS0FBTTtJQUNmLFFBQVEsRUFBRTZCLFdBQVk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUVsQixNQUFDLDBDQUFLO0lBQUMsS0FBSyxFQUFFdEQsS0FBTTtJQUFDLFFBQVEsRUFBRUMsYUFBYztJQUFDLElBQUksRUFBQyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUNqRCxDQUNkLENBQ0EsRUFDTDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0E7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxRQUFLLE1BQUMsMENBQUs7SUFBQyxRQUFRO0lBQUUsWUFBWSxFQUFDLG9CQUFLO0lBQUMsU0FBUyxFQUFDLEtBQUs7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQUssRUFDaEU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJLE1BQUMsaURBQVk7SUFDYixFQUFFLEVBQUMsT0FBTztJQUNWLHdCQUF3QixFQUFFLEdBQUk7SUFDOUIsT0FBTyxFQUFFd0IsS0FBTTtJQUNmLFFBQVEsRUFBRStCLFdBQVk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUVsQixNQUFDLDBDQUFLO0lBQUMsS0FBSyxFQUFFL0MsS0FBTTtJQUFDLFFBQVEsRUFBRUMsYUFBYztJQUFDLElBQUksRUFBQyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUNqRCxDQUNkLENBQ0EsRUFDTDtJQUFBO0lB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O01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FBYSxDQUNwSyxFQUNOO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDTTVFLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS3VDLFNBQVMsR0FBSSxNQUFDLFNBQVM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEdBQU8sTUFBQyxVQUFVO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsUUFBRTtJQUFLLFNBQVMsRUFBQyxNQUFNO0lBQUMsR0FBRyxrREFBNEJ2QyxTQUFTLENBQUMsQ0FBQyxDQUFDLHlFQUFaLGFBQWMyRSxNQUFNLENBQUMsQ0FBQyxDQUFDLHlEQUF2QixxQkFBeUJDLEdBQUcsQ0FBRztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUksQ0FBYSxDQUNwSyxDQUNDLENBQ1QsQ0FFUixDQUNHLENBQ0w7QUFFcEIsQ0FBQztBQUFDLEdBM1ZJNUcsT0FBTztFQUFBLFFBRVFFLHVEQUFXLEVBSU9HLHVEQUFRLEVBQ0NBLHVEQUFRLEVBQ1hBLHVEQUFRLEVBQ1JBLHVEQUFRLEVBQ2RBLHVEQUFRLEVBQ0ZBLHVEQUFRLEVBQ0NBLHVEQUFRLEVBRUlzQix1REFBVyxFQVF4QnRCLHVEQUFRO0FBQUE7QUFBQSxNQXRCdkRMLE9BQU87QUFnV0VBLHNFQUFPLEVBQUM7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3TG9vay41NGUzNmRkMTA5NWU1MjQwMTNlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHsgQXV0b0NvbXBsZXRlLCBCdXR0b24sIENhcmQsIENhcm91c2VsLCBDb2wsIEZvcm0sIElucHV0LCBSb3csIFNlbGVjdCwgU3BhY2UsIFVwbG9hZCAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRWRpdE91dGxpbmVkLCBVcGxvYWRPdXRsaW5lZCAgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiYW50ZC9saWIvaW5wdXQvVGV4dEFyZWFcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNULCBMT0FEX05FV19QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1JFUVVFU1QsIE5FV0xPT0tfS0VZV09SRF9SRVFVRVNULCBSRU1PVkVfSU1BR0UsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFOb3RlU3RpY2t5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IE9uZU5ld0xvb2sgPSBzdHlsZWQuZGl2YFxyXG5cclxuICAgIC5oMi0xe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2MDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wxe1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkMXtcclxuICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQ0e1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDYzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWcxe1xyXG4gICAgICAgIGhlaWdodDogNTI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWcye1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDYzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saTF7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5saTJ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24xe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24ye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uM3tcclxuICAgICAgICBsZWZ0OiAzNCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAudGJvZHkxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGQxe1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdjF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDczMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXYye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBOZXdMb29rID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW3RvcCwgb25DaGFuZ2VUb3AgLHNldFRvcF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbYm90dG9tLCBvbkNoYW5nZUJvdHRvbSAsc2V0Qm90dG9tXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtkcmVzcywgb25DaGFuZ2VEcmVzcyAsc2V0RHJlc3NdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW3Nob2VzLCBvbkNoYW5nZVNob2VzICxzZXRTaG9lc10gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbYWNjLCBvbkNoYW5nZUFjYyAsc2V0QWNjXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtvdXRlciwgb25DaGFuZ2VPdXRlciAsc2V0T3V0ZXJdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW2xvb2tOYW1lLCBvbkNoYW5nZUxvb2tOYW1lICxzZXRMb29rTmFtZV0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgY29uc3Qge2ltYWdlUGF0aHMsIGFkZFBvc3REb25lLCBtYWluUG9zdHMsIG5ld0xvb2tLZXl3b3Jkc30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICAgIGNvbnN0IFtwcmV2aWV3SW1nLCBzZXRQcmV2aWV3SW1nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHdvcmRzID0gbmV3TG9va0tleXdvcmRzPy5tYXAoaXRlbXMgPT4gKHt2YWx1ZTogaXRlbXMubmFtZX0pKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIuuNsOydtO2EsDogXCIsIHRvcCk7XHJcblxyXG4gICAgY29uc3QgWyBjb250ZW50LCBvbkNoYW5nZUNvbnRlbnQsIHNldENvbnRlbnQgXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZihhZGRQb3N0RG9uZSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX05FV19QT1NUU19SRVFVRVNUXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSwgW2FkZFBvc3REb25lXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCLrqZTsnbjtj6zsiqTtirg6IFwiLCBtYWluUG9zdHMpO1xyXG5cclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpOyAvLyDrhYTrj4RcclxuICAgIGNvbnN0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7IC8vIOyblFxyXG4gICAgY29uc3QgZGF0ZSA9IHRvZGF5LmdldERhdGUoKTsgLy8g64Kg7KecXHJcbiAgICBcclxuICAgIC8vIOyblCwg64Kg7Kec6rCAIDEw67O064ukIOyekeycvOuptCDslZ7sl5AgMOydhCDrtpnsl6zso7zquLBcclxuICAgIGNvbnN0IGZvcm1hdHRlZE1vbnRoID0gbW9udGggPCAxMCA/IGAwJHttb250aH1gIDogbW9udGg7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF0ZSA8IDEwID8gYDAke2RhdGV9YCA6IGRhdGU7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvZGF5RGF0ZVN0cmluZyA9IGAke3llYXJ9LSR7Zm9ybWF0dGVkTW9udGh9LSR7Zm9ybWF0dGVkRGF0ZX1gO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdFRvcCA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFRvcCh2YWx1ZSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdEJvdHRvbSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldEJvdHRvbSh2YWx1ZSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdERyZXNzID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0RHJlc3ModmFsdWUpXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RTaG9lcyA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFNob2VzKHZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0T3V0ZXIgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgICAgICBzZXRPdXRlcih2YWx1ZSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdEFjYyA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldEFjYyh2YWx1ZSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8v6rKM7Iuc6riAIOyXheuhnOuTnCDsmpTssq1cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cclxuICAgICAgICBpZih0b3AgJiYgYm90dG9tICYmIGRyZXNzICYmIHNob2VzICYmIGFjYyAmJiBvdXRlciA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfri6TshK/qsIDsp4Ag7ZWt66qpIOykkSDtlZjrgpgg7J207IOB7J2AIOu4jOuenOuTnOuqheydhCDsnpHshLHtlbTslbwg7ZW07JqULicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZighY29udGVudCB8fCAhY29udGVudC50cmltKCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+yYpOuKmOydmCBMb29r7JeQIOuMgO2VnCDrgrTsmqnsnYQg7J6R7ISx7ZWY7IS47JqULicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpbWFnZVBhdGhzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn7Jik64qY7J2YIExvb2vsl5Ag7ZWE7JqU7ZWcIOyCrOynhOydhCDsl4XroZzrk5wg7ZW07KO87IS47JqULicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihsb29rTmFtZSA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn7Jik64qY7J2YIExvb2vsnZgg7J2066aE7J2EIOyekeyEse2VmOyEuOyalC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgY29udGVudCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0b3AnLCB0b3ApO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYm90dG9tJywgYm90dG9tKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RyZXNzJywgZHJlc3MpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc2hvZXMnLCBzaG9lcyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhY2MnLCBhY2MpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnb3V0ZXInLCBvdXRlcik7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdsb29rTmFtZScsIGxvb2tOYW1lKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RvZGF5JywgdG9kYXlEYXRlU3RyaW5nKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICB9KTtcclxuICAgIH0sW2NvbnRlbnQsIGltYWdlUGF0aHNdKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG5cclxuLy/snbTrr7jsp4Ag67OA6rK9LCDsnbTrr7jsp4Ag66+466as67O06riwXHJcbmNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbWFnZXMnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGlmKGUudGFyZ2V0LmZpbGVzWzBdKXtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcHJldmlld0ltZ1VybCA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgIGlmKHByZXZpZXdJbWdVcmwpe1xyXG4gICAgICAgIHNldFByZXZpZXdJbWcocHJldmlld0ltZ1VybCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IGltYWdlRm9ybURhdGFcclxuICAgIH0pO1xyXG59KTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgICAgICAgICAgZGF0YTogaW5kZXhcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBOdWxsSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8T25lTmV3TG9vaz5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZDRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgIGljb249e2ZhTm90ZVN0aWNreX1cclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17MTUwfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+7JWE7KeBIOy1nOyLoCDqsozsi5zquIDsnbQg66eO7J20IOyXhuyWtOyalCE8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9PbmVOZXdMb29rPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8QXBwTGF5b3V0ID5cclxuICAgICAgICAgICAgPE9uZU5ld0xvb2s+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IDExMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+PGgxPk5ldyBEYWlseUxvb2s8L2gxPiA8aDIgY2xhc3NOYW1lPVwiaDItMVwiPlJlY2VudCBEYWlseUxvb2s8L2gyPjwvUm93PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZDEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Zlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9uZU5ld0xvb2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltZyA/IHByZXZpZXdJbWcgOiAnaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vaWQvOTAwNTc1OTU4L3ZlY3Rvci9kcmVzc21ha2VyLW1vZGVsLXZlY3Rvci1pY29uLmpwZz9zPTYxMng2MTImdz0wJms9MjAmYz03cm5xVkMzYzdJcWlXRnJSa1dQQVozNGgtTkFzLXBrZHNER1I1SFlJdjk0PSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT25lTmV3TG9vaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkT3V0bGluZWQga2V5PVwiZWRpdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImltYWdlXCIgdHlwZT1cImZpbGVcIiBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpMVwiPjxoMyA+642w7J2866as66OpIOygnOuqqTwvaDM+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpMlwiPjxJbnB1dCB2YWx1ZT17bG9va05hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZUxvb2tOYW1lfSBzaG93Q291bnQgbWF4TGVuZ3RoPXsyMH0gLz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uMVwiIGJsb2NrID5JbmZvcm1hdGlvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuu2hOulmDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+67iM656c65Oc66qFPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cInRib2R5MVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gPElucHV0IGRpc2FibGVkICBkZWZhdWx0VmFsdWU9XCLsg4HsnZhcIiBjbGFzc05hbWU9XCJ0ZDFcIi8+PC90ZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3dvcmRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RUb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJ0b3BcIiB2YWx1ZT17dG9wfSBvbkNoYW5nZT17b25DaGFuZ2VUb3B9IG5hbWU9XCJ0b3BcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIu2VmOydmFwiIGNsYXNzTmFtZT1cInRkMVwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9Db21wbGV0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17d29yZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdEJvdHRvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cImJvdHRvbVwiIHZhbHVlPXtib3R0b219IG9uQ2hhbmdlPXtvbkNoYW5nZUJvdHRvbX0gbmFtZT1cImJvdHRvbVwiIHR5cGU9XCJ0ZXh0XCIgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuybkO2UvOyKpFwiIGNsYXNzTmFtZT1cInRkMVwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9Db21wbGV0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt3b3Jkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0RHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e2RyZXNzfSBvbkNoYW5nZT17b25DaGFuZ2VEcmVzc30gdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuyVhOyasO2EsFwiIGNsYXNzTmFtZT1cInRkMVwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9Db21wbGV0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt3b3Jkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0T3V0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e291dGVyfSBvbkNoYW5nZT17b25DaGFuZ2VPdXRlcn0gdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gPElucHV0IGRpc2FibGVkICBkZWZhdWx0VmFsdWU9XCLsi6DrsJxcIiBjbGFzc05hbWU9XCJ0ZDFcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaG9lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17d29yZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdFNob2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXtzaG9lc30gb25DaGFuZ2U9e29uQ2hhbmdlU2hvZXN9ICB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7Yyo7IWY7J6h7ZmUXCIgY2xhc3NOYW1lPVwidGQxXCIgLz48L3RkPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9Db21wbGV0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17d29yZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdEFjY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cImFjY1wiIHZhbHVlPXthY2N9IG9uQ2hhbmdlPXtvbkNoYW5nZUFjY30gIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmQzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uMlwiIGJsb2NrID5EYWlseSBSZWNvcmQgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg642w7J2866as66OpIOuTseuhne2VmOq4sFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT4gIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIOqwgOyepSDstZzqt7wg642w7J2866as66OpICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsIHN0eWxlPXt7fX0gYXV0b3BsYXk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtYWluUG9zdHNbMF0gPT09IHVuZGVmaW5lZCA/ICA8TnVsbEltYWdlIC8+ICAgOiAgPE9uZU5ld0xvb2s+IDxpbWcgY2xhc3NOYW1lPVwiaW1nMlwiIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke21haW5Qb3N0c1swXT8uSW1hZ2VzWzBdPy5zcmN9YH0gLz48L09uZU5ld0xvb2s+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1haW5Qb3N0c1sxXSA9PT0gdW5kZWZpbmVkID8gIDxOdWxsSW1hZ2UgLz4gICA6ICAgPE9uZU5ld0xvb2s+IDxpbWcgY2xhc3NOYW1lPVwiaW1nMlwiIHNyYz17IGBodHRwOi8vbG9jYWxob3N0OjMwNjUvJHttYWluUG9zdHNbMV0/LkltYWdlc1swXT8uc3JjfWB9IC8+PC9PbmVOZXdMb29rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtYWluUG9zdHNbMl0gPT09IHVuZGVmaW5lZCA/ICA8TnVsbEltYWdlIC8+ICAgOiAgICA8T25lTmV3TG9vaz4gPGltZyBjbGFzc05hbWU9XCJpbWcyXCIgc3JjPXsgYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke21haW5Qb3N0c1syXT8uSW1hZ2VzWzBdPy5zcmN9YH0gLz48L09uZU5ld0xvb2s+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1haW5Qb3N0c1szXSA9PT0gdW5kZWZpbmVkID8gIDxOdWxsSW1hZ2UgLz4gICA6ICAgPE9uZU5ld0xvb2s+IDxpbWcgY2xhc3NOYW1lPVwiaW1nMlwiIHNyYz17IGBodHRwOi8vbG9jYWxob3N0OjMwNjUvJHttYWluUG9zdHNbM10/LkltYWdlc1swXT8uc3JjfWB9ICAvPjwvT25lTmV3TG9vaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9PbmVOZXdMb29rPlxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0xvb2s7Il0sInNvdXJjZVJvb3QiOiIifQ==