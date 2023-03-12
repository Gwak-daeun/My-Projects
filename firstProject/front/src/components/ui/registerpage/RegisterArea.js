
import React from "react";

function RegisterArea() {

    


    return( 
        <>
        <section class="login-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="basic-login">
                            <h3 class="text-center mb-60">Signup From Here</h3>
                            <form action="" >
                                <label for="name">사용자 아이디 <span>**</span></label>
                                <div ><input  name="userName"  type="text" placeholder="사용하실 아이디를 입력하세요." /></div>

                                <label for="email-id">이메일 주소 <span>**</span></label>
                                <input name="userEmail" type="text" placeholder="사용하실 이메일을 입력하세요." />
                                
                                <label for="pass">비밀번호 <span>**</span></label>
                                <input  name="password" type="password" placeholder="비밀번호를 입력하세요." />
                                <div class="mt-10"></div>

                                <label for="confirmpass">비밀번호 확인<span>**</span></label>
                                <input  type="confirmpassword" placeholder="비밀번호를 한번 더 입력하세요." />
                                <div class="mt-10"></div>

                                <button class="btn theme-btn-2 w-100">Register Now</button>
                                <div class="or-divide"><span>or</span></div>
                                <button class="btn theme-btn w-100">login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default RegisterArea;