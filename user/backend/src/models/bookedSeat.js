const mongoose = require('mongoose');
const BookedSeatSchema = new mongoose.Schema({
    cinemaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cinema',
        required: true
    },
    showId:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Showtime',
        required: true
    },
    movieId:{ 
        type: Number,
        required: true
    },
    date:{
        type:Date,
        require:true
    },
    totalAmount:{
        type:Number,
        require:true
    },
    seats:{
        type:Array,
        require:true,
        default:[]
    },  
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    }
);

const BookedSeat=mongoose.model('BookedSeat',BookedSeatSchema)
module.exports=BookedSeat