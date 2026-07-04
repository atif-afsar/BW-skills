import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../utils/scroll";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { EARLY_BIRD_DISCOUNT_PERCENT } from "../data/courses";

export default function FinalCTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-[#1a0a30] to-brand-charcoal" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(94,14,215,0.35) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-balance text-3xl font-extrabold text-white sm:text-4xl md:text-5xl"
        >
          Ready to <span className="text-brand-purple">Build</span> Your Skills?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Join the next cohort and lock in {EARLY_BIRD_DISCOUNT_PERCENT}% early-bird savings on
          all online programs. Seats are limited — enroll before the offer ends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <motion.button
            type="button"
            onClick={() => scrollToSection("contact")}
            animate={
              reducedMotion
                ? {}
                : {
                    boxShadow: [
                      "0 0 0 0 rgba(94,14,215,0.4)",
                      "0 0 0 12px rgba(94,14,215,0)",
                      "0 0 0 0 rgba(94,14,215,0)",
                    ],
                  }
            }
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand-purple px-8 py-4 text-base font-bold text-white sm:text-lg"
          >
            Enroll Now — Limited Seats
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
