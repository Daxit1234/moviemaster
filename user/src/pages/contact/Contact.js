import React from 'react'

function Contact() {
  return (
    <>
    <div style={{height:"650px",width:"98%"}}>
      <div className='row' style={{marginTop:"5rem",marginLeft:"8rem"}}>
      <div className="card text-light mx-5 w-25" style={{ width: "18rem",backgroundColor:"rgb(4,21,45)" }}>
      <i style={{fontSize:'5rem'}} className="fa-solid fa-phone text-center text-warning"></i>
          <div className="card-body">
            <h5 className="card-title text-center">BY PHONE</h5><br />
            <p className="card-text text-center">Mondayto friday,9am to 4pm </p>
            <p className="card-text text-center">NOrth America Toll-Free </p>
            <p className="card-text text-center">2-5345-4545-345 </p><br />
            <p className="card-text text-center">INTERNAATIONAL </p>
            <p className="card-text text-center">454-6456-5657 </p>
          </div>
        </div>
        <div className="card text-light mx-5" style={{ width: "18rem" ,backgroundColor:"rgb(4,21,45)" }}>
      <i style={{fontSize:'5rem'}} className="fa-solid fa-calendar-plus text-center text-warning"></i>          <div className="card-body">
            <h5 className="card-title text-center">START A NEW CASE</h5><br />
            <p className="card-text text-center">just send us your questions or concerms bt starting a new case and we will give you the help you need</p><br />
            <button style={{width:'10rem'}} className="btn btn-primary mt-5">START HEAR</button>
          </div>
        </div>
        <div className="card text-light mx-5" style={{ width: "18rem" ,backgroundColor:"rgb(4,21,45)" }}>
        <i style={{fontSize:'5rem'}} className="fa-sharp fa-solid fa-comments text-center text-warning"></i>
          <div className="card-body">
            <h5 className="card-title text-center">LIVE CHAT</h5><br />
            <p className="card-text text-center">Chat with a member of your in house team</p><br />
            <button style={{width:'10rem'}} className="btn btn-primary mt-5">START HEAR</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact