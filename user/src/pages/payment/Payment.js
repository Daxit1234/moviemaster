import React from 'react'
import "./Payment.css"
import Upi from '../../components/payment/upi/Upi'
import Invoice from '../../components/invoice/Invoice'

const Payment = () => {
  return (
    <div className='payment-page'>
       <div className='d-flex'>
        <div>

      <div className='contect-details'>
        <div className='heading'>
            <p className='text'>Share your contect Details</p>
        </div>
        <div className='d-flex form-box'>

        <div class="input-field">
              <input type="text" name="email" required spellcheck="false"/>
              <label>Enter email</label>
              <span className="icon ">
                <i className="fa-solid fa-envelope text-light"></i>
              </span>
            </div>
        <div class="input-field">
              <input type="text" name="mobile" required spellcheck="false"/>
              <label>Mobile Number</label>
              <span className="icon ">
                <i className="fa-solid fa-phone text-light"></i>
              </span>
            </div>
            <div>
                <button className='btn-continue'>Continue</button>
            </div>
        </div>
      </div>
     

      <div className='payment-options contect-details'>
       <div className='heading'>
            <p className='text'>Payment Options</p>
        </div>
        <div className='d-flex'>
        <div className='payment-menus'>
            <div className='menu-item'>
                <span>Debit/Credit Card</span>
            </div>
            <div className='menu-item'>
                <span>Net Banking</span>
            </div>
            <div className='menu-item'>
                <span>Mobile Wallets</span>
            </div>
            <div className='menu-item'>
                <span>UPI</span>
            </div>
        </div>
        <Upi/>
        </div>
      </div>
        </div>
      <div>
        <Invoice/>
      </div>
      </div>
    </div>
  )
}

export default Payment
