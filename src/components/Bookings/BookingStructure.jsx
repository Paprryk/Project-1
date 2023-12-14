import PropTypes from "prop-types";
import axios from "axios";


function BookingStructure(props) {

    function deleteBooking (){
    axios.delete("http://localhost:3000/bookings/" + props.id)
    .then(response => {props.getBookings()})
    .catch(err => console.error(err))
    }

    return (
        
        <div className="row">
        <p className="col">Date: {props.date}</p>
            <p className="col">Time: {props.time}</p>
            <button onClick={deleteBooking}>Delete</button>
        
     </div>

    )
}
BookingStructure.propTypes = {
    properties: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
}

export default BookingStructure;