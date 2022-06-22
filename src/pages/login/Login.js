import React from "react";
import { useNavigate, Navigate, Link, NavLink } from 'react-router-dom';
import './Login.css';
import * as FaIcons from 'react-icons/fa';

const Login = () => {
    
    return (
        <>
            <div id="background">
                <form id="login-form">
                    <div id="title">
                        <img src={'/logo_karo.png'} />
                        <h1 id="h1-login">Karo.land</h1>
                    </div>
                    <input type="text" id="uname" name="uname" 
                        placeholder="Tài khoản" required />
                    <input type="text" id="password" name="password"
                        placeholder="Mật khẩu" required />

                    <div id="register-link" style={{clear: 'both', width: '100%'}} >
                        <Link to="/register">Đăng ký tài khoản mới</Link>
                    </div>

                    <button id="login-button" type="submit">Đăng nhập</button>
                    
                    <div style={{width: '100%', height: '9px', borderBottom: '1px solid #808080', textAlign: 'center', marginTop: '3%'}}>
                        <span style={{fontSize: '15px', padding: '0 10px', color : '#808080', background: 'var(--login-form-bg)'}}>
                            Hoặc
                        </span>
                    </div>

                    <div id="external-login">
                        <button className="external-btn"><FaIcons.FaGoogle />&nbsp;&nbsp;Google</button>
                        <button className="external-btn"><FaIcons.FaFacebook />&nbsp;&nbsp;Facebook</button>
                    </div>

                </form>
            </div>
        </>
    );

}

export default Login
