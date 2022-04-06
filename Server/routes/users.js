const express = require('express')
const router= express.Router();
const Course = require('../models/course')
const User = require('../models/user')

var cors = require("cors");

router.use(cors());


router.post('/',async(req,res)=>{
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
    console.log(user)

    try{
        const c1= await user.save()
        res.json(c1)
    }catch(err){
        res.send('Error')
    }

})
router.get('/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        
        console.log(user)
        res.json(user)

    }catch(err){
        res.send('Error '+ err)
    }
})

router.get('/', async(req,res)=>{
    try{
        const user = await User.find()
        
        console.log(user)
        res.json(user)

    }catch(err){
        res.send('Error '+ err)
    }
})

module.exports = router