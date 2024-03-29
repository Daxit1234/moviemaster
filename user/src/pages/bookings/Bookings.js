import React, { useEffect, useState } from "react";
import { useContext } from "react";
import MovieContext from "../../context/Moviecontext";
import BookingCard from "../../components/BookingCard/BookingCard";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [bookings, setBookings] = useState([]); // Initialize as an empty array
  const { obj } = useContext(MovieContext);
  const navigate=useNavigate()


  useEffect(() => {
    if (obj.email==="") {
      navigate('/login')
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/bookedSeats/getuserbooking",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          }
        );
        const data = await response.json();
        setBookings(data.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [obj]); // Depend on obj to re-fetch data when it changes

  return (
    <div className="row mx-md-5">
      {bookings.map((item) => {
        return (
          <BookingCard data={item}/>
        );
      })}
    </div>
  );
};

export default Bookings;
