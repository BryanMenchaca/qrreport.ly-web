const express = require("express");
const router = express.Router();

const {
  register,
  login,
  profile,
} = require("../controllers/account.controller");
const { checkToken } = require("../lib/checkToken");

router.post("/register", register);
router.post("/login", login);
router.post("/profile", checkToken, profile);

module.exports = router;
