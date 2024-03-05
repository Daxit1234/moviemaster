const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    bookingId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment:{
        type:String,
        required:true
    }
}
);

const Review=mongoose.model('review',ReviewSchema)
module.exports=Review