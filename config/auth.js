const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
  // check for token
  // console.log("middleware: " + req.query.token)
  let token = req.get('Authorization') || req.query.token || req.body.token;
  if (token) {
    // remove bearer
    token = token.replace('Bearer ', '');
    // verify token
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) {
        next(err)
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } else {
    next()
  }
};