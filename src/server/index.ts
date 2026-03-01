import { Hono } from "hono";
import routes from "@server/routes";

const app = new Hono<{ Bindings: Env }>();

app.route("/", routes);

export default app;
