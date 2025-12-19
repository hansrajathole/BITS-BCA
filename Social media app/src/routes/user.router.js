
const express = require("express")
const userControllers = require("../controllers/user.controller")
const {protectedRoute} = require("../middleware/protected")

const router = express.Router()

// router.use((req, res, next)=>{
//     console.log("router level middleware chala");
//     next()
// })




router.get("/login", userControllers.getLoginController)
router.post("/login", userControllers.loginController)
router.get("/register",userControllers.getRegisterController)
router.post("/register",userControllers.registerController)
router.get("/logout",protectedRoute , userControllers.logoutController)



module.exports = router