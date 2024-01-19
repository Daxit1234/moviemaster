import React from 'react'

function AddCinemaModel() {
    let handleAddCinema=()=>{
        alert("sdkk")
    }
  return (
    <div>
<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Add Cinema</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form for="add-cinema" onSubmit={handleAddCinema}>
          <div class="form-group">
            <label for="cinema-name" class="col-form-label">Cinema Name:</label>
            <input required type="text" class="form-control" id="cinema-name" />
          </div>
          <div class="form-group">
            <label for="address" class="col-form-label">Address:</label>
            <input required type="text" class="form-control" id="address" />
          </div>
          <div class="form-group">
            <label for="cinema-name" class="col-form-label">City:</label>
            <input type="text" class="form-control" id="cinema-name" />
          </div>
          <div class="form-group">
            <label for="location" class="col-form-label">Location URL:</label>
            <input required type="text" class="form-control" id="location" />
          </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit"  className="btn btn-primary">Save changes</button>
      </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AddCinemaModel
