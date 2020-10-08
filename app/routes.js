const fs = require("fs");
//const uniqueString = require("uniqe-string");
var Contact = require("../app/models/contact.js");
var Company = require("../app/models/company.js");

module.exports = function(app){
    // Here we will write routes

    app.get("/", function(req, res){
        Contact.find({}, function(err, contactdata){
            res.render("index.ejs",{
                icontact: contactdata
            });
            
        });
        
    
        
    });
    app.get("/", function(req, res){
        Company.find({}, function(err, companydata){
            res.render("index1.ejs",{
                icompany: companydata
            });
            
        });
        
    
        
    });
    //so this is get request to show contact page
    app.get("/contact", function(req, res){
        res.render("contact.ejs")
    });

    app.get("/company", function(req, res){
        res.render("company.ejs")
    });

    //now we will create post page to send data in database

    app.post("/contact", function(req, res){
        var con = Contact();

        con.name = req.body.name;
        con.email = req.body.email;
        con.mobile = req.body.mobile;
        con.message = req.body.message;

        con.save(function(err, getcontact){
            if(err) res.json(err);
            else {
                res.redirect("/");
            }
        });
        
    });
    app.post("/company", function(req, res){
        var com = Company();

        com.name = req.body.name;
        com.companyname = req.body.companyname;
        com.address = req.body.address;
        com.contactno = req.body.contact;

        com.save(function(err, getcompany){
            if(err) res.json(err);
            else {
                res.redirect("/");
            }
        });
        
    });

}