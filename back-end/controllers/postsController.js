const Post = require('../models/Post')

//Get All Post
exports.getAllPosts = async(req,res,next) =>{
    try{
        const posts = await Post.find({}).populate('author');
        res.status(200).json({
            status: 'sucess',
            results: posts.length,
            data:{posts}
        })
    }catch(error){
        res.json(error)
    }
}

// Create One Post
exports.createOnePost = async(req,res,next) =>{
    try{
        const {userId} = req.user;
        const post = await Post.create({...req.body, author: userId});
        res.status(200).json({
            status: 'sucess',
            data:{post}
        })
    }catch(error){
        res.json(error)
    }
}

// Update One Post
exports.updateOnePost = async(req,res,next) =>{
    try{
        const {postId} = req.params;

        const post = await Post.findByIdanUpdate(postId,{...req.body},{new:true, runVadilator:true});
        res.status(200).json({
            status: 'sucess',
            data:{post}
        })
    }catch(error){
        res.json(error)
    }
}
// Delete One Post
exports.deleteOnePost = async(req,res,next) =>{
    try{
        const {postId} = req.params;
        await Post.findByIdanUpdate(postId);

        const post = Post.create({...req.body, author: userID});
        res.status(200).json({
            status: 'sucess',
            message: 'Post has been deleted'
        })
    }catch(error){
        res.json(error)
    }
}

