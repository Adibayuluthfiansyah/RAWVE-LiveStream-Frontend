import Link from "next/link";
import { Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B0F] border-t border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-[#FF3A3A]">
              RAWVE
            </Link>
            <p className="text-gray-500 text-sm">© 2026 RAWVE Media Inc.</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition uppercase tracking-wider"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition uppercase tracking-wider"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-white transition uppercase tracking-wider"
            >
              Cookies
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition uppercase tracking-wider"
            >
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://twitter.com"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FF3A3A] flex items-center justify-center transition-colors"
            >
              <Twitter className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="https://discord.com"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FF3A3A] flex items-center justify-center transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
