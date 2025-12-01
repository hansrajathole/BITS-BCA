module.exports.indexController = (req ,res)=>{

    let name = "hansraj"
    res.render('index',{name})
}   


module.exports.aboutController = (req, res)=>{
    res.render("about")
}