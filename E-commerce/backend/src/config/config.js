
require("dotenv").config()


const _config = {
    public_key : process.env.public_key,
    privateKey : process.env.private_key,
    urlEndpoint : process.env.urlEndPoint,
    PORT : process.env.PORT,
    MONGO_URL : process.env.MONGO_URL,
    JWT_SECRET : process.env.JWT_SECRET,
    aiApiKey : process.env.aiApiKey
}



const config = Object.freeze(_config)
module.exports = config