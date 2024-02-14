import React, { useContext, useEffect, useState } from "react";
import "./CinemaDetails.css";
import Showtime from "../showTime/Showtime";
import MovieContext from "../../../../context/Moviecontext";
import MapModel from "../../../../components/Models/MapModel";
import cinemaNotFound from "../../../../assets/no-results.png"

function CinemaDetail() {
  const [show, setShow] = useState(false);
  const {getCinemas ,allCinema ,query}=useContext(MovieContext)
  useEffect(()=>{
    getCinemas(query)
  },[query])
  return (
    <div>
      {
        allCinema?.length!==0?(
          allCinema?.map((item) => {
            return (
              <div className="cinema-container" key={item._id}>
                <div className="cinema-info">
                  <span className="cinemaName">{item.cinemaName}</span>
                  <span className="cinema-address">
                    {item.address},{item.city}
                  </span>
                  <span data-toggle="modal" data-target="#exampleModalCenter" className="cinema-location" onClick={() => setShow(true)}>
                    <i className="fa-solid fa-location-dot"></i> Loc
                  </span>
                </div>
    
                <div className="time-info">
                  <Showtime cinemaid={item._id} />
                </div>
                <MapModel cinemaName={item.cinemaName} url={item.locationUrl} />
              </div>
            );
          })
        ):(
          <div className="notFoundImage">
            <img src={cinemaNotFound} alt="" />
            <h2>No Cinema Found</h2>
         </div>
        )
      }
   
    </div>
  );
}

export default CinemaDetail;
