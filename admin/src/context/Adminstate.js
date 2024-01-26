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
    cinemaName: "",
    time: "",
    showType: ""
  });
  const [allShows,setAllShows]=useState([])
  const [allCinema, setAllCinema] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
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
    console.log(allShows)
  };

  let getCinemas = async () => {
    let responce = await fetch(`${host}/cinemas/getcinema`);
    let data = await responce.json();
    setAllCinema(data);
  };

  let getShows = async () => {
    let responce = await fetch(`${host}/show/getallshowtime`);
    let data = await responce.json();
    setAllShows(data);
  };

  let getUsers = async () => {
    let responce = await fetch(`${host}/users/getUserDetails`);
    let data = await responce.json();
    console.log(data)
    setAllUsers(data);
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
        editcinema,
        getShows,allShows,
        deleteTime,newShow, setNewShow,
        addNewShow,editshow,
        allUsers, setAllUsers,getUsers
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
}

export default Adminstate;
