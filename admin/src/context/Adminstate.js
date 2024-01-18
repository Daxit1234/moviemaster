import { useState } from "react";
import AdminContext from "./AdminContext";
function Adminstate(props) {
  const [menuVisible,setMenuVisible]=useState(true)
  return (
    <AdminContext.Provider
    value={{
        menuVisible,setMenuVisible
    }}
  >
    {props.children}
  </AdminContext.Provider>
  )
}

export default Adminstate
