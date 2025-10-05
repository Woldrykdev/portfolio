export const prerender = false;

import { db } from '../../server/db/client';
import { messages } from '../../server/db/schema';
import { z } from 'zod';

const ContactSchema = z.object({
  discord: z.string().trim().min(2).max(50),
  message: z.string().trim().min(5).max(5000),
});

export async function POST({ request }: { request: Request }) {
  try {
    const body = await request.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      console.log('❌ Invalid data received:', body);
      return new Response(JSON.stringify({ ok: false, error: 'Invalid input' }), { status: 422 });
    }

    const { discord, message } = parsed.data;

    await db.insert(messages).values({ discord, message });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('🔥 Server error:', err);
    return new Response(JSON.stringify({ ok: false, error: 'Server error' }), { status: 500 });
  }
}
