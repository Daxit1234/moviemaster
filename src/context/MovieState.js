import { useState } from "react";
import MovieContext from "./Moviecontext";

const Moviestate = (props) => {
  const [details, setDetails] = useState({
    movieName: "",
    thiatorName: "",
    address: "",
    date: new Date(),
    time: "",
    seat: []
  });
  const [userTikets, setUserTikets] = useState([]);
  const [allTickets, setallTickets] = useState([]);
  const [users,setUsers]=useState([]);
  const host = "http://localhost:8080";
  let obj;
  if (localStorage.getItem("userDetails")) {
    obj = JSON.parse(localStorage.getItem("userDetails"));
  } else {
    obj = { name: "", email: "" };
  }
  const { name, email } = obj;

  //book tikets
  let booking = async () => {
    await fetch(`${host}/ticket/addticket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...details, name, email,total:details.seat.length*200 }),
    })
      .then((res) => res.json())
      .then((e) => console.log(e));
    setDetails({
      movieName: "",
      thiatorName: "",
      address: "",
      date:"",
      time: "",
      seat: [],
    });
  };

  //get data from table
  let getdata = async () => {
    await fetch(`${host}/ticket/getticket/${email}`)
      .then((res) => res.json())
      .then((e) => setUserTikets(e));
  };

  //get allTickets for admin
  let getAllTickets = async () => {
    await fetch(`${host}/ticket/getallticket`)
      .then((res) => res.json())
      .then((e) => setallTickets(e));
  };

  //detele tikets
  let deleteData = async (id) => {
    await fetch(`${host}/ticket/delete/${id}`, {
      method: "DELETE",
    });
    getdata();
    getAllTickets();
  };

  //get all user details
  let getUserDetails=async()=>{
    await fetch("http://localhost:8080/users/getUserDetails").then((res) =>
    res.json().then(e=>setUsers(e)))
  }
  return (
    <MovieContext.Provider
      value={{
        details,setDetails,
        booking,
        userTikets,
        getdata,
        deleteData,
        getAllTickets,allTickets,
        users,getUserDetails
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default Moviestate;
