
import axios from "axios";
import { useState } from "react";
import BookingStructure from "./BookingStructure";
import { useParams } from "react-router-dom";

function AddBooking(props) {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const params = useParams();

    return (<form onSubmit={e => {
        e.preventDefault();

        axios.post("http://localhost:3000/bookings", { date, time, properties: params.id })
            .then(response => {
                setDate("");
                setTime("");
                props.getBookings();


            })
            .catch(err => console.error(err))
    }}>



        <div >
            <label htmlFor="date">Date</label>
            <input className="form-control border-3 border-primary rounded" style={{width:"250px"}}type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label htmlFor="time">Time</label>
            <select className="form-control border-3 border-primary rounded" style={{width:"250px"}} onChange={(e) => setTime(e.target.value)}>
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
                <button style={{margin:"30px"}} className="btn btn-primary" type="submit">Submit</button>
                   </div>
    </form>
    );
}





export default AddBooking;