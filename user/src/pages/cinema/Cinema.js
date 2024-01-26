import React,{useContext ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hook/useFetch';
import Topimage from './topImage/Topimage';
import MovieDates from './dates/MovieDates';
import CinemaDetail from './cinemaDetails/cinemaName/CinemaDetail';
import MovieContext from '../../context/Moviecontext';

const Cinema = () => {
    const { id } = useParams();
    const { data } = useFetch(`/movie/${id}`);
    const {bookingDetails,setBookingDetails}=useContext(MovieContext);
    useEffect(() => {
      // Check if data is available before updating context
      if (data) {
        setBookingDetails((prevDetails) => ({
          ...prevDetails,
          movieId: data.id,
        }));
      }
    }, [data,setBookingDetails]);
  return (
    <div>
       <Topimage data={data} />
       <MovieDates/>
       <CinemaDetail/>
    </div>
  )
}

export default Cinema