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
      if (!likePostDone) {
        window.alert(retweetError);
      }
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
            lineNumber: 319,
            columnNumber: 24
          }
        });
      } else {
        return __jsx(_components_comments__WEBPACK_IMPORTED_MODULE_11__["default"], {
          post: singlePost,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321,
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
      lineNumber: 401,
      columnNumber: 9
    }
  }, __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "div1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 8
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
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
      lineNumber: 407,
      columnNumber: 9
    }
  })), me.id === singlePost.UserId ? null : __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uB0B4 \uACC4\uC815\uC5D0 \uC778\uC6A9\uD558\uAE30",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    className: "icon1",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPenToSquare"],
    onClick: retweetModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
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
      lineNumber: 425,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: retweetSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
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
      lineNumber: 427,
      columnNumber: 21
    }
  }), __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 19
    }
  }, " ", __jsx("img", {
    className: "img1",
    src: "http://localhost:3065/".concat((_singlePost$Images$ = singlePost.Images[0]) === null || _singlePost$Images$ === void 0 ? void 0 : _singlePost$Images$.src),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 29
    }
  }), " "), __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 19
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button1",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 29
    }
  }, "\uC778\uC6A9\uD558\uAE30")))), liked ? __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uC88B\uC544\uC694 \uCDE8\uC18C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
    onClick: onUnlike,
    twoToneColor: "#fc83c6",
    className: "icon2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 9
    }
  }))) : __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\uC88B\uC544\uC694",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
    onClick: onLike,
    className: "icon2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 9
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "col1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
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
      lineNumber: 453,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card1",
    cover: __jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 24
      }
    }, __jsx("img", {
      className: "img2",
      alt: "example",
      src: previewImg ? previewImg : "http://localhost:3065/".concat((_singlePost$Images$2 = singlePost.Images[0]) === null || _singlePost$Images$2 === void 0 ? void 0 : _singlePost$Images$2.src),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 33
      }
    })),
    actions: id && singlePost.UserId === me.id ? [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: "\uC774\uBBF8\uC9C0 \uC218\uC815",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: onClickImageUpload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UploadOutlined"], {
      key: "upload",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 21
      }
    })))] : [__jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 20
      }
    }, isFollowing ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: "\uC5B8\uD314\uB85C\uC6B0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
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
        lineNumber: 474,
        columnNumber: 25
      }
    })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: isFollowing ? '언팔로우' : '팔로우',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
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
        lineNumber: 483,
        columnNumber: 25
      }
    }))), __jsx(OneLook, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: singlePost.User.nickname + "의 홈 방문하기",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://localhost:3000/user/".concat(singlePost.UserId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
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
        lineNumber: 497,
        columnNumber: 25
      }
    }))))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    title: "글쓴이:  " + singlePost.User.nickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 17
    }
  }, singlePost.Comments.length === 0 ? __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 19
    }
  }, "No points yet.") : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 19
    }
  }, "This look is...", singlePost.rateAverage, " points."), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 18
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 19
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    className: "icon4",
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPenToSquare"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 22
    }
  }), "\xA0 Refer: ", singlePost.References.length), __jsx("div", {
    className: "div2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
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
      lineNumber: 534,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "li1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 33
    }
  }, "\uB370\uC77C\uB9AC\uB8E9 \uC81C\uBAA9")), __jsx("li", {
    className: "li2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
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
      lineNumber: 538,
      columnNumber: 33
    }
  })))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button2",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 13
    }
  }, "Information"), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 1
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 5
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 5
    }
  }, "\uBD84\uB958"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 5
    }
  }, "\uBE0C\uB79C\uB4DC\uBA85"))), __jsx("tbody", {
    className: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 1
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC0C1\uC758",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
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
      lineNumber: 555,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uD558\uC758",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
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
      lineNumber: 560,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC6D0\uD53C\uC2A4",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
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
      lineNumber: 565,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC544\uC6B0\uD130",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
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
      lineNumber: 570,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uC2E0\uBC1C",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
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
      lineNumber: 575,
      columnNumber: 10
    }
  }))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 5
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    defaultValue: "\uD328\uC158\uC7A1\uD654",
    className: "input1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 10
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
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
      lineNumber: 580,
      columnNumber: 10
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 1
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button3",
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 1
    }
  }, "Daily Record "), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
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
      lineNumber: 589,
      columnNumber: 1
    }
  })), id && singlePost.UserId === me.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(OneLook, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button4",
    onClick: onRemovePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 13
    }
  }, "\uC0AD\uC81C\uD558\uAE30"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "button5",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 13
    }
  }, "\uC218\uC815\uD558\uAE30"))) : null)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 1
    }
  }, index === true ? __jsx(_components_newComment__WEBPACK_IMPORTED_MODULE_10__["default"], {
    post: singlePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 24
    }
  }) : null, __jsx(IfComments, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiTWV0YSIsIkNhcmQiLCJPbmVMb29rIiwic3R5bGVkIiwiZGl2IiwiUG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwic2luZ2xlUG9zdCIsInJldHdlZXRFcnJvciIsInJldHdlZXREb25lIiwidXBkYXRlUG9zdERvbmUiLCJsaWtlUG9zdERvbmUiLCJ1c2VTdGF0ZSIsInJlYWQiLCJzZXRSZWFkIiwicHJldmlld0ltZyIsInNldFByZXZpZXdJbWciLCJ1c2VJbnB1dCIsInJ0Q29uZW50Iiwib25DaGFuZ2VSdENvbnRlbnQiLCJzZXRSdENvbnRlbnQiLCJ1c2VFZmZlY3QiLCJVc2VySWQiLCJ3aW5kb3ciLCJhbGVydCIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwib25DaGFuZ2VDb250ZW50IiwidXNlQ2FsbGJhY2siLCJlIiwiY29udGVudFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b3AiLCJzZXRUb3AiLCJvbkNoYW5nZVRvcCIsInRvcFZhbHVlIiwiYm90dG9tIiwic2V0Qm90dG9tIiwib25DaGFuZ2VCb3R0b20iLCJib3R0b21WYWx1ZSIsImRyZXNzIiwic2V0RHJlc3MiLCJvbkNoYW5nZURyZXNzIiwiZHJlc3NWYWx1ZSIsInNob2VzIiwic2V0U2hvZXMiLCJvbkNoYW5nZVNob2VzIiwic2hvZXNWYWx1ZSIsImFjYyIsInNldEFjYyIsIm9uQ2hhbmdlQWNjIiwiYWNjVmFsdWUiLCJvdXRlciIsInNldE91dGVyIiwib25DaGFuZ2VPdXRlciIsIm91dGVyVmFsdWUiLCJsb29rTmFtZSIsInNldExvb2tOYW1lIiwib25DaGFuZ2VMb29rTmFtZSIsImxvb2tOYW1lVmFsdWUiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwiaW5kZXgiLCJzZXRJbmRleCIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJjb25zb2xlIiwibG9nIiwibGlrZWQiLCJMaWtlcnMiLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidiIsInRhZ3MiLCJpIiwiSGFzaHRhZ3MiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwibmFtZSIsIm9uU2VsZWN0Iiwib25MaWtlIiwidHlwZSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uVW5saWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uQ2xpY2tCdXR0b24iLCJVTkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJyZXR3ZWV0TW9kYWwiLCJyZXR3ZWV0U3VibWl0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIlJFVFdFRVRfUkVRVUVTVCIsImhhbmRsZUNhbmNlbCIsIklmQ29tbWVudHMiLCJDb21tZW50cyIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uUmVtb3ZlUG9zdCIsImNvbmZpcm0iLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUm91dGVyIiwicmVwbGFjZSIsIm9uU3VibWl0IiwiZm9yRWFjaCIsInAiLCJVUERBVEVfUE9TVF9SRVFVRVNUIiwib25DaGFuZ2VJbWFnZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiZmlsZXMiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwicHJldmlld0ltZ1VybCIsInJlc3VsdCIsImltYWdlRm9ybURhdGEiLCJjYWxsIiwiZiIsIlVQTE9BRF9VUERBVEVfTE9PS19JTUFHRV9SRVFVRVNUIiwiZmFQZW5Ub1NxdWFyZSIsIkltYWdlcyIsInNyYyIsImZhSGVhcnRDcmFjayIsImZhSGVhcnRQdWxzZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZhSG91c2UiLCJyYXRlQXZlcmFnZSIsIlJlZmVyZW5jZXMiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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LEVBQUUsQ0FBQ0wsRUFBRSxHQUczQixtRUFDQSxNQUFDLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNSLE1BQUMsMkNBQU07SUFDUCxTQUFTLEVBQUMsU0FBUztJQUNuQixPQUFPLEVBQUV5RyxZQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBR2IsRUFDVCxNQUFDLDJDQUFNO0lBQ1AsU0FBUyxFQUFDLFNBQVM7SUFDbkIsUUFBUSxFQUFDLFFBQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSw4QkFHUixDQUNDLENBQ1AsR0FHUCxJQUFJLENBS04sQ0FFQSxDQUNDLENBQ0csRUFHVixNQUFDLHdDQUFHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQ3pDLEtBQUssS0FBSyxJQUFJLEdBQUksTUFBQywrREFBVTtJQUFDLElBQUksRUFBRXhELFVBQVc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEdBQUcsSUFBSSxFQUUxRCxNQUFDLFVBQVU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQ1osQ0FFVTtBQUdoQixDQUFDO0FBQUMsR0E5ZkliLElBQUk7RUFBQSxRQUVXRSx1REFBVyxFQUNiRSxxREFBUyxFQUVURyx1REFBVyxFQUNnRUEsdURBQVcsRUFJakRnQix3REFBUTtBQUFBO0FBQUEsTUFWMUR2QixJQUFJO0FBQUE7QUFraEJLQSxtRUFBSSxFQUFDO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS44ZWNlYTg0YTM1MWJkZTVlZDZlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ29sLCBGb3JtLCBJbnB1dCwgTW9kYWwsIFJvdywgU3dpdGNoLCBUb29sdGlwICB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIFVwbG9hZE91dGxpbmVkICB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gXCJhbnRkL2xpYi9pbnB1dC9UZXh0QXJlYVwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIExPQURfTVlfSU5GT19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IExJS0VfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVUV0VFVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNULCBVUERBVEVfUE9TVF9SRVFVRVNULCBVUExPQURfVVBEQVRFX0xPT0tfSU1BR0VfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCAgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTmV3Q29tbWVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL25ld0NvbW1lbnQnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tZW50cyc7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7ZmFQZW5Ub1NxdWFyZX0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7ZmFIZWFydFB1bHNlfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IGZhSGVhcnRDcmFjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhSG91c2UgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgTm9Db21tZW50cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL25vQ29tbWVudHMnO1xyXG5pbXBvcnQgJy4uL2Nzcy9wb3N0W2lkXS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlucHV0JztcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE9uZUxvb2sgPSBzdHlsZWQuZGl2YFxyXG5cclxuICAgIC5kaXYxe1xyXG4gICAgICAgIHdpZHRoOiAxMTIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAuZGl2MntcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgIH1cclxuICAgIC5zd2l0Y2gxe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5MDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgfVxyXG4gICAgLmljb24xe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5pY29uMntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0M3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbjN7XHJcbiAgICAgICAgei1pbmRleDoxMDtcclxuICAgIH1cclxuICAgIC5pbWcxe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1nMntcclxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4OHB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uM3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5idXR0b240e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uNXtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5jb2wxe1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNhcmQxe1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLmNhcmQye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICAgIC5jYXJkM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4OyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDVweDtcclxuICAgIH1cclxuICAgIC5saTF7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmxpMntcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYm9keTF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmlucHV0MXtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRBcmVhMXtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3Qge2ltYWdlUGF0aHMsIHNpbmdsZVBvc3QsIHJldHdlZXRFcnJvciwgcmV0d2VldERvbmUsIHVwZGF0ZVBvc3REb25lLCBsaWtlUG9zdERvbmV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IFtyZWFkLCBzZXRSZWFkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3ByZXZpZXdJbWcsIHNldFByZXZpZXdJbWddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW3J0Q29uZW50LCBvbkNoYW5nZVJ0Q29udGVudCwgc2V0UnRDb250ZW50XSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8v66Gc6re47J24IOyVhOydtOuUlOyZgCDqsozsi5zquIAg7JWE7J2065SU6rCAIOqwmeycvOuptCDsiJjsoJUsIOyCreygnCDtmZzshLHtmZRcclxuICAgICAgICBpZihtZS5pZCA9PT0gc2luZ2xlUG9zdC5Vc2VySWQpe1xyXG4gICAgICAgICAgICBzZXRSZWFkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodXBkYXRlUG9zdERvbmUgPT09IHRydWUpe1xyXG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ0xvb2sg7IiY7KCVIOyZhOujjC4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihyZXR3ZWV0RXJyb3Ipe1xyXG4gICAgICAgICAgICBpZighbGlrZVBvc3REb25lKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChyZXR3ZWV0RXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihyZXR3ZWV0RG9uZSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgn7J247JqpIOyZhOujjCEnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWUgJiYgbWUuaWQsIHNpbmdsZVBvc3QsIHVwZGF0ZVBvc3REb25lLCByZXR3ZWV0RXJyb3IsIHJldHdlZXREb25lXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKHNpbmdsZVBvc3QuY29udGVudCk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VDb250ZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjb250ZW50VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRDb250ZW50KGNvbnRlbnRWYWx1ZSk7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbdG9wLCBzZXRUb3BdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC50b3ApO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlVG9wID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0b3BWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFRvcCh0b3BWYWx1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW2JvdHRvbSwgc2V0Qm90dG9tXSA9IHVzZVN0YXRlKHNpbmdsZVBvc3QuYm90dG9tKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUJvdHRvbSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCBib3R0b21WYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0Qm90dG9tKGJvdHRvbVZhbHVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbZHJlc3MsIHNldERyZXNzXSA9IHVzZVN0YXRlKHNpbmdsZVBvc3QuZHJlc3MpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlRHJlc3MgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRyZXNzVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXREcmVzcyhkcmVzc1ZhbHVlKTtcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtzaG9lcywgc2V0U2hvZXNdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5zaG9lcyk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VTaG9lcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCBzaG9lc1ZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRTaG9lcyhzaG9lc1ZhbHVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbYWNjLCBzZXRBY2NdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5hY2MpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlQWNjID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zdCBhY2NWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldEFjYyhhY2NWYWx1ZSk7XHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IFtvdXRlciwgc2V0T3V0ZXJdID0gdXNlU3RhdGUoc2luZ2xlUG9zdC5vdXRlcik7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VPdXRlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCBvdXRlclZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRPdXRlcihvdXRlclZhbHVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbbG9va05hbWUsIHNldExvb2tOYW1lXSA9IHVzZVN0YXRlKHNpbmdsZVBvc3QubG9va05hbWUpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlTG9va05hbWUgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvb2tOYW1lVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRMb29rTmFtZShsb29rTmFtZVZhbHVlKTtcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJzaW5nbGVQb3N0Ojo6OjogXCIsIHNpbmdsZVBvc3QpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibWU6Ojo6OjpcIiwgbWUpO1xyXG5cclxuICAgIGNvbnN0IGxpa2VkID0gc2luZ2xlUG9zdD8uTGlrZXJzWzBdO1xyXG5cclxuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gc2luZ2xlUG9zdC5Vc2VySWQpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwi7KKL7JWE7JqUOiBcIiwgbGlrZWQpO1xyXG5cclxuICAgIC8v7ZW07Iuc7YOc6re4ICPrtpnsl6zshJwg67+M66as6riwXHJcbiAgICBjb25zdCB0YWdzID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNpbmdsZVBvc3QuSGFzaHRhZ3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHNpbmdsZVBvc3QuSGFzaHRhZ3MgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRhZ3MucHVzaCggXCIjXCIgKyBzaW5nbGVQb3N0Lkhhc2h0YWdzW2ldLm5hbWUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/rjJPquIAg7JOw6riwLCDrs7TquLAg7ISg7YOdXHJcbiAgICBjb25zdCBvblNlbGVjdCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJbmRleCghaW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXg6IFwiLCBpbmRleCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvL+yii+yVhOyalFxyXG4gICAgICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sW2lkXSk7XHJcblxyXG4gICAgICAgIC8v7KKL7JWE7JqUIOy3qOyGjFxyXG4gICAgICAgIGNvbnN0IG9uVW5saWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGlkXHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxbaWRdKTtcclxuXHJcbiAgICAgICAgLy/tjJTroZzsmrBcclxuICAgICAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihpc0ZvbGxvd2luZyl7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzaW5nbGVQb3N0LlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzaW5nbGVQb3N0LlVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFtpc0ZvbGxvd2luZ10pO1xyXG5cclxuICAgICAgICAvL+umrO2KuOycl+uqqOuLrFxyXG4gICAgICAgIGNvbnN0IHJldHdlZXRNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYoIWlkKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL+umrO2KuOycl1xyXG4gICAgICAgIGNvbnN0IHJldHdlZXRTdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCBydENvbmVudCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncG9zdElkJywgc2luZ2xlUG9zdC5pZCk7XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YVxyXG4gICAgICAgICAgICB9LCBzZXRJc01vZGFsT3BlbihmYWxzZSkpO1xyXG4gICAgICAgIH0sIFtjb250ZW50XSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/rpqztirjsnJcg66qo64usIOywvSDri6vquLBcclxuICAgICAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgLy/rjJPquIAg7JeG7J2EIOuVjFxyXG4gICAgY29uc3QgSWZDb21tZW50cyA9ICgpID0+IHtcclxuICAgICAgICBpZihpbmRleCA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBpZihzaW5nbGVQb3N0LkNvbW1lbnRzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPE5vQ29tbWVudHMgLz47XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICByZXR1cm4gPENvbW1lbnRzIHBvc3Q9e3NpbmdsZVBvc3R9IC8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy/snbTrr7jsp4Ag7IiY7KCV7J2EIOychO2VnCDssL0g652E7Jqw6riwXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gICAgLy/qsozsi5zquIAg7IKt7KCcIOyalOyyrVxyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29uZmlybShcIuydtCBMb29r7J2EIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cIikpe1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNpbmdsZVBvc3QuaWQsIFxyXG4gICAgICAgICAgICB9LCBSb3V0ZXIucmVwbGFjZShgL2ApKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIuyCreygnCDst6jshoxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG5cclxuLy/qsozsi5zquIAg7IiY7KCVIOyalOyyrVxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCBjb250ZW50KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RvcCcsIHRvcCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdib3R0b20nLCBib3R0b20pO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZHJlc3MnLCBkcmVzcyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzaG9lcycsIHNob2VzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FjYycsIGFjYyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdvdXRlcicsIG91dGVyKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2xvb2tOYW1lJywgbG9va05hbWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncG9zdElkJywgaWQpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVVBEQVRFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSxbY29udGVudCwgaW1hZ2VQYXRoc10pO1xyXG5cclxuICAgIC8v7J2066+47KeAIOuvuOumrOuztOq4sFxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICBpZihlLnRhcmdldC5maWxlc1swXSl7XHJcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aWV3SW1nVXJsID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgIGlmKHByZXZpZXdJbWdVcmwpe1xyXG4gICAgICAgICAgICBzZXRQcmV2aWV3SW1nKHByZXZpZXdJbWdVcmwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgIFxyXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX1VQREFURV9MT09LX0lNQUdFX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGltYWdlRm9ybURhdGFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBcHBMYXlvdXQgPlxyXG4gICAgICAgICAgICA8T25lTG9vaz5cclxuICAgICAgICAgICAgPEZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXYxJz5cclxuICAgICAgIDxSb3c+XHJcbiAgICAgICAgPGgxPkRhaWx5TG9vazwvaDE+XHJcbiAgICAgICAgPFN3aXRjaCBkZWZhdWx0Q2hlY2tlZD17aW5kZXh9IG9uQ2hhbmdlPXtvblNlbGVjdH0gY2xhc3NOYW1lPSdzd2l0Y2gxJyBjaGVja2VkQ2hpbGRyZW49XCLrjJPquIDsk7DquLBcIiB1bkNoZWNrZWRDaGlsZHJlbj1cIuuMk+q4gOuztOq4sFwiIC8+XHJcbiAgICAgICA8L1Jvdz5cclxuICAgICAgIHttZS5pZCA9PT0gc2luZ2xlUG9zdC5Vc2VySWQgXHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuuCtCDqs4TsoJXsl5Ag7J247Jqp7ZWY6riwXCI+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uMSdcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtmYVBlblRvU3F1YXJlfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXR3ZWV0TW9kYWx9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgIH1cclxuICAgICAgICAgICAgey8qIOumrO2KuOyclyDrqqjri6wgKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCB0aXRsZT1cIuyduOyaqe2VmOq4sFwiIGZvb3Rlcj17bnVsbH0gb25DYW5jZWw9e2hhbmRsZUNhbmNlbH0gb3Blbj17aXNNb2RhbE9wZW59ID5cclxuICAgICAgICAgICAgICAgIDxGb3JtICBvbkZpbmlzaD17cmV0d2VldFN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtydENvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VSdENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbjsmqkg66mU66qo66W8IOuCqOqyqOuztOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxPbmVMb29rPiA8aW1nIGNsYXNzTmFtZT0naW1nMScgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7c2luZ2xlUG9zdC5JbWFnZXNbMF0/LnNyY31gfSAvPiA8L09uZUxvb2s+XHJcbiAgICAgICAgICAgICAgICAgIDxPbmVMb29rPiA8QnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uMScgaHRtbFR5cGU9XCJzdWJtaXRcIj7snbjsmqntlZjquLA8L0J1dHRvbj48L09uZUxvb2s+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgIHtsaWtlZCA/IFxyXG4gICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwi7KKL7JWE7JqUIOy3qOyGjFwiPlxyXG4gICAgICAgIDxIZWFydFR3b1RvbmUgb25DbGljaz17b25Vbmxpa2V9IHR3b1RvbmVDb2xvcj1cIiNmYzgzYzZcIiBjbGFzc05hbWU9J2ljb24yJy8+IFxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8L09uZUxvb2s+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxPbmVMb29rPiBcclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuyii+yVhOyalFwiPlxyXG4gICAgICAgIDxIZWFydE91dGxpbmVkIG9uQ2xpY2s9e29uTGlrZX0gY2xhc3NOYW1lPSdpY29uMicgLz5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPC9PbmVMb29rPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdjb2wxJyA+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW1hZ2VcIiB0eXBlPVwiZmlsZVwiIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQxJ1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17PE9uZUxvb2s+PGltZyBjbGFzc05hbWU9J2ltZzInIGFsdD1cImV4YW1wbGVcIiBzcmM9eyBwcmV2aWV3SW1nID8gcHJldmlld0ltZyA6IGBodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtzaW5nbGVQb3N0LkltYWdlc1swXT8uc3JjfWB9IC8+PC9PbmVMb29rPn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgICAgICAgICAgIGlkICYmIHNpbmdsZVBvc3QuVXNlcklkID09PSBtZS5pZFxyXG4gICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi7J2066+47KeAIOyImOyglVwiPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfSA+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZE91dGxpbmVkIGtleT1cInVwbG9hZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgIFsgXHJcbiAgICAgICAgICAgICAgICAgICA8T25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgICB7aXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9J+yWuO2MlOuhnOyasCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFIZWFydENyYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naWNvbjMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17aXNGb2xsb3dpbmcgPyAn7Ja47YyU66Gc7JqwJyA6ICftjJTroZzsmrAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUhlYXJ0UHVsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uMydcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PSd1bmZvbGxvdydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICAgICAgPE9uZUxvb2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e3NpbmdsZVBvc3QuVXNlci5uaWNrbmFtZSArIFwi7J2YIO2ZiCDrsKnrrLjtlZjquLBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlci8ke3NpbmdsZVBvc3QuVXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUhvdXNlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naWNvbjMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT25lTG9vaz5cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TWV0YSB0aXRsZT17XCLquIDsk7TsnbQ6ICBcIiArIHNpbmdsZVBvc3QuVXNlci5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICB7c2luZ2xlUG9zdC5Db21tZW50cy5sZW5ndGggPT09IDAgXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5ObyBwb2ludHMgeWV0LjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgIDxoMT5UaGlzIGxvb2sgaXMuLi57c2luZ2xlUG9zdC5yYXRlQXZlcmFnZX0gcG9pbnRzLjwvaDE+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naWNvbjQnXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFQZW5Ub1NxdWFyZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7IFJlZmVyOiB7c2luZ2xlUG9zdC5SZWZlcmVuY2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXYyJyAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8aDM+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsgTGlrZToge3NpbmdsZVBvc3QuTGlrZXJzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHN0eWxlPXt7ZmxvYXQ6ICdsZWZ0Jywgd2lkdGg6NTAwfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaTEnPjxoMyA+642w7J2866as66OpIOygnOuqqTwvaDM+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGkyJz48SW5wdXQgbmFtZT0nbG9va25hbWUnIHJlYWRPbmx5PXtyZWFkfSB2YWx1ZT17bG9va05hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZUxvb2tOYW1lfSAgLz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nY2FyZDInPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uMicgYmxvY2sgPkluZm9ybWF0aW9uPC9CdXR0b24+XHJcbjx0aGVhZD5cclxuICAgIDx0ciA+XHJcbiAgICA8dGg+67aE66WYPC90aD5cclxuICAgIDx0aD7ruIzrnpzrk5zrqoU8L3RoPlxyXG4gICAgXHJcbiAgICA8L3RyPlxyXG48L3RoZWFkPlxyXG48dGJvZHkgY2xhc3NOYW1lPSdib2R5MScgPlxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgZGVmYXVsdFZhbHVlPVwi7IOB7J2YXCIgY2xhc3NOYW1lPSdpbnB1dDEnIC8+PC90ZD5cclxuICAgIDx0ZD4gPElucHV0IG5hbWU9J3RvcCcgdmFsdWU9e3RvcH0gcmVhZE9ubHk9e3JlYWR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRvcH0gIHR5cGU9XCJ0ZXh0XCIgIC8+PC90ZD4gXHJcbiAgICA8L3RyPlxyXG5cclxuICAgIDx0cj5cclxuICAgIDx0ZD4gPElucHV0IGRpc2FibGVkICBkZWZhdWx0VmFsdWU9XCLtlZjsnZhcIiBjbGFzc05hbWU9J2lucHV0MScgLz48L3RkPlxyXG4gICAgPHRkPiA8SW5wdXQgIHZhbHVlPXtib3R0b219IHJlYWRPbmx5PXtyZWFkfSBvbkNoYW5nZT17b25DaGFuZ2VCb3R0b219IHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuybkO2UvOyKpFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCAgdmFsdWU9e2RyZXNzfSByZWFkT25seT17cmVhZH0gb25DaGFuZ2U9e29uQ2hhbmdlRHJlc3N9IHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuyVhOyasO2EsFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCAgdmFsdWU9e291dGVyfSByZWFkT25seT17cmVhZH0gb25DaGFuZ2U9e29uQ2hhbmdlT3V0ZXJ9IHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIuyLoOuwnFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCB2YWx1ZT17c2hvZXN9IHJlYWRPbmx5PXtyZWFkfSBvbkNoYW5nZT17b25DaGFuZ2VTaG9lc30gIHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgPHRkPiA8SW5wdXQgZGlzYWJsZWQgIGRlZmF1bHRWYWx1ZT1cIu2MqOyFmOyeoe2ZlFwiIGNsYXNzTmFtZT0naW5wdXQxJyAvPjwvdGQ+XHJcbiAgICA8dGQ+IDxJbnB1dCB2YWx1ZT17YWNjfSByZWFkT25seT17cmVhZH0gIG9uQ2hhbmdlPXtvbkNoYW5nZUFjY30gIHR5cGU9XCJ0ZXh0XCIgLz48L3RkPiBcclxuICAgIDwvdHI+XHJcblxyXG48L3Rib2R5PlxyXG48L0NhcmQ+XHJcbjwvZGl2PlxyXG48Q2FyZCBjbGFzc05hbWU9J2NhcmQzJz5cclxuPEJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbjMnIGJsb2NrID5EYWlseSBSZWNvcmQgPC9CdXR0b24+XHJcbjxoND7tlbTsi5ztg5zqt7g6IHt0YWdzfTwvaDQ+XHJcbjxUZXh0QXJlYVxyXG4gIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgc2hvd0NvdW50XHJcbiAgbWF4TGVuZ3RoPXsyNTB9XHJcbiAgdmFsdWU9e2NvbnRlbnR9IFxyXG4gIHJlYWRPbmx5PXtyZWFkfVxyXG4gIGNsYXNzTmFtZT0ndGV4dEFyZWExJ1xyXG4vPlxyXG5cclxuPC9DYXJkPlxyXG4gICAgeyBpZCAmJiBzaW5nbGVQb3N0LlVzZXJJZCA9PT0gbWUuaWRcclxuICAgID9cclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxPbmVMb29rPlxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbjQnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg7IKt7KCc7ZWY6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uNSdcclxuICAgICAgICAgICAgaHRtbFR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg7IiY7KCV7ZWY6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L09uZUxvb2s+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgICAgICA6XHJcbiAgICAgICAgbnVsbFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG48L0NvbD5cclxuXHJcbjwvZGl2PlxyXG48L0Zvcm0+XHJcbjwvT25lTG9vaz5cclxuXHJcbnsvKiDrjJPquIAgKi99XHJcbjxDb2w+XHJcbiAgICB7aW5kZXggPT09IHRydWUgID8gPE5ld0NvbW1lbnQgcG9zdD17c2luZ2xlUG9zdH0gLz4gOiBudWxsIH1cclxuICAgIHsvKiB7aW5kZXggPT09IGZhbHNlICA/IChzaW5nbGVQb3N0LkNvbW1lbnRzLmxlbmd0aCAhPT0gMCA/IDxDb21tZW50cyBwb3N0PXtzaW5nbGVQb3N0fSAvPiA6IDxOb0NvbW1lbnRzIC8+KSA6IG51bGwgfSAqL31cclxuICAgIDxJZkNvbW1lbnRzIC8+XHJcbjwvQ29sPlxyXG5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMoY29udGV4dCkgPT4geyBcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7IFxyXG4gICAgaWYoY29udGV4dC5yZXEgJiYgY29va2llKXsgXHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNUXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkIC8v7Zi57J2AIGNvbnRleHQucXVlcnkuaWRcclxuICAgIH0pO1xyXG4gICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==