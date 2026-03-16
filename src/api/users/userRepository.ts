import { eq } from "drizzle-orm";
import { usersTable } from "../../database/schema";
import type { DrizzleD1Database } from "drizzle-orm/d1";

type User = {
  id: number;
  name: string;
};

class UserRepository {
  async getAll(db: DrizzleD1Database): Promise<User[]> {
    return await db.select().from(usersTable);
  }

  async findById(db: DrizzleD1Database, id: number): Promise<User | undefined> {
    const result = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id));
    return result[0];
  }

  async add(db: DrizzleD1Database, name: string): Promise<User> {
    const result = await db.insert(usersTable).values({ name }).returning();
    return result[0];
  }

  async update(
    db: DrizzleD1Database,
    id: number,
    name: string,
  ): Promise<User | null> {
    const result = await db
      .update(usersTable)
      .set({ name })
      .where(eq(usersTable.id, id))
      .returning();

    return result.length > 0 ? result[0] : null;
  }

  async remove(db: DrizzleD1Database, id: number): Promise<void> {
    await db.delete(usersTable).where(eq(usersTable.id, id));
  }
}

export const userRepository = new UserRepository();
