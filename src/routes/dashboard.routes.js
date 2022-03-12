const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render('dashboard', {
    guilds: req.user.guilds
  })
});

module.exports = router;
