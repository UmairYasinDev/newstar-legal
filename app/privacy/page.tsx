"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Cloud, Cookie, UserCheck, FileText, Lock, Users, AlertCircle } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Introduction",
      content: "It is New Star's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to newstarinternet.com. We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website.",
    },
    {
      icon: Lock,
      title: "Authentication & Data Security",
      content: "We use industry-standard JWT (JSON Web Tokens) for secure authentication. Session persistence is maintained through HttpOnly Cookies, which prevent client-side JavaScript access and protect against XSS attacks. Your login credentials are encrypted and stored securely in our PostgreSQL database hosted on DigitalOcean servers, managed through Prisma ORM.\n\nThe security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.",
    },
    {
      icon: Database,
      title: "How We Store Your Data",
      content: "We use Prisma ORM with a PostgreSQL database hosted on DigitalOcean to store:\n• User profiles and account information\n• Authentication credentials (encrypted)\n• Service usage records and payment history\n• Customer support interactions\n\nYour data is stored on secure servers with regular backups and encryption at rest.",
    },
    {
      icon: Cloud,
      title: "Image & Media Handling",
      content: "Profile pictures and any uploaded images are processed and stored using Cloudinary, a secure cloud-based media management service. Cloudinary automatically optimizes images and provides secure CDN delivery. We do not store media files on our local servers. You retain ownership of uploaded content, but grant us a license to host and display it as necessary for service functionality.",
    },
    {
      icon: Shield,
      title: "Information Protection",
      content: "New Star discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that need to know that information in order to process it on New Star's behalf or to provide services available at New Star's website. New Star will not rent or sell potentially personally-identifying and personally-identifying information to anyone.",
    },
    {
      icon: Cookie,
      title: "Cookies & Session Management",
      content: "To enrich and perfect your online experience, New Star uses Cookies, similar technologies, and HttpOnly Cookies for secure session management.\n\nAuthentication Cookies: We use HttpOnly Cookies to maintain your login session securely. These cookies:\n• Are not accessible via JavaScript (XSS protection)\n• Expire after 7 days of inactivity\n• Are transmitted only over HTTPS in production\n• Store only session identifiers, not sensitive data\n\nAnalytics Cookies: We use cookies to help identify and track visitors, their usage of the website, and their website access preferences.\n\nYou can configure your browser to refuse cookies, but this may limit your ability to use certain features of our service.",
    },
    {
      icon: UserCheck,
      title: "Your Data Rights",
      content: "You have the right to:\n• Access: Request a copy of your personal data we store\n• Deletion: Request deletion of your account and associated data\n• Correction: Update or correct your personal information\n• Portability: Export your data in a machine-readable format\n\nTo exercise these rights, please contact us at support@newstarinternet.com. We will respond within 30 days.",
    },
    {
      icon: Users,
      title: "E-commerce & Transactions",
      content: "Those who engage in transactions with New Star by purchasing New Star's services or products are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. New Star collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor's interaction with New Star.",
    },
    {
      icon: AlertCircle,
      title: "Business Transfers",
      content: "If New Star, or substantially all of its assets, were acquired, or in the unlikely event that New Star goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur.",
    },
    {
      icon: FileText,
      title: "Policy Changes",
      content: "Although most changes are likely to be minor, New Star may change its Privacy Policy from time to time. New Star encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.",
    },
    {
      icon: Shield,
      title: "Third-Party Service Providers",
      content: "We use the following third-party services:\n• Cloudinary: For image hosting and optimization (https://cloudinary.com)\n• DigitalOcean: For database and server hosting (https://digitalocean.com)\n\nThese services have their own privacy policies and are compliant with GDPR and international data protection standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-light/20">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-primary p-8 text-center shadow-2xl md:p-12">
            <Shield className="mx-auto mb-4 h-16 w-16 text-secondary animate-scale-in" />
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>
            <p className="text-lg text-primary-light">
              Your privacy is our priority. Learn how we protect and handle your data.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-primary-light">
              <p>
                <strong className="text-white">Company:</strong> New Star
              </p>
              <p>
                <strong className="text-white">Address:</strong> Shah Jamal Lahore, 54100, Pakistan
              </p>
              <p>
                <strong className="text-white">Website:</strong>{" "}
                <a href="https://newstarinternet.com" className="text-secondary hover:underline">
                  newstarinternet.com
                </a>
              </p>
              <p>
                <strong className="text-white">Effective Date:</strong> December 16, 2025
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="group border-2 transition-all duration-300 hover:border-primary hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <section.icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-line text-gray-600 leading-relaxed">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-2 border-secondary/50 bg-secondary/5">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                Questions? If you have any questions about our Privacy Policy, please contact us:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong className="text-primary">Email:</strong>{" "}
                  <a href="mailto:support@newstarinternet.com" className="text-secondary hover:underline">
                    support@newstarinternet.com
                  </a>
                </li>
                <li>
                  <strong className="text-primary">Address:</strong> Shah Jamal Lahore, 54100, Pakistan
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
