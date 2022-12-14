import React, { useState } from 'react';
import './Navbar.css';
import LogoImg from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Search from '../search/Search';


const Navbar = () => {
  const [ click, setClick ] = useState(false);
  const handleClick = () => setClick(!click); 

  return (
    <>
      <div className="navbar">
        <div className="logo"> 
          <NavLink onClick={handleClick => setClick(false)} end to="/" ><img src={LogoImg} alt="ReFinanced-Logo"/></NavLink> 
        </div>
        <div className="search-bar-main">
          <Search placeholder="Search..." />{
            // data={Nasdaq}
          }
        </div>

        <div className="navmenu-login">
          <div className="nav-login">
              <li className="nav-login-page" onClick={handleClick => setClick(false)}><NavLink to="/login" activeclassname="active">Log In</NavLink></li>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}> 
            <div className="nav-login-signup"> 
              <div className="nav-login-small" onClick={handleClick}><NavLink to="/login">Sign in</NavLink></div>
            </div>
            <li className="nav-item" onClick={handleClick => setClick(false)}><NavLink end to="/" activeclassname="active" >Home</NavLink></li>
            
            <li className="nav-item" onClick={handleClick => setClick(false)}><NavLink to="/favourites" activeclassname="active">Favourites</NavLink></li>
            <li className="nav-item" onClick={handleClick => setClick(false)}><NavLink to="/news" activeclassname="active">News</NavLink></li>
            <li className="nav-item" onClick={handleClick => setClick(false)}><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            <hr className="line"></hr>
          </ul> 
    
          <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{color: '#F8F8F8'}}/>) : <FaBars size={30} style={{color: '#F8F8F8'}} />}
          </div>
        </div>
      </div>
      <div className="search-bar-small navbar">
        <Search placeholder="Search..." /> {
          //data={Nasdaq}
        }
      </div>
      
    </>
  );
}

export default Navbar;
