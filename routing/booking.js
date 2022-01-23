// importing user scheama
const User = require('../models/user');

const router = express.Router();

router.post('/booking',async (req,res)=>{
    
    // creating db table
    let user = await User.create({
        inputTickectQuantity:req.body.inputTickectQuantity;
    });
    res.send(console.log(user));
});

module.exports=router