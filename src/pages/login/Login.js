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
                
                <div style={{width: '100%', height: '9px', borderBottom: '1px solid #808080', textAlign: 'center', marginTop: '3%'}}>
                    <span style={{fontSize: '15px', padding: '0 10px', color : '#808080', background: '#ffff'}}>
                        Hoặc
                    </span>
                </div>

            </form>
        </div>
        </>
    );

}

export default Login
