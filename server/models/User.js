const mongoose = require('mongoose');

const User_Schema = mongoose.Schema({
    role :{
        type : String ,
        default : 'user'  
    } ,
    FirstName :{
        type : String ,
        required : true 
    } ,

    LastName :{
        type : String ,
        required : true 
    } ,

    UserName :{
        type : String ,
        required : true ,
        unique : true 
    } ,

    Email :{
        type : String ,
        required : true ,
        unique : true ,
    },

    Password :{
        type : String ,
        required : true 
    }  
});

module.exports = mongoose.model('User' , User_Schema);