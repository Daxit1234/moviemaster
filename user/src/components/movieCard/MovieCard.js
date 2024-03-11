import React from 'react';
import Img from '../lazyLoading/Img';
import './MovieCard.css';
import CircleRating from '../circleRating/CircleRating';
import dayjs from 'dayjs';
import Genres from '../genres/Genres';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';

function MovieCard({ poster, rating, title, date, genres, id }) {
  const navigate = useNavigate();

  // Calculate the difference between the current date and the movie's release date
  const releaseDate = dayjs(date);
  const currentDate = dayjs();
  const diffInDays = currentDate.diff(releaseDate, 'day');

  // Check if the movie was released within the last one month
  const withinLastMonth = diffInDays <= 60;

  return (
    <div className='card-box' onClick={() => navigate(`/details/${id}`)}>
      {withinLastMonth&&
      <Badge style={{position:"absolute",right:"30px"}} badgeContent="Available" color="success"  className='badge'>
      </Badge>
      }
        <Img className="cardimg" src={poster} />
      <CircleRating rating={rating} />
      <div className='mt-2 movie-name-card'>{title}</div>
      <p className='release-date-card mt-2'>{dayjs(date).format("MMM D, YYYY")}</p>
      <div style={{ marginTop: "-10px" }}>
        <Genres genresid={genres} />
      </div>
    </div>
  );
}

export default MovieCard;
