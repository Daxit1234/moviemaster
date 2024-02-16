import React, { useState } from "react";
import "./Upi.css";

const Upi = () => {
  const [optionSelected, setOptionSelected] = useState("");
  return (
    <div className="upipayment-container">
      {
        optionSelected==="" ?(
          <div className="upi-options">
          <div className="option-item" onClick={()=>setOptionSelected("upi")}>
            <input type="radio" name="upi" id="amazon-upi" />
            <label htmlFor="amazon-upi">
              <img
                src="https://assets-in.bmscdn.com/paymentcms/Amazonpay.png"
                alt=""
              />
              <span>Amazon Pay</span>
            </label>
          </div>
          <div className="option-item"  onClick={()=>setOptionSelected("bhim")}>
            <input type="radio" name="upi" id="bhim-upi" />
            <label htmlFor="bhim-upi">
              <img
                src="https://assets-in.bmscdn.com/paymentcms/bhim_web.png"
                alt=""
              />
              <span>BHIM</span>
            </label>
          </div>
          <div className="option-item"  onClick={()=>setOptionSelected("gpay")}>
            <input type="radio" name="upi" id="gpay-upi" />
            <label htmlFor="gpay-upi">
              <img
                src="https://assets-in.bmscdn.com/paymentcms/gpay.jpg"
                alt=""
              />
              <span>Google Pay</span>
            </label>
          </div>
          <div className="option-item"  onClick={()=>setOptionSelected("paytm")}>
            <input type="radio" name="upi" id="paytm-upi" />
            <label htmlFor="paytm-upi">
              <img
                src="https://assets-in.bmscdn.com/paymentcms/paytmupi_web.png"
                alt=""
              />
              <span>Paytm</span>
            </label>
          </div>
          <div className="option-item"  onClick={()=>setOptionSelected("phonepe")}>
            <input type="radio" name="upi" id="phone-upi" />
            <label htmlFor="phone-upi">
              <img
                src="https://assets-in.bmscdn.com/paymentcms/phonepe_web.png"
                alt=""
              />
              <span>Phone Pay</span>
            </label>
          </div>
          <div className="option-item"  onClick={()=>setOptionSelected("other")}>
            <input type="radio" name="upi" id="other-upi" />
            <label htmlFor="other-upi">
              <img
                src="https://assets-in.bmscdn.com/paymentcms/OTHERUPI.png"
                alt=""
              />
              <span>Other UPI</span>
            </label>
          </div>
        </div>
        ):
        (
          <div className="d-flex form-box">
            <div className="back-btn mb-md-5" onClick={()=>setOptionSelected("")}>
            <i class="fa-solid fa-backward"></i> Back
            </div>
          <div class="input-field mt-md-5">
            <input type="text" name="upiId" required/>
            <label>Enter Upi ID</label>
          </div>
          <div>
            <button className="btn-continue mt-md-5">Continue</button>
          </div>
        </div>
        )
      }
     
   
    </div>
  );
};

export default Upi;
