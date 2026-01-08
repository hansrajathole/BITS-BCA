
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

module.exports.getAllProductController = async (req, res) => {
    try {

       const productData = await productModel.find()

       if(productData.length < 1){
            res.status(404).json({message : "product data not found"})
       }

       res.status(200).json({message : "product data found", productData})

    } catch (error) {
        console.log(error);
        res.status(500).json({message : "internal server error"})
    }
}


module.exports.productDetailController = async (req , res) => {
    try {

      const {productId} =  req.params

      const product = await productModel.findById(productId)

      if(!product){
        res.status(404).json({message : "product not found"})
      }
        
      res.status(200).json({message : "product data found" , product})

      
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "internal server error" })
    }
}