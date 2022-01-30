import fs from "fs";
import * as path from "path";

export function generate() {
  if (!fs.existsSync(path.join(__dirname, "../logs/Requests.log"))) {
    fs.mkdirSync(path.join(__dirname, "../logs"), { recursive: true });
  }
}
