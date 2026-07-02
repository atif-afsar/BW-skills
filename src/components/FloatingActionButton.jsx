import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function FloatingActionButton() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      aria-label="Chat with us"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple text-white shadow-xl shadow-brand-purple/30 sm:bottom-8 sm:right-6"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-brand-purple"
        animate={
          reducedMotion
            ? {}
            : {
                scale: [1, 1.35, 1],
                opacity: [0.5, 0, 0.5],
              }
        }
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <MessageCircle className="relative h-6 w-6" strokeWidth={2} />
    </motion.button>
  );
}
