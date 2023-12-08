import { useState, useEffect } from "react";
import axios from 'axios';
import BuyerDisplay from "./BuyerDisplay";

function RegBuyer() {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")

<<<<<<< HEAD
=======
    

>>>>>>> d258fa7fbb20921900a412ee8a88c82e38dd51bd
    return (

        <form onSubmit={e => {
            e.preventDefault();
            axios.post("http://localhost:3000/buyers",
                { firstname, lastname })                
                .then(response => {
                    console.log(response);
                    setFirstname("");
                    setLastname("");
<<<<<<< HEAD
                }).catch(err => console.error(err))
        }}>
<div class="border border-primary p-2 mb-2 border-4" style={{backgroundColor: "#e3f2fd", width: "80%"}}>
            <label htmlFor="firstName">First Name</label>
            <br/><input
=======

                }
                
                )
                .catch(err => console.error(err))
        } } >

            <label htmlFor="firstName">FirstName</label>
            <input
>>>>>>> d258fa7fbb20921900a412ee8a88c82e38dd51bd
                id="firstName"
                firstname="firstname"
                type="text"
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
                required                
            />
            <br/><label htmlFor="lastName">Last Name</label>
            <br/><input
                id="lastName"
                lastname="lastname"
                type="text"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
                required
            />
            <div>
<<<<<<< HEAD
                <br/><button type="submit">
                    Submit
                </button></div>
=======

            <button className="btn btn-primary" type="submit">Submit</button>

>>>>>>> d258fa7fbb20921900a412ee8a88c82e38dd51bd
                
            </div>

        </form>




    );
}

export default RegBuyer; 

