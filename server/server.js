const express = require("express");
const config = require("./config");
const appTeaRouter = require('./routers/app/tea');

const app = express();

app.use("/static", express.static(__dirname + "/static"));

app.use('/api/tea', appTeaRouter);




app.listen(config.port, error => {
  console.log(error);
});
