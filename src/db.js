const { connect } = require("mongoose");
const {MONGODB_URI} = require("./config")

connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
