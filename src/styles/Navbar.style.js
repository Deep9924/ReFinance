import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "100px")};
    display: flex;
    flex-direction: column;
    background-color: black;
    
    @media (min-width: 700px){
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
    flex: 30%;
    display: felx;
    align-items: center;
    padding-left: 5%;
`;
export const RightContainer = styled.div`
    flex: 70%;
    display: felx;
    justify-content: flex-end;
    padding-right: 50px;
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 700px){
        display: none;
    }
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
`;

export const NavbarLinksContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Halvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Halvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;

export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;



/*

.logo img{
    transform: scale(0.7);
    padding:10px 0px;
}

.logo{
    background: rgb(10,48,66);
    background: linear-gradient(90deg, rgba(10,48,66,1) 0%, rgba(13,64,88,1) 28%, rgba(15,75,103,1) 70%);
}


background-color:#0a3042;
background-color: #11506e;
background: rgb(10,48,66);
    background: linear-gradient(90deg, rgba(10,48,66,1) 0%, rgba(13,64,88,1) 28%, rgba(15,75,103,1) 70%);

*/