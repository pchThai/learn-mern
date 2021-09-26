require('dotenv').config();
const {connectDB} = require('./configs/db');
connectDB();
const express = require('express');
const cors = require('cors');
//Import Routers

const authRoute = require('./routers/authRoute');
const postRoute = require('./routers/postsRoute');

const app = express();



app.use(cors());
app.use(express.json());
//Mount the route
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/posts',postRoute);

const port = process.env.APP_PORT;
app.listen(port,()=> {
    console.log('Server is running on ${port}');   
})
