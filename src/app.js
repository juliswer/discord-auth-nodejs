const express = require("express");
const app = express();

app.use("/", require("./routes/index.routes"));

app.use("/auth", require("./routes/auth.routes"));

app.get("/dashboard", (req, res) => {
  res.send("dashboard");
});

module.exports = app;
