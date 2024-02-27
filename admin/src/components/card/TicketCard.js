import React from "react";
import "./TicketCard.css"

const TicketCard = () => {
  return (
    <div>
      <div class="card-container">
        <div class="card-ticket card-left">
          <h1>
            Rajhans <span>Cinema</span>
          </h1>
          <div class="title">
            <h2>Captain America:Civil War</h2>
          </div>
          <div class="name">
            <h2>Milan Javiya</h2>
            <span>Name</span>
          </div>
          <div class="seat">
            <h2>10</h2>
            <span>Seat</span>
          </div>
          <div class="time">
            <h2>12:00 Am</h2>
            <span>Time</span>
          </div>
        </div>
        <div class="card-ticket card-right">
          <div class="eye"></div>
          <div class="number">
            <h3>10</h3>
            <span>Seat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
