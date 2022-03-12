const { Router } = require("express");
const router = Router();

const passport = require("passport");

router.get("/", passport.authenticate("discord"));

router.get(
  "/redirect",
  passport.authenticate("discord", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  })
);

module.exports = router;
