
import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <ShieldCheck className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">OHM MARUTHI</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Decades of trust and commitment in providing the best insurance solutions for our clients. Your security is our priority.
            </p>
            <div className="flex gap-4 pt-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-secondary hover:text-white text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-secondary hover:text-white text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-secondary hover:text-white text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-secondary hover:text-white text-white">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Insurance Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-secondary">
              Insurance Products
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#health" className="hover:text-secondary transition-colors" prefetch={false}>Health Insurance</Link></li>
              <li><Link href="#motor" className="hover:text-secondary transition-colors" prefetch={false}>Motor Insurance</Link></li>
              <li><Link href="#life" className="hover:text-secondary transition-colors" prefetch={false}>Life Insurance</Link></li>
              <li><Link href="#travel" className="hover:text-secondary transition-colors" prefetch={false}>Travel Insurance</Link></li>
              <li><Link href="#business" className="hover:text-secondary transition-colors" prefetch={false}>Business Insurance</Link></li>
              <li><Link href="#group" className="hover:text-secondary transition-colors" prefetch={false}>Group Mediclaim</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-secondary">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-secondary transition-colors" prefetch={false}>Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors" prefetch={false}>About Us</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors" prefetch={false}>Services</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors" prefetch={false}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-secondary">
              Reach Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>
                  123, Insurance Plaza, Main Road,
                  <br />Bangalore, Karnataka - 560001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:info@ohmmaruthi.com" className="hover:text-white transition-colors">info@ohmmaruthi.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors" prefetch={false}>Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-secondary transition-colors" prefetch={false}>Disclaimer</Link>
            <Link href="/terms-conditions" className="hover:text-secondary transition-colors" prefetch={false}>Terms & Conditions</Link>
          </div>
          <p>© {new Date().getFullYear()} OHM MARUTHI INSURANCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
