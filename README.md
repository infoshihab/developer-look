# developer-look

Frontend recreation assignment for the Get Hyped homepage, built with React + Vite.

## Run locally

- `npm install`
- `npm run dev`

## Build

- `npm run build`

## Deploy to GitHub Pages

This project is configured for GitHub Pages:

- Vite `base` is set to relative paths (`./`) to avoid blank pages on repository subpaths.
- Build output goes to `docs/`.

Steps:

1. Run `npm run build`
2. Commit and push the generated `docs/` folder
3. In GitHub repo settings, set Pages source to:
   - Branch: `main`
   - Folder: `/docs`
