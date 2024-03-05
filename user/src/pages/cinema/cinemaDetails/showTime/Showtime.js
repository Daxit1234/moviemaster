import React, { useContext, useEffect, useState } from "react";
import "./Showtime.css";
import { useNavigate } from "react-router-dom";
import MovieContext from "../../../../context/Moviecontext";

function Showtime({cinemaid,name ,address}) {
  const Navigate = useNavigate();
  const { bookingDetails, setBookingDetails, setBookedSeats } = useContext(MovieContext);
  const [showTime, setShowTime] = useState([]);

  useEffect(() => {
    const fetchShowTime = async () => {
      try {
        const response = await fetch(`http://localhost:8080/show/getshowtime/${cinemaid}`);
        if (response.ok) {
          const data = await response.json();
          setShowTime(data);
        } else {
          throw new Error('Failed to fetch show time');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchShowTime();
  }, [cinemaid]);
  console.log(showTime)

  const handleSetShow = async (item) => {
    try {
      setBookingDetails((prevDetails) => ({
        ...prevDetails,
        showId: item?._id,
        cinemaId: item?.cinemaId,
        showType:item.showType,
        showTime:item.time,
        cinemaName:name,
        cinemaAdd:address
      }));

      const response = await fetch("http://localhost:8080/bookedSeats/getseat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cinemaId: item?.cinemaId, 
          showId: item?._id,
          movieId: bookingDetails.movieId,
          date: bookingDetails.date,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setBookedSeats(data); // Assuming data is an array of booked seats
        localStorage.setItem("bookedSeats", JSON.stringify(data));
        Navigate(`/seats/${item.showPrice}`);
      } else {
        console.error("Failed to fetch booked seats");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="showtime-container">
      {showTime?.map((item) => {
        return (
          <>
            <div
              className="showtime-box"
              onClick={() => handleSetShow(item)}
            >
              <span className="time-title"> {item.time}</span>
              <br />
              <div className="d-flex justify-content-center">
                <span className="show-type"> {item.showType}</span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Showtime;
