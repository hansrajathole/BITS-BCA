
const express = require("express")
const authRoute = require("./routes/auth.router")
const userRoute = require("./routes/user.router")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/", authRoute)
app.use("/user", userRoute )
// app.use("/api/v1/post", )

module.exports = app