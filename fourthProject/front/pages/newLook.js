import AppLayout from "../components/AppLayout";
import { AutoComplete, Button, Card, Carousel, Col, Form, Input, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import useInput from "../hooks/useInput";
import { ADD_POST_REQUEST, LOAD_NEW_POSTS_REQUEST, UPLOAD_IMAGES_REQUEST } from "../reducers/post";
import Router from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const OneNewLook = styled.div`

    .h2-1{
        margin-left: 600px;
        margin-top: 20px;
    }

    .col1{
        float: left;
    }

    .card1{
        width: 280px;
    }

    .card2{
        margin-left: 15px;
        width: 400px;
    }
    
    .card3{
        margin-top: 25px;
        margin-left: 15px;
        width: 400px;
        height: 210px;
    }

    .card4{
        width: 300px;
        height: 630px;
    }

    .img1{
        height: 528px;
        width: 280px;
    }

    .img2{
        width: 300px;
        height: 630px;
    }

    .li1{
        display: inline-block;
    }

    .li2{
        display: inline-block;
        margin-left: 10px;
    }

    .button1{
        background-color: black;
        color: white;
        margin-bottom: 10px;
    }

    .button2{
        background-color: black;
        color: white; 
        margin-bottom: 10px;
    }

    .button3{
        left: 34%;
        margin-top: 5px;
        background-color: black;
        color: white;
    }

    .tbody1{
        text-align: center;
    }

    .td1{
        color: black;
        text-align: center;
    }

    .div1{
        margin-left: 730px;
    }

    .div2{
        text-align: center; 
    }
`;

const NewLook = () => {

    const dispatch = useDispatch();

    const imageInput = useRef();

    const [top, onChangeTop ,setTop] = useInput('');
    const [bottom, onChangeBottom ,setBottom] = useInput('');
    const [dress, onChangeDress ,setDress] = useInput('');
    const [shoes, onChangeShoes ,setShoes] = useInput('');
    const [acc, onChangeAcc ,setAcc] = useInput('');
    const [outer, onChangeOuter ,setOuter] = useInput('');
    const [lookName, onChangeLookName ,setLookName] = useInput('');

    const {imagePaths, addPostDone, mainPosts, newLookKeywords} = useSelector((state) => state.post);

    const {me} = useSelector((state) => state.user);

    const [previewImg, setPreviewImg] = useState(null);

    const words = newLookKeywords?.map(items => ({value: items.name}));

    const [ content, onChangeContent, setContent ] = useInput('');

    useEffect(() => {
        dispatch({
            type: LOAD_NEW_POSTS_REQUEST
        });
    }, []);

    useEffect(() => {
        if(addPostDone === true){
            Router.push('/');
        }  
    }, [addPostDone]);

    useEffect(() => {
        if(!(me && me.id)) {
            alert("로그인 후 이용 가능합니다.");
            Router.push('/');
        }
    }, [me && me.id]);


    const today = new Date();
    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1; // 월
    const date = today.getDate(); // 날짜
    
    // 월, 날짜가 10보다 작으면 앞에 0을 붙여주기
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDate = date < 10 ? `0${date}` : date;
    
    const todayDateString = `${year}-${formattedMonth}-${formattedDate}`;

    const selectTop = useCallback((value) => {
        setTop(value)
    });

    const selectBottom = useCallback((value) => {
        setBottom(value)
    });

    const selectDress = useCallback((value) => {
        setDress(value)
    });

    const selectShoes = useCallback((value) => {
        setShoes(value)
    });

    const selectOuter = useCallback((value) => {
        setOuter(value)
    });

    const selectAcc = useCallback((value) => {
        setAcc(value)
    });

    //게시글 업로드 요청
    const onSubmit = useCallback(() => {

        if(!top && !bottom && !dress && !shoes && !acc && !outer){
            return alert('다섯가지 항목 중 하나 이상은 브랜드명을 작성해야 해요.');
        }
        
        if(!content || !content.trim()){
            return alert('오늘의 Look에 대한 내용을 작성하세요.');
        }
        if(imagePaths.length === 0){
            return alert('오늘의 Look에 필요한 사진을 업로드 해주세요.');
        }
        
        if(!lookName){
            return alert('오늘의 Look의 이름을 작성하세요.');
        }
       
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
        formData.append('today', todayDateString);
        dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
         });
    },[top, bottom, dress, shoes, acc, outer, content, imagePaths]);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);


