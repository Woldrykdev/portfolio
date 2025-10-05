/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot } from '../chunks/astro/server_BLKbdJU0.mjs';
import 'kleur/colors';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 w-full backdrop-blur bg-[#0e0e10]/80 z-50"> <div class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4"> <!-- Logo --> <a href="/" class="text-xl font-bold text-[#a855f7] hover:opacity-80 transition"> <img src="/Logo.png" alt="Logo" class="h-8 inline-block mr-2">
Woldryk
</a> <!-- Nav --> <nav class="space-x-6 hidden md:block"> <a href="#projects" class="hover:text-[#a855f7] transition">Projects</a> <a href="#about" class="hover:text-[#a855f7] transition">About Me</a> <a href="#contact" class="hover:text-[#a855f7] transition">Contact</a> </nav> </div> </header>`;
}, "/Users/woldryk/Desktop/work/portfolio/src/components/Header.astro", void 0);

const FadeInUp = ({ children, delay = 0 }) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay },
      viewport: { once: true },
      children
    }
  );
};

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"> ${renderComponent($$result, "FadeInUp", FadeInUp, { "delay": 0.1, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": ($$result2) => renderTemplate` <h1 class="text-5xl md:text-7xl font-extrabold mb-4">
Hi, I'm <span class="text-[#a855f7]">WoldrykDev</span> </h1> ` })} ${renderComponent($$result, "FadeInUp", FadeInUp, { "delay": 0.3, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": ($$result2) => renderTemplate` <p class="text-lg md:text-xl max-w-xl mb-6">
Web Designer & Developer — crafting modern, engaging digital experiences.
</p> ` })} ${renderComponent($$result, "FadeInUp", FadeInUp, { "delay": 0.5, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": ($$result2) => renderTemplate` <div class="space-x-4"> <a href="#projects" class="px-6 py-3 bg-[#a855f7] rounded-xl shadow-lg hover:shadow-[#a855f7]/50 transition font-semibold">
View Projects
</a> <a href="#contact" class="px-6 py-3 border border-[#a855f7] rounded-xl hover:bg-[#a855f7]/10 transition font-semibold">
Contact Me
</a> </div> ` })} </section>`;
}, "/Users/woldryk/Desktop/work/portfolio/src/components/Hero.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="max-w-6xl mx-auto py-20 px-6"> ${renderComponent($$result, "FadeInUp", FadeInUp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": ($$result2) => renderTemplate` <h2 class="text-3xl font-bold mb-10 text-center">
My <span class="text-[#a855f7]">Projects</span> </h2> ` })} <div class="grid md:grid-cols-3 gap-8"> <!-- Artix --> ${renderComponent($$result, "FadeInUp", FadeInUp, { "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": ($$result2) => renderTemplate` <div class="bg-[#1a1a1d] rounded-xl p-6 shadow-lg hover:shadow-[#a855f7]/40 transition hover:-translate-y-2 duration-300"> <div class="h-40 rounded-lg mb-4 bg-cover bg-center" style="background-image: url('/Artix.png');"></div> <h3 class="text-xl font-semibold mb-2">Artix</h3> <p class="text-gray-400 text-sm">Main site for Artix.</p> </div> ` })} <!-- Resurrect --> ${renderComponent($$result, "FadeInUp", FadeInUp, { "delay": 0.4, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": ($$result2) => renderTemplate` <div class="bg-[#1a1a1d] rounded-xl p-6 shadow-lg hover:shadow-[#a855f7]/40 transition hover:-translate-y-2 duration-300"> <div class="h-40 rounded-lg mb-4 bg-cover bg-center" style="background-image: url('/Resu.png');"></div> <h3 class="text-xl font-semibold mb-2">Resurrect</h3> <p class="text-gray-400 text-sm">New website for Resurrect.</p> </div> ` })} <!-- BoostSupply --> ${renderComponent($$result, "FadeInUp", FadeInUp, { "delay": 0.6, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": ($$result2) => renderTemplate` <div class="bg-[#1a1a1d] rounded-xl p-6 shadow-lg hover:shadow-[#a855f7]/40 transition hover:-translate-y-2 duration-300"> <div class="h-40 rounded-lg mb-4 bg-cover bg-center" style="background-image: url('/Boost.png');"></div> <h3 class="text-xl font-semibold mb-2">BoostSupply</h3> <p class="text-gray-400 text-sm">Thank you page for BoostSupply.</p> </div> ` })} </div> </section>`;
}, "/Users/woldryk/Desktop/work/portfolio/src/components/Projects.astro", void 0);

const $$Astro$1 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section id="about" class="max-w-6xl mx-auto py-20 px-6 text-center"> ${renderComponent($$result, "FadeInUp", FadeInUp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": ($$result2) => renderTemplate` <h2 class="text-3xl font-bold mb-10">
About <span class="text-[#a855f7]">Me</span> </h2> ` })} ${renderComponent($$result, "FadeInUp", FadeInUp, { "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": ($$result2) => renderTemplate` <p class="max-w-2xl mx-auto text-gray-400 mb-8 leading-relaxed">
I'm a web designer and developer passionate about building
        clean, modern, and impactful digital experiences.
        I enjoy working on both <span class="text-[#a855f7] font-semibold">frontend</span>
and <span class="text-[#a855f7] font-semibold">backend</span>,
        blending design with logic to create unique projects.
</p> ` })} ${renderComponent($$result, "FadeInUp", FadeInUp, { "delay": 0.4, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap justify-center gap-6 mt-12"> <!-- React --> <div class="group relative"> <div class="p-4 rounded-xl bg-[#1a1a1d] hover:bg-[#a855f7]/10 transition-all duration-300 cursor-pointer"> <img src="/logos/react.svg" alt="React" class="w-10 h-10"> </div> <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#a855f7] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
React
</div> </div> <!-- JavaScript --> <div class="group relative"> <div class="p-4 rounded-xl bg-[#1a1a1d] hover:bg-[#a855f7]/10 transition-all duration-300 cursor-pointer"> <img src="/logos/javascript.svg" alt="JavaScript" class="w-10 h-10"> </div> <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#a855f7] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
JavaScript
</div> </div> <!-- HTML --> <div class="group relative"> <div class="p-4 rounded-xl bg-[#1a1a1d] hover:bg-[#a855f7]/10 transition-all duration-300 cursor-pointer"> <img src="/logos/html5.svg" alt="HTML" class="w-10 h-10"> </div> <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#a855f7] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
HTML
</div> </div> <!-- CSS --> <div class="group relative"> <div class="p-4 rounded-xl bg-[#1a1a1d] hover:bg-[#a855f7]/10 transition-all duration-300 cursor-pointer"> <img src="/logos/css3.svg" alt="CSS" class="w-10 h-10"> </div> <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#a855f7] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
CSS
</div> </div> <!-- TypeScript --> <div class="group relative"> <div class="p-4 rounded-xl bg-[#1a1a1d] hover:bg-[#a855f7]/10 transition-all duration-300 cursor-pointer"> <img src="/logos/typescript.svg" alt="TypeScript" class="w-10 h-10"> </div> <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#a855f7] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
TypeScript
</div> </div> <!-- Tailwind --> <div class="group relative"> <div class="p-4 rounded-xl bg-[#1a1a1d] hover:bg-[#a855f7]/10 transition-all duration-300 cursor-pointer"> <img src="/logos/tailwindcss.svg" alt="Tailwind CSS" class="w-10 h-10"> </div> <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#a855f7] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
Tailwind CSS
</div> </div> <!-- Astro --> <div class="group relative"> <div class="p-4 rounded-xl bg-[#1a1a1d] hover:bg-[#a855f7]/10 transition-all duration-300 cursor-pointer"> <img src="/logos/astro.svg" alt="Astro" class="w-10 h-10"> </div> <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#a855f7] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
Astro
</div> </div> <!-- Figma --> <div class="group relative"> <div class="p-4 rounded-xl bg-[#1a1a1d] hover:bg-[#a855f7]/10 transition-all duración-300 cursor-pointer"> <img src="/logos/figma.svg" alt="Figma" class="w-10 h-10"> </div> <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#a855f7] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
Figma
</div> </div> </div> ` })} </section>`;
}, "/Users/woldryk/Desktop/work/portfolio/src/components/About.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section id="contact" class="max-w-4xl mx-auto py-20 px-6 text-center"> ', " ", " ", ` </section> <script type="module">
  const form = document.querySelector('#contact-form');
  const statusEl = form.querySelector('[data-status]');
  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    statusEl.textContent = 'Sending...';

    const data = Object.fromEntries(new FormData(form).entries());

    if (data.hp) {
      statusEl.textContent = 'Invalid submission.';
      btn.disabled = false;
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          discord: data.discord?.trim(),
          message: data.message?.trim()
        }),
      });

      const json = await res.json();

      if (res.ok && json.ok) {
        statusEl.textContent = '\u2705 Message sent! I will reach you on Discord.';
        form.reset();
      } else {
        statusEl.textContent = '\u26A0\uFE0F Invalid input \u2014 please check your message.';
      }
    } catch {
      statusEl.textContent = '\u274C Network error. Try again later.';
    }

    btn.disabled = false;
  });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "FadeInUp", FadeInUp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": async ($$result2) => renderTemplate` <h2 class="text-3xl font-bold mb-10">
