export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), tailwind()],
});
