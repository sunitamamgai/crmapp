var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
// now i will use mongodb so call mongo db wrapper here, it's called mangoose
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var morgan = require("morgan");

// now i will configure mongo db here
var configDB = require("./config/database.js");
//now we will connect 
mongoose.connect(configDB.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//so here we will define all the library

app.use(morgan("dev")); //please read about morgan
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//here we will define static folder path
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs"); //please read about EJS, we will use EJS for frontend

require("./app/routes.js")(app);

app.listen(port);
console.log("Working on" + port);

//here server.js completed almost. :P