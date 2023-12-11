import PropertiesDisplay from "./PropertiesDisplay";
import SearchProperty from "./SearchProperty";
import PropertiesStructure from "./PropertiesStructure";
import Properties from "./Properties";
import PropTypes from "prop-types";
import properties from "../data/property.json";
import { useState, useEffect } from "react";
import AddProperty from "./AddProperty";
import axios from "axios";



function Status(props) {
    // const [status, setStatus] = useState("")



    return (
        <div>

            {/* <input type="text" readOnly value={status} /> */}
            <br />
            <button style={{marginRight:"2px"}}className="btn btn-primary" type="submit" onClick={e => {
                e.preventDefault()
                
                axios.patch("http://localhost:3000/properties/" + props.id, { status: "For Sale" })
                    .then(response => {
                        props.getProperties()
                        // setStatus("For Sale");
                    })
                    .catch(err => console.error(err))
            }}>

                For Sale
            </button>

            <button style={{marginRight:"2px"}} className="btn btn-primary" type="submit" onClick={e => {
                e.preventDefault()
                axios.patch("http://localhost:3000/properties/" + props.id, { status: "SOLD" })
                    .then(response => {
                        // setStatus("SOLD");
                    })
                    .catch(err => console.error(err))
            }}>

                SOLD
            </button>

            <button style={{marginRight:"2px"}} className="btn btn-primary" type="submit" onClick={e => {
                e.preventDefault()
                axios.patch("http://localhost:3000/properties/" + props.id, { status: "Withdrawn" })
                    .then(response => {
                        // setStatus("Withdrawn");
                    })
                    .catch(err => console.error(err))
            }}>

                Withdrawn
            </button>

            <button className="btn btn-primary" type="submit" onClick={e => {
                e.preventDefault()
                axios.patch("http://localhost:3000/properties/" + props.id, { status: "Re-Submit" })
                    .then(response => {
                        // setStatus("For Sale");
                    })
                    .catch(err => console.error(err))
            }}>

                Re-Submit
            </button>
        </div>
    );
}


export default Status;