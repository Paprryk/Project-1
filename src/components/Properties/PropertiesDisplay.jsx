import PropertiesStructure from "./PropertiesStructure";
import axios from "axios";
import { useState, useEffect } from "react";

function PropertiesDisplay(props) {

    const [filterAdd, setFilterAdd] = useState("")
    const [filterCity, setFilterCity] = useState("")
    const [filterType, setFilterType] = useState("")
    const [filterMinPrice, setFilterMinPrice] = useState("")
    const [filterMaxPrice, setFilterMaxPrice] = useState("")
    const [filterGarden, setFilterGarden] = useState("")
    const [filterBedroom, setFilterBedroom] = useState("")
    const [filterBathroom, setFilterBathroom] = useState("")

    function getProperties() {
        axios.get("http://localhost:3000/properties")
            .then((response) => { setProperties(response.data) })
            .catch(console.log)
    }

    useEffect(() => { getProperties() }, []) 

    const [properties, setProperties] = useState([])

    const propertyList = []

    for (const property of properties) {    
        if (filterAdd && !property.address.toLowerCase().includes(filterAdd.toLowerCase())) continue;
        if (filterCity && !property.city.toLowerCase().includes(filterCity.toLowerCase())) continue;
        if (filterType !== "" && !property.type.toLowerCase().includes(filterType.toLowerCase())) continue;
        if (Number(filterMinPrice) && Number(filterMinPrice) > Number(property.price)) continue;
        if (Number(filterMaxPrice) && Number(filterMaxPrice) < Number(property.price)) continue;
        if (Number(filterBathroom) > Number(property.bathroom)) continue;
        if (Number(filterBedroom) > Number(property.bedrooms)) continue;
        if (filterGarden && filterGarden !== property.garden) continue;
      console.log("Property:", property)

        propertyList.push(
            <PropertiesStructure
                key={property.id}
                address={property.address}
                type={property.type}
                city={property.city}
                price={property.price}
                bedrooms={property.bedrooms}
                bathroom={property.bathroom}
                garden={property.garden}
                id={property.id}
                status={property.status}
                image={property.image}
            getProperties={getProperties}
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

            <br /><label htmlFor="Type" className="form-label">Type</label><br />
                   <select onChange={handleChangeType}   >
                   <option  value={""} ></option>
                            <option  value={"Detached"}  >Detached</option>
                            <option value={"Semi-Detached"}  > Semi-Detached</option>
                            <option value={"Terraced"} >Terraced</option>
                            <option value={"Bungalow"} >Bungalow</option>
                            <option value={"Flat"} >Flat</option>  
                        </select> <br />

            <br /> <label>Min. Bedroom</label><br />
            <input name="property.bedroom" type="text" value={filterBedroom} onChange={handleChangeBedroom} />
            <br /><label>Min. Bathroom</label><br />
            <input name="property.bathroom" type="text" value={filterBathroom} onChange={handleChangeBathroom} />
            <br /><label>Min Price</label><br />
            <input type="" value={filterMinPrice || ""} onChange={e => setFilterMinPrice(e.target.value)} />
            <br /><label>Max Price</label><br />
            <input type="" value={filterMaxPrice || ""} onChange={e => setFilterMaxPrice(e.target.value)} />
            <br /><label>Garden</label><br />
            <select name="property.garden" onChange={handleChangeGarden}>
                <option selected value={""}></option>
                <option value={"Yes"}> Yes</option>
                <option value={"No"}>No</option>
            </select>             
            <br/>
             {propertyList}
        </div>
    )
}
export default PropertiesDisplay;