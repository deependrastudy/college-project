const Model = require('../schema/users');
const list= async (req,res,next)=>{
    /*const data = new Model({
        name: "Demo",
        email: "Test@gmail.com",
        mobile: "985889898",
        password: "123456",
        created_at: String(Date.now()),
    })
    try {
        const dataToSave = data.save();
        const data1 = await Model.find();
        res.json(data1)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }*/
    res.send("Test Controller")
    res.end();
};
exports.list = list;