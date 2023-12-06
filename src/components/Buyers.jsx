import axios from "axios";
import BuyerDisplay from "./BuyerDisplay";
import BuyerStructure from "./BuyerStructure";
import RegBuyer from "./RegBuyer"


function Buyers() {
    return (<div>
        <h3>Buyers</h3>
        <RegBuyer />
        <BuyerDisplay />
    </div>);
}

export default Buyers;