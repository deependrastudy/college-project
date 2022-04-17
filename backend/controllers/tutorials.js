const Model = require('../schema/tutorial');
const CategoryModel = require('../schema/categories');
const CoueseModel = require('../schema/courses');
const UserModel = require('../schema/users');
const addTutorial = async(req,res,next)=>{
    if (!req.file) {
        res.json({status:false,message:"Please Select Valid Image",data:{}})
    } else {
        if(req.body.title=='' || req.body.description=='' || req.body.video_link=='' || req.body.course=='' || req.body.caetgory=='') {
            res.json({status:false,message:"Please Send All Required Parameters",data:{}})
        } else {
            let author = await UserModel.findOne({_id: req.body.addedBy});
            req.body.authorName = author.name;
            let cat = await CategoryModel.findOne({_id: req.body.category});
            req.body.caetgoryName = cat.name;
            let course = await CoueseModel.findOne({_id: req.body.course});
            req.body.courseName = course.name;
            req.body.image = req.file.filename;
            Model.create(req.body).then((resp)=>{
                res.json({status:true,message:"Success",data:[]});
            });
        }
    }
}
const editTutorial = async(req,res,next)=>{
    if (req.file) {
        req.body.image = req.file.filename;
    }
    let cat = await CategoryModel.findOne({_id: req.body.category});
    req.body.caetgoryName = cat.name;
    let course = await CoueseModel.findOne({_id: req.body.course});
    req.body.courseName = course.name;
    Model.findOneAndUpdate({_id: req.params.id},req.body).then(function(resp){
        Model.findOne({_id: req.params.id}).then(function(resp){
            res.json({status:true,message:"Success",data:[]});
        });
    });
}
const deletetutorial = async(req,res,next)=>{
    Model.findOneAndDelete({_id: req.params.id}).then(function(resp){
        res.json({status:true,message:"Success",data:[]});
    });
}
const getTutorial = async(req,res,next)=>{
    const isExists = await Model.find();
    res.json({status:true,message:"Success",data:isExists})
}
const getTutorialById = async(req,res,next)=>{
    const isExists = await Model.findOne({_id: req.params.id});
    res.json({status:true,message:"Success",data:isExists})
}
const getTutorialByAuthor = async(req,res,next)=>{
    const isExists = await Model.findOne({addedBy: req.params.author});
    res.json({status:true,message:"Success",data:isExists})
}
const getTutorialbyStatus = async(req,res,next)=>{
    const isExists = await Model.find({status:req.params.status});
    res.json({status:true,message:"Success",data:isExists})
}
const changeTutorialStatus = async(req,res,next)=>{
    Model.findOneAndUpdate({_id: req.params.id},req.body).then(function(resp){
        Model.findOne({_id: req.params.id}).then(function(resp){
            res.json({status:true,message:"Success",data:[]});
        });
    });
}
exports.addTutorial = addTutorial;
exports.editTutorial = editTutorial;
exports.getTutorial = getTutorial;
exports.deletetutorial = deletetutorial;
exports.getTutorialbyStatus = getTutorialbyStatus;
exports.changeTutorialStatus = changeTutorialStatus;
exports.getTutorialById = getTutorialById;
exports.getTutorialByAuthor = getTutorialByAuthor;