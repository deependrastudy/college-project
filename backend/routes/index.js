const express = require('express');
const frontController = require('../controllers/front');
const authController = require("../controllers/authentication");
const userapis = require("../controllers/users");
const categoryapis = require("../controllers/categories");
const coursesApis = require("../controllers/courses");

const app = express();
app.get('/',frontController.list);
/* Auth APIS */
app.post('/sign-up',authController.signUp);
app.post('/log-in',authController.login);

/* Users APIs */
app.get('/get-users',userapis.getAllUsers);
app.get('/get-users-by-id/:id',userapis.getUsersbyID);

/* Categories APIs */
app.post('/create-category',categoryapis.addCategory);
app.get('/get-category',categoryapis.getCategory);
app.get('/get-category-status/:status',categoryapis.getCategoryStatus);
app.get('/delete-category/:id',categoryapis.deleteCategories);
app.post('/update-category/:id',categoryapis.updateCategories);
app.post('/change-category-status/:id',categoryapis.changeCategoriesStatus);

/* Course APIs */
app.post('/create-course',coursesApis.addCourse);
app.post('/update-course/:id',coursesApis.editCourse);
app.get('/delete-course/:id',coursesApis.deleteCourse);
app.get('/get-course',coursesApis.getCourse);
app.get('/course-by-status/:status',coursesApis.getCoursebyStatus);
app.post('/change-course-status/:id',coursesApis.changeCourseStatus);

module.exports = app;