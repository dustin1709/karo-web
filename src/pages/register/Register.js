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
                    console.log("????ng k?? th??nh c??ng!");
                    navigate("/home");
                } else {
                    setErrSMS(res.error.confirm_password_register);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        if (password.length < 8 || password2.length < 8) {
            setErrSMS("Vui l??ng ?????t m???t kh???u ??t nh???t t??? 8 k?? t??? tr??? l??n.");
        } else {
            setErrSMS("M???t kh???u g?? l???i kh??ng kh???p v???i m???t kh???u. Vui l??ng ?????t l???i m???t kh???u.");
        }
    }

    return (
        <>
            <div id="background" style={{ paddingTop: '3em' }}>
                <form id="login-form" onSubmit={register}>
                    <div id="title">
                        <img src={'/logo_karo.png'} />
                        <h1 id="h1-login">????ng k?? th??nh vi??n</h1>
                    </div>
                    {errSMS ? (<p style={{color: "red", clear: "both", float: "left"}}>{errSMS}</p>) : <></>}
                    <input type="text" id="name" name="name" 
                        placeholder="H??? v?? t??n" required
                        onChange={(e) => setName(e.target.value)} />
                    <input type="text" id="email" name="email" 
                        placeholder="Email" required
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" id="phone" name="phone" 
                        placeholder="S??? ??i???n tho???i" required
                        onChange={(e) => setPhone(e.target.value)} />

                    <label style={{float: 'left', paddingTop: '2%'}}>Khu v???c ho???t ?????ng</label>
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
                        placeholder="M???t kh???u" required
                        onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" id="password2" name="password"
                        placeholder="X??c nh???n l???i m???t kh???u" required
                        onChange={(e) => setPassword2(e.target.value)} />

                    <button id="login-button" type="submit">T???o t??i kho???n</button>

                    <div id="register-link" style={{clear: 'both', width: '100%'}}>
                        <p>???? c?? t??i kho???n?<Link to="/"> Quay l???i ????ng nh???p</Link></p>
                    </div>
                </form>
            </div>
            <Footer />        
        </>
    );
}

export default Register
