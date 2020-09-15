const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citatorioSchema = new Schema(
  {
    folio: String,
    noControl: String,
    fecha: { type: Date, default: Date.now },
    fechaCita: Date,
    horaCita: String,
    motivo: String,
    docente: String,
    asistencia: { type: Boolean, default: false },
  },
  { collection: "citatorios" }
);

module.exports = mongoose.model("Citatorio", citatorioSchema);
