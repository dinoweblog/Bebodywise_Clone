const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    productName: { type: String, required: true },
    productType: { type: String, required: true },
    productIssue: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    productUses: { type: String, required: true },
    productMade: { type: String, required: true },
    imageUrl: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    soldItems: { type: Number, required: true },
    imagesAll: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("all_products", productSchema);
