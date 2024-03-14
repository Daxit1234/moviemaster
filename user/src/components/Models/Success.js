import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css"

const Success = () => {
    const navigate=useNavigate()
  return (
    <div>
      <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="icon-box">
              <i class="fa-solid fa-check"></i>
              </div>
            </div>
            <div className="modal-body">
              <h4 className="modal-title ">Awesome!</h4>
            </div>
            <div className="modal-body">
              <p className="text-center">
                Your booking has been confirmed. Check your email for detials.
              </p>
            </div>
            <div className="modal-footer">
              <button onClick={()=>navigate("/bookings")} className="btn btn-success btn-block" data-dismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
