import BuyerStructure from "./BuyerStructure";
import axios from "axios";
import { useState, useEffect } from "react";

function BuyerDisplay(props) {
    const buyerList = []

    for (const buyer of props.listBuyers) {
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

return (
    <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#e3f2fd", width: "80%" }}>
        {buyerList}
    </div>
)
}

export default BuyerDisplay;