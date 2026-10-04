# Vercel Deployment Guide

This portfolio is pre-configured and optimized for 1-click deployment on [Vercel](https://vercel.com).

## Quick Deployment Steps

### Method 1: Deploy via GitHub (Recommended)
1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Ankit Srivastava portfolio"
   git branch -M main
   git remote add origin https://github.com/ankit8567/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite** framework preset with:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your portfolio will be live worldwide in seconds!

### Method 2: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

## Profile Photo Configuration
- Static photo assets are placed in the `/public` folder (`/public/profile.jpg` and `/public/IMG_20261003_231421.jpg`).
- In addition, you can update or test any photo directly on the live website by clicking the **"Update / Replace Photo"** button, which persists the image locally in your browser.
- When committing your repository, ensure your photo file is named `profile.jpg` in the `public/` directory so Vercel bundles it into production `dist/`.

## Pre-configured Files
- `vercel.json`: Handles Single-Page Application (SPA) routing so direct navigation and refreshes work without 404 errors.
- `public/favicon.svg`: Custom monogram favicon.
- `public/robots.txt`: Search engine crawling rules.
- Mobile and desktop viewport responsiveness configured via Tailwind CSS v4.
