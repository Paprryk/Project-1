import PropTypes from "prop-types";

function BuyerStructure(props) {
    return (
        <div className="row">
            <p className="col-2">Firstname: {props.firstname}</p>
            <p className="col-2 ">Surname: {props.lastname}</p>
        </div>
    )
}

BuyerStructure.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
}

export default BuyerStructure;