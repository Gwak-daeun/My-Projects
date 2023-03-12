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
    updatePostDone = _useSelector2.updatePostDone,
    likePostDone = _useSelector2.likePostDone;
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

  //해시태그 #붙여서 뿌리기
  var tags = [];
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
    var formData = new FormData();
    formData.append("PostId", id);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LIKE_POST_REQUEST"],
      data: formData
    });
  }, [id]);

  //좋아요 취소
  var onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    var formData = new FormData();
    formData.append("PostId", id);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["UNLIKE_POST_REQUEST"],
      data: formData
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
            lineNumber: 321,
            columnNumber: 24
          }
        });
      } else {
        return __jsx(_components_comments__WEBPACK_IMPORTED_MODULE_11__["default"], {
          post: singlePost,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323,
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
      lineNumber: 403,
      columnNumber: 9
    }
  }, __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "div1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 8
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
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
      lineNumber: 409,
      columnNumber: 9
    }
  })), me.id === singlePost.UserId ? null : __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uB0B4 \uACC4\uC815\uC5D0 \uC778\uC6A9\uD558\uAE30",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    className: "icon1",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPenToSquare"],
    onClick: retweetModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
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
      lineNumber: 427,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: retweetSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
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
      lineNumber: 429,
      columnNumber: 21
    }
  }), __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 19
    }
  }, " ", __jsx("img", {
    className: "img1",
    src: "http://localhost:3065/".concat((_singlePost$Images$ = singlePost.Images[0]) === null || _singlePost$Images$ === void 0 ? void 0 : _singlePost$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 29
    }
  }), " "), __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 19
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button1",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 29
    }
  }, "\uC778\uC6A9\uD558\uAE30")))), liked ? __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uC88B\uC544\uC694 \uCDE8\uC18C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
    onClick: onUnlike,
    twoToneColor: "#fc83c6",
    className: "icon2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 9
    }
  }))) : __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uC88B\uC544\uC694",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
    onClick: onLike,
    className: "icon2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 9
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
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
      lineNumber: 455,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card1",
    cover: __jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 24
      }
    }, __jsx("img", {
      className: "img2",
      alt: "example",
      src: previewImg ? previewImg : "http://localhost:3065/".concat((_singlePost$Images$2 = singlePost.Images[0]) === null || _singlePost$Images$2 === void 0 ? void 0 : _singlePost$Images$2.src),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 33
      }
    })),
    actions: id && singlePost.UserId === me.id ? [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: "\uC774\uBBF8\uC9C0 \uC218\uC815",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: onClickImageUpload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UploadOutlined"], {
      key: "upload",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 21
      }
    })))] : [__jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472,
        columnNumber: 20
      }
    }, isFollowing ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: "\uC5B8\uD314\uB85C\uC6B0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
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
        lineNumber: 476,
        columnNumber: 25
      }
    })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: isFollowing ? '언팔로우' : '팔로우',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484,
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
        lineNumber: 485,
        columnNumber: 25
      }
    }))), __jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: singlePost.User.nickname + "의 홈 방문하기",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://localhost:3000/user/".concat(singlePost.UserId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
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
        lineNumber: 499,
        columnNumber: 25
      }
    }))))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    title: "글쓴이:  " + singlePost.User.nickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 17
    }
  }, singlePost.Comments.length === 0 ? __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 19
    }
  }, "No points yet.") : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 19
    }
  }, "This look is...", singlePost.rateAverage, " points."), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 18
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 19
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    className: "icon4",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPenToSquare"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 22
    }
  }), "\xA0 Refer: ", singlePost.References.length), __jsx("div", {
    className: "div2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
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
      lineNumber: 536,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "li1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 33
    }
  }, "\uB370\uC77C\uB9AC\uB8E9 \uC81C\uBAA9")), __jsx("li", {
    className: "li2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
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
      lineNumber: 540,
      columnNumber: 33
    }
  })))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button2",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 13
    }
  }, "Information"), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 1
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 5
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 5
    }
  }, "\uBD84\uB958"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 5
    }
  }, "\uBE0C\uB79C\uB4DC\uBA85"))), __jsx("tbody", {
    className: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 1
    }
  }, __jsx("tr", {
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
    defaultValue: "\uC0C1\uC758",
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
    name: "top",
    value: top,
    readOnly: read,
    onChange: onChangeTop,
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
    defaultValue: "\uD558\uC758",
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
    value: bottom,
    readOnly: read,
    onChange: onChangeBottom,
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
    defaultValue: "\uC6D0\uD53C\uC2A4",
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
    value: dress,
    readOnly: read,
    onChange: onChangeDress,
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
    defaultValue: "\uC544\uC6B0\uD130",
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
    value: outer,
    readOnly: read,
    onChange: onChangeOuter,
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
    defaultValue: "\uC2E0\uBC1C",
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
    value: shoes,
    readOnly: read,
    onChange: onChangeShoes,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uD328\uC158\uC7A1\uD654",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
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
      lineNumber: 582,
      columnNumber: 10
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 1
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button3",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 1
    }
  }, "Daily Record "), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
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
      lineNumber: 591,
      columnNumber: 1
    }
  })), id && singlePost.UserId === me.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button4",
    onClick: onRemovePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 13
    }
  }, "\uC0AD\uC81C\uD558\uAE30"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button5",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 13
    }
  }, "\uC218\uC815\uD558\uAE30"))) : null)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 1
    }
  }, index === true ? __jsx(_components_newComment__WEBPACK_IMPORTED_MODULE_10__["default"], {
    post: singlePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 24
    }
  }) : null, __jsx(IfComments, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 5
    }
  })));
};
_s(Post, "PVzz1Chi2cpVFS8j26baR2a4GeY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiTWV0YSIsIkNhcmQiLCJPbmVMb29rIiwic3R5bGVkIiwiZGl2IiwiUG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwic2luZ2xlUG9zdCIsInJldHdlZXRFcnJvciIsInJldHdlZXREb25lIiwidXBkYXRlUG9zdERvbmUiLCJsaWtlUG9zdERvbmUiLCJ1c2VTdGF0ZSIsInJlYWQiLCJzZXRSZWFkIiwicHJldmlld0ltZyIsInNldFByZXZpZXdJbWciLCJ1c2VJbnB1dCIsInJ0Q29uZW50Iiwib25DaGFuZ2VSdENvbnRlbnQiLCJzZXRSdENvbnRlbnQiLCJ1c2VFZmZlY3QiLCJVc2VySWQiLCJ3aW5kb3ciLCJhbGVydCIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwib25DaGFuZ2VDb250ZW50IiwidXNlQ2FsbGJhY2siLCJlIiwiY29udGVudFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b3AiLCJzZXRUb3AiLCJvbkNoYW5nZVRvcCIsInRvcFZhbHVlIiwiYm90dG9tIiwic2V0Qm90dG9tIiwib25DaGFuZ2VCb3R0b20iLCJib3R0b21WYWx1ZSIsImRyZXNzIiwic2V0RHJlc3MiLCJvbkNoYW5nZURyZXNzIiwiZHJlc3NWYWx1ZSIsInNob2VzIiwic2V0U2hvZXMiLCJvbkNoYW5nZVNob2VzIiwic2hvZXNWYWx1ZSIsImFjYyIsInNldEFjYyIsIm9uQ2hhbmdlQWNjIiwiYWNjVmFsdWUiLCJvdXRlciIsInNldE91dGVyIiwib25DaGFuZ2VPdXRlciIsIm91dGVyVmFsdWUiLCJsb29rTmFtZSIsInNldExvb2tOYW1lIiwib25DaGFuZ2VMb29rTmFtZSIsImxvb2tOYW1lVmFsdWUiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwiaW5kZXgiLCJzZXRJbmRleCIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJjb25zb2xlIiwibG9nIiwibGlrZWQiLCJMaWtlcnMiLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidiIsInRhZ3MiLCJpIiwiSGFzaHRhZ3MiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwibmFtZSIsIm9uU2VsZWN0Iiwib25MaWtlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInR5cGUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJvblVubGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJvbkNsaWNrQnV0dG9uIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwicmV0d2VldE1vZGFsIiwicmV0d2VldFN1Ym1pdCIsIlJFVFdFRVRfUkVRVUVTVCIsImhhbmRsZUNhbmNlbCIsIklmQ29tbWVudHMiLCJDb21tZW50cyIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uUmVtb3ZlUG9zdCIsImNvbmZpcm0iLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUm91dGVyIiwicmVwbGFjZSIsIm9uU3VibWl0IiwiZm9yRWFjaCIsInAiLCJVUERBVEVfUE9TVF9SRVFVRVNUIiwib25DaGFuZ2VJbWFnZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiZmlsZXMiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwicHJldmlld0ltZ1VybCIsInJlc3VsdCIsImltYWdlRm9ybURhdGEiLCJjYWxsIiwiZiIsIlVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9SRVFVRVNUIiwiZmFQZW5Ub1NxdWFyZSIsIkltYWdlcyIsInNyYyIsImZhSGVhcnRDcmFjayIsImZhSGVhcnRQdWxzZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZhSG91c2UiLCJyYXRlQXZlcmFnZSIsIlJlZmVyZW5jZXMiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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OGJhYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbCwgRm9ybSwgSW5wdXQsIE1vZGFsLCBSb3csIFN3aXRjaCwgVG9vbHRpcCAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgSGVhcnRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLCBVcGxvYWRPdXRsaW5lZCAgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiYW50ZC9saWIvaW5wdXQvVGV4dEFyZWFcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCB7IEZPTExPV19SRVFVRVNULCBMT0FEX01ZX0lORk9fUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBMSUtFX1BPU1RfUkVRVUVTVCwgTE9BRF9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFVFdFRVRfUkVRVUVTVCwgVU5MSUtFX1BPU1RfUkVRVUVTVCwgVVBEQVRFX1BPU1RfUkVRVUVTVCwgVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgIFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IE5ld0NvbW1lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uZXdDb21tZW50JztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbWVudHMnO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge2ZhUGVuVG9TcXVhcmV9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge2ZhSGVhcnRQdWxzZX0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBmYUhlYXJ0Q3JhY2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUhvdXNlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IE5vQ29tbWVudHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ub0NvbW1lbnRzJztcclxuaW1wb3J0ICcuLi9jc3MvcG9zdFtpZF0ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi8uLi9ob29rcy91c2VJbnB1dCc7XHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBPbmVMb29rID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgICAuZGl2MXtcclxuICAgICAgICB3aWR0aDogMTEyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLmRpdjJ7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuc3dpdGNoMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgIH1cclxuICAgIC5pY29uMXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbjJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNDNweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmljb24ze1xyXG4gICAgICAgIHotaW5kZXg6MTA7XHJcbiAgICB9XHJcbiAgICAuaW1nMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDMzMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZzJ7XHJcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5idXR0b24xe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxODhweDtcclxuICAgIH1cclxuICAgIC5idXR0b24ye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uNHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjV7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuY29sMXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5jYXJkMXtcclxuICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC5jYXJkMntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZDN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDsgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjQ1cHg7XHJcbiAgICB9XHJcbiAgICAubGkxe1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5saTJ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJvZHkxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pbnB1dDF7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0QXJlYTF7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHtpbWFnZVBhdGhzLCBzaW5nbGVQb3N0LCByZXR3ZWV0RXJyb3IsIHJldHdlZXREb25lLCB1cGRhdGVQb3N0RG9uZSwgbGlrZVBvc3REb25lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBbcmVhZCwgc2V0UmVhZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtwcmV2aWV3SW1nLCBzZXRQcmV2aWV3SW1nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtydENvbmVudCwgb25DaGFuZ2VSdENvbnRlbnQsIHNldFJ0Q29udGVudF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL+uhnOq3uOyduCDslYTsnbTrlJTsmYAg6rKM7Iuc6riAIOyVhOydtOuUlOqwgCDqsJnsnLzrqbQg7IiY7KCVLCDsgq3soJwg7Zmc7ISx7ZmUXHJcbiAgICAgICAgaWYobWUuaWQgPT09IHNpbmdsZVBvc3QuVXNlcklkKXtcclxuICAgICAgICAgICAgc2V0UmVhZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHVwZGF0ZVBvc3REb25lID09PSB0cnVlKXtcclxuICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdMb29rIOyImOyglSDsmYTro4wuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocmV0d2VldEVycm9yKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChyZXR3ZWV0RXJyb3IpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocmV0d2VldERvbmUgPT09IHRydWUpe1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ+yduOyaqSDsmYTro4whJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lICYmIG1lLmlkLCBzaW5nbGVQb3N0LCB1cGRhdGVQb3N0RG9uZSwgcmV0d2VldEVycm9yLCByZXR3ZWV0RG9uZV0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShzaW5nbGVQb3N0LmNvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlQ29udGVudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGVudFZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0Q29udGVudChjb250ZW50VmFsdWUpO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW3RvcCwgc2V0VG9wXSA9IHVzZVN0YXRlKHNpbmdsZVBvc3QudG9wKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVRvcCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9wVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRUb3AodG9wVmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFtib3R0b20sIHNldEJvdHRvbV0gPSB1c2VTdGF0ZShzaW5nbGVQb3N0LmJvdHRvbSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VCb3R0b20gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3QgYm90dG9tVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldEJvdHRvbShib3R0b21WYWx1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW2RyZXNzLCBzZXREcmVzc10gPSB1c2VTdGF0ZShzaW5nbGVQb3N0LmRyZXNzKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZURyZXNzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zdCBkcmVzc1ZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0RHJlc3MoZHJlc3NWYWx1ZSk7XHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuICAgICAgICBjb25zdCBbc2hvZXMsIHNldFNob2VzXSA9IHVzZVN0YXRlKHNpbmdsZVBvc3Quc2hvZXMpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlU2hvZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2hvZXNWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0U2hvZXMoc2hvZXNWYWx1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW2FjYywgc2V0QWNjXSA9IHVzZVN0YXRlKHNpbmdsZVBvc3QuYWNjKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUFjYyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWNjVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRBY2MoYWNjVmFsdWUpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbb3V0ZXIsIHNldE91dGVyXSA9IHVzZVN0YXRlKHNpbmdsZVBvc3Qub3V0ZXIpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlT3V0ZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qgb3V0ZXJWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0T3V0ZXIob3V0ZXJWYWx1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW2xvb2tOYW1lLCBzZXRMb29rTmFtZV0gPSB1c2VTdGF0ZShzaW5nbGVQb3N0Lmxvb2tOYW1lKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUxvb2tOYW1lID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zdCBsb29rTmFtZVZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0TG9va05hbWUobG9va05hbWVWYWx1ZSk7XHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwic2luZ2xlUG9zdDo6Ojo6IFwiLCBzaW5nbGVQb3N0KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIm1lOjo6Ojo6XCIsIG1lKTtcclxuXHJcbiAgICBjb25zdCBsaWtlZCA9IHNpbmdsZVBvc3Q/Lkxpa2Vyc1swXTtcclxuXHJcbiAgICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHNpbmdsZVBvc3QuVXNlcklkKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIuyii+yVhOyalDogXCIsIGxpa2VkKTtcclxuXHJcbiAgICAvL+2VtOyLnO2DnOq3uCAj67aZ7Jes7IScIOu/jOumrOq4sFxyXG4gICAgY29uc3QgdGFncyA9IFtdO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaW5nbGVQb3N0Lkhhc2h0YWdzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBcclxuICAgICAgICBpZihzaW5nbGVQb3N0Lkhhc2h0YWdzICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0YWdzLnB1c2goIFwiI1wiICsgc2luZ2xlUG9zdC5IYXNodGFnc1tpXS5uYW1lICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v64yT6riAIOyTsOq4sCwg67O06riwIOyEoO2DnVxyXG4gICAgY29uc3Qgb25TZWxlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5kZXgoIWluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4OiBcIiwgaW5kZXgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy/soovslYTsmpRcclxuICAgICAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUG9zdElkXCIsIGlkKTtcclxuICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sW2lkXSk7XHJcblxyXG4gICAgICAgIC8v7KKL7JWE7JqUIOy3qOyGjFxyXG4gICAgICAgIGNvbnN0IG9uVW5saWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIlBvc3RJZFwiLCBpZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxbaWRdKTtcclxuXHJcbiAgICAgICAgLy/tjJTroZzsmrBcclxuICAgICAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihpc0ZvbGxvd2luZyl7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzaW5nbGVQb3N0LlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzaW5nbGVQb3N0LlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFtpc0ZvbGxvd2luZ10pO1xyXG5cclxuICAgICAgICAvL+umrO2KuOycl+uqqOuLrFxyXG4gICAgICAgIGNvbnN0IHJldHdlZXRNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYoIWlkKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+umrO2KuOycl1xyXG4gICAgICAgIGNvbnN0IHJldHdlZXRTdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCBydENvbmVudCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncG9zdElkJywgc2luZ2xlUG9zdC5pZCk7XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YVxyXG4gICAgICAgICAgICB9LCBzZXRJc01vZGFsT3BlbihmYWxzZSkpO1xyXG4gICAgICAgIH0sIFtjb250ZW50XSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/rpqztirjsnJcg66qo64usIOywvSDri6vquLBcclxuICAgICAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgLy/rjJPquIAg7JeG7J2EIOuVjFxyXG4gICAgY29uc3QgSWZDb21tZW50cyA9ICgpID0+IHtcclxuICAgICAgICBpZihpbmRleCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBpZihzaW5nbGVQb3N0LkNvbW1lbnRzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPE5vQ29tbWVudHMgLz47XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICByZXR1cm4gPENvbW1lbnRzIHBvc3Q9e3NpbmdsZVBvc3R9IC8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy/snbTrr7jsp4Ag7IiY7KCV7J2EIOychO2VnCDssL0g652E7Jqw6riwXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gICAgLy/qsozsi5zquIAg7IKt7KCcIOyalOyyrVxyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29uZmlybShcIuydtCBMb29r7J2EIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cIikpe1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNpbmdsZVBvc3QuaWQsIFxyXG4gICAgICAgICAgICB9LCBSb3V0ZXIucmVwbGFjZShgL2ApKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuyCreygnCDst6jshoxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG5cclxuLy/qsozsi5zquIAg7IiY7KCVIOyalOyyrVxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCBjb250ZW50KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RvcCcsIHRvcCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdib3R0b20nLCBib3R0b20pO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZHJlc3MnLCBkcmVzcyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzaG9lcycsIHNob2VzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FjYycsIGFjYyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdvdXRlcicsIG91dGVyKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2xvb2tOYW1lJywgbG9va05hbWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncG9zdElkJywgaWQpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVVBEQVRFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSxbY29udGVudCwgaW1hZ2VQYXRoc10pO1xyXG5cclxuICAgIC8v7J2066+47KeAIOuvuOumrOuztOq4sFxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICBpZihlLnRhcmdldC5maWxlc1swXSl7XHJcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aWV3SW1nVXJsID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgIGlmKHByZXZpZXdJbWdVcmwpe1xyXG4gICAgICAgICAgICBzZXRQcmV2aWV3SW1nKHByZXZpZXdJbWdVcmwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgIFxyXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGltYWdlRm9ybURhdGFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBcHBMYXlvdXQgPlxyXG4gICAgICAgICAgICA8T25lTG9vaz5cclxuICAgICAgICAgICAgPEZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXYxJz5cclxuICAgICAgIDxSb3c+XHJcbiAgICAgICAgPGgxPkRhaWx5TG9vazwvaDE+XHJcbiAgICAgICAgPFN3aXRjaCBkZWZhdWx0Q2hlY2tlZD17aW5kZXh9IG9uQ2hhbmdlPXtvblNlbGVjdH0gY2xhc3NOYW1lPSdzd2l0Y2gxJyBjaGVja2VkQ2hpbGRyZW49XCLrjJPquIDsk7DquLBcIiB1bkNoZWNrZWRDaGlsZHJlbj1cIuuMk+q4gOuztOq4sFwiIC8+XHJcbiAgICAgICA8L1Jvdz5cclxuICAgICAgIHttZS5pZCA9PT0gc2luZ2xlUG9zdC5Vc2VySWQgXHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuuCtCDqs4TsoJXsl5Ag7J247Jqp7ZWY6riwXCI+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uMSdcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtmYVBlblRvU3F1YXJlfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXR3ZWV0TW9kYWx9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgIH1cclxuICAgICAgICAgICAgey8qIOumrO2KuOyclyDrqqjri6wgKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCB0aXRsZT1cIuyduOyaqe2VmOq4sFwiIGZvb3Rlcj17bnVsbH0gb25DYW5jZWw9e2hhbmRsZUNhbmNlbH0gb3Blbj17aXNNb2RhbE9wZW59ID5cclxuICAgICAgICAgICAgICAgIDxGb3JtICBvbkZpbmlzaD17cmV0d2VldFN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtydENvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VSdENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbjsmqkg66mU66qo66W8IOuCqOqyqOuztOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxPbmVMb29rPiA8aW1nIGNsYXNzTmFtZT0naW1nMScgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7c2luZ2xlUG9zdC5JbWFnZXNbMF0/LnNyY31gfSAvPiA8L09uZUxvb2s+XHJcbiAgICAgICAgICAgICAgICAgIDxPbmVMb29rPiA8QnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uMScgaHRtbFR5cGU9XCJzdWJtaXRcIj7snbjsmqntlZjquLA8L0J1dHRvbj48L09uZUxvb2s+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgIHtsaWtlZCA/IFxyXG4gICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwi7KKL7JWE7JqUIOy3qOyGjFwiPlxyXG4gICAgICAgIDxIZWFydFR3b1RvbmUgb25DbGljaz17b25Vbmxpa2V9IHR3b1RvbmVDb2xvcj1cIiNmYzgzYzZcIiBjbGFzc05hbWU9J2ljb24yJy8+IFxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8L09uZUxvb2s+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxPbmVMb29rPiBcclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuyii+yVhOyalFwiPlxyXG4gICAgICAgIDxIZWFydE91dGxpbmVkIG9uQ2xpY2s9e29uTGlrZX0gY2xhc3NOYW1lPSdpY29uMicgLz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPC9PbmVMb29rPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdjb2wxJyA+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW1hZ2VcIiB0eXBlPVwiZmlsZVwiIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQxJ1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17PE9uZUxvb2s+PGltZyBjbGFzc05hbWU9J2ltZzInIGFsdD1cImV4YW1wbGVcIiBzcmM9eyBwcmV2aWV3SW1nID8gcHJldmlld0ltZyA6IGBodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtzaW5nbGVQb3N0LkltYWdlc1swXT8uc3JjfWB9IC8+PC9PbmVMb29rPn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgICAgICAgICAgIGlkICYmIHNpbmdsZVBvc3QuVXNlcklkID09PSBtZS5pZFxyXG4gICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi7J2066+47KeAIOyImOyglVwiPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfSA+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZE91dGxpbmVkIGtleT1cInVwbG9hZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgIFsgXHJcbiAgICAgICAgICAgICAgICAgICA8T25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgICB7aXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9J+yWuO2MlOuhnOyasCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFIZWFydENyYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naWNvbjMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17aXNGb2xsb3dpbmcgPyAn7Ja47YyU66Gc7JqwJyA6ICftjJTroZzsmrAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUhlYXJ0UHVsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uMydcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PSd1bmZvbGxvdydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICAgICAgPE9uZUxvb2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e3NpbmdsZVBvc3QuVXNlci5uaWNrbmFtZSArIFwi7J2YIO2ZiCDrsKnrrLjtlZjquLBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlci8ke3NpbmdsZVBvc3QuVXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUhvdXNlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naWNvbjMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TWV0YSB0aXRsZT17XCLquIDsk7TsnbQ6ICBcIiArIHNpbmdsZVBvc3QuVXNlci5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICB7c2luZ2xlUG9zdC5Db21tZW50cy5sZW5ndGggPT09IDAgXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5ObyBwb2ludHMgeWV0LjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgIDxoMT5UaGlzIGxvb2sgaXMuLi57c2luZ2xlUG9zdC5yYXRlQXZlcmFnZX0gcG9pbnRzLjwvaDE+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naWNvbjQnXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFQZW5Ub1NxdWFyZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7IFJlZmVyOiB7c2luZ2xlUG9zdC5SZWZlcmVuY2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXYyJyAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8aDM+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsgTGlrZToge3NpbmdsZVBvc3QuTGlrZXJzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7ZmxvYXQ6ICdsZWZ0Jywgd2lkdGg6NTAwfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaTEnPjxoMyA+642w7J2866as66OpIOygnOuqqTwvaDM+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGkyJz48SW5wdXQgbmFtZT0nbG9va25hbWUnIHJlYWRPbmx5PXtyZWFkfSB2YWx1ZT17bG9va05hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZUxvb2tOYW1lfSAgLz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nY2FyZDInPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uMicgYmxvY2sgPkluZm9ybWF0aW9uPC9CdXR0b24+XHJcbjx0aGVhZD5cclxuICAgIDx0ciA+XHJcbiAgICA8dGg+67aE66WYPC90aD5cclxuICAgIDx0aD7ruIzrnpzrk5zrqoU8L3RoPlxyXG4gICAgXHJcbiAgICA8L3RyPlxyXG48L3RoZWFkPlxyXG48dGJvZHkgY2xhc3NOYW1lPSdib2R5MScgPlxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgZGVmYXVsdFZhbHVlPVwi7IOB7J2YXCIgY2xhc3NOYW1lPSdpbnB1dDEnIC8+PC90ZD5cclxuICAgIDx0ZD4gPElucHV0IG5hbWU9J3RvcCcgdmFsdWU9e3RvcH0gcmVhZE9ubHk9e3JlYWR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRvcH0gIHR5cGU9XCJ0ZXh0XCIgIC8+PC90ZD4gXHJcbiAgICA8L3RyPlxyXG5cclxuICAgIDx0cj5cclxuICAgIDx0ZD4gPElucHV0IGRpc2FibGVkICBkZWZhdWx0VmFsdWU9XCLtlZjsnZhcIiBjbGFzc05hbWU9J2lucHV0MScgLz48L3RkPlxyXG4gICAgPHRkPiA8SW5wdXQgIHZhbHVlPXtib3R0b219IHJlYWRPbmx5PXtyZWFkfSBvbkNoYW5nZT17b25DaGFuZ2VCb3R0b219IHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuybkO2UvOyKpFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCAgdmFsdWU9e2RyZXNzfSByZWFkT25seT17cmVhZH0gb25DaGFuZ2U9e29uQ2hhbmdlRHJlc3N9IHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuyVhOyasO2EsFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCAgdmFsdWU9e291dGVyfSByZWFkT25seT17cmVhZH0gb25DaGFuZ2U9e29uQ2hhbmdlT3V0ZXJ9IHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuyLoOuwnFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCB2YWx1ZT17c2hvZXN9IHJlYWRPbmx5PXtyZWFkfSBvbkNoYW5nZT17b25DaGFuZ2VTaG9lc30gIHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIu2MqOyFmOyeoe2ZlFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCB2YWx1ZT17YWNjfSByZWFkT25seT17cmVhZH0gIG9uQ2hhbmdlPXtvbkNoYW5nZUFjY30gIHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG48L3Rib2R5PlxyXG48L0NhcmQ+XHJcbjwvZGl2PlxyXG48Q2FyZCBjbGFzc05hbWU9J2NhcmQzJz5cclxuPEJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbjMnIGJsb2NrID5EYWlseSBSZWNvcmQgPC9CdXR0b24+XHJcbjxoND7tlbTsi5ztg5zqt7g6IHt0YWdzfTwvaDQ+XHJcbjxUZXh0QXJlYVxyXG4gIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgc2hvd0NvdW50XHJcbiAgbWF4TGVuZ3RoPXsyNTB9XHJcbiAgdmFsdWU9e2NvbnRlbnR9IFxyXG4gIHJlYWRPbmx5PXtyZWFkfVxyXG4gIGNsYXNzTmFtZT0ndGV4dEFyZWExJ1xyXG4vPlxyXG5cclxuPC9DYXJkPlxyXG4gICAgeyBpZCAmJiBzaW5nbGVQb3N0LlVzZXJJZCA9PT0gbWUuaWRcclxuICAgID9cclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbjQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg7IKt7KCc7ZWY6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uNSdcclxuICAgICAgICAgICAgaHRtbFR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg7IiY7KCV7ZWY6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L09uZUxvb2s+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgICAgICA6XHJcbiAgICAgICAgbnVsbFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG48L0NvbD5cclxuXHJcbjwvZGl2PlxyXG48L0Zvcm0+XHJcbjwvT25lTG9vaz5cclxuXHJcbnsvKiDrjJPquIAgKi99XHJcbjxDb2w+XHJcbiAgICB7aW5kZXggPT09IHRydWUgID8gPE5ld0NvbW1lbnQgcG9zdD17c2luZ2xlUG9zdH0gLz4gOiBudWxsIH1cclxuICAgIHsvKiB7aW5kZXggPT09IGZhbHNlICA/IChzaW5nbGVQb3N0LkNvbW1lbnRzLmxlbmd0aCAhPT0gMCA/IDxDb21tZW50cyBwb3N0PXtzaW5nbGVQb3N0fSAvPiA6IDxOb0NvbW1lbnRzIC8+KSA6IG51bGwgfSAqL31cclxuICAgIDxJZkNvbW1lbnRzIC8+XHJcbjwvQ29sPlxyXG5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMoY29udGV4dCkgPT4geyBcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7IFxyXG4gICAgaWYoY29udGV4dC5yZXEgJiYgY29va2llKXsgXHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNUXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkIC8v7Zi57J2AIGNvbnRleHQucXVlcnkuaWRcclxuICAgIH0pO1xyXG4gICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==