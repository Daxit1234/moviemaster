import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hook/useFetch';
import Topimage from './topImage/Topimage';
import MovieDates from './dates/MovieDates';
import CinemaDetail from './cinemaDetails/cinemaName/CinemaDetail';

const Cinema = () => {
    const { id } = useParams();
    const { data } = useFetch(`/movie/${id}`);
  return (
    <div>
       <Topimage data={data} />
       <MovieDates/>
       <CinemaDetail/>
    </div>
  )
}

export default Cinema
