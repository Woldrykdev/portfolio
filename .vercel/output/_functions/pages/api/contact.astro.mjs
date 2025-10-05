import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv/config';
import { pgTable, timestamp, text, serial } from 'drizzle-orm/pg-core';
import { z } from 'zod';
export { renderers } from '../../renderers.mjs';

const client = postgres(process.env.DATABASE_URL, { ssl: "require" });
const db = drizzle(client);

const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  discord: text("discord").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow()
});

const prerender = false;
const ContactSchema = z.object({
  discord: z.string().trim().min(2).max(50),
  message: z.string().trim().min(5).max(5e3)
});
async function POST({ request }) {
  try {
    const body = await request.json();
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      console.log("❌ Invalid data received:", body);
      return new Response(JSON.stringify({ ok: false, error: "Invalid input" }), { status: 422 });
    }
    const { discord, message } = parsed.data;
    await db.insert(messages).values({ discord, message });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("🔥 Server error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
