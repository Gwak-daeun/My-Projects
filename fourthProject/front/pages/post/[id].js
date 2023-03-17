
import { Button, Card, Col, Form, Input, Modal, Row, Switch, Tooltip  } from 'antd';
import { HeartOutlined, HeartTwoTone, UploadOutlined  } from '@ant-design/icons';
import TextArea from "antd/lib/input/TextArea";
import AppLayout from '../../components/AppLayout';
import { FOLLOW_REQUEST, LOAD_MY_INFO_REQUEST, UNFOLLOW_REQUEST } from '../../reducers/user';
import { LIKE_POST_REQUEST, LOAD_POST_REQUEST, REMOVE_POST_REQUEST, RETWEET_REQUEST, UNLIKE_POST_REQUEST, UPDATE_POST_REQUEST, UPLOAD_UPDATE_LOOK_IMAGE_REQUEST } from '../../reducers/post';
import wrapper from '../../store/configureStore';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import  Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import NewComment from '../../components/newComment';
import { useCallback, useEffect, useRef, useState } from 'react';
import Comments from '../../components/comments';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import {faHeartPulse} from "@fortawesome/free-solid-svg-icons";
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import NoComments from '../../components/noComments';
import '../css/post[id].module.css';
import useInput from '../../hooks/useInput';
const { Meta } = Card;
import styled from 'styled-components';

const OneLook = styled.div`

    .div1{
        width: 1120px;
        position: relative;
        z-index: 1;
    }
    .div2{
        width: 30px;
    }
    .switch1{
        margin-left: 900px;
        margin-top: 36px;
    }
    .icon1{
        position: absolute;
        z-index: 5;
        font-size: 30px;
        margin-left: 200px;
        margin-top: 10px;
    }
    .icon2{
        position: absolute;
        z-index: 5;
        font-size: 30px;
        margin-left: 243px;
        margin-top: 10px;
    }
    .icon3{
        z-index:10;
    }
    .img1{
        margin-left: 120px;
        margin-top: 20px;
        height: 330px;
    }
    .img2{
        height: 550px;
        width: 100%;
    }
    .button1{
        margin-left: 188px;
    }
    .button2{
        background-color: black;
        color: white;
        margin-bottom: 10px;
    }
    .button3{
        background-color: black;
        color: white;
        margin-bottom: 10px;
    }
    .button4{
        margin-left: 20%;
        margin-top: 5px; 
        background-color: black;
        color: white;
    }
    .button5{
       margin-left: 10%;
        margin-top: 5px;
        background-color: black;
        color: white;
    }
    .col1{
        float: left;
    }
    .card1{
        width: 280px;
        z-index: 1;
    }
    .card2{
        margin-left: 15px;
        width: 400px;
    }
    .card3{
        margin-top: 24px; 
        margin-left: 15px;
        width: 400px;
        height: 245px;
    }
    .li1{
        display: inline-block;
    }
    .li2{
        display: inline-block;
        margin-left: 10px;
    }
    .body1{
        text-align: center;
    }
    .input1{
        color: black;
        text-align: center;
    }
    .textArea1{
        height: 110px;
        resize: none;
        margin-top: 20px;
    }
`;

