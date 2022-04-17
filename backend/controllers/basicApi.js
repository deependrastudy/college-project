const CartModel = require('../schema/categories');
const CoueseModel = require('../schema/courses');
const purchaseTutorial = require('../schema/purchaseTutorial');
const userModel = require('../schema/users');
const addCart = async(req,res,next)=>{
    let isExists = await CartModel.findOne({course_id: req.body.course_id,user_id:req.body.user_id});
    if(isExists.length) {
        Model.findOneAndUpdate({_id: isExists[0].id},{qty:String(Number(isExists[0].qty)+1)}).then(function(resp){
            res.json({status:true,message:"Success",data:[]});
        });
    } else {
        let course = await CoueseModel.findOne({_id: req.body.course_id});
        req.body.courseName = course[0].name;
        CartModel.create(req.body).then((resp)=>{
            res.json({status:true,message:"Success",data:[]});
        });
    }
}
const getCart = async(req,res,next)=>{
    const isExists = await CartModel.find({user_id:req.params.user_id});
    res.json({status:true,message:"Success",data:isExists})
}
const addpurchaseTutorial = async(req,res,next) =>{
    let tutorial_info = await CoueseModel.findOne({_id: req.body.tutorial_id});
    let user_info = await userModel.findOne({_id: req.body.tutorial_id});
    req.body.tutorial_json = JSON.stringify(tutorial_info);
    req.body.user_json = JSON.stringify(user_info);
    req.body.addedBy = tutorial_info[0].addedBy;
    purchaseTutorial.create(req.body).then((resp)=>{
        res.json({status:true,message:"Success",data:[]});
    });
}
const getpurchaseTutorial = async(req,res,next)=>{
    let resp  = await purchaseTutorial.find();
    res.json({status:true,message:"Success",data:resp});
}
const getpurchaseTutorialbyauthor = async(req,res,next)=>{
    let resp  = await purchaseTutorial.find({addedBy:req.params.id});
    res.json({status:true,message:"Success",data:resp});
}
const getpurchaseTutorialbyuser = async(req,res,next)=>{
    let resp  = await purchaseTutorial.find({user_id:req.params.id});
    res.json({status:true,message:"Success",data:resp});
}
const getpurchaseTutorialbyid = async(req,res,next)=>{
    let resp  = await purchaseTutorial.find({_id: req.params.id});
    res.json({status:true,message:"Success",data:resp});
}
exports.addCart = addCart;
exports.getCart = getCart;
exports.addpurchaseTutorial = addpurchaseTutorial;
exports.getpurchaseTutorial = getpurchaseTutorial;
exports.getpurchaseTutorialbyauthor = getpurchaseTutorialbyauthor;
exports.getpurchaseTutorialbyuser = getpurchaseTutorialbyuser;
exports.getpurchaseTutorialbyid = getpurchaseTutorialbyid;