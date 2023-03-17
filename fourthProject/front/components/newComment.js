import { Button, Card, Form, Rate, Row, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { ADD_COMMENT_REQUEST, NEW_COMMENT_IMAGES_REQUEST, REMOVE_IMAGE } from "../reducers/post";
import styled from "styled-components";

const OneComment = styled.div`
  .card1{
    width: 390px;
    height: 665px;
    margin-left: 740px;
    border-color: '#F0F0F0';
  }
  .rate1{
    font-size: 50px;
  }
  .textArea1{
    height: 110px;
    resize: 'none';
  }
`;


const NewComment = ({post}) => {

  const dispatch = useDispatch();

    const [fileList, setFileList] = useState([]);

    const [isUploading, setIsUploading] = useState(false);

    const id = useSelector((state) => state.user.me?.id);

    const {imagePaths, addCommentDone} = useSelector((state) => state.post);

    const [value, setValue] = useState(0);

    const [ content, onChangeContent, setContent ] = useInput('');

    useEffect(() => {
      if(addCommentDone === true){
        setContent('');
        setFileList([]);
        setValue(0);
      }
    }, [addCommentDone]);

    const handleRate = (value) => {
      setValue(value);
      console.log("점수:::" + value);
    };


    const onChangeImages = useCallback(({ fileList: newFileList }) => {
  
    setFileList(newFileList);
    console.log('images', fileList);
    const imageFormData = new FormData();
    
    for(let i = 0; i< fileList.length; i++){
      imageFormData.append('image', fileList[i].originFileObj);
    }

      return dispatch({
          type: NEW_COMMENT_IMAGES_REQUEST,
          data: imageFormData
      });
    });

      //미리보기
      const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
      };

      //댓글 등록
      const onSubmit = useCallback(({ fileList: newFileList }) => {

        if(!content || !content.trim()){
          return alert('댓글 내용을 작성하세요.');
        }
        if(value === 0){
          return alert('별점으로 Look의 점수를 주세요.');
        }

        const formData = new FormData();

        setFileList(fileList);
        for(let i = 0; i< fileList.length; i++){
          formData.append('image', fileList[i].originFileObj);
        }

        formData.append('content', content);
        formData.append('rate', value);

        formData.append('postId', post.id);
        formData.append('userId', id);

        dispatch({
          type: ADD_COMMENT_REQUEST,
          data: formData
        });
        
      }, [content, value, imagePaths]);

      const onRemoveImage = useCallback((index) => () => {
        dispatch({
            type: REMOVE_IMAGE,
            data: index
        });
      });

    return(
        <div>
          <OneComment>
          <Form encType="multipart/form-data" onFinish={onSubmit}>
            <Card
            className="card1"
            >
                <Row><h2>Comment</h2></Row>
                <Row><h2>My rate is...</h2></Row>
               <Row><Rate className="rate1" onChange={handleRate} value={value} /></Row>  
              <br />
              <Row><h2>My commnet is...</h2></Row>
              
              <Row> <TextArea
                    showCount
                    maxLength={250}
                    value={content}
                    onChange={onChangeContent}
                    className='textArea1'
                    />
                </Row>
                <br />
                <Row><h2>I recommend this!</h2></Row>
                <Row><h3>아이템 추천은 2개까지 가능해요.</h3></Row>
                <Row>
               <Upload
               name='image'
               listType="picture-card"
               multiple
               fileList={fileList}
               onChange={onChangeImages}
               onPreview={onPreview}
               onRemove={onRemoveImage}
               >
               { fileList.length < 2 && 'Drag images or click' }
               </Upload>
                </Row>
                <Button htmlType="submit">댓글 달기</Button>
            </Card>
          </Form>
          </OneComment>
        </div>
    );
};

export default NewComment;