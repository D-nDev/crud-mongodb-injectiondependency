import "reflect-metadata";
import { app } from "@routes/index.routes";
import { main } from "./database/mongo";
import "./shared/container";
import { ServerLog } from "./helpers/WriteStartLog";

async function bootstrap() {
  try {
    await main();
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
      console.log("Swagger API Docs running at /docs");
    });
  } catch (error: any) {
    ServerLog(error);
  }
}

bootstrap();
