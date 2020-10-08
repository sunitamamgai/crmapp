// here we will write mongo schema ... that thing save in db

var mongoose = require("mongoose");
//const { stringify } = require("querystring");

// so in variable you can name anything e.g contactSchema
var contactSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    message: String,
});
module.exports = mongoose.model('Contact', contactSchema);
