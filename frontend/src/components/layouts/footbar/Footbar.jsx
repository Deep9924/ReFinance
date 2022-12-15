import React from 'react'
import './Footbar.css';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, LinkedIn, GitHub, Email } from '@mui/icons-material';
//import LogoImg from '../../assets/just_logo.png'
//FacebookRounded

const Footbar = () => {
  return (
    <div >
      <div className="footer">
        <div className="social">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook sx={{ fontSize: 30 }} /></a>
          <a href="https://twitter.com/Deep_patel23/" target="_blank" rel="noopener noreferrer"><Twitter sx={{ fontSize: 30 }} /></a>
          <a href="https://linkedin.com/in/deep-patel23/" target="_blank" rel="noopener noreferrer"><LinkedIn sx={{ fontSize: 30 }} /></a>
          <a href="https://github.com/Deep9924" target="_blank" rel="noopener noreferrer"><GitHub sx={{ fontSize: 30 }} /></a>
          <a href="mailto:email@example.com" target="_blank" rel="noopener noreferrer"><Email sx={{ fontSize: 30 }} /></a>
        </div>

        <ul className="list" >
          <li>
            <NavLink to={'/'} target="_blank" rel="noopener noreferrer" >Home</NavLink>
          </li>
          <li>
            <NavLink to={'/'} target="_blank" rel="noopener noreferrer" >Services</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} target="_blank" rel="noopener noreferrer">About</NavLink>
          </li>
          <li>
            <NavLink to={'/'} target="_blank" rel="noopener noreferrer" >Terms</NavLink>
          </li>
          <li>
            <NavLink to={'/'} target="_blank" rel="noopener noreferrer" >Privacy Policy</NavLink>
          </li>
        </ul >
        <h6 className="copyright" > ReThink Your Finance | ReFinance &#169; 2022</h6>
      </div >
    </div >
  )
}

export default Footbar;