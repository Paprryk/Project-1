import PropertiesDisplay from "./PropertiesDisplay";
import SearchProperty from "./SearchProperty";
import PropertiesStructure from "./PropertiesStructure";
import Properties from "./Properties";
import PropTypes from "prop-types";
import properties from "../data/property.json";
import { useState, useEffect } from "react";
import AddProperty from "./AddProperty";
import axios from "axios";
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import BookingPage from "./Bookings/BookingPage";



function Status(props) {
const navigate = useNavigate();
const params =useParams();
// const [properties],

    function handleClick(e, status) {
        e.preventDefault()

        axios.patch("http://localhost:3000/properties/" + props.id, { status })
            .then(response => {
                props.getProperties()

            })
            .catch(err => console.error(err))

           
            
    }
/*************code added */
//     const [id, setId] =useState(0)
// function handleBooking(){


//     axios.get("http://localhost:3000/properties")
//          .then((response) => { setId(response.data.id) })
//          .catch(console.log)
//     }
// const bookingList=[];
//     bookingList.push(
//         <BookingStructure
//             key={property.address}
//             address={property.address}
//             type={property.type}
//             city={property.city}
//             price={property.price}
//             bedrooms={property.bedrooms}
//             bathroom={property.bathroom}
//             garden={property.garden}
//             id={property.id}
//             status={property.status}

//         />
//     )


/******************************* */

    // function BookingsRedirect() {
  
    //     let navigate = useNavigate(); 
    //     const routeChange = () =>{ 
    //       let path = <BookingPage/>; 
    //       navigate(path);
    //     }
    // }

    return (
<div>



        <button className="btn btn-primary" type="submit"  onClick={(e) => handleClick(e, "For Sale")}>
        For Sale
    </button>
    &nbsp;
    <button className="btn btn-primary"  type="submit" onClick={(e) => handleClick(e, "Sold")}>
        Sold
    </button>
    &nbsp;
    <button className="btn btn-primary" type="submit" onClick={(e) => handleClick(e, "Withdrawn")}>
        Withdraw
    </button>
  
    
    </div>
    
    );
    
}

export default Status;