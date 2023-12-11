import { useState, useEffect } from "react";
import axios from 'axios';
import BuyerDisplay from "./BuyerDisplay";

function RegBuyer() {

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
                }).catch(err => console.error(err))
        }}>
            <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#e3f2fd", width: "80%" }}>
                <label htmlFor="firstName">First Name</label>
                <br /><input
                    id="firstName"
                    firstname="firstname"
                    type="text"
                    value={firstname}
                    onChange={e => setFirstname(e.target.value)}
                    required
                />
                <br /><label htmlFor="lastName">Last Name</label>
                <br /><input
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

