const { response } = require("express");

const errorLogger = (err, request, response, next) => {
  console.log(`error ${err.message}`);
  next(err); // calling next middleware
};

const errorResponder = (err, request, response, next) => {
  response.header("Content-Type", "application/json");

  response.status(err.statusCode).send(err.message);
};

const invalidPathHandler = (request, response, next) => {
  response.status(400);
  response.send("invalid path");
};

// const noapikey = (request, reponse, next) =>{
//     response.send("there is api key present")
//     next(err)
// }

module.exports = { errorLogger, errorResponder, invalidPathHandler };
