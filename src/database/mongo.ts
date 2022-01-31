import mongoose from "mongoose";
import "dotenv/config";

const isDocker = process.env.DOCKER == "YES" ? "mongodb-primary" : "localhost";

export async function main() {
  const url = `mongodb://${process.env.API_MONGO_USER}:${process.env.API_MONGO_PASSWORD}@${isDocker}:27017/${process.env.API_MONGO_DATABASE}?authSource=admin&readPreference=primary&directConnection=true&ssl=false`;
  await mongoose.connect(url, {
    serverSelectionTimeoutMS: 10000,
  });
}
