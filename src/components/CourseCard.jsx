import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Course3DVisual from "./Course3DVisual";

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
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg shadow-black/5 transition-all hover:border-brand-purple/30 hover:shadow-2xl hover:shadow-brand-purple/10"
    >
      <Link
        to={`/courses/${course.slug}`}
        aria-label={`View ${course.name} course details`}
        className="absolute inset-0 z-20 rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
      />

      {/* Integrated Studio Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0E1320] px-4 py-2.5 text-white">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-brand-purple shadow-[0_0_8px_#6812EC]" />
          <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-slate-300">
            {ghostNumber} · {course.pillar || "PROGRAM"}
          </span>
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300 uppercase">
          {course.duration}
        </span>
      </div>

      {/* 3D Visual Preview Stage */}
      <div className="relative border-b border-black/5 bg-[#0A0D18]">
        <Course3DVisual course={course} isInteractive={false} className="h-52 w-full" />
      </div>

      {/* Details */}
      <div className="relative flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <p className="text-[10px] font-extrabold tracking-[0.16em] text-brand-purple uppercase">
            {course.category}
          </p>

          <h3 className="mt-2 text-lg font-extrabold leading-snug text-brand-charcoal sm:text-xl">
            {course.name}
          </h3>

          <p className="mt-1.5 text-xs font-semibold text-brand-grey sm:text-sm">
            {course.tagline}
          </p>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-brand-grey">
            {course.overview}
          </p>

          {/* Skill Chips */}
          <div className="mt-3.5 flex flex-wrap gap-1">
            {course.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-brand-bg px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-charcoal/70"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-5 flex flex-col gap-3 border-t border-black/5 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="block text-[9px] font-bold uppercase tracking-wider text-brand-grey">
              Launch Fee
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-extrabold text-brand-charcoal">
                ₹{course.currentPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-brand-grey line-through">
                ₹{course.originalPrice.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brand-charcoal group-hover:text-brand-purple">
              <span>Explore</span>
              <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
            </div>
            <Link
              to={`/apply?course=${course.slug}`}
              className="relative z-30 inline-flex min-h-[36px] items-center justify-center rounded-full bg-brand-purple px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-md shadow-brand-purple/20 transition-all hover:scale-105 hover:bg-[#4f0fc4]"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
