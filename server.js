const express = require("express");
const app = express();
const port = process.env.PORT || 8081;

const altRoute = require("./routes/videos");

// console.log(process.env);
console.log(port);

app.use("/", altRoute);

app.get("/", (req, res) => {
  res.send("we are currently connected!");
});

app.get("/endpoint1", (req, res) => {
  res.send("this is endpoint1 !!!!+");
});

app.get("/endpoint2", (req, res) => {
  res.send("this is endpoint2 !!!!+");
});

app.listen(port, () => {
  console.log(`listening to ${port} right now!!!`);
});
