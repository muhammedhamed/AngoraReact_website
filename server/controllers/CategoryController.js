const Category = require("../models/Category");
const Courses = require("../models/Course");

const CategoryController = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      return res.json({ msg: error.message });
    }
  },
  addCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category.findOne({ name });
      if (category) return res.json({ msg: "Category already exists." });

      const newCategory = new Category({ name });

      await newCategory.save();
      res.json({ msg: "Successed create" });
    } catch (error) {
      return res.json({ msg: error.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const courses = await Courses.findOne({ category: req.params.id });
      if (courses)
        return res.json({
          msg: "Please delete all courses",
        });

      await Category.findByIdAndDelete(req.params.id);
      res.json({ msg: "Successed delete" });
    } catch (error) {
      return res.json({ msg: error.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.findOneAndUpdate({ _id: req.params.id }, { name });

      res.json({ msg: "Successed update" });
    } catch (error) {
      return res.json({ msg: error.message });
    }
  },
};

module.exports = CategoryController;
