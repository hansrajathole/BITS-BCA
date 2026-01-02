
const config = require("../config/config")
var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : config.public_key,
    privateKey : config.privateKey,
    urlEndpoint : config.urlEndpoint
});



module.exports = imagekit