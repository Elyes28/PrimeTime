import express from "express";
const router = express.Router();

import { signin, signup,forgetPass,recoverPass } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/forgetpass", forgetPass);
router.post("/recoverpass", recoverPass);


export default router;