import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Cinema from './pages/cinema/Cinema';
import Seats from './pages/seats/Seats';
import LoginSingup from './pages/login&singup/LoginSingup';
import Moviestate from "./context/MovieState";
import Admin from './pages/admin/Admin';
import AddCinema from './pages/admin/addCinema/AddCinema';
import AddShowTime from './pages/admin/addShowTime/AddShowTime';
import SideBar from './components/admin/sideBar/SideBar';

function App() {
  return (
    <Moviestate>
    <Router>
    {window.location.pathname.slice(0,6) !== '/admin' ? <Header />:<SideBar/> }
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<Details/>} />
      <Route path='/search/:query' element={<SearchResult/>} />
      <Route path='/cinema/:id' element={<Cinema/>} />
      <Route path='/seats' element={<Seats/>} />
      <Route path='/login' element={<LoginSingup/>} />
      <Route path='/admin/*'element={<SideBar/>}/>
      <Route path='/admin/addcinema' element={<AddCinema/>} />
      <Route path='/admin/addshowtime' element={<AddShowTime/>} />
    </Routes>
    {/* <Footer/> */}
   </Router>
    </Moviestate>
  );
}

export default App;
