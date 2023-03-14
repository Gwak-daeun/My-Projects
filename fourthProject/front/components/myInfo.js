import React, { useCallback, useEffect, useRef, useState } from "react";
import '../pages/css/myInfo.module.css';
import { Button, Card, Form, Input, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_INFO_REQUEST, UPLOAD_PROFILE_IMAGE_REQUEST } from "../reducers/user";
const { Meta } = Card;
import styled from "styled-components";
import { backUrl } from "../config/config";

const OneMyInfo = styled.div`
 .card1{
  margin-left: 15px;
  width: 250px;
 }
 .img1{
  width: 100%;
  height: 350px;
 }
`;

const MyInfo = () => {

  const dispatch = useDispatch();

  const {me, changeInfoDone, imagePaths} = useSelector((state) => state.user);

  const [previewImg, setPreviewImg] = useState(null);

  const [read, setRead] = useState(true);

  const [myText, setMyText] = useState(me.info || '');
    
  const onChangeMyText = useCallback((e) => {
    const myText = e.target.value;
    setMyText(myText);
    }, []);

  const imageInput = useRef(); 

  useEffect(() => {
    if(changeInfoDone){
      window.alert("내 정보 수정 완료!");
    }
  }, [changeInfoDone]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
    setRead(false);
}, [imageInput.current]);

//유저 프로필 이미지 변경, 이미지 미리보기
const onChangeImages = useCallback((e) => {
    console.log('image:::', e.target.files);

    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if(previewImgUrl){
        setPreviewImg(previewImgUrl);
      }
    }

    const imageFormData = new FormData();
   
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('profile', f);
  });

   return dispatch({
        type: UPLOAD_PROFILE_IMAGE_REQUEST,
        data: imageFormData
    });
});

//유저 정보 수정 요청
const onSubmit = useCallback(() => {
  const formData = new FormData();
  
      formData.append('profile', imagePaths);
  
  formData.append('info', myText);
  console.log('text: ' + myText);
  dispatch({ 
      type: CHANGE_INFO_REQUEST,
      data: formData,
   }
   );
},[myText, imagePaths]);

const cancelFix = useCallback(() => {
  setRead((prev) => !prev);
});

    return(
        <div>
          <OneMyInfo>
          <Form encType="multipart/form-data" onFinish={onSubmit}>
      <Card
        title="My Info"
        className="card1"
        cover={
          me.Image.src 
          === 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'
           ?
           <OneMyInfo>
            <img
              alt="example"
              src={previewImg ? previewImg : `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`}
              ref={imageInput}
              className="img1"
            />
          </OneMyInfo>
           :
           <OneMyInfo>
            <img className="img1" src={previewImg ? previewImg : `${backUrl}/${me.Image.src}`}  />
           </OneMyInfo>
              }
        
    actions={
      read
      ?
      [ 
      <Tooltip placement="bottom" title='클릭하면 프로필 이미지와 자기소개를 수정할 수 있어요.'>
      <Button onClick={onClickImageUpload}><EditOutlined key="edit" /></Button>
      </Tooltip>
      ]
      :
       [ 
       <Button key="save" htmlType="submit">save</Button>,
       <Button key="cancel" onClick={cancelFix}>cancel</Button>
      ]
    }
  >
    <input name="profile" type="file" hidden ref={imageInput} onChange={onChangeImages} />
    <Meta
      title={<Input  readOnly={read} defaultValue={"닉네임:  " + me.nickname} />}
      description={
        read
        ?
        <Input  readOnly={read} defaultValue={ me.info === null ? "자기자신을 한 단어로 표현한다면?" : "한마디:  " + myText} />
        :
        <Input  readOnly={read} placeholder={me.info} onChange={onChangeMyText} value={myText} /> 
      }
    />
  </Card>
  </Form>
  </OneMyInfo>
        </div>
    );

};

export default MyInfo;