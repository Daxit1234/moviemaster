import React from 'react'
import "./Delete.css";

const Delete = ({deleteId,handleDelete}) => {
    let handleComfirm=()=>{
        handleDelete(deleteId)
        document.getElementById("cencel").click()
    }
  return (
<div id="myModal" class="modal fade">
	<div class="modal-dialog delete-modal-confirm">
		<div class="modal-content">
			<div class="modal-header flex-column">
				<div class="icon-box">
                <i class="fa-solid fa-xmark"></i>
				</div>						
				<h4 class="modal-title w-100">Are you sure?</h4>	
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body">
				<p>Do you really want to delete these records? This process cannot be undone.</p>
			</div>
			<div class="modal-footer justify-content-center">
				<button type="button" id='cencel' class="btn btn-secondary" data-dismiss="modal">Cancel</button>
				<button type="button" onClick={handleComfirm} className="btn btn-danger">Delete</button>
			</div>
		</div>
	</div>
</div> 
  )
}

export default Delete;