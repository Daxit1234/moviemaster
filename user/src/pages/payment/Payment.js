import React, { useContext, useState } from "react";
import "./Payment.css";
// import Upi from "../../components/payment/upi/Upi";
import Invoice from "../../components/invoice/Invoice";
import { useNavigate } from "react-router-dom";
import MovieContext from "../../context/Moviecontext";
// import Card from "../../components/payment/card/Card";

const Payment = () => {
  const [invoiceVisible, setInvoiceVisible] = useState(true);
  const navigate=useNavigate()
  const {booking ,bookingDetails,obj}=useContext(MovieContext);
  const [payment, setPayment] = useState({ email: "", contactNo: null, paymentId: "" ,totalAmount:null});

  const handleVisible = () => {
    setInvoiceVisible(!invoiceVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value ,totalAmount:bookingDetails.totalAmount});
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (obj.email!=="") {
      await fetch("http://localhost:8080/payment/addpayment",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      })
      booking()
      navigate("/bookings")
    }else{
      navigate('/login')
    }
  };

  return (
    <div className="payment-page">
      <div className="viewBill" onClick={handleVisible}>
        Book Now
      </div>
      <div className="d-flex">
        <div>
          <div
            className={`contect-details ${
              invoiceVisible ? "hidden" : "visible"
            }`}
          >
            <div className="heading">
              <p className="text">Verify Your Payment</p>
            </div>
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  name="email"
                  required
                  spellCheck="false"
                  value={payment.email}
                  onChange={handleInputChange}
                />
                <label>Email</label>
                <span className="icon">
                  <i className="fa-solid fa-envelope text-light"></i>
                </span>
              </div>
              <div className="input-field">
                <input
                  type="number"
                  name="contactNo"
                  required
                  spellCheck="false"
                  value={payment.contactNo}
                  onChange={handleInputChange}
                />
                <label>Mobile Number</label>
                <span className="icon">
                  <i className="fa-solid fa-phone text-light"></i>
                </span>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="paymentId"
                  required
                  spellCheck="false"
        
                  value={payment.paymentId}
                  onChange={handleInputChange}
                />
                <label>Payment ID</label>
                <span className="icon">
                <i class="fa-solid fa-credit-card"></i>
                </span>
              
              </div>
              <div>
                <button type="submit" className="btn-continue">
                  Continue
                </button>
              </div>
            </form>
          </div>

          <div
            className={`contect-detail payment-options ${
              !invoiceVisible ? "visible" : "hidden"
            }`}
            style={{ visibility: "hidden" }}
          >
            <div className="heading"  style={{ visibility: "hidden" }}>
              <p className="text">Payment Options</p>
            </div>
            <div className="d-flex"  style={{ visibility: "hidden" }}>
              <div className="payment-menus">
                Payment options menu
              </div>
            </div>
          </div>
        </div>
        <div className={`ml-5 ${invoiceVisible ? "invoice" : "no-invoice"}`}>
          <Invoice handleVisible={handleVisible} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
