const Model = require('../schema/courses');
const addCourse = async(req,res,next)=>{
    if (!req.file) {
        res.json({status:false,message:"Please Select Valid Image",data:{}})
    } else {
        if(req.body.name=='' || req.body.category=='' || req.body.categoryName=='' || req.body.price=='' || req.body.ducation==''  || req.body.status==''  ) {
            res.json({status:false,message:"Please Send All Required Parameters",data:{}})
        } else {
            req.body.image = req.file.filename;
            Model.create(req.body).then((resp)=>{
                res.json({status:true,message:"Success",data:[]});
            });
        }
    }
}
const editCourse = async(req,res,next)=>{
    if (req.file) {
        req.body.image = req.file.filename;
    }
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