import React from 'react'
import "./Dashboard.css"
import SideBar from '../../components/sideBar/SideBar'
import { useLocation } from 'react-router-dom'

function Dashboard() {
  const location=useLocation();
  console.log(location)
  return (
    <>
    <div className='d-flex'>
      <SideBar/>
      <div className='counting-box'>
        <div className='users'></div>
        <div className='cinema'></div>
        <div className='shows'></div>
        <div className="booking"></div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
