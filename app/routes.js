const fs = require("fs");
//const uniqueString = require("uniqe-string");
const Contact = require("../app/models/contact.js");
const Company = require("../app/models/company.js");

module.exports = function (app) {
    // Here we will write routes

    app.get("/", function (req, res) {
        var iCompany, iContacts;
        Contact.find({}, function (err, contactData) {
            iContacts = contactData;
            Company.find({}, function (err, companyData) {
                iCompany = companyData;
                res.render("index.ejs", {
                    icontact: iContacts,
                    icompany: iCompany
                });
            });
        });  
    });

    //so this is get request to show contact page
    app.get("/contact", function (req, res) {
        res.render("contact.ejs")
    });


    //now we will create post page to send data in database

    app.post("/contact", function (req, res) {
        var con = Contact();

        con.name = req.body.name;
        con.email = req.body.email;
        con.mobile = req.body.mobile;
        con.message = req.body.message;

        con.save(function (err, getcontact) {
            if (err) res.json(err);
            else {
                res.redirect("/");
            }
        });

    });

    app.get("/company", function (req, res) {
        res.render("company.ejs")
    });
    app.post("/company", function (req, res) {
        var com = Company();

        com.name = req.body.name;
        com.companyname = req.body.companyname;
        com.address = req.body.address;
        com.contactno = req.body.contactno;

        com.save(function (err, getcompany) {
            if (err) res.json(err);
            else {
                res.redirect("/");
            }
        });

    });
}
