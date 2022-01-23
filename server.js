// db connection

const connectToDB = require('./dbconnect');
connectToDB();


// express connection
const express = require('express');
const app = express();

const port=5000;

app.get('/', (req,res)=>{
    res.send('angular backend is running');
});

app.listen(port,()=>{
    console.log("port listening at:"+port);
});