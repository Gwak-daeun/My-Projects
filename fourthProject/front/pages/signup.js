import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Form, Input } from 'antd';
import useInput from "../hooks/useInput";
import AppLayout from "../components/AppLayout";
import styled from 'styled-components';
import Head from 'next/head';
import Router from 'next/router';
import {SIGN_UP_REQUEST} from '../reducers/user';

const ErrorMessage = styled.div`
    color: red;
`;

const OneMyInfo = styled.div`
  .card1{
    width: 60%;
    margin: auto;
    margin-top: 200px;
    margin-bottom: 300px;
  }
  .form1{
    width: 50%;
    margin: auto;
  }
  .login-form-button{
    background-color: black;
    color: white;
  }
  .col1{
    text-align : center;
  }
`;


const Signup = () => {

  const dispatch = useDispatch();
    const {signUpLoading, signUpDone, signUpError, me} = useSelector((state) => state.user);

  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);
  const [term, setTerm] = useState('');

  const onChangePasswordCheck = useCallback((e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
      setTerm(e.target.checked);
      setTermError(false);
  },[]);    

  const onSubmit = useCallback(() => {
      if(password !== passwordCheck){
          return setPasswordError(true);
      }
      if(!term){
          return setTermError(true);
      }
      console.log(nickname, password);
      dispatch({
          type: SIGN_UP_REQUEST,
          data: {password, nickname}
      });
  }, [password, passwordCheck, term]);


  useEffect(() => {
    if(me && me.id) {
        Router.replace('/'); 
    }
}, [me && me.id]);

useEffect(() => {
    if(signUpDone){
        Router.replace('/');
    }
}, [signUpDone]);

useEffect(() => {
    if(signUpError){
        alert(signUpError);
    }
}, [signUpError]);

return(
  <AppLayout>
    <OneMyInfo>
      <Col className="col1">
        <Head>
              <title>회원가입</title>
        </Head>

        <Card className="card1">
        <h1 >Sign up</h1>
          <Form
          name="normal_login"
          className="form1"
          initialValues={{remember: true,}}
          onFinish={onSubmit}
          >
            <Form.Item
            name="username"
            >
              <label htmlFor='name'>닉네임</label>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} 
              name="name"
              placeholder="Username" 
              value={nickname} 
              onChange={onChangeNickname}
              required
              />
            </Form.Item>
            <Form.Item
            name="password"
            >
              <label htmlFor='password'>비밀번호</label>
              <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              name="password"
              placeholder="Password"
              value={password} 
              type="password"
              onChange={onChangePassword}
              required
              />
            </Form.Item>

            <Form.Item>
              <label htmlFor='password-check'>비밀번호 체크</label>
              <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              name='password-check'
              placeholder="Check Password"
              type="password"
              value={passwordCheck} 
              onChange={onChangePasswordCheck}
              required 
              />
              {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </Form.Item>

            <Form.Item>
              <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>회원가입 후 아이디는 변경 불가 합니다.</Checkbox>
              {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </Form.Item>

            <Form.Item>
              <Button 
              loading={signUpLoading}  
              htmlType="submit" 
              className="login-form-button">
              회원가입 하기
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </OneMyInfo>
  </AppLayout>
);
};

export default Signup;