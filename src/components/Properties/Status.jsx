import PropertiesDisplay from "./PropertiesDisplay";
import SearchProperty from "./SearchProperty";
import PropertiesStructure from "./PropertiesStructure";
import Properties from "./Properties";
import PropTypes from "prop-types";
import properties from "../../data/property.json";
import { useState, useEffect } from "react";
import AddProperty from "./AddProperty";
import axios from "axios";
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import BookingPage from "../Bookings/BookingPage";
import confetti from "canvas-confetti";
function Status(props) {
    const navigate = useNavigate();
    const params = useParams();
    const handleConfetti = () => {
        confetti({
            particleCount: 500,
            spread: 320,
        });
    };
    function handleClick(e, status) {
        e.preventDefault()
        handleConfetti();
        axios.put("http://localhost:8085/property/update" + props.id, { status })
            .then(response => {
                props.getProperties()


            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <button className="btn btn-secondary" type="submit" onClick={(e) => handleClick(e, "For Sale")}>
                For Sale
            </button>
            &nbsp;
            <button className="btn btn-warning" type="submit" onClick={(e) => handleClick(e, "Sold")}>
                Sold
            </button>
            &nbsp;
            <button className="btn btn-danger" type="submit" onClick={(e) => handleClick(e, "Withdraw")}>
                Withdraw
            </button>
        </div>
    );
}

export default Status;