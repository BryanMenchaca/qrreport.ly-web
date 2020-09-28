const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteGrupalSchema = new Schema(
  {
    folio: String,
    noControl: String,
    fecha: { type: Date, default: Date.now },
    motivo: String,
    observaciones: { type: String, default: "Sin observaciones" },
  },
  { collection: "reportesGrupales" }
);

module.exports = mongoose.model("ReporteGrupal", reporteGrupalSchema);
