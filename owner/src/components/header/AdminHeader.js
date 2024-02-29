import React, { useContext, useEffect, useState } from 'react'
import "./AdminHeader.css"
import logo from "../../assets/headerLogo-removebg-preview.png";
import AdminContext from '../../context/AdminContext';
import { Link } from 'react-router-dom';


function AdminHeader() {
  const {menuVisible,setMenuVisible}=useContext(AdminContext)
  return (
        <div className="header">
        <img className="imglogo" src={logo} alt="dvd" />
        <i onClick={()=>menuVisible? setMenuVisible(false):setMenuVisible(true)} className={`${menuVisible ? "visible" :"hide"} menu-icon fa-solid fa-bars`}></i>
      </div>
  )
}

export default AdminHeader
