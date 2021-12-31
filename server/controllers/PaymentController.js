const Payments = require('../models/Payment')
const Users = require('../models/User')


const PaymentController = {
    getPayments: async(req, res) =>{
        try {
            const payments = await Payments.find()
            res.json(payments)
        } catch (err) {
            return res.json({msg: err.message})
        }
    },
    createPayment: async(req, res) => {
        try {
            const user = await Users.findById(req.user.id)
            if(!user) return res.json({msg: "User does not exist."})

            const {paymentID , CVV , Country} = req.body;

            const {_id, FirstName , LastName , Email} = user;

            const newPayment = new Payments({
                user_id: _id, FirstName , LastName , Email, paymentID , CVV , Country
            })

            
            await newPayment.save()
            res.json({msg: "Payment Succes!"})
            
        } catch (err) {
            return res.json({msg: err.message})
        }
    }
}

module.exports = PaymentController;
