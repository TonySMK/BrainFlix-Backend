const express = require("express");
const router = express.Router();
// const router = require("express").Router();
//shorthand for line 1 and 2
const apikeychecker = require("../middleware").apikeychecker;
const fs = require("fs");
const { UniqueCharOTP } = require("unique-string-generator");

//---------------------------------------------------------------
router.use(apikeychecker);

function getTimeStamp() {
  return Date.now();
}

//---------------------------------------------------------------
router.post("/", (req, res) => {
  let id = UniqueCharOTP(30);
  let title = req.body.title;
  let channel = "Voom Voom";
  let image = "http://localhost:8080/images/imagePlaceholder.jpeg";
  let description = req.body.description;
  let veiws = "123,321";
  let likes = "124";
  let diration = "2:12";
  let video = "https://project-2-api.herokuapp.com/stream";
  let timestamp = getTimeStamp();
  let comment = [];
});

module.exports = router;
