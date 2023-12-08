import axios from "axios";
import { useState } from "react";

function AddSeller() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");


    return (<form onSubmit={e => {
        e.preventDefault()
        axios.post("http://localhost:3000/sellers", { firstname, lastname })
            .then(response => {
                setFirstname("");
                setLastname("");
            })
            .catch(err => console.error(err))
    }}>
        <label htmlFor="firstname" className="form-label">First Name</label>
        <input size="50"
            id="firstname"
            firstname="name"
            className="form-control"
            type="text"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
            required
        />
        <label htmlFor="lastname" className="form-label">Last Name</label>
        <input
        
            id="lastname"
            lastname="name"
            className="form-control"
            type="text"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
            required
        />
        <div className="mt-2">
            <button className="btn btn-primary" type="submit">Submit</button>
        </div>
    </form>);
}

export default AddSeller;