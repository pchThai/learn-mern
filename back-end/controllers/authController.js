const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
exports.register = async(req,res ,next) => {
    try{
        const user = await User.create(req.body);
        const token = jwt.sign({userID: user._id},process.env.APP_SECRET);
        res.status(200).json({
            status:'susccess',
            data:{ token, userName: user.name }
        })
    } catch(error){
        res.json(error);
    }
}

exports.login = async(req,res ,next) => {
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user){

        }
        if(bcrypt.compareSync(req.body.passworld, user.passworld)){
            const token = jwt.sign({userID: user._id}, process.env.APP_SECRET);
            res.status(200).json({
                status: 'susccess',
                data: {token, userName: user.name}
            })
        }else{

        }
    } catch(error){
        res.json(error);
    }
}

