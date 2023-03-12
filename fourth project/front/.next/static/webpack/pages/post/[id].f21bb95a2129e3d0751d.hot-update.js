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
      window.location.reload();
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
            lineNumber: 317,
            columnNumber: 24
          }
        });
      } else {
        return __jsx(_components_comments__WEBPACK_IMPORTED_MODULE_11__["default"], {
          post: singlePost,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319,
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
      lineNumber: 399,
      columnNumber: 9
    }
  }, __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "div1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 8
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
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
      lineNumber: 405,
      columnNumber: 9
    }
  })), me.id === singlePost.UserId ? null : __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uB0B4 \uACC4\uC815\uC5D0 \uC778\uC6A9\uD558\uAE30",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    className: "icon1",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPenToSquare"],
    onClick: retweetModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
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
      lineNumber: 423,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: retweetSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
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
      lineNumber: 425,
      columnNumber: 21
    }
  }), __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 19
    }
  }, " ", __jsx("img", {
    className: "img1",
    src: "http://localhost:3065/".concat((_singlePost$Images$ = singlePost.Images[0]) === null || _singlePost$Images$ === void 0 ? void 0 : _singlePost$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 29
    }
  }), " "), __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 19
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button1",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 29
    }
  }, "\uC778\uC6A9\uD558\uAE30")))), liked ? __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uC88B\uC544\uC694 \uCDE8\uC18C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
    onClick: onUnlike,
    twoToneColor: "#fc83c6",
    className: "icon2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 9
    }
  }))) : __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uC88B\uC544\uC694",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
    onClick: onLike,
    className: "icon2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 9
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
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
      lineNumber: 451,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card1",
    cover: __jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 24
      }
    }, __jsx("img", {
      className: "img2",
      alt: "example",
      src: previewImg ? previewImg : "http://localhost:3065/".concat((_singlePost$Images$2 = singlePost.Images[0]) === null || _singlePost$Images$2 === void 0 ? void 0 : _singlePost$Images$2.src),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 33
      }
    })),
    actions: id && singlePost.UserId === me.id ? [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: "\uC774\uBBF8\uC9C0 \uC218\uC815",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: onClickImageUpload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UploadOutlined"], {
      key: "upload",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 21
      }
    })))] : [__jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468,
        columnNumber: 20
      }
    }, isFollowing ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: "\uC5B8\uD314\uB85C\uC6B0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
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
        lineNumber: 472,
        columnNumber: 25
      }
    })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: isFollowing ? '언팔로우' : '팔로우',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
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
        lineNumber: 481,
        columnNumber: 25
      }
    }))), __jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: singlePost.User.nickname + "의 홈 방문하기",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://localhost:3000/user/".concat(singlePost.UserId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
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
        lineNumber: 495,
        columnNumber: 25
      }
    }))))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    title: "글쓴이:  " + singlePost.User.nickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 17
    }
  }, singlePost.Comments.length === 0 ? __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 19
    }
  }, "No points yet.") : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 19
    }
  }, "This look is...", singlePost.rateAverage, " points."), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 18
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 19
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    className: "icon4",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPenToSquare"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 22
    }
  }), "\xA0 Refer: ", singlePost.References.length), __jsx("div", {
    className: "div2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
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
      lineNumber: 532,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "li1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 33
    }
  }, "\uB370\uC77C\uB9AC\uB8E9 \uC81C\uBAA9")), __jsx("li", {
    className: "li2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
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
      lineNumber: 536,
      columnNumber: 33
    }
  })))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button2",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 13
    }
  }, "Information"), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 1
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 5
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 5
    }
  }, "\uBD84\uB958"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 5
    }
  }, "\uBE0C\uB79C\uB4DC\uBA85"))), __jsx("tbody", {
    className: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 1
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC0C1\uC758",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
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
      lineNumber: 553,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uD558\uC758",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
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
      lineNumber: 558,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC6D0\uD53C\uC2A4",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
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
      lineNumber: 563,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC544\uC6B0\uD130",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
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
      lineNumber: 568,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC2E0\uBC1C",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
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
      lineNumber: 573,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uD328\uC158\uC7A1\uD654",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
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
      lineNumber: 578,
      columnNumber: 10
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 1
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button3",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 1
    }
  }, "Daily Record "), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
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
      lineNumber: 587,
      columnNumber: 1
    }
  })), id && singlePost.UserId === me.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button4",
    onClick: onRemovePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 13
    }
  }, "\uC0AD\uC81C\uD558\uAE30"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button5",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 13
    }
  }, "\uC218\uC815\uD558\uAE30"))) : null)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 1
    }
  }, index === true ? __jsx(_components_newComment__WEBPACK_IMPORTED_MODULE_10__["default"], {
    post: singlePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 24
    }
  }) : null, __jsx(IfComments, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiTWV0YSIsIkNhcmQiLCJPbmVMb29rIiwic3R5bGVkIiwiZGl2IiwiUG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwic2luZ2xlUG9zdCIsInJldHdlZXRFcnJvciIsInJldHdlZXREb25lIiwidXBkYXRlUG9zdERvbmUiLCJsaWtlUG9zdERvbmUiLCJ1c2VTdGF0ZSIsInJlYWQiLCJzZXRSZWFkIiwicHJldmlld0ltZyIsInNldFByZXZpZXdJbWciLCJ1c2VJbnB1dCIsInJ0Q29uZW50Iiwib25DaGFuZ2VSdENvbnRlbnQiLCJzZXRSdENvbnRlbnQiLCJ1c2VFZmZlY3QiLCJVc2VySWQiLCJ3aW5kb3ciLCJhbGVydCIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkNoYW5nZUNvbnRlbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJjb250ZW50VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvcCIsInNldFRvcCIsIm9uQ2hhbmdlVG9wIiwidG9wVmFsdWUiLCJib3R0b20iLCJzZXRCb3R0b20iLCJvbkNoYW5nZUJvdHRvbSIsImJvdHRvbVZhbHVlIiwiZHJlc3MiLCJzZXREcmVzcyIsIm9uQ2hhbmdlRHJlc3MiLCJkcmVzc1ZhbHVlIiwic2hvZXMiLCJzZXRTaG9lcyIsIm9uQ2hhbmdlU2hvZXMiLCJzaG9lc1ZhbHVlIiwiYWNjIiwic2V0QWNjIiwib25DaGFuZ2VBY2MiLCJhY2NWYWx1ZSIsIm91dGVyIiwic2V0T3V0ZXIiLCJvbkNoYW5nZU91dGVyIiwib3V0ZXJWYWx1ZSIsImxvb2tOYW1lIiwic2V0TG9va05hbWUiLCJvbkNoYW5nZUxvb2tOYW1lIiwibG9va05hbWVWYWx1ZSIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJpbmRleCIsInNldEluZGV4IiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJsaWtlZCIsIkxpa2VycyIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwidGFncyIsImkiLCJIYXNodGFncyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInB1c2giLCJuYW1lIiwib25TZWxlY3QiLCJvbkxpa2UiLCJ0eXBlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25Vbmxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwib25DbGlja0J1dHRvbiIsIlVORk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfUkVRVUVTVCIsInJldHdlZXRNb2RhbCIsInJldHdlZXRTdWJtaXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiUkVUV0VFVF9SRVFVRVNUIiwiaGFuZGxlQ2FuY2VsIiwiSWZDb21tZW50cyIsIkNvbW1lbnRzIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwib25SZW1vdmVQb3N0IiwiY29uZmlybSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSb3V0ZXIiLCJyZXBsYWNlIiwib25TdWJtaXQiLCJmb3JFYWNoIiwicCIsIlVQREFURV9QT1NUX1JFUVVFU1QiLCJvbkNoYW5nZUltYWdlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJmaWxlcyIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJwcmV2aWV3SW1nVXJsIiwicmVzdWx0IiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1QiLCJmYVBlblRvU3F1YXJlIiwiSW1hZ2VzIiwic3JjIiwiZmFIZWFydENyYWNrIiwiZmFIZWFydFB1bHNlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFIb3VzZSIsInJhdGVBdmVyYWdlIiwiUmVmZXJlbmNlcyIsIndpZHRoIl0sIm1h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TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQUssRUFDbkU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxRQUFLLE1BQUMsMENBQUs7SUFBRSxLQUFLLEVBQUVFLEtBQU07SUFBQyxRQUFRLEVBQUU5QixJQUFLO0lBQUMsUUFBUSxFQUFFZ0MsYUFBYztJQUFDLElBQUksRUFBQyxNQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUFLLENBQ2xGLEVBRUw7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNBO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsUUFBSyxNQUFDLDBDQUFLO0lBQUMsUUFBUTtJQUFFLFlBQVksRUFBQyxvQkFBSztJQUFDLFNBQVMsRUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUFLLEVBQ25FO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsUUFBSyxNQUFDLDBDQUFLO0lBQUUsS0FBSyxFQUFFVSxLQUFNO0lBQUMsUUFBUSxFQUFFMUMsSUFBSztJQUFDLFFBQVEsRUFBRTRDLGFBQWM7SUFBQyxJQUFJLEVBQUMsTUFBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FBSyxDQUNsRixFQUVMO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLFFBQUssTUFBQywwQ0FBSztJQUFDLFFBQVE7SUFBRSxZQUFZLEVBQUMsY0FBSTtJQUFDLFNBQVMsRUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUFLLEVBQ2xFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsUUFBSyxNQUFDLDBDQUFLO0lBQUMsS0FBSyxFQUFFVixLQUFNO0lBQUMsUUFBUSxFQUFFbEMsSUFBSztJQUFDLFFBQVEsRUFBRW9DLGFBQWM7SUFBRSxJQUFJLEVBQUMsTUFBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FBSyxDQUNsRixFQUVMO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLFFBQUssTUFBQywwQ0FBSztJQUFDLFFBQVE7SUFBRSxZQUFZLEVBQUMsMEJBQU07SUFBQyxTQUFTLEVBQUMsUUFBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FBSyxFQUNwRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLFFBQUssTUFBQywwQ0FBSztJQUFDLEtBQUssRUFBRUUsR0FBSTtJQUFDLFFBQVEsRUFBRXRDLElBQUs7SUFBRSxRQUFRLEVBQUV3QyxXQUFZO0lBQUUsSUFBSSxFQUFDLE1BQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQUssQ0FDL0UsQ0FFRCxDQUNELENBQ0QsRUFDTixNQUFDLHlDQUFJO0lBQUMsU0FBUyxFQUFDLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUN2QixNQUFDLDJDQUFNO0lBQUMsU0FBUyxFQUFDLFNBQVM7SUFBQyxLQUFLO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsbUJBQXdCLEVBQ3pEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsaUNBQVd3QixJQUFJLENBQU0sRUFDckIsTUFBQyw4REFBUTtJQUNQLFFBQVEsRUFBRWhELGVBQWdCO0lBQzFCLFNBQVM7SUFDVCxTQUFTLEVBQUUsR0FBSTtJQUNmLEtBQUssRUFBRUYsT0FBUTtJQUNmLFFBQVEsRUFBRWQsSUFBSztJQUNmLFNBQVMsRUFBQyxXQUFXO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDckIsQ0FFSyxFQUNEZCxFQUFFLElBQUlRLFVBQVUsQ0FBQ2UsTUFBTSxLQUFLbEIsRUFBRSxDQUFDTCxFQUFFLEdBRzNCLG1FQUNBLE1BQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1IsTUFBQywyQ0FBTTtJQUNQLFNBQVMsRUFBQyxTQUFTO0lBQ25CLE9BQU8sRUFBRTJHLFlBQWE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSw4QkFHYixFQUNULE1BQUMsMkNBQU07SUFDUCxTQUFTLEVBQUMsU0FBUztJQUNuQixRQUFRLEVBQUMsUUFBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUdSLENBQ0MsQ0FDUCxHQUdQLElBQUksQ0FLTixDQUVBLENBQ0MsQ0FDRyxFQUdWLE1BQUMsd0NBQUc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNDekMsS0FBSyxLQUFLLElBQUksR0FBSSxNQUFDLCtEQUFVO0lBQUMsSUFBSSxFQUFFMUQsVUFBVztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsR0FBRyxJQUFJLEVBRTFELE1BQUMsVUFBVTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDWixDQUVVO0FBR2hCLENBQUM7QUFBQyxHQTVmSWIsSUFBSTtFQUFBLFFBRVdFLHVEQUFXLEVBQ2JFLHFEQUFTLEVBRVRHLHVEQUFXLEVBQ2dFQSx1REFBVyxFQUlqRGdCLHdEQUFRO0FBQUE7QUFBQSxNQVYxRHZCLElBQUk7QUFBQTtBQWdoQktBLG1FQUFJLEVBQUM7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLmYyMWJiOTVhMjEyOWUzZDA3NTFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIEZvcm0sIElucHV0LCBNb2RhbCwgUm93LCBTd2l0Y2gsIFRvb2x0aXAgIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEhlYXJ0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgVXBsb2FkT3V0bGluZWQgIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcImFudGQvbGliL2lucHV0L1RleHRBcmVhXCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRVRXRUVUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFVQREFURV9QT1NUX1JFUVVFU1QsIFVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uLy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0ICBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBOZXdDb21tZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmV3Q29tbWVudCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1lbnRzJztcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtmYVBlblRvU3F1YXJlfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHtmYUhlYXJ0UHVsc2V9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgZmFIZWFydENyYWNrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFIb3VzZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBOb0NvbW1lbnRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbm9Db21tZW50cyc7XHJcbmltcG9ydCAnLi4vY3NzL3Bvc3RbaWRdLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgT25lTG9vayA9IHN0eWxlZC5kaXZgXHJcblxyXG4gICAgLmRpdjF7XHJcbiAgICAgICAgd2lkdGg6IDExMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC5kaXYye1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnN3aXRjaDF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDkwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbjF7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmljb24ye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjQzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5pY29uM3tcclxuICAgICAgICB6LWluZGV4OjEwO1xyXG4gICAgfVxyXG4gICAgLmltZzF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMzBweDtcclxuICAgIH1cclxuICAgIC5pbWcye1xyXG4gICAgICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTg4cHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5idXR0b24ze1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5idXR0b241e1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmNvbDF7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY2FyZDF7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAuY2FyZDJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI0NXB4O1xyXG4gICAgfVxyXG4gICAgLmxpMXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAubGkye1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5ib2R5MXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQxe1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dEFyZWExe1xyXG4gICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7aW1hZ2VQYXRocywgc2luZ2xlUG9zdCwgcmV0d2VldEVycm9yLCByZXR3ZWV0RG9uZSwgdXBkYXRlUG9zdERvbmUsIGxpa2VQb3N0RG9uZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW3JlYWQsIHNldFJlYWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbcHJldmlld0ltZywgc2V0UHJldmlld0ltZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbcnRDb25lbnQsIG9uQ2hhbmdlUnRDb250ZW50LCBzZXRSdENvbnRlbnRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy/roZzqt7jsnbgg7JWE7J2065SU7JmAIOqyjOyLnOq4gCDslYTsnbTrlJTqsIAg6rCZ7Jy866m0IOyImOyglSwg7IKt7KCcIO2ZnOyEse2ZlFxyXG4gICAgICAgIGlmKG1lLmlkID09PSBzaW5nbGVQb3N0LlVzZXJJZCl7XHJcbiAgICAgICAgICAgIHNldFJlYWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih1cGRhdGVQb3N0RG9uZSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnTG9vayDsiJjsoJUg7JmE66OMLicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHJldHdlZXRFcnJvcil7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQocmV0d2VldEVycm9yKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihyZXR3ZWV0RG9uZSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgn7J247JqpIOyZhOujjCEnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWUgJiYgbWUuaWQsIHNpbmdsZVBvc3QsIHVwZGF0ZVBvc3REb25lLCByZXR3ZWV0RXJyb3IsIHJldHdlZXREb25lXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKHNpbmdsZVBvc3QuY29udGVudCk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VDb250ZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjb250ZW50VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRDb250ZW50KGNvbnRlbnRWYWx1ZSk7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbdG9wLCBzZXRUb3BdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC50b3ApO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlVG9wID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0b3BWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFRvcCh0b3BWYWx1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW2JvdHRvbSwgc2V0Qm90dG9tXSA9IHVzZVN0YXRlKHNpbmdsZVBvc3QuYm90dG9tKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUJvdHRvbSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCBib3R0b21WYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0Qm90dG9tKGJvdHRvbVZhbHVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbZHJlc3MsIHNldERyZXNzXSA9IHVzZVN0YXRlKHNpbmdsZVBvc3QuZHJlc3MpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlRHJlc3MgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRyZXNzVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXREcmVzcyhkcmVzc1ZhbHVlKTtcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtzaG9lcywgc2V0U2hvZXNdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5zaG9lcyk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VTaG9lcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCBzaG9lc1ZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRTaG9lcyhzaG9lc1ZhbHVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbYWNjLCBzZXRBY2NdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5hY2MpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlQWNjID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zdCBhY2NWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldEFjYyhhY2NWYWx1ZSk7XHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFtvdXRlciwgc2V0T3V0ZXJdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5vdXRlcik7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VPdXRlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCBvdXRlclZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRPdXRlcihvdXRlclZhbHVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbbG9va05hbWUsIHNldExvb2tOYW1lXSA9IHVzZVN0YXRlKHNpbmdsZVBvc3QubG9va05hbWUpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlTG9va05hbWUgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvb2tOYW1lVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRMb29rTmFtZShsb29rTmFtZVZhbHVlKTtcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJzaW5nbGVQb3N0Ojo6OjogXCIsIHNpbmdsZVBvc3QpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibWU6Ojo6OjpcIiwgbWUpO1xyXG5cclxuICAgIGNvbnN0IGxpa2VkID0gc2luZ2xlUG9zdD8uTGlrZXJzWzBdO1xyXG5cclxuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gc2luZ2xlUG9zdC5Vc2VySWQpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwi7KKL7JWE7JqUOiBcIiwgbGlrZWQpO1xyXG5cclxuICAgIC8v7ZW07Iuc7YOc6re4ICPrtpnsl6zshJwg67+M66as6riwXHJcbiAgICBjb25zdCB0YWdzID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNpbmdsZVBvc3QuSGFzaHRhZ3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHNpbmdsZVBvc3QuSGFzaHRhZ3MgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRhZ3MucHVzaCggXCIjXCIgKyBzaW5nbGVQb3N0Lkhhc2h0YWdzW2ldLm5hbWUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/rjJPquIAg7JOw6riwLCDrs7TquLAg7ISg7YOdXHJcbiAgICBjb25zdCBvblNlbGVjdCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJbmRleCghaW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXg6IFwiLCBpbmRleCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvL+yii+yVhOyalFxyXG4gICAgICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sW2lkXSk7XHJcblxyXG4gICAgICAgIC8v7KKL7JWE7JqUIOy3qOyGjFxyXG4gICAgICAgIGNvbnN0IG9uVW5saWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGlkXHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxbaWRdKTtcclxuXHJcbiAgICAgICAgLy/tjJTroZzsmrBcclxuICAgICAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihpc0ZvbGxvd2luZyl7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzaW5nbGVQb3N0LlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzaW5nbGVQb3N0LlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFtpc0ZvbGxvd2luZ10pO1xyXG5cclxuICAgICAgICAvL+umrO2KuOycl+uqqOuLrFxyXG4gICAgICAgIGNvbnN0IHJldHdlZXRNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYoIWlkKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+umrO2KuOycl1xyXG4gICAgICAgIGNvbnN0IHJldHdlZXRTdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCBydENvbmVudCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncG9zdElkJywgc2luZ2xlUG9zdC5pZCk7XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YVxyXG4gICAgICAgICAgICB9LCBzZXRJc01vZGFsT3BlbihmYWxzZSkpO1xyXG4gICAgICAgIH0sIFtjb250ZW50XSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/rpqztirjsnJcg66qo64usIOywvSDri6vquLBcclxuICAgICAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgLy/rjJPquIAg7JeG7J2EIOuVjFxyXG4gICAgY29uc3QgSWZDb21tZW50cyA9ICgpID0+IHtcclxuICAgICAgICBpZihpbmRleCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBpZihzaW5nbGVQb3N0LkNvbW1lbnRzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPE5vQ29tbWVudHMgLz47XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICByZXR1cm4gPENvbW1lbnRzIHBvc3Q9e3NpbmdsZVBvc3R9IC8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy/snbTrr7jsp4Ag7IiY7KCV7J2EIOychO2VnCDssL0g652E7Jqw6riwXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gICAgLy/qsozsi5zquIAg7IKt7KCcIOyalOyyrVxyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29uZmlybShcIuydtCBMb29r7J2EIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cIikpe1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNpbmdsZVBvc3QuaWQsIFxyXG4gICAgICAgICAgICB9LCBSb3V0ZXIucmVwbGFjZShgL2ApKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuyCreygnCDst6jshoxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG5cclxuLy/qsozsi5zquIAg7IiY7KCVIOyalOyyrVxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCBjb250ZW50KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RvcCcsIHRvcCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdib3R0b20nLCBib3R0b20pO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZHJlc3MnLCBkcmVzcyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzaG9lcycsIHNob2VzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FjYycsIGFjYyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdvdXRlcicsIG91dGVyKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2xvb2tOYW1lJywgbG9va05hbWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncG9zdElkJywgaWQpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVVBEQVRFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSxbY29udGVudCwgaW1hZ2VQYXRoc10pO1xyXG5cclxuICAgIC8v7J2066+47KeAIOuvuOumrOuztOq4sFxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICBpZihlLnRhcmdldC5maWxlc1swXSl7XHJcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aWV3SW1nVXJsID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgIGlmKHByZXZpZXdJbWdVcmwpe1xyXG4gICAgICAgICAgICBzZXRQcmV2aWV3SW1nKHByZXZpZXdJbWdVcmwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgIFxyXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGltYWdlRm9ybURhdGFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBcHBMYXlvdXQgPlxyXG4gICAgICAgICAgICA8T25lTG9vaz5cclxuICAgICAgICAgICAgPEZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXYxJz5cclxuICAgICAgIDxSb3c+XHJcbiAgICAgICAgPGgxPkRhaWx5TG9vazwvaDE+XHJcbiAgICAgICAgPFN3aXRjaCBkZWZhdWx0Q2hlY2tlZD17aW5kZXh9IG9uQ2hhbmdlPXtvblNlbGVjdH0gY2xhc3NOYW1lPSdzd2l0Y2gxJyBjaGVja2VkQ2hpbGRyZW49XCLrjJPquIDsk7DquLBcIiB1bkNoZWNrZWRDaGlsZHJlbj1cIuuMk+q4gOuztOq4sFwiIC8+XHJcbiAgICAgICA8L1Jvdz5cclxuICAgICAgIHttZS5pZCA9PT0gc2luZ2xlUG9zdC5Vc2VySWQgXHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuuCtCDqs4TsoJXsl5Ag7J247Jqp7ZWY6riwXCI+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uMSdcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtmYVBlblRvU3F1YXJlfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXR3ZWV0TW9kYWx9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgIH1cclxuICAgICAgICAgICAgey8qIOumrO2KuOyclyDrqqjri6wgKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCB0aXRsZT1cIuyduOyaqe2VmOq4sFwiIGZvb3Rlcj17bnVsbH0gb25DYW5jZWw9e2hhbmRsZUNhbmNlbH0gb3Blbj17aXNNb2RhbE9wZW59ID5cclxuICAgICAgICAgICAgICAgIDxGb3JtICBvbkZpbmlzaD17cmV0d2VldFN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtydENvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VSdENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbjsmqkg66mU66qo66W8IOuCqOqyqOuztOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxPbmVMb29rPiA8aW1nIGNsYXNzTmFtZT0naW1nMScgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7c2luZ2xlUG9zdC5JbWFnZXNbMF0/LnNyY31gfSAvPiA8L09uZUxvb2s+XHJcbiAgICAgICAgICAgICAgICAgIDxPbmVMb29rPiA8QnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uMScgaHRtbFR5cGU9XCJzdWJtaXRcIj7snbjsmqntlZjquLA8L0J1dHRvbj48L09uZUxvb2s+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgIHtsaWtlZCA/IFxyXG4gICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwi7KKL7JWE7JqUIOy3qOyGjFwiPlxyXG4gICAgICAgIDxIZWFydFR3b1RvbmUgb25DbGljaz17b25Vbmxpa2V9IHR3b1RvbmVDb2xvcj1cIiNmYzgzYzZcIiBjbGFzc05hbWU9J2ljb24yJy8+IFxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8L09uZUxvb2s+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxPbmVMb29rPiBcclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuyii+yVhOyalFwiPlxyXG4gICAgICAgIDxIZWFydE91dGxpbmVkIG9uQ2xpY2s9e29uTGlrZX0gY2xhc3NOYW1lPSdpY29uMicgLz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPC9PbmVMb29rPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdjb2wxJyA+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW1hZ2VcIiB0eXBlPVwiZmlsZVwiIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQxJ1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17PE9uZUxvb2s+PGltZyBjbGFzc05hbWU9J2ltZzInIGFsdD1cImV4YW1wbGVcIiBzcmM9eyBwcmV2aWV3SW1nID8gcHJldmlld0ltZyA6IGBodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtzaW5nbGVQb3N0LkltYWdlc1swXT8uc3JjfWB9IC8+PC9PbmVMb29rPn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgICAgICAgICAgIGlkICYmIHNpbmdsZVBvc3QuVXNlcklkID09PSBtZS5pZFxyXG4gICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi7J2066+47KeAIOyImOyglVwiPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfSA+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZE91dGxpbmVkIGtleT1cInVwbG9hZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgIFsgXHJcbiAgICAgICAgICAgICAgICAgICA8T25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgICB7aXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9J+yWuO2MlOuhnOyasCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFIZWFydENyYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naWNvbjMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17aXNGb2xsb3dpbmcgPyAn7Ja47YyU66Gc7JqwJyA6ICftjJTroZzsmrAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUhlYXJ0UHVsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uMydcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PSd1bmZvbGxvdydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICAgICAgPE9uZUxvb2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e3NpbmdsZVBvc3QuVXNlci5uaWNrbmFtZSArIFwi7J2YIO2ZiCDrsKnrrLjtlZjquLBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlci8ke3NpbmdsZVBvc3QuVXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUhvdXNlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naWNvbjMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TWV0YSB0aXRsZT17XCLquIDsk7TsnbQ6ICBcIiArIHNpbmdsZVBvc3QuVXNlci5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICB7c2luZ2xlUG9zdC5Db21tZW50cy5sZW5ndGggPT09IDAgXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5ObyBwb2ludHMgeWV0LjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgIDxoMT5UaGlzIGxvb2sgaXMuLi57c2luZ2xlUG9zdC5yYXRlQXZlcmFnZX0gcG9pbnRzLjwvaDE+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naWNvbjQnXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFQZW5Ub1NxdWFyZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7IFJlZmVyOiB7c2luZ2xlUG9zdC5SZWZlcmVuY2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXYyJyAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8aDM+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsgTGlrZToge3NpbmdsZVBvc3QuTGlrZXJzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7ZmxvYXQ6ICdsZWZ0Jywgd2lkdGg6NTAwfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaTEnPjxoMyA+642w7J2866as66OpIOygnOuqqTwvaDM+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGkyJz48SW5wdXQgbmFtZT0nbG9va25hbWUnIHJlYWRPbmx5PXtyZWFkfSB2YWx1ZT17bG9va05hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZUxvb2tOYW1lfSAgLz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nY2FyZDInPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uMicgYmxvY2sgPkluZm9ybWF0aW9uPC9CdXR0b24+XHJcbjx0aGVhZD5cclxuICAgIDx0ciA+XHJcbiAgICA8dGg+67aE66WYPC90aD5cclxuICAgIDx0aD7ruIzrnpzrk5zrqoU8L3RoPlxyXG4gICAgXHJcbiAgICA8L3RyPlxyXG48L3RoZWFkPlxyXG48dGJvZHkgY2xhc3NOYW1lPSdib2R5MScgPlxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgZGVmYXVsdFZhbHVlPVwi7IOB7J2YXCIgY2xhc3NOYW1lPSdpbnB1dDEnIC8+PC90ZD5cclxuICAgIDx0ZD4gPElucHV0IG5hbWU9J3RvcCcgdmFsdWU9e3RvcH0gcmVhZE9ubHk9e3JlYWR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRvcH0gIHR5cGU9XCJ0ZXh0XCIgIC8+PC90ZD4gXHJcbiAgICA8L3RyPlxyXG5cclxuICAgIDx0cj5cclxuICAgIDx0ZD4gPElucHV0IGRpc2FibGVkICBkZWZhdWx0VmFsdWU9XCLtlZjsnZhcIiBjbGFzc05hbWU9J2lucHV0MScgLz48L3RkPlxyXG4gICAgPHRkPiA8SW5wdXQgIHZhbHVlPXtib3R0b219IHJlYWRPbmx5PXtyZWFkfSBvbkNoYW5nZT17b25DaGFuZ2VCb3R0b219IHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuybkO2UvOyKpFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCAgdmFsdWU9e2RyZXNzfSByZWFkT25seT17cmVhZH0gb25DaGFuZ2U9e29uQ2hhbmdlRHJlc3N9IHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuyVhOyasO2EsFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCAgdmFsdWU9e291dGVyfSByZWFkT25seT17cmVhZH0gb25DaGFuZ2U9e29uQ2hhbmdlT3V0ZXJ9IHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuyLoOuwnFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCB2YWx1ZT17c2hvZXN9IHJlYWRPbmx5PXtyZWFkfSBvbkNoYW5nZT17b25DaGFuZ2VTaG9lc30gIHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIu2MqOyFmOyeoe2ZlFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCB2YWx1ZT17YWNjfSByZWFkT25seT17cmVhZH0gIG9uQ2hhbmdlPXtvbkNoYW5nZUFjY30gIHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG48L3Rib2R5PlxyXG48L0NhcmQ+XHJcbjwvZGl2PlxyXG48Q2FyZCBjbGFzc05hbWU9J2NhcmQzJz5cclxuPEJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbjMnIGJsb2NrID5EYWlseSBSZWNvcmQgPC9CdXR0b24+XHJcbjxoND7tlbTsi5ztg5zqt7g6IHt0YWdzfTwvaDQ+XHJcbjxUZXh0QXJlYVxyXG4gIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgc2hvd0NvdW50XHJcbiAgbWF4TGVuZ3RoPXsyNTB9XHJcbiAgdmFsdWU9e2NvbnRlbnR9IFxyXG4gIHJlYWRPbmx5PXtyZWFkfVxyXG4gIGNsYXNzTmFtZT0ndGV4dEFyZWExJ1xyXG4vPlxyXG5cclxuPC9DYXJkPlxyXG4gICAgeyBpZCAmJiBzaW5nbGVQb3N0LlVzZXJJZCA9PT0gbWUuaWRcclxuICAgID9cclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbjQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg7IKt7KCc7ZWY6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uNSdcclxuICAgICAgICAgICAgaHRtbFR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg7IiY7KCV7ZWY6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L09uZUxvb2s+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgICAgICA6XHJcbiAgICAgICAgbnVsbFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG48L0NvbD5cclxuXHJcbjwvZGl2PlxyXG48L0Zvcm0+XHJcbjwvT25lTG9vaz5cclxuXHJcbnsvKiDrjJPquIAgKi99XHJcbjxDb2w+XHJcbiAgICB7aW5kZXggPT09IHRydWUgID8gPE5ld0NvbW1lbnQgcG9zdD17c2luZ2xlUG9zdH0gLz4gOiBudWxsIH1cclxuICAgIHsvKiB7aW5kZXggPT09IGZhbHNlICA/IChzaW5nbGVQb3N0LkNvbW1lbnRzLmxlbmd0aCAhPT0gMCA/IDxDb21tZW50cyBwb3N0PXtzaW5nbGVQb3N0fSAvPiA6IDxOb0NvbW1lbnRzIC8+KSA6IG51bGwgfSAqL31cclxuICAgIDxJZkNvbW1lbnRzIC8+XHJcbjwvQ29sPlxyXG5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMoY29udGV4dCkgPT4geyBcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7IFxyXG4gICAgaWYoY29udGV4dC5yZXEgJiYgY29va2llKXsgXHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNUXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkIC8v7Zi57J2AIGNvbnRleHQucXVlcnkuaWRcclxuICAgIH0pO1xyXG4gICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==