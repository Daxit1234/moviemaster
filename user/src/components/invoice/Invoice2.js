import React, { useContext, useState ,useEffect} from 'react'
import "./Invoice2.css"
import MovieContext from '../../context/Moviecontext';
import { useNavigate } from 'react-router-dom';

const Invoice2 = ({foodBeverage}) => {
  const { bookingDetails ,booking } = useContext(MovieContext);
  const {  seats, totalAmount} = bookingDetails;
  const navigate = useNavigate();

  // State variables for calculations
  const [base, setBase] = useState(0);
  const [gst, setGst] = useState(0);
  const [convenienceFees, setConvenienceFees] = useState(0);
  const [foodAmount, setFoodAmount] = useState(0);
  const [contibution , setContibution] = useState(seats.length);

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
        <div className="booking-summary mt-5">
      <div className="card card-upper">
        <div className="title">
          <h5>BOOKING SUMMARY</h5>
        </div>
        <div className="noticket">
          <p>Seats {seats.map((i)=><strong>{i}  </strong>)}({seats.length} Tickets)</p>
          <p>Rs. {totalAmount}</p>
        </div>
        <div>
          <p>SCREEN 3</p>
        </div>
        <div className="fees">
          <p>+ Convenience fees</p>
          <p>Rs {convenienceFees}</p>
        </div>
        <div className="base-amount">
          <div className="amount">
            <p>Base Amount</p>
            <p>Rs.{base}</p>
          </div>
          <div className="cgst">
            <p>Central GST (CGST) @9%</p>
            <p>Rs.{gst}</p>
          </div>
          <div className="sgst">
            <p>State GST (SGST) @9%</p>
            <p>Rs.{gst}</p>
          </div>
        </div>
      </div>
      <div className="card card-lower">
        <div className="sub-total">
          <p>Sub Total</p>
          <p>Rs.{totalAmount+convenienceFees}</p>
        </div>
        <div className="food">
          <p>Food & Beverage</p>
          <p>Rs.{foodAmount}</p>
        </div>
        <div className="items">
       {
        foodBeverage.map((item)=>{
          return(
          <div className="item1">
            <p>{item.name} (Qt.{item.quantity})</p>
            <p>Rs.{item.price*item.quantity}</p>
          </div>
          )
        })
       } 
        </div>
        <div className="card1 last-card">
          <div className="fline">
            <p>Contibution to MovieMasters</p>
            <p>Rs.{contibution}</p>
          </div>
          <div className="sline">
            <p>(Rs.1 per ticket has been added)</p>
            <p onClick={()=>setContibution(0)}>Remove</p>
          </div>
          <div className="lline">
            <p className='text-primary'>View T&C</p>
          </div>
        </div>
        
        <div className="total mt-3" onClick={()=>navigate(`/payment/${totalAmount}/${convenienceFees}/${foodAmount}/${contibution}`)}>
          <p>Amount Payable</p>
          <p>Rs.{totalAmount+convenienceFees+contibution+foodAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default Invoice2
