import { Calendar, Card, Row } from "antd";
import {  useRouter } from "next/router";
import Router from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppLayout from "../../components/AppLayout";
import UserDateCellRender from "../../components/userComponent/userDateCellRender";
import UserInfo from "../../components/userComponent/userInfo";
import UserLikeList from "../../components/userComponent/userLikeList";
import UserMention from "../../components/userComponent/userMention";
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from "../../reducers/user";
import wrapper from "../../store/configureStore";
import axios from "axios";
import { END } from "redux-saga";
import UserFollowers from "../../components/userComponent/userFollowers";
import UserFollowings from "../../components/userComponent/userFollowings";
import styled from "styled-components";

const OneUser = styled.div`
    .div1{
        position: relative;
        width: 1250px;
    }
    .div2{
        float: left;
    }
    .section1{
        margin-top: 50px;
    }
    .button1{
        background-color: black; 
        color: white;
    }
    .calendar1{
        width: 700px;
        height: 1010px;
    }
    .row1{
        margin-top: 15px;
    }
`;

const User = () => {

    const router = useRouter();
    const {id} = router.query;

    const {userInfo, me} = useSelector((state) => state.user);

    
    useEffect(() => {
    //다른 유저 프로필로 이동 시, 접속 중인 아이디와 같은지 비교 후 같다면 홈화면으로 이동
        if(id == me.id){
            Router.replace('/');
        }
        if(!(me && me.id)) {
            alert("로그인 후 이용 가능합니다.");
            Router.push('/');
        }


    }, []);

    return(
        <AppLayout>
            <OneUser>
            <div className="div1">
            <section className="section1" >
            <Row><h1>{userInfo.nickname}'s Profile</h1></Row>
            <Row>
            <div className="div2">
            <Card>
                <Calendar 
                className="calendar1"
                dateCellRender={UserDateCellRender}
                />

            </Card>
            </div>
            <div className="div2">
                <UserInfo /> 
                <UserMention />
                <UserLikeList />
            </div>
            </Row>
            <Row className="row1">
                
                <UserFollowers />
                <UserFollowings />
            </Row>  
            </section>
            </div>
            </OneUser>
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async(context) => { 
    
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = ''; 
    if(context.req && cookie){ 
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
        data: context.params.id,
    });

    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST
    });
    
   context.store.dispatch(END);
   await context.store.sagaTask.toPromise();
  });
  

export default User;