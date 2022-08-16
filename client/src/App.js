import './App.css';
import React from 'react'; //, useState
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layouts/navbar';
import IndexScroll from './components/layouts/index_scroll/IndexScroll';
import { Contact, Favourites, Home, Stock } from './pages';

/*
import Contact from './pages/Contact/Contact';
import Favourites from './pages/Favourites/Favourites';
import Home from './pages/Home/Home';
import Stock from './pages/Stock/Stock';
*/


const App = () => {


  return (
    <div className="App">
      <Router>
        
        <Navbar />
        <IndexScroll />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/favourites" element={<Favourites/>} />
          <Route path="/stock" element={<Stock/>} />
        </Routes>


      </Router>
    </div>
  );
}

export default App;
