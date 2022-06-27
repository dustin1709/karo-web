import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Register = () => {
    return (
        <>
            <div id="background" style={{paddingTop: '3em'}}>
                <form id="login-form">
                    <div id="title">
                        <img src={'/logo_karo.png'} />
                        <h1 id="h1-login">Đăng ký thành viên</h1>
                    </div>
                    <input type="text" id="name" name="name" 
                        placeholder="Họ và tên" required />
                    <input type="text" id="email" name="email" 
                        placeholder="Email" required />
                    <input type="text" id="phone" name="phone" 
                        placeholder="Số điện thoại" required />

                    <label style={{float: 'left', paddingTop: '2%'}}>Khu vực hoạt động</label>
                    <div style={{clear: 'both'}}></div>
                    <select style={{float: 'left', width: '50%'}}  className="form-select" aria-label=".form-select-lg example">
                        <option value="1">Hà Nội</option>
                        <option value="2">TP Hồ Chí Minh</option>
                        <option value="3">Bình Dương</option>
                        <option value="4">Đà Nẵng</option>
                        <option value="5">Hải Phòng</option>
                        <option value="6">Long An</option>
                        <option value="7">Bà Rịa Vũng Tàu</option>
                        <option value="8">An Giang</option>
                        <option value="9">Bắc Giang</option>
                        <option value="10">Bắc Kạn</option>
                        <option value="11">Bạc Liêu</option>
                        <option value="12">Bắc Ninh</option>
                        <option value="13">Bến Tre</option>
                        <option value="14">Bình Định</option>
                        <option value="15">Bình Phước</option>
                        <option value="16">Bình Thuận</option>
                        <option value="17">Cà Mau</option>
                        <option value="18">Cần Thơ</option>
                        <option value="19">Cao Bằng</option>
                        <option value="20">Đắk Lắk</option>
                        <option value="21">Đắk Nông</option>
                        <option value="22">Điện Biên</option>
                        <option value="23">Đồng Nai</option>
                        <option value="24">Đồng Tháp</option>
                        <option value="25">Gia Lai</option>
                        <option value="26">Hà Giang</option>
                        <option value="27">Hà Nam</option>
                        <option value="28">Hà Tĩnh</option>
                        <option value="29">Hải Dương</option>
                        <option value="30">Hậu Giang</option>
                    </select>

                    <select style={{float: 'right', width: '48%'}} className="form-select" aria-label=".form-select-lg example">

                    </select>

                    <div style={{clear: 'both', padding: '1%'}}></div>
                    <input type="password" id="password" name="password"
                        placeholder="Mật khẩu" required />
                    <input type="password" id="password2" name="password"
                        placeholder="Xác nhận lại mật khẩu" required />

                    <button id="login-button" type="submit">Tạo tài khoản</button>

                    <div id="register-link" style={{clear: 'both', width: '100%'}}>
                        <p>Đã có tài khoản?<Link to="/"> Quay lại đăng nhập</Link></p>
                    </div>
                </form>
            </div>
            <Footer />        
        </>
    );
}

export default Register
