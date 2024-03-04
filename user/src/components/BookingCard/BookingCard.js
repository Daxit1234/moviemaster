import React from 'react';
import './BookingCard.scss'; // Make sure to import your SCSS file

const BookingCard = ({ data }) => {
    return (
        <div className="col-4 cardWrap mx-0 my-2">
            <div className="customcard cardLeft">
                <h1>Cinema: <span>{data.cinemaName}</span></h1>
                <div className="movie-title">
                    <h2 className='movie-name'>{data.movieName}</h2>
                    <span>Movie</span>
                </div>
                <div className="user-name">
                    <h2 className='movie-name'>{data.userName}</h2>
                    <span>Name</span>
                </div>
                <div className="book-seat">
                    <h2 className='movie-name'>{data.seats.join(', ')}</h2> {/* Join seats with comma */}
                    <span>Seat(s)</span>
                </div>
                <div className="time">
                    <h2 className='movie-name'>{data.showTime}</h2> {/* Assuming showTime is a string */}
                    <span>Time</span>
                </div>
            </div>
            <div className="customcard cardRight">
                <div className="eye"></div>
                <div className="number">
                    <h3>{data.seats.length}</h3>
                    <span>Seat</span>
                </div>
                <div className="barcode"></div>
            </div>
        </div>
    );
};

export default BookingCard;
