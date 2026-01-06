
const productModel = require("../models/product.model")

module.exports.createController = async (req, res) => {
    try {

       let {title , image , price , description , category} = req.body        

       if(!title || !image || !price || !description || !category){
            res.status(400).json({message : "All fields are Required"})
       }
       
      const product = await productModel.create({
        title,
        image,
        price,
        description,
        category
       })

       res.status(201).json({message : "product created successfully" , product})

    } catch (error) {
        console.log(error);
        res.status(500).json({message : "internal server error", error : error.message})
        
    }
}