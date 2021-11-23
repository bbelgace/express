const express = require("express");
const path = require("path");
const app = express();
//
app.use(express.static(path.join(__dirname, "public")));
//middleware
const rep = (req, res, next) => {
  console.log("la repence");
  next();
};
app.use(rep);
app.listen(5000, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("SERVER IS  RUNNING...");
  }
});
