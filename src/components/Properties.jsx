import axios from "axios";
import PropertiesDisplay from "./PropertiesDisplay";
import AddProperty from "./AddProperty";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react";

function Properties() {
  function getProperties() {
    axios.get("http://localhost:3000/properties")
        .then((response) => { setProperties(response.data) })
        .catch(console.log)
}
useEffect(() => { getProperties() }, []) 
const [properties, setProperties] = useState([])

  return (
    <div>
      <h4>Search Property</h4>

    <PropertiesDisplay listProperties={properties}/>
    </div>
  );
}

export default Properties;