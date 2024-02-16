import React, { useState } from "react";
import "./Payment.css";
import Upi from "../../components/payment/upi/Upi";
import Invoice from "../../components/invoice/Invoice";

const Payment = () => {
  const [invoiceVisible, setInvoiceVisible] = useState(true);
  const [paymentMode, setPayentMode] = useState("");

  let handlevisible = () => {
    invoiceVisible ? setInvoiceVisible(false) : setInvoiceVisible(true);
  };
  return (
    <div className="payment-page">
      <div className="viewBill" onClick={handlevisible}>
        View Invoice
      </div>
      <div className="d-flex">
        <div>
          <div
            className={`contect-details ${
              invoiceVisible ? "hidden" : "visible"
            }`}
          >
            <div className="heading">
              <p className="text">Share your contect Details</p>
            </div>
            <div className="d-flex form-box">
              <div class="input-field">
                <input type="text" name="email" required spellcheck="false" />
                <label>Enter email</label>
                <span className="icon ">
                  <i className="fa-solid fa-envelope text-light"></i>
                </span>
              </div>
              <div class="input-field">
                <input type="text" name="mobile" required spellcheck="false" />
                <label>Mobile Number</label>
                <span className="icon ">
                  <i className="fa-solid fa-phone text-light"></i>
                </span>
              </div>
              <div>
                <button className="btn-continue">Continue</button>
              </div>
            </div>
          </div>

          <div
            className={`contect-details payment-options ${
              !invoiceVisible ? "visible" : "hidden"
            }`}
          >
            <div className="heading">
              <p className="text">Payment Options</p>
            </div>
            <div className="d-flex">
              <div className="payment-menus">
                <div
                  className={`menu-item ${
                    paymentMode === "upi" ? "active" : ""
                  }`}
                >
                  <div
                    onClick={() =>paymentMode === "" ? setPayentMode("upi"):setPayentMode("")}
                    className="d-flex justify-content-between"
                  >
                    <span>UPI</span>
                    {paymentMode === "upi" ? (
                      <i className="fa-solid fa-caret-down"></i>
                    ) : (
                      <i className="fa-solid fa-caret-up"></i>
                    )}
                  </div>
                  <div
                    className={`upi-container ${
                      paymentMode === "upi" ? "show" : ""
                    }`}
                  >
                    {paymentMode === "upi" && <Upi />}
                  </div>
                </div>
                <div
                  className={`menu-item ${
                    paymentMode === "card" ? "active" : ""
                  }`}
                >
                  <div
                    onClick={() =>paymentMode === "" ? setPayentMode("card"):setPayentMode("")}
                    className="d-flex justify-content-between"
                  >
                    <span>Debit/Credit Card</span>
                    {paymentMode === "card" ? (
                      <i className="fa-solid fa-caret-down"></i>
                    ) : (
                      <i className="fa-solid fa-caret-up"></i>
                    )}
                  </div>
                  <div
                    className={`upi-container ${
                      paymentMode === "card" ? "show" : ""
                    }`}
                  >
                    {paymentMode === "card" && <Upi />}
                  </div>
                </div>
                <div
                  className={`menu-item ${
                    paymentMode === "netBank" ? "active" : ""
                  }`}
                >
                  <div
                     onClick={() =>paymentMode === "" ? setPayentMode("netBank"):setPayentMode("")}
                    className="d-flex justify-content-between"
                  >
                    <span>Net Banking</span>
                    {paymentMode === "netBank" ? (
                      <i className="fa-solid fa-caret-down"></i>
                    ) : (
                      <i className="fa-solid fa-caret-up"></i>
                    )}
                  </div>
                  <div
                    className={`upi-container ${
                      paymentMode === "netBank" ? "show" : ""
                    }`}
                  >
                    {paymentMode === "netBank" && <Upi />}
                  </div>
                </div>
                <div
                  className={`menu-item ${
                    paymentMode === "wallets" ? "active" : ""
                  }`}
                >
                  <div
                    onClick={() =>paymentMode === "" ? setPayentMode("wallets"):setPayentMode("")}
                    className="d-flex justify-content-between"
                  >
                    <span>Net Banking</span>
                    {paymentMode === "wallats" ? (
                      <i className="fa-solid fa-caret-down"></i>
                    ) : (
                      <i className="fa-solid fa-caret-up"></i>
                    )}
                  </div>
                  <div
                    className={`upi-container ${
                      paymentMode === "=wallets" ? "show" : ""
                    }`}
                  >
                    {paymentMode === "=wallets" && <Upi />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={` ${invoiceVisible ? "invoice" : "no-invoice"}`}>
          <Invoice handlevisible={handlevisible} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
