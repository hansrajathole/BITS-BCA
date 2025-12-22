
const imagekit = require("../services/imagekit.service")
const postModel = require("../models/post.model")
const { generateCaption} = require("../services/ai.service")
const {ObjectId} = require("mongoose")

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

module.exports.deleteController = async (req , res) => {
    try {
        let postId =  req.params.postId
        let userId = req.userId

        let post = await postModel.findById(postId)

        
        let authorId = post.author 
        
       

        if(authorId != userId ){
            req.flash("error", "you are not authorized persion")
            return res.redirect("/")
        }


       await postModel.findByIdAndDelete(postId)

       req.flash("success", "post deleted successfully")

       return res.redirect("/user/profile")


    } catch (error) {
       console.log(error);
       return res.redirect("/user/login", {error : error.message})
        
    }
}



module.exports.getUpdateController = async (req , res) => {
    try {
       
        
       const postId =   req.params.postId
     
        const post = await postModel.findById(postId)


        return res.render("postUpdate" , {post})
    } catch (error) {
        console.log(error);
        req.flash("error", error.message)
        res.redirect("/user/login")
    }
}


module.exports.updateController = async (req , res) => {
    try {
        

        let postId = req.params.postId
        console.log(req.body);


        let {caption} = req.body
    
        

       await postModel.findByIdAndUpdate(postId, {
            caption : caption
        })


        req.flash("success", "post update successfully")
        return res.redirect("/user/profile")

    } catch (error) {
         console.log(error);
        req.flash("error", error.message)
        res.redirect("/user/login")
    }   
}