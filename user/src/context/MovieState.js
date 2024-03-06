import { useState } from "react";
import MovieContext from "./Moviecontext";

const Moviestate = (props) => {
  const [allCinema, setAllCinema] = useState([]);
  const [query,setQuery]=useState("")
 let obj;
 if (localStorage.getItem("userData")) {
  obj = JSON.parse(localStorage.getItem("userData"));
} else {
  obj = { name: "", email: "" };
}

 const [bookedSeats, setBookedSeats] = useState([]);
 const [city,setCity]=useState("")
 const [showType,setShowType]=useState("")
  const [bookingDetails, setBookingDetails] = useState({
    cinemaId:"",
    showId:"",
    movieId:null,
    date:new Date().toString().slice(0,16) +"00:00:00.000+00:00",
    totalAmount:null,
    seats:[],
    userName:obj.name,
    email:obj.email,
    cinemaName:"",
    cinemaAdd:"",
    showTime:"",
    movieName:"",
    showType:""
  });
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
      setBookingDetails({
        cinemaId:"",
        showId:"",
        movieId:null,
        date:new Date().toString().slice(0,16) +"00:00:00.000+00:00",
        totalAmount:null,
        seats:[],
        userName:obj.name,
        email:obj.email,
        cinemaName:"",
        cinemaAdd:"",
        showTime:"",
        movieName:"",
        showType:""
      });
  };

    //ger cinemas
    let getCinemas = async (query) => {
      let responce = await fetch(`http://localhost:8080/cinemas/getallcinema?q=${query}`);
      let data = await responce.json();
      setAllCinema(data);
    };

  return (
    <MovieContext.Provider
      value={{
        bookingDetails,setBookingDetails,
        booking,bookedSeats, setBookedSeats,
        allCinema, setAllCinema,getCinemas,
        query,setQuery,obj,city,setCity,
        showType,setShowType
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default Moviestate;
