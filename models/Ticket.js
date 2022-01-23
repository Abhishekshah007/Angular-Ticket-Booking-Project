const mongoose = require('mongoose');
const {Schema} = mongoose;

const TicketSchema = new Schema({
    totalTicketRemaining:{
        type:Number,
        require:true

    },
    
        updatedTickectQuantity:{
            type:Number
        }
    
});

module.exports = mongoose.model('Ticket',TicketSchema);