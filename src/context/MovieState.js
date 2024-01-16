import { useState } from "react";
import MovieContext from "./Moviecontext";

const Moviestate = (props) => {
 let obj = JSON.parse(localStorage.getItem("userDetails"));

 const [bookedSeats, setBookedSeats] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({
    cinemaId:"65a28751eeafe22cbdf56d23",
    showId:"65a28767eeafe22cbdf56d25",
    movieId:null,
    date:new Date().toString().slice(0,16) +"00:00:00.000+00:00",
    totalAmount:null,
    seats:[],
    userName:obj.name,
    email:obj.email
  });
  // const [userTikets, setUserTikets] = useState([]);
  // const [allTickets, setallTickets] = useState([]);
  // const [users,setUsers]=useState([]);
  const host = "http://localhost:8080";

  //book tikets
  let booking = async () => {
    await fetch(`${host}/bookedSeats/bookseat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((e) => console.log(e));
    //   setBookingDetails({...bookingDetails,
    //   cinemaId:"65a28751eeafe22cbdf56d23",
    // showId:"65a28767eeafe22cbdf56d25",
    // movieId:null,
    // date:new Date().toString().slice(0,16) +"00:00:00.000+00:00",
    // totalAmount:null,
    // seats:[],
    // });
  };

  // //get data from table
  // let getdata = async () => {
  //   await fetch(`${host}/ticket/getticket/${email}`)
  //     .then((res) => res.json())
  //     .then((e) => setUserTikets(e));
  // };

  // //get allTickets for admin
  // let getAllTickets = async () => {
  //   await fetch(`${host}/ticket/getallticket`)
  //     .then((res) => res.json())
  //     .then((e) => setallTickets(e));
  // };

  // //detele tikets
  // let deleteData = async (id) => {
  //   await fetch(`${host}/ticket/delete/${id}`, {
  //     method: "DELETE",
  //   });
  //   getdata();
  //   getAllTickets();
  // };

  // //get all user details
  // let getUserDetails=async()=>{
  //   await fetch("http://localhost:8080/users/getUserDetails").then((res) =>
  //   res.json().then(e=>setUsers(e)))
  // }
  return (
    <MovieContext.Provider
      value={{
        bookingDetails,setBookingDetails,
        booking,bookedSeats, setBookedSeats
        // userTikets,
        // getdata,
        // deleteData,
        // getAllTickets,allTickets,
        // users,getUserDetails
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default Moviestate;
