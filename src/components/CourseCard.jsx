import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getIcon } from "../utils/icons";

const sizeStyles = {
  carousel: "w-[min(88vw,380px)] shrink-0 snap-center sm:w-[360px]",
  grid: "w-full min-h-[260px] sm:min-h-[280px]",
  featured: "w-full min-h-[280px] sm:min-h-[300px]",
};

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
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-lg shadow-black/5 transition-shadow hover:border-brand-purple/25 hover:shadow-xl hover:shadow-brand-purple/10 sm:p-7 ${sizeStyles[variant] || sizeStyles.grid}`}
    >
      <Link
        to={`/courses/${course.slug}`}
        aria-label={`View ${course.name} course details`}
        className="absolute inset-0 z-10 rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
      />

      <div className="relative flex flex-1 flex-col">
        <span
          className="pointer-events-none absolute -right-1 -top-1 text-6xl font-extrabold text-brand-grey/10 sm:text-7xl"
          aria-hidden="true"
        >
          {ghostNumber}
        </span>

        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple-light text-brand-purple transition-colors group-hover:bg-brand-purple group-hover:text-white">
          {getIcon(course.icon, { className: "h-6 w-6", strokeWidth: 2 })}
        </div>

        <h3 className="pr-8 text-lg font-bold leading-snug text-brand-charcoal sm:text-xl">
          {course.name}
        </h3>

        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-brand-grey">
          {course.tagline}
        </p>

        <span className="mt-4 inline-block w-fit rounded-full bg-brand-bg px-3.5 py-1.5 text-xs font-semibold text-brand-charcoal">
          {course.duration}
        </span>
      </div>

      <div className="relative z-0 mt-6 flex items-center justify-between border-t border-black/5 pt-5">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-grey transition-colors group-hover:text-brand-purple">
          View course
        </span>
        <span
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-bg text-brand-charcoal transition-all group-hover:scale-105 group-hover:bg-brand-purple group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-purple/25"
          aria-hidden="true"
        >
          <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
        </span>
      </div>
    </motion.article>
  );
}
