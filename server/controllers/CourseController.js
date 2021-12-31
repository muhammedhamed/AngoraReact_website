const express = require("express");
const Course = require("../models/Course");



const coursecontroller = {
  getCourse: async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      throw new Error({ msg: error.message });
    }
  },
  addCourse: async (req, res) => {
    try {
      const {CourseId , CourseTitle , Price , CourseInfo , Images , category} = req.body;
      if(!Images) return res.json({msg: "No image upload"})

      const course = await Course.findOne({CourseId})
      if (course) {
        throw new Error("Course already exist!");
      }

      const newCourse = new Course({
        CourseId,
        CourseTitle,
        Price,
        CourseInfo,
        Images,
        category
      });

      await newCourse.save();
      res.json({msg : "The course has been added"})
    } catch (error) {
      return res.json({msg : error.message})
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const course = await Course.findByIdAndDelete(req.params.id);
      
      res.json({msg : "Successfully deleted"});
    } catch (error) {
      throw new Error({ msg: error.message });
    }
  },

  updateCourse: async (req, res) => {
    try {
      const {CourseTitle , Price , CourseInfo , Images} = req.body;
      await Course.findByIdAndUpdate({ _id : req.params.id} , {
          CourseTitle,
          Price,
          CourseInfo,
          Images
      })
      
      res.json({msg : "Successfully updated"});
    } catch (error) {
      throw new Error({ msg: error.message });
    }
  },
};

module.exports = coursecontroller;


