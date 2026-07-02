import { Globe, Mail, MapPin, Phone, Share2, MessageSquare } from "lucide-react";
import Logo from "./Logo";
import { scrollToSection } from "../utils/scroll";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Courses", id: "courses" },
  { label: "Pricing", id: "pricing" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  { icon: Share2, label: "Social", href: "#" },
  { icon: Globe, label: "Website", href: "#" },
  { icon: MessageSquare, label: "Messages", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-brand-grey">
              Practical skills training from The BrandsWay — a PR & Marketing agency building
              real brands every day.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="min-h-[44px] text-sm text-brand-grey transition-colors hover:text-brand-purple"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-brand-grey">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-grey">
                <Phone className="h-4 w-4 shrink-0 text-brand-purple" />
                <a href="tel:+919876543210" className="hover:text-brand-purple">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-grey">
                <Mail className="h-4 w-4 shrink-0 text-brand-purple" />
                <a href="mailto:academy@thebrandsway.com" className="hover:text-brand-purple">
                  academy@thebrandsway.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-brand-purple-light text-brand-purple transition-colors hover:bg-brand-purple hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/5 pt-6 text-center text-xs text-brand-grey sm:text-sm">
          © {new Date().getFullYear()} The BrandsWay Skill Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
