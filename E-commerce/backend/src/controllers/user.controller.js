
const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("../config/config")


module.exports.registerController = async (req, res)=>{
    try {

       let { username , email , password , role} = req.body

        if(!username){
            res.status(400).json({message : "username is required"})                
        }
        if(!email){
            res.status(400).json({message : "email is required"})   

        }
        if(!password){
           res.status(400).json({message : "password is required"})   
        }

        if(password.length < 8){
            res.status(400).json({message : "invalid password"})   
        }

        if(!role){
            res.status(400).json({message : "role is required"})   
        }


       let user = await userModel.findOne({email})

       if(user){
           res.status(400).json({message : "user is already exist"})   
         }

       let hashedPass = await bcrypt.hash(password, 10)

        user =  await userModel.create({
            username ,
            email,
            password : hashedPass,
            role
        
        })

      
        let token = jwt.sign({
            id : user._id,
            email : user.email
        }, config.JWT_SECRET)

        res.status(201).json({message : `${role} register successfully` , token})

    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error", error : error.message })
        
    }
}



module.exports.loginController = async (req, res) => {
    try {

        let {email , password} = req.body


        

        if(!email){
          res.status(400).json({message : "email is required"})   
        }
        if(!password){
           res.status(400).json({message : "password is required"})   
        }

        let user = await userModel.findOne({email})

        if(!user){
            res.status(400).json({message : "invalid credincial"})
        }


        let isMatch = await bcrypt.compare(password , user.password )

        if(!isMatch){
            res.status(400).json({message : "invalid credincial"})
        }

        let token = jwt.sign({
            id : user._id,
            email : user.email
        }, config.JWT_SECRET)


        res.status(200).json({message : "login successfully" , token , user })
        
       
        
        

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "internal server error", error : error.message})
    }
}



module.exports.getProfileController = async (req , res) => {
    try {
        
       const userId =  req.userId

      const user = await userModel.findById(userId).select("-password")

      res.status(200).json({message : "profile data found" , user })
    
      
      

    } catch (error) {
        console.log(error);
        res.status(500).json({message : "internal server error", error : error.message})
        
    }
}
