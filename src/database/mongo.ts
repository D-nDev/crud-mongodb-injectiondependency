import mongoose from "mongoose";
import "dotenv/config";

export async function main() {
  const url = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017/newtest?authSource=admin&readPreference=primary&directConnection=true&ssl=false`;
  await mongoose.connect(url);
}
