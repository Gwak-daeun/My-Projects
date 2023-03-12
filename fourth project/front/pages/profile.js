import React, { useCallback, useEffect } from "react";
import AppLayout from "../components/AppLayout";
import { Button, Calendar, Col, Row } from 'antd';
import MyInfo from "../components/myInfo";
import './css/profile.module.css';
import Mention from "../components/mention";
import LikeList from "../components/likeList";
import Followers from "../components/followers";
import Followings from "../components/followings";
import Card from "antd/lib/card/Card";
import Login from "./login";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { CHECK_DATE_REQUEST, LOAD_POST_REQUEST } from "../reducers/post";
import wrapper from '../store/configureStore';
import useSWR from "swr";
import DateCellRender from "../util/dateCellRender";
import styled from "styled-components";
import  Router  from "next/router";

const OneProfile = styled.div`

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
    .cal1{
        width: 700px;
        height: 1010px;
    }
    .row1{
        margin-top: 15px;
    }
`;


const Profile = () => {

    const dispatch = useDispatch();

    const {checkDateError, checkDateDone} = useSelector((state) => state.post);

    const {me} = useSelector((state) => state.user);

    const today = new Date();
const year = today.getFullYear(); // 년도
const month = today.getMonth() + 1; // 월
const date = today.getDate(); // 날짜

// 월, 날짜가 10보다 작으면 앞에 0을 붙여주기
const formattedMonth = month < 10 ? `0${month}` : month;
const formattedDate = date < 10 ? `0${date}` : date;

const todayDateString = `${year}-${formattedMonth}-${formattedDate}`;

console.log(todayDateString);

//게시글 작성 전 오늘 작성한 게시글 있나 확인
    const checkDate = useCallback(() => {

        const formData = new FormData();

        formData.append('todayDateString', todayDateString);
        formData.append('UserId', me.id);

        dispatch({
            type: CHECK_DATE_REQUEST,
            data: formData
        });
    });

    useEffect(() => {
        if(checkDateError){
            window.alert(checkDateError);
            window.location.reload();
        }
        if(checkDateDone === true){
            Router.push(`/newLook`);
        }
    }, [checkDateError, checkDateDone]);

 return(
    <OneProfile>
    <div className="div1">
        <section className="section1">
            <Row><h1>MY Profile</h1></Row>
                <Row><Button  className="button1" onClick={checkDate}>오늘의 데일리룩 만들기</Button></Row>
                <Row>
                    <div className="div2">
                        <Card>
                            <Calendar 
                            id='cal'
                            className="cal1"
                            dateCellRender={DateCellRender}
                            />

                        </Card>
                    </div>
                <div className="div2">
                    <MyInfo /> 
                    <Mention />
                    <LikeList />
                </div>
            </Row>
            <Row className="row1">
                <Followers  />
                <Followings  />   
            </Row>  
        </section>
    </div>
    </OneProfile>

 );
};

export default Profile;