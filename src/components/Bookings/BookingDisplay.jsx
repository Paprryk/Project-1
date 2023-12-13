import PropertiesStructure from "../PropertiesStructure";
import BookingStructure from "./BookingStructure";



function BookingDisplay(props) {
    const bookingList = []

    for (const booking of props.bookingList) {
        console.log("Booking:", booking);
        bookingList.push(
            <BookingStructure
                key={booking.id }
                properties={booking.properties}
              
                date={booking.date}
                time={booking.time}
                
            />
        )
    }

return (
    <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#e3f2fd", width: "80%" }}>
        {bookingList}
    </div>
)
}

export default BookingDisplay;