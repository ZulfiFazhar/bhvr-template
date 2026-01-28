import { Hono } from "hono";
import {
  createUserController,
  getUsersController,
  getUserByIdController,
  updateUserController,
  removeUserController,
} from "../controllers/userController";

const userRoute = new Hono<{ Bindings: Env }>();

userRoute.get("/", getUsersController);
userRoute.post("/", createUserController);
userRoute.get("/:id", getUserByIdController);
userRoute.put("/:id", updateUserController);
userRoute.delete("/:id", removeUserController);

export default userRoute;
