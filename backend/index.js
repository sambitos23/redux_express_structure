var express = require("express");
var app = express();
var mongoClient = require("mongodb").MongoClient;
var cors = require('cors');
var userroute = require("./routes/user-route");

app.set("port", 8000);
app.use(cors());

app.listen(app.get("port"), function () {
  console.log("app is running on port " + app.get("port"));
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


mongoClient.connect("mongodb://localhost:27017/online_exam", function (err, server) {
  userroute.configure(app, server);
})