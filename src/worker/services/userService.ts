import { userData } from "../repositories/userRepository";

function addUser(name: string) {
  const newUser = { id: userData.length + 1, name };
  userData.push(newUser);
  return newUser;
}

function getUsers() {
  return userData;
}

export { addUser, getUsers };
