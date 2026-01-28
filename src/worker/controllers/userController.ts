import type { Context } from "hono";
import { addUser, getUsers } from "../services/userService";

async function createUserController(c: Context) {
  const { name } = await c.req.json();
  const newUser = addUser(name);
  return c.json(newUser, 201);
}

function getUserController(c: Context) {
  const users = getUsers();
  return c.json(users);
}

export { createUserController, getUserController };
