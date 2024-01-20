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
  const [allShows,setAllShows]=useState([])
  const [allCinema, setAllCinema] = useState([]);
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

  let deleteCinema = async(id) => {
    await fetch(`${host}/cinemas/deletecinema/${id}`, {
      method: "DELETE",
    });
  };

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
        getShows,allShows
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
}

export default Adminstate;
