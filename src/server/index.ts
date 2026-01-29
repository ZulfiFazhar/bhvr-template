import { Hono } from "hono";
import userRoute from "@server/routes/userRoute";

const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));
app.route("/api/users", userRoute);

export default app;
