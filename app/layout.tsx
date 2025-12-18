import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Star Internet - Legal Pages",
  description: "Privacy Policy and Terms of Service for New Star Internet Service Provider",
  keywords: "New Star, Internet Service Provider, Privacy Policy, Terms of Service, ISP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
