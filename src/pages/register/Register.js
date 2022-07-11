import { React, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Cities from "./hooks/Cities"; // --> import custom hook
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState(0);
    const [dist, setDist] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [ errSMS, setErrSMS ] = useState("");

    // select cities which allows districts' dropdown list to update
    const cities = Cities();
    const selectedCity = useRef(1);
    const [listDistrict, setListDistrict] = useState([]);    
    const changeSelectOptionHandler = (e) => {
        selectedCity.current = e.target.value;
        setCity(e.target.value);
        let districts = cities[selectedCity.current-1].dist;
        setListDistrict(districts);
        console.log("User choose city: " + selectedCity.current + ". The districts are: " + districts);
    };
    useEffect(() => {
        if (selectedCity.current === 1) {
            let districts = cities[0].dist;
            setListDistrict(districts);
        }
    }, []);

    const register = async (e) => {
        e.preventDefault();
        var data = new FormData();
        data.append('name', name);
        data.append('email_register', email);
        data.append('phone_register', phone);
        if (password === password2 && password.length === 8) {
            data.append('password_register', password);
            data.append('confirm_password_register', password2);
            data.append('city', city);
            data.append('district', dist);
            console.log(data);
            var config = {
                method: 'post',
                url: "http://lab.karo.land/api/register",
                data : data
            };
            axios(config).then(function (response) {
                const res = response.data;
                if (res.error_code === "00") {
                    console.log("Đăng ký thành công!");
                    navigate("/home");
                } else {
                    setErrSMS(res.error.confirm_password_register);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        if (password.length < 8 || password2.length < 8) {
            setErrSMS("Vui lòng đặt mật khẩu ít nhất từ 8 ký tự trở lên.");
        } else {
            setErrSMS("Mật khẩu gõ lại không khớp với mật khẩu. Vui lòng đặt lại mật khẩu.");
        }
    }

    return (
        <>
            <div id="background" style={{ paddingTop: '3em' }}>
                <form id="login-form" onSubmit={register}>
                    <div id="title">
                        <img src={'/logo_karo.png'} />
                        <h1 id="h1-login">Đăng ký thành viên</h1>
                    </div>
                    {errSMS ? (<p style={{color: "red", clear: "both", float: "left"}}>{errSMS}</p>) : <></>}
                    <input type="text" id="name" name="name" 
                        placeholder="Họ và tên" required
                        onChange={(e) => setName(e.target.value)} />
                    <input type="text" id="email" name="email" 
                        placeholder="Email" required
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" id="phone" name="phone" 
                        placeholder="Số điện thoại" required
                        onChange={(e) => setPhone(e.target.value)} />

                    <label style={{float: 'left', paddingTop: '2%'}}>Khu vực hoạt động</label>
                    <div style={{clear: 'both'}}></div>
                    <select style={{float: 'left', width: '50%'}} onChange={changeSelectOptionHandler}  className="form-select" aria-label=".form-select-lg example">
                        {
                            cities.map(c => (
                                <option value={c.id}>{c.name}</option>
                            ))
                        }
                    </select>

                    <select style={{float: 'right', width: '48%'}} onChange={(e) => setDist(e.target.value)} className="form-select" aria-label=".form-select-lg example">
                        {
                            listDistrict.map((district, index) => <option value={index+1}>{district}</option>)
                        }
                    </select>

                    <div style={{clear: 'both', padding: '1%'}}></div>
                    <input type="password" id="password" name="password"
                        placeholder="Mật khẩu" required
                        onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" id="password2" name="password"
                        placeholder="Xác nhận lại mật khẩu" required
                        onChange={(e) => setPassword2(e.target.value)} />

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
