const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alumnoSchema = new Schema(
  {
    noControl: Number,
    nombre: String,
    apellidoP: String,
    apellidoM: String,
    semestre: Number,
    grupo: String,
    especialidad: String,
    generacion: String,
    reportes: [{ type: Schema.Types.ObjectId, ref: "Reportes" }],
    citatorios: [{ type: Schema.Types.ObjectId, ref: "Citatorios" }],
    suspensiones: [{ type: Schema.Types.ObjectId, ref: "Suspensiones" }],
    curp: String,
    nss: Number,
    ficha_medica: { type: Schema.Types.ObjectId, ref: "FichaMedica" },
  },
  { collection: "alumnos" }
);

module.exports = mongoose.model("Alumno", alumnoSchema);
