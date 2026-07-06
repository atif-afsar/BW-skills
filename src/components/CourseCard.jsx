import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CourseCard({ course, index }) {
  const ghostNumber = String(index + 1).padStart(2, "0");

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
      whileTap={{ scale: 0.98 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-md shadow-black/5 transition-shadow hover:border-brand-purple/25 hover:shadow-lg hover:shadow-brand-purple/10 sm:rounded-3xl sm:shadow-lg"
    >
      <Link
        to={`/courses/${course.slug}`}
        aria-label={`View ${course.name} course details`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:rounded-3xl"
      />

      <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg sm:aspect-[16/10]">
        <img
          src={course.image}
          alt={course.imageAlt || course.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute left-2 top-2 rounded-full bg-black/45 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-xs"
          aria-hidden="true"
        >
          {ghostNumber}
        </span>
        <span className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-brand-charcoal shadow-sm sm:bottom-3 sm:left-3 sm:px-3 sm:py-1.5 sm:text-xs">
          {course.duration}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-3 sm:p-5">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-brand-charcoal sm:text-base md:text-lg">
          {course.name}
        </h3>

        <p className="mt-1.5 line-clamp-2 flex-1 text-[11px] leading-relaxed text-brand-grey sm:mt-2 sm:text-sm">
          {course.tagline}
        </p>

        <div className="relative z-0 mt-3 flex items-center justify-between border-t border-black/5 pt-3 sm:mt-4 sm:pt-4">
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-brand-grey transition-colors group-hover:text-brand-purple sm:inline sm:text-xs">
            View course
          </span>
          <span
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-brand-bg text-brand-charcoal transition-all group-hover:scale-105 group-hover:bg-brand-purple group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-purple/25 sm:h-10 sm:w-10"
            aria-hidden="true"
          >
            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
