import React from "react";
import logo from '../component/assets/Images/logo.svg'
import  './assets/css/header.css';
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      {/* <nav className="navbar bg-body-tertiary nav-bg-dark"> */}
        <div className="container-fluid header">
        <Link to={"/home"} className="navbar-brand"><img className="logo" src={logo} alt="" width="50px" /></Link>
        <ul className="nav-links navList" >
          <li><Link  to={'/'}>HOME</Link></li>
          <li><Link to='/contact'>CONTACT</Link>
          </li>
          <li><Link to ='/About'>ABOUT</Link></li>
        </ul>
          <form className="d-flex search-form" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button style={{    width: "auto"
}} className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      {/* </nav> */}
    </>
  );
}

export default Header;
