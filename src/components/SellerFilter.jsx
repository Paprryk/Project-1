import PropTypes from "prop-types";

function SellerStructure(props) {
    return (<div>
        <p>Name: {props.firstname}
        {props.lastname}</p>
    </div>);
}
SellerStructure.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
}

export default SellerStructure;