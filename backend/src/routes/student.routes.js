const express = require("express");
const router = express.Router();

const {
  createOne,
  getOne,
  search,
  random,
} = require("../controllers/alumno.controller");

const {
  folio,
  createReporte,
  createCitatorio,
  createSuspension,
} = require("../controllers/sancion.controller");

router.get("/getOne/:noControl", getOne);
router.post("/createOne", createOne);
router.get("/search", search);
router.get("/random", random);
router.post("/getFolio", folio);
router.post("/createDocument/reporte", createReporte);
router.post("/createDocument/citatorio", createCitatorio);
router.post("/createDocument/suspension", createSuspension);

module.exports = router;
