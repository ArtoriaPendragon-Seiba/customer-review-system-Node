const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router");

const app = express();
const port = 8000;

mongoose.connect(
	"mongodb+srv://saberyang0214:dZ4FTXUzEexfTM01@userlist.wafb7.mongodb.net/review?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

let db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.on("open", () => console.log("database opened"));
db.on("close", () => console.log("database closed"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
	console.log("request: ", req.method, " ", req.url);
	next();
});

app.use("/api", router);

app.listen(port, () => {
	console.log(`Start to listen ${port}`);
});
