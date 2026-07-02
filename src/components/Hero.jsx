import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { scrollToSection } from "../utils/scroll";
import { useReducedMotion } from "../hooks/useReducedMotion";
import Logo from "./Logo";
import {
  CoursesMenuHeader,
  CoursesMenuList,
  CoursesMenuFooter,
} from "./CoursesMenuPanel";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4";

const navLinks = [
  { label: "Pricing", id: "pricing" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

const stats = [
  { value: "8", label: "SKILL\nPROGRAMS", index: 2 },
  { value: "500", label: "STUDENTS\nTRAINED", index: 3 },
  { value: "25%", label: "EARLY BIRD\nSAVINGS", index: 4 },
];

const headingWords = ["Learn", "Real", "Skills"];

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function HeroLogo() {
  return (
    <Logo className="text-left" subtitle="Skill Academy" />
  );
}

function HamburgerButton({ onClick, custom }) {
  return (
    <motion.button
      type="button"
      custom={custom}
      initial="hidden"
      animate="visible"
      variants={fadeDown}
      onClick={onClick}
      className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-full bg-black"
      aria-label="Open menu"
    >
      <span className="h-0.5 w-4 bg-white" />
      <span className="h-0.5 w-4 bg-white" />
      <span className="h-0.5 w-4 bg-white" />
    </motion.button>
  );
}

function CoursesDropdown({ onNavigate, motionProps, customIndex }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCourseClick = () => {
    setOpen(false);
    onNavigate("courses");
  };

  return (
    <div ref={containerRef} className="relative">
      <motion.button
        type="button"
        custom={customIndex}
        {...motionProps}
        variants={fadeDown}
        onClick={() => setOpen((prev) => !prev)}
        onMouseEnter={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1.5 text-sm font-semibold tracking-widest uppercase transition-colors ${
          open ? "text-brand-purple" : "text-black hover:text-brand-purple"
        }`}
      >
        Courses
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2.5}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <div
            className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-[min(92vw,22rem)] flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-2xl shadow-black/10"
            >
              <CoursesMenuHeader />

              <div className="dropdown-scroll relative max-h-[min(52vh,18rem)]">
                <CoursesMenuList onSelect={handleCourseClick} variant="dropdown" />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent"
                  aria-hidden="true"
                />
              </div>

              <CoursesMenuFooter onSelect={handleCourseClick} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DesktopNav({ onNavigate, motionProps }) {
  return (
    <nav
      className="hidden items-center justify-center gap-6 lg:gap-10 md:flex"
      aria-label="Main navigation"
    >
      <CoursesDropdown onNavigate={onNavigate} motionProps={motionProps} customIndex={1} />

      {navLinks.map((link, i) => (
        <motion.button
          key={link.id}
          type="button"
          custom={i + 2}
          {...motionProps}
          variants={fadeDown}
          onClick={() => onNavigate(link.id)}
          className="text-sm font-semibold tracking-widest text-black uppercase transition-colors hover:text-brand-purple"
        >
          {link.label}
        </motion.button>
      ))}
    </nav>
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const videoRef = useRef(null);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    setMenuOpen(false);
    setMobileCoursesOpen(false);
    scrollToSection(id);
  };

  const motionProps = reducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col font-sans font-semibold uppercase tracking-widest text-black"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_URL}
        />
        <div className="absolute inset-0 bg-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-white/40" />
      </div>

      {/* Desktop: 3-col grid — logo | centered nav | CTA. Mobile: logo + hamburger */}
      <header className="relative z-20 grid grid-cols-[1fr_auto_1fr] items-center px-5 pt-5 sm:px-8 md:px-12 md:pt-6">
        <motion.button
          type="button"
          custom={0}
          {...motionProps}
          variants={fadeDown}
          onClick={() => handleNav("home")}
          className="min-h-[44px] justify-self-start"
          aria-label="BrandsWay Skill Academy home"
        >
          <HeroLogo />
        </motion.button>

        <div className="justify-self-center">
          <DesktopNav onNavigate={handleNav} motionProps={motionProps} />
        </div>

        <div className="flex items-center justify-self-end gap-3">
          <motion.button
            type="button"
            custom={5}
            {...motionProps}
            variants={fadeDown}
            onClick={() => handleNav("pricing")}
            className="hidden min-h-[40px] items-center gap-1.5 rounded-full bg-black px-5 py-2 text-xs font-semibold tracking-widest text-white uppercase transition-opacity hover:opacity-80 md:inline-flex"
          >
            Enroll Now
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </motion.button>

          <div className="md:hidden">
            <HamburgerButton custom={5} onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-white"
          >
            <div className="flex shrink-0 items-center justify-between px-5 pt-5 sm:px-8">
              <HeroLogo />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-white" strokeWidth={2} />
              </button>
            </div>

            <nav className="dropdown-scroll min-h-0 flex-1 overflow-y-auto px-5 py-8 sm:px-8">
              <div>
                <button
                  type="button"
                  onClick={() => setMobileCoursesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between text-3xl font-semibold tracking-widest text-black uppercase"
                  aria-expanded={mobileCoursesOpen}
                >
                  Courses
                  <ChevronDown
                    className={`h-6 w-6 transition-transform ${mobileCoursesOpen ? "rotate-180 text-brand-purple" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileCoursesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 overflow-hidden rounded-2xl border border-black/5 bg-brand-bg/40 shadow-sm"
                    >
                      <CoursesMenuHeader compact />

                      <div className="dropdown-scroll max-h-[min(42vh,260px)] overflow-y-auto bg-white">
                        <CoursesMenuList
                          onSelect={() => handleNav("courses")}
                          variant="mobile"
                        />
                      </div>

                      <CoursesMenuFooter
                        compact
                        onSelect={() => handleNav("courses")}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className="text-left text-3xl font-semibold tracking-widest text-black uppercase"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </nav>

            <div className="shrink-0 border-t border-black/5 px-5 py-5 sm:px-8">
              <button
                type="button"
                onClick={() => handleNav("pricing")}
                className="flex w-full items-center justify-center gap-2 text-lg font-semibold tracking-widest text-brand-purple uppercase"
              >
                Enroll Now
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-1 items-center justify-end px-5 py-8 sm:px-8 md:px-12 md:py-0">
        <div className="flex gap-5 sm:gap-8 md:gap-10">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              custom={stat.index}
              {...motionProps}
              variants={fadeUp}
              className="text-right"
            >
              <div
                className="font-semibold leading-none"
                style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }}
              >
                <span className="text-[0.5em] text-brand-purple">+</span>
                <span className="text-black">{stat.value}</span>
              </div>
              <p className="mt-1 whitespace-pre-line text-[10px] leading-tight font-semibold tracking-widest text-black uppercase sm:text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 px-5 pb-8 sm:px-8 sm:gap-8 md:gap-12 md:px-12 md:pb-12">
        <div className="flex items-center justify-between gap-4">
          <motion.p
            custom={5}
            {...motionProps}
            variants={fadeUp}
            className="max-w-[130px] text-[10px] leading-relaxed font-semibold tracking-widest text-black uppercase sm:max-w-[160px] sm:text-xs md:max-w-xs md:text-sm"
          >
            Building Bold
            <br />
            Skills That Power
            <br />
            Real Careers
          </motion.p>

          <motion.button
            type="button"
            custom={6}
            {...motionProps}
            variants={fadeUp}
            onClick={() => handleNav("pricing")}
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-base font-semibold tracking-widest text-brand-purple uppercase sm:gap-2 sm:text-xl md:text-2xl md:hidden"
          >
            Enroll Now
            <ArrowUpRight className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" strokeWidth={2} />
          </motion.button>
        </div>

        <div className="flex items-end justify-between gap-3 sm:gap-4">
          <motion.div
            custom={7}
            {...motionProps}
            variants={fadeUp}
            className="w-[120px] shrink-0 sm:w-[180px] md:w-[280px]"
          >
            <p className="text-left text-[9px] leading-relaxed font-semibold tracking-widest text-black uppercase sm:text-xs md:text-right md:text-sm">
              Skill Academy Built Around Elevating Your Vision Into Industry-Ready Expertise
            </p>
          </motion.div>

          <div className="text-right">
            {headingWords.map((word, wordIndex) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  initial={reducedMotion ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: reducedMotion ? 0 : 0.4 + wordIndex * 0.14,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block font-semibold text-black uppercase"
                  style={{
                    fontSize: "clamp(2rem, 9vw, 9rem)",
                    lineHeight: 0.88,
                  }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
