import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import { scrollToSection } from "../utils/scroll";
import { contactInfo, socialLinks } from "../data/contact";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", id: "pricing" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

const pageLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faq" },
  { label: "Enroll", href: "/#contact" },
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

  const handleLink = (link) => {
    if (link.id) {
      handleNav(link.id);
      return;
    }
    navigate(link.href);
  };

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="bg-brand-purple px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Start Your Journey
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Ready to learn industry-ready skills?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
              Explore courses, compare offline & online pricing, and enroll with The BrandsWay team.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={() => handleNav("pricing")}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-purple shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View Pricing
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col items-center text-center sm:col-span-2 sm:items-start sm:text-left lg:col-span-4">
              <Logo variant="image" subtitle="Skill Academy" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-grey">
                Brandsway Skills — Aligarh&apos;s institute for AI, coding, Python, web development
                &amp; computer courses. Practical training from The BrandsWay agency.
              </p>
            </div>

            <div className="sm:col-span-1 lg:col-span-2 lg:col-start-6">
              <h3 className="text-center text-sm font-bold uppercase tracking-wider text-brand-charcoal sm:text-left">
                Quick Links
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-1 sm:gap-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => handleLink(link)}
                      className="flex min-h-[44px] w-full items-center justify-center text-sm text-brand-grey transition-colors hover:text-brand-purple sm:justify-start"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-1 lg:col-span-2">
              <h3 className="text-center text-sm font-bold uppercase tracking-wider text-brand-charcoal sm:text-left">
                Resources
              </h3>
              <ul className="mt-4 space-y-1">
                {pageLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="flex min-h-[44px] items-center justify-center text-sm text-brand-grey transition-colors hover:text-brand-purple sm:justify-start"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-1 lg:col-span-2">
              <h3 className="text-center text-sm font-bold uppercase tracking-wider text-brand-charcoal sm:text-left">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start justify-center gap-3 text-sm text-brand-grey sm:justify-start">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                  <span className="max-w-xs text-center sm:text-left">{contactInfo.location}</span>
                </li>
                <li className="flex items-center justify-center gap-3 text-sm text-brand-grey sm:justify-start">
                  <Phone className="h-4 w-4 shrink-0 text-brand-purple" />
                  <a
                    href={`tel:${contactInfo.phoneTel}`}
                    className="transition-colors hover:text-brand-purple"
                  >
                    {contactInfo.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center justify-center gap-3 text-sm text-brand-grey sm:justify-start">
                  <Mail className="h-4 w-4 shrink-0 text-brand-purple" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="break-all text-center transition-colors hover:text-brand-purple sm:text-left"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-center text-sm font-bold uppercase tracking-wider text-brand-charcoal sm:text-left">
                Follow Us
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-center text-sm text-brand-grey sm:mx-0 sm:text-left">
                Stay updated with tips, cohort announcements, and agency insights.
              </p>
              <div className="mt-4 flex justify-center gap-3 sm:justify-start">
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

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 text-center text-xs text-brand-grey sm:flex-row sm:text-left sm:text-sm">
            <p>© {new Date().getFullYear()} The BrandsWay Skill Academy. All rights reserved.</p>
            <p className="text-brand-grey/80">
              Website by{" "}
              <a
                href="https://portfolio-rgzt.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-charcoal transition-colors hover:text-brand-purple"
              >
                Atif Afsar
              </a>
            </p>
            <p className="text-brand-grey/80">PR & Marketing · Aligarh, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
