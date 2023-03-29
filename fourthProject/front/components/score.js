import { Rate, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import styled from "styled-components";

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
  .date{
    margin-left: 60px;
  }
  .writer{
    color: black;
  }
`;

const Score = ({comments}) => {

  const date = new Date(comments[0].createdAt);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const result = `${yyyy}년${mm}월${dd}일`;

    return(
        <>
        <OneSore>
        <Row>
               {comments.map(comment => (
            <li key={comment.id}>
              <Row>
               <h4> writer: <a className="writer" href={`http://localhost:3000/user/${comment.UserId}`}>{comment.User.nickname}</a> </h4>
                
              <h4 className="date"> date: {result}</h4> 
                </Row>
              <Row><h2>My rate is...</h2></Row>
              <Row><OneSore><Rate className="rate1" disabled defaultValue={comment.rate} /></OneSore></Row>  
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
                  
                <OneSore> { comments[0].Images[0] ? <img className="img1" src={comments[0].Images[0].src} /> : null } </OneSore>
                <OneSore> { comments[0].Images[1] ? <img className="img1" src={comments[0].Images[1].src} /> : null } </OneSore>

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
