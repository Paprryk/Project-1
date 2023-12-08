import axios from "axios";
import BuyerDisplay from "./BuyerDisplay";
import BuyerStructure from "./BuyerStructure";
import RegBuyer from "./RegBuyer"


function Buyers() {
    return (
        <div className= "row">
            <br /><h3 style={{ color: "#0a69ca" }}>Buyers</h3>
            <br /><div className="col-6"><RegBuyer /></div>
            <div className="col-4"><BuyerDisplay /></div>

        </div>);
}

export default Buyers;