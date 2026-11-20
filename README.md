# Yankee Tech

Next.js Pages Router application with 29 React/JSX content components, shared React navigation and footer, static page generation, and compiled Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

## Production hosting

Use the repository root as the project directory.

```sh
npm ci
npm run build
npm start
```

The build command is `npm run build`. The start command is `npm start`. Hosting requires a Node.js runtime with a version supported by the installed Next.js package. The platform can provide its own `PORT` environment variable.

Deploy as a Next.js application. The `.next` directory is the production build output. Keep `public/`, `package.json`, and the installed production dependencies available to the server. A platform with native Next.js support can build directly from the repository.

## Source

- `pages/` defines routes, static generation, and the custom 404.
- `components/content/` holds the React/JSX pages.
- `components/SiteHeader.js` and `components/SiteFooter.jsx` provide shared navigation and footer.
- `components/SitePage.js` provides metadata, page composition, and ordered browser script loading.
- `data/pages.json` stores page metadata and structured data.
- `public/site-interactions.js` provides estimator, FAQ, form, and scroll behavior used by JSX event handlers.
- `public/motion.js` provides the cinematic homepage scene.
- `style.css`, `styles/globals.css`, and `tailwind.config.js` control styling.
- `public/robots.txt` and `public/sitemap.xml` provide crawl metadata.

Existing `.html` URL paths are Next.js routes, retained for incoming links and SEO. All pages render from JSX. There are no authored HTML pages or HTML-reading runtime loaders.

Page links use full document navigation to preserve browser animation lifecycles. The existing contact form still needs a delivery backend, and the booking link needs the business's real Calendly URL.
