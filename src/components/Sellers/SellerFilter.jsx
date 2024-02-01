import PropTypes from "prop-types";

function SellerStructure(props) {
    return (
        <div> Seller: {props.id}
            <div className="row">
                <p className="col"> {props.firstName} {props.lastName}</p>
            </div>
        </div>

    )
}
SellerStructure.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
}

export default SellerStructure;