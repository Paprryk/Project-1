import Home from './components/Home';
import Buyers from './components/Buyers';
import Sellers from './components/Sellers';
import Properties from './components/Properties';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useState } from 'react';
import PropTypes from "prop-types";
import property from './data/property.json';
import './App.css';
import { Button } from 'bootstrap';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar align-content-center " style={{display: "flex",  backgroundColor: "#e3f2fd"}} >
          <div><Link to='/buyers'>Buyers</Link>
            <Link to='/sellers'>Sellers</Link>
            <Link to='/properties'>Properties</Link></div>
        </nav>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/buyers' element={<Buyers />} />
          <Route path='/sellers' element={<Sellers />} />
          <Route path='/properties' element={<Properties />} />
        </Routes>
      </Router>
      

    </div>

  );
}

export default App;
