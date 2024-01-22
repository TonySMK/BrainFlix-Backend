const express = require("express");
const router = express.Router();
const apikeychecker = require("../middleware").apikeychecker;
const fs = require("fs");
const { UniqueCharOTP } = require("unique-string-generator");

//---------------------------------------------------------------
router.use(apikeychecker);

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
  console.log("you made it!");
  console.log(UniqueCharOTP(30));
  res.json(readVideos());
});

router.get("/:pageid", (req, res) => {
  let pageID = req.params.pageid;
  let data = readVideos();
  let subData = data[1];
  let founddata = subData.find((item) => item.id === pageID);
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
