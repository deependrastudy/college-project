const Model = require('../schema/courses');
var multer  =   require('multer');
var storage =   multer.diskStorage({  
    destination: function (req, file, callback) {  
      callback(null, './public/');  
    },  
    filename: function (req, file, callback) {  
      callback(null, file.originalname);  
    }  
  });  
var upload = multer({ storage : storage}).single('image');    
//https://www.javatpoint.com/expressjs-file-upload
const addCourse = async(req,res,next)=>{
    /*console.log("req",req.files); 
    upload(req,res,function(err) {  
        if(err) {
            console.log(err)  
            return res.end("Error uploading file.");  
        }  
        res.end("File is uploaded successfully!");  
    }); 
    return false; */
    if(req.body.name=='' || req.body.category=='' || req.body.categoryName=='' || req.body.price=='' || req.body.ducation==''  || req.body.status==''  ) {
        res.json({status:false,message:"Please Send All Required Parameters",data:{}})
    } else {
        console.log()
        Model.create(req.body).then((resp)=>{
            res.json({status:true,message:"Success",data:[]});
        });
    }
}
const editCourse = async(req,res,next)=>{
    console.log("A");
    console.log("req.params.id",req.params.id);
    Model.findOneAndUpdate({_id: req.params.id},req.body).then(function(resp){
        Model.findOne({_id: req.params.id}).then(function(resp){
            res.json({status:true,message:"Success",data:[]});
        });
    });
}
const deleteCourse = async(req,res,next)=>{
    Model.findOneAndDelete({_id: req.params.id}).then(function(resp){
        res.json({status:true,message:"Success",data:[]});
    });
}
const getCourse = async(req,res,next)=>{
    const isExists = await Model.find();
    res.json({status:true,message:"Success",data:isExists})
}
const getCoursebyStatus = async(req,res,next)=>{
    const isExists = await Model.find({status:req.params.status});
    res.json({status:true,message:"Success",data:isExists})
}
const changeCourseStatus = async(req,res,next)=>{
    Model.findOneAndUpdate({_id: req.params.id},req.body).then(function(resp){
        Model.findOne({_id: req.params.id}).then(function(resp){
            res.json({status:true,message:"Success",data:[]});
        });
    });
}
exports.addCourse = addCourse;
exports.editCourse = editCourse;
exports.deleteCourse = deleteCourse;
exports.getCourse = getCourse;
exports.getCoursebyStatus = getCoursebyStatus;
exports.changeCourseStatus = changeCourseStatus;