import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";
import BundleCard from "./BundleCard";
import {
  courses,
  bundles,
  BATCH_SCHEDULE,
  EARLY_BIRD_DISCOUNT_PERCENT,
} from "../data/courses";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function PricingSection() {
  const [mode, setMode] = useState("offline");
  const [earlyBird, setEarlyBird] = useState(true);

  return (
    <section id="pricing" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionEyebrow>Investment</SectionEyebrow>
          <h2 className="text-balance text-3xl font-extrabold text-brand-charcoal sm:text-4xl md:text-5xl">
            <span className="text-brand-purple">Courses Pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-brand-grey sm:text-lg">
            Start with offline classroom learning by default, or switch to flexible online
            batches. Classes run in {BATCH_SCHEDULE.summary.toLowerCase()}. Early-bird offers
            of up to {EARLY_BIRD_DISCOUNT_PERCENT}% OFF are available on selected offline
            batches.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-5">
          <PricingToggle mode={mode} onChange={setMode} />

          <motion.p
            key={mode}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex max-w-md items-center justify-center gap-2 text-center text-sm text-brand-grey"
          >
            <Clock className="h-4 w-4 shrink-0 text-brand-purple" strokeWidth={2.25} />
            <span>{mode === "offline" ? BATCH_SCHEDULE.offline : BATCH_SCHEDULE.online}</span>
          </motion.p>

          {mode === "offline" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-md rounded-2xl border border-brand-purple/15 bg-brand-purple-light px-4 py-3 text-left shadow-sm sm:px-5"
            >
              <p className="text-sm font-bold text-brand-charcoal sm:text-base">
                {EARLY_BIRD_DISCOUNT_PERCENT}% OFF on offline batches.
              </p>
              <p className="mt-1 text-xs text-brand-grey sm:text-sm">
                Early-bird classroom pricing is reflected below for selected seats.
              </p>
            </motion.div>
          )}

          {mode === "online" && (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setEarlyBird((prev) => !prev)}
              className={`flex min-h-[48px] w-full max-w-md items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left transition-colors sm:px-5 ${
                earlyBird
                  ? "border-brand-purple bg-brand-purple-light"
                  : "border-transparent bg-white shadow-lg shadow-black/5"
              }`}
              aria-pressed={earlyBird}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                  earlyBird ? "border-brand-purple bg-brand-purple text-white" : "border-brand-grey/30 bg-white"
                }`}
              >
                {earlyBird && <Check className="h-4 w-4" strokeWidth={3} />}
              </span>
              <span className="text-sm font-bold text-brand-charcoal sm:text-base">
                Apply Early-Bird Offer ({EARLY_BIRD_DISCOUNT_PERCENT}% OFF)
              </span>
            </motion.button>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          id="bundles"
          className="mt-12 scroll-mt-24"
        >
          <h3 className="text-center text-2xl font-extrabold text-brand-charcoal sm:text-3xl">
            Bundle <span className="text-brand-purple">Packages</span>
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-brand-grey sm:text-base">
            Save more when you combine courses — same discount rules apply to bundles.
          </p>

          <motion.div
            key={`bundles-${mode}-${earlyBird}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-8 grid gap-5 sm:grid-cols-2"
          >
            {bundles.map((bundle) => (
              <BundleCard
                key={bundle.id}
                bundle={bundle}
                mode={mode}
                earlyBird={earlyBird}
              />
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-extrabold text-brand-charcoal sm:text-3xl">
            Individual Course <span className="text-brand-purple">Fees</span>
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-brand-grey sm:text-base">
            Per-course pricing for offline and online batches — enroll in any single program.
          </p>

          <motion.div
            key={`courses-${mode}-${earlyBird}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {courses.map((course) => (
              <PricingCard
                key={course.id}
                course={course}
                mode={mode}
                earlyBird={earlyBird}
              />
            ))}
          </motion.div>
        </div>

        <p className="mt-10 text-center text-xs italic text-brand-grey sm:text-sm">
          Online batch fees are kept at half the Offline fee. Early-bird pricing is valid
          for a limited time only, and selected offline batches may also include up to{" "}
          {EARLY_BIRD_DISCOUNT_PERCENT}% OFF.
        </p>
      </div>
    </section>
  );
}
