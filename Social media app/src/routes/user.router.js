
const express = require("express")
const userControllers = require("../controllers/user.controller")

const router = express.Router()

router.use((req, res, next)=>{
    console.log("router level middleware chala");
    next()
})





router.post("/register",userControllers.registerController)


router.get("/:userId",( req, res )=>{
    // console.log("params wala data",req.params);

    const {userId} = req.params
    console.log(req.query);
    console.log(req.body);
    
})


module.exports = router