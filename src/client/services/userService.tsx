type User = {
  id: number;
  name: string;
};

export const userService = {
  async getUsers(): Promise<User[]> {
    const response = await fetch("/api/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  },

  async getUser(id: number): Promise<User> {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return response.json();
  },

  async createUser(name: string): Promise<User> {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    return response.json();
  },

  async updateUser(id: number, name: string): Promise<User> {
    const response = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    return response.json();
  },

  async deleteUser(id: number): Promise<void> {
    const response = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
  },
};

export type { User };
