const router=require("express").Router();
const User=require("../models/User");
const bcrypt=require("bcrypt");
const Post=require("../models/Post");


//create post
router.post("/",async(req,res)=>{
    const newPost=new Post(req.body);
    try{
        const savedPost= await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err){
        res.status(500).json(err);
    }
})

//update post
router.put("/:id",async(req,res)=>{
    try{
        const post= await Post.findById(req.params.id);
        if(post.username===req.body.username){
            try{
                const updatedPost=await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body

                },{new:true})
                res.status(200).json(updatedPost)
            }
            catch(err){
                res.status(500).json(err);
            }
        }
        else{
            res.status(101).json("you can only update ur post");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})

//delete post
router.delete("/:id",async(req,res)=>{
    if(req.body.postId===req.params.id)
    {  
        try{
            const user=await Post.findByIdAndDelete(req.params.id)
            try{
                await Post.findByIdAndDelete(req.params.id)
                res.status(200).json("Post has been deleted!!")
            }
            catch(err){
                res.status(500).json(err);
            }
        }
        catch(err){
            res.status(404).json("User not found");
        }
    }
    else{
        res.status(401).json("you can delete only your post");
    }
})



//  get post
router.get("/:id",async (req,res)=>{
    try{
        const post=await Post.findById(req.params.id)
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err)
    }
})


//get all posts
router.get("/",async (req,res)=>{
    const username=req.query.user;
    const catName=req.query.cat;
    try{
        let posts;
        if(username){
            posts=await Post.find({username}) //username:username
        }
        else if(catName){
            posts=await Post.find({categories:{
                $in:[catName]
            }})
        }
        else{
            posts = await Post.find();
        }
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router;