const Post = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const {id} = router.query;
    const { me } = useSelector((state) => state.user);
    const {imagePaths, singlePost, retweetError, retweetDone, updatePostDone, likePostDone} = useSelector((state) => state.post);
    const [read, setRead] = useState(true);
    const [previewImg, setPreviewImg] = useState(null);

    const [rtConent, onChangeRtContent, setRtContent] = useInput('');

    useEffect(() => {
        if(!(me && me.id)) {
            alert("로그인 후 이용 가능합니다.");
            Router.push('/');
        }
        //로그인 아이디와 게시글 아이디가 같으면 수정, 삭제 활성화
        if(me.id === singlePost.UserId){
            setRead(false);
        }
        if(updatePostDone === true){
            window.alert('Look 수정 완료.')
        }
        if(retweetError){
            window.alert(retweetError);
            window.location.reload();
        }
        if(retweetDone === true){
            window.alert('인용 완료!');
        }
    }, [me && me.id, singlePost, updatePostDone, retweetError, retweetDone]);

    const [content, setContent] = useState(singlePost.content);

    const onChangeContent = useCallback((e) => {
        const contentValue = e.target.value;
        setContent(contentValue);
      }, []);

    const [top, setTop] = useState(singlePost.top);

    const onChangeTop = useCallback((e) => {
        const topValue = e.target.value;
        setTop(topValue);
    }, []);

    const [bottom, setBottom] = useState(singlePost.bottom);

    const onChangeBottom = useCallback((e) => {
    const bottomValue = e.target.value;
    setBottom(bottomValue);
    }, []);

    const [dress, setDress] = useState(singlePost.dress);

    const onChangeDress = useCallback((e) => {
        const dressValue = e.target.value;
        setDress(dressValue);
        }, []);

        const [shoes, setShoes] = useState(singlePost.shoes);

    const onChangeShoes = useCallback((e) => {
    const shoesValue = e.target.value;
    setShoes(shoesValue);
    }, []);

    const [acc, setAcc] = useState(singlePost.acc);

    const onChangeAcc = useCallback((e) => {
        const accValue = e.target.value;
        setAcc(accValue);
        }, []);

    const [outer, setOuter] = useState(singlePost.outer);

    const onChangeOuter = useCallback((e) => {
    const outerValue = e.target.value;
    setOuter(outerValue);
    }, []);

    const [lookName, setLookName] = useState(singlePost.lookName);

    const onChangeLookName = useCallback((e) => {
        const lookNameValue = e.target.value;
        setLookName(lookNameValue);
        }, []);

    const imageInput = useRef();

    const [index, setIndex] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log("singlePost::::: ", singlePost);

    console.log("me::::::", me);

    const liked = singlePost?.Likers[0];

    const isFollowing = me?.Followings.find((v) => v.id === singlePost.UserId);

    console.log("좋아요: ", liked);

    //해시태그 #붙여서 뿌리기
    const tags = [];

    for(let i = 0; i < singlePost.Hashtags.length; i++){
        
        if(singlePost.Hashtags !== undefined){
            tags.push( "#" + singlePost.Hashtags[i].name );
        }
    }

    //댓글 쓰기, 보기 선택
    const onSelect = () => {
        setIndex(!index);
        console.log("index: ", index);
      };

      //좋아요
      const onLike = useCallback(() => {
        if(!id){
            return alert('로그인이 필요합니다.');
        }
       return dispatch({
                type: LIKE_POST_REQUEST,
                data: id
            });
        },[id]);

        //좋아요 취소
        const onUnlike = useCallback(() => {
            if(!id){
                return alert('로그인이 필요합니다.');
            }
            return dispatch({
            type: UNLIKE_POST_REQUEST,
            data: id
           });
        },[id]);

        //팔로우
        const onClickButton = useCallback(() => {
            if(isFollowing){
                dispatch({
                    type: UNFOLLOW_REQUEST,
                    data: singlePost.UserId
                });
            }
            else{
                dispatch({
                    type: FOLLOW_REQUEST,
                    data: singlePost.UserId
                });
            }
        },[isFollowing]);

        //리트윗모달
        const retweetModal = () => {
            if(!id){
                return alert('로그인이 필요합니다.');
            }
            setIsModalOpen(true);
        };

        //리트윗
        const retweetSubmit = useCallback(() => {
            const formData = new FormData();

            formData.append('content', rtConent);
            formData.append('postId', singlePost.id);

            dispatch({
                type: RETWEET_REQUEST,
                data: formData
            }, setIsModalOpen(false));
        }, [rtConent]);
        
        //리트윗 모달 창 닫기
        const handleCancel = () => {
            setIsModalOpen(false);
          };

    //댓글 없을 때
    const IfComments = () => {
        if(index === false){
            if(singlePost.Comments.length === 0){
                return <NoComments />;
            }else{
               return <Comments post={singlePost} />;
            }
        }else{
            return null;
        }
    };

    //이미지 수정을 위한 창 띄우기
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    //게시글 삭제 요청
    const onRemovePost = useCallback(() => {
        if(!id){
            return alert('로그인이 필요합니다.');
        }
        if(confirm("이 Look을 삭제하시겠습니까?")){
            return dispatch({
                type: REMOVE_POST_REQUEST,
                data: singlePost.id, 
            }, Router.replace(`/`));
        } else{
            window.alert("삭제 취소");
        }
        
    }, [id]);


