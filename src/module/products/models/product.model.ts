import {
  model,
  Schema,
  Model,
  Document
} from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  created_at: string;
}

export interface IProductModel {
  schema: Schema;
  model: Model<IProduct>;
}

export default class ProductSchema {
  schema: Schema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now,
      required: false
    },
    
  }, { versionKey: false })
  model = model("Product", this.schema)
}


