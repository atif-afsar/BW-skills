import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contactInfo } from "../data/contact";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function FloatingActionButton() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 280, damping: 22 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple text-white shadow-xl shadow-brand-purple/30 will-change-transform sm:bottom-8 sm:right-6"
    >
      {!reducedMotion && (
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-full border-2 border-brand-purple/40"
          animate={{ scale: [1, 1.28], opacity: [0.45, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <MessageCircle className="relative h-6 w-6" strokeWidth={2} />
    </motion.a>
  );
}
