const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const usercontroller = {
  signup: async (req, res) => {
    try {
      const { FirstName, LastName, UserName, Email, Password } = req.body;

    

      const user = await User.findOne({ Email });
      if (user) return res.json({ msg: "The Email already exists." });

      
      const salt = await bcrypt.genSalt(10);
      newpassword = await bcrypt.hash(Password, salt);
      const newUser = new User({
        FirstName,
        LastName,
        UserName,
        Email,
        Password: newpassword,
      });

      await newUser.save();


      res.json({ msg: "Signup successed!" });

    } catch (error) {
      return res.json({ msg: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { Email, Password } = req.body;

      const user = await User.findOne({ Email });
      if (!user) {
        throw new Error("User doesn't exist!");
      }

      if (!bcrypt.compareSync(Password, user.Password)) {
        throw new Error("Incorrect Password");
      }

      const token = jwt.sign({id: user._id}, process.env.Access_Token)

      res.json({ token });

    } catch (error) {
      return res.json({ msg: error.message });
    }
  }
}


module.exports = usercontroller;
