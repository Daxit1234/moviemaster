const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    paymentId:{
        type:String,
        required: true
    },
    totalAmount:{
        type:Number,
        required: true
      
    }
}
);

const Payment=mongoose.model('payment',PaymentSchema)
module.exports=Payment