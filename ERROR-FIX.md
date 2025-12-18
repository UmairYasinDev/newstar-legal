# Error Fix: ESM URL Scheme Issue

## Problem
The error `ERR_UNSUPPORTED_ESM_URL_SCHEME` occurs because:
1. The folder path contains a space ("New Star")
2. Next.js on Windows has issues with `next/font/google` and spaces in paths

## Solution Applied

I've already created a fixed version at: **D:\NewStar-PrivacyPolicy** (without spaces)

### Steps to Complete the Fix:

1. **Close VS Code completely**

2. **Open the NEW folder in VS Code:**
   - Open VS Code
   - File → Open Folder
   - Navigate to `D:\NewStar-PrivacyPolicy` (NO SPACES)
   - Click "Select Folder"

3. **The fix is already applied** - I removed `next/font/google` and used Google Fonts CDN instead

4. **Run the development server:**
   ```powershell
   npm run dev
   ```

5. **Open your browser:**
   http://localhost:3000

## What Was Changed

### Before (app/layout.tsx):
```typescript
import { Inter } from "next/font/google";  // ❌ This causes the error
const inter = Inter({ subsets: ["latin"] });
```

### After (app/layout.tsx):
```typescript
// ✅ No next/font import - using Google Fonts CDN instead
```

### Added to app/globals.css:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto:wght@400;500;700&display=swap');
```

## Alternative Solutions (if still having issues)

### Option 1: Use C:\ drive
```powershell
mkdir C:\NewStar-PrivacyPolicy
xcopy /E /I "D:\New Star\NewStar-PrivacyPolicy" "C:\NewStar-PrivacyPolicy"
cd C:\NewStar-PrivacyPolicy
npm install
npm run dev
```

### Option 2: Downgrade Next.js (not recommended)
```powershell
npm install next@13.5.0
```

### Option 3: Use different font loading
Already done! The Google Fonts CDN approach is faster and more reliable.

## Files to Delete (optional cleanup)

You can safely delete the old folder with spaces after verifying everything works:
```powershell
Remove-Item -Path "D:\New Star" -Recurse -Force
```

## Verification

After opening D:\NewStar-PrivacyPolicy in VS Code and running `npm run dev`, you should see:

```
✓ Ready in 2.5s
✓ Compiled / in 1.2s
```

Then visit:
- http://localhost:3000 (Home)
- http://localhost:3000/privacy (Privacy Policy)
- http://localhost:3000/terms (Terms of Service)

## Need Help?

If you still see errors:
1. Make sure you're in D:\NewStar-PrivacyPolicy (no spaces)
2. Delete .next folder: `Remove-Item .next -Recurse -Force`
3. Reinstall: `npm install`
4. Run: `npm run dev`