Let's <span class="text-[#a855f7]">Work</span> Together
</h2> ` }), renderComponent($$result, "FadeInUp", FadeInUp, { "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": async ($$result2) => renderTemplate` <form id="contact-form" class="space-y-6 max-w-xl mx-auto"> <input type="text" name="discord" placeholder="Your Discord (e.g. woldrykdev)" required class="w-full p-4 rounded-lg bg-[#1a1a1d] border border-[#a855f7]/30 focus:border-[#a855f7] outline-none transition-colors"> <textarea name="message" rows="5" placeholder="Your message" required class="w-full p-4 rounded-lg bg-[#1a1a1d] border border-[#a855f7]/30 focus:border-[#a855f7] outline-none transition-colors"></textarea> <input type="text" name="hp" style="display:none" tabindex="-1" autocomplete="off"> <button type="submit" class="px-6 py-3 bg-[#a855f7] rounded-xl shadow-lg hover:shadow-[#a855f7]/50 transition-all font-semibold w-full hover:scale-105">
Send Message
</button> <div data-status class="text-sm text-gray-400"></div> </form> ` }), renderComponent($$result, "FadeInUp", FadeInUp, { "delay": 0.4, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/MotionWrapper.jsx", "client:component-export": "FadeInUp" }, { "default": async ($$result2) => renderTemplate` <div class="flex justify-center space-x-6 mt-10"> <a href="https://github.com/woldrykdev" target="_blank" class="hover:text-[#a855f7] transition-colors">GitHub</a> <a href="https://linkedin.com/in/yourusername" target="_blank" class="hover:text-[#a855f7] transition-colors">LinkedIn</a> </div> ` }));
}, "/Users/woldryk/Desktop/work/portfolio/src/components/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="py-6 text-center border-t border-[#a855f7]/20 mt-20"> <p class="text-sm text-gray-400">
© 2025 WoldrykDev — Designed & built by me 🦍
</p> </footer>`;
}, "/Users/woldryk/Desktop/work/portfolio/src/components/Footer.astro", void 0);

