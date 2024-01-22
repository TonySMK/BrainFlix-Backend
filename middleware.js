const apikeychecker = (req, res, next) => {
  // this checks for a query key ("api_key") in the url
  let apikey = req.query.api_key;
  if (apikey) {
    console.log("there is AN apikey attached " + apikey);
    next();
  } else {
    console.log("there is NOT api key attached!");
    res.send("there is NOT api key attached!");
    // without the next(), end the request here,
    // instead of continuing to any following middleware or an actualy endpoint
  }
};

const requestlogger = (req, res, next) => {
  console.log("we have caught a request of somesort!");
  console.log(`this request is a ${req.method} at ${req.url}`);
  console.log(Date.now());
  next();
};

module.exports = { requestlogger, apikeychecker };

/* type of middleware:
  -Application-level middleware: which runs for all routes in an app object
  -Router level middleware: which runs for all routes in a router object
  -Built-in middleware: provided by Express
  -Error handling middleware: for handling errors
  -Third-party middleware: maintained by the community
*/

/*
now we have a dedicated middleware file that houses all middleware,
this lets us "clean up" code in the routes
and allows us to maintain all the middle in one place


how to:
1. include utilized middleware in the module.exports
2. in the app or route that we want to use a specific middlware
    we import the middle.js file, then attach the specific middleware
    by name with dot-notation
*/
