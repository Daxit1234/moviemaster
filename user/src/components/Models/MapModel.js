import React from "react";

function MapModel( props) {
    console.log(props)
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
              <h5 className="modal-title" id="exampleModalLongTitle">
                {props.cinemaName}
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
            <iframe
              src={props.url}
              width="500"
              height="400"
              loading="lazy"
              className="bg-dark"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapModel;
