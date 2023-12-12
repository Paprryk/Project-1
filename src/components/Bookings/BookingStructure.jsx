import PropTypes from "prop-types";

function BookingStructure(props) {
    return (
        <div>Booking: {props.id}
        <div className="row">
            <p className="col-2"> {props.properties}</p>
            <p className="col"> {props.id}</p>
            <p className="col"> {props.date}</p>
            <p className="col"> {props.time}</p>
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