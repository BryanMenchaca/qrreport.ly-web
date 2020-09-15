const AlumnoModel = require("../models/alumno.model");
const FichaModel = require("../models/fichaMedica.model");
const ContactoModel = require("../models/contactoEmergencia.controller");

module.exports = {
  // @route     GET /api/students/getOne/:noControl
  // @desc      Get student info
  // @access    The student info can be public
  getOne: async (req, res) => {
    const { noControl } = req.params;

    const studentData = await AlumnoModel.findOne({ noControl: parseInt(noControl), });

    const fichaMedica = await FichaModel.findOne({
      noControl: parseInt(noControl)
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

    const isAlredyRegistered = await AlumnoModel.findOne({ noControl: studentData.noControl });

    if (!isAlredyRegistered) {
      const contacto_created = await ContactoModel.create({
        ...contacto_emergencia,
      });
      const fm_created = await FichaModel.create({
        noControl: studentData.noControl,
        ...restFM,
        contacto_emergencia: contacto_created._id,
        actualizacion: today
      });

      if (fm_created) {
        // is ficha medica inserted
        const student_created = await AlumnoModel.create({...studentData, status: true});

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
    var { value } = req.params;

    if (value != "") {
      const foundStudents = await AlumnoModel.find({
        $or: [
          {noControl: { $regex: value , $options: 'is'}},
          {nombre: { $regex: value, $options: 'is'}},
          {apellidoP: { $regex: value, $options: 'is' }},
          {apellidoM: { $regex: value, $options: 'is' }},
          {curp: { $regex: value, $options: 'is' }},
          {nss: { $regex: value, $options: 'is' }}
        ]
      }, ["noControl", "nombre", "apellidoP", "apellidoM", "semestre", "grupo", "status"]);

      if (foundStudents.length != 0) {
        res.json({foundStudents});
      } else {
        res.json({match: false});
      }
    } else {
      res.json({empty: true});
    }
  }
};
