import React, { useState } from "react";
import BasicRating from "../BookingCard/Rating";

const FeedBack = ({id}) => {
    const [comment,setComment]=useState("")
    const [value, setValue] = useState(1);

    let handleComment=async(e)=>{
        e.preventDefault(); 
        try {
            let response=await fetch("http://localhost:8080/review/addreview",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({bookingId:id,rating:value,comment:comment}),
            })
            let data=await response.json()
            console.log(data)
            setComment("")
            setValue(1)
            document.getElementById("close-button").click()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark" id="exampleModalLongTitle">
                Give Feedback
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleComment}>
               
            <div class="modal-body">
              <div className="form-group">
                <label className="text-dark" htmlFor="exampleInputEmail1">Enter Rating</label>
                <div className="justify-content-center">
                <BasicRating value={value} setValue={setValue}/>
                </div>
              </div>
              <div className="form-group">
                <label className="text-dark" htmlFor="exampleInputEmail1">Enter Review</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Comment"
                  name="commment"
                  value={comment}
                  onChange={(e)=> setComment(e.target.value)}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                id="close-button"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Save changes
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
