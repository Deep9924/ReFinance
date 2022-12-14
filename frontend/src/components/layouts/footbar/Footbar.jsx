import React from 'react'
import './Footbar.css';
import LogoImg from '../../assets/just_logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const Footbar = () => {
  return (
    <div className='footer'>

      <div class="footer-limiter">

        <div class="footer-right">

          <a href="https://www.apple.ca" _target="blank"><FacebookIcon /></a>
          <a href="https://www.apple.ca" _target="blank"><TwitterIcon /></a>
          <a href="https://www.apple.ca" _target="blank"><LinkedInIcon /></a>
          <a href="https://www.apple.ca" _target="blank"><GitHubIcon /></a>
          <a href="https://www.apple.ca" _target="blank"><EmailIcon /></a>

        </div>

        <div class="footer-left">
          <img className="footbar-img" src={LogoImg} alt="ReFinanced-Logo" />
          <div className='conta'>
            <p class="footer-links">ReThink Your Finances</p>
            <p>ReFinance © 2022</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footbar;