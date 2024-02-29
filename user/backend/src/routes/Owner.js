const Owner = require('../models/owner');
const express = require('express');
const router = express.Router();

// ROUTE 1: add owner using POST http://localhost:8080/owner/addowner
router.post("/addowner", async (req, res) => {
    try {
        const owner = new Owner(req.body);
        await owner.save();
        res.status(201).send(owner);
    } catch (e) {
        res.status(400).send(e);
    }
});

// ROUTE 2: get owner using GET http://localhost:8080/cinemas/getowner
router.post("/getowner", async (req, res) => {
    try {
        const { email, password } = req.body;
        let owner = await Owner.findOne({ email });
        if (!owner) {
          return res
            .status(400)
            .json({ error: "Please try to login with correct email" });
        }
        if (password != owner.password) {
          return res.status(400).json({ error: "Please enter valid password" });
        }
        res.send(owner);
      } catch (error) {
        res.send({error:error})
        
      }
});

router.get("/getallowner", async (req, res) => {
    try {
        let owner = await Owner.find();
        res.send(owner);
      } catch (error) {
        res.send({error:error})   
      }
});


// ROUTE 4: delete owner using GET http://localhost:8080/cinemas/deletecinema
router.delete("/deleteOwner/:id", async (req, res) => {
    try {
        await Owner.findByIdAndDelete(req.params.id)
        res.status(201).send({success:"owner are deketed"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports= router