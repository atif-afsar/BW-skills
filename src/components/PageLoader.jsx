import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

const MIN_DURATION = 1600;
const EXIT_DURATION = 0.65;
const ease = [0.22, 1, 0.36, 1];

export default function PageLoader({ onComplete }) {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let rafId;
    let exitTimer;

    const tick = (now) => {
      const elapsed = now - start;
      const target = Math.min(elapsed / MIN_DURATION, 1);
      const eased = 1 - Math.pow(1 - target, 2.4);
      setProgress(Math.round(eased * 100));
      if (target < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const finish = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DURATION - elapsed);
      exitTimer = window.setTimeout(() => setVisible(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(exitTimer);
      window.removeEventListener("load", finish);
    };
  }, []);

  const handleExitComplete = () => {
    onComplete?.();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="page-loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-brand-bg"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: reducedMotion ? 0.15 : EXIT_DURATION, ease },
          }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="absolute -left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-brand-purple/8 blur-3xl" />
            <div className="absolute -right-1/4 bottom-1/4 h-[360px] w-[360px] rounded-full bg-brand-purple-light/60 blur-3xl" />
          </motion.div>

          <motion.div
            className="relative flex flex-col items-center gap-8 px-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -24,
              scale: 0.96,
              transition: { duration: reducedMotion ? 0.15 : EXIT_DURATION, ease },
            }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
              {!reducedMotion && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-full border border-brand-purple/15"
                    animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.15, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.svg
                    className="absolute inset-0 h-full w-full -rotate-90"
                    viewBox="0 0 100 100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-brand-purple/12"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="url(#loader-gradient)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="289"
                      animate={{ strokeDashoffset: [289, 72, 289] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <defs>
                      <linearGradient id="loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#5e0ed7" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#5e0ed7" />
                        <stop offset="100%" stopColor="#5e0ed7" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </>
              )}

              <motion.img
                src="/brandsway-logo.png"
                alt=""
                aria-hidden="true"
                className="relative z-10 h-20 w-20 rounded-full object-cover shadow-lg shadow-brand-purple/10 sm:h-24 sm:w-24"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.55, ease }}
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5, ease }}
              >
                <p className="text-lg font-extrabold leading-tight sm:text-xl">
                  <span className="text-brand-charcoal">The Brands</span>
                  <span className="text-brand-purple">Way</span>
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-grey sm:text-xs">
                  Skill Academy
                </p>
              </motion.div>

              <div className="w-36 sm:w-44">
                <div className="h-[3px] overflow-hidden rounded-full bg-brand-purple/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-brand-purple/60 via-brand-purple to-brand-purple/80"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.15, ease: "linear" }}
                  />
                </div>
                <motion.p
                  className="mt-2 text-center text-[10px] font-medium tabular-nums tracking-widest text-brand-grey/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  {progress}%
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-bg to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
