const AlumnoModel = require("../models/alumno.model");
const ReporteModel = require("../models/reporte.model");
const CitatorioModel = require("../models/citatorio.model");
const SuspensionModel = require("../models/suspension.model");
const ReporteGrupalModel = require("../models/reporteGrupal.model");

module.exports = {
  // @route     GET /api/students/folio/:x
  // @desc      Create the last folio
  // @access    Private
  folio: async (req, res) => {
    const { x } = req.params;
    var last = [], folio = 0;

    // Get last document "folio" of a collection type 
    switch (x) {
      case "reporte":
        last = await ReporteModel.find().sort({ $natural: -1 }).limit(1);
        break;
      case "citatorio":
        last = await CitatorioModel.find().sort({ $natural: -1 }).limit(1);
        break;
      case "suspension":
        last = await SuspensionModel.find().sort({ $natural: -1 }).limit(1);
        break;
      case "reporteGrupal":
        last = await ReporteGrupalModel.find().sort({ $natural: -1 }).limit(1);
        break;
      default:
        res.send({ error: true, message: "default" });
        break;
    }

    if (last.length == 0) {
      last[0] = { folio: "0" };
    }

    folio = parseInt(last[0].folio) + 1;

    res.send({ folio });
  },
  // @route     POST /api/students/createDocument
  // @desc      Create a new document for a student
  // @access    Private
  createReporte: async (req, res) => {
    const { noControl, ...data } = req.body;

    const isCreated = await ReporteModel.create(data);

    if (isCreated) {
      var { reportes } = await AlumnoModel.findOne({ noControl }, ["reportes"]);
      reportes.push(isCreated._id);

      const update = await AlumnoModel.findOneAndUpdate(
        { noControl },
        { $set: { reportes } },
        { new: true }
      );

      if (update) {
        res.send({
          error: false,
          message: "Reporte creado correctamente.",
        });
      } else {
        await reportes.deleteOne({ id: isCreated._id });
        res.send({
          error: true,
          message: "Hubo un problema al crear el reporte.",
        });
      }
    } else {
      res.send({
        error: true,
        message: "Hubo un problema al crear el reporte.",
      });
    }
  },
  createCitatorio: async (req, res) => {
    const { noControl, ...data } = req.body;
    const isCreated = await CitatorioModel.create(data);

    if (isCreated) {
      var { citatorios } = await AlumnoModel.findOne({ noControl }, [
        "citatorios",
      ]);
      citatorios.push(isCreated._id);

      const update = await AlumnoModel.findOneAndUpdate(
        { noControl },
        { $set: { citatorios } },
        { new: true }
      );

      if (update) {
        res.send({
          error: false,
          message: "Citatorio creado correctamente.",
        });
      } else {
        await CitatorioModel.deleteOne({ id: isCreated._id });
        res.send({
          error: true,
          message: "Hubo un problema al crear el citatorio.",
        });
      }
    } else {
      res.send({
        error: true,
        message: "Hubo un problema al crear el reporte de suspensión.",
      });
    }
  },
  createSuspension: async (req, res) => {
    const { noControl, ...data } = req.body;
    const isCreated = await SuspensionModel.create(data);

    if (isCreated) {
      var { suspensiones } = await AlumnoModel.findOne({ noControl }, [
        "suspensiones",
      ]);
      suspensiones.push(isCreated._id);

      const update = await AlumnoModel.findOneAndUpdate(
        { noControl },
        { $set: { suspensiones } },
        { new: true }
      );

      if (update) {
        res.send({
          error: false,
          message: "Reporte de suspensión creado correctamente.",
        });
      } else {
        await SuspensionModel.deleteOne({ id: isCreated._id });
        res.send({
          error: true,
          message: "Hubo un problema al crear el reporte de suspensión.",
        });
      }
    } else {
      res.send({
        error: true,
        message: "Hubo un problema al crear el reporte de suspensión.",
      });
    }
  },
};
