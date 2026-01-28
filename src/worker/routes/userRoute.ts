import { Hono } from "hono";
import {
  createUserController,
  getUserController,
} from "../controllers/userController";

const userRoute = new Hono<{ Bindings: Env }>();

userRoute.get("/", getUserController);
userRoute.post("/", createUserController);

export default userRoute;
