
// const imagekit = require("../services/imagekit.service")

module.exports.getCreatePostController = async (req, res) => {
    try {
        
        res.render("createPost")

    } catch (error) {
        req.flass("error", error.message)
        res.redirect("/user/login")
    }
}


module.exports.postCreateController = async (req , res) => {
    try {
        req.file
        console.log(req.file);
        

        

        req.flash("success", "post created successully")
        res.redirect("/")
    } catch (error) {
        req.flass("error", error.message)
        res.redirect("/user/login")
    }
}