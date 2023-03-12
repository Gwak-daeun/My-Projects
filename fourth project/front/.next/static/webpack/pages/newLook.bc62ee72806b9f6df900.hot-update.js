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
    if (!top && !bottom && !dress && !shoes && !acc && !outer) {
      return alert('다섯가지 항목 중 하나 이상은 브랜드명을 작성해야 해요.');
    }
    if (!content || !content.trim()) {
      return alert('오늘의 Look에 대한 내용을 작성하세요.');
    }
    if (imagePaths.length === 0) {
      return alert('오늘의 Look에 필요한 사진을 업로드 해주세요.');
    }
    if (!lookName) {
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
        lineNumber: 254,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: "card4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "div2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 17
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faNoteSticky"],
      fontSize: 150,
      style: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 21
      }
    }), __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 21
      }
    }, "\uC544\uC9C1 \uCD5C\uC2E0 \uAC8C\uC2DC\uAE00\uC774 \uB9CE\uC774 \uC5C6\uC5B4\uC694!"))));
  };
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  }, __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      width: 1120
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 29
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 34
    }
  }, "New DailyLook"), " ", __jsx("h2", {
    className: "h2-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 57
    }
  }, "Recent DailyLook")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "card1",
    cover: __jsx(OneNewLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
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
        lineNumber: 282,
        columnNumber: 45
      }
    })),
    actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: onClickImageUpload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 45
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UploadOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 49
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
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
      lineNumber: 298,
      columnNumber: 41
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 33
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: "li1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 37
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 57
    }
  }, "\uB370\uC77C\uB9AC\uB8E9 \uC81C\uBAA9")), __jsx("li", {
    className: "li2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
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
      lineNumber: 305,
      columnNumber: 57
    }
  })))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "card2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "button1",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 37
    }
  }, "Information"), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 29
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 29
    }
  }, "\uBD84\uB958"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 29
    }
  }, "\uBE0C\uB79C\uB4DC\uBA85"))), __jsx("tbody", {
    className: "tbody1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC0C1\uC758",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
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
      lineNumber: 324,
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
      lineNumber: 330,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uD558\uC758",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
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
      lineNumber: 337,
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
      lineNumber: 343,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC6D0\uD53C\uC2A4",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
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
      lineNumber: 350,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: dress,
    onChange: onChangeDress,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC544\uC6B0\uD130",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
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
      lineNumber: 363,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: outer,
    onChange: onChangeOuter,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC2E0\uBC1C",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
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
      lineNumber: 376,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: shoes,
    onChange: onChangeShoes,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uD328\uC158\uC7A1\uD654",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
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
      lineNumber: 389,
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
      lineNumber: 395,
      columnNumber: 37
    }
  }))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "card3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "button2",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
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
      lineNumber: 405,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "button3",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 25
    }
  }, "\uB370\uC77C\uB9AC\uB8E9 \uB4F1\uB85D\uD558\uAE30"))), __jsx("div", {
    className: "div1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    style: {},
    autoplay: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 33
    }
  }, mainPosts[0] === undefined ? __jsx(NullImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 69
    }
  }) : __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 88
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$ = mainPosts[0]) === null || _mainPosts$ === void 0 ? void 0 : (_mainPosts$$Images$ = _mainPosts$.Images[0]) === null || _mainPosts$$Images$ === void 0 ? void 0 : _mainPosts$$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 101
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 33
    }
  }, mainPosts[1] === undefined ? __jsx(NullImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 69
    }
  }) : __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 89
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$2 = mainPosts[1]) === null || _mainPosts$2 === void 0 ? void 0 : (_mainPosts$2$Images$ = _mainPosts$2.Images[0]) === null || _mainPosts$2$Images$ === void 0 ? void 0 : _mainPosts$2$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 102
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 33
    }
  }, mainPosts[2] === undefined ? __jsx(NullImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 69
    }
  }) : __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 90
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$3 = mainPosts[2]) === null || _mainPosts$3 === void 0 ? void 0 : (_mainPosts$3$Images$ = _mainPosts$3.Images[0]) === null || _mainPosts$3$Images$ === void 0 ? void 0 : _mainPosts$3$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 103
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 33
    }
  }, mainPosts[3] === undefined ? __jsx(NullImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 69
    }
  }) : __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 89
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$4 = mainPosts[3]) === null || _mainPosts$4 === void 0 ? void 0 : (_mainPosts$4$Images$ = _mainPosts$4.Images[0]) === null || _mainPosts$4$Images$ === void 0 ? void 0 : _mainPosts$4$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3TG9vay5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIk9wdGlvbiIsIlNlbGVjdCIsIk9uZU5ld0xvb2siLCJzdHlsZWQiLCJkaXYiLCJOZXdMb29rIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VJbnB1dCIsInRvcCIsIm9uQ2hhbmdlVG9wIiwic2V0VG9wIiwiYm90dG9tIiwib25DaGFuZ2VCb3R0b20iLCJzZXRCb3R0b20iLCJkcmVzcyIsIm9uQ2hhbmdlRHJlc3MiLCJzZXREcmVzcyIsInNob2VzIiwib25DaGFuZ2VTaG9lcyIsInNldFNob2VzIiwiYWNjIiwib25DaGFuZ2VBY2MiLCJzZXRBY2MiLCJvdXRlciIsIm9uQ2hhbmdlT3V0ZXIiLCJzZXRPdXRlciIsImxvb2tOYW1lIiwib25DaGFuZ2VMb29rTmFtZSIsInNldExvb2tOYW1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJtYWluUG9zdHMiLCJuZXdMb29rS2V5d29yZHMiLCJ1c2VTdGF0ZSIsInByZXZpZXdJbWciLCJzZXRQcmV2aWV3SW1nIiwid29yZHMiLCJtYXAiLCJpdGVtcyIsInZhbHVlIiwibmFtZSIsImNvbnRlbnQiLCJvbkNoYW5nZUNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlRWZmZWN0IiwiUm91dGVyIiwicmVwbGFjZSIsInR5cGUiLCJMT0FEX05FV19QT1NUU19SRVFVRVNUIiwiY29uc29sZSIsImxvZyIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsImZvcm1hdHRlZE1vbnRoIiwiZm9ybWF0dGVkRGF0ZSIsInRvZGF5RGF0ZVN0cmluZyIsInNlbGVjdFRvcCIsInVzZUNhbGxiYWNrIiwic2VsZWN0Qm90dG9tIiwic2VsZWN0RHJlc3MiLCJzZWxlY3RTaG9lcyIsInNlbGVjdE91dGVyIiwic2VsZWN0QWNjIiwib25TdWJtaXQiLCJhbGVydCIsInRyaW0iLCJsZW5ndGgiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsInAiLCJhcHBlbmQiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJwcmV2aWV3SW1nVXJsIiwicmVzdWx0IiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwiTnVsbEltYWdlIiwiZmFOb3RlU3RpY2t5Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJ1bmRlZmluZWQiLCJJbWFnZXMiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDMkQ7QUFDekM7QUFDbkI7QUFDUTtBQUNVO0FBQ3hCO0FBQ3FIO0FBQ2xJO0FBQ1k7QUFDUDtBQUM4QjtBQUNJO0FBQ25FLElBQVFBLElBQUksR0FBS0MseUNBQUksQ0FBYkQsSUFBSTtBQUNaLElBQVFFLE1BQU0sR0FBS0MsMkNBQU0sQ0FBakJELE1BQU07QUFDeUI7QUFFdkMsSUFBTUUsVUFBVSxHQUFHQywwREFBTSxDQUFDQyxHQUFHO0VBQUE7RUFBQTtBQUFBLDRwQkFzRjVCO0FBQUMsS0F0RklGLFVBQVU7QUF3RmhCLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQVM7RUFBQTtFQUFBO0VBRWxCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUU5QixJQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQUU7RUFFM0IsZ0JBQW1DQywrREFBUSxDQUFD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TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQUssRUFDaEU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJLE1BQUMsaURBQVk7SUFDYixFQUFFLEVBQUMsT0FBTztJQUNWLHdCQUF3QixFQUFFLEdBQUk7SUFDOUIsT0FBTyxFQUFFMkIsS0FBTTtJQUNmLFFBQVEsRUFBRTZCLFdBQVk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUVsQixNQUFDLDBDQUFLO0lBQUMsS0FBSyxFQUFFdEQsS0FBTTtJQUFDLFFBQVEsRUFBRUMsYUFBYztJQUFDLElBQUksRUFBQyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUNqRCxDQUNkLENBQ0EsRUFDTDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0E7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxRQUFLLE1BQUMsMENBQUs7SUFBQyxRQUFRO0lBQUUsWUFBWSxFQUFDLG9CQUFLO0lBQUMsU0FBUyxFQUFDLEtBQUs7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQUssRUFDaEU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNJLE1BQUMsaURBQVk7SUFDYixFQUFFLEVBQUMsT0FBTztJQUNWLHdCQUF3QixFQUFFLEdBQUk7SUFDOUIsT0FBTyxFQUFFd0IsS0FBTTtJQUNmLFFBQVEsRUFBRStCLFdBQVk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUVsQixNQUFDLDBDQUFLO0lBQUMsS0FBSyxFQUFFL0MsS0FBTTtJQUFDLFFBQVEsRUFBRUMsYUFBYztJQUFDLElBQUksRUFBQyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUNqRCxDQUNkLENBQ0EsRUFDTDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0E7SUFB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O0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDTTVFLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSzBFLFNBQVMsR0FBSSxNQUFDLFNBQVM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEdBQU8sTUFBQyxVQUFVO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsUUFBRTtJQUFLLFNBQVMsRUFBQyxNQUFNO0lBQUMsR0FBRyxrREFBNEIxRSxTQUFTLENBQUMsQ0FBQyxDQUFDLHlFQUFaLGFBQWMyRSxNQUFNLENBQUMsQ0FBQyxDQUFDLHlEQUF2QixxQkFBeUJDLEdBQUcsQ0FBRztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUksQ0FBYSxDQUNwSyxDQUNDLENBQ1QsQ0FFUixDQUNHLENBQ0w7QUFFcEIsQ0FBQztBQUFDLEdBelZJNUcsT0FBTztFQUFBLFFBRVFFLHVEQUFXLEVBSU9HLHVEQUFRLEVBQ0NBLHVEQUFRLEVBQ1hBLHVEQUFRLEVBQ1JBLHVEQUFRLEVBQ2RBLHVEQUFRLEVBQ0ZBLHVEQUFRLEVBQ0NBLHVEQUFRLEVBRUlzQix1REFBVyxFQU14QnRCLHVEQUFRO0FBQUE7QUFBQSxNQXBCdkRMLE9BQU87QUE4VkVBLHNFQUFPLEVBQUM7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3TG9vay5iYzYyZWU3MjgwNmI5ZjZkZjkwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHsgQXV0b0NvbXBsZXRlLCBCdXR0b24sIENhcmQsIENhcm91c2VsLCBDb2wsIEZvcm0sIElucHV0LCBSb3csIFNlbGVjdCwgU3BhY2UsIFVwbG9hZCAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRWRpdE91dGxpbmVkLCBVcGxvYWRPdXRsaW5lZCAgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiYW50ZC9saWIvaW5wdXQvVGV4dEFyZWFcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNULCBMT0FEX05FV19QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1JFUVVFU1QsIE5FV0xPT0tfS0VZV09SRF9SRVFVRVNULCBSRU1PVkVfSU1BR0UsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFOb3RlU3RpY2t5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IE9uZU5ld0xvb2sgPSBzdHlsZWQuZGl2YFxyXG5cclxuICAgIC5oMi0xe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2MDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wxe1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkMXtcclxuICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQ0e1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDYzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWcxe1xyXG4gICAgICAgIGhlaWdodDogNTI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWcye1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDYzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saTF7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5saTJ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24xe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24ye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uM3tcclxuICAgICAgICBsZWZ0OiAzNCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAudGJvZHkxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGQxe1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdjF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDczMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXYye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBOZXdMb29rID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW3RvcCwgb25DaGFuZ2VUb3AgLHNldFRvcF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbYm90dG9tLCBvbkNoYW5nZUJvdHRvbSAsc2V0Qm90dG9tXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtkcmVzcywgb25DaGFuZ2VEcmVzcyAsc2V0RHJlc3NdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW3Nob2VzLCBvbkNoYW5nZVNob2VzICxzZXRTaG9lc10gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbYWNjLCBvbkNoYW5nZUFjYyAsc2V0QWNjXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtvdXRlciwgb25DaGFuZ2VPdXRlciAsc2V0T3V0ZXJdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW2xvb2tOYW1lLCBvbkNoYW5nZUxvb2tOYW1lICxzZXRMb29rTmFtZV0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgY29uc3Qge2ltYWdlUGF0aHMsIGFkZFBvc3REb25lLCBtYWluUG9zdHMsIG5ld0xvb2tLZXl3b3Jkc30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICAgIGNvbnN0IFtwcmV2aWV3SW1nLCBzZXRQcmV2aWV3SW1nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHdvcmRzID0gbmV3TG9va0tleXdvcmRzPy5tYXAoaXRlbXMgPT4gKHt2YWx1ZTogaXRlbXMubmFtZX0pKTtcclxuXHJcbiAgICBjb25zdCBbIGNvbnRlbnQsIG9uQ2hhbmdlQ29udGVudCwgc2V0Q29udGVudCBdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGFkZFBvc3REb25lID09PSB0cnVlKXtcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTkVXX1BPU1RTX1JFUVVFU1RcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIuuplOyduO2PrOyKpO2KuDogXCIsIG1haW5Qb3N0cyk7XHJcblxyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7IC8vIOuFhOuPhFxyXG4gICAgY29uc3QgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTsgLy8g7JuUXHJcbiAgICBjb25zdCBkYXRlID0gdG9kYXkuZ2V0RGF0ZSgpOyAvLyDrgqDsp5xcclxuICAgIFxyXG4gICAgLy8g7JuULCDrgqDsp5zqsIAgMTDrs7Tri6Qg7J6R7Jy866m0IOyVnuyXkCAw7J2EIOu2meyXrOyjvOq4sFxyXG4gICAgY29uc3QgZm9ybWF0dGVkTW9udGggPSBtb250aCA8IDEwID8gYDAke21vbnRofWAgOiBtb250aDtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkYXRlIDwgMTAgPyBgMCR7ZGF0ZX1gIDogZGF0ZTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9kYXlEYXRlU3RyaW5nID0gYCR7eWVhcn0tJHtmb3JtYXR0ZWRNb250aH0tJHtmb3JtYXR0ZWREYXRlfWA7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0VG9wID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VG9wKHZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0Qm90dG9tID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0Qm90dG9tKHZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0RHJlc3MgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgICAgICBzZXREcmVzcyh2YWx1ZSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdFNob2VzID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvZXModmFsdWUpXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RPdXRlciA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldE91dGVyKHZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0QWNjID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0QWNjKHZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/qsozsi5zquIAg7JeF66Gc65OcIOyalOyyrVxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKCF0b3AgJiYgIWJvdHRvbSAmJiAhZHJlc3MgJiYgIXNob2VzICYmICFhY2MgJiYgIW91dGVyKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfri6TshK/qsIDsp4Ag7ZWt66qpIOykkSDtlZjrgpgg7J207IOB7J2AIOu4jOuenOuTnOuqheydhCDsnpHshLHtlbTslbwg7ZW07JqULicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZighY29udGVudCB8fCAhY29udGVudC50cmltKCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+yYpOuKmOydmCBMb29r7JeQIOuMgO2VnCDrgrTsmqnsnYQg7J6R7ISx7ZWY7IS47JqULicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpbWFnZVBhdGhzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn7Jik64qY7J2YIExvb2vsl5Ag7ZWE7JqU7ZWcIOyCrOynhOydhCDsl4XroZzrk5wg7ZW07KO87IS47JqULicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZighbG9va05hbWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+yYpOuKmOydmCBMb29r7J2YIOydtOumhOydhCDsnpHshLHtlZjshLjsmpQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBpbWFnZVBhdGhzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIGNvbnRlbnQpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9wJywgdG9wKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2JvdHRvbScsIGJvdHRvbSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkcmVzcycsIGRyZXNzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Nob2VzJywgc2hvZXMpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYWNjJywgYWNjKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ291dGVyJywgb3V0ZXIpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbG9va05hbWUnLCBsb29rTmFtZSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0b2RheScsIHRvZGF5RGF0ZVN0cmluZyk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgfSk7XHJcbiAgICB9LFtjb250ZW50LCBpbWFnZVBhdGhzXSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gICAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuXHJcbi8v7J2066+47KeAIOuzgOqyvSwg7J2066+47KeAIOuvuOumrOuztOq4sFxyXG5jb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZikgPT4ge1xyXG4gICAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICBpZihlLnRhcmdldC5maWxlc1swXSl7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByZXZpZXdJbWdVcmwgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICBpZihwcmV2aWV3SW1nVXJsKXtcclxuICAgICAgICBzZXRQcmV2aWV3SW1nKHByZXZpZXdJbWdVcmwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhXHJcbiAgICB9KTtcclxufSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgICAgICAgIGRhdGE6IGluZGV4XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3QgTnVsbEltYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPE9uZU5ld0xvb2s+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQ0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtmYU5vdGVTdGlja3l9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9ezE1MH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPuyVhOyngSDstZzsi6Ag6rKM7Iuc6riA7J20IOunjuydtCDsl4bslrTsmpQhPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvT25lTmV3TG9vaz5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcExheW91dCA+XHJcbiAgICAgICAgICAgIDxPbmVOZXdMb29rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAxMTIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PjxoMT5OZXcgRGFpbHlMb29rPC9oMT4gPGgyIGNsYXNzTmFtZT1cImgyLTFcIj5SZWNlbnQgRGFpbHlMb29rPC9oMj48L1Jvdz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPbmVOZXdMb29rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWcgPyBwcmV2aWV3SW1nIDogJ2h0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL2lkLzkwMDU3NTk1OC92ZWN0b3IvZHJlc3NtYWtlci1tb2RlbC12ZWN0b3ItaWNvbi5qcGc/cz02MTJ4NjEyJnc9MCZrPTIwJmM9N3JucVZDM2M3SXFpV0ZyUmtXUEFaMzRoLU5Bcy1wa2RzREdSNUhZSXY5ND0nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW1hZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZzEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09uZU5ld0xvb2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZE91dGxpbmVkIGtleT1cImVkaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbWFnZVwiIHR5cGU9XCJmaWxlXCIgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaTFcIj48aDMgPuuNsOydvOumrOujqSDsoJzrqqk8L2gzPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaTJcIj48SW5wdXQgdmFsdWU9e2xvb2tOYW1lfSBvbkNoYW5nZT17b25DaGFuZ2VMb29rTmFtZX0gc2hvd0NvdW50IG1heExlbmd0aD17MjB9IC8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbjFcIiBibG9jayA+SW5mb3JtYXRpb248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7rtoTrpZg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuu4jOuenOuTnOuqhTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJ0Ym9keTFcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7IOB7J2YXCIgY2xhc3NOYW1lPVwidGQxXCIvPjwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt3b3Jkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0VG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwidG9wXCIgdmFsdWU9e3RvcH0gb25DaGFuZ2U9e29uQ2hhbmdlVG9wfSBuYW1lPVwidG9wXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gPElucHV0IGRpc2FibGVkICBkZWZhdWx0VmFsdWU9XCLtlZjsnZhcIiBjbGFzc05hbWU9XCJ0ZDFcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3dvcmRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RCb3R0b219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJib3R0b21cIiB2YWx1ZT17Ym90dG9tfSBvbkNoYW5nZT17b25DaGFuZ2VCb3R0b219IG5hbWU9XCJib3R0b21cIiB0eXBlPVwidGV4dFwiICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gPElucHV0IGRpc2FibGVkICBkZWZhdWx0VmFsdWU9XCLsm5DtlLzsiqRcIiBjbGFzc05hbWU9XCJ0ZDFcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17d29yZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdERyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXtkcmVzc30gb25DaGFuZ2U9e29uQ2hhbmdlRHJlc3N9IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gPElucHV0IGRpc2FibGVkICBkZWZhdWx0VmFsdWU9XCLslYTsmrDthLBcIiBjbGFzc05hbWU9XCJ0ZDFcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17d29yZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdE91dGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXtvdXRlcn0gb25DaGFuZ2U9e29uQ2hhbmdlT3V0ZXJ9IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F1dG9Db21wbGV0ZT4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7Iug67CcXCIgY2xhc3NOYW1lPVwidGQxXCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2hvZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3dvcmRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RTaG9lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17c2hvZXN9IG9uQ2hhbmdlPXtvbkNoYW5nZVNob2VzfSAgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIu2MqOyFmOyeoe2ZlFwiIGNsYXNzTmFtZT1cInRkMVwiIC8+PC90ZD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY2NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3dvcmRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RBY2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJhY2NcIiB2YWx1ZT17YWNjfSBvbkNoYW5nZT17b25DaGFuZ2VBY2N9ICB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJjYXJkM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbjJcIiBibG9jayA+RGFpbHkgUmVjb3JkIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezI1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuNsOydvOumrOujqSDrk7HroZ3tlZjquLBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+ICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDqsIDsnqUg7LWc6re8IOuNsOydvOumrOujqSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBzdHlsZT17e319IGF1dG9wbGF5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWFpblBvc3RzWzBdID09PSB1bmRlZmluZWQgPyAgPE51bGxJbWFnZSAvPiAgIDogIDxPbmVOZXdMb29rPiA8aW1nIGNsYXNzTmFtZT1cImltZzJcIiBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHttYWluUG9zdHNbMF0/LkltYWdlc1swXT8uc3JjfWB9IC8+PC9PbmVOZXdMb29rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtYWluUG9zdHNbMV0gPT09IHVuZGVmaW5lZCA/ICA8TnVsbEltYWdlIC8+ICAgOiAgIDxPbmVOZXdMb29rPiA8aW1nIGNsYXNzTmFtZT1cImltZzJcIiBzcmM9eyBgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7bWFpblBvc3RzWzFdPy5JbWFnZXNbMF0/LnNyY31gfSAvPjwvT25lTmV3TG9vaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWFpblBvc3RzWzJdID09PSB1bmRlZmluZWQgPyAgPE51bGxJbWFnZSAvPiAgIDogICAgPE9uZU5ld0xvb2s+IDxpbWcgY2xhc3NOYW1lPVwiaW1nMlwiIHNyYz17IGBodHRwOi8vbG9jYWxob3N0OjMwNjUvJHttYWluUG9zdHNbMl0/LkltYWdlc1swXT8uc3JjfWB9IC8+PC9PbmVOZXdMb29rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtYWluUG9zdHNbM10gPT09IHVuZGVmaW5lZCA/ICA8TnVsbEltYWdlIC8+ICAgOiAgIDxPbmVOZXdMb29rPiA8aW1nIGNsYXNzTmFtZT1cImltZzJcIiBzcmM9eyBgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7bWFpblBvc3RzWzNdPy5JbWFnZXNbMF0/LnNyY31gfSAgLz48L09uZU5ld0xvb2s+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvT25lTmV3TG9vaz5cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdMb29rOyJdLCJzb3VyY2VSb290IjoiIn0=