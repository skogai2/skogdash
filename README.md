# skogai dashboard

Fleet dashboard for SkogAI agents, styled with the Skogai Arcade design system.

```bash
npm install
npm run dev
```

- `src/styles/skogai-arcade/` — design system CSS (tokens, type, components), vendored as-is.
- `src/styles/app.css` — dashboard layout and cabinet-tinted variants.
- `src/components/` — HUD header, readouts, crew roster, command panel, quest log.
- `src/data/fleet.ts` — the fleet data shown on the dashboard (static for now).

Pick a cabinet theme with `?cabinet=sudo-hero|wifi-wizards|honkers-hackers|skognet-syndicate`.
