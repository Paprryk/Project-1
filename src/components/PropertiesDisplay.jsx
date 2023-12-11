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
    // const [filterStatus, setFilterStatus] = useState("")

    // function getProperties() {
    //     axios.get("http://localhost:3000/properties")
    //         .then((response) => { setProperties(response.data) })
    //         .catch(console.log)
    // }

    // useEffect(() => { getProperties() }, []) 

    // const [properties, setProperties] = useState([])

    const propertyList = []

    for (const property of props.listProperties) {
        // console.log("Properties:", property);
        if (filterAdd && !property.address.toLowerCase().includes(filterAdd.toLowerCase())) continue;
        if (filterCity && !property.city.toLowerCase().includes(filterCity.toLowerCase())) continue;
        if (filterType !== "" && !property.type.toLowerCase().includes(filterType.toLowerCase())) continue;
        if (filterMinPrice && filterMinPrice > property.price) continue;
        if (filterMaxPrice && filterMaxPrice < property.price) continue;
        if (filterBathroom > property.bathroom) continue;
        if (filterBedroom > property.bedrooms) continue;
        if (filterGarden && filterGarden !== property.garden) continue;
        // if (filterStatus == property.status) continue;
console.log("Property:", property)
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
                id={property.id}
                status={property.status}
                image={property.image}

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

    // function handleChangeMinPrice(event) {
    //     setFilterMinPrice(event.target.value);

    // }
    // function handleChangeMaxPrice(event) {
    //     setFilterMaxPrice(event.target.value);

    // }

    function handleChangeBedroom(event) {
        setFilterBedroom(event.target.value);

    }

    function handleChangeBathroom(event) {
        setFilterBathroom(event.target.value);

    }

    // function handleChangeStatus(event) {
    //     setFilterStatus(event.target.value);

    // }

    function handleChangeGarden(event) {
        setFilterGarden(event.target.value);

    }





    useEffect(() => {
   
        // setInterval(() => {
        //     getProperties()
        // }, 2000)

        getProperties();
    }, [])


    function getProperties(){
        axios.get("http://localhost:3000/properties").then((res) => props.listProperties(res.data)).catch(console.log)
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
            {/* <input name="property.status" type="text" value={filterAdd} onChange={handleChangeStatus} />
            <br /><label>Status</label><br /> */}
             <p>{propertyList}</p>
        </div>
    )

}
export default PropertiesDisplay;