const Model = require('../schema/categories');
const CategoryModel = require('../schema/categories');

const addCategory= async(req,res,next)=>{
    if (!req.file) {
        res.json({status:false,message:"Please Select Valid Image",data:{}})
    } else {
        if(!req.body.name) {
            res.json({status:false,message:"Please Send All Required Parameters",data:{}})
        } else {
            const data = new Model({
                name: req.body.name,
                image:req.file.filename,
                created_at: String(Date.now()),
            })
            try {
                data.save();
                res.json({status:true,message:"Success",data:[]});
            }
            catch (error) { 
                res.status(400).json({message: error.message})
            }
        }
    }
}
const getCategory = async(req,res,next)=>{
    const isExists = await Model.find();
    res.json({status:true,message:"Success",data:isExists})
}
const getCategoryByID = async(req,res,next)=>{
    const isExists = await Model.findOne({_id: req.params.id});
    res.json({status:true,message:"Success",data:isExists})
}
const getCategoryStatus = async(req,res,next)=>{
    const isExists = await Model.find({status:req.params.status});
    res.json({status:true,message:"Success",data:isExists})
}
const updateCategories = async(req,res,next)=>{
    if (req.file) {
        req.body.image = req.file.filename;
    }
    Model.findOneAndUpdate({_id: req.params.id},req.body).then(function(resp){
        Model.findOne({_id: req.params.id}).then(function(resp){
            res.json({status:true,message:"Success",data:[]});
        });
    });
}
const deleteCategories= async(req,res,next)=>{
    Model.findOneAndDelete({_id: req.params.id}).then(function(resp){
        res.json({status:true,message:"Success",data:[]});
    });
}
const changeCategoriesStatus = (req,res,next)=>{
    console.log(req.params.id,req.body);
    Model.findOneAndUpdate({_id: req.params.id},req.body).then(function(resp){
        Model.findOne({_id: req.params.id}).then(function(resp){
            res.json({status:true,message:"Success",data:[]});
        });
    });
}
exports.addCategory = addCategory;
exports.getCategory = getCategory;
exports.getCategoryStatus = getCategoryStatus;
exports.updateCategories = updateCategories;
exports.deleteCategories = deleteCategories;
exports.changeCategoriesStatus = changeCategoriesStatus;
exports.getCategoryByID = getCategoryByID;