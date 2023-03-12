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
  console.log("뉴룩: ", newLookKeywords);
  var _useInput15 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput15, 3),
    content = _useInput16[0],
    onChangeContent = _useInput16[1],
    setContent = _useInput16[2];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (addPostDone === true) {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
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
    if (!content || !content.trim()) {
      return alert('게시글을 작성하세요.');
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
        lineNumber: 245,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: "card4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "div2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 17
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faNoteSticky"],
      fontSize: 150,
      style: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 21
      }
    }), __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 21
      }
    }, "\uC544\uC9C1 \uCD5C\uC2E0 \uAC8C\uC2DC\uAE00\uC774 \uB9CE\uC774 \uC5C6\uC5B4\uC694!"))));
  };
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 9
    }
  }, __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      width: 1120
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 29
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 34
    }
  }, "New DailyLook"), " ", __jsx("h2", {
    className: "h2-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 57
    }
  }, "Recent DailyLook")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "card1",
    cover: __jsx(OneNewLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
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
        lineNumber: 273,
        columnNumber: 45
      }
    })),
    actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: onClickImageUpload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 45
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UploadOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 49
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
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
      lineNumber: 289,
      columnNumber: 41
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 33
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: "li1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 37
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 57
    }
  }, "\uB370\uC77C\uB9AC\uB8E9 \uC81C\uBAA9")), __jsx("li", {
    className: "li2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
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
      lineNumber: 296,
      columnNumber: 57
    }
  })))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "card2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "button1",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 37
    }
  }, "Information"), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 29
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 29
    }
  }, "\uBD84\uB958"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 29
    }
  }, "\uBE0C\uB79C\uB4DC\uBA85"))), __jsx("tbody", {
    className: "tbody1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC0C1\uC758",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
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
      lineNumber: 315,
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
      lineNumber: 321,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uD558\uC758",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
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
      lineNumber: 328,
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
      lineNumber: 334,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC6D0\uD53C\uC2A4",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
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
      lineNumber: 341,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: dress,
    onChange: onChangeDress,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC544\uC6B0\uD130",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
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
      lineNumber: 354,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: outer,
    onChange: onChangeOuter,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uC2E0\uBC1C",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
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
      lineNumber: 367,
      columnNumber: 33
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: shoes,
    onChange: onChangeShoes,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 37
    }
  })))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 29
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 29
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    disabled: true,
    defaultValue: "\uD328\uC158\uC7A1\uD654",
    className: "td1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 34
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
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
      lineNumber: 380,
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
      lineNumber: 386,
      columnNumber: 37
    }
  }))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "card3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "button2",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
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
      lineNumber: 396,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "button3",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 25
    }
  }, "\uB370\uC77C\uB9AC\uB8E9 \uB4F1\uB85D\uD558\uAE30"))), __jsx("div", {
    className: "div1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    style: {},
    autoplay: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 33
    }
  }, mainPosts[0] === undefined ? __jsx(NullImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 69
    }
  }) : __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 88
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$ = mainPosts[0]) === null || _mainPosts$ === void 0 ? void 0 : (_mainPosts$$Images$ = _mainPosts$.Images[0]) === null || _mainPosts$$Images$ === void 0 ? void 0 : _mainPosts$$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 101
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 33
    }
  }, mainPosts[1] === undefined ? __jsx(NullImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 69
    }
  }) : __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 89
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$2 = mainPosts[1]) === null || _mainPosts$2 === void 0 ? void 0 : (_mainPosts$2$Images$ = _mainPosts$2.Images[0]) === null || _mainPosts$2$Images$ === void 0 ? void 0 : _mainPosts$2$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 102
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 33
    }
  }, mainPosts[2] === undefined ? __jsx(NullImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 69
    }
  }) : __jsx(OneNewLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 90
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$3 = mainPosts[2]) === null || _mainPosts$3 === void 0 ? void 0 : (_mainPosts$3$Images$ = _mainPosts$3.Images[0]) === null || _mainPosts$3$Images$ === void 0 ? void 0 : _mainPosts$3$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 103
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 33
    }
  }, mainPosts[3] === undefined ? __jsx(NullImage, {
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
      columnNumber: 89
    }
  }, " ", __jsx("img", {
    className: "img2",
    src: "http://localhost:3065/".concat((_mainPosts$4 = mainPosts[3]) === null || _mainPosts$4 === void 0 ? void 0 : (_mainPosts$4$Images$ = _mainPosts$4.Images[0]) === null || _mainPosts$4$Images$ === void 0 ? void 0 : _mainPosts$4$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3TG9vay5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIk9wdGlvbiIsIlNlbGVjdCIsIk9uZU5ld0xvb2siLCJzdHlsZWQiLCJkaXYiLCJOZXdMb29rIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VJbnB1dCIsInRvcCIsIm9uQ2hhbmdlVG9wIiwic2V0VG9wIiwiYm90dG9tIiwib25DaGFuZ2VCb3R0b20iLCJzZXRCb3R0b20iLCJkcmVzcyIsIm9uQ2hhbmdlRHJlc3MiLCJzZXREcmVzcyIsInNob2VzIiwib25DaGFuZ2VTaG9lcyIsInNldFNob2VzIiwiYWNjIiwib25DaGFuZ2VBY2MiLCJzZXRBY2MiLCJvdXRlciIsIm9uQ2hhbmdlT3V0ZXIiLCJzZXRPdXRlciIsImxvb2tOYW1lIiwib25DaGFuZ2VMb29rTmFtZSIsInNldExvb2tOYW1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJtYWluUG9zdHMiLCJuZXdMb29rS2V5d29yZHMiLCJ1c2VTdGF0ZSIsInByZXZpZXdJbWciLCJzZXRQcmV2aWV3SW1nIiwid29yZHMiLCJtYXAiLCJpdGVtcyIsInZhbHVlIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50Iiwib25DaGFuZ2VDb250ZW50Iiwic2V0Q29udGVudCIsInVzZUVmZmVjdCIsIlJvdXRlciIsInB1c2giLCJ0eXBlIiwiTE9BRF9ORVdfUE9TVFNfUkVRVUVTVCIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsImZvcm1hdHRlZE1vbnRoIiwiZm9ybWF0dGVkRGF0ZSIsInRvZGF5RGF0ZVN0cmluZyIsInNlbGVjdFRvcCIsInVzZUNhbGxiYWNrIiwic2VsZWN0Qm90dG9tIiwic2VsZWN0RHJlc3MiLCJzZWxlY3RTaG9lcyIsInNlbGVjdE91dGVyIiwic2VsZWN0QWNjIiwib25TdWJtaXQiLCJ0cmltIiwiYWxlcnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsInAiLCJhcHBlbmQiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJwcmV2aWV3SW1nVXJsIiwicmVzdWx0IiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwiTnVsbEltYWdlIiwiZmFOb3RlU3RpY2t5Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJ1bmRlZmluZWQiLCJJbWFnZXMiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDMkQ7QUFDekM7QUFDbkI7QUFDUTtBQUNVO0FBQ3hCO0FBQ3FIO0FBQ2xJO0FBQ1k7QUFDUDtBQUM4QjtBQUNJO0FBQ25FLElBQVFBLElBQUksR0FBS0MseUNBQUksQ0FBYkQsSUFBSTtBQUNaLElBQVFFLE1BQU0sR0FBS0MsMkNBQU0sQ0FBakJELE1BQU07QUFDeUI7QUFFdkMsSUFBTUUsVUFBVSxHQUFHQywwREFBTSxDQUFDQyxHQUFHO0VBQUE7RUFBQTtBQUFBLDRwQkFzRjVCO0FBQUMsS0F0RklGLFVBQVU7QUF3RmhCLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQVM7RUFBQTtFQUFBO0VBRWxCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUU5QixJQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQUU7RUFFM0IsZ0JBQW1DQywrREFBUSxDQUFDLEVBQUUsQ0FBQztJ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QyxDQUFDLENBQUMseURBQXZCLHFCQUF5QkMsR0FBRyxDQUFHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBSSxDQUFhLENBQ3BLLENBQ0MsQ0FDVCxDQUVSLENBQ0csQ0FDTDtBQUVwQixDQUFDO0FBQUMsR0FoVkkzRyxPQUFPO0VBQUEsUUFFUUUsdURBQVcsRUFJT0csdURBQVEsRUFDQ0EsdURBQVEsRUFDWEEsdURBQVEsRUFDUkEsdURBQVEsRUFDZEEsdURBQVEsRUFDRkEsdURBQVEsRUFDQ0EsdURBQVEsRUFFSXNCLHVEQUFXLEVBUXhCdEIsdURBQVE7QUFBQTtBQUFBLE1BdEJ2REwsT0FBTztBQXFWRUEsc0VBQU8sRUFBQztBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdMb29rLmM1N2M0MjU1MGE0NDc5MzRkYmRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgeyBBdXRvQ29tcGxldGUsIEJ1dHRvbiwgQ2FyZCwgQ2Fyb3VzZWwsIENvbCwgRm9ybSwgSW5wdXQsIFJvdywgU2VsZWN0LCBTcGFjZSwgVXBsb2FkICB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBFZGl0T3V0bGluZWQsIFVwbG9hZE91dGxpbmVkICB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gXCJhbnRkL2xpYi9pbnB1dC9UZXh0QXJlYVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QsIExPQURfTkVXX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVFNfUkVRVUVTVCwgTkVXTE9PS19LRVlXT1JEX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSwgVVBMT0FEX0lNQUdFU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL2xvZ2luXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYU5vdGVTdGlja3kgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgT25lTmV3TG9vayA9IHN0eWxlZC5kaXZgXHJcblxyXG4gICAgLmgyLTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbDF7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQxe1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZDN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDR7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZzF7XHJcbiAgICAgICAgaGVpZ2h0OiA1MjhweDtcclxuICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZzJ7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpMXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpMntcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbjF7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbjJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24ze1xyXG4gICAgICAgIGxlZnQ6IDM0JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC50Ym9keTF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZDF7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2MXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNzMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdjJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IE5ld0xvb2sgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBbdG9wLCBvbkNoYW5nZVRvcCAsc2V0VG9wXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtib3R0b20sIG9uQ2hhbmdlQm90dG9tICxzZXRCb3R0b21dID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW2RyZXNzLCBvbkNoYW5nZURyZXNzICxzZXREcmVzc10gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbc2hvZXMsIG9uQ2hhbmdlU2hvZXMgLHNldFNob2VzXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFthY2MsIG9uQ2hhbmdlQWNjICxzZXRBY2NdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW291dGVyLCBvbkNoYW5nZU91dGVyICxzZXRPdXRlcl0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbbG9va05hbWUsIG9uQ2hhbmdlTG9va05hbWUgLHNldExvb2tOYW1lXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgICBjb25zdCB7aW1hZ2VQYXRocywgYWRkUG9zdERvbmUsIG1haW5Qb3N0cywgbmV3TG9va0tleXdvcmRzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgY29uc3QgW3ByZXZpZXdJbWcsIHNldFByZXZpZXdJbWddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3Qgd29yZHMgPSBuZXdMb29rS2V5d29yZHM/Lm1hcChpdGVtcyA9PiAoe3ZhbHVlOiBpdGVtcy5uYW1lfSkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwi64m066OpOiBcIiwgbmV3TG9va0tleXdvcmRzKTtcclxuXHJcbiAgICBjb25zdCBbIGNvbnRlbnQsIG9uQ2hhbmdlQ29udGVudCwgc2V0Q29udGVudCBdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGFkZFBvc3REb25lID09PSB0cnVlKXtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTkVXX1BPU1RTX1JFUVVFU1RcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIuuplOyduO2PrOyKpO2KuDogXCIsIG1haW5Qb3N0cyk7XHJcblxyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7IC8vIOuFhOuPhFxyXG4gICAgY29uc3QgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTsgLy8g7JuUXHJcbiAgICBjb25zdCBkYXRlID0gdG9kYXkuZ2V0RGF0ZSgpOyAvLyDrgqDsp5xcclxuICAgIFxyXG4gICAgLy8g7JuULCDrgqDsp5zqsIAgMTDrs7Tri6Qg7J6R7Jy866m0IOyVnuyXkCAw7J2EIOu2meyXrOyjvOq4sFxyXG4gICAgY29uc3QgZm9ybWF0dGVkTW9udGggPSBtb250aCA8IDEwID8gYDAke21vbnRofWAgOiBtb250aDtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkYXRlIDwgMTAgPyBgMCR7ZGF0ZX1gIDogZGF0ZTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9kYXlEYXRlU3RyaW5nID0gYCR7eWVhcn0tJHtmb3JtYXR0ZWRNb250aH0tJHtmb3JtYXR0ZWREYXRlfWA7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0VG9wID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VG9wKHZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0Qm90dG9tID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0Qm90dG9tKHZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0RHJlc3MgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgICAgICBzZXREcmVzcyh2YWx1ZSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdFNob2VzID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvZXModmFsdWUpXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RPdXRlciA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldE91dGVyKHZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0QWNjID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0QWNjKHZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/qsozsi5zquIAg7JeF66Gc65OcIOyalOyyrVxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIWNvbnRlbnQgfHwgIWNvbnRlbnQudHJpbSgpKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULicpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCBjb250ZW50KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RvcCcsIHRvcCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdib3R0b20nLCBib3R0b20pO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZHJlc3MnLCBkcmVzcyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzaG9lcycsIHNob2VzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FjYycsIGFjYyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdvdXRlcicsIG91dGVyKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2xvb2tOYW1lJywgbG9va05hbWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9kYXknLCB0b2RheURhdGVTdHJpbmcpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgIH0pO1xyXG4gICAgfSxbY29udGVudCwgaW1hZ2VQYXRoc10pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcblxyXG4vL+ydtOuvuOyngCDrs4Dqsr0sIOydtOuvuOyngCDrr7jrpqzrs7TquLBcclxuY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2ltYWdlcycsIGUudGFyZ2V0LmZpbGVzKTtcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgaWYoZS50YXJnZXQuZmlsZXNbMF0pe1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcmV2aWV3SW1nVXJsID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgaWYocHJldmlld0ltZ1VybCl7XHJcbiAgICAgICAgc2V0UHJldmlld0ltZyhwcmV2aWV3SW1nVXJsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YVxyXG4gICAgfSk7XHJcbn0pO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICAgICAgICBkYXRhOiBpbmRleFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNvbnN0IE51bGxJbWFnZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxPbmVOZXdMb29rPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkNFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFOb3RlU3RpY2t5fVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsxNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj7slYTsp4Eg7LWc7IugIOqyjOyLnOq4gOydtCDrp47snbQg7JeG7Ja07JqUITwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L09uZU5ld0xvb2s+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBcHBMYXlvdXQgPlxyXG4gICAgICAgICAgICA8T25lTmV3TG9vaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogMTEyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz48aDE+TmV3IERhaWx5TG9vazwvaDE+IDxoMiBjbGFzc05hbWU9XCJoMi0xXCI+UmVjZW50IERhaWx5TG9vazwvaDI+PC9Sb3c+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb2wxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T25lTmV3TG9vaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1nID8gcHJldmlld0ltZyA6ICdodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC85MDA1NzU5NTgvdmVjdG9yL2RyZXNzbWFrZXItbW9kZWwtdmVjdG9yLWljb24uanBnP3M9NjEyeDYxMiZ3PTAmaz0yMCZjPTdybnFWQzNjN0lxaVdGclJrV1BBWjM0aC1OQXMtcGtkc0RHUjVIWUl2OTQ9J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2ltYWdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWcxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PbmVOZXdMb29rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW1hZ2VcIiB0eXBlPVwiZmlsZVwiIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb2wxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGkxXCI+PGgzID7rjbDsnbzrpqzro6kg7KCc66qpPC9oMz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGkyXCI+PElucHV0IHZhbHVlPXtsb29rTmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTG9va05hbWV9IHNob3dDb3VudCBtYXhMZW5ndGg9ezIwfSAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24xXCIgYmxvY2sgPkluZm9ybWF0aW9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+67aE66WYPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ruIzrnpzrk5zrqoU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwidGJvZHkxXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuyDgeydmFwiIGNsYXNzTmFtZT1cInRkMVwiLz48L3RkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9Db21wbGV0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17d29yZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdFRvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cInRvcFwiIHZhbHVlPXt0b3B9IG9uQ2hhbmdlPXtvbkNoYW5nZVRvcH0gbmFtZT1cInRvcFwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7ZWY7J2YXCIgY2xhc3NOYW1lPVwidGQxXCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt3b3Jkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0Qm90dG9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwiYm90dG9tXCIgdmFsdWU9e2JvdHRvbX0gb25DaGFuZ2U9e29uQ2hhbmdlQm90dG9tfSBuYW1lPVwiYm90dG9tXCIgdHlwZT1cInRleHRcIiAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7JuQ7ZS87IqkXCIgY2xhc3NOYW1lPVwidGQxXCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3dvcmRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3REcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17ZHJlc3N9IG9uQ2hhbmdlPXtvbkNoYW5nZURyZXNzfSB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7JWE7Jqw7YSwXCIgY2xhc3NOYW1lPVwidGQxXCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3V0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3dvcmRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RPdXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17b3V0ZXJ9IG9uQ2hhbmdlPXtvbkNoYW5nZU91dGVyfSB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuyLoOuwnFwiIGNsYXNzTmFtZT1cInRkMVwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9Db21wbGV0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNob2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt3b3Jkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0U2hvZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3Nob2VzfSBvbkNoYW5nZT17b25DaGFuZ2VTaG9lc30gIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gPElucHV0IGRpc2FibGVkICBkZWZhdWx0VmFsdWU9XCLtjKjshZjsnqHtmZRcIiBjbGFzc05hbWU9XCJ0ZDFcIiAvPjwvdGQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWNjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt3b3Jkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0QWNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwiYWNjXCIgdmFsdWU9e2FjY30gb25DaGFuZ2U9e29uQ2hhbmdlQWNjfSAgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24yXCIgYmxvY2sgPkRhaWx5IFJlY29yZCA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDrjbDsnbzrpqzro6kg65Ox66Gd7ZWY6riwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPiAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog6rCA7J6lIOy1nOq3vCDrjbDsnbzrpqzro6kgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgc3R5bGU9e3t9fSBhdXRvcGxheT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1haW5Qb3N0c1swXSA9PT0gdW5kZWZpbmVkID8gIDxOdWxsSW1hZ2UgLz4gICA6ICA8T25lTmV3TG9vaz4gPGltZyBjbGFzc05hbWU9XCJpbWcyXCIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7bWFpblBvc3RzWzBdPy5JbWFnZXNbMF0/LnNyY31gfSAvPjwvT25lTmV3TG9vaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWFpblBvc3RzWzFdID09PSB1bmRlZmluZWQgPyAgPE51bGxJbWFnZSAvPiAgIDogICA8T25lTmV3TG9vaz4gPGltZyBjbGFzc05hbWU9XCJpbWcyXCIgc3JjPXsgYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke21haW5Qb3N0c1sxXT8uSW1hZ2VzWzBdPy5zcmN9YH0gLz48L09uZU5ld0xvb2s+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1haW5Qb3N0c1syXSA9PT0gdW5kZWZpbmVkID8gIDxOdWxsSW1hZ2UgLz4gICA6ICAgIDxPbmVOZXdMb29rPiA8aW1nIGNsYXNzTmFtZT1cImltZzJcIiBzcmM9eyBgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7bWFpblBvc3RzWzJdPy5JbWFnZXNbMF0/LnNyY31gfSAvPjwvT25lTmV3TG9vaz4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWFpblBvc3RzWzNdID09PSB1bmRlZmluZWQgPyAgPE51bGxJbWFnZSAvPiAgIDogICA8T25lTmV3TG9vaz4gPGltZyBjbGFzc05hbWU9XCJpbWcyXCIgc3JjPXsgYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke21haW5Qb3N0c1szXT8uSW1hZ2VzWzBdPy5zcmN9YH0gIC8+PC9PbmVOZXdMb29rPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L09uZU5ld0xvb2s+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3TG9vazsiXSwic291cmNlUm9vdCI6IiJ9