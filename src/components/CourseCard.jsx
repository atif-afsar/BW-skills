import { motion } from "framer-motion";
import { getIcon } from "../utils/icons";

export default function CourseCard({ course, index, variant = "grid" }) {
  const ghostNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className={`relative flex flex-col rounded-2xl bg-white p-5 shadow-lg shadow-black/5 sm:p-6 ${
        variant === "carousel"
          ? "w-[85vw] max-w-[320px] shrink-0 snap-center sm:w-[300px]"
          : "w-full"
      }`}
    >
      <span
        className="pointer-events-none absolute right-4 top-3 text-5xl font-extrabold text-brand-grey/10 sm:text-6xl"
        aria-hidden="true"
      >
        {ghostNumber}
      </span>

      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple-light text-brand-purple">
        {getIcon(course.icon, { className: "h-5 w-5", strokeWidth: 2 })}
      </div>

      <h3 className="pr-10 text-base font-bold leading-snug text-brand-charcoal sm:text-lg">
        {course.name}
      </h3>

      <span className="mt-2 inline-block w-fit rounded-full bg-brand-bg px-3 py-1 text-xs font-medium text-brand-grey">
        {course.duration}
      </span>

      <div className="mt-3 h-1 w-8 rounded-full bg-brand-purple" />
    </motion.article>
  );
}
