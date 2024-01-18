import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import SideBar from './components/sideBar/SideBar'
import AdminHeader from './components/header/AdminHeader'
import AddShowTime from './pages/addShowTime/AddShowTime'
import AddCinema from './pages/addCinema/AddCinema'
import Dashboard from './pages/dashboard/Dashboard'
import Users from './pages/users/Users'
import Bookings from './pages/bookings/Bookings'
import Adminstate from './context/Adminstate'


function App() {
  return (
    <Adminstate>

    <Router>
      <AdminHeader/>
   <Routes>
     <Route path='/'element={<Dashboard/>}/>
    <Route path='cinemas' element={<AddCinema/>} />
     <Route path='/showtimes' element={<AddShowTime/>} />
     <Route path='/users' element={<Users/>} />
     <Route path='/bookings' element={<Bookings/>} />

   </Routes>
  </Router>
    </Adminstate>
  )
}

export default App
