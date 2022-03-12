const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const passport = require("passport");
const MongoStore = require('connect-mongo');
const {MONGODB_URI, SECRET} = require('./config')

require("./strategies/discordStrategy");

// SETINGS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARES
app.use(
  session({
    secret: SECRET,
    name: "discord-oauth-cookie",
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
      mongoUrl: MONGODB_URI
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    }
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
