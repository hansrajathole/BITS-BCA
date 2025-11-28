
const userModel = require("../models/user.model")


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

        user =  await userModel.create({
            username ,
            email,
            password
        })

        res.status(201).json({message : "user register successfull", user })

    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error", error : error.message })
        
    }
}
module.exports.loginController = (req, res)=>{

}



// module.exports = {
//     registerController ,
//     loginController
// }