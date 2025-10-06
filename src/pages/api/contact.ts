import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL!;
const supabaseKey = import.meta.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { discord, message } = data;

    if (!discord || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing fields' }), { status: 400 });
    }

    const { error } = await supabase.from('messages').insert([{ discord, message }]);

    if (error) {
      return new Response(JSON.stringify({ ok: false, error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ ok: true }));
  } catch (err: any) {
    console.error('Supabase error:', err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), { status: 500 });
  }
};
