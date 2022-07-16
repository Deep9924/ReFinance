import React, {useState} from 'react';
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
  