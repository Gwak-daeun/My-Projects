import { Card } from "antd";
import React from "react";
import styled from "styled-components";

const OneNoComment = styled.div`
    .card1{
        width: 390px;
        height: 665px;
        margin-left: 740px;
        border-color: '#F0F0F0';
    }
    .div1{
        text-align: center;
        margin-right: 50px;
    }
    .img1{
        width: 100px;
    }
`;

const  NoComments = () => {

    return(
        <>
        <OneNoComment>
            <Card
            className="card1"
            >
                <div className="div1">
                <img className="img1" src='https://cdn-icons-png.flaticon.com/512/142/142313.png' />
                <br />
                <h2>댓글이 없어요! <br /> 첫 댓글을 달아주세요.</h2>
                </div>
                
            </Card>
        </OneNoComment>
        </>
    );
}

export default NoComments;