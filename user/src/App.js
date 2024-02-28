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
import Payment from './pages/payment/Payment';
import Food from './pages/food/Food';

function App() {
  return (
    <Moviestate>
    <Router>
     <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<Details/>} />
      <Route path='/search/:query' element={<SearchResult/>} />
      <Route path='/cinema/:id' element={<Cinema/>} />
      <Route path='/seats/:showPrice' element={<Seats/>} />
      <Route path='/login' element={<LoginSingup/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/food' element={<Food/>} />
    </Routes>
    {/* <Footer/> */}
   </Router>
    </Moviestate>
  );
}

export default App;
