# New Star Internet - Legal Pages Backend Implementation

## Project Overview
Create production-ready, responsive legal pages (Privacy Policy and Terms of Service) for New Star Internet Service Provider app with Express.js backend and beautiful Tailwind CSS frontend.

---

## Technical Stack

### Backend
- **Framework**: Express.js (Node.js) with TypeScript
- **Database**: Prisma + PostgreSQL (hosted on DigitalOcean)
- **Authentication**: JWT (JSON Web Tokens) + HttpOnly Cookies for session persistence
- **Media Storage**: Cloudinary for user-uploaded images
- **Server**: DigitalOcean Droplet

### Frontend
- **Styling**: Tailwind CSS (via CDN)
- **Theme**: New Star brand colors - Green and Orange professional look
- **Fonts**: Roboto (primary), Inter (fallback)
- **Colors**: 
  - Primary: #005430 (Deep Green)
  - Secondary: #FCB041 (Orange/Gold)
  - Background: #FFFFFF (White)
  - Text: #191C19 (Dark)

---

## Architecture Requirements

### Routes
Create two clean Express routes:
- `GET /privacy` - Serves Privacy Policy HTML page
- `GET /terms` - Serves Terms of Service HTML page

### Page Design
- **Responsive**: Use max-w-4xl container for readability on mobile and desktop
- **Navigation**: Simple header with "Back to Home" link
- **Date Display**: "Last Updated" date prominently shown
- **Layout**: Professional cards with icons, proper spacing, gradient header
- **Accessibility**: Semantic HTML, proper contrast ratios

---

## Privacy Policy Content

### Company Information
- **Company Name**: New Star
- **Address**: Shah Jamal Lahore, 54100, Pakistan
- **Website**: https://newstarinternet.com
- **Effective Date**: December 16, 2025

### Required Sections

#### 1. Introduction
"It is New Star's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to newstarinternet.com. We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website."

#### 2. Authentication & Security (CRITICAL FOR APP STORE)
**Title**: "Authentication & Data Security"

**Content**:
"We use industry-standard JWT (JSON Web Tokens) for secure authentication. Session persistence is maintained through HttpOnly Cookies, which prevent client-side JavaScript access and protect against XSS attacks. Your login credentials are encrypted and stored securely in our PostgreSQL database hosted on DigitalOcean servers, managed through Prisma ORM.

The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security."

#### 3. Database & Data Storage (CRITICAL FOR APP STORE)
**Title**: "How We Store Your Data"

**Content**:
"We use Prisma ORM with a PostgreSQL database hosted on DigitalOcean to store:
- User profiles and account information
- Authentication credentials (encrypted)
- Service usage records and payment history
- Customer support interactions

Your data is stored on secure servers with regular backups and encryption at rest."

#### 4. Media & File Uploads (CRITICAL FOR APP STORE)
**Title**: "Image & Media Handling"

**Content**:
"Profile pictures and any uploaded images are processed and stored using Cloudinary, a secure cloud-based media management service. Cloudinary automatically optimizes images and provides secure CDN delivery. We do not store media files on our local servers. You retain ownership of uploaded content, but grant us a license to host and display it as necessary for service functionality."

#### 5. Information Protection
"New Star discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that need to know that information in order to process it on New Star's behalf or to provide services available at New Star's website. New Star will not rent or sell potentially personally-identifying and personally-identifying information to anyone."

#### 6. Cookie Usage (CRITICAL FOR APP STORE)
**Title**: "Cookies & Session Management"

**Content**:
"To enrich and perfect your online experience, New Star uses Cookies, similar technologies, and HttpOnly Cookies for secure session management. 

**Authentication Cookies**: We use HttpOnly Cookies to maintain your login session securely. These cookies:
- Are not accessible via JavaScript (XSS protection)
- Expire after 7 days of inactivity
- Are transmitted only over HTTPS in production
- Store only session identifiers, not sensitive data

**Analytics Cookies**: We use cookies to help identify and track visitors, their usage of the website, and their website access preferences.

