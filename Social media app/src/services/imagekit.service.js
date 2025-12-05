

var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.public_key,
    privateKey : process.env.private_key,
    urlEndpoint : process.env.urlEndPoint
});



module.exports = imagekit