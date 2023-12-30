const mongoose = require("mongoose");
const mongourl = "mongodb+srv://dakshitgodhani103:1234@moviemaster.zjbpggm.mongodb.net/movieMaster";
mongoose.connect(mongourl)
  .then(() => {
    console.log("connecting success");
  })
  .catch((e) => {
    console.log(e);
  });
