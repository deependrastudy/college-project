const Model = require('../schema/users');
const getAllUsers = async (req,res,next)=>{
    const isExists = await Model.find();
    res.json({status:true,message:"Success",data:isExists})
}
const getUsersbyID = async (req,res,next)=>{
    const isExists = await Model.find({id:req.prams.id});
    res.json({status:true,message:"Success",data:isExists})
}
exports.getAllUsers = getAllUsers;
exports.getUsersbyID = getUsersbyID;