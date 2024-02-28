const Showtime = require("../models/showtime");
const Cinema = require("../models/cinema");
const express = require("express");
const router = express.Router();

// ROUTE: add cinema using POST http://localhost:8080/show/addshowtime
router.post("/addshowtime", async (req, res) => {
  // try {
  //   const { cinemaName, showType, time } = req.body;

  //   // Validate that the cinema exists
  //   const cinema = await Cinema.findOne({ cinemaName });
  //   if (!cinema) {
  //     return res.status(404).json({ error: "Cinema not found" });
  //   }

  //   // Create a new Showtime instance with cinema ID
  //   const showtime = new Showtime({
  //     cinemaId: cinema._id, // Assign the cinema ID
  //     time: time,
  //     showType: showType,
  //   });

  //   // Save the showtime to the database
  //   await showtime.save();

  //   res.status(201).json(showtime);
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
  try {
    const showTime = new Showtime(req.body);
    await showTime.save();
    res.status(201).send(showTime);
} catch (e) {
    res.status(400).send(e);
}
});

// ROUTE: get showtime using GET http://localhost:8080/show/getshowtime
router.get("/getshowtime/:cinemaId", async (req, res) => {
  try {
    const showtime = await Showtime.find({ cinemaId: req.params.cinemaId });
    if (!showtime) {
      return res.status(404).json({ error: "showtime not found" });
    }
    res.status(201).send(showtime);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ROUTE: get all showtime using GET http://localhost:8080/show/getallshowtime
router.get("/getallshowtime", async (req, res) => {
  try {
    const showtimes = await Showtime.find().populate("cinemaId", "cinemaName");
    res.status(201).send(showtimes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ROUTE 3: delete showtime using DELETE http://localhost:8080/show/deleteshowtime
router.delete("/deleteshowtime/:id", async (req, res) => {
  try {
    await Showtime.findByIdAndDelete(req.params.id);
    res.status(201).send({ success: "show are deketed" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ROUTE 5: edit showtime using PUT http://localhost:8080/show/editshow/:id

router.put("/editshow/:id", async (req, res) => {
  try {
    let show = await Showtime.findOne({ _id: req.params.id });
    if (!show) {
      return res.status(400).json({ error: "show is not found" });
    }
    await Showtime.updateOne(
      { _id: req.params.id },
      { $set: { time: req.body.time, showType: req.body.showType } }
    );
    res.json({ success: "show Updated" });
  } catch (err) {
    console.error(err);
    res.status(500).send("internal server error");
  }
});

module.exports = router;
