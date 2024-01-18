// models/showtime.js

const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
    cinemaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cinema',
        required: true
    },
    time: {
        type: String,
        required: true
    },
    showType: {
        type: String,
        required: true
    },
    
});

const Showtime = mongoose.model('Showtime', showtimeSchema);

module.exports = Showtime;
