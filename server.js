const express = require("express");
const app = express();

//.env and dotenv imports
require("dotenv").config();
const PORT = process.env.PORT || 8081;

const cors = require("cors");

//routes imports
const videosRoute = require("./routes/videos");
const registerRoute = require("./routes/register");
const uploadRoute = require("./routes/upload");
const requestlogger = require("./middleware").requestlogger;

//---------------------------------------------------------------
// Application-level middleware
app.use(requestlogger);
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// ---------------------------
//imported routes
app.use("/videos", videosRoute);

app.use("/register", registerRoute);

app.use("/upload", uploadRoute);

//---------------------------------------------------------------
// server.js root endpoints
app.get("/", (req, res) => {
  res.send("we are currently connected!");
});

app.get("*", (req, res) => {
  // this listens to all endpoints that do not match any specific endpoints
  res.sendStatus(404);
});

//---------------------------------------------------------------
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
