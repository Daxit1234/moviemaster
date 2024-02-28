import React, { useEffect, useState } from "react";

const Times = ({ cinemaId,selected }) => {
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
      }
    };

    fetchShowTime();
  }, [cinemaId]);


  return (
  <div className="d-flex flex-wrap justify-content-evenly">
    {showTime?.map(i=>{
        return( 
        <div
        className="m-1 btn time-box"
        style={{height:"50px",fontSize:"13px",backgroundColor:"rgb(237,240,247)"}}
        key={i._id}
        name={i._id}
        onClick={selected}
      >
        {i.time.slice(0,i.time.length-2)}
          <br />
          {/* {i.showType} */}
          {i.time.slice(i.time.length-2)}
      
      </div>
        )
    })}
  </div>
  )
};

export default Times;
