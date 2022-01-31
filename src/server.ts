import "reflect-metadata";
import { app } from "@routes/index.routes";
import { main } from "./database/mongo";
import "./shared/container";
import { generate } from "./helpers/GenerateLogsFolder";
import writeLog from "./helpers/WriteLog";

async function bootstrap() {
  try {
    await main();
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
      console.log("Swagger API Docs running at /docs");
    });
  } catch (error) {
    writeLog(error, "Server");
    console.log(error);
    console.log("There is an error on starting server, see logs for details");
    process.exit(0);
  }
}

generate();
bootstrap();
