const mongoose = require('mongoose');
const CinemaSchema = new mongoose.Schema({
    cinemaName:{
        type:String,
        require:true
    },
    address:{ 
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true,
    },
    locationUrl:{
        type:String,
        require:true
    }
    }
);

const Cinema=mongoose.model('Cinema',CinemaSchema)
module.exports=Cinema