import axios from "axios";
import SellerDisplay from "./SellerDisplay";
import AddSeller from "./AddSeller";

function Sellers() {
    return (
        <div className="row">
            <br /><h3 style={{ color: "#0a69ca" }}>Sellers</h3>
            <br /><div className="col-6"><AddSeller /></div>
            <div className="col-4"><SellerDisplay /></div>
        </div>);
}



export default Sellers;