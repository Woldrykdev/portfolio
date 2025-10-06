import type { APIContext } from 'astro';
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

console.log('SUPABASE_URL:', supabaseUrl);
console.log('SUPABASE_KEY:', supabaseKey?.slice(0, 10) + '...');

if (!supabaseUrl || !supabaseKey) {
  throw new Error('SUPABASE_URL and SUPABASE_KEY must be defined in environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function post({ request }: APIContext) {
  try {
    const { discord, message } = await request.json();
    console.log('Received:', discord, message);

    const { data, error } = await supabase
      .from('messages')
      .insert({ discord, message });

    console.log('Supabase response:', data, error);

    if (error) {
      return new Response(JSON.stringify({ ok: false, error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, error: 'Internal server error' }), { status: 500 });
  }
}
