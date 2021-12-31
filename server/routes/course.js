const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/CourseController')
const userauthentication = require('../authentication/userauthentication')
const adminauthentication = require('../authentication/adminauthentication')


router.get('/getcourses', CourseController.getCourse);
router.post('/addcourses', userauthentication , adminauthentication , CourseController.addCourse);
router.delete('/deletecourses/:id', userauthentication , adminauthentication , CourseController.deleteCourse);
router.put('/updatecourses/:id',  userauthentication , adminauthentication , CourseController.updateCourse);


module.exports = router;