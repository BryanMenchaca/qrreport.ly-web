const express = require('express');
const router = express.Router();

const { register, login, profile } = require('../controllers/accounts/accounts.controller');
const { validToken } = require('../lib/validToken');

router.post('/register', register);
router.post('/login', login);
router.post('/profile', validToken, profile);

module.exports = router;