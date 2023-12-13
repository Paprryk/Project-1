import React from 'react';
import { useNavigate } from "react-router-dom";
import Properties from './Properties';
function PropertiesRedirect() {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = <Properties/>; 
    navigate(path);
  }  
  return (
    <button color="primary" className="px-4"
            onClick={routeChange}
              >
              Submit
            </button>
  );
}

export default PropertiesRedirect;