const mongoose = require('mongoose');
const OwnerSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
}
);

const Owner=mongoose.model('owner',OwnerSchema)
module.exports=Owner