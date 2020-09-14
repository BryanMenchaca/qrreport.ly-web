const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactoEmergenciaSchema = new Schema(
  {
    parentesco: String,
    nombre: String,
    telefono: String,
    etiqueta: String,
  },
  { collection: "contactosEmergencia" }
);

module.exports = mongoose.model("ContactoEmergencia", contactoEmergenciaSchema);
