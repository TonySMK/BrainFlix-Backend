const express = require("express");
const router = express.Router();

const apikeychecker = require("../middleware").apikeychecker;

//---------------------------------------------------------------
// const router = require("express").Router();
//---------------------------------------------------------------

// const apikeychecker = (req, res, next) => {
//   // this checks for a query key ("api_key") in the url
//   let apikey = req.query.api_key;
//   if (apikey) {
//     console.log("there is AN apikey attached " + apikey);
//   } else {
//     console.log("there is NOT api key attached!");
//   }
//   next();
// };
//---------------------------------------------------------------
// middleware: route level
// we could add it here if we only wanted this route to utilize this

// router.use(express.json());
//built-in middlware

router.use(apikeychecker);
// now the middleware is only trigger in url endpoints with "'/videos" in it
//---------------------------------------------------------------

router.get("/", (req, res) => {
  res.send("base videos route reporting!");
});

router.get("/:somepageid", (req, res) => {
  // console.log(req);
  // req.query.<nameofkey> return the qurey parameter object value
  // req.params.<params key variable> return the parameter object value
  // the name of the params key is set in the first argument's url ":<the params key>"
  // therefore, if we want to capture the params value, we needs to access it with the identical params key

  let pageID = req.params.somepageid;
  // req.params.<object.key> let use capture the pamemet
  res.send(`this is the pageid you are requesting ${pageID}`);
  console.log(pageID);
});

module.exports = router;
