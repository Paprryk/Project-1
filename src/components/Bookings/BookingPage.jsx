import AddBooking from "./AddBooking";
import BookingDisplay from "./BookingDisplay";
import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookingPage () {
const params=useParams();
    function getBookings() {
        axios.get("http://localhost:3000/bookings?properties="+params.id )
        .then((response)=>{setBookings(response.data)})
        .catch(console.log)        
    }
    useEffect(()=>{getBookings()},[]) //makes sure getbuyers is triggered once
    const [bookings, setBookings] = useState([])


    return ( 
<div>
    <h1>Bookings</h1>
    <AddBooking/>
    <BookingDisplay bookingList={bookings} />

</div>

     );
}

export default BookingPage;