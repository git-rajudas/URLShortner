const jwt = require("jsonwebtoken");

const jwt_secret = process.env.JWT_SECRET;

function isLoggedIn(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.locals.user = null;
    return next();
  }

  try {
    const decoded = jwt.verify(token, jwt_secret);
    req.user = decoded;
    res.locals.user = decoded;
  } catch {
    res.locals.user = null;
  }

  next();
}

module.exports = { isLoggedIn };