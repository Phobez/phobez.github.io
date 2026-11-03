# Abia Herlianto Portfolio

A static Next.js portfolio for software engineering, game development, and worldbuilding work.

## Development

Requires Node.js 18.18 or later.

```sh
npm install
npm run dev
```

Run validation before opening a pull request:

```sh
npm run lint
npm run type-check
npm run build
```

`npm run build` creates a static export in `out/`.

## Deployment

GitHub Actions deploys the static export to GitHub Pages after pushes to `main`. The repository must have GitHub Pages configured to use **GitHub Actions** as its build and deployment source. Feature branches, including `prototype/homepage`, do not deploy.
