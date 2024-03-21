import React,{useContext ,useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hook/useFetch';
import Topimage from './topImage/Topimage';
import MovieDates from './dates/MovieDates';
import CinemaDetail from './cinemaDetails/cinemaName/CinemaDetail';
import MovieContext from '../../context/Moviecontext';
import SearchBox from './filters/SearchBox';
import "./Cinema.css"
import MovieData from "../home/Moviedata.json"


const Cinema = () => {
    const { id } = useParams();
    const {bookingDetails,setBookingDetails,obj}=useContext(MovieContext);
    const [dummyData, setDummyData] = useState(null);
    const navigate=useNavigate()

    //remove collon in offline
    let newData= dummyData 
    useEffect(() => {
      if (obj.email==="") {
        navigate('/login')
        window.location.reload()
      }
      setDummyData(MovieData?.results.find(item => item.id === parseInt(id)))
      // Check if data is available before updating context
      if (dummyData) {
        setBookingDetails((prevDetails) => ({
          ...prevDetails,
          movieId: id,
          movieName:dummyData?.title || dummyData?.name
        }));
      }
    }, [dummyData,setBookingDetails,newData,id]);
  return (
    <div>
       <Topimage data={dummyData} id={id} />
       <div className='date-filter-section'>
       <MovieDates/>
       <SearchBox />
       </div>
       <CinemaDetail/>
    </div>
  )
}

export default Cinema
