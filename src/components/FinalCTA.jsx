import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { scrollToSection } from "../utils/scroll";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function FinalCTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-brand-charcoal">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c051a] via-[#1a0a30] to-[#0c051a]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(94,14,215,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-balance text-4xl font-extrabold text-white sm:text-5xl md:text-6xl uppercase tracking-tight"
        >
          YOUR NEXT SKILL <br />
          <span className="text-brand-purple">STARTS HERE.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand-grey mb-4">Choose your path:</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {['DATA', 'AI', 'CODE', 'AUTOMATION'].map(path => (
              <span key={path} className="px-4 py-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-purple-light text-xs sm:text-sm font-extrabold tracking-wider">
                {path}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => scrollToSection("courses")}
            className="inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
          >
            EXPLORE PROGRAMS
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand-purple px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-brand-purple/20 transition-transform hover:scale-105"
          >
            ENROLL NOW <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-xs font-bold tracking-widest text-brand-grey uppercase"
        >
          <span className="pt-2 sm:pt-0 sm:px-6">3 MONTHS</span>
          <span className="pt-2 sm:pt-0 sm:px-6">50+ LIVE LECTURES</span>
          <span className="pt-2 sm:pt-0 sm:px-6">PRACTICAL PROJECTS</span>
        </motion.div>
      </div>
    </section>
  );
}
