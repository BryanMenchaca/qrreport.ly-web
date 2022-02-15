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
    reportes: [{ type: Schema.Types.ObjectId, ref: "Reporte" }],
    citatorios: [{ type: Schema.Types.ObjectId, ref: "Citatorio" }],
    suspensiones: [{ type: Schema.Types.ObjectId, ref: "Suspension" }],
    curp: { type: String, default: "" },
    nss: { type: String, default: "" },
    status: Boolean,
    urlImage: {
      type: String,
      default: "https://qrreport.s3.amazonaws.com/default.png",
    },
  },
  { collection: "alumnos" }
);

module.exports = mongoose.model("Alumno", alumnoSchema);
