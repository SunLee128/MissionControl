import { Router } from "http://deno.land/x/oak@v5.0.0/mod.ts";
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Mission Control API";
});
export default router;
