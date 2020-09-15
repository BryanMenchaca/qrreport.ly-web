const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alumnoSchema = new Schema(
  {
    noControl: String,
    nombre: String,
    apellidoP: String,
    apellidoM: String,
    semestre: String,
    grupo: String,
    especialidad: String,
    generacion: String,
    reportes: [{ type: Schema.Types.ObjectId, ref: "Reportes" }],
    citatorios: [{ type: Schema.Types.ObjectId, ref: "Citatorios" }],
    suspensiones: [{ type: Schema.Types.ObjectId, ref: "Suspensiones" }],
    curp: String,
    nss: String,
    status: Boolean
  },
  { collection: "alumnos" }
);

module.exports = mongoose.model("Alumno", alumnoSchema);
