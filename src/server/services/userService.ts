import { userData } from "@server/repositories/userRepository";

function addUser(name: string) {
  const newUser = { id: userData.length + 1, name };
  userData.push(newUser);
  return newUser;
}

function getUsers() {
  return userData;
}

function getUserById(id: number) {
  return userData.find((user) => user.id === id);
}

function updateUser(id: number, name: string) {
  const user = userData.find((user) => user.id === id);
  if (user) {
    user.name = name;
    return user;
  }
  return null;
}

function removeUser(id: number) {
  const index = userData.findIndex((user) => user.id === id);
  if (index !== -1) {
    userData.splice(index, 1);
  }
}

export { addUser, getUsers, getUserById, updateUser, removeUser };
