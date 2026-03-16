import { api, http } from "@/lib/http";

type User = {
  id: number;
  name: string;
};

export type ApiResponse<T> = {
  message: string;
  data: T;
};

export const userService = {
  async getUsers(): Promise<User[]> {
    const response = await http.get(api.users.getAll).json<ApiResponse<User[]>>();
    return response.data;
  },

  async getUser(id: number): Promise<User> {
    const response = await http.get(api.users.getOne(id)).json<ApiResponse<User>>();
    return response.data;
  },

  async createUser(name: string): Promise<User> {
    const response = await http
      .post(api.users.create, {
        json: { name },
      })
      .json<ApiResponse<User>>();
    return response.data;
  },

  async updateUser(id: number, name: string): Promise<User> {
    const response = await http
      .put(api.users.update(id), {
        json: { name },
      })
      .json<ApiResponse<User>>();
    return response.data;
  },

  async deleteUser(id: number): Promise<void> {
    await http.delete(api.users.delete(id));
  },
};

export type { User };
