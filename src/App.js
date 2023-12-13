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
import AddPropertiesPage from './components/AddPropertiesPage';
import BookingPage from './components/Bookings/BookingPage';


function App() {
  return (
    <div>
       <Router>
        <nav className="navbar align-content-center " style={{display: "flex",  backgroundColor: "#e3f2fd",}} >
          <div><div className="homeimage"></div>
           <Link to='/'><button type="button" className="btn btn-primary" style={{margin:"10px"}}>Home</button></Link>
            <Link  to='/buyers'><button type="button" className="btn btn-primary" style={{margin:"10px"}}>Buyers</button></Link>
            <Link to='/sellers'><button type="button" className="btn btn-primary" style={{margin:"10px"}}>Sellers</button></Link>
            <Link to='/properties'><button type="button" className="btn btn-primary" style={{margin:"10px"}}> Properties</button></Link>
            <Link to='/addpropertiespage'><button type="button" className="btn btn-primary" style={{margin:"10px"}}> Add Property</button></Link>
           
            </div>
        </nav>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/buyers' element={<Buyers />} />
          <Route path='/sellers' element={<Sellers />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/addpropertiespage' element={<AddPropertiesPage />} />
          <Route path='/bookings/:id' element={<BookingPage />} />
        </Routes>
      </Router>
      

    </div>

  );
}

export default App;
