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

// // ROUTE 2: get review using GET http://localhost:8080/cinemas/getowner
// router.post("/getreview", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         let review = await Review.findOne({ email });
//         if (!review) {
//           return res
//             .status(400)
//             .json({ error: "Please try to login with correct email" });
//         }
//         if (password != review.password) {
//           return res.status(400).json({ error: "Please enter valid password" });
//         }
//         res.send(review);
//       } catch (error) {
//         res.send({error:error})
        
//       }
// });

router.get("/getallreview", async (req, res) => {
    try {
        let review = await Review.find();
        res.send(review);
      } catch (error) {
        res.send({error:error})   
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