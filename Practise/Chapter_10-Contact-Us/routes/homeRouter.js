// Core Module
const path = require('path');

// External Module
const express = require('express');
const homeRouter = express.Router();

// Local Module
const rootDir = require('../utils/pathUtli');

// GET /
homeRouter.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = homeRouter;