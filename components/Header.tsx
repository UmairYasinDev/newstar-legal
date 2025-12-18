"use client";

import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-3 transition-opacity hover:opacity-80">
          <div className="relative h-10 w-10">
            <Image
              src="/logo.svg"
              alt="New Star Internet"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-primary">New Star Internet</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className="flex items-center space-x-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Terms
          </Link>
        </nav>
      </div>
    </header>
  );
}
