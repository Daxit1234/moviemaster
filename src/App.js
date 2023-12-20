import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/:mediaType/:id' element={<Details />} /> */}
      {/* <Route path='/search/:query' element={<SearchResult/>} /> */}
      {/* <Route path='/explore/:mediaType' element={<Explore/>} /> */}
      {/* <Route path='*' element={<NotFound/>} /> */}
    </Routes>
    {/* <Footer/> */}
   </Router>
  );
}

export default App;
