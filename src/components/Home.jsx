import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function Home() {
    return (
        <div><br /><br />
            <h5 style={{ align: "center", color: "#0a69ca" }}>A wonderful estate agent database create by "Scrum and Scrummer"</h5>
            <br /><br /><div className="location"></div>
            <a href="https://maps.app.goo.gl/uSq8HAktiNPYP2Co6">
                <p alt="Find us here!">Find us Here</p>
                </a>
               
        </div>
    );

}

export default Home;