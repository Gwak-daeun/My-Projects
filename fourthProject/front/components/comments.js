import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Row } from "antd";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Score from "./score";
import styled from "styled-components";
import { REMOVE_COMMENT_REQUEST } from "../reducers/post";

const OneComments = styled.div`
  .card1{
    width: 390px;
    height: 665px;
    margin-left: 740px;
    border-color: #F0F0F0;
  }
  .div1{
    margin-left: 70px;
  }
  .icon1{
    font-size: 30px;
  }
  .button1{
    margin-left: 210px;
    margin-top: 595px;
    position: absolute;
  }
`;


const Comments = ({post}) => {

  const dispatch = useDispatch();
  
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(1);

    const id = useSelector((state) => state.user.me?.id);

    const [value, setValue] = useState({});

    // console.log("댓글: ", post.Comments);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentComments = post.Comments.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];

    console.log("total opinions " + post.Comments.length);
    console.log("postsPerPage " + postsPerPage);

    for (let i = 1; i <= Math.ceil(post.Comments.length / postsPerPage); i++) {
        pageNumbers.push(i);
        }

    const handleRate = (value) => {
      setValue(value);
      console.log("점수:::" + value);
    };

        //댓글 다음 페이지로 이동
        const upClick = () => {
            if(currentPage < pageNumbers.length){
              setCurrentPage(currentPage + 1);
            } else {
              alert("마지막 댓글이에요.");
            };
          };
      
          //댓글 이전 페이지로 이동
          const downClick = () => {
            if(currentPage > 1){
              setCurrentPage(currentPage - 1);
            } else {
              alert("가장 최신 댓글이에요.");
            };
          };

      const onRemoveComment = useCallback(() => {
        if(!id){
            return alert('로그인이 필요합니다.');
        }
  
        const formData = new FormData();
  
        formData.append('PostId', post.id);
        formData.append('commentId', currentComments[0].id);
  
  
        return dispatch({
            type: REMOVE_COMMENT_REQUEST,
            data: formData
        }, window.location.reload()
        );
      }, [id]);


    return(
        <div>
          <OneComments>
            <Form encType="multipart/form-data" >
              <Card className="card1">
                  <Col>
                  {
                id && currentComments[0].UserId === id
                ?
                (
                  <OneComments>
                  <Button type="danger" className="button1" onClick={onRemoveComment} >댓글 삭제</Button>
                  </OneComments>
                )
                :
                null
                }
                      <Row>
                      <h2>Comment</h2>
                      <div className="div1" >
                          <CaretLeftOutlined className="icon1" onClick={downClick} />
                          <CaretRightOutlined className="icon1" onClick={upClick} /> 
                      </div>
                      <h3 > {currentPage} / {post.Comments.length} </h3> 
                      
                      </Row>
                  </Col>
                  
                  <Score comments={currentComments} />
                  
              </Card>
            </Form>
          </OneComments>
        </div>
    );
};

export default Comments;