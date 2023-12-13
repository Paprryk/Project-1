import PropertiesDisplay from "./PropertiesDisplay";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from "react";

function Properties() {

  return (
    <div>
      <h3 style={{ color: "#0a69ca" }}>Search Property</h3>
      <br/><PropertiesDisplay/>
    </div>
  );
}

export default Properties;