function Particles({ color = "#a855f7", density = 12e-5, speed = 0.4, size = [1, 2] }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    resize();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particleCount = prefersReducedMotion ? 0 : Math.max(20, Math.floor(width * height * density));
    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
    const [minSize, maxSize] = size;
    const particles = new Array(particleCount).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() * 2 - 1) * speed,
      vy: (Math.random() * 2 - 1) * speed,
      r: clamp(minSize + Math.random() * (maxSize - minSize), 0.5, 3.5),
      o: 0.4 + Math.random() * 0.6
    }));
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height));
      gradient.addColorStop(0, "rgba(168, 85, 247, 0.03)");
      gradient.addColorStop(1, "rgba(14, 14, 16, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = color;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
        ctx.globalAlpha = p.o;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = color;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < 140 * 140) {
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(draw);
    };
    animationRef.current = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [color, density, speed, size]);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "floating-background",
      style: { position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" },
      "aria-hidden": "true"
    }
  );
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Portfolio | Woldryk", description = "Portfolio personal de dise\xF1o y desarrollo web" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="stylesheet" href="/src/styles/global.css"><link rel="icon" type="image/png" href="/Logo.png">${renderHead()}</head> <body class="bg-[#0e0e10] text-gray-200 font-sans"> ${renderComponent($$result, "Particles", Particles, { "client:load": true, "color": "#a855f7", "density": 12e-5, "speed": 0.45, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/Particles.jsx", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/woldryk/Desktop/work/portfolio/src/layouts/Layout.astro", void 0);

const SmoothScroll = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    const smoothScrollWithTransition = (targetId) => {
      const target = document.getElementById(targetId);
      if (target) {
        setIsTransitioning(true);
        document.body.style.pointerEvents = "none";
        document.body.style.opacity = "0.7";
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          setTimeout(() => {
            document.body.style.opacity = "1";
            document.body.style.pointerEvents = "auto";
            setIsTransitioning(false);
          }, 800);
        }, 150);
      }
    };
    const handleNavClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        smoothScrollWithTransition(targetId);
      }
    };
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });
    document.body.style.transition = "opacity 0.3s ease";
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
      document.body.style.transition = "";
      document.body.style.opacity = "";
      document.body.style.pointerEvents = "";
    };
  }, []);
  return null;
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SmoothScroll", SmoothScroll, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/woldryk/Desktop/work/portfolio/src/components/SmoothScroll.jsx", "client:component-export": "SmoothScroll" })} ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/woldryk/Desktop/work/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/woldryk/Desktop/work/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
