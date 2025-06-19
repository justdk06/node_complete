// External Module
const express = require("express");
const hostRouter = express.Router();

//Local Module
const hostController = require("../controllers/hostController");

hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home", hostController.getHostHomes);

module.exports = hostRouter;