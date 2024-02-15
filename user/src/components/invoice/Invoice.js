import React, { useContext } from 'react'
import "./Invoice.css"
import MovieContext from '../../context/Moviecontext';
import useFetch from '../../hook/useFetch';

const Invoice = () => {
  const {bookingDetails}=useContext(MovieContext);
  const {date,movieId,seats,showId,totalAmount}=bookingDetails
  const {data}= useFetch(`/movie/${movieId}`);
  return (
        <div className="container-invoice">
      <div className="card card-upper">
        <div className="title">
          <h1>Order Summary</h1>
          <p className="ticket text-center">{seats.length}<br />Tickets</p>
        </div>
        <div className="item">
          <p className="name">{data?.title}</p>
          <p>Show Type : <strong>2D</strong></p>
          <p>Cinepolis: High Street Mall, Thane (EX Cinemastar) (SCREEN 3)</p>
          <p>M-Ticket</p>
          <div className="time">
            <p>Seats No : {seats.map((i)=><strong>{i}  </strong>)}</p>
            <p>{date.slice(0,16) }</p>
            <p>10:00 AM</p>
          </div>
        </div>
      </div>
      <div className="card card-lower">
        <div className="item-lower">
          <p className="name">Sub Total</p>
          <p className="price-right">Rs. 300.00</p>
        </div>
        <div className="item-lower">
          <p className="name">
            +Add-ons &nbsp;<span id="vall">View All </span>
          </p>
          <p className="price-right">Rs.1280.00</p>
        </div>
        <div className="item-lower">
          <p>Nachos (Qty 4)</p>
          <p>Nachos 80g with Cheese Dip 50g | 382 kcal</p>
          <p className="price">Rs.1280.00</p>
        </div>
        <div className="item-lower">
          <p className="name">+ Convenience fees</p>
          <p className="price-right">Rs. 35.40</p>
        </div>
        <div className="total">
          <p>Amount Payable<a className="price-right"> Rs.1617.40 </a></p>
        </div>
      </div>
    </div>

  )
}

export default Invoice
