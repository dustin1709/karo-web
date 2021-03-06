import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import './Nav.css';

const Nav = () => {
    return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"><img style={{height: '1.8em'}} src={'/logo_karo.png'}/></a>
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline" type="submit" style={{color: 'var(--logo-color)', borderColor: 'var(--logo-color)'}}>Search</button>
          </form>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" style={{color: 'var(--logo-color)'}} aria-current="page" to="/">
                  <span><FaIcons.FaHome /></span>
                  <div style={{clear: 'both', padding: '0.25%'}}></div>
                  <span>Trang chủ</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: 'var(--logo-color)'}} to="/">
                  <span><FaIcons.FaDollarSign /></span>
                  <div style={{clear: 'both', padding: '0.25%'}}></div>
                  <span>Định giá</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: 'var(--logo-color)'}} to="/">
                  <span><FaIcons.FaStoreAlt /></span>
                  <div style={{clear: 'both', padding: '0.25%'}}></div>
                  <span>Kho nhà</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: 'var(--logo-color)'}} to="/">
                  <span><FaIcons.FaRegListAlt /></span>
                  <div style={{clear: 'both', padding: '0.25%'}}></div>
                  <span>Quản Lý</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: 'var(--logo-color)'}} to="/">
                  <span><FaIcons.FaBell /></span>
                  <div style={{clear: 'both', padding: '0.25%'}}></div>
                  <span>Thông báo</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" style={{color: 'var(--logo-color)'}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tôi
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Đăng xuất</a></li>
                </ul>
          </div>
          <div style={{height: '2.5em', backgroundColor: '#3b3a3a', padding: '0.05em'}}></div>
          <div className="nav-item"><Link style={{cursor: 'pointer', color: 'var(--logo-color)'}} className="nav-link" to="/">Hướng dẫn sử dụng</Link></div>
        </div>
      </nav>
    </>
    );
}

export default Nav
