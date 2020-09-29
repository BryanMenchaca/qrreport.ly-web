const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const suspensionSchema = new Schema(
  {
    type: { type: String, default: "Suspension" },
    folio: String,
    noControl: String,
    fecha: { type: Date, default: Date.now },
    motivo: String,
    desde: Date,
    hasta: Date,
  },
  { collection: "suspensiones" }
);

module.exports = mongoose.model("Suspension", suspensionSchema);
