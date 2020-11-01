const express = require("express");
const router = express.Router();

const {
  createOne,
  getOne,
  search,
  random,
  edit,
} = require("../controllers/alumno.controller");

const {
  folio,
  createReporte,
  createCitatorio,
  createSuspension,
  getHistory,
} = require("../controllers/sancion.controller");

router.get("/getOne/:noControl", getOne);
router.post("/createOne", createOne);
router.get("/search", search);
router.get("/random", random);
router.get("/getFolio/:x", folio);
router.post("/edit", edit);

router.post("/createDocument/reporte", createReporte);
router.post("/createDocument/citatorio", createCitatorio);
router.post("/createDocument/suspension", createSuspension);
router.get("/getHistory", getHistory);

module.exports = router;
