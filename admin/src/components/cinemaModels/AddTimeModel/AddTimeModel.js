import React, { useContext ,useState} from "react";
import AdminContext from "../../../context/AdminContext";

function AddTimeModel({role,item}) {
  const {addNewShow,newShow,setNewShow,editshow,getShows}=useContext(AdminContext)
  const {cinemaName,_id}=item
  const [editShow,setEditShow]=useState({showType:"",time:""})

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
  let handleAddShow = async(e) => {
    e.preventDefault();
    addNewShow()
  };

  let handleEditShow = async(e) => {
    e.preventDefault();
    editshow(_id,editShow)
    getShows()
  };

  let handleOnChange=(e)=>{
    if(e.target.name==="time"){
      let time12=convertTo12HourFormat(e.target.value);
       setNewShow({...newShow,  [e.target.name]: time12})
    }else{
      setNewShow({...newShow, [e.target.name]: e.target.value})
    }
  }
  let handleOnChangeEdit=(e)=>{
     if(e.target.name==="time"){
      let time12=convertTo12HourFormat(e.target.value);
       setEditShow({...editShow,  [e.target.name]: time12})
    }else{
      setEditShow({...editShow, [e.target.name]: e.target.value})
    }
  }
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
               {
                role==="add"?"Add Show":"Edit Show"
               } 
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
              {
                role==="add"?
              <form for="add-cinema" onSubmit={handleAddShow}>
                <div className="form-group">
                  <label for="cinema-name" className="col-form-label">
                    Cinema Name:
                  </label>
                  <input onChange={handleOnChange}
                    required
                    type="text"
                    className="form-control"
                    id="cinema-name"
                    name="cinemaName"
                  />
                </div>
                <div className="form-group">
                  <label for="showType" className="col-form-label">
                    Time:
                  </label>
                  <input onChange={handleOnChange}
                    required
                    type="time"
                    className="form-control"
                    id="showType"
                    name="time"
                  />
                </div>
                <div className="form-group">
                  <label for="cinema-name" className="col-form-label">
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
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
              :
              <form for="add-cinema" onSubmit={handleEditShow}>
              <div className="form-group">
                <label for="cinema-name" className="col-form-label">
                 Cinema Name:
                </label>
                <input onChange={handleOnChangeEdit}
                  required
                  type="text"
                  className="form-control"
                  id="cinema-name"
                  name="cinemaName"
                  value={cinemaName}
                  disabled
                />
              </div>
              <div className="form-group">
                <label for="showType" className="col-form-label">
                  Time:
                </label>
                <input onChange={handleOnChangeEdit}
                  required
                  type="time"
                  className="form-control"
                  id="time"
                  name="time"
                />
              </div>
              <div className="form-group">
                <label for="cinema-name" className="col-form-label">
                  Show Type:
                </label>
                <br />
                <select
                  className="w-50 form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  name="showType"
                  onChange={handleOnChangeEdit}
                  required
                >
                  <option value="" disabled selected>select Show Type</option>
                  <option value="2D">2D</option>
                  <option value="3D">3D</option>
                 
                </select>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Edit and Save
                </button>
              </div>
            </form>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTimeModel;
