
const imagekit = require("../services/imagekit.service")
const postModel = require("../models/post.model")
const { generateCaption} = require("../services/ai.service")


module.exports.getCreatePostController = async (req, res) => {
    try {
        
        res.render("createPost")

    } catch (error) {
        req.flash("error", error.message)
        res.redirect("/user/login")
    }
}


module.exports.postCreateController = async (req , res) => {
    try {
        let media = req.file
               
        if(!media){

           req.flash("error", "image is required")
           return res.redirect("/post/createpost")
        }

        const caption =  await generateCaption(media.buffer)
        console.log(caption);
        
        if(!caption){
            console.log(caption);
            
           req.flash("error", "server side error")
           return res.redirect("/post/createpost")
        }
        
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
            media : mediaUrl,
            caption : caption
        })

        req.flash("success", "post created successully")
        res.redirect("/")
    } catch (error) {
        req.flash("error", error.message)
       return  res.redirect("/user/login")
    }
}