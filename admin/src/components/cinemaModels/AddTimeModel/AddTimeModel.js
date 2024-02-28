import React, { useContext, useEffect, useState } from "react";
import AdminContext from "../../../context/AdminContext";

function AddTimeModel({ cinemaId }) {
  const { addNewShow, newShow, setNewShow, editshow, getShows } = useContext(AdminContext);

  const [prices, setPrices] = useState([null, null, null]);

  // Set the cinemaId when the component mounts
  useEffect(() => {
    setNewShow({ ...newShow, cinemaId: cinemaId });
  }, [cinemaId, setNewShow]);

  function convertTo12HourFormat(time24) {
    // Split the time into hours and minutes
    var timeSplit = time24.split(':');
    var hours = parseInt(timeSplit[0], 10);
    var minutes = parseInt(timeSplit[1], 10);

    // Determine AM/PM and adjusted hour
    var ampm = hours >= 12 ? 'PM' : 'AM';
    var adjustedHours = hours % 12 || 12; // Adjust hour to 12-hour format

    // Construct the 12-hour format string
    var time12 = adjustedHours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;

    return time12;
  }

  let handleAddShow = async (e) => {
    e.preventDefault();
    addNewShow();
    window.location.reload();
    document.getElementById("closebtn").click()
  };

  let handleOnChange = (e) => {
    if (e.target.name === "time") {
      let time12 = convertTo12HourFormat(e.target.value);
      setNewShow({ ...newShow, [e.target.name]: time12 });
    } else if (e.target.name.startsWith("price")) {
      const index = parseInt(e.target.name.replace("price", "")) - 1;
      const newPrices = [...prices];
      newPrices[index] = e.target.value;
      setPrices(newPrices);
      setNewShow({ ...newShow, showPrice: newPrices });
    } else {
      setNewShow({ ...newShow, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Add Show
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddShow}>
                <div className="form-group">
                  <label htmlFor="showType" className="col-form-label">
                    Time:
                  </label>
                  <input
                    required
                    type="time"
                    className="form-control"
                    id="showType"
                    name="time"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="showType" className="col-form-label">
                    Show Type:
                  </label>
                  <br />
                  <select
                    className="w-50 form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    name="showType"
                    onChange={handleOnChange}
                    required
                  >
                    <option value="" disabled selected>select Show Type</option>
                    <option value="3D">3D</option>
                    <option value="2D">2D</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="showPrice" className="col-form-label">
                    Show Price:
                  </label>
                  <br />
                  <div className="d-flex">
                    {[1, 2, 3].map((index) => (
                      <input
                        key={index}
                        required
                        type="number"
                        className="form-control"
                        id={`showPrice${index}`}
                        name={`price${index}`}
                        placeholder={`Price ${index}`}
                        onChange={handleOnChange}
                      />
                    ))}
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    id="closebtn"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTimeModel;
