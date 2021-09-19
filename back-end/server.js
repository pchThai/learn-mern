const express = require('express');
const app = express();
app.get('/',(req,res,next)=>{
    res.status(200).json({
        status: 'success',
        data:{
            posts:[{
                content: 'Hello world',
                date: '19/09/2021'
            }]
        }
    })
})
const port = 5000;
app.listen(port,()=> {
    console.log(`Server is running on $(port)`);   
})