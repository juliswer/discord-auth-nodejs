const express = require("express");
const path = require("path");
const app = express();

// SETINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/", require("./routes/index.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/dashboard", require("./routes/dashboard.routes"));

module.exports = app;
