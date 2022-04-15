const User = require("../Models/user");

const getUser = async (req,res) =>{
    try {
        const users = await User.find({});
        res.json(users)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
};

const  addUser  = async(res,req)=>{
    try {
        const user = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            token:req.body.token,
            date:req.body.date,
            userId:req.body.userId
        })
    
        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
}

module.exports={getUser, addUser};
