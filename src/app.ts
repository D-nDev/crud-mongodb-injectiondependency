import "dotenv/config";
import "reflect-metadata";
import express from "express";
import fs from "fs";
import * as path from "path";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import { limiter, slower } from "@middlewares/rateLimit";
import cors from "cors";
import { ICommon } from "./ICommon";
import { HandleError } from "./middlewares/HandleError";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(HandleError);

const dateoptions: ICommon = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "America/Sao_Paulo",
};

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "./logs/Requests.log"),
  { flags: "a" }
);

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(helmet());
app.disable("x-powered-by");
app.use(limiter);
app.use(slower);
app.use(cors(corsOptions));
app.use(
  morgan(
    `:method :url :response-time ms\nDATE: ${new Date().toLocaleDateString(
      "en-US",
      dateoptions
    )}\nHTTP STATUS CODE: :status\n`,
    { stream: accessLogStream }
  )
);

export default app;