# CLAUDE.md

## Goal

Demonstrate all Svelte examples in a simple, easy-to-find way. The site is a
browsable catalogue of self-contained Svelte examples, each showing one feature
or pattern.

## Deployment

Deployed to Vercel. Keep the build compatible with Vercel's SvelteKit support
(use `@sveltejs/adapter-vercel` if/when an adapter is configured).

## Principles

- **Discoverability first.** Examples must be easy to find — clear titles, a
  searchable/filterable index, grouped by topic (reactivity, components, props,
  stores, transitions, etc.).
- **Self-contained examples.** Each example is small, focused on one concept,
  and runnable in isolation. No example should depend on another.
- **Show the source.** Each example displays its own code alongside the live
  result, so visitors can read what makes it work.
- **Keep it simple.** Minimal dependencies. No heavy frameworks layered on top.

## Conventions

- One directory per example. Include a short description and the concept it
  demonstrates.
- When adding an example, also add it to the index so it stays discoverable.
- Prefer the latest Svelte syntax (runes) unless an example specifically
  illustrates older patterns.
- Keep `README.md` setup instructions up to date. When tooling, scripts, or
  prerequisites change, update the README in the same change.

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
