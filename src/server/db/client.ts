import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!, { ssl: { rejectUnauthorized: false } });
export const db = drizzle(sql);
