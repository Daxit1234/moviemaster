const mongoose = require('mongoose');
const CinemaSchema = new mongoose.Schema({
    ownerId:{
        type:String,
        required:true
    },
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