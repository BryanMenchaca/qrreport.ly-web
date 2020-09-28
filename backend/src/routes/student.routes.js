const express = require("express");
const router = express.Router();

const {
  createOne,
  getOne,
  search,
  random,
  createReporte,
  createCitatorio,
  createSuspension,
} = require("../controllers/alumno.controller");

router.get("/getOne/:noControl", getOne);
router.post("/createOne", createOne);
router.get("/search", search);
router.get("/random", random);
router.post("/createDocument/reporte", createReporte);
router.post("/createDocument/citatorio", createCitatorio);
router.post("/createDocument/suspension", createSuspension);

module.exports = router;
