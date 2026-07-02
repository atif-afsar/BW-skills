import { motion } from "framer-motion";

export default function PricingToggle({ mode, onChange }) {
  const tabs = [
    { id: "offline", label: "Offline" },
    { id: "online", label: "Online" },
  ];

  return (
    <div
      className="relative inline-flex w-full max-w-xs rounded-full bg-white p-1.5 shadow-lg shadow-black/5 sm:max-w-sm"
      role="tablist"
      aria-label="Pricing mode"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={mode === tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative z-10 min-h-[48px] flex-1 rounded-full text-sm font-bold transition-colors sm:text-base ${
            mode === tab.id ? "text-white" : "text-brand-grey"
          }`}
        >
          {mode === tab.id && (
            <motion.span
              layoutId="pricing-toggle-pill"
              className="absolute inset-0 rounded-full bg-brand-purple shadow-md shadow-brand-purple/25"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
