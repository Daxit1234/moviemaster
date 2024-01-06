import React, { useState } from "react";
import cinemas from "./cinema.json";
import "./CinemaDetails.css";
import Showtime from "../showTime/Showtime";

function CinemaDetail() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {cinemas.results.map((item) => {
        return (
          <div className="cinema-container">
            <div className="cinema-info">
              <span className="cinemaName">{item.cinema}</span>
              <span className="cinema-address">
                {item.address},{item.city}
              </span>
              <span className="cinema-location" onClick={() => setShow(true)}>
                <i class="fa-solid fa-location-dot"></i> Loc
              </span>
            </div>

            <div className="time-info">
              <Showtime />
            </div>
            <div
              className="mappopup"
              style={show ? { display: "block" } : { display: "none" }}
            >
              <div className="opacityLayer" onClick={() => setShow(false)}></div>
              <div className="d-flex justify-content-between bg-light text-dark">
                <span className="">{item.cinema}</span>
                <span className="" onClick={() => setShow(false)}>
                  close
                </span>
              </div>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15076.960819298862!2d72.930953!3d19.14096!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA4JzI3LjUiTiA3MsKwNTUnNTEuNCJF!5e0!3m2!1sen!2sin!4v1704289199844!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CinemaDetail;
