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

        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        
        // Calculate startIndex and endIndex for slicing the data
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedData = cinema.slice(startIndex, endIndex);
        const totalData = cinema.length
      
        if (req.query.q) {
            const query = req.query.q.toLowerCase();
            const results = paginatedData.filter(item => item.cinemaName.toLowerCase().includes(query));
            paginatedData=results
            res.status(201).send({paginatedData,totalData});
        }
        else{
            res.status(201).send({paginatedData,totalData});
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ROUTE 3: edit cinema using post http://localhost:8080/cinemas/editcinema
router.put("/editcinema/:id", async (req, res) => {
    try {
        let cinema = await Cinema.findOne({_id: req.params.id });
        if (!cinema) {
          return res
            .status(400)
            .json({ error: "cinema is not found" });
        }
       await Cinema.updateOne({_id:req.params.id},{$set: req.body})
      res.json({success:"cinema Updated"})  
    }
    catch (err) {
        console.error(err)
        res.status(500).send("internal server error")
    }
});

// ROUTE 4: delete cinema using GET http://localhost:8080/cinemas/deletecinema
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