
const express = require("express")
const userControllers = require("../controllers/user.controller")
const {protectedRoute} = require("../middleware/protected")

const router = express.Router()



router.post("/login", userControllers.loginController)
router.post("/register",userControllers.registerController)
router.get("/profile" , protectedRoute , userControllers.getProfileController)



module.exports = router