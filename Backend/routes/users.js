const express = require('express');
const router = express.Router();

//Sign UP
router.post('/signup',(req,res,next)=>{
    res.send('signup')
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