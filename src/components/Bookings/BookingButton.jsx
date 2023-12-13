
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";

function BookingButton (props) {
    
    const navigate = useNavigate(); 
    return ( 

        <button className="btn btn-primary" type="submit" onClick={()=> navigate("/Bookings/"+ props.id)}>
        Bookings
    </button>
     );
}

export default BookingButton ;