const express = require("express");
const router = express.Router();
// const router = require("express").Router();
//shorthand for line 1 and 2
const apikeychecker = require("../middleware").apikeychecker;
const fs = require("fs");
const uuid = require("uuid");
const uuid4 = uuid.v4();

module.exports = router;
