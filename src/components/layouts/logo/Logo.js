import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
        <img src={require("./logo.png")} alt="ReFinanced-Logo"/>
    </div>
  );
}
  
export default Logo;