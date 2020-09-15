const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteSchema = new Schema(
  {
    folio: String,
    noControl: String,
    fecha: { type: Date, default: Date.now },
    motivo: String,
    observaciones: { type: String, default: "Sin observaciones" },
    docente: String,
  },
  { collection: "reportes" }
);

module.exports = mongoose.model("Reporte", reporteSchema);
