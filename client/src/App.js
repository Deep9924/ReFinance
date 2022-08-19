import './App.css';
import React from 'react'; //, useState
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layouts/navbar';
import IndexScroll from './components/layouts/index_scroll/IndexScroll';
import { Contact, Favourites, Home, Stock } from './pages';

const App = () => {


  return (
    <div className="App">
      <Router>
        
        <Navbar />
        <IndexScroll />
        <div className="main-body">
          <div className="navigation">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/favourites" element={<Favourites/>} />
              <Route path="/stock" element={<Stock/>} />
            </Routes>
          </div>
        </div>

      </Router>
    </div>
  );
}

export default App;
