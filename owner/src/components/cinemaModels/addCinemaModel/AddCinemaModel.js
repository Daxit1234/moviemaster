import React, { useContext ,useState} from "react";
import AdminContext from "../../../context/AdminContext";

function AddCinemaModel({role,item}) {
  const {addNewCinema,newCinema,setNewCinema,editcinema,getCinemas}=useContext(AdminContext)
  const {cinemaName,city,address,locationUrl,_id}=item
  const [editCinema,setEditCinema]=useState({cinemaName:"",address:"",city:"",locationUrl:""})

  let handleAddCinema = (e) => {
    e.preventDefault();
    addNewCinema()
    document.getElementById("close").click()

  };

  let handleEditCinema = async(e) => {
    e.preventDefault();
    editcinema(_id,editCinema)
    getCinemas()
    window.location.reload()
    document.getElementById('close').click()
  };

  let handleOnChange=(e)=>{
     setNewCinema({...newCinema, [e.target.name]: e.target.value})
  }
  let handleOnChangeEdit=(e)=>{
     setEditCinema({...editCinema, [e.target.name]: e.target.value})
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
                role==="add"?"Add Cinema":"Edit Cinema"
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
              <form for="add-cinema" onSubmit={handleAddCinema}>
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
                  <label for="address" className="col-form-label">
                    Address:
                  </label>
                  <input onChange={handleOnChange}
                    required
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                  />
                </div>
                <div className="form-group">
                  <label for="cinema-name" className="col-form-label">
                    City:
                  </label>
                  <br />
                  <select
                    class="w-50 form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    name="city"
                    onChange={handleOnChange}
                    required
                  >
                    <option value="" disabled selected>select City</option>
                    <option value="surat">Surat</option>
                    <option value="ahmadabad">Ahmadabad</option>
                    <option value="pune">Pune</option>
                    <option value="chennai">Chennai</option>
                    <option value="vadodara">Vadodara</option>
                    <option value="rajkot">Rajkot</option>
                    <option value="hydrabad">Hydrabad</option>
                    <option value="delhi">Delhi</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="location" className="col-form-label">
                    Location URL:
                  </label>
                  <input onChange={handleOnChange}
                    required
                    type="text"
                    className="form-control"
                    id="location"
                    name="locationUrl"
                  />
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
              <form for="add-cinema" onSubmit={handleEditCinema}>
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
              
                />
              </div>
              <div className="form-group">
                <label for="address" className="col-form-label">
                  Address:
                </label>
                <input onChange={handleOnChangeEdit}
                  required
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                
                />
              </div>
              <div className="form-group">
                <label for="cinema-name" className="col-form-label">
                  City:
                </label>
                <br />
                <select
                  class="w-50 form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  name="city"
                  onChange={handleOnChangeEdit}
                  required
                
                >
                  <option value="" disabled selected>select City</option>
                  <option value="surat">Surat</option>
                  <option value="ahmadabad">Ahmadabad</option>
                  <option value="pune">Pune</option>
                  <option value="chennai">Chennai</option>
                  <option value="vadodara">Vadodara</option>
                  <option value="rajkot">Rajkot</option>
                  <option value="hydrabad">Hydrabad</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
              <div className="form-group">
                <label for="location" className="col-form-label">
                  Location URL:
                </label>
                <input onChange={handleOnChangeEdit}
                  required
                  type="text"
                  className="form-control"
                  id="location"
                  name="locationUrl"
                 
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  id="closeButton"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
              }
              <button id="close"  data-dismiss="modal"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCinemaModel;
