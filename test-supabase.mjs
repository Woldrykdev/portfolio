import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function test() {
  const { data, error } = await supabase.from('messages').select();
  console.log({ data, error });
}

test();
