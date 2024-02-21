const Food=require("../models/food")
const express = require('express');
const router = express.Router();

// ROUTE 1: add food using POST http://localhost:8080/food/addfood
router.post("/addfood", async (req, res) => {
    try {
        const food = new Food(req.body);
        await food.save();
        res.status(201).send(food);
    } catch (e) {
        res.status(400).send(e);
    }
});

// ROUTE 2: get food using GET http://localhost:8080/food/gefood
router.get("/getfood", async (req, res) => {
    try {
        const food = await Food.find()
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        
        // Calculate startIndex and endIndex for slicing the data
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const results = food.slice(startIndex, endIndex);
        const totalData = food.length
        if (req.query.q) {
            const query = req.query.q.toLowerCase();
            const data = results.filter(item => item.type.toLowerCase().includes(query));
            results=data
            res.status(201).send({results,totalData});
        }else{
            res.status(201).send({results,totalData});
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ROUTE 3: delete food using Delete http://localhost:8080/food/deletefood
router.delete("/deletefood/:id", async (req, res) => {
    try {
        await Food.findByIdAndDelete(req.params.id)
        res.status(201).send({success:"food are deketed"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ROUTE 4: edit food using put http://localhost:8080/food/editfood
router.put("/editfood/:id", async (req, res) => {
    try {
        let food = await Food.findOne({_id: req.params.id });
        if (!food) {
          return res
            .status(400)
            .json({ error: "food is not found" });
        }
       await Food.updateOne({_id:req.params.id},{$set: req.body})
      res.json({success:"food Updated"})  
    }
    catch (err) {
        console.error(err)
        res.status(500).send("internal server error")
    }
});

module.exports =router