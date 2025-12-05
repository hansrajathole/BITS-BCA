const express = require("express")
const postControllers = require("../controllers/post.controller")
const {protectedRoute} = require("../middleware/protected")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({storage : storage  })

const router = express.Router()

router.get("/createpost", protectedRoute , postControllers.getCreatePostController)
router.post("/createpost", upload.single("media") , protectedRoute , postControllers.postCreateController)

module.exports = router