import axios from "axios";
import PropertiesDisplay from "./PropertiesDisplay";
import AddProperty from "./AddProperty";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Properties() {
  return (
    <div>
    <h4>Add Property</h4>
      <AddProperty />
      <h4>Search Property</h4>

    <PropertiesDisplay/>
    </div>
  );
}

export default Properties;