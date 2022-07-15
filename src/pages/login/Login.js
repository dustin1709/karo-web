import React, { useState } from "react";
import { useNavigate, Navigate, Link, NavLink } from 'react-router-dom';
import './Login.css';
import * as FaIcons from 'react-icons/fa';
import wiget01 from './assets/wiget-icon-1.png';
import wiget02 from './assets/wiget-icon-2.png';
import wiget03 from './assets/wiget-icon-3.png';
import Footer from "../../components/Footer";
import axios from "axios";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ errSMS, setErrSMS ] = useState("");

    const login = async (e) => {
        e.preventDefault();
        var data = new FormData();
        data.append('email', email);
        data.append('password', password);
        var config = {
            method: 'post',
            url: "http://lab.karo.land/api/login",
            data : data
        };
        axios(config).then(function (response) {
            const res = response.data;
            if (res.error_code === "00") {
                navigate("/home");
            } else {
                setErrSMS('Sai mật khẩu hoặc email. Vui lòng thử lại.');
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    const responseGoogle = (response) => {
        console.log(response);
    }

    const responseFacebook = (response) => {
        console.log(response);
    }


    return (
        <>
            <div id="background">
                <form id="login-form" onSubmit={login}>
                    <div id="title">
                        <img src={'/logo_karo.png'} />
                        <h1 id="h1-login">Karo.land</h1>
                    </div>
                    {errSMS ? (<p style={{color: "red", clear: "both", float: "left"}}>{errSMS}</p>) : <></>}
                    <input type="text" id="uname" name="uname" 
                        placeholder="Email" required 
                        onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" id="password" name="password"
                        placeholder="Mật khẩu" required
                        onChange={(e) => setPassword(e.target.value)} />

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
                        <GoogleLogin className="external-btn"
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Đăng nhập với Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            render={renderProps => (
                                <button className="external-btn" onClick={renderProps.onClick}><FaIcons.FaGoogle /> Google</button>
                            )}
                        />
                        <FacebookLogin
                            appId="1088597931155576"
                            fields="name,email,picture"
                            autoLoad={true}
                            callback={responseFacebook}
                            render={renderProps => (
                                <button className="external-btn" onClick={renderProps.onClick}><FaIcons.FaFacebook /> Facebook</button>
                            )}
                        />
                    </div>

                </form>
            </div>
            <div id="box-01">
                <div id="background-2"></div>
                <div id="background-3">
                    <h2>Nền tảng kết nối các môi giới tự do</h2>
                    <p>
                        "Tạo ra một cơ sở dữ liệu chia sẻ chung, giúp môi giới nhanh chóng tìm thấy bất động sản phù hợp với khách hàng, 
                        dễ dàng giới thiệu sản phẩm của mình đến các môi giới khác"
                    </p>
                </div>
            </div>
            <div id="wiget-box">
                <div className="wiget">
                    <img src={wiget01} />
                    <h3>GIẢI PHÁP BÁN HÀNG TỐI ƯU</h3>
                    <p>Giảm chi phí tìm kiếm (searching cost). Xác định giá bán của bất động sản (price discovery)</p>
                </div>
                <div className="wiget">
                    <img src={wiget02} />
                    <h3>NỀN TẢNG KẾT NỐI MÔI GIỚI VỚI MÔI GIỚI</h3>
                    <p>Ngoài ra cung cấp các công cụ giúp môi giới có thể nâng cao được hiệu suất giao dịch</p>
                </div>
                <div className="wiget">
                    <img src={wiget03} />
                    <h3>THIẾT LẬP CÔNG CỤ QUẢN LÝ DEAL CRM CHO MÔI GIỚI</h3>
                    <p>Hỗ trợ công cụ giao dịch tiện ích, tư vấn pháp lý, định giá và thông hành tài chính</p>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default Login
