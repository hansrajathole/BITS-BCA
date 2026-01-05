
const express = require("express")
const authRoute = require("./routes/auth.router")
const userRoute = require("./routes/user.router")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()





app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use("/", authRoute)
app.use("/user", userRoute )


module.exports = app