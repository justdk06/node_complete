// Core Modules
const http = require('http');

// External Module
const express = require('express');

// Local Module
const requestHandler = require('./user')

const app = express();

app.use((req,  res, next) =>{
  console.log("Came in first middleware", req.url, req.method);
  // res.send("<p>Came from First middleware</p>")
  next();
});

app.use((req,  res, next) =>{
  console.log("Came in another middleware", req.url, req.method);
  res.send("<p>Came from another middleware</p>")
});

app.use("/submit-details", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Welcome to complete Coding Nodejs series</p>");
});

const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});