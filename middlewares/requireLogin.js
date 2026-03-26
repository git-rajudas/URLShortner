const jwt = require("jsonwebtoken");

const jwt_secret = process.env.jwt_secret;

function requireLogin(req, res, next) {
  // console.log("Cookies:", req.cookies);
  const token = req.cookies.token;

  if (!token) {
    console.log("No token found");
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, jwt_secret);
    req.user = decoded;
    next();
  } catch(e){
    console.log("JWT error:", e.message);
    return res.redirect("/login");
  }
}

module.exports = { requireLogin };