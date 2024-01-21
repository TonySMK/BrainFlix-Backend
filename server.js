const express = require("express");
const app = express();

//.env and dotenv import
require("dotenv").config();
const PORT = process.env.PORT || 8081;

//routes imports
const videosroute = require("./routes/videos");
const registerroute = require("./routes/register");
const requestlogger = require("./middleware").requestlogger;
// this line imports a specific middleware from the middleware.js file

//---------------------------------------------------------------
//middleware setup

// const requestlogger = (req, res, next) => {
//   console.log("we have caught a request of somesort!");
//   console.log(`this request is a ${req.method} at ${req.url}`);
//   console.log(Date.now());
//   next();
// };

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
//middleware active
app.use(requestlogger);
// this middleware is an example of: Application-level middleware

app.use(express.json());

// app.use(apikeychecker);
//---------------------------------------------------------------
//fluff

let products2 = ["someproduct"];

//---------------------------------------------------------------

// server.js endpoints
app.get("/", (req, res) => {
  res.send("we are currently connected!");
});

app.use("/videos", videosroute);
// this a middleware for the videos route

app.use("/register", registerroute);

// app.get("/register", (req, res) => {
//   res.send(your api);
// });
//---------------------------------------------------------------

app.get("/endpoint1", (req, res) => {
  res.send("this is endpoint1 !!!!+");
});

app.get("/endpoint2", (req, res) => {
  res.send("this is endpoint2 !!!!+");
});

app.post("/postpoint", (req, res) => {
  let info = req.body;
  // res.send(req.body);
  console.log(info);
  console.log(info.name);
  console.log(info.brand);
  products2.push(info);
  res.send("created");
});
app.get("/postpoint", (req, res) => {
  // this .get has to be below the post or else it wont get the lasted instance of the array?
  res.send(products2);
});
//---------------------------------------------------------------
app.get("*", (req, res) => {
  // this listens to all endpoints that do not match any specific endpoints
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT} right now!!!`);
});

/* type of middleware:
  -Application-level middleware: which runs for all routes in an app object
  -Router level middleware: which runs for all routes in a router object
  -Built-in middleware: provided by Express
  -Error handling middleware: for handling errors
  -Third-party middleware: maintained by the community
*/
