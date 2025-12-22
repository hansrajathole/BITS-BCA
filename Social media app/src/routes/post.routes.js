const express = require("express")
const postControllers = require("../controllers/post.controller")
const {protectedRoute} = require("../middleware/protected")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({storage : storage  })

const router = express.Router()

router.get("/createpost", protectedRoute , postControllers.getCreatePostController)
router.post("/createpost",  protectedRoute ,upload.single("media") , postControllers.postCreateController)
router.get("/delete/:postId" , protectedRoute , postControllers.deleteController)
router.get("/update/:postId", protectedRoute, postControllers.getUpdateController)
router.post("/update/:postId", protectedRoute, postControllers.updateController)

module.exports = router