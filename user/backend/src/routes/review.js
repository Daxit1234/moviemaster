const Review = require('../models/review');
const express = require('express');
const router = express.Router();

// ROUTE 1: add review using POST http://localhost:8080/review/addowner
router.post("/addreview", async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).send(review);
    } catch (e) {
        res.status(400).send(e);
    }
});


router.get("/getallreview", async (req, res) => {
    try {
        const review = await Review.find();
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        
        // Calculate startIndex and endIndex for slicing the data
        const totalData = review.length;
        const startIndex = Math.max(totalData - page * pageSize, 0);
        const endIndex = Math.max(totalData - (page - 1) * pageSize, 0);
        
        // Extract the data for the current page in reverse order
        const results = review.slice(startIndex, endIndex).reverse();
        
        res.status(201).send({ results, totalData });
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// ROUTE 4: delete review using GET http://localhost:8080/cinemas/deletecinema
router.delete("/deleteowner/:id", async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id)
        res.status(201).send({success:"review are deketed"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports= router