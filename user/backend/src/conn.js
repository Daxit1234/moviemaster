const mongoose = require("mongoose");
const mongourl = "mongodb://127.0.0.1:27017/movieMaster?directConnection=true";
mongoose.connect(mongourl)
  .then(() => {
    console.log("connecting success");
  })
  .catch((e) => {
    console.log(e);
  });
