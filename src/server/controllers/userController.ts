import type { Context } from "hono";
import {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  removeUser,
} from "@server/services/userService";

async function createUserController(c: Context) {
  const { name } = await c.req.json();
  const newUser = addUser(name);
  return c.json(newUser, 201);
}

function getUsersController(c: Context) {
  const users = getUsers();
  return c.json(users);
}

function getUserByIdController(c: Context) {
  const id = Number(c.req.param("id"));
  const user = getUserById(id);
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json(user);
}

async function updateUserController(c: Context) {
  const id = Number(c.req.param("id"));
  const { name } = await c.req.json();
  const updatedUser = updateUser(id, name);
  if (!updatedUser) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json(updatedUser);
}

function removeUserController(c: Context) {
  const id = Number(c.req.param("id"));
  removeUser(id);
  return c.json({ message: "User removed" });
}

export {
  createUserController,
  getUsersController,
  getUserByIdController,
  updateUserController,
  removeUserController,
};
