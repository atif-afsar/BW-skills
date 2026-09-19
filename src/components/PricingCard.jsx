import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedPrice from "./AnimatedPrice";
import BatchTiming from "./BatchTiming";
import { getCourseEnrollWhatsAppUrl } from "../data/contact";
import {
  calculateOnlinePrice,
  calculateEarlyBirdPrice,
} from "../data/courses";

export default function PricingCard({ course, mode, earlyBird }) {
  // If course has explicit currentPrice and originalPrice:
  const offlineOriginal = course.originalPrice || course.offline;
  const offlineOffer = course.currentPrice || calculateEarlyBirdPrice(course.offline);

  const onlineOriginal = calculateOnlinePrice(offlineOriginal);
  const onlineOffer = earlyBird
    ? Math.round(offlineOffer * 0.9)
    : onlineOriginal;

  const displayPrice = mode === "offline" ? offlineOffer : onlineOffer;
  const strikePrice = mode === "offline" ? offlineOriginal : onlineOriginal;
  const showStrike = Boolean(strikePrice && strikePrice > displayPrice);

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
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-6 shadow-lg shadow-black/5 transition-all hover:border-brand-purple/25 hover:shadow-xl hover:shadow-brand-purple/10"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-brand-purple/20 bg-brand-purple-light/80 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-brand-purple uppercase">
            {course.pillar || "PROGRAM"}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-grey">
            {course.duration}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-extrabold leading-snug text-brand-charcoal sm:text-xl">
          {course.name}
        </h3>
        <p className="mt-1 text-xs text-brand-grey">{course.tagline}</p>
        <div className="mt-3 h-1 w-8 rounded-full bg-brand-purple" />

        <div className="mt-5 flex flex-col">
          <AnimatePresence mode="wait">
            {showStrike && (
              <motion.span
                key={`${mode}-${strikePrice}`}
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
            className="text-3xl font-extrabold text-brand-charcoal"
          />
          <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-brand-purple">
            <Sparkles className="h-3 w-3" />
            <span>{course.offerBadge || "Special Launch Offer"}</span>
          </div>
        </div>

        <BatchTiming mode={mode} className="mt-4" />
      </div>

      <div className="mt-6 flex flex-col gap-2.5 border-t border-black/5 pt-4">
        <a
          href={getCourseEnrollWhatsAppUrl(course, { mode, price: displayPrice, earlyBird })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-brand-purple px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-brand-purple/20 transition-all hover:bg-[#4f0fc4]"
        >
          Enroll Now
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </a>

        <Link
          to={`/courses/${course.slug}`}
          className="inline-flex min-h-[40px] w-full items-center justify-center gap-1.5 rounded-full border border-black/10 bg-brand-bg px-4 py-2 text-xs font-bold text-brand-charcoal transition-colors hover:border-brand-purple hover:text-brand-purple"
        >
          Syllabus &amp; Details
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}
