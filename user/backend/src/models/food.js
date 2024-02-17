const mongoose = require('mongoose');
const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['vegetarian', 'non-vegetarian'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String, 
        required: true
    },
    type:{
        type: String, 
        required: true
    }
    }
);

const Food=mongoose.model('Food',FoodSchema)
module.exports=Food