//게시글 수정 요청
    const onSubmit = useCallback(() => {

        const formData = new FormData();
        imagePaths.forEach((p) => {
            formData.append('image', p);
        });
        formData.append('content', content);
        formData.append('top', top);
        formData.append('bottom', bottom);
        formData.append('dress', dress);
        formData.append('shoes', shoes);
        formData.append('acc', acc);
        formData.append('outer', outer);
        formData.append('lookName', lookName);
        formData.append('postId', id);
        dispatch({
            type: UPDATE_POST_REQUEST,
            data: formData,
         });
        
    },[content, imagePaths]);

    //이미지 미리보기
    const onChangeImages = useCallback((e) => {
    
        const reader = new FileReader();
        if(e.target.files[0]){
          reader.readAsDataURL(e.target.files[0]);
        }
        reader.onloadend = () => {
          const previewImgUrl = reader.result;
          if(previewImgUrl){
            setPreviewImg(previewImgUrl);
          }
        }
        const imageFormData = new FormData();
   
        [].forEach.call(e.target.files, (f) => {
          imageFormData.append('image', f);
      });
    
       return dispatch({
            type: UPLOAD_UPDATE_LOOK_IMAGE_REQUEST,
            data: imageFormData
        });

    });


    return(
        <AppLayout >
            <OneLook>
            <Form encType="multipart/form-data" onFinish={onSubmit}>
        <div className='div1'>
       <Row>
        <h1>DailyLook</h1>
        <Switch defaultChecked={index} onChange={onSelect} className='switch1' checkedChildren="댓글쓰기" unCheckedChildren="댓글보기" />
       </Row>
       {me.id === singlePost.UserId 
            ?
            null
            :
            <OneLook>
            <Tooltip title="내 계정에 인용하기">
            <FontAwesomeIcon 
                    className='icon1'
                    icon={faPenToSquare} 
                    onClick={retweetModal}
            
            />
            </Tooltip>
            </OneLook>
       }
            {/* 리트윗 모달 */}
            <Modal title="인용하기" footer={null} onCancel={handleCancel} open={isModalOpen} >
                <Form  onFinish={retweetSubmit}>
                    <Input.TextArea 
                    value={rtConent}
                    onChange={onChangeRtContent}
                    maxLength={200}
                    placeholder="인용 메모를 남겨보세요."
                    />
                  <OneLook> <img className='img1' src={singlePost.Images[0]?.src} /> </OneLook>
                  <OneLook> <Button className='button1' htmlType="submit">인용하기</Button></OneLook>
                </Form>
            </Modal>

        {liked ? 
        <OneLook>
        <Tooltip title="좋아요 취소">
        <HeartTwoTone onClick={onUnlike} twoToneColor="#fc83c6" className='icon2'/> 
        </Tooltip>
        </OneLook>
        :
        <OneLook> 
        <Tooltip title="좋아요">
        <HeartOutlined onClick={onLike} className='icon2' />
        </Tooltip>
        </OneLook>
        }

            <Col className='col1' >
            <input name="image" type="file" hidden ref={imageInput} onChange={onChangeImages} />
                <Card
                className='card1'
                
                cover={<OneLook><img className='img2' alt="example" src={ previewImg ? previewImg : singlePost.Images[0]?.src} /></OneLook>}
                actions={
                    id && singlePost.UserId === me.id
                    ? 
                    [
                    <Tooltip title="이미지 수정">      
                    <Button onClick={onClickImageUpload} >      
                    <UploadOutlined key="upload"/>
                    </Button>
                    </Tooltip>   
                    ]
                    :
                   [ 
                   <OneLook>
                    {isFollowing
                    ?
                    <Tooltip title='언팔로우'>
                        <FontAwesomeIcon
                        icon={faHeartCrack}
                        fontSize={20}
                        onClick={onClickButton}
                        className='icon3'
                        />
                    </Tooltip>
                    :
                    <Tooltip title={isFollowing ? '언팔로우' : '팔로우'}>
                        <FontAwesomeIcon
                        icon={faHeartPulse}
                        fontSize={20}
                        onClick={onClickButton}
                        className='icon3'
                        key='unfollow'
                        />
                    </Tooltip>
                    }
                    </OneLook>
                    ,
                    <OneLook>
                    <Tooltip title={singlePost.User.nickname + "의 홈 방문하기"}>
                        <a href={`http://fashionary.site/user/${singlePost.UserId}`}>
                        <FontAwesomeIcon
                         icon={faHouse} 
                         fontSize={20}
                         className='icon3'
                         key='home'
                         />
                        </a>
                    </Tooltip>
                    </OneLook>
                    ]
                }
                >      
                <Meta title={"글쓴이:  " + singlePost.User.nickname} />
                </Card>
                <Col>
                {singlePost.Comments.length === 0 
                ?
                  <h1>No points yet.</h1>
                  : 
                  <h1>This look is...{singlePost.rateAverage} points.</h1>
                }
                 <Row>
                  <h3>
                     <FontAwesomeIcon 
                    className='icon4'
                    icon={faPenToSquare} 
                    /> 
                    &nbsp; Refer: {singlePost.References.length}
                    </h3>
                    <div className='div2' /> 
                    <h3>   
                    <HeartOutlined />
                    &nbsp; Like: {singlePost.Likers.length}
                    </h3>
                  </Row>
                </Col>
            </Col>
        <Col style={{float: 'left', width:500}}>
        <div>
            <ul>
            <li className='li1'><h3 >데일리룩 제목</h3></li>
            <li className='li2'><Input name='lookname' readOnly={read} value={lookName} onChange={onChangeLookName}  /></li>
            </ul>

            </div>
            <div>
            <Card className='card2'>
            <Button className='button2' block >Information</Button>
<thead>
    <tr >
    <th>분류</th>
    <th>브랜드명</th>
    
    </tr>
</thead>
<tbody className='body1' >
    <tr>
    <td> <Input disabled defaultValue="상의" className='input1' /></td>
    <td> <Input name='top' value={top} readOnly={read} onChange={onChangeTop}  type="text"  /></td> 
    </tr>

    <tr>
    <td> <Input disabled  defaultValue="하의" className='input1' /></td>
    <td> <Input  value={bottom} readOnly={read} onChange={onChangeBottom} type="text" /></td> 
    </tr>

    <tr>
    <td> <Input disabled  defaultValue="원피스" className='input1' /></td>
    <td> <Input  value={dress} readOnly={read} onChange={onChangeDress} type="text" /></td> 
    </tr>

    <tr>
    <td> <Input disabled  defaultValue="아우터" className='input1' /></td>
    <td> <Input  value={outer} readOnly={read} onChange={onChangeOuter} type="text" /></td> 
    </tr>

    <tr>
    <td> <Input disabled  defaultValue="신발" className='input1' /></td>
    <td> <Input value={shoes} readOnly={read} onChange={onChangeShoes}  type="text" /></td> 
    </tr>

    <tr>
    <td> <Input disabled  defaultValue="패션잡화" className='input1' /></td>
    <td> <Input value={acc} readOnly={read}  onChange={onChangeAcc}  type="text" /></td> 
    </tr>

</tbody>
</Card>
</div>
<Card className='card3'>
<Button className='button3' block >Daily Record </Button>
<h4>해시태그: {tags}</h4>
<TextArea
  onChange={onChangeContent}
  showCount
  maxLength={250}
  value={content} 
  readOnly={read}
  className='textArea1'
/>

</Card>
    { id && singlePost.UserId === me.id
    ?
        (
            <>
            <OneLook>
            <Button 
            className='button4'
            onClick={onRemovePost}
            >
                삭제하기
            </Button>
            <Button
            className='button5'
            htmlType='submit'
            >
                수정하기
            </Button>
            </OneLook>
            </>
        )
        :
        null
    }



</Col>

</div>
</Form>
</OneLook>

{/* 댓글 */}
<Col>
    {index === true  ? <NewComment post={singlePost} /> : null }
    {/* {index === false  ? (singlePost.Comments.length !== 0 ? <Comments post={singlePost} /> : <NoComments />) : null } */}
    <IfComments />
</Col>

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
        type: LOAD_MY_INFO_REQUEST
    });
    context.store.dispatch({
        type: LOAD_POST_REQUEST,
        data: context.params.id //혹은 context.query.id
    });
   context.store.dispatch(END);
   await context.store.sagaTask.toPromise();
});


export default Post;