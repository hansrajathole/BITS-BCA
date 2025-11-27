
const express = require("express")

const router = express.Router()



router.post("/register", (req, res)=>{

    const {username , email , password } = req.body

    console.log("username :", username);
    console.log("email :", email);
    console.log("password :", password);
    

    // console.log("query wala data ",req.query);
    // console.log("body wala data ",req.body);

    res.status(201).json({ message : "user register successfuly"})  
})


router.get("/:userId",( req, res )=>{
    // console.log("params wala data",req.params);

    const {userId} = req.params
    console.log(req.query);
    console.log(req.body);
    
})


module.exports = router