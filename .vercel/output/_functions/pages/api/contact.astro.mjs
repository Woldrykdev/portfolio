import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const supabaseUrl = undefined                            ;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlZmJ5eG5lY2d4YnFlcG16eXhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2ODM1NzQsImV4cCI6MjA3NTI1OTU3NH0.NQUn_aIZf11fsUJ_LIY6_BJAuUCLJz-FYFxoDmu8P78";
const supabase = createClient(supabaseUrl, supabaseKey);
const post = async ({ request }) => {
  try {
    const data = await request.json();
    const { discord, message } = data;
    if (!discord || !message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), { status: 400 });
    }
    const { error } = await supabase.from("messages").insert([{ discord, message }]);
    if (error) {
      return new Response(JSON.stringify({ ok: false, error: error.message }), { status: 400 });
    }
    return new Response(JSON.stringify({ ok: true }));
  } catch (err) {
    console.error("Supabase error:", err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
