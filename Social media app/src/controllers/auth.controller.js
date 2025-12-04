const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")


module.exports.indexController = async (req ,res)=>{

   try {
        // let token = req.cookies.token
        
        let user = null
        // if(token){
        // let decoded = jwt.verify(token, "secret-key")
        // user =  await userModel.findById(decoded.id)
        // }

        res.render('home' , {user})
   } catch (error) {

        res.redirect("/user/login" , {error : error.message})
   }
}   


module.exports.aboutController = (req, res)=>{
    res.render("about")
}