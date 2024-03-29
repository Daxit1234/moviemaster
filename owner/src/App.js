import React, { useEffect } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import AdminHeader from './components/header/AdminHeader'
import AddCinema from './pages/addCinema/AddCinema'
import Dashboard from './pages/dashboard/Dashboard'
import Users from './pages/users/Users'
import Bookings from './pages/bookings/Bookings'
import Adminstate from './context/Adminstate'
import Food from './pages/food/Food'
import ShowTime from './pages/addShowTime/ShowTime'
import Login from './pages/Login'


function App() {
  return (
    <Adminstate>

    <Router>
      <AdminHeader/>
      
   <Routes>
     <Route path='/'element={<Dashboard/>}/>
    <Route path='cinemas' element={<AddCinema/>} />
     <Route path='/showtimes' element={<ShowTime/>} />
     <Route path='/users' element={<Users/>} />
     <Route path='/bookings' element={<Bookings/>} />
     <Route path='/foods' element={<Food/>} />
     <Route path='/login' element={<Login/>} />
   </Routes>
  </Router>
    </Adminstate>
  )
}

export default App
