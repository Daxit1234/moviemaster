import { useState } from "react";
import AdminContext from "./AdminContext";
function Adminstate(props) {
  const [menuVisible, setMenuVisible] = useState(true);
  const [newCinema, setNewCinema] = useState({
    cinemaName: "",
    address: "",
    city: "",
    locationUrl: "",
  });
  const [newShow, setNewShow] = useState({
    cinemaId: "",
    time: "",
    showType: "",
    showPrice:[]
  });
  const [allShows,setAllShows]=useState([])
  const [allCinema, setAllCinema] = useState([]);
  const [allFood, setAllFood] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allBooking, setAllBooking] = useState([]);
  const [totalCinema,setTotalCinema]=useState(null);
  const [totalFood,setTotalFood]=useState(null);
  const [totalUser,setTotalUser]=useState(null);
  const [totalBooking,setTotalBooking]=useState(null);
  const host = "http://localhost:8080";

  let addNewCinema = async () => {
    let responce = await fetch(`${host}/cinemas/addcinema`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCinema),
    });
    let data = await responce.json();
    setAllCinema(allCinema.concat(data));
  };

  let addNewShow = async () => {
    let responce = await fetch(`${host}/show/addshowtime`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newShow),
    });
    let data = await responce.json();
    setAllShows(allShows.concat(data));
  };

  let getCinemas = async (page,row) => {
    let responce = await fetch(`${host}/cinemas/getcinema?page=${page}&pageSize=${row}`);
    let data = await responce.json();
    setAllCinema(data.paginatedData);
    setTotalCinema(data.totalData)
  };
 
    
  let getShows = async () => {
    let responce = await fetch(`${host}/show/getallshowtime`);
    let data = await responce.json();
    setAllShows(data);
  };

  let getBooking = async (page,row) => {
    let responce = await fetch(`${host}/bookedSeats/getallbooking?page=${page}&pageSize=${row}`);
    let data = await responce.json();
    setAllBooking(data.results);
    setTotalBooking(data.totalData);
  };

  let getFood = async (page,row) => {
    let responce = await fetch(`${host}/food/getfood?page=${page}&pageSize=${row}`);
    let data = await responce.json();
    setAllFood(data.results);
    setTotalFood(data.totalData);
  };

  let getUsers = async (page,row) => {
    try {
      let responce = await fetch(`${host}/users/getUserDetails?page=${page}&pageSize=${row}`);
      let data = await responce.json();
      setAllUsers(data.results);
      setTotalUser(data.totalData)
    } catch (error) {
      console.log("object")
    }

  };

  let deleteCinema = async(id) => {
    await fetch(`${host}/cinemas/deletecinema/${id}`, {
      method: "DELETE",
    });
  };

  let deleteTime = async(id) => {
    await fetch(`${host}/show/deleteshowtime/${id}`, {
      method: "DELETE",
    });
  };
  let deleteFood = async(id) => {
    await fetch(`${host}/food/deletefood/${id}`, {
      method: "DELETE",
    });
  };

  // let deleteUser = async(id) => {
  //   await fetch(`${host}/show/deleteshowtime/${id}`, {
  //     method: "DELETE",
  //   });
  // };

let editcinema = async (_id, editCinema) => {
  try {
    let response = await fetch(`http://localhost:8080/cinemas/editcinema/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editCinema)
    });
    let data = await response.json();
    console.log(data)
  } catch (error) {
    console.error("Error during editcinema:", error);
  }
};

let editshow = async (_id, editShow) => {
  try {
    let response = await fetch(`http://localhost:8080/show/editshow/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editShow)
    });
    let data = await response.json();
    console.log(data)
  } catch (error) {
    console.error("Error during editcinema:", error);
  }
};


  return (
    <AdminContext.Provider
      value={{
        menuVisible,
        setMenuVisible,
        setNewCinema,
        newCinema,
        addNewCinema,
        getCinemas,
        allCinema,
        deleteCinema,
        deleteFood,
        editcinema,
        getShows,allShows,
        deleteTime,newShow, setNewShow,
        addNewShow,editshow,
        allUsers, setAllUsers,getUsers,
        allFood, setAllFood,getFood,totalCinema,totalFood,totalUser,
        getBooking,allBooking,totalBooking,setAllBooking
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
}

export default Adminstate;
