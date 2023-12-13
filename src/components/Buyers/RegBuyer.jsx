import { useState, useEffect } from "react";
import axios from 'axios';
import BuyerDisplay from "./BuyerDisplay";
import BuyerStructure from "./BuyerStructure";

function RegBuyer(props) {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")

    return (

        <form onSubmit={e => {
            e.preventDefault();
            axios.post("http://localhost:3000/buyers",
                { firstname, lastname })
                .then(response => {
                    console.log(response);
                    setFirstname("");
                    setLastname("");
                    props.getBuyers();
                }).catch(err => console.error(err))
        }}>
            <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#e3f2fd", width: "80%" }}>
                <label htmlFor="firstName">First Name</label>
                <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                    id="firstName"
                    firstname="firstname"
                    type="text"
                    value={firstname}
                    onChange={e => setFirstname(e.target.value)}
                    required
                />
                <br /><label htmlFor="lastName">Last Name</label>
                <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                    id="lastName"
                    lastname="lastname"
                    type="text"
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                    required
                />
                <div className="mt-2">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default RegBuyer;

