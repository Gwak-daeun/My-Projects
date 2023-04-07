import React, { useCallback, useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Col, Modal, Table, Tooltip } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import useInput from '../hooks/useInput';
import { loginRequestAction } from "../reducers/user";
import  Router  from "next/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const OneLogin = styled.div`

.card1{
  width: 60%;
  margin: auto;
  margin-top: 300px;
  margin-bottom: 300px;
}
.login-form{
  width: 50%;
  margin: auto;
  padding-top: 30px;
}
.login-form-button{
  background-color: black;
  color: white;
}
.a1{
  color: black;
}
.col1{
  text-align : center;
  position: relative;
}

.icon{
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 20px;
}

`;

const Login = () => {

  const dispatch = useDispatch();
  const {loginLoading, logInError, logInDone} = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'PASSWORD',
      dataIndex: 'pw',
      key: 'pw',
    },

  ];
  const data = [
    {
      key: '1',
      id: 'first',
      pw: 'a111',
      
    },
    {
      key: '2',
      id: 'second',
      pw: '2222',
     
    },
    {
      key: '3',
      id: 'third',
      pw: '3333',
     
    },
    {
      key: '4',
      id: 'fourth',
      pw: '4444',
     
    }
  ];

  useEffect(() => {
      if(logInError){
          alert(logInError);
      }
      if(logInDone){
        Router.replace('/');
      }
  }, [logInError, logInDone]);


  // const style = useMemo(() => ({marginTop: 10}), []);

  const onSubmitForm = useCallback(() => {
      console.log(nickname, password);
      dispatch(loginRequestAction({nickname, password}));
     
  }, [nickname, password]);

    const modal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return(
      <OneLogin>
      <Card className="card1">
        <Col className="col1">
       <Tooltip title="공용계정 ID/PW"><FontAwesomeIcon onClick={modal} className="icon" icon={faKey} style={{ fontSize: '20px' }}/></Tooltip> 
        <Modal title="공용계정 ID/PW" footer={null} onCancel={handleCancel} open={isModalOpen}>
          <Table
           pagination={false} columns={columns} dataSource={data}></Table>
        </Modal>
        <h1 >Log in </h1> 
        <Form
        name="normal_login"
        className="login-form"
        onFinish={onSubmitForm}
        >
          <Form.Item
            name="username"
          >
            <Input value={nickname} onChange={onChangeNickname} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              value={password} 
              onChange={onChangePassword}
              placeholder="Password"
            />
          </Form.Item>

    
          <Form.Item>
            <Button loading={loginLoading} htmlType="submit" className="login-form-button">
              로그인
            </Button>
            <br />
            Or 
            <br />
            <a href="./signup" className="a1"><h3>회원가입 하러 가기</h3></a>
          </Form.Item>
        </Form>
        </Col>
      </Card>
    </OneLogin>
    );

}

export default Login;