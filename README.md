# Portfolio de Woldryk — Guía de Contacto y Mensajería

Este README resume cómo añadir y operar un formulario de contacto tipo “déjame un mensaje”, qué guardar en base de datos y buenas prácticas de seguridad, sin implementar código automáticamente.

## Paso a paso (de cero a producción)

Sigue estos pasos en orden. No necesitas experiencia previa; copia y pega.

### 0) Requisitos
- Tener Node.js 18+ instalado.
- Cuentas gratuitas en: Vercel y Supabase.

Verifica Node y npm:
```bash
node -v
npm -v
```

Instala dependencias del proyecto:
```bash
cd /Users/woldryk/Desktop/work/portfolio
npm install
```

### 1) Crear la base de datos en Supabase
1. Entra a supabase.com → New Project → crea un proyecto.
2. Copia la cadena de conexión (DATABASE_URL / Connection string). Ejemplo:
   `postgres://postgres:password@db.xxxxx.supabase.co:5432/postgres`
3. En el panel SQL de Supabase ejecuta este script para la tabla:
```sql
CREATE TABLE IF NOT EXISTS messages (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  discord text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  ip inet,
  user_agent text,
  source text,
  status text NOT NULL DEFAULT 'new'
);
CREATE INDEX IF NOT EXISTS messages_created_at_idx ON messages (created_at DESC);
```

### 2) Configurar variables de entorno (local)
Crea el archivo `.env` en la raíz del proyecto y pega tu conexión:
```bash
touch .env
```
Contenido de `.env`:
```bash
DATABASE_URL="PEGAR_AQUÍ_TU_CONNECTION_STRING_DE_SUPABASE"
```
Nota: No subas `.env` a GitHub.

### 3) Instalar Drizzle ORM y dependencias
```bash
npm i drizzle-orm postgres zod
npm i -D drizzle-kit
```

### 4) Configurar Drizzle
Crea `drizzle.config.ts` en la raíz con:
```ts
import 'dotenv/config';

export default {
  schema: './src/server/db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} as const;
```

Crea el esquema en `src/server/db/schema.ts`:
```ts
import { pgTable, serial, text, timestamp, inet } from 'drizzle-orm/pg-core';

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  discord: text('discord').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  ip: inet('ip'),
  userAgent: text('user_agent'),
  source: text('source'),
  status: text('status').notNull().default('new'),
});
```

Crea el cliente en `src/server/db/client.ts`:
```ts
import 'dotenv/config';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

const queryClient = postgres(process.env.DATABASE_URL!, {
  ssl: 'require',
  max: 1,
});

export const db = drizzle(queryClient);
```

### 5) Crear el endpoint del formulario
Crea `src/pages/api/contact.ts`:
```ts
import { db } from '../../server/db/client';
import { messages } from '../../server/db/schema';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  discord: z
    .string()
    .trim()
    .min(2)
    .max(37) // "woldryk" o formato antiguo "usuario#1234"
    .regex(/^[A-Za-z0-9_@#\.\-]+$/, 'Usuario de Discord inválido'),
  message: z.string().trim().min(10).max(2000),
  hp: z.string().optional(),
});

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minuto
const RATE_LIMIT_MAX = 3;
const memoryRateMap = new Map<string, number[]>();

function rateLimitOk(ip: string) {
  const now = Date.now();
  const arr = memoryRateMap.get(ip) ?? [];
  const filtered = arr.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (filtered.length >= RATE_LIMIT_MAX) return false;
  filtered.push(now);
  memoryRateMap.set(ip, filtered);
  return true;
}

export async function POST({ request, clientAddress }: { request: Request; clientAddress: string }) {
  try {
    const body = await request.json().catch(() => ({}));
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid input' }), { status: 422 });
    }

    const { name, discord, message, hp } = parsed.data;
    if (hp && hp.length > 0) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const ip = clientAddress || '0.0.0.0';
    if (!rateLimitOk(ip)) {
      return new Response(JSON.stringify({ ok: false, error: 'Too many requests' }), { status: 429 });
    }

    const userAgent = request.headers.get('user-agent') ?? '';
    const referer = request.headers.get('referer') ?? '';

    await db.insert(messages).values({
      name,
      discord,
      message,
      ip,
      userAgent,
      source: referer,
      status: 'new',
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'Server error' }), { status: 500 });
  }
}
```

### 6) Conectar el formulario del front
En tu formulario agrega:
```html
<!-- honeypot oculto -->
<input type="text" name="hp" style="display:none" tabindex="-1" autocomplete="off" />
<div data-status></div>
```

Y un script simple de envío (ajusta el selector del formulario):
```html
<script type="module">
  const form = document.querySelector('#contact-form');
  const btn = form.querySelector('button[type="submit"]');
  const statusEl = form.querySelector('[data-status]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    statusEl.textContent = 'Enviando...';

    const data = Object.fromEntries(new FormData(form).entries());
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      statusEl.textContent = '¡Mensaje enviado!';
      form.reset();
    } else {
      const { error } = await res.json().catch(() => ({ error: 'Error' }));
      statusEl.textContent = 'Error: ' + (error || 'Intenta más tarde');
    }

    btn.disabled = false;
  });
</script>
```

