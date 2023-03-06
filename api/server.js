const express = require("express");
const server = express();



server.use(express.json());


server.get("/", (req, res) => {
  res.json({ api: "up" });
});


server.use("*",(req,res)=>{
  res.status(404).json({
    message:"Not found"
  })
});



server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});


module.exports = server;