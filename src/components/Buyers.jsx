import axios from "axios";
import BuyerDisplay from "./BuyerDisplay";
import BuyerStructure from "./BuyerStructure";
import RegBuyer from "./RegBuyer"


function Buyers() {
    return (
        <div className= "row">
            <br /><h2 style={{ color: "#0a69ca", textAlign:"center", padding:"20px", marginBottom:"20px"}}>Buyers Database</h2>
                      <br /><div className="col-6"><RegBuyer /></div>
            <div className="col-4"><BuyerDisplay /></div>

        </div>);
}

export default Buyers;