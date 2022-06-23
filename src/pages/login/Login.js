import React from "react";
import { useNavigate, Navigate, Link, NavLink } from 'react-router-dom';
import './Login.css';
import * as FaIcons from 'react-icons/fa';
import wiget01 from './assets/wiget-icon-1.png';
import wiget02 from './assets/wiget-icon-2.png';
import wiget03 from './assets/wiget-icon-3.png';
import Footer from "../../components/Footer";

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
                    <input type="password" id="password" name="password"
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
