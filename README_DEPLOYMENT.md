# Deployment Guide for Netlify

This guide will help you deploy the ICT Enterprise frontend to Netlify.

## Prerequisites

1. A Netlify account (sign up at https://www.netlify.com)
2. Your backend API deployed and accessible (e.g., on Heroku, Railway, Render, etc.)
3. Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Deploy Backend First

Before deploying the frontend, make sure your backend is deployed and accessible. The backend is located in `src/Backend/` and needs to be deployed separately.

**Backend Deployment Options:**
- Heroku
- Railway
- Render
- DigitalOcean
- AWS
- Any Node.js hosting service

Once deployed, note your backend URL (e.g., `https://your-backend.herokuapp.com`)

## Step 2: Configure Environment Variables

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings** > **Environment variables**
4. Add the following variable:
   - **Key**: `VITE_API_URL`
   - **Value**: Your deployed backend URL (e.g., `https://your-backend.herokuapp.com`)

## Step 3: Deploy to Netlify

### Option A: Deploy via Netlify Dashboard (Recommended for first-time)

1. Go to [Netlify](https://app.netlify.com)
2. Click **Add new site** > **Import an existing project**
3. Connect your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**

### Option B: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize and deploy:
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Step 4: Verify Deployment

1. After deployment, Netlify will provide you with a URL (e.g., `https://your-site.netlify.app`)
2. Visit your site and test the following:
   - Homepage loads correctly
   - Navigation works
   - Blog posts load (if using backend)
   - Contact form works
   - Admin panel works (if applicable)

## Configuration Files

The project includes the following configuration files for Netlify:

- **`netlify.toml`**: Contains build settings and redirects
- **`public/_redirects`**: SPA routing redirects (all routes to index.html)

## Troubleshooting

### Build Fails

1. Check build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node version (should be 18+)

### API Calls Fail

1. Verify `VITE_API_URL` environment variable is set correctly
2. Check CORS settings on your backend
3. Ensure backend URL is accessible from the internet

### Routing Issues

1. Verify `public/_redirects` file exists
2. Check `netlify.toml` redirects configuration
3. Ensure all routes redirect to `/index.html` with status 200

### Environment Variables Not Working

1. Make sure variable names start with `VITE_` (required for Vite)
2. Redeploy after adding/changing environment variables
3. Check variable names match exactly (case-sensitive)

## Custom Domain

To add a custom domain:

1. Go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Follow the DNS configuration instructions

## Continuous Deployment

Netlify automatically deploys when you push to your connected Git branch. To change the branch:

1. Go to **Site settings** > **Build & deploy**
2. Update the **Production branch**

## Support

For more information, visit:
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

