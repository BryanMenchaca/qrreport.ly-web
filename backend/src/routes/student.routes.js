const express = require("express");
const router = express.Router();

const { createOne, getOne, search } = require("../controllers/alumno.controller");

router.get("/getOne/:noControl", getOne);
router.post("/createOne", createOne);
router.get("/search/:value", search);

module.exports = router;
