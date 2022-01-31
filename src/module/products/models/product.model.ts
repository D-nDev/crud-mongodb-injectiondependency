import { model, Schema, Model, Document } from "mongoose";

export default class ProductSchema {
  schema: Schema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
      created_at: {
        type: Date,
        default: Date.now,
        required: false,
      },
    },
    { versionKey: false }
  );
  model = model("Product", this.schema);
}
