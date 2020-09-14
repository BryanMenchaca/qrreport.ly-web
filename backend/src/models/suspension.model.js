const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const suspensionSchema = new Schema(
  {
    folio: String,
    noControl: Number,
    fecha: { type: Date, default: Date.now },
    motivo: String,
    desde: Date,
    hasta: Date,
  },
  { collection: "suspensiones" }
);

module.exports = mongoose.model("Suspension", suspensionSchema);
