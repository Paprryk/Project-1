import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertiesRedirect from "./RedirectProperties";
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function AddProperty() {
    const [address, setAddress] = useState("");
    const [type, setType] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [garden, setGarden] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate("")

    return (<form class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#e3f2fd", width: "80%" }} onSubmit={e => {

        e.preventDefault()

        axios.post("http://localhost:3000/properties", { address, type, city, price, bedrooms, bathroom, garden, status, image })

            .then(response => {
                setAddress("");
                setType("");
                setCity("");
                setPrice("");
                setBedrooms("");
                setBathroom("");
                setGarden("");
                setStatus("");
                setImage("");
                setStatus("");
                navigate ("/properties")

            })

            .catch(err => console.error(err))

    }}>
        <label htmlFor="address" className="form-label">Address</label>
        <input size="50"
            id="address"
            className="form-control"
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
        />
        


<label htmlFor="Type" className="form-label">Type</label><br />
                   <select onChange={e => setType(e.target.value)}   >
                       <option selected value={""} onChange={e => setType(e.target.value)} ></option>
                            <option  value={"Detached"} onChange={e => setType(e.target.value)} >Detached</option>
                            <option value={"Semi_Detached"} onChange={e => setType(e.target.value)} > Semi_Detached</option>
                            <option value={"Terraced"} onChange={e => setType(e.target.value)} >Terraced</option>
                            <option value={"Bangalow"} onChange={e => setType(e.target.value)} >Bangalow</option>
                            <option value={"Flat"} onChange={e => setType(e.target.value)} >Flat</option>
                                                     
                        </select> <br />





                <label htmlFor="city" className="form-label">City</label>
        <input size="50"
            id="city"
            className="form-control"
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            required
        />
        <label htmlFor="price" className="form-label">Price</label>
        <input size="50"
            id="price"
            className="form-control"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
        />
               

<label htmlFor="Bedrooms" className="form-label">Bedrooms</label>
                   <select onChange={e => setBedrooms(e.target.value)}   >
                       <option selected value={""} onChange={e => setBedrooms(e.target.value)} ></option>
                            <option  value={"1"} onChange={e => setBedrooms(e.target.value)} >1</option>
                            <option value={"2"} onChange={e => setBedrooms(e.target.value)} > 2</option>
                            <option value={"3"} onChange={e => setBedrooms(e.target.value)} >3</option>
                            <option value={"4"} onChange={e => setBedrooms(e.target.value)} >4</option>
                            <option value={"5+"} onChange={e => setBedrooms(e.target.value)} >5+</option>
                                                     
                        </select> <br />

               

<label htmlFor="bathroom" className="form-label">Bathroom</label>
                   <select onChange={e => setBedrooms(e.target.value)}   >
                       <option selected value={""} onChange={e => setBathroom(e.target.value)} ></option>
                            <option  value={"1"} onChange={e => setBathroom(e.target.value)} >1</option>
                            <option value={"2"} onChange={e => setBathroom(e.target.value)} > 2</option>
                            <option value={"3"} onChange={e => setBathroom(e.target.value)} >3</option>
                            <option value={"4+"} onChange={e => setBathroom(e.target.value)} >4+</option>
                            </select> <br />

               


        <label htmlFor="garden" className="form-label">Garden</label>
        <select onChange={e => setGarden(e.target.value)}   >
            <option selected value={""} onChange={e => setGarden(e.target.value)} ></option>
            <option onChange={e => setGarden(e.target.value)} >Yes</option>
            <option onChange={e => setGarden(e.target.value)} >No</option>
        </select>
        <br />




        <label htmlFor="status" className="form-label">Status</label>
        <select onChange={e => setStatus(e.target.value)}   >
            <option selected value={""} onChange={e => setStatus(e.target.value)} ></option>
            <option style={{ color: "green" }} value={"For Sale"} onChange={e => setStatus(e.target.value)} >For Sale</option>
            <option style={{ color: "orange" }} value={"Sold"} onChange={e => setStatus(e.target.value)} > Sold</option>
            <option style={{ color: "red" }} value={"Withdrawn"} onChange={e => setStatus(e.target.value)} >Withdrawn</option>

        </select>

        <label htmlFor="image" className="form-label">Image</label>
        <input size="50"
            id="image"
            className="src"
            type="src"
            value={image}
            onChange={e => setImage(e.target.value)}
            required
        />
        {/* Added by TC */}
        <div className="mt-2">
            <button className="btn btn-primary" type="submit">Submit</button>
            {/* <Link to='/properties'><button type="submit" className="btn btn-primary" style={{margin:"10px"}}> submit</button></Link> */}
       
        </div>


    </form>);
}

export default AddProperty;