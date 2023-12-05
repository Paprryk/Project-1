import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.css';

function PropertiesStructure(props) {
    return (
        <div>
            <ul className="list-group">
            <li className="list-group-item list-group-item-success">Address: {props.address}</li>
            <li className="list-group-item">Price: {props.price}</li>
            <li className="list-group-item">Bedrooms: {props.bedrooms}</li>
            <li className="list-group-item">Bathrooms: {props.bathroom}</li>
            <li className="list-group-item">Garden: {props.garden}</li>
            </ul>
        </div>
    )
}

PropertiesStructure.propTypes = {
    address: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    bathroom: PropTypes.string.isRequired,
    garden: PropTypes.string.isRequired
}

export default PropertiesStructure;