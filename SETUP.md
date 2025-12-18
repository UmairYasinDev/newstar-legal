# New Star Internet - Setup Instructions

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🚀 Quick Start

### 1. Install Dependencies

Open PowerShell in this directory and run:

```powershell
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Shadcn UI components

### 2. Run Development Server

```powershell
npm run dev
```

The site will be available at: **http://localhost:3000**

### 3. Build for Production

```powershell
npm run build
```

This creates an optimized static export in the `out/` folder.

### 4. Preview Production Build

```powershell
npm start
```

## 📁 Project Structure

```
NewStar-PrivacyPolicy/
├── app/
│   ├── page.tsx              # Home page
│   ├── privacy/
│   │   └── page.tsx          # Privacy Policy page
│   ├── terms/
│   │   └── page.tsx          # Terms of Service page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer component
│   └── ui/
│       ├── button.tsx        # Button component
│       └── card.tsx          # Card component
├── public/
│   └── logo.svg              # Company logo
├── lib/
│   └── utils.ts              # Utility functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs

```

## 🎨 Customization

### Update Logo

Replace `public/logo.svg` with your company logo (PNG, JPG, or SVG format).

### Change Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#005430",  // Main green
    light: "#DCE5DB",    // Light green
    dark: "#003920",     // Dark green
  },
  secondary: {
    DEFAULT: "#FCB041",  // Orange/Gold
  },
}
```

### Update Company Information

Search and replace in all files:
- Company name: "New Star"
- Email: "support@newstarinternet.com"
- Address: "Shah Jamal Lahore, 54100, Pakistan"
- Website: "https://newstarinternet.com"

### Modify Features

Edit features array in `app/page.tsx`:

```typescript
const features = [
  {
    id: 1,
    icon: Zap,
    heading: "Your Feature Title",
    description: "Your feature description...",
  },
  // Add more features...
];
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository
4. Deploy automatically

### Option 2: Netlify

1. Build the site: `npm run build`
2. Drag the `out/` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 3: GitHub Pages

```powershell
npm run build
# Upload the 'out' folder to your GitHub repository's gh-pages branch
```

### Option 4: DigitalOcean App Platform

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Deploy

### Option 5: Static File Server

Upload the `out/` folder to any web server (Apache, Nginx, etc.)

## 🔧 Troubleshooting

### TypeScript Errors

The lint errors you see are expected before running `npm install`. They will be resolved after installing dependencies.

### Port Already in Use

If port 3000 is busy, Next.js will automatically use port 3001, 3002, etc.

### Build Errors

Clear cache and rebuild:

```powershell
Remove-Item -Recurse -Force .next
npm run build
```

## 📱 App Store Compliance

All legal pages include:
- ✅ Authentication details (JWT, Cookies)
- ✅ Data storage information (PostgreSQL, DigitalOcean)
- ✅ Media handling (Cloudinary)
- ✅ User rights (access, deletion, correction)
- ✅ Cookie policy
- ✅ Third-party services disclosure
- ✅ Contact information

## 🎯 Features Included

- ✨ Smooth scroll animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Brand colors with gradients
- 🔍 SEO optimized
- ⚡ Lightning-fast static generation
- 🎭 Hover effects and transitions
- 🎪 Professional UI with Shadcn components
- 🔗 Easy navigation between pages

## 📝 Page URLs

- **Home**: `/`
- **Privacy Policy**: `/privacy`
- **Terms of Service**: `/terms`

## 🆘 Support

For questions or issues:
- Email: support@newstarinternet.com
- Create an issue in your repository

## 📄 License

© 2025 New Star Internet. All rights reserved.
