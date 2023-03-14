import { Rate, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import styled from "styled-components";
import { backUrl } from "../config/config";

const OneSore = styled.div`
  .rate1{
    font-size: 50px;
  }
  .textArea1{
    height: 110px;
    resize: none;
  }
  .img1{
    width: 100px;
  }
  .button1{
    margin-left: 100px;
  }
`;

const Score = ({comments}) => {

    return(
        <>
        <OneSore>
        <Row><h2>My rate is...</h2></Row>
               <Row>
               {comments.map(comment => (
            <li key={comment.id}>
              <OneSore><Rate className="rate1" disabled defaultValue={comment.rate} /></OneSore> 
            </li>
             ))}
                </Row>  
              <br />
              <Row><h2>My commnet is...</h2></Row>
              
              <Row>
              {comments.map(comment => (
            <li key={comment.id}>
              <OneSore>
                <TextArea
                    showCount
                    maxLength={250}
                    defaultValue={comment.content}
                    readOnly
                    className="textArea1"
                />
                </OneSore>
            </li>
             ))}
                </Row>
                <br />
                
                <Row>
                {comments[0].Images.length === 0 ? null : <h2>I recommend this!</h2>}
                  
                  </Row>
                <Row>
                  
                <OneSore> { comments[0].Images[0] ? <img className="img1" src={`${backUrl}/${comments[0].Images[0].src}`} /> : null } </OneSore>
                <OneSore> { comments[0].Images[1] ? <img className="img1" src={`${backUrl}/${comments[0].Images[1].src}`} /> : null } </OneSore>

                </Row>
                {/* {
                id && comments[0].UserId === id
                ?
                (
                  <OneSore>
                  <Button type="danger" className="button1" onClick={onRemoveComment} >댓글 삭제</Button>
                  </OneSore>
                )
                :
                null
                } */}
                
        </OneSore>
        </>
    );
}


export default Score;
