require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
require("./services/passport");

mongoose.connect("mongodb://localhost/oauth", {
  useNewUrlParser: true
});

const app = express();
app.use(
  session({
    secret: "keyboard cat",
    cookie: {}
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
app.use(routes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
