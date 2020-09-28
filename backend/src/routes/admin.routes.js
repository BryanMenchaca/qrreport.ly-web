const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const { checkToken } = require("../lib/checkToken");

const {
  register,
  login,
  profile,
} = require("../controllers/account.controller");

const limit = rateLimit({
  max: 10,
  windowMs: 60 * 60 * 1000, // 1 hour ban
  statusCode: 200,
  message: {
    status: 429,
    error: true,
    message: "Ha excedido el número de intentos. Inténtelo más tarde.",
  },
});

router.post("/register", limit, register);
router.post("/login", limit, login);
router.get("/profile", checkToken, profile);

module.exports = router;
