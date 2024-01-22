const express = require("express");
const router = express.Router();
// const router = require("express").Router();
//shorthand for line 1 and 2
const apikeychecker = require("../middleware").apikeychecker;
const fs = require("fs");
const { UniqueCharOTP } = require("unique-string-generator");

// const videosdetails = require("../data/videosdets.json");
// const videosgeneral = require("../data/videos.json");

//---------------------------------------------------------------

// middleware: route level
// we just need to  add it here if we only wanted this route to utilize
// a specific middleware
// in otherwords, the lower the middleware is, the more of a specific endpoints
// is needs for a middleware to triggered

router.use(apikeychecker);
// now the middleware is only trigger in url endpoints with "'/videos" in it
// router.use(express.static("public"));
//---------------------------------------------------------------
function readVideos() {
  // this function return JavaScript!!!
  const videosDatat = fs.readFileSync("./data/videos1.json");
  const parsedData = JSON.parse(videosDatat);
  return parsedData;
}

function getTimeStamp() {
  return Date.now();
}
//---------------------------------------------------------------

router.get("/", (req, res) => {
  // res.send("base videos route reporting!");
  console.log("you made it!");
  console.log(UniqueCharOTP(30));
  res.json(readVideos());
  // res.json(<somthing>) sends a package in json format, therefore the <somthing> is JavaScript
  // the returned data is... an array of arrays [[light data], [heavy data]]
});

router.get("/:pageid", (req, res) => {
  let pageID = req.params.pageid;
  // console.log(pageID);
  // pageID is the id of video id in the list
  let data = readVideos();
  // console.log(data[1]);
  let subData = data[1];
  console.log(subData);
  let founddata = subData.find((item) => item.id === pageID);
  console.log(founddata);
  // res.send("sdfsd");
  res.json(founddata);
});

router.post("/:pageid/comments", (req, res) => {
  // not working, need to figure out how to modify a specific object in a specific array in the json file...
  let pageID = req.params.pageid;

  // let name = req.body.name;
  // let comment = req.body.comment;

  let thearray = readVideos();
  let bigarray = thearray[1];
  console.log(bigarray);
  // let time = uuid4;

  // let foundbigtopic = bigarray.find((item) => item.id === pageID);
  // let commentobject = foundbigtopic.comments;
  let package = {
    id: uuid4,
    name: req.body.name,
    comment: req.body.comment,
    likes: 0,
    timestamp: getTimeStamp(),
  };
  // let finalcomments = commentobject.push(package);
  // // res.send(`${pageID} ${apple} ${uuid4}`);
  // // fs.writeFileSync("./data/videosdets.json", JSON.stringify(finalcomments));
  // // res.json(finalcomments);
  // // res.send(req.body.comment);
  res.status(201).json(thearray);
});

module.exports = router;
