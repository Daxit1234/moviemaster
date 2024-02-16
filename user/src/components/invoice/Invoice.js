import React, { useContext } from 'react'
import "./Invoice.css"
import MovieContext from '../../context/Moviecontext';

const Invoice = ({handlevisible}) => {
  const {bookingDetails}=useContext(MovieContext);
  const {date,movieName,seats,showId,totalAmount,showTime,showType,cinemaName,cinemaAdd}=bookingDetails
  return (
        <div className="container-invoice">
      <div className="card card-upper">
        <div className="title">
          <h1>Order Summary</h1>
          <p className="ticket text-center">{seats.length}<br />Tickets</p>
        </div>
        <div className="item">
          <p className="name">{movieName}</p>
          <p>Show Type : <strong>{showType}</strong></p>
          <p>Cinema : <strong>{cinemaName}</strong></p>
          <p>Address : <strong>{cinemaAdd}</strong></p>
          <p>M-Ticket</p>
          <div className="time">
            <p>Seats No : {seats.map((i)=><strong>{i}  </strong>)}</p>
            <p>{date.slice(0,16) }</p>
            <p>{showTime}</p>
          </div>
        </div>
      </div>
      <div className="card card-lower">
        <div className="item-lower">
          <p className="name">Sub Total</p>
          <h5>Rs. {totalAmount}.00</h5>
        </div>
        <div className="item-lower">
          <p className="name">
            +Add-ons &nbsp;<span id="vall">View All </span>
          </p>
          <p className="price">Rs.1280.00</p>
        </div>
        <div className="item-lower">
          <p>Nachos (Qty 4)</p>
          <p>Nachos 80g with Cheese Dip 50g | 382 kcal</p>
          <p className="price">Rs.1280.00</p>
        </div>
        <div className="item-lower">
          <p className="name">+ Convenience fees</p>
          <p className="price">Rs. 35.40</p>
        </div>
        <div className="total" onClick={handlevisible}>
           <p>Amount Pay</p>
           <h5>Rs. 244.42</h5>
        </div>
      </div>
    </div>

  )
}

export default Invoice