//이미지 변경, 이미지 미리보기
const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
        imageFormData.append('image', f);
    });
    
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

   return dispatch({
        type: UPLOAD_IMAGES_REQUEST,
        data: imageFormData
    });
});

    const NullImage = () => {
        return(
            <OneNewLook>
            <Card
            className="card4"
            >
                <div className="div2">
                    <FontAwesomeIcon 
                    icon={faNoteSticky}
                    fontSize={150}
                    style={{ }}
                    />
                    <h2>아직 최신 게시글이 많이 없어요!</h2>
                </div>
            </Card>
            </OneNewLook>
        );
    };

    return(
        <AppLayout >
            <OneNewLook>
                <div style={{width: 1120}}>
                            <Row><h1>New DailyLook</h1> <h2 className="h2-1">Recent DailyLook</h2></Row> 
                                <Form encType="multipart/form-data" onFinish={onSubmit}>
                                    <Col className="col1">
                                        <Card
                                        className='card1'
                                        cover={
                                            <OneNewLook>
                                            <img
                                            alt="example"
                                            src={previewImg ? previewImg : 'https://media.istockphoto.com/id/900575958/vector/dressmaker-model-vector-icon.jpg?s=612x612&w=0&k=20&c=7rnqVC3c7IqiWFrRkWPAZ34h-NAs-pkdsDGR5HYIv94='}
                                            ref={imageInput}
                                            className='img1'
                                            />
                                            </OneNewLook>
                                                }

                                        actions={[
                                            <Button onClick={onClickImageUpload} >
                                                <UploadOutlined key="edit" />
                                            </Button>
                                            
                                        ]}
                                        >  
                                        <input name="image" type="file" hidden ref={imageInput} onChange={onChangeImages} />
                                        </Card>
                                    </Col>
                                <Col className="col1">
                                <div>
                                    <ul>
                                    <li className="li1"><h3 >데일리룩 제목</h3></li>
                                    <li className="li2"><Input value={lookName} onChange={onChangeLookName} showCount maxLength={20} /></li>
                                    </ul>
                                    
                                    </div>
                                    <div>
                                    <Card className="card2">
                                    <Button className="button1" block >Information</Button>
                        <thead>
                            <tr >
                            <th>분류</th>
                            <th>브랜드명</th>
                            
                            </tr>
                        </thead>
                        <tbody className="tbody1">

                            <tr>
                            <td> <Input disabled  defaultValue="상의" className="td1"/></td>                            
                            <td> 
                                <AutoComplete 
                                id="top"
                                dropdownMatchSelectWidth={200}
                                options={words}
                                onSelect={selectTop}
                                >
                                    <Input id="top" value={top} onChange={onChangeTop} name="top" type="text" />
                                </AutoComplete>
                            </td>                             
                            </tr>
                            <tr>
                            <td> <Input disabled  defaultValue="하의" className="td1" /></td>
                            <td> 
                                <AutoComplete 
                                id="bottom"
                                dropdownMatchSelectWidth={200}
                                options={words}
                                onSelect={selectBottom}
                                >
                                    <Input id="bottom" value={bottom} onChange={onChangeBottom} name="bottom" type="text"  />
                                </AutoComplete>
                            </td>  
                            </tr>
                            <tr>
                            <td> <Input disabled  defaultValue="원피스" className="td1" /></td>
                            <td> 
                                <AutoComplete 
                                id="dress"
                                dropdownMatchSelectWidth={200}
                                options={words}
                                onSelect={selectDress}
                                >
                                    <Input value={dress} onChange={onChangeDress} type="text" />
                                </AutoComplete>
                            </td> 
                            </tr>
                            <tr>
                            <td> <Input disabled  defaultValue="아우터" className="td1" /></td>
                            <td> 
                                <AutoComplete 
                                id="outer"
                                dropdownMatchSelectWidth={200}
                                options={words}
                                onSelect={selectOuter}
                                >
                                    <Input value={outer} onChange={onChangeOuter} type="text" />
                                </AutoComplete>    
                            </td>                
                            </tr>
                            <tr>
                            <td> <Input disabled  defaultValue="신발" className="td1" /></td>
                            <td> 
                                <AutoComplete 
                                id="shoes"
                                dropdownMatchSelectWidth={200}
                                options={words}
                                onSelect={selectShoes}
                                >
                                    <Input value={shoes} onChange={onChangeShoes}  type="text" />
                                </AutoComplete>
                            </td> 
                            </tr>
                            <tr>
                            <td> <Input disabled  defaultValue="패션잡화" className="td1" /></td>    
                            <td> 
                                <AutoComplete 
                                id="acc"
                                dropdownMatchSelectWidth={200}
                                options={words}
                                onSelect={selectAcc}
                                >
                                    <Input id="acc" value={acc} onChange={onChangeAcc}  type="text" />
                                </AutoComplete>
                            </td>        
                            </tr>
                        
                        </tbody>
                    </Card>
                        </div>
                        <Card className="card3">
                        <Button className="button2" block >Daily Record </Button>
                        <Input.TextArea
                        value={content}
                        onChange={onChangeContent}
                        showCount
                        maxLength={250}
                        style={{
                            height: 110,
                            resize: 'none',
                        }}
                        />
                        </Card>

                        <Button 
                        className="button3"
                        htmlType="submit"
                        >
                            데일리룩 등록하기
                        </Button>

                        </Col>
                    </Form>  


                        <div className="div1">
                            {/* 가장 최근 데일리룩 */}
                            <Carousel style={{}} autoplay>
                                
                                <div>
                                    { mainPosts[0] === undefined ?  <NullImage />   :  <OneNewLook> <img className="img2" src={mainPosts[0]?.Images[0]?.src} /></OneNewLook> }
                                </div>
                                <div>
                                    { mainPosts[1] === undefined ?  <NullImage />   :   <OneNewLook> <img className="img2" src={mainPosts[1]?.Images[0]?.src} /></OneNewLook> }
                                </div>
                                <div>
                                    { mainPosts[2] === undefined ?  <NullImage />   :    <OneNewLook> <img className="img2" src={mainPosts[2]?.Images[0]?.src} /></OneNewLook> }
                                </div>
                                <div>
                                    { mainPosts[3] === undefined ?  <NullImage />   :   <OneNewLook> <img className="img2" src={mainPosts[3]?.Images[0]?.src}  /></OneNewLook> }
                                </div>
                            </Carousel>
                        </div>

                </div>  
            </OneNewLook>
        </AppLayout>
    );
};




export default NewLook;