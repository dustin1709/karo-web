import React from "react";
import './Login.css';

const Login = () => {
    
    return (
        <>
        <div>
            <form id="login-form">
                <h1 id="h1-login">Karo.land</h1>
                <input type="text" id="uname" name="uname" 
                    placeholder="Tài khoản" required />
                <input type="text" id="password" name="password"
                    placeholder="Mật khẩu" required />

                <button id="login-button" type="submit">Đăng nhập</button>
                
            </form>
        </div>
        </>
    );

}

export default Login
