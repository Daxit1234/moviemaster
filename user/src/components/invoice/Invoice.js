import React, { useContext } from 'react'
import "./Invoice.css"
import MovieContext from '../../context/Moviecontext';
import { useNavigate, useParams } from 'react-router-dom';

const Invoice = ({handlevisible}) => {
  const {bookingDetails,setBookingDetails}=useContext(MovieContext);
 
  const {date,movieName,seats,showTime,showType,cinemaName,cinemaAdd}=bookingDetails
  const {amount ,convenienceFees,contribution,foodAmount}=useParams()

  let handleBooking=async()=>{
    window.open("https://rzp.io/l/zcOwbvgXr", "_blank");
    await setBookingDetails({...bookingDetails,
      totalAmount:parseInt( amount) +parseInt( contribution) +parseInt( convenienceFees)+parseInt( foodAmount),
    })
  }
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
          <p>Screen 2</p>
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
          <h5>Rs. {amount}.00</h5>
        </div>
        <div className="item-lower">
          <p className="name">
          convenienceFees
          </p>
          <p className="price">Rs.{convenienceFees}</p>
        </div>
        <div className="item-lower">
          <p> Food And Beverage</p>
          <p className="price">Rs. {foodAmount}</p>
        </div>
        <div className="item-lower">
          <p className="name">contribution To Movie Master</p>
          <p className="price">Rs. {contribution}</p>
        </div>
        <div className="total" onClick={()=>handleBooking(parseInt( amount) +parseInt( contribution) +parseInt( convenienceFees)+parseInt( foodAmount))}>
           <p>Amount Pay</p>
           <h5>Rs. {parseInt( amount) +parseInt( contribution) +parseInt( convenienceFees)+parseInt( foodAmount)}</h5>
        </div>
      </div>
    </div>

  )
}

export default Invoice
