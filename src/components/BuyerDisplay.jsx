import BuyerStructure from "./BuyerStructure";
import axios from "axios";
import { useState, useEffect } from "react";

function BuyerDisplay() {

    function getBuyers() {
        axios.get("http://localhost:3000/buyers")
        .then((response)=>{setBuyers(response.data)})
        .catch(console.log)        
    }

    useEffect(()=>{getBuyers()},[]) //makes sure getbuyers is triggered once

    const [buyers, setBuyers] = useState([])

    const buyerList = []

    for (const buyer of buyers) {
        console.log("Buyers:", buyer);
        buyerList.push(
            <BuyerStructure
                key={buyer.firstname + "" + buyer.lastname}
                firstname={buyer.firstname}
                lastname={buyer.lastname}
                id={buyer.id}
            />
        )
    }

        useEffect(() => {
  
            getBuyers();
        }, [])
    

        function getBuyers(){
            axios.get("http://localhost:3000/buyers").then((res) => setBuyers(res.data)).catch(console.log)
        }
        
return (
<<<<<<< HEAD
    <div className="col-2">
=======
    <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#e3f2fd", width: "80%" }}>
>>>>>>> ae7cfc45075c3bd63f00a772b51d593150c95cab
        {buyerList}
    </div>
)
}

export default BuyerDisplay;