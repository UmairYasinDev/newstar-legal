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
      <body>{children}</body>
    </html>
  );
}
