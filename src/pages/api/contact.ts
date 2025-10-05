export const prerender = false;

import { db } from '../../server/db/client.ts';
import { messages } from '../../server/db/schema.ts';
import { z } from 'zod';

const ContactSchema = z.object({
  discord: z.string().trim().min(2).max(37),
  message: z.string().trim().min(10).max(2000),
});

export async function POST({ request }: { request: Request }) {
  try {
    const body = await request.json().catch(() => ({}));
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid input' }), { status: 422 });
    }

    const { discord, message } = parsed.data;

    await db.insert(messages).values({ discord, message });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, error: 'Server error' }), { status: 500 });
  }
}
