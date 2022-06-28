import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Cities from "./hooks/Cities"; // --> import custom hook

const Register = () => {
    
    // select cities which allows districts' dropdown list to update
    const cities = Cities();
    const selectedCity = useRef(1);
    const [listDistrict, setListDistrict] = useState([]);    
    const changeSelectOptionHandler = (e) => {
        selectedCity.current = e.target.value;
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

    return (
        <>
            <div id="background" style={{ paddingTop: '3em' }}>
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
                    <select style={{float: 'left', width: '50%'}} onChange={changeSelectOptionHandler}  className="form-select" aria-label=".form-select-lg example">
                        {
                            cities.map(city => (
                                <option value={city.id}>{city.name}</option>
                            ))
                        }
                    </select>

                    <select style={{float: 'right', width: '48%'}} className="form-select" aria-label=".form-select-lg example">
                        {
                            listDistrict.map((district, index) => <option value={index+1}>{district}</option>)
                        }
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
