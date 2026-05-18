# svelte-examples

A browsable catalogue of self-contained Svelte examples, each demonstrating one
feature or pattern. Built with SvelteKit, deployed to Vercel.

## Prerequisites

- Node.js 20, 22, or 24
- npm

## Setting up locally

```sh
# install dependencies
npm install

# start the dev server
npm run dev

# or start the server and open a browser tab
npm run dev -- --open
```

The dev server runs at http://localhost:5173.

## Building

```sh
# production build
npm run build

# preview the production build locally
npm run preview
```

## Deployment

Deployed to Vercel via `@sveltejs/adapter-vercel`. Pushing to the default
branch triggers a deploy once the repository is linked to a Vercel project.
