const config = require("../config/config")
const userModel = require("../models/user.model")
const postModel = require("../models/post.model")

const jwt = require("jsonwebtoken")


module.exports.indexController = async (req ,res)=>{

   try {
        let token = req.cookies.token
        
        let user = null
        if(token){
        let decoded = jwt.verify(token,config.JWT_SECRET)
        user =  await userModel.findById(decoded.id)
        }
        const postData = await postModel.find().populate("author", "username avatar")

        console.log(postData);
        
        res.render('home' , {user , postData})
   } catch (error) {
          console.log(error);
          
        res.redirect("/user/login" , {error : error.message})
   }
}   


module.exports.aboutController = (req, res)=>{
    res.render("about")
}