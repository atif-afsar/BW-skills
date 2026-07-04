import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { scrollToSection } from "../utils/scroll";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Courses", id: "courses" },
  { label: "Pricing", id: "pricing" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

const linkVariants = {
  closed: { opacity: 0, y: 24 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > window.innerHeight * 0.85);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (id) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      scrollToSection(id);
      return;
    }

    navigate(`/#${id}`);
  };

  const handleEnroll = () => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      scrollToSection("contact");
      return;
    }

    navigate("/#contact");
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 sm:px-6"
          >
            <nav
              className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-white px-4 py-2.5 shadow-lg shadow-black/5 sm:px-6 sm:py-3"
              aria-label="Main navigation"
            >
              <button
                type="button"
                onClick={() => handleNav("home")}
                className="min-h-[44px] min-w-[44px] text-left"
                aria-label="Go to home"
              >
                <Logo />
              </button>

              <ul className="hidden items-center gap-6 md:flex">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => handleNav(link.id)}
                      className="text-sm font-medium text-brand-grey transition-colors hover:text-brand-charcoal"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2">
                <motion.button
                  type="button"
                  onClick={handleEnroll}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="hidden min-h-[44px] items-center gap-2 rounded-full bg-brand-purple px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-purple/25 transition-shadow hover:shadow-lg hover:shadow-brand-purple/30 sm:inline-flex"
                >
                  Enroll Now
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </motion.button>

                <button
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-brand-charcoal md:hidden"
                  aria-label="Open menu"
                  aria-expanded={menuOpen}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-brand-charcoal/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <Logo subtitle="Skill Academy" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => handleNav(link.id)}
                  className="min-h-[52px] border-b border-white/10 py-4 text-left text-2xl font-bold text-white"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                onClick={handleEnroll}
                className="mt-8 flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand-purple px-6 py-4 text-lg font-bold text-white"
              >
                Enroll Now
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
