import React, { useEffect, useState } from "react";

const Times = ({ cinemaId }) => {
  const [showTime, setShowTime] = useState([]);

  useEffect(() => {
    const fetchShowTime = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/show/getshowtime/${cinemaId}`
        );
        if (response.ok) {
          const data = await response.json();
          setShowTime(data);
        } else {
          throw new Error("Failed to fetch show time");
        }
      } catch (error) {
        console.error(error);
        // Handle error if needed
      }
    };

    fetchShowTime();
  }, [cinemaId]);
  return (
  <div>
    {showTime?.map(i=>{
        return(
        <div
        className="col-3 btn btn-outline-success "
        style={{height:"55px",fontSize:"15px"}}
      >
          {i.time}
          <br />
          {i.showType}
      
      </div>
        )
    })}
  </div>
  )
};

export default Times;
