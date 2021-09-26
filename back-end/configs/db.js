const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_URI,{           
            useUnifiedTopology: true,
            useNewUrlParser: true,
            //useCreateIndex: true 
        })
        console.log('Database connnected');
    }catch(error){
        console.log(error);
        process.exit(1);
    } 
} 
module.exports = { connectDB }