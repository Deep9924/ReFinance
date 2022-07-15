import React from 'react';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
import Contact from '../../../pages/Contact/Contact';
import Favourites from '../../../pages/Favourites/Favourites';
import Home from '../../../pages/Home/Home';
import Stock from '../../../pages/Stock/Stock';

const Navbar = () => {
  return (
    <Router>
        <main>
          <Routes>
            <Route path="/home" exact><Home/></Route>
            <Route path="/contact" exact><Contact/></Route>
            <Route path="/favourites" exact><Favourites/></Route>
            <Route path="/stock" exact><Stock/></Route>
            <Navigate to="/"/>
          </Routes>
          
        </main>
    </Router>
  );
}
  
export default Navbar;
  