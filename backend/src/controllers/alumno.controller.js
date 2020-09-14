const AlumnoModel = require("../models/alumno.model");
const FichaModel = require("../models/fichaMedica.model");
const ContactoModel = require("../models/contactoEmergencia.controller");

module.exports = {
  // @route     GET /api/students/getOne/:noControl
  // @desc      Get student info
  // @access    The student info can be public
  getOne: async (req, res) => {
    const { noControl } = req.params;

    const studentData = await AlumnoModel.findOne({
      noControl: parseInt(noControl),
    }).populate("ficha_medica");

    const fichaMedica = await FichaModel.findOne({
      contacto_emergencia: studentData.ficha_medica.contacto_emergencia,
    }).populate("contacto_emergencia");

    res.json({ studentData, fichaMedica });
  },
  // @route     POST /api/students/createOne
  // @desc      Insert new student info
  // @access    Private
  createOne: async (req, res) => {
    const { studentData, ficha_medica } = req.body;

    // Extract data from objects
    const { noControl, semestre, nss, ...restSD } = studentData;
    const { contacto_emergencia, ...restFM } = ficha_medica;

    const isAlredyRegistered = await AlumnoModel.findOne({ noControl });

    if (!isAlredyRegistered) {
      const contacto_created = await ContactoModel.create({
        ...contacto_emergencia,
      });
      const fm_created = await FichaModel.create({
        contacto_emergencia: contacto_created._id,
        ...restFM,
      });

      if (fm_created) {
        // is ficha medica inserted
        const student_created = await AlumnoModel.create({
          noControl: parseInt(noControl),
          semestre: parseInt(semestre),
          nss: parseInt(nss),
          ficha_medica: fm_created._id,
          ...restSD,
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
};
