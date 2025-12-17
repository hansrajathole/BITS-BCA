
const imagekit = require("../services/imagekit.service")
const postModel = require("../models/post.model")


module.exports.getCreatePostController = async (req, res) => {
    try {
        
        res.render("createPost")

    } catch (error) {
        req.flass("error", error.message)
        res.redirect("/user/login")
    }
}


module.exports.postCreateController = async (req , res) => {
    try {
        let media = req.file
       
        const authorId = req.userId
        
        const result = await  imagekit.upload({
            file : media.buffer,
            fileName : media.originalname,
            isPrivateFile : false,
            isPublished : true
        })


        let mediaUrl = result.url
        

        const post = await postModel.create({
            author : authorId,
            media : mediaUrl
        })

        req.flash("success", "post created successully")
        res.redirect("/")
    } catch (error) {
        req.flass("error", error.message)
        res.redirect("/user/login")
    }
}