const mongoose = require("mongoose");
const mongourl = "mongodb+srv://dakshitgodhani103:1234@moviemaster.zjbpggm.mongodb.net/movieMaster";
// const mongourl = "mongodb://localhost:27017/booking?directConnection=true";
mongoose.connect(mongourl)
  .then(() => {
    console.log("connecting success");
  })
  .catch((e) => {
    console.log(e);
  });
