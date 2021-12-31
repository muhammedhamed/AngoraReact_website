const mongoose = require('mongoose');

const Course_Schema = mongoose.Schema({
    CourseId :{
        type : Number ,
        required : true,
        unique : true
    } ,

    CourseTitle :{
        type : String ,
        required : true
    } ,

    Price :{
        type : Number ,
        required : true
    } ,

    CourseInfo :{
        type : String ,
        required : true 
    } , 

    Images :{
        type : Object ,
        required : true
    } ,
    Category:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Courses' , Course_Schema);