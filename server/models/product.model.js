const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: [10, "El minimo es de 10"],
    },
    price: { type: Number },
    description: { type: String },
  },
  { timestamps: true }
);
module.exports.Product = mongoose.model("Product", ProductSchema);
