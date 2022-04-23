import express from "express";
const router = express.Router();
import User from '../models/user.js';

import { signin,deleteUser, signup,forgetPass,recoverPass, upload,uploadImage, activateAccount, updateProfile, updateChannelDescription, getCoursesByUserId, getStreamers, isLive, getUsers, updateUserById } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/getUsers", getUsers);
router.delete("/deleteUser/:id", deleteUser);
router.post("/updateUser/:id", updateUserById);
router.post("/forgetpass", forgetPass);
router.post("/recoverpass", recoverPass);
router.post('/uploadProfileImg',uploadImage,upload)
router.post('/activateaccount',activateAccount)
router.post('/updateProfile',updateProfile)
router.post('/updateChannelDescription',updateChannelDescription)
router.get('/getCoursesByUserId/:userid',getCoursesByUserId);
router.get('/getStreamers',getStreamers);
router.get('/getCurrentStream/:userid',isLive);



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