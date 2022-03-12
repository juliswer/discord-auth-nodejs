function isAuthorized(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect("/");
  }
}

function isNotAuthorized(req, res, next) {
  if (!req.user) {
    next();
  } else {
    res.redirect("/dashboard");
  }
}

module.exports = {
  isAuthorized,
  isNotAuthorized,
};
