import PropTypes from "prop-types";

function BuyerStructure(props) {
    return (
    <div>
        {/* Buyer: {props.id} */}
        <div className="row">
            <p className="col-12">Buyer:{props.id}--- {props.firstname} {props.lastname}</p>
            {/* <p className="col"> {props.lastname}</p> */}
        </div>
</div>
    )
}
BuyerStructure.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
}

export default BuyerStructure;