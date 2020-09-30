const AlumnoModel = require("../models/alumno.model");
const FichaModel = require("../models/fichaMedica.model");
const ContactoModel = require("../models/contactoEmergencia.controller");

const ReporteModel = require("../models/reporte.model");
const CitatorioModel = require("../models/citatorio.model");
const SuspensionModel = require("../models/suspension.model");

const lowerAndCap = require("../lib/lowerAndCap");

module.exports = {
  // @route     GET /api/students/getOne/:noControl
  // @desc      Get student info
  // @access    Private
  getOne: async (req, res) => {
    const { noControl } = req.params;

    const studentData = await AlumnoModel.findOne({
      noControl: parseInt(noControl),
    }).populate(["reportes", "citatorios", "suspensiones"]);

    const fichaMedica = await FichaModel.findOne({
      noControl: parseInt(noControl),
    }).populate("contacto_emergencia");

    res.json({ studentData, fichaMedica });
  },
  // @route     POST /api/students/createOne
  // @desc      Insert new student info
  // @access    Private
  createOne: async (req, res) => {
    const today = new Date();
    const { studentData, ficha_medica } = req.body;

    // Extract data from objects
    const { contacto_emergencia, ...restFM } = ficha_medica;

    const isAlredyRegistered = await AlumnoModel.findOne({
      noControl: studentData.noControl,
    });

    if (!isAlredyRegistered) {
      const contacto_created = await ContactoModel.create({
        ...contacto_emergencia,
        nombre: lowerAndCap(contacto_emergencia.nombre),
      });

      const fm_created = await FichaModel.create({
        noControl: studentData.noControl,
        ...restFM,
        contacto_emergencia: contacto_created._id,
        actualizacion: today,
      });

      if (fm_created) {
        // is ficha medica inserted
        const student_created = await AlumnoModel.create({
          ...studentData,
          nombre: lowerAndCap(studentData.nombre),
          apellidoP: lowerAndCap(studentData.apellidoP),
          apellidoM: lowerAndCap(studentData.apellidoM),
          status: true,
        });

        if (student_created) {
          // is student data inserted
          res.send({
            error: false,
            message: "Datos registrados correctamente.",
          });
        } else {
          // else, return error and delete inserted data
          res.send({
            error: true,
            message: "Hubo un problema al registrar los datos.",
          });
          await FichaMedicaModel.deleteOne({ _id: fm_created._id });
        }
      } else {
        // else, return error and delete inserted data
        res.send({
          error: true,
          message: "Hubo un problema al registrar los datos.",
        });
        await ContactoModel.deleteOne({ _id: contacto_created._id });
      }
    } else {
      res.send({
        error: true,
        message: "El alumno(a) ya ha sido registrado anteriormente.",
      });
    }
  },
  // @route     GET /api/students/search/:value
  // @desc      Search students by noControl, nombre, apellidoP, apelliodoM, curp, nss
  // @access    Private
  search: async (req, res) => {
    var { value } = req.query;

    if (value != "") {
      const foundStudents = await AlumnoModel.find(
        {
          $or: [
            { noControl: { $regex: `.*${value}.*`, $options: "is" } },
            { nombre: { $regex: `.*${value}.*`, $options: "is" } },
            { apellidoP: { $regex: `.*${value}.*`, $options: "is" } },
            { apellidoM: { $regex: `.*${value}.*`, $options: "is" } },
            { curp: { $regex: `.*${value}.*`, $options: "is" } },
            { nss: { $regex: `.*${value}.*`, $options: "is" } },
          ],
        },
        [
          "noControl",
          "nombre",
          "apellidoP",
          "apellidoM",
          "semestre",
          "grupo",
          "status",
        ]
      );

      res.send(foundStudents);
    } else {
      res.json({ empty: true });
    }
  },
  // @route     GET /api/students/random
  // @desc      Get 10 random students to show in Search Page in frontend
  // @access    Private
  random: async (req, res) => {
    const randomStudents = await AlumnoModel.aggregate([
      { $sample: { size: 10 } },
    ]);
    res.send(randomStudents);
  },
  // @route     POST /api/students/edit
  // @desc      Get 10 random students
  // @access    Private
  edit: async (req, res) => {
    const {
      noControl,
      apellidoP,
      apellidoM,
      nombre,
      semestre,
      grupo,
      especialidad,
      generacion,
      curp,
      nss,
      reportes,
      citatorios,
      suspensiones,
      status,
      ...fichaMedica
    } = req.body;

    const editAlumno = await AlumnoModel.findOneAndUpdate({ noControl }, [
      {
        $set: {
          noControl,
          apellidoP,
          apellidoM,
          nombre,
          semestre,
          grupo,
          especialidad,
          generacion,
          curp,
          nss,
        },
      },
    ]);

    if (editAlumno) {
      const editFichaMedica = await FichaModel.findOneAndUpdate(
        { noControl },
        { $set: { ...fichaMedica } }
      );

      if (editFichaMedica) {
        res.send({ error: false, message: "Datos actualizados correctamente" });
      } else {
        res.send({
          error: false,
          message:
            "Hubo un problema al actualizar los datos de la ficha médica.",
        });
      }
    } else {
      res.send({
        error: false,
        message: "Hubo un problema al actualizar los datos.",
      });
    }
  },
};
