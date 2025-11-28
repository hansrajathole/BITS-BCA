const app = require("./src/app")
const connect = require("./src/db/db")

const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`server is runing on port : ${PORT}`);
    connect()
})