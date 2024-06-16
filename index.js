"use strict"
const http = require("http");
const app = require("./app");
const PORT = 8081;

const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`HTTP Server listening at the port ${PORT}`)
})