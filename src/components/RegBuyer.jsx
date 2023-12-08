import { useState, useEffect } from "react";
import axios from 'axios';
import BuyerDisplay from "./BuyerDisplay";
import BuyerStructure from "./BuyerStructure";

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

                }

                )
                .catch(err => console.error(err))
        }} >
          
            <ul> 
                <fieldset  style={{border:"solid", width:"50%"}} >
                    <legend>Add Buyer</legend>
                    {/* <li> */}
                         <label  style={{padding:"10px"}} htmlFor="firstName">FirstName</label>
                        <input style={{margin:"10px"}}
                            id="firstName"
                            firstname="firstname"
                            type="text"
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)}
                            required

                        />
                    {/* </li> */}
<br />
                    {/* <li> */}
                         <label style={{padding:"10px"}}  htmlFor="lastName">LastName</label>
                        <input style={{margin:"10px"}}
                            id="lastName"
                            lastname="lastname"
                            type="text"
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                            required
                        />
                    {/* </li> */}
           

            <div>

                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </fieldset>
         </ul>
       

           

        </form >




    );
}

export default RegBuyer;

