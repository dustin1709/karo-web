import React from "react";
import * as FaIcons from 'react-icons/fa';

const Footer = () => {
    
    var current = new Date().getFullYear();

    return (
        <footer style={{
            textAlign: 'left',
            backgroundColor: '#b8b8b8',
            paddingLeft: '3%',
            paddingTop: '1.5%',
            paddingRight: '3%',
            paddingBottom: '0.5%',
            clear: 'both',
            position: 'relative',
            bottom: '0'
        }}>
            <div id="title">
                <img src={'/logo_karo.png'} />
                <h1 id="h1-login">Karo.land</h1>
            </div>
            <div style={{padding: '0.25%', clear: 'both'}}></div>
            <span>CÔNG TY CỔ PHẦN CÔNG NGHỆ KẾT NỐI VÀ XỬ LÝ DỮ LIỆU MECHANIK</span>
            <br />
            <span>Rivergate Residence, 151-155 Bến Vân Đồn, P. 6, Q. 4, TP. Hồ Chí Minh</span>
            <br />
            <span>Karo.editors@karo.land</span>
            <div style={{padding: '1%', clear: 'both'}}></div>
            <h6>Connect with Karo</h6>

            {/* Linkedin */}
            <button type="button" className="btn" onClick={()=> window.open("", "_blank")}>
                        <FaIcons.FaLinkedin style={{fontSize: '300%'}} />
            </button>

            {/* Facebook */}
            <button type="button" className="btn" onClick={()=> window.open("", "_blank")}>
                        <FaIcons.FaFacebookSquare style={{fontSize: '300%'}} />
            </button>

            {/* Twitter */}
            <button type="button" className="btn" onClick={()=> window.open("", "_blank")}>
                        <FaIcons.FaTwitterSquare style={{fontSize: '300%'}} />
            </button>
            
            <hr />
            <span><FaIcons.FaCopyright />&nbsp;{current + " - " + (current+1)}&nbsp; Karo Land</span>
        </footer>
    );
}

export default Footer
