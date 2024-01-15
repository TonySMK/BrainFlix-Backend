const router = require("express").Router();
console.log(router);

router.get("/altEndpoint1", (req, res) => {
  res.send("altEndpoint1 reporting!");
});

module.exports = router;
