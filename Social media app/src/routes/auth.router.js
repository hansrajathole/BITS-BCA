const express = require("express")
const authController = require("../controllers/auth.controller")
const router = express.Router()


router.get("/", authController.indexController)
router.get("/about", authController.aboutController)


module.exports = router