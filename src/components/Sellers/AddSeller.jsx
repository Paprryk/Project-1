import axios from "axios";
import { useState } from "react";
// import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Home from './Home';

function AddSeller(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");


    return (<form onSubmit={e => {
        e.preventDefault();
        axios.post("http://localhost:3000/sellers", { firstname, lastname })
            .then(response => {
                setFirstname("");
                setLastname("");
                props.getSellers();
            })
            .catch(err => console.error(err))
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

export default AddSeller;