### 7) Probar en local
```bash
npm run dev
```
Abre `http://localhost:4321`, envía un mensaje de prueba y verifica en Supabase → Table Editor → `messages`.

Si falla:
- Revisa `.env` y la cadena `DATABASE_URL`.
- Mira la pestaña Network del navegador y la terminal.

### 8) Preparar deploy en Vercel
1. Sube el repositorio a GitHub (o GitLab/Bitbucket).
2. En Vercel → New Project → importa el repo.
3. En “Environment Variables”, agrega:
   - `DATABASE_URL` con tu cadena de Supabase (misma que en `.env`).
4. Framework: Astro. Build por defecto (`astro build`) y output `dist`.
5. Deploy.

Prueba el formulario en el dominio de Vercel y confirma que llegan filas a `messages`.

### 9) Recomendaciones de seguridad
- Mantén límites de longitud (ya aplicados con Zod).
- No muestres mensajes sin escaparlos si haces un panel.
- Si recibes mucho spam, agrega CAPTCHA (Cloudflare Turnstile) o limita con Redis/Upstash en lugar de memoria.

### 10) Notificaciones (opcional)
Configura Resend/Mailgun/Sendgrid para enviarte un e‑mail con cada mensaje. Añade sus variables de entorno en Vercel y envía el correo después del `insert`.

### 11) Checklist final
- [ ] Tabla `messages` creada en Supabase.
- [ ] `.env` con `DATABASE_URL` configurado.
- [ ] Drizzle instalado y configurado.
- [ ] Endpoint `/api/contact` creado.
- [ ] Formulario conectado (fetch) con honeypot.
- [ ] Probado en local sin errores.
- [ ] Deploy en Vercel con variables configuradas.
- [ ] Verificado que los datos llegan a Supabase.

## Flujo general
1. Usuario completa el formulario en `Contact`.
2. El front hace `POST` a un endpoint server-side (`/api/contact`).
3. El endpoint valida, limita abuso (rate‑limit, honeypot), persiste en BD y opcionalmente envía una notificación (email o webhook).

## Qué guardar (modelo de datos)
- name (text, requerido)
- discord (text, requerido) — tu usuario de Discord para contactarte
- message (text, requerido)
- created_at (timestamptz, default now())
- ip (inet), user_agent (text)
- source (text) — p. ej. página de origen o UTM
- status (text) — new | replied | archived

SQL de referencia:
```sql
CREATE TABLE messages (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  discord text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  ip inet,
  user_agent text,
  source text,
  status text NOT NULL DEFAULT 'new'
);
CREATE INDEX messages_created_at_idx ON messages (created_at DESC);
```

## Endpoint en Astro (concepto)
Ruta `POST /api/contact`:
1) Parsear JSON `{ name, email, message }`.
2) Validar: `trim`, longitudes, email válido, limitar `message` (p. ej. ≤ 2000 chars).
3) Anti‑spam: rate‑limit por IP, honeypot, verificar tiempo mínimo de relleno, CAPTCHA opcional.
4) Insertar en BD con ORM (Prisma/Drizzle) o driver.
5) Responder 200/422/429/500 según caso.

Borrador (no funcional aquí):
```ts
// src/pages/api/contact.ts (esquema)
export async function POST({ request, clientAddress }) {
  const { name, email, message, honeypot } = await request.json();
  // validar + rate limit + insertar en BD
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
```

## Frontend (formulario)
- Inputs: `name`, `email`, `message` y un campo honeypot oculto.
- Estados: loading, success, error; deshabilitar botón al enviar.
- Accesibilidad: labels, `aria-invalid`, mensajes de error.

Ejemplo de envío (conceptual):
```js
async function onSubmit(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const payload = Object.fromEntries(form.entries());
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  // manejar respuesta
}
```

## Seguridad y privacidad
- Validación estricta en el servidor (nunca confíes en el cliente).
- Rate‑limit por IP (p. ej. 3/min y 30/día) y bloqueo temporal.
- Honeypot + tiempo mínimo de rellenado.
- Sanitizar/escapar al mostrar en paneles.
- Aviso de privacidad: qué guardas y por cuánto tiempo.

## Notificaciones (opcional)
- Email transaccional (Resend, Sendgrid, Mailgun) al recibir un mensaje.
- Webhook a Slack/Discord para alertas instantáneas.

## Base de datos y despliegue
- Recomendación: PostgreSQL gestionado (Supabase/Neon) para producción.
- Variables de entorno: `DATABASE_URL`, `EMAIL_API_KEY`.
- Deploy en Vercel/Netlify con API Routes serverless.

## Alternativas sin backend propio
- Formspree/Basin/Getform para recepción + reenvío.
- Webhook desde esos servicios a Supabase Edge Functions para persistencia.

## Checklist de implementación
- [ ] Crear tabla `messages` (SQL arriba).
- [ ] Configurar ORM (Prisma/Drizzle) o driver y `DATABASE_URL`.
- [ ] Implementar `/api/contact` con validaciones y rate‑limit.
- [ ] Conectar el formulario del `Contact` a ese endpoint.
- [ ] Añadir honeypot y (opcional) CAPTCHA.
- [ ] Configurar notificaciones (email/webhook) si se desea.
- [ ] Probar en dev y en producción, revisar logs y cuotas.

