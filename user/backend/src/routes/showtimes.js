const Showtime = require('../models/showtime');
const Cinema = require('../models/cinema');
const express = require('express');
const router = express.Router();

// ROUTE: add cinema using POST http://localhost:8080/show/addshowtime
router.post("/addshowtime", async (req, res) => {
    try {
       const showtime = new Showtime(req.body);
       
        //Validate that the cinemaId exists
        const cinemaExists = await Cinema.findById(showtime.cinemaId);
        if (!cinemaExists) {
            return res.status(404).json({ error: 'Cinema not found' });
        }
        // Save the showtime to the database
        await showtime.save();

        res.status(201).json(showtime);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ROUTE: get showtime using GET http://localhost:8080/show/getshowtime
router.get("/getshowtime/:cinemaId", async (req, res) => {
    try {
        const showtime=await Showtime.find({cinemaId:req.params.cinemaId})
        if (!showtime) {
            return res.status(404).json({ error: 'showtime not found' });
        }
        res.status(201).send(showtime);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ROUTE 3: delete showtime using DELETE http://localhost:8080/show/deleteshowtime
router.delete("/deleteshowtime/:id", async (req, res) => {
    try {
        await Showtime.findByIdAndDelete(req.params.id)
        res.status(201).send({success:"show are deketed"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports= router