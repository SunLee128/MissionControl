import { Router } from "http://deno.land/x/oak@v5.0.0/mod.ts";
import * as planets from "./models/planets.ts";
import * as launches from "./models/launches.ts";
import castSlice from "../../Library/Caches/deno/deps/https/deno.land/c6de4316dc5fd69ec40d4cf51259d23fb42738b21e18a355258bcb1ba0eb2336.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Mission Control API";
});

router.get("/planets", (ctx) => {
  ctx.response.body = planets.getAllPlanets();
});

router.get("/launches", (ctx) => {
  ctx.response.body = launches.getAll();
});

router.get("/launches/:id", (ctx) => {
    ctx.response.body = launches.getOne(Number(ctx.params.id));
  }
});

export default router;
