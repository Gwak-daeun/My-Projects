webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/TextArea */ "./node_modules/antd/lib/input/TextArea.js");
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_newComment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/newComment */ "./components/newComment.js");
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/comments */ "./components/comments.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _components_noComments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/noComments */ "./components/noComments.js");
/* harmony import */ var _css_post_id_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../css/post[id].module.css */ "./pages/css/post[id].module.css");
/* harmony import */ var _css_post_id_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_css_post_id_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _this = undefined,
  _jsxFileName = "C:\\Users\\\uB0B4\uCEF4\\Desktop\\fashionary\\front\\pages\\post\\[id].js",
  _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




















var Meta = antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta;

var OneLook = styled_components__WEBPACK_IMPORTED_MODULE_18__["default"].div.withConfig({
  displayName: "id__OneLook",
  componentId: "sc-74jz14-0"
})([".div1{width:1120px;position:relative;z-index:1;}.div2{width:30px;}.switch1{margin-left:900px;margin-top:36px;}.icon1{position:absolute;z-index:5;font-size:30px;margin-left:200px;margin-top:10px;}.icon2{position:absolute;z-index:5;font-size:30px;margin-left:243px;margin-top:10px;}.icon3{z-index:10;}.img1{margin-left:120px;margin-top:20px;height:330px;}.img2{height:550px;width:100%;}.button1{margin-left:188px;}.button2{background-color:black;color:white;margin-bottom:10px;}.button3{background-color:black;color:white;margin-bottom:10px;}.button4{margin-left:20%;margin-top:5px;background-color:black;color:white;}.button5{margin-left:10%;margin-top:5px;background-color:black;color:white;}.col1{float:left;}.card1{width:280px;z-index:1;}.card2{margin-left:15px;width:400px;}.card3{margin-top:24px;margin-left:15px;width:400px;height:245px;}.li1{display:inline-block;}.li2{display:inline-block;margin-left:10px;}.body1{text-align:center;}.input1{color:black;text-align:center;}.textArea1{height:110px;resize:none;margin-top:20px;}"]);
_c = OneLook;
var Post = function Post() {
  _s();
  var _singlePost$Images$, _singlePost$Images$2;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var id = router.query.id;
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me;
  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
      return state.post;
    }),
    imagePaths = _useSelector2.imagePaths,
    singlePost = _useSelector2.singlePost,
    retweetError = _useSelector2.retweetError,
    retweetDone = _useSelector2.retweetDone,
    updatePostDone = _useSelector2.updatePostDone;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
    read = _useState[0],
    setRead = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
    previewImg = _useState2[0],
    setPreviewImg = _useState2[1];
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_17__["default"])(''),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
    rtConent = _useInput2[0],
    onChangeRtContent = _useInput2[1],
    setRtContent = _useInput2[2];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    //로그인 아이디와 게시글 아이디가 같으면 수정, 삭제 활성화
    if (me.id === singlePost.UserId) {
      setRead(false);
    }
    if (updatePostDone === true) {
      window.alert('Look 수정 완료.');
    }
    if (retweetError) {
      window.alert(retweetError);
    }
    if (retweetDone === true) {
      window.alert('인용 완료!');
    }
  }, [me && me.id, singlePost, updatePostDone, retweetError, retweetDone]);
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(singlePost.content),
    content = _useState3[0],
    setContent = _useState3[1];
  var onChangeContent = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var contentValue = e.target.value;
    setContent(contentValue);
  }, []);
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(singlePost.top),
    top = _useState4[0],
    setTop = _useState4[1];
  var onChangeTop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var topValue = e.target.value;
    setTop(topValue);
  }, []);
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(singlePost.bottom),
    bottom = _useState5[0],
    setBottom = _useState5[1];
  var onChangeBottom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var bottomValue = e.target.value;
    setBottom(bottomValue);
  }, []);
  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(singlePost.dress),
    dress = _useState6[0],
    setDress = _useState6[1];
  var onChangeDress = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var dressValue = e.target.value;
    setDress(dressValue);
  }, []);
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(singlePost.shoes),
    shoes = _useState7[0],
    setShoes = _useState7[1];
  var onChangeShoes = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var shoesValue = e.target.value;
    setShoes(shoesValue);
  }, []);
  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(singlePost.acc),
    acc = _useState8[0],
    setAcc = _useState8[1];
  var onChangeAcc = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var accValue = e.target.value;
    setAcc(accValue);
  }, []);
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(singlePost.outer),
    outer = _useState9[0],
    setOuter = _useState9[1];
  var onChangeOuter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var outerValue = e.target.value;
    setOuter(outerValue);
  }, []);
  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(singlePost.lookName),
    lookName = _useState10[0],
    setLookName = _useState10[1];
  var onChangeLookName = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var lookNameValue = e.target.value;
    setLookName(lookNameValue);
  }, []);
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
    index = _useState11[0],
    setIndex = _useState11[1];
  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    isModalOpen = _useState12[0],
    setIsModalOpen = _useState12[1];
  console.log("singlePost::::: ", singlePost);
  console.log("me::::::", me);
  var liked = singlePost === null || singlePost === void 0 ? void 0 : singlePost.Likers[0];
  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === singlePost.UserId;
  });
  console.log("좋아요: ", liked);
  var tags = [];

  //해시태그 #붙여서 뿌리기
  for (var i = 0; i < singlePost.Hashtags.length; i++) {
    if (singlePost.Hashtags !== undefined) {
      tags.push("#" + singlePost.Hashtags[i].name);
    }
  }

  //댓글 쓰기, 보기 선택
  var onSelect = function onSelect() {
    setIndex(!index);
    console.log("index: ", index);
  };

  //좋아요
  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LIKE_POST_REQUEST"],
      data: id
    });
  }, [id]);

  //좋아요 취소
  var onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["UNLIKE_POST_REQUEST"],
      data: id
    });
  }, [id]);

  //팔로우
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["UNFOLLOW_REQUEST"],
        data: singlePost.UserId
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["FOLLOW_REQUEST"],
        data: singlePost.UserId
      });
    }
  }, [isFollowing]);

  //리트윗모달
  var retweetModal = function retweetModal() {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    setIsModalOpen(true);
  };

  //리트윗
  var retweetSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var formData = new FormData();
    formData.append('content', rtConent);
    formData.append('postId', singlePost.id);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["RETWEET_REQUEST"],
      data: formData
    }, setIsModalOpen(false));
  }, [content]);

  //리트윗 모달 창 닫기
  var handleCancel = function handleCancel() {
    setIsModalOpen(false);
  };

  //댓글 없을 때
  var IfComments = function IfComments() {
    if (index === false) {
      if (singlePost.Comments.length === 0) {
        return __jsx(_components_noComments__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 24
          }
        });
      } else {
        return __jsx(_components_comments__WEBPACK_IMPORTED_MODULE_11__["default"], {
          post: singlePost,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 23
          }
        });
      }
    } else {
      return null;
    }
  };

  //이미지 수정을 위한 창 띄우기
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);

  //게시글 삭제 요청
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    if (confirm("이 Look을 삭제하시겠습니까?")) {
      return dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["REMOVE_POST_REQUEST"],
        data: singlePost.id
      }, next_router__WEBPACK_IMPORTED_MODULE_8___default.a.replace("/"));
    } else {
      window.alert("삭제 취소");
    }
  }, [id]);

  //게시글 수정 요청
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
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
    formData.append('postId', id);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["UPDATE_POST_REQUEST"],
      data: formData
    });
  }, [content, imagePaths]);

  //이미지 미리보기
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
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
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append('image', f);
    });
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["UPLOAD_UPDATE_LOOK_IMAGE_REQUEST"],
      data: imageFormData
    });
  });
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 9
    }
  }, __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "div1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 8
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 9
    }
  }, "DailyLook"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    defaultChecked: index,
    onChange: onSelect,
    className: "switch1",
    checkedChildren: "\uB313\uAE00\uC4F0\uAE30",
    unCheckedChildren: "\uB313\uAE00\uBCF4\uAE30",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 9
    }
  })), me.id === singlePost.UserId ? null : __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uB0B4 \uACC4\uC815\uC5D0 \uC778\uC6A9\uD558\uAE30",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    className: "icon1",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPenToSquare"],
    onClick: retweetModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "\uC778\uC6A9\uD558\uAE30",
    footer: null,
    onCancel: handleCancel,
    open: isModalOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: retweetSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
    value: rtConent,
    onChange: onChangeRtContent,
    maxLength: 200,
    placeholder: "\uC778\uC6A9 \uBA54\uBAA8\uB97C \uB0A8\uACA8\uBCF4\uC138\uC694.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 21
    }
  }), __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 19
    }
  }, " ", __jsx("img", {
    className: "img1",
    src: "http://localhost:3065/".concat((_singlePost$Images$ = singlePost.Images[0]) === null || _singlePost$Images$ === void 0 ? void 0 : _singlePost$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 29
    }
  }), " "), __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 19
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button1",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 29
    }
  }, "\uC778\uC6A9\uD558\uAE30")))), liked ? __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uC88B\uC544\uC694 \uCDE8\uC18C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
    onClick: onUnlike,
    twoToneColor: "#fc83c6",
    className: "icon2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 9
    }
  }))) : __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uC88B\uC544\uC694",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
    onClick: onLike,
    className: "icon2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 9
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 13
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
      lineNumber: 450,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card1",
    cover: __jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 24
      }
    }, __jsx("img", {
      className: "img2",
      alt: "example",
      src: previewImg ? previewImg : "http://localhost:3065/".concat((_singlePost$Images$2 = singlePost.Images[0]) === null || _singlePost$Images$2 === void 0 ? void 0 : _singlePost$Images$2.src),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 33
      }
    })),
    actions: id && singlePost.UserId === me.id ? [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: "\uC774\uBBF8\uC9C0 \uC218\uC815",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: onClickImageUpload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UploadOutlined"], {
      key: "upload",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 21
      }
    })))] : [__jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 20
      }
    }, isFollowing ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: "\uC5B8\uD314\uB85C\uC6B0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 21
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faHeartCrack"],
      fontSize: 20,
      onClick: onClickButton,
      className: "icon3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 25
      }
    })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: isFollowing ? '언팔로우' : '팔로우',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 21
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faHeartPulse"],
      fontSize: 20,
      onClick: onClickButton,
      className: "icon3",
      key: "unfollow",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 25
      }
    }))), __jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: singlePost.User.nickname + "의 홈 방문하기",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://localhost:3000/user/".concat(singlePost.UserId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faHouse"],
      fontSize: 20,
      className: "icon3",
      key: "home",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 25
      }
    }))))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    title: "글쓴이:  " + singlePost.User.nickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 17
    }
  }, singlePost.Comments.length === 0 ? __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 19
    }
  }, "No points yet.") : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 19
    }
  }, "This look is...", singlePost.rateAverage, " points."), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 18
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 19
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    className: "icon4",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPenToSquare"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 22
    }
  }), "\xA0 Refer: ", singlePost.References.length), __jsx("div", {
    className: "div2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 21
    }
  }), "\xA0 Like: ", singlePost.Likers.length)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: {
      "float": 'left',
      width: 500
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "li1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 33
    }
  }, "\uB370\uC77C\uB9AC\uB8E9 \uC81C\uBAA9")), __jsx("li", {
    className: "li2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "lookname",
    readOnly: read,
    value: lookName,
    onChange: onChangeLookName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 33
    }
  })))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button2",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 13
    }
  }, "Information"), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 1
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 5
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 5
    }
  }, "\uBD84\uB958"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 5
    }
  }, "\uBE0C\uB79C\uB4DC\uBA85"))), __jsx("tbody", {
    className: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 1
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC0C1\uC758",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "top",
    value: top,
    readOnly: read,
    onChange: onChangeTop,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uD558\uC758",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: bottom,
    readOnly: read,
    onChange: onChangeBottom,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC6D0\uD53C\uC2A4",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: dress,
    readOnly: read,
    onChange: onChangeDress,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC544\uC6B0\uD130",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: outer,
    readOnly: read,
    onChange: onChangeOuter,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC2E0\uBC1C",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: shoes,
    readOnly: read,
    onChange: onChangeShoes,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uD328\uC158\uC7A1\uD654",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: acc,
    readOnly: read,
    onChange: onChangeAcc,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 10
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 1
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button3",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 1
    }
  }, "Daily Record "), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 1
    }
  }, "\uD574\uC2DC\uD0DC\uADF8: ", tags), __jsx(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onChange: onChangeContent,
    showCount: true,
    maxLength: 250,
    value: content,
    readOnly: read,
    className: "textArea1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 1
    }
  })), id && singlePost.UserId === me.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button4",
    onClick: onRemovePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 13
    }
  }, "\uC0AD\uC81C\uD558\uAE30"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button5",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 13
    }
  }, "\uC218\uC815\uD558\uAE30"))) : null)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 1
    }
  }, index === true ? __jsx(_components_newComment__WEBPACK_IMPORTED_MODULE_10__["default"], {
    post: singlePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 24
    }
  }) : null, __jsx(IfComments, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 5
    }
  })));
};
_s(Post, "ScAl+6Z26cbeMqEqzJ6JAFOIYGA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_17__["default"]];
});
_c2 = Post;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);
var _c, _c2;
$RefreshReg$(_c, "OneLook");
$RefreshReg$(_c2, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiTWV0YSIsIkNhcmQiLCJPbmVMb29rIiwic3R5bGVkIiwiZGl2IiwiUG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwic2luZ2xlUG9zdCIsInJldHdlZXRFcnJvciIsInJldHdlZXREb25lIiwidXBkYXRlUG9zdERvbmUiLCJ1c2VTdGF0ZSIsInJlYWQiLCJzZXRSZWFkIiwicHJldmlld0ltZyIsInNldFByZXZpZXdJbWciLCJ1c2VJbnB1dCIsInJ0Q29uZW50Iiwib25DaGFuZ2VSdENvbnRlbnQiLCJzZXRSdENvbnRlbnQiLCJ1c2VFZmZlY3QiLCJVc2VySWQiLCJ3aW5kb3ciLCJhbGVydCIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwib25DaGFuZ2VDb250ZW50IiwidXNlQ2FsbGJhY2siLCJlIiwiY29udGVudFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b3AiLCJzZXRUb3AiLCJvbkNoYW5nZVRvcCIsInRvcFZhbHVlIiwiYm90dG9tIiwic2V0Qm90dG9tIiwib25DaGFuZ2VCb3R0b20iLCJib3R0b21WYWx1ZSIsImRyZXNzIiwic2V0RHJlc3MiLCJvbkNoYW5nZURyZXNzIiwiZHJlc3NWYWx1ZSIsInNob2VzIiwic2V0U2hvZXMiLCJvbkNoYW5nZVNob2VzIiwic2hvZXNWYWx1ZSIsImFjYyIsInNldEFjYyIsIm9uQ2hhbmdlQWNjIiwiYWNjVmFsdWUiLCJvdXRlciIsInNldE91dGVyIiwib25DaGFuZ2VPdXRlciIsIm91dGVyVmFsdWUiLCJsb29rTmFtZSIsInNldExvb2tOYW1lIiwib25DaGFuZ2VMb29rTmFtZSIsImxvb2tOYW1lVmFsdWUiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwiaW5kZXgiLCJzZXRJbmRleCIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJjb25zb2xlIiwibG9nIiwibGlrZWQiLCJMaWtlcnMiLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidiIsInRhZ3MiLCJpIiwiSGFzaHRhZ3MiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwibmFtZSIsIm9uU2VsZWN0Iiwib25MaWtlIiwidHlwZSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uVW5saWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uQ2xpY2tCdXR0b24iLCJVTkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJyZXR3ZWV0TW9kYWwiLCJyZXR3ZWV0U3VibWl0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIlJFVFdFRVRfUkVRVUVTVCIsImhhbmRsZUNhbmNlbCIsIklmQ29tbWVudHMiLCJDb21tZW50cyIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uUmVtb3ZlUG9zdCIsImNvbmZpcm0iLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUm91dGVyIiwicmVwbGFjZSIsIm9uU3VibWl0IiwiZm9yRWFjaCIsInAiLCJVUERBVEVfUE9TVF9SRVFVRVNUIiwib25DaGFuZ2VJbWFnZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiZmlsZXMiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwicHJldmlld0ltZ1VybCIsInJlc3VsdCIsImltYWdlRm9ybURhdGEiLCJjYWxsIiwiZiIsIlVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9SRVFVRVNUIiwiZmFQZW5Ub1NxdWFyZSIsIkltYWdlcyIsInNyYyIsImZhSGVhcnRDcmFjayIsImZhSGVhcnRQdWxzZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZhSG91c2UiLCJyYXRlQXZlcmFnZSIsIlJlZmVyZW5jZXMiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUEsR0FDUixNQUFDLDJDQUFNO0lBQ1AsU0FBUyxFQUFDLFNBQVM7SUFDbkIsT0FBTyxFQUFFd0csWUFBYTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUdiLEVBQ1QsTUFBQywyQ0FBTTtJQUNQLFNBQVMsRUFBQyxTQUFTO0lBQ25CLFFBQVEsRUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBR1IsQ0FDQyxDQUNQLEdBR1AsSUFBSSxDQUtOLENBRUEsQ0FDQyxDQUNHLEVBR1YsTUFBQyx3Q0FBRztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0N6QyxLQUFLLEtBQUssSUFBSSxHQUFJLE1BQUMsK0RBQVU7SUFBQyxJQUFJLEVBQUV2RCxVQUFXO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxHQUFHLElBQUksRUFFMUQsTUFBQyxVQUFVO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUNaLENBRVU7QUFHaEIsQ0FBQztBQUFDLEdBM2ZJYixJQUFJO0VBQUEsUUFFV0UsdURBQVcsRUFDYkUscURBQVMsRUFFVEcsdURBQVcsRUFDa0RBLHVEQUFXLEVBSW5DZSx3REFBUTtBQUFBO0FBQUEsTUFWMUR0QixJQUFJO0FBQUE7QUErZ0JLQSxtRUFBSSxFQUFDO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS4wMWQ2ZmIyMjViOTgxZmZjNmI2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ29sLCBGb3JtLCBJbnB1dCwgTW9kYWwsIFJvdywgU3dpdGNoLCBUb29sdGlwICB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIFVwbG9hZE91dGxpbmVkICB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gXCJhbnRkL2xpYi9pbnB1dC9UZXh0QXJlYVwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIExPQURfTVlfSU5GT19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IExJS0VfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVUV0VFVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNULCBVUERBVEVfUE9TVF9SRVFVRVNULCBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCAgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTmV3Q29tbWVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL25ld0NvbW1lbnQnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tZW50cyc7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7ZmFQZW5Ub1NxdWFyZX0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7ZmFIZWFydFB1bHNlfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IGZhSGVhcnRDcmFjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhSG91c2UgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgTm9Db21tZW50cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL25vQ29tbWVudHMnO1xyXG5pbXBvcnQgJy4uL2Nzcy9wb3N0W2lkXS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlucHV0JztcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE9uZUxvb2sgPSBzdHlsZWQuZGl2YFxyXG5cclxuICAgIC5kaXYxe1xyXG4gICAgICAgIHdpZHRoOiAxMTIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAuZGl2MntcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgIH1cclxuICAgIC5zd2l0Y2gxe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5MDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgfVxyXG4gICAgLmljb24xe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5pY29uMntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0M3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbjN7XHJcbiAgICAgICAgei1pbmRleDoxMDtcclxuICAgIH1cclxuICAgIC5pbWcxe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1nMntcclxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4OHB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uM3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5idXR0b240e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uNXtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5jb2wxe1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNhcmQxe1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLmNhcmQye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICAgIC5jYXJkM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4OyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDVweDtcclxuICAgIH1cclxuICAgIC5saTF7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmxpMntcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYm9keTF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmlucHV0MXtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRBcmVhMXtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3Qge2ltYWdlUGF0aHMsIHNpbmdsZVBvc3QsIHJldHdlZXRFcnJvciwgcmV0d2VldERvbmUsIHVwZGF0ZVBvc3REb25lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBbcmVhZCwgc2V0UmVhZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtwcmV2aWV3SW1nLCBzZXRQcmV2aWV3SW1nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtydENvbmVudCwgb25DaGFuZ2VSdENvbnRlbnQsIHNldFJ0Q29udGVudF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL+uhnOq3uOyduCDslYTsnbTrlJTsmYAg6rKM7Iuc6riAIOyVhOydtOuUlOqwgCDqsJnsnLzrqbQg7IiY7KCVLCDsgq3soJwg7Zmc7ISx7ZmUXHJcbiAgICAgICAgaWYobWUuaWQgPT09IHNpbmdsZVBvc3QuVXNlcklkKXtcclxuICAgICAgICAgICAgc2V0UmVhZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHVwZGF0ZVBvc3REb25lID09PSB0cnVlKXtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdMb29rIOyImOyglSDsmYTro4wuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocmV0d2VldEVycm9yKXtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KHJldHdlZXRFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHJldHdlZXREb25lID09PSB0cnVlKXtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KCfsnbjsmqkg7JmE66OMIScpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZCwgc2luZ2xlUG9zdCwgdXBkYXRlUG9zdERvbmUsIHJldHdlZXRFcnJvciwgcmV0d2VldERvbmVdKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5jb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUNvbnRlbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldENvbnRlbnQoY29udGVudFZhbHVlKTtcclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFt0b3AsIHNldFRvcF0gPSB1c2VTdGF0ZShzaW5nbGVQb3N0LnRvcCk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VUb3AgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvcFZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0VG9wKHRvcFZhbHVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbYm90dG9tLCBzZXRCb3R0b21dID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5ib3R0b20pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlQm90dG9tID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IGJvdHRvbVZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRCb3R0b20oYm90dG9tVmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFtkcmVzcywgc2V0RHJlc3NdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5kcmVzcyk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VEcmVzcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHJlc3NWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldERyZXNzKGRyZXNzVmFsdWUpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICAgICAgY29uc3QgW3Nob2VzLCBzZXRTaG9lc10gPSB1c2VTdGF0ZShzaW5nbGVQb3N0LnNob2VzKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVNob2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IHNob2VzVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFNob2VzKHNob2VzVmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFthY2MsIHNldEFjY10gPSB1c2VTdGF0ZShzaW5nbGVQb3N0LmFjYyk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VBY2MgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjY1ZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0QWNjKGFjY1ZhbHVlKTtcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW291dGVyLCBzZXRPdXRlcl0gPSB1c2VTdGF0ZShzaW5nbGVQb3N0Lm91dGVyKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZU91dGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IG91dGVyVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldE91dGVyKG91dGVyVmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFtsb29rTmFtZSwgc2V0TG9va05hbWVdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5sb29rTmFtZSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VMb29rTmFtZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9va05hbWVWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldExvb2tOYW1lKGxvb2tOYW1lVmFsdWUpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInNpbmdsZVBvc3Q6Ojo6OiBcIiwgc2luZ2xlUG9zdCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJtZTo6Ojo6OlwiLCBtZSk7XHJcblxyXG4gICAgY29uc3QgbGlrZWQgPSBzaW5nbGVQb3N0Py5MaWtlcnNbMF07XHJcblxyXG4gICAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZT8uRm9sbG93aW5ncy5maW5kKCh2KSA9PiB2LmlkID09PSBzaW5nbGVQb3N0LlVzZXJJZCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCLsoovslYTsmpQ6IFwiLCBsaWtlZCk7XHJcblxyXG4gICAgY29uc3QgdGFncyA9IFtdO1xyXG5cclxuICAgIC8v7ZW07Iuc7YOc6re4ICPrtpnsl6zshJwg67+M66as6riwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2luZ2xlUG9zdC5IYXNodGFncy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoc2luZ2xlUG9zdC5IYXNodGFncyAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGFncy5wdXNoKCBcIiNcIiArIHNpbmdsZVBvc3QuSGFzaHRhZ3NbaV0ubmFtZSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+uMk+q4gCDsk7DquLAsIOuztOq4sCDshKDtg51cclxuICAgIGNvbnN0IG9uU2VsZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluZGV4KCFpbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleDogXCIsIGluZGV4KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8v7KKL7JWE7JqUXHJcbiAgICAgIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxbaWRdKTtcclxuXHJcbiAgICAgICAgLy/soovslYTsmpQg7Leo7IaMXHJcbiAgICAgICAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogaWRcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFtpZF0pO1xyXG5cclxuICAgICAgICAvL+2MlOuhnOyasFxyXG4gICAgICAgIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlzRm9sbG93aW5nKXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHNpbmdsZVBvc3QuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHNpbmdsZVBvc3QuVXNlcklkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sW2lzRm9sbG93aW5nXSk7XHJcblxyXG4gICAgICAgIC8v66as7Yq47JyX66qo64usXHJcbiAgICAgICAgY29uc3QgcmV0d2VldE1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8v66as7Yq47JyXXHJcbiAgICAgICAgY29uc3QgcmV0d2VldFN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIHJ0Q29uZW50KTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0SWQnLCBzaW5nbGVQb3N0LmlkKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFJFVFdFRVRfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgIH0sIHNldElzTW9kYWxPcGVuKGZhbHNlKSk7XHJcbiAgICAgICAgfSwgW2NvbnRlbnRdKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+umrO2KuOyclyDrqqjri6wg7LC9IOuLq+q4sFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAvL+uMk+q4gCDsl4bsnYQg65WMXHJcbiAgICBjb25zdCBJZkNvbW1lbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGluZGV4ID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGlmKHNpbmdsZVBvc3QuQ29tbWVudHMubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Tm9Db21tZW50cyAvPjtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgIHJldHVybiA8Q29tbWVudHMgcG9zdD17c2luZ2xlUG9zdH0gLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL+ydtOuvuOyngCDsiJjsoJXsnYQg7JyE7ZWcIOywvSDrnYTsmrDquLBcclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgICAvL+qyjOyLnOq4gCDsgq3soJwg7JqU7LKtXHJcbiAgICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb25maXJtKFwi7J20IExvb2vsnYQg7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMP1wiKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogc2luZ2xlUG9zdC5pZCwgXHJcbiAgICAgICAgICAgIH0sIFJvdXRlci5yZXBsYWNlKGAvYCkpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwi7IKt7KCcIOy3qOyGjFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LCBbaWRdKTtcclxuXHJcblxyXG4vL+qyjOyLnOq4gCDsiJjsoJUg7JqU7LKtXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBpbWFnZVBhdGhzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIGNvbnRlbnQpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9wJywgdG9wKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2JvdHRvbScsIGJvdHRvbSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkcmVzcycsIGRyZXNzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Nob2VzJywgc2hvZXMpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYWNjJywgYWNjKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ291dGVyJywgb3V0ZXIpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbG9va05hbWUnLCBsb29rTmFtZSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0SWQnLCBpZCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBVUERBVEVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFtjb250ZW50LCBpbWFnZVBhdGhzXSk7XHJcblxyXG4gICAgLy/snbTrr7jsp4Ag66+466as67O06riwXHJcbiAgICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LmZpbGVzWzBdKXtcclxuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByZXZpZXdJbWdVcmwgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgaWYocHJldmlld0ltZ1VybCl7XHJcbiAgICAgICAgICAgIHNldFByZXZpZXdJbWcocHJldmlld0ltZ1VybCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgXHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZikgPT4ge1xyXG4gICAgICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcExheW91dCA+XHJcbiAgICAgICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgICAgICA8Rm9ybSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdjEnPlxyXG4gICAgICAgPFJvdz5cclxuICAgICAgICA8aDE+RGFpbHlMb29rPC9oMT5cclxuICAgICAgICA8U3dpdGNoIGRlZmF1bHRDaGVja2VkPXtpbmRleH0gb25DaGFuZ2U9e29uU2VsZWN0fSBjbGFzc05hbWU9J3N3aXRjaDEnIGNoZWNrZWRDaGlsZHJlbj1cIuuMk+q4gOyTsOq4sFwiIHVuQ2hlY2tlZENoaWxkcmVuPVwi64yT6riA67O06riwXCIgLz5cclxuICAgICAgIDwvUm93PlxyXG4gICAgICAge21lLmlkID09PSBzaW5nbGVQb3N0LlVzZXJJZCBcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPE9uZUxvb2s+XHJcbiAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi64K0IOqzhOygleyXkCDsnbjsmqntlZjquLBcIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ljb24xJ1xyXG4gICAgICAgICAgICAgICAgICAgIGljb249e2ZhUGVuVG9TcXVhcmV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JldHdlZXRNb2RhbH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgPC9PbmVMb29rPlxyXG4gICAgICAgfVxyXG4gICAgICAgICAgICB7Lyog66as7Yq47JyXIOuqqOuLrCAqL31cclxuICAgICAgICAgICAgPE1vZGFsIHRpdGxlPVwi7J247Jqp7ZWY6riwXCIgZm9vdGVyPXtudWxsfSBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfSBvcGVuPXtpc01vZGFsT3Blbn0gPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gIG9uRmluaXNoPXtyZXR3ZWV0U3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J0Q29uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVJ0Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyduOyaqSDrqZTrqqjrpbwg64Ko6rKo67O07IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPE9uZUxvb2s+IDxpbWcgY2xhc3NOYW1lPSdpbWcxJyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtzaW5nbGVQb3N0LkltYWdlc1swXT8uc3JjfWB9IC8+IDwvT25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgPE9uZUxvb2s+IDxCdXR0b24gY2xhc3NOYW1lPSdidXR0b24xJyBodG1sVHlwZT1cInN1Ym1pdFwiPuyduOyaqe2VmOq4sDwvQnV0dG9uPjwvT25lTG9vaz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAge2xpa2VkID8gXHJcbiAgICAgICAgPE9uZUxvb2s+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLsoovslYTsmpQg7Leo7IaMXCI+XHJcbiAgICAgICAgPEhlYXJ0VHdvVG9uZSBvbkNsaWNrPXtvblVubGlrZX0gdHdvVG9uZUNvbG9yPVwiI2ZjODNjNlwiIGNsYXNzTmFtZT0naWNvbjInLz4gXHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgICA6XHJcbiAgICAgICAgPE9uZUxvb2s+IFxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwi7KKL7JWE7JqUXCI+XHJcbiAgICAgICAgPEhlYXJ0T3V0bGluZWQgb25DbGljaz17b25MaWtlfSBjbGFzc05hbWU9J2ljb24yJyAvPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8L09uZUxvb2s+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9J2NvbDEnID5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbWFnZVwiIHR5cGU9XCJmaWxlXCIgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FyZDEnXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvdmVyPXs8T25lTG9vaz48aW1nIGNsYXNzTmFtZT0naW1nMicgYWx0PVwiZXhhbXBsZVwiIHNyYz17IHByZXZpZXdJbWcgPyBwcmV2aWV3SW1nIDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3NpbmdsZVBvc3QuSW1hZ2VzWzBdPy5zcmN9YH0gLz48L09uZUxvb2s+fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgJiYgc2luZ2xlUG9zdC5Vc2VySWQgPT09IG1lLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLsnbTrr7jsp4Ag7IiY7KCVXCI+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9ID4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkT3V0bGluZWQga2V5PVwidXBsb2FkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD4gICBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgWyBcclxuICAgICAgICAgICAgICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0ZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT0n7Ja47YyU66Gc7JqwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUhlYXJ0Q3JhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtpc0ZvbGxvd2luZyA/ICfslrjtjJTroZzsmrAnIDogJ+2MlOuhnOyasCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ZhSGVhcnRQdWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ljb24zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9J3VuZm9sbG93J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PbmVMb29rPlxyXG4gICAgICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgICAgICA8T25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17c2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lICsgXCLsnZgg7ZmIIOuwqeusuO2VmOq4sFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyLyR7c2luZ2xlUG9zdC5Vc2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ZhSG91c2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0naG9tZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PbmVMb29rPlxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID4gICAgICBcclxuICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPXtcIuq4gOyTtOydtDogIFwiICsgc2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIHtzaW5nbGVQb3N0LkNvbW1lbnRzLmxlbmd0aCA9PT0gMCBcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgPGgxPk5vIHBvaW50cyB5ZXQuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgPGgxPlRoaXMgbG9vayBpcy4uLntzaW5nbGVQb3N0LnJhdGVBdmVyYWdlfSBwb2ludHMuPC9oMT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uNCdcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtmYVBlblRvU3F1YXJlfSBcclxuICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsgUmVmZXI6IHtzaW5nbGVQb3N0LlJlZmVyZW5jZXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdjInIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz4gICBcclxuICAgICAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyBMaWtlOiB7c2luZ2xlUG9zdC5MaWtlcnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3R5bGU9e3tmbG9hdDogJ2xlZnQnLCB3aWR0aDo1MDB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xpMSc+PGgzID7rjbDsnbzrpqzro6kg7KCc66qpPC9oMz48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaTInPjxJbnB1dCBuYW1lPSdsb29rbmFtZScgcmVhZE9ubHk9e3JlYWR9IHZhbHVlPXtsb29rTmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTG9va05hbWV9ICAvPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdjYXJkMic+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdidXR0b24yJyBibG9jayA+SW5mb3JtYXRpb248L0J1dHRvbj5cclxuPHRoZWFkPlxyXG4gICAgPHRyID5cclxuICAgIDx0aD7rtoTrpZg8L3RoPlxyXG4gICAgPHRoPuu4jOuenOuTnOuqhTwvdGg+XHJcbiAgICBcclxuICAgIDwvdHI+XHJcbjwvdGhlYWQ+XHJcbjx0Ym9keSBjbGFzc05hbWU9J2JvZHkxJyA+XHJcbiAgICA8dHI+XHJcbiAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCBkZWZhdWx0VmFsdWU9XCLsg4HsnZhcIiBjbGFzc05hbWU9J2lucHV0MScgLz48L3RkPlxyXG4gICAgPHRkPiA8SW5wdXQgbmFtZT0ndG9wJyB2YWx1ZT17dG9wfSByZWFkT25seT17cmVhZH0gb25DaGFuZ2U9e29uQ2hhbmdlVG9wfSAgdHlwZT1cInRleHRcIiAgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIu2VmOydmFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCAgdmFsdWU9e2JvdHRvbX0gcmVhZE9ubHk9e3JlYWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUJvdHRvbX0gdHlwZT1cInRleHRcIiAvPjwvdGQ+IFxyXG4gICAgPC90cj5cclxuXHJcbiAgICA8dHI+XHJcbiAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7JuQ7ZS87IqkXCIgY2xhc3NOYW1lPSdpbnB1dDEnIC8+PC90ZD5cclxuICAgIDx0ZD4gPElucHV0ICB2YWx1ZT17ZHJlc3N9IHJlYWRPbmx5PXtyZWFkfSBvbkNoYW5nZT17b25DaGFuZ2VEcmVzc30gdHlwZT1cInRleHRcIiAvPjwvdGQ+IFxyXG4gICAgPC90cj5cclxuXHJcbiAgICA8dHI+XHJcbiAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7JWE7Jqw7YSwXCIgY2xhc3NOYW1lPSdpbnB1dDEnIC8+PC90ZD5cclxuICAgIDx0ZD4gPElucHV0ICB2YWx1ZT17b3V0ZXJ9IHJlYWRPbmx5PXtyZWFkfSBvbkNoYW5nZT17b25DaGFuZ2VPdXRlcn0gdHlwZT1cInRleHRcIiAvPjwvdGQ+IFxyXG4gICAgPC90cj5cclxuXHJcbiAgICA8dHI+XHJcbiAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7Iug67CcXCIgY2xhc3NOYW1lPSdpbnB1dDEnIC8+PC90ZD5cclxuICAgIDx0ZD4gPElucHV0IHZhbHVlPXtzaG9lc30gcmVhZE9ubHk9e3JlYWR9IG9uQ2hhbmdlPXtvbkNoYW5nZVNob2VzfSAgdHlwZT1cInRleHRcIiAvPjwvdGQ+IFxyXG4gICAgPC90cj5cclxuXHJcbiAgICA8dHI+XHJcbiAgICA8dGQ+IDxJbnB1dCBkaXNhYmxlZCAgZGVmYXVsdFZhbHVlPVwi7Yyo7IWY7J6h7ZmUXCIgY2xhc3NOYW1lPSdpbnB1dDEnIC8+PC90ZD5cclxuICAgIDx0ZD4gPElucHV0IHZhbHVlPXthY2N9IHJlYWRPbmx5PXtyZWFkfSAgb25DaGFuZ2U9e29uQ2hhbmdlQWNjfSAgdHlwZT1cInRleHRcIiAvPjwvdGQ+IFxyXG4gICAgPC90cj5cclxuXHJcbjwvdGJvZHk+XHJcbjwvQ2FyZD5cclxuPC9kaXY+XHJcbjxDYXJkIGNsYXNzTmFtZT0nY2FyZDMnPlxyXG48QnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uMycgYmxvY2sgPkRhaWx5IFJlY29yZCA8L0J1dHRvbj5cclxuPGg0Pu2VtOyLnO2DnOq3uDoge3RhZ3N9PC9oND5cclxuPFRleHRBcmVhXHJcbiAgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGVudH1cclxuICBzaG93Q291bnRcclxuICBtYXhMZW5ndGg9ezI1MH1cclxuICB2YWx1ZT17Y29udGVudH0gXHJcbiAgcmVhZE9ubHk9e3JlYWR9XHJcbiAgY2xhc3NOYW1lPSd0ZXh0QXJlYTEnXHJcbi8+XHJcblxyXG48L0NhcmQ+XHJcbiAgICB7IGlkICYmIHNpbmdsZVBvc3QuVXNlcklkID09PSBtZS5pZFxyXG4gICAgP1xyXG4gICAgICAgIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE9uZUxvb2s+XHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uNCdcclxuICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmVQb3N0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDsgq3soJztlZjquLBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b241J1xyXG4gICAgICAgICAgICBodG1sVHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDsiJjsoJXtlZjquLBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIDpcclxuICAgICAgICBudWxsXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbjwvQ29sPlxyXG5cclxuPC9kaXY+XHJcbjwvRm9ybT5cclxuPC9PbmVMb29rPlxyXG5cclxuey8qIOuMk+q4gCAqL31cclxuPENvbD5cclxuICAgIHtpbmRleCA9PT0gdHJ1ZSAgPyA8TmV3Q29tbWVudCBwb3N0PXtzaW5nbGVQb3N0fSAvPiA6IG51bGwgfVxyXG4gICAgey8qIHtpbmRleCA9PT0gZmFsc2UgID8gKHNpbmdsZVBvc3QuQ29tbWVudHMubGVuZ3RoICE9PSAwID8gPENvbW1lbnRzIHBvc3Q9e3NpbmdsZVBvc3R9IC8+IDogPE5vQ29tbWVudHMgLz4pIDogbnVsbCB9ICovfVxyXG4gICAgPElmQ29tbWVudHMgLz5cclxuPC9Db2w+XHJcblxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyhjb250ZXh0KSA9PiB7IFxyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJzsgXHJcbiAgICBpZihjb250ZXh0LnJlcSAmJiBjb29raWUpeyBcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1RcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQgLy/tmLnsnYAgY29udGV4dC5xdWVyeS5pZFxyXG4gICAgfSk7XHJcbiAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwic291cmNlUm9vdCI6IiJ9