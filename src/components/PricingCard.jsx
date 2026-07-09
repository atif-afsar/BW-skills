import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedPrice from "./AnimatedPrice";
import BatchTiming from "./BatchTiming";
import { getCourseEnrollWhatsAppUrl } from "../data/contact";
import {
  calculateOnlinePrice,
  calculateEarlyBirdPrice,
} from "../data/courses";

export default function PricingCard({ course, mode, earlyBird }) {
  const online = calculateOnlinePrice(course.offline);
  const offlineEarlyBirdPrice = calculateEarlyBirdPrice(course.offline);
  const earlyBirdPrice = calculateEarlyBirdPrice(online);

  const displayPrice =
    mode === "offline"
      ? offlineEarlyBirdPrice
      : earlyBird
        ? earlyBirdPrice
        : online;

  const strikePrice = mode === "offline" ? course.offline : online;
  const showStrike = mode === "offline" || (mode === "online" && earlyBird);

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -4 }}
      className="flex flex-col rounded-2xl bg-white p-5 shadow-lg shadow-black/5 sm:p-6"
    >
      <h3 className="text-base font-bold leading-snug text-brand-charcoal sm:text-lg">
        {course.name}
      </h3>
      <span className="mt-2 inline-block w-fit rounded-full bg-brand-bg px-3 py-1 text-xs font-medium text-brand-grey">
        {course.duration}
      </span>
      <div className="mt-3 h-1 w-8 rounded-full bg-brand-purple" />

      <div className="mt-4 flex flex-col">
        <AnimatePresence mode="wait">
          {showStrike && (
            <motion.span
              key={mode}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm text-brand-grey line-through"
            >
              ₹{strikePrice.toLocaleString("en-IN")}
            </motion.span>
          )}
        </AnimatePresence>
        <AnimatedPrice
          value={displayPrice}
          className="text-2xl font-extrabold text-brand-charcoal sm:text-3xl"
        />
        {mode === "online" && (
          <span className="mt-1 text-xs font-medium text-brand-purple">
            {earlyBird ? "Early-Bird Online" : "Online Batch"}
          </span>
        )}
        {mode === "offline" && (
          <span className="mt-1 text-xs font-medium text-brand-purple">
            Early-Bird Offline
          </span>
        )}
      </div>

      <BatchTiming mode={mode} className="mt-4" />

      <a
        href={getCourseEnrollWhatsAppUrl(course, { mode, price: displayPrice, earlyBird })}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-brand-purple/20 bg-brand-purple-light px-4 py-2.5 text-sm font-bold text-brand-purple transition-colors hover:border-brand-purple hover:bg-brand-purple hover:text-white"
      >
        Enroll Now
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </a>
    </motion.article>
  );
}
