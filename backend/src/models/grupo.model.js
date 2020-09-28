const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grupoSchema = new Schema(
  {
    semestre: String,
    grupo: String,
    especialidad: String,
    generacion: String,
    tutor: String,
    reportes: [{ type: Schema.Types.ObjectId, ref: "ReportesGrupales" }],
  },
  { collection: "grupos" }
);

module.exports = mongoose.model("Grupo", grupoSchema);
