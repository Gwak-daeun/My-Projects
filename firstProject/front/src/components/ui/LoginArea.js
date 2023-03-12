import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";



function LoginArea() {

    const userName = useRef("")
    const password = useRef("")
    const userId = useRef("")
    

    const [errorMsg, setErrorMsg] = useState("")
    const [errorPassMsg, setErrorPassMsg] = useState("")


     //정규식 표현 영어전체 + 한글전체 + 특수문자 (_!@$%^&*-+?") + 4자에서 20자까지
    const userRegex = /^[a-zA-Z0-9가-힣_!@$%^&*-+=?"]{4,20}$/


    //정규식 표현 6글자에서 20자까지 숫자필수 전체, 글자 필수 영문전체, 특수문자 가능(@$!%*#?&)
    const passRegex = /^[a-zA-Z0-9가-힣_!@$%^&*-+=?"]{6,20}$/


    let gohome = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3007/users`)
        .then(
            Response => {
                console.log(Response)
                gohome("/home")
            }
        )
    })

    const onChangeUserName = () => {

        if(userName.current.value.length >= 4){
            if(userRegex.test(userName.current.value)){
                console.log("Right")
            } else {
                console.log("Wrong")
            }
             setErrorMsg("올바른 아이디 입니다.")
        } else {
            setErrorMsg("옳지 않은 아이디 입니다.")
        }
    }

    const onChangePassword = () => {

       if(password.current.value.length >=4){
           if(passRegex.test(password.current.value)){
               console.log("Right")
           } else {
               console.log("Wrong")
           }
           setErrorPassMsg("올바른 비밀번호 입니다.")
       } else {
           setErrorPassMsg("옳지 않은 아이디 입니다.")
       }
    }

    return(
        <section className="login-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="basic-login">
                            <h3 className="text-center mb-60">Login From Here</h3>
                            <form action=" ">
                                <label for="name">아이디 <span>*필수입력</span></label>
                                <input ref={userName} onChange={onChangeUserName} id="name" type="text" placeholder="아이디를 입력하세요.(4~20자)" />
                                <label for="pass">비밀번호 <span>*필수입력</span></label>
                                <input ref={password} onChange={onChangePassword} id="pass" type="password" placeholder="비밀번호를 입력하세요.(6~20자)" />
                                <div className="login-action mb-20 fix">
                                    <span className="log-rem f-left">
                                        <input id="remember" type="checkbox" />
                                        <label for="remember">Remember me!</label>
                                    </span>
                                    <span className="forgot-login f-right">
                                        <a href="java.html">Lost your password?</a>
                                    </span>
                                </div>
                                <button className="btn theme-btn-2 w-100">Login Now</button>
                                <div className="or-divide"><span>or</span></div>
                                <button className="btn theme-btn w-100"><Link to={'/register'}>Register Now</Link></button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginArea;