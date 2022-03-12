const express = require("express");
const path = require("path");
const app = express();
const session = require('express-session');

// SETINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARES

// ROUTES
app.use("/", require("./routes/index.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/dashboard", require("./routes/dashboard.routes"));

module.exports = app;
