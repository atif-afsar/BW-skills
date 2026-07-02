import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import AnimatedPrice from "./AnimatedPrice";
import {
  getBundleOfflinePrice,
  calculateOnlinePrice,
  calculateEarlyBirdPrice,
} from "../data/courses";

export default function BundleCard({ bundle, mode, earlyBird }) {
  const offlineTotal = getBundleOfflinePrice(bundle.courseIds);
  const offlineEarlyBirdTotal = calculateEarlyBirdPrice(offlineTotal);
  const onlineTotal = calculateOnlinePrice(offlineTotal);
  const earlyBirdTotal = calculateEarlyBirdPrice(onlineTotal);

  const displayPrice =
    mode === "offline"
      ? offlineEarlyBirdTotal
      : earlyBird
        ? earlyBirdTotal
        : onlineTotal;

  const strikePrice = mode === "offline" ? offlineTotal : onlineTotal;
  const showStrike = mode === "offline" || (mode === "online" && earlyBird);

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -4 }}
      className={`relative flex flex-col rounded-2xl bg-white p-6 shadow-lg sm:p-7 ${
        bundle.featured
          ? "border-2 border-brand-purple shadow-brand-purple/15 ring-4 ring-brand-purple/10"
          : "shadow-black/5"
      }`}
    >
      {bundle.badge && (
        <div className="absolute -right-1 -top-3 flex items-center gap-1 rounded-full bg-brand-purple px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md sm:text-xs">
          <Sparkles className="h-3 w-3" />
          {bundle.badge}
        </div>
      )}

      <h3 className="text-lg font-bold text-brand-charcoal sm:text-xl">{bundle.name}</h3>
      <p className="mt-1 text-sm text-brand-grey">{bundle.description}</p>
      <div className="mt-3 h-1 w-8 rounded-full bg-brand-purple" />

      <div className="mt-5 flex flex-col">
        <AnimatePresence mode="wait">
          {showStrike && (
            <motion.span
              key={mode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
        {mode === "online" && (
          <span className="mt-1 text-xs font-medium text-brand-purple">
            {earlyBird ? "Early-Bird Bundle Price" : "Online Bundle Price"}
          </span>
        )}
        {mode === "offline" && (
          <span className="mt-1 text-xs font-medium text-brand-purple">
            Early-Bird Offline Bundle
          </span>
        )}
      </div>

      <motion.button
        type="button"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-5 min-h-[44px] rounded-full bg-brand-purple px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-purple/20"
      >
        Enroll in Bundle
      </motion.button>
    </motion.article>
  );
}
