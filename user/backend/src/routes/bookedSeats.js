const Cinema = require('../models/cinema');
const express = require('express');
const Showtime = require('../models/showtime');
const BookedSeat = require('../models/bookedSeat');
const router = express.Router();

// ROUTE 1: book seat using POST http://localhost:8080/bookedSeats/bookseat
router.post("/bookSeat", async (req, res) => {
    try {
        const bookedseat = new BookedSeat(req.body);
       
        //Validate that the cinemaId exists
        const cinemaExists = await Cinema.findById(bookedseat.cinemaId);
        if (!cinemaExists) {
            return res.status(404).json({ error: 'Cinema not found' });
        }
        //Validate that the showId exists
        const showExists = await Showtime.findById(bookedseat.showId);
        if (!showExists) {
            return res.status(404).json({ error: 'Show not found' });
        }
        //Validate that the booking exists
        const bookedSeatExists = await BookedSeat.findOne({
            cinemaId: bookedseat.cinemaId,
            showId: bookedseat.showId,
            movieId: bookedseat.movieId,
            date: bookedseat.date,
            seats: { $in: bookedseat.seats }
        });

        if (bookedSeatExists) {
            return res.status(400).json({ error: 'Seats are already booked' });
        }
        // Save the bookedseat to the database
        await bookedseat.save();

        res.status(201).json(bookedseat);
    } catch (e) {
        res.status(400).send(e);
    }
});

// ROUTE 2: get booked seat using GET http://localhost:8080/bookedSeats/getseat
router.post("/getseat", async (req, res) => {
    try {
        const bookedseat = new BookedSeat(req.body);
        const SeatsNo = await BookedSeat.find({
            cinemaId: bookedseat.cinemaId,
            showId: bookedseat.showId,
            movieId: bookedseat.movieId,
            date: bookedseat.date
        },{seats:1,_id:0})
        const allSeatsArray = SeatsNo.flatMap(data => data.seats);
        res.status(201).send(allSeatsArray);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ROUTE 2: get all booked seat using GET http://localhost:8080/bookedSeats/getallseat
router.get("/getallbooking", async (req, res) => {
    try {
        const bookedseat = await BookedSeat.find();
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        
        // Calculate startIndex and endIndex for slicing the data
        const totalData = bookedseat.length;
        const startIndex = Math.max(totalData - page * pageSize, 0);
        const endIndex = Math.max(totalData - (page - 1) * pageSize, 0);
        
        // Extract the data for the current page in reverse order
        const results = bookedseat.slice(startIndex, endIndex).reverse();
        
        res.status(201).send({ results, totalData });
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



module.exports= router