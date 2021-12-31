const { check , validationResult} = require('express-validator');

exports.signupValidation = [
    check('FirstName').notEmpty().withMessage("Please Enter your first name"),
    check('LastName').notEmpty().withMessage("Please Enter your last name"),
    check('UserName').notEmpty().withMessage("Please Enter your user name"),
    check('Email').notEmpty().isEmail().withMessage("Please valid Email"),
    check('Password').notEmpty().withMessage("Please Enter your password"),
    check('Password').isLength({min: 8}).withMessage("password must be at least 8 characters")
],(req , res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        res.json(errors)
    }else{
        return;
    }
}


exports.loginValidation = [
    check('Email').notEmpty().isEmail().withMessage("Please valid Email"),
    check('Password').notEmpty().withMessage("Please Enter your password"),
    check('Password').isLength({min: 8}).withMessage("password must be at least 8 characters")
],(req , res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        res.json(errors)
    }else{
        return;
    }
}