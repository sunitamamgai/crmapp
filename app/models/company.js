// here we will write mongo schema ... that thing save in db

var mongoose = require("mongoose");
//const { stringify } = require("querystring");

// so in variable you can name anything e.g contactSchema
var companySchema = mongoose.Schema({
    name: String,
    companyname: String,
    address: String,
    contactno: String,
});
module.exports = mongoose.model('Company', companySchema);
