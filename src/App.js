import './App.css';
import {React, useState} from 'react';
import Navbar from "./components/layouts/navbar";
import Logo from "./components/layouts/logo";

const App = () => {

  return (
    <div className="App">
      <Logo />
      <Navbar />
    </div>
  );
}

export default App;
