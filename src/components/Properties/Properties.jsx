import PropertiesDisplay from "./PropertiesDisplay";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from "react";

function Properties() {

  return (
    <div>
      <h4>Search Property</h4>
    <PropertiesDisplay/>
    </div>
  );
}

export default Properties;