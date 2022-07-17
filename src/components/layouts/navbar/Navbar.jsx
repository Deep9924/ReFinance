import React, { useState } from 'react';
import './Navbar.css';
import LogoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const [ click, setClick ] = useState(false);
  const handleClick = () => setClick(!click); 
  return (
    <div className="navbar">
      <div className="logo"> 
        <img src={LogoImg} alt="ReFinanced-Logo"/>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}> 
        <li className="nav-item" onClick={handleClick}><Link to="/">Home</Link></li>
        <li className="nav-item" onClick={handleClick}><Link to="/contact">Contact</Link></li>
        <li className="nav-item" onClick={handleClick}><Link to="/favourites">Favourites</Link></li>
        <li className="nav-item" onClick={handleClick}><Link to="/stock">Stock</Link></li>
      </ul>
      <div className="nav-login">
      <li className="nav-item" onClick={handleClick}><Link to="/login">Log In</Link></li>
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