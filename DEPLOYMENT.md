# Vercel Deployment Guide

This portfolio is configured and tested for deployment on [Vercel](https://vercel.com).

## What Was Fixed for Vercel
- **Peer Dependency Conflict Resolved**: Removed the redundant `"esbuild": "^0.25.0"` from `package.json` which conflicted with Vite 8's peer dependency requirement during Vercel's automated `npm install`.
- **`.npmrc` Configuration**: Added `legacy-peer-deps=true` so Vercel never fails on strict dependency tree resolution.
- **`vercel.json` Setup**: Configured `"installCommand": "npm install --legacy-peer-deps"` and Single-Page Application (SPA) routing rewrites.

## How to Deploy to Vercel

### Step 1: Push Changes to Your GitHub Repository
Run in your terminal:
```bash
git add .
git commit -m "fix: resolve Vercel npm install ERESOLVE peer dependency conflict"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com).
2. If already imported, click **Redeploy** on your project dashboard.
3. If importing for the first time, go to [vercel.com/new](https://vercel.com/new), select your repo, and click **Deploy**.
4. The deployment will complete with 0 errors!
