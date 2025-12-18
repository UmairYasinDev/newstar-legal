# 🚀 Deployment Guide - New Star Internet Legal Pages

## Quick Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Build passes without errors (`npm run build`)
- [ ] Logo in `public/` folder
- [ ] Company information updated
- [ ] URLs tested locally
- [ ] Static export generated in `out/` folder

---

## 🌐 Deployment Options

### Option 1: Vercel (Easiest - Recommended)

**Best for:** Zero-config deployment with automatic updates

1. **Push to GitHub**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit - New Star legal pages"
   git branch -M main
   git remote add origin https://github.com/yourusername/newstar-legal.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live at `yourproject.vercel.app`

3. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add `newstarinternet.com`
   - Follow DNS configuration instructions

**Pros:**
- ✅ Automatic deployments on git push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Free tier available

---

### Option 2: Netlify

**Best for:** Simple drag-and-drop deployment

1. **Build the site**
   ```powershell
   npm run build
   ```

2. **Deploy**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `out` folder to the page
   - Done! Site is live

3. **Or use Netlify CLI**
   ```powershell
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=out
   ```

**Pros:**
- ✅ Super simple
- ✅ Free SSL
- ✅ Custom domains
- ✅ Free tier

---

### Option 3: GitHub Pages

**Best for:** Free hosting with GitHub

1. **Install gh-pages**
   ```powershell
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d out"
   }
   ```

3. **Deploy**
   ```powershell
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Save

**Your site will be at:** `https://yourusername.github.io/repo-name/`

**Pros:**
- ✅ Completely free
- ✅ Direct from GitHub
- ✅ Simple workflow

---

### Option 4: DigitalOcean App Platform

**Best for:** Integration with existing DigitalOcean infrastructure

1. **Push to GitHub**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Create App on DigitalOcean**
   - Go to Apps → Create App
   - Connect GitHub repository
   - Set Build Command: `npm run build`
   - Set Output Directory: `out`
   - Click "Deploy"

3. **Custom Domain**
   - Add your domain in Settings
   - Update DNS records

**Pricing:** Starts at $5/month

**Pros:**
- ✅ Same platform as your backend
- ✅ Easy integration
- ✅ Free SSL
- ✅ Automatic deployments

---

### Option 5: AWS S3 + CloudFront

**Best for:** Enterprise-level scalability

1. **Build**
   ```powershell
   npm run build
   ```

2. **Create S3 Bucket**
   - Go to AWS S3
   - Create bucket (e.g., `newstar-legal-pages`)
   - Enable static website hosting
   - Upload `out/` folder contents

3. **Configure Bucket Policy**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::newstar-legal-pages/*"
       }
     ]
   }
   ```

4. **Set up CloudFront** (Optional but recommended)
   - Create CloudFront distribution
   - Origin: Your S3 bucket
   - Add custom domain
   - Enable HTTPS

**Pros:**
- ✅ Extremely scalable
- ✅ Pay-per-use pricing
- ✅ Global CDN
- ✅ High availability

---

### Option 6: Traditional Web Hosting (cPanel/FTP)

**Best for:** Existing shared hosting

1. **Build**
   ```powershell
   npm run build
   ```

2. **Upload via FTP**
   - Connect to your hosting via FTP (FileZilla, WinSCP)
   - Navigate to `public_html/` or your domain folder
   - Upload all contents of the `out/` folder
   - Ensure `.htaccess` is configured for proper routing

3. **Create .htaccess** (if using Apache)
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

**Pros:**
- ✅ Works with existing hosting
- ✅ No new accounts needed
- ✅ Simple FTP upload

---

## 🔧 Pre-Deployment Configuration

### 1. Update Company Information

Search and replace in all files:
- `New Star` → Your company name
- `support@newstarinternet.com` → Your email
- `Shah Jamal Lahore, 54100, Pakistan` → Your address
- `https://newstarinternet.com` → Your website

### 2. Replace Logo

- Add your logo as `public/logo.svg`, `logo.png`, or `logo.jpg`
- Update `components/Header.tsx` if using different format

### 3. Test Build

```powershell
npm run build
```

Check for errors. Fix any issues before deploying.

### 4. Test Locally

```powershell
npm run build
npx serve out
```

Visit `http://localhost:3000` and test all pages.

---

## 📱 Verify Deployment

After deployment, check:

1. **All pages load:**
   - Home: `https://yourdomain.com/`
   - Privacy: `https://yourdomain.com/privacy`
   - Terms: `https://yourdomain.com/terms`

2. **Mobile responsiveness:**
   - Test on phone/tablet
   - Use browser dev tools (F12 → Device toolbar)

3. **HTTPS enabled:**
   - URL shows padlock 🔒
   - No mixed content warnings

4. **Navigation works:**
   - All links functional
   - Header navigation
   - Footer links

5. **Images load:**
   - Logo visible
   - Icons display

---

## 🔗 App Store Integration

Once deployed, submit these URLs to app stores:

**Google Play Console:**
- Privacy Policy URL: `https://yourdomain.com/privacy`
- Terms URL: `https://yourdomain.com/terms`

**Apple App Store Connect:**
- Privacy Policy URL: `https://yourdomain.com/privacy`
- Terms of Use URL: `https://yourdomain.com/terms`

---

## 🆘 Troubleshooting

### Build Fails

```powershell
# Clear cache and rebuild
Remove-Item -Recurse -Force .next
npm run build
```

### 404 Errors After Deployment

- Ensure `next.config.mjs` has `output: 'export'`
- Check hosting supports static files
- Verify file uploads completed

### Images Not Loading

- Check image paths start with `/`
- Ensure images are in `public/` folder
- Verify hosting uploaded `public/` contents

### CSS Not Applying

- Clear browser cache (Ctrl+Shift+R)
- Check `_next/static/` folder uploaded
- Verify build completed successfully

---

## 📊 Performance Optimization

### Enable Compression

**Nginx:**
```nginx
gzip on;
gzip_types text/css application/javascript image/svg+xml;
```

**Apache (.htaccess):**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

### Set Cache Headers

**Nginx:**
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|svg)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

---

## 🎯 Next Steps After Deployment

1. **Monitor Performance**
   - Use Google PageSpeed Insights
   - Check Core Web Vitals

2. **Set Up Analytics** (Optional)
   - Google Analytics
   - Cloudflare Analytics
   - Vercel Analytics

3. **Regular Updates**
   - Update effective dates when policies change
   - Keep dependencies updated
   - Monitor for security patches

4. **Backup**
   - Keep source code in Git
   - Export built files periodically
   - Document deployment process

---

## 💡 Pro Tips

- **Use CDN:** Always enable CDN for faster global delivery
- **Enable HTTPS:** Required for app stores and SEO
- **Test Mobile:** Most traffic will be mobile
- **SEO:** Pages are pre-rendered and SEO-friendly
- **Updates:** Just push to Git and auto-deploy handles the rest

---

## 📞 Support

Need help? Contact:
- Technical Support: support@newstarinternet.com
- Deployment Issues: Check hosting provider documentation

---

**© 2025 New Star Internet. All rights reserved.**
