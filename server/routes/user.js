const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/UserController')
const {signupValidation , loginValidation } = require('../validation/checkvalidation')

router.post('/signup' , signupValidation  , usercontroller.signup)
router.post('/login' , loginValidation ,  usercontroller.login)


module.exports = router;