const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");
const cors = require("cors");
//db
require("./db/mongoose");

//parser
app.use(bodyParser.json());
app.use(express.json())

app.use(cors());

// routes
app.use("/api/", apiRouter);

if (process.env.NODE_ENV === 'production'){
  
}

//server
app.listen(port, function () {
  console.log("słucham Pana na " + port);
});
