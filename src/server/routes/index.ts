import { Hono } from "hono";
import userRoute from "@server/routes/userRoute";

const routes = new Hono<{ Bindings: Env }>().basePath("/api");

routes.get("/name", (c) => c.json({ name: "Cloudflare" }));
routes.route("/users", userRoute);

export default routes;
