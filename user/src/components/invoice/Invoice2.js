import React, { useContext } from 'react'
import "./Invoice2.css"
import MovieContext from '../../context/Moviecontext';

const Invoice2 = () => {
  const {bookingDetails}=useContext(MovieContext);
  const {date,movieName,seats,showId,totalAmount,showTime,showType,cinemaName,cinemaAdd}=bookingDetails

  return (
        <div class="booking-summary">
      <div class="card card-upper">
        <div class="title">
          <h5>BOOKING SUMMARY</h5>
        </div>
        <div class="noticket">
          <p>NORMAL - M10,M11,M9(3 Tickets)</p>
          <p>Rs.540.00</p>
        </div>
        {/* <div class="screen">
          <p>SCREEN 3</p>
        </div> */}
        <div class="fees">
          <p>+ Convenience fees</p>
          <p>Rs.63.72</p>
        </div>
        <div class="base-amount">
          <div class="amount">
            <p>Base Amount</p>
            <p>Rs.54.00</p>
          </div>
          <div class="cgst">
            <p>Central GST (CGST) @9%</p>
            <p>Rs.4.86</p>
          </div>
          <div class="sgst">
            <p>State GST (SGST) @9%</p>
            <p>Rs.4.86</p>
          </div>
        </div>
      </div>
      <div class="card card-lower">
        <div class="sub-total">
          <p>Sub Total</p>
          <p>Rs.603.72</p>
        </div>
        <div class="food">
          <p>Food & Beverage</p>
          <p>Rs.1630.00</p>
        </div>
        <div class="items">
          <div class="item1">
            <p>Nachos Combo (Flavoured)(Qt.1)</p>
            <p>Rs.860.00</p>
          </div>
          <div class="item2">
            <p>Nachos (Qt.1)</p>
            <p>Rs.320.00</p>
          </div>
          <div class="item3">
            <p>Jumbo Salted Popcorn (Qt.1)</p>
            <p>Rs.450.00</p>
          </div>
        </div>
        <div class="card1 last-card">
          <div class="fline">
            <p>Contibution to MovieMasters</p>
            <p>Rs.3.00</p>
          </div>
          <div class="sline">
            <p>(Rs.1 per ticket has been added)</p>
            <p>Remove</p>
          </div>
          <div class="lline">
            <a href="T&C">View T&C</a>
          </div>
        </div>
        <div class="state">
          <p>Your current state is gujrat</p>
        </div>
        <div class="total">
          <p>Amount Payable</p>
          <p>Rs.2236.72</p>
        </div>
      </div>
    </div>
  )
}

export default Invoice2
