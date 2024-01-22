const apikeychecker = (req, res, next) => {
  // this checks for a query key ("api_key") in the url
  let apikey = req.query.api_key;
  if (apikey) {
    console.log("there is AN apikey attached " + apikey);
    next();
  } else {
    console.log("there is NOT api key attached!");
    res.send("there is NOT api key attached!");
  }
};

const requestlogger = (req, res, next) => {
  console.log("we have caught a request of somesort!");
  console.log(`this request is a ${req.method} at ${req.url}`);
  console.log(Date.now());
  next();
};

module.exports = { requestlogger, apikeychecker };
