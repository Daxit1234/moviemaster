import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hook/useFetch';
import Topimage from './topImage/Topimage';
import MovieDates from './dates/MovieDates';

const Cinema = () => {
    const { id } = useParams();
    const { data } = useFetch(`/movie/${id}`);
  return (
    <div>
       <Topimage data={data} />
       <MovieDates/>
    </div>
  )
}

export default Cinema
