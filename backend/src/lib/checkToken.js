const jwt = require("jsonwebtoken");

const helpers = {};

helpers.checkToken = (req, res, next) => {
  let headerToken = req.header("Authorization");
  let token;

  if (headerToken) {
    token = headerToken.split(" ");
    if (token.length != 2 || token[0] != "Bearer")
      res.status(401).send("Token inválido.");
  } else {
    res.status(401).send("Acceso denegado.");
  }

  try {
    const verified = jwt.verify(token[1], process.env.SECRET_KEY);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Token inválido.");
    //res.status(400).send({ error });
  }
};

module.exports = helpers;
