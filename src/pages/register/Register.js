import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Register = () => {

    const cities = [
        {
            id: 1,
            name:"Hà Nội",
            dist: [
                {id: 1, name: "Hoàn Kiếm"},
                {id: 2, name: "Ba Đình"},
                {id: 3, name: "Đống Đa"},
                {id: 4, name: "Hai Bà Trưng"},
                {id: 5, name: "Thanh Xuân"},
                {id: 6, name: "Tây Hồ"},
                {id: 7, name: "Cầu Giấy"},
                {id: 8, name: "Hoàng Mai"},
                {id: 9, name: "Long Biên"},
                {id: 10, name: "Đông Anh"},
                {id: 11, name: "Gia Lâm"}
            ]
        }, "TP Hồ Chí Minh", "Bình Dương", "Đà Nẵng", "Hải Phòng",
                    "Long An", "Bà Rịa Vũng Tàu", "An Giang", "Bắc Giang", "Bắc Kạn",
                    "Bạc Liêu", "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Phước",
                    "Bình Thuận", "Cà Mau", "Cần Thơ", "Cao Bằng", "Đắk Lắk", "Đắk Nông",
                    "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam",
                    "Hà Tĩnh", "Hải Dương", "Hậu Giang", "Hoà Bình", "Hưng Yên", "Khánh Hoà",
                    "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai"
                ];

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
                        {
                            cities.map((city, index) => (
                                <option value={index+1}>{city}</option>
                            ))
                        }
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
