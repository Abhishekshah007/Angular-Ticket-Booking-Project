// db schema 
const mongoose = require('mongoose');
const UserSchema = new Schema ({
    user:{

        // refering other schema to this schema because no. of seat is a majar point to view 
        type:mongoose.Schema.Types.ObjectId,
        ref:'tickectCenter',
        inputTicketQuantity:Number,
        require:true,
    }
});

module.exports=mongoose.model('user',UserSchema);