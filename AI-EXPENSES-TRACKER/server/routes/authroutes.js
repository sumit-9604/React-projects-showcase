import express from "express";
const router = express.Router();

router.post("/login",(req,res) =>{
    res.json({message: "login route working"});
})

router.post("/register",(req,res) =>{
    res.json({message: "register route working"});
})

export default router;