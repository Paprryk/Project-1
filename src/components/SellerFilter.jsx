import PropTypes from "prop-types";

function SellerStructure(props) {
    return (
    <div 
    className="row">
    <p className="col-1">First Name: {props.firstname}</p>
    <p className="col-1 ">Surname: {props.lastname}</p>
</div>

)}
SellerStructure.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
}

export default SellerStructure;