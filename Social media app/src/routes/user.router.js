
const express = require("express")
const userControllers = require("../controllers/user.controller")

const router = express.Router()

router.use((req, res, next)=>{
    console.log("router level middleware chala");
    next()
})




router.get("/login", userControllers.getLoginController)
router.post("/login", userControllers.loginController)
router.get("/register",userControllers.getRegisterController)
router.post("/register",userControllers.registerController)



module.exports = router