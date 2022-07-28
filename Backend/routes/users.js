const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken')

//Sign UP
router.post('/signup',async (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    try{
        const savedUser = await newUser.save();
            res.json(savedUser);
            console.log(savedUser);
         }catch(err){
            res.json({ message: err });
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