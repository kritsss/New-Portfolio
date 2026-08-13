# Kritika Sukhramani Portfolio — Vercel Edition

This is the complete Vercel-ready source for Kritika Sukhramani's interactive software-engineering portfolio.

## Included

- React 19 and TypeScript source
- Vite development and production configuration
- Responsive dark interface
- Canvas-based interactive 3D systems visualization
- Experience, projects, skills, education, and contact sections
- GitHub, LinkedIn, project, email, phone, and IEEE paper links
- Social-sharing image and metadata
- Vercel production and single-page-app routing configuration

## Run locally

Install Node.js 22 or later, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

To verify the production build:

```bash
npm run build
npm run preview
```

## Deploy using the Vercel website — recommended

1. Create a new GitHub repository.
2. Upload every file from this folder to the repository.
3. Open <https://vercel.com/new> and sign in with GitHub.
4. Import the new repository.
5. Vercel should detect these values automatically:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

6. Select **Deploy**.

The website will receive a production URL similar to:

```text
https://kritika-portfolio.vercel.app
```

Every later push to the repository's production branch will deploy automatically.

## Deploy directly from Terminal

From this folder, run:

```bash
npm install
npm install -g vercel
vercel login
vercel --prod
```

Accept the detected Vite settings. Vercel prints the production URL when deployment succeeds.

For later updates:

```bash
vercel --prod
```

## Social preview URL

After deployment, change the two `/og.png` values in `index.html` to the absolute production URL for maximum compatibility with LinkedIn, Slack, and messaging apps:

```text
https://YOUR-PROJECT.vercel.app/og.png
```

Then commit the change; Vercel will deploy it automatically.

## Main files

- `src/App.tsx` — portfolio content and interactions
- `src/styles.css` — complete design and responsive behavior
- `src/main.tsx` — React entry point
- `public/og.png` — social-sharing preview
- `index.html` — document metadata
- `vercel.json` — Vercel build and routing configuration
