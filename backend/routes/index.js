const express = require('express');
const frontController = require('../controllers/front');
const authController = require("../controllers/authentication");
const userapis = require("../controllers/users");
const categoryapis = require("../controllers/categories");
const coursesApis = require("../controllers/courses");
const path = require('path');
const app = express();
var multer  =   require('multer');
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});
    

app.get('/',frontController.list);
/* Auth APIS */
app.post('/sign-up',authController.signUp);
app.post('/log-in',authController.login);

/* Users APIs */
app.get('/get-users',userapis.getAllUsers);
app.get('/get-users-by-id/:id',userapis.getUsersbyID);

/* Categories APIs */
app.post('/create-category',upload.single('image'),categoryapis.addCategory);
app.get('/get-category',categoryapis.getCategory);
app.get('/get-category-status/:status',categoryapis.getCategoryStatus);
app.get('/delete-category/:id',categoryapis.deleteCategories);
app.post('/update-category/:id',upload.single('image'),categoryapis.updateCategories);
app.post('/change-category-status/:id',categoryapis.changeCategoriesStatus);

/* Course APIs */
app.post('/create-course',upload.single('image'),coursesApis.addCourse);
app.post('/update-course/:id',upload.single('image'),coursesApis.editCourse);
app.get('/delete-course/:id',coursesApis.deleteCourse);
app.get('/get-course',coursesApis.getCourse);
app.get('/course-by-status/:status',coursesApis.getCoursebyStatus);
app.post('/change-course-status/:id',coursesApis.changeCourseStatus);

module.exports = app;