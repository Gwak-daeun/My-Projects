import React from "react";
import '../../pages/css/myInfo.module.css';
import { Card, Form, Input } from 'antd';

import { useSelector } from "react-redux";

const { Meta } = Card;
import styled from "styled-components";
import { backUrl } from "../../config/config";

const OneUserInfo = styled.div`
  .card1{
    margin-left: 15px;
    width: 250px;
  }
  .img1{
    width: 100%;
    height: 350px;
  }
`;

const originalImage = `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`;

const UserInfo = () => {

  const {userInfo} = useSelector((state) => state.user);

  console.log("유저인포: ", userInfo);

    return(
      <div>
        <OneUserInfo>
            <Form encType="multipart/form-data" >
                <Card
                    title={userInfo.nickname+"'s Info"}
                    className='card1'
                    cover={<OneUserInfo><img className="img1" src={ userInfo.Image.src === originalImage ? userInfo.Image.src : `${backUrl}/${userInfo.Image.src}`} /></OneUserInfo>}
                >
                <Meta
                  title={<Input  readOnly defaultValue={userInfo.nickname} />}
                  description={
                    <Input  readOnly defaultValue={ userInfo.info === null? "자기자신을 한 단어로 표현한다면?" : "한마디:  " + userInfo.info} />
                  }
                />
              </Card>
          </Form>
        </OneUserInfo>
      </div>
    );

};

export default UserInfo;