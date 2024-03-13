import React, { useState } from 'react';
import './BookingCard.scss'; 
import FeedBack from '../Models/FeedBack';
import QRCode from 'react-qr-code';

const BookingCard = ({ data }) => {
   let handleDeleteTicket=(id)=>{
     fetch(`http://localhost:8080/bookedSeats/deleteuserbooking/${id}`,{
        method:"DELETE"
     })
     window.location.reload()
   }
   const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    // Extract day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
  
    // Concatenate in the desired format
    const formattedDate = `${day}-${month}-${year}`;
    
    return formattedDate;
  };
  let date=formatDate(data?.date)
    return (
        <div className="col-md-4 d-flex cpl-sm-1 cardWrap  my-2">
            <div className="customcard cardLeft">
                <h1><span>{data.cinemaName}</span></h1>
                <div className="movie-title">
                    <h2 className='movie-name'>{data.movieName}</h2>
                    <span>Movie</span>
                </div>
                <div className='d-flex justify-content-between'>
                <div className="user-name">
                    <h2 className='movie-name'>{data.userName}</h2>
                    <span>Name</span>
                </div>
                <div className="user-name">
                    <h2 className='movie-name'>{data.showType}</h2>
                    <span>Type</span>
                </div>

                </div>
                <div className="book-seat">
                    <h2 className='movie-name'>{data.seats.join(', ')}</h2> {/* Join seats with comma */}
                    <span>Seat</span>
                </div>
                <div className="time">
                    <h2 className='movie-name'>{data.showTime}</h2> {/* Assuming showTime is a string */}
                    <span>Time</span>
                </div>
            </div>
            <div className="customcard cardRight">
                <div className='text-right mr-2' onClick={()=>handleDeleteTicket(data._id)}>

                <i class="fa-solid fa-trash" style={{position:"absolute"}}></i>
                </div>
                <div className="eye"></div>
                <div className='text-dark mt-3 position-absolute pl-2'>{date}</div>
                <div className="number" >
                    <h3>{data.seats.length}</h3>
                    <span>Seat</span>
                </div>
                <div className='text-center'>
                 <QRCode value="iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK+SURBVO3BQW7kQAwEwSxC//9yro88NSBI4/UQjIg/WGMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRrl4qEk/CaVkyScqNyRhN+k8kSxRinWKMUa5eJlKm9KwkkSTlTepPKmJLypWKMUa5RijXLxYUm4Q+UOlS4JJ0k4UbkjCXeofFKxRinWKMUa5WIYlS4JJyqTFGuUYo1SrFEuvlwSTlROktCpfLNijVKsUYo1ysWHqXySyv+k8pcUa5RijVKsUS5eloTflIROpUtCp/JEEv6yYo1SrFGKNUr8wWBJuEPlmxVrlGKNUqxRLh5KQqfSJaFT6ZLQqXRJ6FROktCpdEnoVJ5IQqdykoRO5U3FGqVYoxRrlIuHVN6UhE7lDpUuCZ3KHUnoVDqVJ5LQqTxRrFGKNUqxRrl4WRI6lS4JncpJEjqVLglPJKFT6VROkvCXFGuUYo1SrFHiDx5IwonKSRI6lb8kCZ3KE0noVN5UrFGKNUqxRrl4SKVLQpeETuWOJJyonCShU+mS0KnckYRO5UTlk4o1SrFGKdYo8QdfLAlPqHRJ6FS6JHQqJ0m4Q+WJYo1SrFGKNcrFQ0n4TSqdykkSnkjCNynWKMUapVijXLxM5U1J+KQknKh0SeiS0Kl0Kr+pWKMUa5RijXLxYUm4Q+WOJHQqd6h0SeiScKJyRxJOVJ4o1ijFGqVYo1x8OZUuCZ3KHSpdEp5IwonKm4o1SrFGKdYoF18uCSdJ6FS6JHQqncpJEjqVE5UuCZ3KE8UapVijFGuUiw9T+SSVLgmdyonKSRI6lTtUuiR0Km8q1ijFGqVYo1y8LAm/KQknSehUuiR0KidJ6FSeSEKn8kSxRinWKMUaJf5gjVGsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5R/UIUZ63ue2EIAAAAASUVORK5CYII=" size={55} />

                </div>
                <div className='text-primary' data-toggle="modal" data-target="#exampleModalCenter" >
                GiveRating
                </div>
                <FeedBack id={data._id}/>
            </div>
        </div>
    );
};

export default BookingCard;
