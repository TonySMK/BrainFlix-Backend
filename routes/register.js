const express = require("express");
const router = express.Router();

// this is the register route

router.get("/", (req, res) => {
  res.send("&api_key=123");
});

module.exports = router;
