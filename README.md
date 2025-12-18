# New Star Internet - Legal Pages

Professional static website for New Star Internet Service Provider featuring:

- **Home Page**: Hero section with animated features showcasing company values
- **Privacy Policy**: Complete privacy policy with authentication, data storage, and user rights
- **Terms of Service**: Comprehensive terms covering usage, security, and account management

## Tech Stack

- Next.js 14 (Static Export)
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Lucide React Icons

## Features

- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎨 Brand colors (Green #005430 & Orange #FCB041)
- 🔒 App Store compliant legal pages
- ⚡ Fast static site generation

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Deploy

The `out/` directory can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- DigitalOcean App Platform

## Pages

- `/` - Home page with features and call-to-action
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## Customization

Update brand colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#005430",
    light: "#DCE5DB",
    dark: "#003920",
  },
  secondary: {
    DEFAULT: "#FCB041",
  },
}
```

## License

© 2025 New Star Internet. All rights reserved.
