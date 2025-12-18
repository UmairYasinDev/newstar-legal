import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-primary text-white">
      <div className="container px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">New Star Internet</h3>
            <p className="text-sm text-primary-light">
              Delivering reliable, high-speed internet to keep you connected to what matters most.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-primary-light transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-primary-light transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-primary-light">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>support@newstarinternet.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-primary-light">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Shah Jamal Lahore, 54100, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-dark pt-8 text-center text-sm text-primary-light">
          <p>&copy; {new Date().getFullYear()} New Star Internet. All rights reserved.</p>
          <p className="mt-2">Last Updated: December 16, 2025</p>
        </div>
      </div>
    </footer>
  );
}
