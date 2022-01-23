
// mongoose make easy to use mongodb features 
const mongoose = require('mongoose');

// this is my mongodb compass connecting string 

const mongoURI = "mongodb://localhost:27017/booking?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

// connection

const connectToDB = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("connection is succesfully");
    })
}

module.exports = connectToDB;