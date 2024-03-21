const Cinema = require('../models/cinema');
const express = require('express');
const Showtime = require('../models/showtime');
const BookedSeat = require('../models/bookedSeat');
const router = express.Router();
const nodemailer = require("nodemailer");

let sendEmailForTicketdetails = (bookedseat) => {

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can change this to your email service provider
      auth: {
        user: "dakshitgodhani103@gmail.com", // Your email address
        pass: "uerv dnou gtjz wuut", // Your email password or app-specific password
      },
    });
  
    const sendmail = (bookedseat) => {
        const {userName,date,email,totalAmount, cinemaName, movieName, showTime, showType, seats } = bookedseat;
        const mailOptions = {
            from: "dakshitgodhani103@gmail.com", // Your email address
            to: email,
            subject: "🎬 Your Movie Ticket Details 🎟️",
            html: `
                <div style="background-color: #f2f2f2; padding: 20px; border-radius: 10px;">
                <img src="https://www.48hourslogo.com/48hourslogo_data/2019/01/26/81026_1548488572.jpg" alt="Movie Master Logo" style="display: block; margin: 0 auto; width: 200px;">
                    <h1 style="color: #ff4500; text-align: center; font-family: 'Arial', sans-serif;">Movie Master</h1>
                    <hr style="border: 1px solid #ddd;">
                    <p style="font-size: 16px;">Dear ${userName},</p>
                    <p style="font-size: 16px;">Your booking for the movie <strong>"${movieName}"</strong> at <strong>${cinemaName}</strong> has been confirmed.</p>
                    <p style="font-size: 16px;">📅 Date: ${new Date(date).toDateString()}</p>
                    <p style="font-size: 16px;">⏰ Show Time: ${showTime}</p>
                    <p style="font-size: 16px;">🎥 Show Type: ${showType}</p>
                    <p style="font-size: 16px;">🎟️ Seats: <strong>${seats.join(', ')}</strong></p>
                    <p style="font-size: 16px;">💰 Total Amount: ${totalAmount}</p>
                    <p style="font-size: 16px;">Thank you for choosing Movie Master. Sit back, relax, and enjoy the show!</p>
                    <p style="font-size: 16px;">Best regards,<br/>Movie Master Team</p>
                </div>
            `
        };      
          
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
    };
    
    sendmail(bookedseat);
  };

//   let bookedseat={
//     cinemaId: "65e2c5d08237b625b594f4d3",
//     showId: "65eaa5978e5c9dea2425d602",
//     movieId: 899718,
//     date: "2024-03-21T00:00:00.000Z",
//     totalAmount: 1539,
//     seats: [
//         "C7",
//         "C6",
//         "C5"
//     ],
//     userName: "daxit godhani",
//     email: "dakshitgodhani103@gmail.com",
//     cinemaName: "INOX:DR World",
//     movieName: "Yodha",
//     showTime: "10:00 PM",
//     showType: "3D",
//     _id: "65fc1099b8444cf6a80bd1f7",
//     __v: 0
// }
//   sendEmailForTicketdetails(bookedseat)
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
        sendEmailForTicketdetails(bookedseat)
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

// ROUTE 4: get user booked seat using GET http://localhost:8080/bookedSeats/getuserseat
router.post("/getuserbooking", async (req, res) => {
    try {
        const bookedseat = await BookedSeat.find({email:req.body.email});
        
        res.status(201).send( bookedseat );
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ROUTE 4: get user booked seat using GET http://localhost:8080/bookedSeats/getuserseat
router.delete("/deleteuserbooking/:id", async (req, res) => {
    try {
        await BookedSeat.findByIdAndDelete(req.params.id)
        res.status(201).send({success:"Ticket are deketed"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



module.exports= router