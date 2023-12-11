import axios from "axios";
import SellerDisplay from "./SellerDisplay";
import AddSeller from "./AddSeller";
import { useState, useEffect } from "react";


function Sellers() {

    function getSellers() {

        axios.get("http://localhost:3000/sellers")
            .then((response) => { setSellers(response.data) }).catch(console.log)

    }
    useEffect(() => { getSellers() }, [])
    const [sellers, setSellers] = useState([]);

    return (
        <div className="row">
            <br /><h3 style={{ color: "#0a69ca" }}>Sellers</h3>
            <br /><div className="col-6" ><AddSeller getSellers={getSellers}/></div>
            <div className="col-4"><SellerDisplay listSellers={sellers}/></div>
        </div>);
}

//UseState, when addSeller is called, sellerdisplay is reloaded

export default Sellers;