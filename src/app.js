const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const passport = require("passport");

require("./strategies/discordStrategy");

// SETINGS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARES
app.use(
  session({
    secret: "some secret",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//GLOBAL VARIABLES
app.use((req, res, next) => {
  app.locals.user = req.user;
  next();
});

// ROUTES
app.use("/", require("./routes/index.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/dashboard", require("./routes/dashboard.routes"));

module.exports = app;
