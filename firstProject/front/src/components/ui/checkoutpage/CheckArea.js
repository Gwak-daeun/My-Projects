import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import CProductListItem from "../CProductListItem";
import CartList from "./CartList";


function CheckArea({}) {

    const [CList, setCList] = useState([])
    const [check, setCheck] = useState(false)

    useEffect(()=>{
        fetch("http://localhost:3005/cartLists")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setCList(data)
            console.log(data)
        })
    },[check])

       

    const userName = useRef("")
    const country = useRef("")
    const arrivalName = useRef("")
    const address = useRef("")
    const addressPlus = useRef("")
    const shipMemo = useRef("")
    const phoneNumber = useRef("")

    const [errorMsg, seterrorMsg] = useState("")

    

    const [data, setData] = useState({
        country: '',
        name : '',
        arrivalName: '',
        address: '',
        addressPlus: '',
        phoneNumber: '',
        shipMemo: ''
        
    })

    const url = "http://localhost:3007/shipDetails"

    const handleData = (e) => {
        
        setData(
            {...data,[e.target.name]:e.target.value},
                
        )
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(window.confirm("구매하시겠습니까?")){
        axios.post(url,{
                country: data.country,
                name : data.name,
                arrivalName: data.arrivalName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                shipMemo: data.shipMemo
                
        },).then(window.alert("구매 완료"))
    }
        else{
            window.alert("구매 취소")
        }
    }

    //이름 입력란 정규식 표현 영어 전체 + 한글 전체 
    const userNameRegex = /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]+$/

    const onChangeUserName = () =>{

        if(userName.current.value){
            if(userNameRegex.test(userName.current.value)){
                console.log("Right")
            } else {
                console.log("Wrong")
            }
            if(userNameRegex.test(userName.current.value)){
                
            } else{
                alert("특수문자 및 숫자는 입력하실 수 없습니다.")
            }
        }
    }
        

    //배송지명 입력란 정규식 표현 영어 전체 + 한글 전체 + 숫자 전체 + 띄어쓰기

    const arrivalNameRegex = /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s]+$/


    const onChangeArrivalname = () =>{

        if(arrivalName.current.value){
            if(arrivalNameRegex.test(arrivalName.current.value)){
                console.log("Right")
            } else {
                console.log("Wrong")
            }
            if(arrivalNameRegex.test(arrivalName.current.value)){

            } else {
                alert("특수문자는 입력하실 수 없습니다.")
            }
        } 
    }
    
    //주소 입력란 정규식 표현 영어 전체 + 한글 전체 + 특수문자 '-' + 띄어쓰기
    const addressRegex = /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ-\s]+$/

    const onChangeAddress = () =>{
        
        if(address.current.value){
            if(addressRegex.test(address.current.value)){
                console.log("Right")
            } else {
                console.log("Wrong")
            }
            if(addressRegex.test(address.current.value)){

            } else{
                alert("하이픈'-'외의 특수문자는 입력하실 수 없습니다.")
            }
        }
    }

    //세부 주소 입력란 정규식 표현 영어 전체 + 한글 전체 + 특수문자 '-' + 띄어쓰기
    const addressPlusRegex = /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ-\s]+$/

    const onChangeAddressPlus = () =>{
        
        if(addressPlus.current.value){
            if(addressPlusRegex.test(addressPlus.current.value)){
                console.log("Right")
            } else {
                console.log("Wrong")
            }
            if(addressPlusRegex.test(addressPlus.current.value)){

            } else {
                alert("하이픈'-'외의 특수문자는 입력하실 수 없습니다.")
            }
        }
    }

    //전화번호 입력란 숫자 전체//

    const numberRegex =  /^[0-9]+$/

    const onChangeNumber = () =>{

        if(phoneNumber.current.value){
            if(numberRegex.test(phoneNumber.current.value)){
                console.log("Right")
            } else{
                console.log("Wrong")
            }
            if(numberRegex.test(phoneNumber.current.value)){
                seterrorMsg("올바른 번호 입니다.")
            } else {
                alert("숫자만 입력해주세요.");
            }
        }
    }

    //배송메모 입력란 정규식 표현 영어 전체 + 한글 전체 +띄어쓰기 //

    const memoRegex =  /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s]+$/

    const onChangeMemo = () =>{

        if(shipMemo.current.value){
            if(memoRegex.test(shipMemo.current.value)){
                console.log("Right")
            } else{
                console.log("Wrong")
            }
            if(memoRegex.test(shipMemo.current.value)){
                
            } else {
                alert("특수문자는 입력하실 수 없습니다.")
            }
        }
    }




    return(
        <section className="checkout-area pb-70">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="checkbox-form">
                                <h3>배송 상세</h3>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="country-select">
                                        <label>지역<span className="required">*</span></label>
                                            <select onChange={handleData} ref={country} value={data.country} name="country">
                                                <option >선택</option>
                                                <option >서울</option>
                                                <option >부산</option>
                                                <option >대구</option>
                                                <option >울산</option>
                                                <option >강원</option>
                                                <option >제주</option>                                               
                                            </select>                                            
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="checkout-form-list">
                                            <label>이름 <span className="required">*</span></label>
                                            <div onChange={handleData}><input type="text" placeholder="" name='name' ref={userName} onChange={onChangeUserName} /></div>
                                        </div>
                                    </div>
                        
                                    <div className="col-md-12">
                                        <div className="checkout-form-list">
                                            <label>배송지명</label>
                                            <div onChange={handleData}><input type="text" placeholder="" name='arrivalName' ref={arrivalName} onChange={onChangeArrivalname}/></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="checkout-form-list">
                                            <label>주소 <span className="required">*</span></label>
                                            <div onChange={handleData}><input type="text" placeholder="주소" name='address' ref={address} onChange={onChangeAddress}/></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="checkout-form-list">
                                            <div onChange={handleData}><input type="text" placeholder="나머지 주소" name='addressPlus' ref={addressPlus} onChange={onChangeAddressPlus} /></div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="col-md-6">
                                        <div className="checkout-form-list">
                                            <label>휴대폰 번호<span className="required" onChange={errorMsg}>*숫자만 입력하세요</span></label>
                                           <div onChange={handleData}><input type="text" placeholder="휴대폰 번호 입력란" name="phoneNumber" ref={phoneNumber} onChange={onChangeNumber}/></div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="different-address">
                                    
                                    
                                    <div className="order-notes">
                                        <div className="checkout-form-list">
                                            <label>배송 메모</label>
                                            <div onChange={handleData}><textarea onChange={onChangeMemo} name="shipMemo" ref={shipMemo} id="checkout-mess" cols="30" rows="10" placeholder="배송 요청사항을 입력해주세요."></textarea></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 오른쪽 */}
                        <div className="col-lg-6">
                            <div className="your-order mt-150 mb-30 ">
                                <h3>구매할 상품</h3>
                                

                                <div className="payment-method">
                                <table className="table table-2">
                                    
                                    
                                    <tbody>    
                                        {
                                            CList.map(item=>(
                                                <tr>
                                                    <CartList
                                                    key = {item.id}
                                                    item = {item}
                                                    check = {check}
                                                    setCheck = {setCheck}                                                                                                                                         
                                                    />
                                                </tr>
                                                
                                            ))
                                        }
                                    </tbody>
                                </table>
                                    <div className="order-button-payment mt-20">
                                        <button type="submit" className="btn theme-btn" >구매하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CheckArea;