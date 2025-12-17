const app = require("./src/app")
const connect = require("./src/db/db")
const config = require("./src/config/config")

const PORT = config.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server is runing on port : ${PORT}`);
    connect()
})