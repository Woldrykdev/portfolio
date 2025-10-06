import type { APIContext } from 'astro';
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'; // para que funcione en local

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('SUPABASE_URL and SUPABASE_KEY must be defined in environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function post({ request }: APIContext) {
  try {
    const body = await request.json();
    const { discord, message } = body;

    if (!discord || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing fields' }), { status: 400 });
    }

    const { error } = await supabase
      .from('messages')
      .insert([{ discord, message }]);

    if (error) {
      console.error(error);
      return new Response(JSON.stringify({ ok: false, error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), { status: 500 });
  }
}
