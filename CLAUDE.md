# Claude Code Project Guidelines - Mrinal Portfolio

## Automatic Frontend Design Taste & GSAP Animation Directives

Whenever assisting with frontend design, components, pages, or animations in this workspace, **automatically apply these Design Taste and GSAP standards by default** without needing manual reminder.

---

### 1. Design Read & Three Dials (Anti-Slop Principle)

Before writing or redesigning UI components, declare a one-line **Design Read**:
> *"Reading this as: [page kind] for [audience], with a [vibe] language, leaning toward [aesthetic/system]."*

Maintain the default dial configuration unless overridden:
- **`DESIGN_VARIANCE: 8`** (Asymmetric, intentional layouts; avoids generic centered 3-card templates)
- **`MOTION_INTENSITY: 6`** (Physics-based, kinetic, smooth scroll-driven feel)
- **`VISUAL_DENSITY: 4`** (Generous whitespace, structured hierarchy, airy readability)

---

### 2. Frontend Design Engineering Standards

- **Color Discipline (Single Accent Lock)**:
  - Base: Rich dark neutrals (`#0a0a0f`, `#12121a`, zinc/slate tones).
  - No default generic "AI purple/indigo glow" cliches unless intentionally requested.
  - Exactly **one** locked primary accent color applied consistently across all sections.
- **Typography & Layout**:
  - Sans display default (Geist, Cabinet Grotesk, Satoshi, Outfit, Inter Tight).
  - **Anti-Center Bias**: Avoid centered stacked heroes when variance > 4. Use 50/50 split, asymmetric white space, or scroll-anchored structures.
  - **Viewport Sizing**: Always use `min-h-[100dvh]` rather than `h-screen` (prevents mobile address bar jumps).
  - **Layout Mechanics**: Prefer CSS Grid (`grid-cols-1 md:grid-cols-3 gap-6`) over complex percentage math.
  - **Shape Consistency**: Lock corner radius hierarchy (e.g., cards `rounded-2xl`, badges `rounded-full`, inputs `rounded-xl`).
  - **Copywriting**: No artificial em-dashes (—) in UI copy. Clear, punchy, human phrasing.
  - **A11y & Contrast**: Verify WCAG AA contrast (minimum 4.5:1) for all CTA buttons and text elements.

---

### 3. GSAP & Animation Architecture

- **Library & Hooks**:
  - Use `gsap` + `@gsap/react` (`useGSAP`) + `ScrollTrigger`.
  - Always register plugins: `gsap.registerPlugin(ScrollTrigger);`
- **Scoping & Memory Management**:
  - Always wrap animations in `useGSAP(() => { ... }, { scope: containerRef, dependencies: [...] })`.
  - Let `useGSAP` handle automatic cleanup (`ctx.revert()`) to prevent memory leaks and ghost scroll triggers.
  - Never use raw `window.addEventListener('scroll')` for animation logic.
- **Smooth Scrolling (Lenis)**:
  - Integrate Lenis with GSAP ScrollTrigger ticker:
    ```javascript
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    ```
- **Accessibility & Performance**:
  - Use `gsap.matchMedia()` for responsive animations and `prefers-reduced-motion: reduce`.
  - Animate GPU-accelerated transform properties (`x`, `y`, `scale`, `rotation`, `autoAlpha`) rather than layout triggers (`top`, `left`, `width`, `height`).

---

### 4. Stack Context
- **Framework**: React 19 (`react`, `react-dom`)
- **Styling**: Tailwind CSS
- **Motion**: GSAP 3 (`@gsap/react`, `ScrollTrigger`), Framer Motion / Motion
- **3D / Canvas**: Three.js, React Three Fiber (`@react-three/fiber`, `@react-three/drei`)
- **Smooth Scroll**: Lenis (`lenis`)
