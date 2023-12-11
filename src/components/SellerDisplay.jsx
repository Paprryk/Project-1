import axios from 'axios';
import { useState, useEffect } from "react"
import Seller from "./SellerFilter"


function SellerDisplay(props) {

    const sellerList = [];
    for (const seller of props.listSellers) {

        sellerList.push(
            <Seller
                key={seller.firstname + " " + seller.lastname}
                firstname={seller.firstname}
                lastname={seller.lastname}
                id={seller.id}
            />
        )
    }

    return (
        <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#e3f2fd", width: "80%" }}>
            {sellerList}
        </div>
    );
}

export default SellerDisplay;