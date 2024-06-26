const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const loginRouter = require("./api/Routes/login.routes")
const pomoRouter = require("./api/Routes/pomo.routes")
const mongoose = require("mongoose");

mongoose
  .connect(
     "mongodb://localhost:27017/pomodoro"
   // "mongodb://uaabydwvog8nzr7vg7pf:6qoEJHQ4VTyHKATVsPN@bzdmkshrg0ymeje55u5q-mongodb.services.clever-cloud.com:2391/bzdmkshrg0ymeje55u5q"
    //"mongodb+srv://GoYard:Reports1234@cluster0.0wdtgt7.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("CONNECTED TO MONGODB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req,res,next)=>{
    console.log('get request')
    res.status(200).json({
        message:"Welcome..>.!"
    })
})

app.use("/login",loginRouter);
app.use("/pomo",pomoRouter)

module.exports = app;