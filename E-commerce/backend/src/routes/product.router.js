const express = require("express")
const {protectedRoute} = require("../middleware/protected")
const isAdmin = require("../middleware/admin.middleware")
const productController = require("../controllers/product.controller")
const router = express.Router()


router.post("/create", protectedRoute, isAdmin , productController.createController  )

// router.get("/about", )


module.exports = router