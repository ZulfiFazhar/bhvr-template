import { Link } from "react-router";

import { useState, useEffect } from "react";
import { userService, type User } from "../../services/userService";

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      setLoading(true);
      const newUser = await userService.createUser(name);
      setUsers([...users, newUser]);
      setName("");
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen py-2">
      <h1 className="text-4xl font-bold mb-4">User Page</h1>
      <p className="text-lg mb-2">Welcome to the user page!</p>
      <Link to="/" className="mb-8">
        Back to main Page
      </Link>

      <form onSubmit={handleSubmit} className="mb-8">
        <label htmlFor="name" className="flex gap-2 items-center">
          <span className="font-semibold">Name:</span>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter user name"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !name.trim()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {loading ? "Adding..." : "Add User"}
          </button>
        </label>
      </form>

      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Users List</h2>
        {loading && users.length === 0 ? (
          <p>Loading...</p>
        ) : users.length === 0 ? (
          <p className="text-gray-500">No users yet. Add one above!</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user) => (
              <li
                key={user.id}
                className="border border-gray-200 rounded p-3 hover:bg-gray-50 hover:text-black"
              >
                <span className="font-semibold">#{user.id}</span> - {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
