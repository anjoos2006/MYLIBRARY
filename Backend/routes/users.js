const express = require ('express');
const router = express.Router();
const User = require('../models/user');
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());


router.post('/signup', async (req, res) => {
    console.log("in user route");
    console.log(req.body.email);
    console.log("req body:");
    console.log(req.body);
        
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    
    try{
    const savedBook = await user.save();
        res.json(savedBook);
        console.log("saved"+savedBook);
     }catch(err){
        res.json({ message: err });
     }   
});

module.exports = router;