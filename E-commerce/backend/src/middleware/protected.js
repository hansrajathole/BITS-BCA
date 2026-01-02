
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")
const config = require("../config/config")

module.exports.protectedRoute = async (req , res , next) => {
    try {
        
       const token = req.headers.authorization.split(" ")[1]

       if(!token){
          res.status(401).json({message : "unauthorized user"})
       }

      const decoded =  jwt.verify(token , config.JWT_SECRET)

      const user =  await userModel.findById(decoded.id)

      if(!user){
        res.status(401).json({message : "unauthorized user"})
     
      }

      req.userId = decoded.id

      next()

    } catch (error) {
        console.log(error);
        res.status(500).json({message : "internal server error" , error : error.message})
    }
}