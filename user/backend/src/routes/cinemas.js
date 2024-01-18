const Cinema = require('../models/cinema');
const express = require('express');
const Showtime = require('../models/showtime');
const router = express.Router();

// ROUTE 1: add cinema using POST http://localhost:8080/cinema/addcinema
router.post("/addcinema", async (req, res) => {
    try {
        const cinema = new Cinema(req.body);
        await cinema.save();
        res.status(201).send(cinema);
    } catch (e) {
        res.status(400).send(e);
    }
});

// ROUTE 2: get cinema using GET http://localhost:8080/cinemas/getcinema
router.get("/getcinema", async (req, res) => {
    try {
        const cinema = await Cinema.find()
        res.status(201).send(cinema);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ROUTE 2: delete cinema using GET http://localhost:8080/cinemas/deletecinema
router.delete("/deletecinema/:id", async (req, res) => {
    try {
        await Cinema.findByIdAndDelete(req.params.id)
        await Showtime.deleteMany({cinemaId:req.params.id})
        res.status(201).send({success:"cinema are deketed"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports= router