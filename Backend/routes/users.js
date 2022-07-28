const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken')
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(bodyParser.json());
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Sign UP
router.post('/signup',async (req, res) => {
    console.log(req.body);
    console.log(req.body.email);
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    console.log(newUser)
    try{
        const savedUser = await newUser.save();
            res.json(savedUser);
            console.log(savedUser);
         }catch(err){
            res.json({ message: err });
            console.log(err)
         }   
                
})

//Authenticate
router.post('/login',(req,res,next)=>{
    res.send('login')
})

//Profile
router.get('/profile',(req,res,next)=>{
    res.send('PROFILE')
})

//Validate
router.get('/validate',(req,res,next)=>{
    res.send('VALIDATE')
})

module.exports = router;