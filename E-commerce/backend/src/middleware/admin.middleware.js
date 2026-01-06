

const isAdmin = (req, res, next)=>{

    console.log(req.user);
    console.log(req.userId);
    
    if(req.user.role !== "admin"){
        return res.status(403).json({message : "Admin acess denied"})
    }

    next()
}

module.exports = isAdmin