You can configure your browser to refuse cookies, but this may limit your ability to use certain features of our service."

#### 7. Data Rights (CRITICAL FOR APP STORE)
**Title**: "Your Data Rights"

**Content**:
"You have the right to:
- **Access**: Request a copy of your personal data we store
- **Deletion**: Request deletion of your account and associated data
- **Correction**: Update or correct your personal information
- **Portability**: Export your data in a machine-readable format

To exercise these rights, please contact us at support@newstarinternet.com. We will respond within 30 days."

#### 8. E-commerce & Transactions
"Those who engage in transactions with New Star by purchasing New Star's services or products are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. New Star collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor's interaction with New Star."

#### 9. Business Transfers
"If New Star, or substantially all of its assets, were acquired, or in the unlikely event that New Star goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur."

#### 10. Policy Changes
"Although most changes are likely to be minor, New Star may change its Privacy Policy from time to time. New Star encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change."

#### 11. Third-Party Services (CRITICAL FOR APP STORE)
**Title**: "Third-Party Service Providers"

**Content**:
"We use the following third-party services:
- **Cloudinary**: For image hosting and optimization (https://cloudinary.com)
- **DigitalOcean**: For database and server hosting (https://digitalocean.com)

These services have their own privacy policies and are compliant with GDPR and international data protection standards."

#### 12. Contact Information
"Questions? If you have any questions about our Privacy Policy, please contact us:
- Email: support@newstarinternet.com
- Phone: [Your Phone Number]
- Address: Shah Jamal Lahore, 54100, Pakistan"

---

## Terms of Service Content

### Company Information
- **Company Name**: New Star
- **Website**: https://newstarinternet.com
- **Effective Date**: December 16, 2025

### Required Sections

#### 1. Acceptance of Terms (CRITICAL FOR APP STORE)
**Title**: "Welcome to New Star!"

**Content**:
"These terms and conditions outline the rules and regulations for the use of New Star's Website and mobile application, located at https://newstarinternet.com. 

By accessing this website or using our mobile application, we assume you accept these terms and conditions. Do not continue to use New Star if you do not agree to all of the terms and conditions stated on this page.

Using the app constitutes your acceptance of these terms."

#### 2. Terminology
"Client", "You" and "Your" refers to you, the person using this website or application. "The Company", "Ourselves", "We", "Our" and "Us" refers to our Company. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in accordance with and subject to prevailing law of Pakistan."

#### 3. Authentication & Account Security (CRITICAL FOR APP STORE)
**Title**: "Account Security & JWT Authentication"

**Content**:
"Your account is secured using JWT (JSON Web Tokens) and HttpOnly Cookies. You are responsible for:
- Maintaining the confidentiality of your login credentials
- All activities that occur under your account
- Notifying us immediately of any unauthorized access

**Prohibited Security Actions**:
- Attempting to tamper with JWT tokens
- Reverse-engineering authentication mechanisms
- Sharing your account credentials with others
- Using automated tools to access the service

**Termination**: We reserve the right to immediately terminate accounts that engage in security violations, including but not limited to JWT tampering, unauthorized access attempts, or malicious scraping."

#### 4. User Content & Media Uploads (CRITICAL FOR APP STORE)
**Title**: "User-Generated Content & Cloudinary Hosting"

**Content**:
"Parts of our service allow you to upload images and other content.

**Ownership**: You retain full ownership of all content you upload, including profile pictures and documents. However, by uploading content, you grant New Star a non-exclusive, worldwide, royalty-free license to host, store, display, and process your content as necessary to provide our services.

**Cloudinary Storage**: All uploaded images are processed and stored via Cloudinary, our third-party media management service. By uploading content, you also agree to Cloudinary's Terms of Service.

**Content Guidelines**: You warrant that uploaded content:
- Does not violate any intellectual property rights
- Does not contain unlawful, harmful, or offensive material
- Complies with applicable laws and regulations"

#### 5. Prohibited Use (CRITICAL FOR APP STORE)
**Title**: "Prohibited Activities"

**Content**:
"You must NOT:
- Upload illegal, harmful, threatening, or offensive content
- Attempt to gain unauthorized access to our systems or databases
- Use automated scraping or data mining tools
- Tamper with authentication tokens or session cookies
- Distribute malware or viruses through our platform
- Impersonate other users or entities
- Violate any local, national, or international laws

Violations may result in immediate account termination and legal action."

#### 6. Cookies
"We employ the use of cookies. By accessing New Star, you agree to use cookies in agreement with New Star's Privacy Policy. Most interactive websites use cookies to retrieve user details for each visit."

#### 7. License & Intellectual Property
"Unless otherwise stated, New Star and/or its licensors own the intellectual property rights for all material on New Star. All intellectual property rights are reserved. You may access this from New Star for your own personal use subject to restrictions set in these terms and conditions.

**You must not:**
- Republish material from New Star
- Sell, rent or sub-license material
- Reproduce or duplicate material
- Redistribute content from New Star"

#### 8. User Comments & Warranties
"Parts of this service offer an opportunity for users to post and exchange opinions and information. New Star does not filter, edit, publish or review Comments prior to their presence on the website. Comments reflect the views and opinions of the person who posts their views and opinions.

**You warrant that:**
- You are entitled to post the Comments on our platform
- Comments do not invade any intellectual property right
- Comments do not contain unlawful material
- Comments will not be used to solicit business or promote illegal activities"

#### 9. Hyperlinking
"Certain organizations may link to our Website without prior written approval, including government agencies, search engines, news organizations, and online directory distributors. These organizations may link to our home page or publications so long as the link is not deceptive and does not falsely imply sponsorship or endorsement."

#### 10. Content Liability
"We shall not be held responsible for any content that appears on third-party websites linking to us. You agree to protect and defend us against all claims that arise from such content. No links should appear on any Website that may be interpreted as libelous, obscene or criminal."

#### 11. Reservation of Rights
"We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions at any time. By continuing to use our service, you agree to be bound by the current version of these terms."

#### 12. Data Deletion & Account Termination (CRITICAL FOR APP STORE)
**Title**: "Account Termination & Data Deletion"

**Content**:
"You may request account deletion at any time by contacting support@newstarinternet.com. Upon deletion:
- Your account will be permanently disabled
- Personal data will be removed from our PostgreSQL database within 30 days
- Uploaded images will be removed from Cloudinary storage
- Some anonymized data may be retained for legal/compliance purposes
- Backup copies will be purged during the next backup cycle (maximum 90 days)

We reserve the right to terminate accounts that violate these terms without prior notice."

#### 13. Disclaimer
"To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. We do not ensure that the information on this website is correct, and we do not warrant its completeness or accuracy.

**Important**: As long as the website and services are provided, we will not be liable for any loss or damage of any nature beyond what is required by applicable consumer protection laws."

#### 14. Contact Information
"Questions? If you have any questions about our Terms of Service, please contact us:
- Email: support@newstarinternet.com
- Phone: [Your Phone Number]
- Address: Shah Jamal Lahore, 54100, Pakistan"

---

## Implementation Instructions

### Step 1: Create TypeScript Route File

Create `src/routes/legal.routes.ts` (or add to existing `index.ts`):

```typescript
import express, { Request, Response } from 'express';

const router = express.Router();

// Privacy Policy Route
router.get('/privacy', (req: Request, res: Response) => {
  // Return HTML with all content from above
});

// Terms of Service Route
router.get('/terms', (req: Request, res: Response) => {
  // Return HTML with all content from above
});

export default router;
```

### Step 2: Design Requirements

**Header Design**:
- Gradient background (Deep Green #005430 to darker shade #003920)
- Company logo/name "New Star" on left
- "Back to Home" link on right
- Responsive padding and sizing
- White text for contrast

**Content Sections**:
- Each section in a white card with shadow
- Icons for each section (Shield, Database, Cloud, Cookie, etc.)
- Green accent circles for icons (#005430 with 10% opacity background)
- Orange highlights for important items (#FCB041)
- Proper spacing between sections
- Mobile-friendly responsive design

**Footer**:
- Contact information
- Last updated date
- Links to both legal pages

**Color Palette** (Use these exact hex values):
- **Primary Green**: `#005430` (Main brand color, buttons, headings)
- **Primary Light**: `#DCE5DB` (Light green backgrounds)
- **Primary Dark**: `#003920` (Darker green for gradients)
- **Secondary Orange**: `#FCB041` (Accents, highlights, CTAs)
- **Background**: `#FFFFFF` (White)
- **Surface**: `#FFFFFF` (Cards, elevated surfaces)
- **Text Primary**: `#191C19` (Dark text for headings)
- **Text Secondary**: `#414942` (Medium text for body)
- **Text Tertiary**: `#C0C9C0` (Light text for captions)
- **Error**: `#BA1A1A` (Error states, warnings)
- **Error Light**: `#FFB4AB` (Light error backgrounds)

**Tailwind CSS Equivalent** (for reference):
```css
/* Primary Green */
.bg-primary { background-color: #005430; }
.text-primary { color: #005430; }
.border-primary { border-color: #005430; }

/* Secondary Orange */
.bg-secondary { background-color: #FCB041; }
.text-secondary { color: #FCB041; }

/* Background & Surface */
.bg-white { background-color: #FFFFFF; }

/* Text Colors */
.text-dark { color: #191C19; }
.text-gray { color: #414942; }
.text-light-gray { color: #C0C9C0; }
```

### Step 3: Ensure Public Access

Make sure these routes are NOT protected by authentication middleware:

```typescript
// In your main index.ts
app.use('/privacy', legalRoutes);
app.use('/terms', legalRoutes);
// Do NOT add authMiddleware before these routes
```

### Step 4: Deployment to DigitalOcean

```bash
# On local machine
git add .
git commit -m "feat: add privacy policy and terms of service pages"
git push origin main

# On DigitalOcean Droplet (SSH)
cd /path/to/your/app
git pull origin main
npm run build
pm2 restart all
```

### Step 5: Verify URLs

Test that both pages are accessible:
- https://newstarinternet.com/privacy
- https://newstarinternet.com/terms

---

## App Store Requirements Checklist

### Google Play Store
✅ Privacy Policy URL: `https://newstarinternet.com/privacy`
✅ Terms of Service URL: `https://newstarinternet.com/terms`
✅ Must mention: JWT, Cookies, Database storage, Third-party services (Cloudinary)
✅ Must include: Data deletion rights, User data access
✅ Mobile-responsive design

### Apple App Store
✅ Privacy Policy URL with explicit data collection disclosure
✅ Terms with clear user content ownership statements
✅ Account deletion process documented
✅ Third-party SDK disclosure (Cloudinary)

---

## Why This Works for App Stores

1. **Real Webpage**: Not a PDF, actual HTML page
2. **Mobile-Friendly**: Responsive Tailwind design
3. **Explicit Data Handling**: Mentions JWT, Cookies, Cloudinary, PostgreSQL
4. **User Rights**: Clear data deletion and access procedures
5. **Professional**: Matches SaaS industry standards
6. **Always Accessible**: Public URLs, no authentication required

---

## Important Notes

- Both pages MUST be publicly accessible (no login required)
- URLs MUST use HTTPS in production
- Last Updated date MUST be accurate
- Contact email MUST be monitored
- Content MUST match your actual technical implementation
- Keep copies of these pages for compliance records

---

## Final Deliverable Format

Please provide:
1. Complete TypeScript file(s) with Express routes
2. Embedded HTML template strings with Tailwind CSS
3. All content from sections above
4. Proper TypeScript types and error handling
5. Instructions for testing locally before deployment

Make it production-ready, beautiful, and compliant with app store requirements.
