const express = require("express")
const authController = require("../controllers/auth.controller")
const {protectedRoute} = require("../middleware/protected")
const router = express.Router()


router.get("/", authController.indexController)
router.get("/about", authController.aboutController)


module.exports = router