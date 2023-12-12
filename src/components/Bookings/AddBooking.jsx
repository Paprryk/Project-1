
import axios from "axios";
import { useState } from "react";
import BookingStructure from "./BookingStructure";
import { useParams } from "react-router-dom";

function AddBooking(props) {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
 
const params =useParams();

    return (<form onSubmit={e => {
        e.preventDefault();

        axios.post("http://localhost:3000/bookings", { date, time, properties:params.id })
            .then(response => {
                setDate("");
                setTime("");
               
               
            })
            .catch(err => console.error(err))
    }}>
        

        
        <div >
            <label htmlFor="date">Date</label>
            <br />
            
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>

            <br /><label htmlFor="time">Time</label>
            
            <br /><select onChange={(e) => setTime(e.target.value)}>
            <option>Select Time</option>
                <option>8:00-9.00</option>
                <option>9:00-10.00</option>
                <option>10:00-11.00</option>
                <option>11:00-12.00</option>
                <option>12:00-13.00</option>
                <option>14:00-15.00</option>
                <option>15:00-16.00</option>
                <option>16:00-17.00</option>
                                
                
            </select>
            <div className="mt-2">
                <button className="btn btn-primary" type="submit">Submit</button>
                {/* {bookingList} */}
            </div>
        </div>
    </form>
    );
}





export default AddBooking;