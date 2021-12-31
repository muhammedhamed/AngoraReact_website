const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/CategoryController')
const userauthentication = require('../authentication/userauthentication')
const adminauthentication = require('../authentication/adminauthentication')


router.get('/getcategory', categoryController.getCategories)
router.post('/addcategory', userauthentication, adminauthentication, categoryController.addCategory)
router.delete('/deletecategory/:id', userauthentication, adminauthentication, categoryController.deleteCategory)
router.put('/updatecategory/:id', userauthentication, adminauthentication, categoryController.updateCategory)


module.exports = router;