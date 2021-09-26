const jwt = require('jsonwebtoken')
exports.verifyToken = (req, res, next)=>{
    //Access Authorization from header
     const Authorization = req.header('authorization');
     if(!Authorization){
         //Error: Unautorization    
     }
     //Get Token
     const Token = Authorization.replace('Baerer ','');

     //Verify Token
     const{userID} = jwt.verify(token, process.evn.APP_SECRET);

     //Assgin req
     req.user = {userID};
     next(); 
}