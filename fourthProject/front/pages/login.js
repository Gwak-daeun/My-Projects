import React, { useCallback, useEffect } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, Col } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import useInput from '../hooks/useInput';
import { loginRequestAction } from "../reducers/user";
import  Router  from "next/router";
import styled from "styled-components";

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
  }

`;

const Login = () => {

  const dispatch = useDispatch();
  const {loginLoading, logInError, logInDone} = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

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


    return(
      <OneLogin>
        <Card className="card1">
          <Col className="col1">
          <h1 >Log in</h1>
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