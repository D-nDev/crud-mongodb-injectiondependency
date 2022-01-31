import fs from "fs";
import path from "path";

export function ServerLog(error: any) {
  fs.appendFile(
    path.join(__dirname, `../logs/Server.log`),
    `${error}; Date: ${new Date().toLocaleDateString("en-us")}\n\n`,
    () => {
      console.log(error);
      console.log("There is an error on starting server, see logs for details");
      process.exit(0);
    }
  );
}
