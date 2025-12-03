
const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.getRegisterController = (req, res)=>{
    try {
        let error = null
        res.render("register", {error})
    } catch (error) {
          console.log(error);
        res.status(500).json({message : "Internal server error", error : error.message })
        
    }
}


module.exports.registerController = async (req, res)=>{
    try {
        
       let { username , email , password } = req.body

        if(!username){
            req.flash("error","username is required")    
            return res.redirect("/user/register")
        }
        if(!email){
            return res.render("register", {error : "email is required"})

        }
        if(!password){
            return res.render("register", {error : "password is required"})
        }


       let user = await userModel.findOne({email})

       if(user){
            return res.render("register", {error : "user already exist"})
      }

       let hashedPass = await bcrypt.hash(password, 10)

        user =  await userModel.create({
            username ,
            email,
            password : hashedPass
        
        })

        req.flash("error", "user register successfully")

        res.redirect("/user/login")


    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error", error : error.message })
        
    }
}


module.exports.getLoginController = (req, res)=>{
    try {
        let error = null
        res.render("login", {error})
    } catch (error) {
          console.log(error);
        res.status(500).json({message : "Internal server error", error : error.message })
        
    }
}

module.exports.loginController = async (req, res) => {
    try {

        let {email , password} = req.body

        if(!email){
           return res.render("login", {error : "email is required"})
        }
        if(!password){
           return res.render("login", {error : "password is required"})

        }

        let user = await userModel.findOne({email})

        if(!user){
           return res.render("login",{error : "invalid credintial"})
        }


        let isMatch = await bcrypt.compare(password , user.password )

        if(!isMatch){
           return res.render("login",{error : "invalid credintial"})

        }

        let token = jwt.sign({
            id : user._id,
            email : user.email
        }, "secret-key")

        console.log(token);
        
        req.flash("success", "login successfully")
        return res.redirect("/")

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error", error : error.message })
       
    }
}




// module.exports = {
//     registerController ,
//     loginController
// }