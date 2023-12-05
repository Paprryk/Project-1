import PropertiesStructure from "./PropertiesStructure";
import axios from "axios";
import { useState, useEffect } from "react";



function PropertiesDisplay() {

    function getProperties() {
        axios.get("http://localhost:3000/properties")
        .then((response)=>{setProperties(response.data)})
        .catch(console.log)
    }

    useEffect(()=>{getProperties()},[]) //makes sure getbuyers is triggered once

    const [properties, setProperties] = useState([])

    const propertyList = []

    for (const property of properties) {
        console.log("Properties:", property);

        propertyList.push(
            <PropertiesStructure
                key={property.addres}
                address={property.address}
                price={property.price}
                bedrooms={property.bedrooms}
                bathroom={property.bathroom}
                garden={property.garden}

            />
        )
    }

return (
    <div>
        {propertyList}
    </div>
)
}

export default PropertiesDisplay;