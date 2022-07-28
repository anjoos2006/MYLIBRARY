const express = require('express');
const router = express.Router();

//Sign UP
router.get('/signup',(req,res,next)=>{
    res.send('signup')
})

module.exports = router;