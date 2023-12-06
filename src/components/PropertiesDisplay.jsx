import PropertiesStructure from "./PropertiesStructure";
import axios from "axios";
import { useState, useEffect } from "react";



function PropertiesDisplay() {
    const [filterAdd, setFilterAdd] = useState("")
    const [filterCity, setFilterCity] = useState("")
    const [filterType, setFilterType] = useState("")
    const [filterPrice, setFilterPrice] = useState("")
    const [filterGarden, setFilterGarden] = useState("")
    const [filterBedroom, setFilterBedroom] = useState("")
    const [filterBathroom, setFilterBathroom] = useState("")
    function getProperties() {
        axios.get("http://localhost:3000/properties")
            .then((response) => { setProperties(response.data) })
            .catch(console.log)
    }

    useEffect(() => { getProperties() }, []) //makes sure getbuyers is triggered once

    const [properties, setProperties] = useState([])

    const propertyList = []

    for (const property of properties) {
        console.log("Properties:", property);
        if (filterAdd && !property.address.toLowerCase().includes(filterAdd.toLowerCase())) continue;
        if (filterCity && !property.city.toLowerCase().includes(filterCity.toLowerCase())) continue;
        if (filterType !== "" && !property.type.toLowerCase().includes(filterType.toLowerCase())) continue;
        if (filterPrice !== "" && !property.price.toLowerCase().includes(filterPrice.toLowerCase())) continue;
        if (filterBathroom > property.bathroom) continue;
        if (filterBedroom > property.bedrooms) continue;
        if (filterGarden && filterGarden !== property.garden)continue;

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

            />
        )
    }
    function handleChangeAddress(event) {
        setFilterAdd(event.target.value);

    }
    function handleChangeCity(event) {
        setFilterCity(event.target.value);

    }
    function handleChangeType(event) {
        setFilterType(event.target.value);

    }

    function handleChangePrice(event) {
        setFilterPrice(event.target.value);

    }

    function handleChangeBedroom(event) {
        setFilterBedroom(event.target.value);

    }

    function handleChangeBathroom(event) {
        setFilterBathroom(event.target.value);

    }

    function handleChangeGarden(event) {
        setFilterGarden(event.target.value);

    }
    return (
        <div>
            <label>Address</label><br />
            <input name="property.address" type="text" value={filterAdd} onChange={handleChangeAddress} />
            <br /><label>City</label><br />
            <input name="property.city" type="text" value={filterCity} onChange={handleChangeCity} />
            <br /><label>Type</label><br />
            <input name="property.type" type="text" value={filterType} onChange={handleChangeType} />
            <br /> <label>Min. Bedroom</label><br />
            <input name="property.bedroom" type="text" value={filterBedroom} onChange={handleChangeBedroom} />
            <br /><label>Min. Bathroom</label><br />
            <input name="property.bathroom" type="text" value={filterBathroom} onChange={handleChangeBathroom} />
            <br /><label>Min Price</label><br/>
            <input name="property.price" type="text" min="0" max="" value={filterPrice} onChange={handleChangePrice} />
            <br/><label>Max Price</label><br/>
            <input name="property.price" type="text" min="" max="300,000" value={filterPrice} onChange={handleChangePrice} />
            <br /><label>Garden</label><br />
            <select name="property.garden" onChange={handleChangeGarden}>
                <option selected value={""}></option>
                <option value={"Yes"}> Yes</option>
                <option value={"No"}>No</option>
            </select>
            {/* <input name="property.garden" type="" value={filterGarden} onChange={{e => {setFilterGarden(e.target.value)}{handleChangeGarden}}} /> */}
            <p>{propertyList}</p>
        </div>
    )

}
export default PropertiesDisplay;