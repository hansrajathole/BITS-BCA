
const express = require("express")
const authRoute = require("./routes/auth.router")
const userRoute = require("./routes/user.router")
const path = require("path")
const app = express()
const morgan = require("morgan")



// app.use((req, res, next)=>{
//     console.log("middleware 1 chala");
//     next()
// })


// app.use((req, res, next)=>{
//     console.log("application level wala middleware 2 chala");
//     next()
// })



app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs")
app.set("views",path.join(__dirname , "views"))
app.use(express.static(path.join(__dirname,"../public/css")))

app.use("/", authRoute)
app.use("/user", userRoute )
// app.use("/api/v1/post", )

module.exports = app