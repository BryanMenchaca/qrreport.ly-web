const express = require("express");
const router = express.Router();

const {
  createOne,
  getAll,
  getInfoAndStudentsGroup,
  createDocument,
} = require("../controllers/group.controller");

router.post("/createOne", createOne);
router.get("/getAll", getAll);
router.get("/getInfoAndStudentsGroup", getInfoAndStudentsGroup);
router.post("/createDocument", createDocument);

module.exports = router;
