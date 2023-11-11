import { add } from "@math/index.ts";
import { log } from "console";
import Koa from "koa";

const port = 8000;
const app = new Koa();
app.listen(port, () => {
  log(`app is running at http://localhost:${port}`);
});

log("lib import test: add(1, 1) = ", add(1, 1));