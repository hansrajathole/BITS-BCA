
const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.getRegisterController = (req, res)=>{
    try {
        res.render("register")
    } catch (error) {
          console.log(error);
        res.status(500).json({message : "Internal server error", error : error.message })
        
    }
}


module.exports.registerController = async (req, res)=>{
    try {
        
       let { username , email , password } = req.body

        if(!username){
            return res.status(400).json({message : "username is required"})
        }
        if(!email){
            return res.status(400).json({message : "email is required"})
        }
        if(!password){
            return res.status(400).json({message : "password is required"})
        }


       let user = await userModel.findOne({email})

       if(user){
            return res.status(400).json({message : "user already axist"})
       }

       let hashedPass = await bcrypt.hash(password, 10)

        user =  await userModel.create({
            username ,
            email,
            password : hashedPass
        
        })

        res.redirect("/")


    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error", error : error.message })
        
    }
}


module.exports.getLoginController = (req, res)=>{
    try {
        res.render("login")
    } catch (error) {
          console.log(error);
        res.status(500).json({message : "Internal server error", error : error.message })
        
    }
}

module.exports.loginController = async (req, res) => {
    try {

        let {email , password} = req.body

        if(!email){
            res.redirect("/user/login")
        }
        if(!password){
            res.redirect("/user/login")
        }

        let user = await userModel.findOne({email})

        if(!user){
            res.redirect("/user/register")
        }


        let isMatch = await bcrypt.compare(password , user.password )

        if(!isMatch){
            res.redirect("/user/login")
        }

        let token = jwt.sign({
            id : user._id,
            email : user.email
        }, "secret-key")

        res.redirect("/")

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error", error : error.message })
       
    }
}




// module.exports = {
//     registerController ,
//     loginController
// }