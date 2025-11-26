// let http = require("http")


// let server = http.createServer((req, res )=>{
//     if(req.url === '/' && req.method === "GET"){
//         res.end("Home Route")
//     }
//     if(req.url === "/about"){
//         res.end("About Page")
//     }
// })

// let PORT  = 4000

// server.listen(PORT , ()=>{
//     console.log(`server is running on port : ${PORT}`);
    
// })



let express = require("express")

let app = express()


app.get("/", (req , res)=>{
    res.send("Home Page")
})

app.listen(4000, ()=>{
    console.log("server started");
    
})