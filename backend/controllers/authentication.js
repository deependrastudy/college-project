const Model = require('../schema/users');
const jwt = require("jsonwebtoken");
const login= async (req,res,next)=>{
    if(!req.body.email || !req.body.password) {
        res.json({status:false,message:"Please Send All Required Parameters",data:{}})
    } else {
        const isExists = await Model.find({email:req.body.email,password:req.body.password});
        if(isExists.length>0) {
            token = jwt.sign(
                { userId: isExists[0].id, email: isExists[0].email },
                "EDUCATION",
                { expiresIn: "1h" }
            );
            res.json({status:true,message:"Success",data:isExists[0],accessToken:token})
        } else {
            res.json({status:false,message:"Username and Password Not Match",data:{}})
        }
    }
    res.end();
};
const signUp= async (req,res,next)=>{
    if(!req.body.name|| !req.body.email || !req.body.mobile || !req.body.password || !req.body.type) {
        res.json({status:false,message:"Please Send All Required Parameters",data:{}})
    } else {
        const isExists = await Model.find({email:req.body.email});
        if(isExists.length>0) {
            res.json({status:false,message:"Email Already Esists",data:{}})
        } else {
            console.log(req.body);
            const data = new Model({
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                password: req.body.password,
                type:req.body.type,
                created_at: String(Date.now()),
            })
            try {
                data.save();
                res.json({status:true,message:"Success",data:await Model.find({email:req.body.email})});
            }
            catch (error) {
                res.status(400).json({message: error.message})
            }
        }
    }
    res.end();
}
exports.login = login;
exports.signUp = signUp;