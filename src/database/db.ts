import "dotenv/config";
import { drizzle } from "drizzle-orm/d1";

export interface Env {
  bhvr: D1Database;
}

export function getDb(env: Env) {
  return drizzle(env.bhvr);
}
