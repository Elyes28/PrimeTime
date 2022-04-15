import express from "express";
const router = express.Router();
import User from '../models/user.js';

import { signin, signup,forgetPass,recoverPass, upload,uploadImage } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/forgetpass", forgetPass);
router.post("/recoverpass", recoverPass);
router.post('/uploadProfileImg',uploadImage,upload)


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



export default router;