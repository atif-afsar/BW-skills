import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import { scrollToSection } from "../utils/scroll";
import { contactInfo, socialLinks } from "../data/contact";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Courses", id: "courses" },
  { label: "Pricing", id: "pricing" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

const socialVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (id) => {
    if (location.pathname === "/") {
      scrollToSection(id);
      return;
    }

    navigate(`/#${id}`);
  };

  return (
    <footer id="contact" className="border-t border-black/5 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="image" subtitle="Skill Academy" />
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
                    onClick={() => handleNav(link.id)}
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
                <span>{contactInfo.location}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-grey">
                <Phone className="h-4 w-4 shrink-0 text-brand-purple" />
                <a
                  href={`tel:${contactInfo.phoneTel}`}
                  className="transition-colors hover:text-brand-purple"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-grey">
                <Mail className="h-4 w-4 shrink-0 text-brand-purple" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all transition-colors hover:text-brand-purple"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={socialVariants}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-brand-purple-light text-brand-purple shadow-sm transition-colors hover:bg-brand-purple hover:text-white hover:shadow-md hover:shadow-brand-purple/20"
                >
                  <SocialIcon name={link.id} />
                </motion.a>
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
