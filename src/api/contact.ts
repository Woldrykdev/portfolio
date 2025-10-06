import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const post: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as { discord?: string; message?: string; hp?: string };

    if (body.hp) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid submission' }), { status: 400 });
    }

    if (!body.discord || !body.message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing fields' }), { status: 400 });
    }

    const { error } = await supabase.from('messages').insert([
      { discord: body.discord.trim(), message: body.message.trim() },
    ]);

    if (error) throw error;

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), { status: 500 });
  }
};
