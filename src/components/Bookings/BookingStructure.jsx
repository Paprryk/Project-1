import PropTypes from "prop-types";

function BookingStructure(props) {
    return (
        <div>Bookings: {props.id}
        <div className="row">
            <p className="col">Date: {props.date}</p>
            <p className="col">Time: {props.time}</p>
        </div>
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