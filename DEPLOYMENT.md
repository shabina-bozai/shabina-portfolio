# Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js portfolio:

1. **Sign up for Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Import your project:**
   - Click "Add New" → "Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js settings

3. **Deploy:**
   - Click "Deploy"
   - Your site will be live in ~2 minutes at: `your-project.vercel.app`

4. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., shabinabozai.com)
   - Follow DNS configuration instructions

## Deploy to Netlify

1. **Sign up for Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Create new site:**
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git repository

3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

4. **Environment:**
   - Add environment variables in Site Settings → Environment Variables (if needed)

## Deploy as Static Site

If you want to export as static HTML/CSS/JS:

1. **Update next.config.js:**
\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
\`\`\`

2. **Build:**
\`\`\`bash
npm run build
\`\`\`

3. **Output:**
   - Static files will be in the \`out/\` directory
   - Upload to any static host: GitHub Pages, AWS S3, etc.

## GitHub Pages

1. **Install gh-pages:**
\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

2. **Add to package.json:**
\`\`\`json
"scripts": {
  "deploy": "next build && next export && gh-pages -d out"
}
\`\`\`

3. **Deploy:**
\`\`\`bash
npm run deploy
\`\`\`

## Custom Server Deployment

For VPS or cloud servers (AWS EC2, DigitalOcean, etc.):

1. **Build the project:**
\`\`\`bash
npm run build
\`\`\`

2. **Start production server:**
\`\`\`bash
npm run start
\`\`\`

3. **Use PM2 for process management:**
\`\`\`bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
\`\`\`

4. **Configure Nginx as reverse proxy:**
\`\`\`nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

## Environment Variables

If you add any environment variables later, create a \`.env.local\` file:

\`\`\`
NEXT_PUBLIC_API_URL=your-api-url
# Add other variables as needed
\`\`\`

**Note:** Never commit \`.env.local\` to Git. It's already in \`.gitignore\`.

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify contact form works
- [ ] Check responsive design on mobile
- [ ] Test page load speed (use PageSpeed Insights)
- [ ] Verify SEO metadata is correct
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL certificate (automatic on Vercel/Netlify)
- [ ] Add Google Analytics (optional)

## Updating Your Portfolio

1. **Make changes locally**
2. **Test with** \`npm run dev\`
3. **Commit and push to Git**
4. **Auto-deploys on Vercel/Netlify** (if connected to Git)

---

Need help? Check the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
