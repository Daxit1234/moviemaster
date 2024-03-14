import React,{useContext ,useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
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
    const { data } = useFetch(`/movie/${id}`);
    const {bookingDetails,setBookingDetails}=useContext(MovieContext);
    const [dummyData, setDummyData] = useState(null);

    //remove collon in offline
    let newData= !data?.AxiosError ? data  : dummyData 
    useEffect(() => {
      setDummyData(MovieData?.results.find(item => item.id === parseInt(id)))
      // Check if data is available before updating context
      if (data) {
        setBookingDetails((prevDetails) => ({
          ...prevDetails,
          movieId: id,
          movieName:newData?.title || newData?.name
        }));
      }
    }, [data,setBookingDetails,newData,id]);
  return (
    <div>
       <Topimage data={newData} id={id} />
       <div className='date-filter-section'>
       <MovieDates/>
       <SearchBox />
       </div>
       <CinemaDetail/>
    </div>
  )
}

export default Cinema
