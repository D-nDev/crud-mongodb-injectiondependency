import { Model, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  created_at: string;
}

export interface IProductSchema {
  schema: Schema;
  model: Model<IProduct>;
}
