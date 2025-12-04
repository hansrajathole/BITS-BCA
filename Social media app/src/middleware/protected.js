
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

module.exports.protectedRoute = async (req , res , next) => {
    try {
        
       const token = req.cookies.token
       if(!token){
        
        return res.redirect("/user/login")
       }

      const decoded =  jwt.verify(token , "secret-key")

      const user =  await userModel.findById(decoded.id)

      if(!user){
        return res.redirect("/user/login")
      }

      req.userId = decoded.id

      next()

    } catch (error) {
        return res.redirect("login", {error : error.message})
    }
}