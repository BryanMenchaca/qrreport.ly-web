const AlumnoModel = require("../models/alumno.model");
const GrupoModel = require("../models/grupo.model");
const ReporteModel = require("../models/reporteGrupal.model");

module.exports = {
  // @route     POST /api/groups/createOne
  // @desc      Create a new group of students
  // @access    Private
  createOne: async (req, res) => {
    const { semestre, grupo, especialidad, tutor, generacion } = req.body;
    const isAlredyCreated = await GrupoModel.findOne({
      semestre,
      grupo,
      generacion,
    });

    if (!isAlredyCreated) {
      const groupCreated = await GrupoModel.create({
        semestre,
        grupo,
        especialidad,
        tutor,
        generacion,
      });

      if (groupCreated) {
        res.send({ error: false, message: "Grupo creado correctamente." });
      } else {
        res.send({
          error: true,
          message: "Hubo un problema interno al crear el grupo.",
        });
      }
    } else {
      res.send({
        error: true,
        message: `El grupo ${semestre} ° ${grupo} de generación ${generacion} ya ha sido creado anteriormente.`,
      });
    }
  },
  // @route     GET /api/groups/getAll
  // @desc      Get all groups of students
  // @access    Private
  getAll: async (req, res) => {
    const first = await GrupoModel.find({
      $or: [{ semestre: "1" }, { semestre: "2" }],
    });

    const second = await GrupoModel.find({
      $or: [{ semestre: "3" }, { semestre: "4" }],
    });

    const third = await GrupoModel.find({
      $or: [{ semestre: "5" }, { semestre: "6" }],
    });

    res.send({ first, second, third });
  },
  // @route     GET /api/groups/getInfoAndStudentsGroup
  // @desc      Get the info of a group and list of students
  // @access    Private
  getInfoAndStudentsGroup: async (req, res) => {
    const { grupo, generacion } = req.query;

    const groupInfo = await GrupoModel.findOne({
      semestre: grupo.split("")[0],
      grupo: grupo.split("")[1],
    });

    const students = await AlumnoModel.find(
      { semestre: grupo.split("")[0], grupo: grupo.split("")[1], generacion },
      [
        "noControl",
        "nombre",
        "apellidoP",
        "apellidoM",
        "reportes",
        "citatorios",
        "suspensiones",
      ]
    );

    res.send({ groupInfo, students });
  },
  // @route     POST /api/groups/createDocument
  // @desc      Create a new document for a group
  // @access    Private
  createDocument: async (req, res) => {
    const { semestre, grupo, generacion, ...data } = req.body;
    const filter = { semestre, grupo, generacion };

    const isCreated = await ReporteModel.create(data);

    if (isCreated) {
      var { reportes } = await GrupoModel.findOne(filter, "reportes");
      reportes.push(isCreated._id);
      const update = await GrupoModel.findOneAndUpdate(
        filter,
        {
          $set: { reportes },
        },
        { new: true }
      );
      if (update) {
        res.send({
          error: false,
          message: "Reporte grupal creado correctamente.",
        });
      } else {
        await ReporteModel.deleteOne({ _id: isCreated._id });
        res.send({
          error: false,
          message: "Reporte grupal creado correctamente.",
        });
      }
    } else {
      res.send({
        error: true,
        message: "Hubo un problema al crear el reporte grupal.",
      });
    }
  },
};
