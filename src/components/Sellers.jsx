import axios from "axios";
import SellerDisplay from "./SellerDisplay";
import AddSeller from "./AddSeller";

function Sellers() {
    return (

        <div>
            <h3>Sellers</h3>
            <AddSeller />
            <SellerDisplay />
        </div>)
}



export default Sellers;