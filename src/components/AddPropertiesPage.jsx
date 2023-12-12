import axios from "axios";
import PropertiesDisplay from "./PropertiesDisplay";
import AddProperty from "./AddProperty";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddPropertiesPage() {
  return (
    <div>
    <h3 style={{ color: "#0a69ca" }}>Add Property</h3>
      <AddProperty />
    </div>
  );
}

export default AddPropertiesPage;