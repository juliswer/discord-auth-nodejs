const { Router } = require("express");
const router = Router();
const passport = require("passport");
const { isNotAuthorized } = require("../utils/auth");

router.get("/", isNotAuthorized, passport.authenticate("discord"));

router.get(
  "/redirect",
  passport.authenticate("discord", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  })
);

module.exports = router;
