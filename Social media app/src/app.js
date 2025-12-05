
const express = require("express")
const authRoute = require("./routes/auth.router")
const userRoute = require("./routes/user.router")
const postRoute = require("./routes/post.routes")
const path = require("path")
const app = express()
const morgan = require("morgan")
const session = require("express-session")
const flash = require("connect-flash")
const cookieParser = require("cookie-parser")
require("dotenv").config()


console.log(process.env.public_key);

app.use(session({
    secret : "secret-key",
    resave : false,
    saveUninitialized :  true
}))

app.use(flash())
app.use(cookieParser())


app.use((req, res, next)=>{
    res.locals.success =  req.flash("success")
    res.locals.error = req.flash("error")

    next()
})



app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs")
app.set("views",path.join(__dirname , "views"))
app.use(express.static(path.join(__dirname,"../public")))

app.use("/", authRoute)
app.use("/user", userRoute )
app.use("/post",postRoute )

module.exports = app