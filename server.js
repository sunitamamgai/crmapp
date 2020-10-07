var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
// now i will use mongodb so call mongo db wrapper here, it's called mangoose
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var morgan = require("morgan");

// now i will configure mongo db here
