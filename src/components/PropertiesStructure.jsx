import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.css';

function PropertiesStructure(props) {
    return (
        <div className="d-inline-flex " style={{ maxWidth: "20%", margin: "20px" }}>
            <div className="card">
                <div className="card-body">
                    <h4>£{props.price}</h4><br />
                    <img id="House" src="https://i.pinimg.com/originals/9b/4d/14/9b4d148831ad70562521bdff39cbec5f.jpg" width={"60%"}></img>
                    <div className="card-text">
                        <br />Address: {props.address}<br />
                        City: {props.city}<br />
                        Type: {props.type}<br />
                        Bedrooms: {props.bedrooms}<br />
                        Bathroom: {props.bathroom}<br />
                        Garden: {props.garden}<br />
                        <label>Status :</label>
                        <select >
                            <option selected style={{ color: "green"}}value={"For Sale"}>For Sale</option>
                            <option style={{ color: "orange"}}value={"Sold"}> Sold</option>
                            <option style={{ color: "red"}}value={"Withdrawn"}>Withdrawn</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

PropertiesStructure.propTypes = {
    city: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.string.isRequired,
    bathroom: PropTypes.string.isRequired,
    garden: PropTypes.string.isRequired
}

export default PropertiesStructure;