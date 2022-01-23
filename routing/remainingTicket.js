// importing user scheama
const Ticket = require('../models/Ticket');

const router = express.Router();

router.post('/unbooked',async (req,res)=>{
    
    // creating db table
    let ticket = await Ticket.create({
        updatedTickectQuantity:req.body.updatedTickectQuantity;
    });
    res.send(user.body);
});

module.exports=router