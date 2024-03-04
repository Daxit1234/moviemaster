import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Cinema from './pages/cinema/Cinema';
import Seats from './pages/seats/Seats';
import LoginSingup from './pages/login&singup/LoginSingup';
import Moviestate from "./context/MovieState";
import Payment from './pages/payment/Payment';
import Food from './pages/food/Food';
import Stripe from './pages/stripe/Stripe';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Bookings from './pages/bookings/Bookings';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY'); // Replace with your actual Stripe publishable key

function App() {
  return (
    <Moviestate>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/search/:query' element={<SearchResult />} />
          <Route path='/cinema/:id' element={<Cinema />} />
          <Route path='/seats/:showPrice' element={<Seats />} />
          <Route path='/login' element={<LoginSingup />} />
          <Route path='/food' element={<Food />} />
          <Route path='/bookings' element={<Bookings/>} />
          <Route path='/payment/:amount/:convenienceFees/:foodAmount/:contribution' element={<Elements stripe={stripePromise}><Payment /></Elements>} />
          {/* <Route path='/stripe' element={<Elements stripe={stripePromise}><Stripe /></Elements>} /> Wrap PaymentForm with Elements provider */}
        </Routes>
    
      </Router>
    </Moviestate>
  );
}

export default App;
