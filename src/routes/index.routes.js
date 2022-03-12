const { Router } = require("express");
const router = Router();
const { isNotAuthorized } = require("../utils/auth");

router.get("/", isNotAuthorized, (req, res) => {
  res.render("Home");
});

module.exports = router;
