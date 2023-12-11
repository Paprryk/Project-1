import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// function Home() {
//     return (

//         <div><br /><br />
//             <h5 style={{ textAlign: "center", color: "#0a69ca" }}>An estate agent database create by "Scrum and Scrummer"</h5>
//             <div>
//             <br /><br /><div className="location"></div>
//             <a href="https://maps.app.goo.gl/uSq8HAktiNPYP2Co6">
//                 <p style={{ textAlign: "center" }} alt="Find us here!"><b>Find Us Here</b></p>
//             </a>
//             </div>

//         </div>
//     );
// }

// export default Home;



import { useState, useEffect } from "react";
import PropertiesStructure from "./PropertiesStructure";

function Home() {


    function getProperties() {
        axios.get("http://localhost:3000/properties")
            .then((response) => { setProperties(response.data) })
            .catch(console.log)
    }

    useEffect(() => { getProperties() }, []) //makes sure getbuyers is triggered once

    const [properties, setProperties] = useState([])

    const propertyList = []

    for (const property of properties) {


        if (property.status.toLowerCase() !== "sold") continue;

        propertyList.push(
            <PropertiesStructure
                key={property.address}
                address={property.address}
                type={property.type}
                city={property.city}
                price={property.price}
                bedrooms={property.bedrooms}
                bathroom={property.bathroom}
                garden={property.garden}
                // id={property.id}
                status={property.status}

            />
        )
    }


    return (

        <div><br /><br />
            <h5 style={{ textAlign: "center", color: "#0a69ca" }}>An estate agent database created and operated by "Scrum and Scrummer"</h5>
            <div>
                <br /><br /><div className="location"></div>
                <a href="https://maps.app.goo.gl/uSq8HAktiNPYP2Co6">
                    <p style={{ textAlign: "center" }} alt="Find us here!"><b>Find Us Here</b></p>
                </a>
            </div>
            <h4>Too late, Already SOLD...</h4>
            {propertyList}
        </div>
    );
}

export default Home;