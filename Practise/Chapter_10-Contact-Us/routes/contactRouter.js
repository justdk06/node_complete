// Core Module
const path = require('path');

// External Module
const express = require('express');
const contactRouter = express.Router();

// Local Module
const rootDir = require('../utils/pathUtli');

// GET: Contact Us Form
contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

// POST: Form Submission
contactRouter.post("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact-success.html'));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log('hello from us')
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'contact-success.html'));
});

module.exports = contactRouter