import React, { useState } from 'react';
import './Navbar.css';
import LogoImg from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [ click, setClick ] = useState(false);
  const handleClick = () => setClick(!click); 
  return (
    <div className="navbar">
      <div className="logo"> 
        <NavLink onClick={handleClick => setClick(false)} exact to="/" ><img src={LogoImg} alt="ReFinanced-Logo"/></NavLink> 
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}> 
        <li className="nav-item" onClick={handleClick => setClick(false)}><NavLink exact to="/" activeclassname="active" >Home</NavLink></li>
        <li className="nav-item" onClick={handleClick => setClick(false)}><NavLink exact to="/contact" activeclassname="active">Contact</NavLink></li>
        <li className="nav-item" onClick={handleClick => setClick(false)}><NavLink exact to="/favourites" activeclassname="active">Favourites</NavLink></li>
        <li className="nav-item" onClick={handleClick => setClick(false)}><NavLink exact to="/stock" activeclassname="active">Stock</NavLink></li>
        {click === true ? (
          <div className="nav-login-small">
            <hr className="line"></hr>
            <li className="nav-item" onClick={handleClick}><NavLink to="/login" activeclassname="active">Log In</NavLink></li>
          </div>) : <></>
        }
      </ul> 
        <div className={click ? "nav-login active" : "nav-login"}>
          <li className="nav-item" onClick={handleClick => setClick(false)}><NavLink exact to="/login" activeclassname="active">Log In</NavLink></li>
        </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{color: '#F8F8F8'}}/>) : <FaBars size={30} style={{color: '#F8F8F8'}} />}
      </div>
    </div>
  );
}


export default Navbar;






















/*import React, {useState} from 'react';
import { NavbarContainer, LeftContainer, RightContainer, 
         NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkExtended,
         NavbarLinksContainer, NavbarLink, Logo, OpenLinksButton
        } from '../../../styles/Navbar.style';
import LogoImg from '../../assets/logo.png';

const Navbar = () => {
  const [ extendNavbar, setExtendNavbar ] = useState(false);
  return (
    <NavbarContainer extendNavbar = {extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <RightContainer>
          <NavbarLinksContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <NavbarLink to="/favourites">Favourites</NavbarLink>
            <NavbarLink to="/stock">Stock</NavbarLink>
            <OpenLinksButton onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}> 
              {extendNavbar ? <> &#10005; </> : <> &#8801; </>}
            </OpenLinksButton>
          </NavbarLinksContainer>
        </RightContainer>
      </NavbarInnerContainer>
      { extendNavbar && (
        <NavbarExtendedContainer>
            <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
            <NavbarLinkExtended to="/favourites">Favourites</NavbarLinkExtended>
            <NavbarLinkExtended to="/stock">Stock</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
  */