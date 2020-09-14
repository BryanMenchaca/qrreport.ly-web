const express = require("express");
const router = express.Router();

const { createOne, getOne } = require("../controllers/alumno.controller");

router.get("/getOne/:noControl", getOne);
router.post("/createOne", createOne);

module.exports = router;
