const { Router } = require("express");
const router = Router();

const passport = require('passport');

router.get("/", passport.authenticate('discord'));

module.exports = router;
