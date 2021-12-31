const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/PaymentController')
const userauthentication = require('../authentication/userauthentication')
const adminauthentication = require('../authentication/adminauthentication')



router.get('/Checkout',userauthentication, adminauthentication, paymentController.getPayments)
router.post('/Checkout',userauthentication, paymentController.createPayment)


module.exports = router