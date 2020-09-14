const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fichaMedicaSchema = new Schema(
  {
    padecimientos: String,
    notas_medicas: String,
    alergias_reacciones: String,
    medicamentos: String,
    grupo_sanguineo: String,
    peso: String,
    estatura: String,
    contacto_emergencia: {
      type: Schema.Types.ObjectId,
      ref: "ContactoEmergencia",
    },
  },
  { collection: "fichasMedicas" }
);

module.exports = mongoose.model("FichaMedica", fichaMedicaSchema);
