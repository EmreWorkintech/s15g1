const express = require("express");
const server = express();
const session = require('express-session');

const authRouter = require('./auth/auth-router');
const userRouter = require('./users/users-router');

server.use(express.json());

server.use(session({
  name: "fsweb1122",   // vermezsek sid döner. hangi modülü kullanıdğımız nelli olur
  secret: "buraya yazacağım secret'ı aslında .env'den almalıyım!",
  cookie: {
    maxAge: 1000*30,  // 30sn
    secure: false, //https üzerinden iletilsin diye. .env'dn alırız.
    httpOnly: false
  },
  resave: false,
  saveUninitialized: false
}))



server.get("/", (req, res) => {
  res.json({ api: "up" });
});


server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

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
