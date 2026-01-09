const express = require("express")
const {protectedRoute} = require("../middleware/protected")
const isAdmin = require("../middleware/admin.middleware")
const productController = require("../controllers/product.controller")
const router = express.Router()


router.get("/getAllProduct", productController.getAllProductController)
router.post("/create", protectedRoute, isAdmin , productController.createController  )
router.get("/details/:productId", protectedRoute , isAdmin , productController.productDetailController)
router.put("/update/:productId", protectedRoute , isAdmin , productController.updateController)
router.delete("/delete/:productId", protectedRoute , isAdmin , productController.deleteController)


module.exports = router