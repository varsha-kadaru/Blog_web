const router=require("express").Router();
const User=require("../models/User")
const bcrypt=require("bcrypt");
//register
router.post("/register",async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10)
        const hashpassword=await bcrypt.hash(req.body.password,salt);
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashpassword
        });
        const user=await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
})

//login
router.post("/login",async(req,res)=>{
    try{
        const user=await User.findOne({
            username:req.body.username
        })
        if(!user) 
            return res.status(400).json("Wrong credentials");
        const validate=await bcrypt.compare(req.body.password,user.password)
        if(!validate) 
            return res.status(400).json("Wrong credentials");

        const {password,...others}=user._doc //excepts password all are sent as res

        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports=router
