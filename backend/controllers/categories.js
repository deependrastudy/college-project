const Model = require('../schema/categories');
const addCategory= async(req,res,next)=>{
    if(!req.body.name) {
        res.json({status:false,message:"Please Send All Required Parameters",data:{}})
    } else {
        const data = new Model({
            name: req.body.name,
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
const getCategory = async(req,res,next)=>{
    const isExists = await Model.find();
    res.json({status:true,message:"Success",data:isExists})
}
const getCategoryStatus = async(req,res,next)=>{
    const isExists = await Model.find({status:req.params.status});
    res.json({status:true,message:"Success",data:isExists})
}
const updateCategories = async(req,res,next)=>{
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