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
            />
        )
    }

return (
    <div>
        {buyerList}
    </div>
)
}

export default BuyerDisplay;