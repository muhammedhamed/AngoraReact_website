const mongoose = require('mongoose')


const paymentSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    paymentID:{
        type: String,
        required: true
    },
    CVV:{
        type: Number,
        required: true
    },
    Country:{
        type: String,
        required: true
    },

})


module.exports = mongoose.model("Payments", paymentSchema)