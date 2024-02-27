import React, { useContext, useState ,useEffect} from 'react'
import "./Invoice2.css"
import MovieContext from '../../context/Moviecontext';
import { useNavigate } from 'react-router-dom';

const Invoice2 = ({foodBeverage}) => {
  const { bookingDetails ,booking } = useContext(MovieContext);
  const { date, movieName, seats, showId, totalAmount, showTime, showType, cinemaName, cinemaAdd } = bookingDetails;
  const navigate = useNavigate();

  // State variables for calculations
  const [base, setBase] = useState(0);
  const [gst, setGst] = useState(0);
  const [convenienceFees, setConvenienceFees] = useState(0);
  const [foodAmount, setFoodAmount] = useState(0);
  const [contibution , setContibution] = useState(Math.floor(Math.random() * 10) + 1);

  useEffect(() => {
    // Calculate base amount, GST, and convenience fees
    const baseAmount = totalAmount * 10 / 100;
    const gstAmount = totalAmount * 9 / 100;
    const convenienceFeesAmount = baseAmount + (gstAmount * 2);

    setBase(baseAmount);
    setGst(gstAmount);
    setConvenienceFees(convenienceFeesAmount);

    // Calculate food amount
    const foodTotal = foodBeverage.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    setFoodAmount(foodTotal);
  }, [totalAmount, foodBeverage]);
  return (
        <div class="booking-summary mt-5">
      <div class="card card-upper">
        <div class="title">
          <h5>BOOKING SUMMARY</h5>
        </div>
        <div class="noticket">
          <p>Seats {seats.map((i)=><strong>{i}  </strong>)}({seats.length} Tickets)</p>
          <p>Rs. {totalAmount}</p>
        </div>
        {/* <div class="screen">
          <p>SCREEN 3</p>
        </div> */}
        <div class="fees">
          <p>+ Convenience fees</p>
          <p>Rs {convenienceFees}</p>
        </div>
        <div class="base-amount">
          <div class="amount">
            <p>Base Amount</p>
            <p>Rs.{base}</p>
          </div>
          <div class="cgst">
            <p>Central GST (CGST) @9%</p>
            <p>Rs.{gst}</p>
          </div>
          <div class="sgst">
            <p>State GST (SGST) @9%</p>
            <p>Rs.{gst}</p>
          </div>
        </div>
      </div>
      <div class="card card-lower">
        <div class="sub-total">
          <p>Sub Total</p>
          <p>Rs.{totalAmount+convenienceFees}</p>
        </div>
        <div class="food">
          <p>Food & Beverage</p>
          <p>Rs.{foodAmount}</p>
        </div>
        <div class="items">
       {
        foodBeverage.map((item)=>{
          return(
          <div class="item1">
            <p>{item.name} (Qt.{item.quantity})</p>
            <p>Rs.{item.price*item.quantity}</p>
          </div>
          )
        })
       } 
        </div>
        <div class="card1 last-card">
          <div class="fline">
            <p>Contibution to MovieMasters</p>
            <p>Rs.{contibution}</p>
          </div>
          <div class="sline">
            <p>(Rs.1 per ticket has been added)</p>
            <p onClick={()=>setContibution(0)}>Remove</p>
          </div>
          <div class="lline">
            <p className='text-primary'>View T&C</p>
          </div>
        </div>
        
        <div class="total mt-3" onClick={()=>{booking() ;navigate('/payment')}}>
          <p>Amount Payable</p>
          <p>Rs.{totalAmount+convenienceFees+contibution+foodAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default Invoice2
