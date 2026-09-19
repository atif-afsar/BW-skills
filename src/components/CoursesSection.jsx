import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SectionEyebrow from "./SectionEyebrow";
import Course3DVisual from "./Course3DVisual";
import { courses } from "../data/courses";

function CourseCardBody({ course }) {
  return (
    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
      <div>
        {/* Top: Category & Pillar */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] font-extrabold tracking-[0.18em] text-brand-purple uppercase">
            {course.category}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-brand-purple/20 bg-brand-purple-light/70 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-brand-purple uppercase">
            {course.pillar}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-extrabold leading-tight text-brand-charcoal sm:text-3xl">
          {course.name}
        </h3>

        {/* Supporting Line / Statement */}
        <p className="mt-2 text-sm font-semibold tracking-wide text-brand-purple sm:text-base">
          {course.tagline}
        </p>

        {/* Overview Description */}
        <p className="mt-2.5 text-xs leading-relaxed text-brand-grey sm:text-sm">
          {course.overview}
        </p>

        {/* Key Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-black/5 py-3">
          <div className="text-center">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey">
              Duration
            </span>
            <span className="mt-0.5 block text-xs font-extrabold text-brand-charcoal sm:text-sm">
              {course.duration}
            </span>
          </div>
          <div className="border-x border-black/5 text-center">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey">
              Lectures
            </span>
            <span className="mt-0.5 block text-xs font-extrabold text-brand-charcoal sm:text-sm">
              {course.lectures} Sessions
            </span>
          </div>
          <div className="text-center">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey">
              Level
            </span>
            <span className="mt-0.5 block text-xs font-extrabold text-brand-charcoal sm:text-sm">
              Beginner
            </span>
          </div>
        </div>

        {/* Skill Chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-brand-bg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/80 transition-colors group-hover:bg-brand-purple-light group-hover:text-brand-purple"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Price & CTA */}
      <div className="mt-6 flex items-end justify-between border-t border-black/5 pt-4">
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey">
            Launch Offer Fee
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-brand-charcoal sm:text-3xl">
              ₹{course.currentPrice.toLocaleString("en-IN")}
            </span>
            <span className="text-sm text-brand-grey line-through">
              ₹{course.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <Link
          to={`/courses/${course.slug}`}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-charcoal px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all group-hover:bg-brand-purple group-hover:shadow-brand-purple/30"
          aria-label={`Explore ${course.name}`}
        >
          Explore Course
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="courses"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-brand-bg/40 to-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-brand-purple/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <SectionEyebrow>Flagship Programs</SectionEyebrow>
          <h2 className="mt-2 text-balance text-3xl font-extrabold text-brand-charcoal sm:text-4xl md:text-5xl lg:text-6xl">
            Learn Skills That <span className="text-brand-purple">Create Opportunities.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-grey sm:text-lg">
            <strong>AI. CODE. DATA.</strong> Three focused, project-driven career tracks built to
            take you from foundational understanding to real-world execution.
          </p>

          {/* Interactive Course Switcher Tabs (Desktop & Tablet) */}
          <div className="mt-8 hidden flex-wrap items-center justify-center gap-2 rounded-full border border-black/5 bg-white p-1.5 shadow-md shadow-black/5 sm:flex">
            {courses.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`relative rounded-full px-5 py-2.5 text-xs font-extrabold tracking-wider uppercase transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-brand-purple text-white shadow-md shadow-brand-purple/30"
                    : "text-brand-charcoal/70 hover:text-brand-purple"
                }`}
              >
                <span className="mr-1.5 opacity-60">0{i + 1}</span>
                {c.shortTitle} · <span className="font-medium opacity-80">{c.pillar}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Desktop 3D Spatial Gallery */}
        <div className="mt-14 hidden lg:block [perspective:1400px]">
          <div className="grid grid-cols-3 gap-6 items-stretch">
            {courses.map((course, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.article
                  key={course.id}
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    scale: isActive ? 1.02 : 0.96,
                    opacity: isActive ? 1 : 0.78,
                    y: isActive ? -8 : 6,
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border transition-all duration-500 bg-white ${
                    isActive
                      ? "border-brand-purple/40 shadow-2xl shadow-brand-purple/15 ring-2 ring-brand-purple/20 z-20"
                      : "border-black/5 shadow-lg shadow-black/5 hover:border-black/20 hover:opacity-95 z-10"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Integrated Studio Header Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-[#0E1320] px-4 py-2.5 text-white">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-brand-purple shadow-[0_0_8px_#6812EC]" />
                      <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-slate-300">
                        0{index + 1} · {course.pillar}
                      </span>
                    </div>

                    {isActive ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-purple px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm shadow-brand-purple/40">
                        <Sparkles className="h-3 w-3" />
                        Active View
                      </span>
                    ) : (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-400 group-hover:text-white">
                        Click to Focus
                      </span>
                    )}
                  </div>

                  {/* Top 3D Visual Stage */}
                  <div className="relative border-b border-black/5 bg-[#0A0D18]">
                    <Course3DVisual
                      course={course}
                      isInteractive={isActive}
                      className="h-56 w-full"
                    />
                  </div>

                  {/* Card Content */}
                  <CourseCardBody course={course} />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Immersive Vertical Flow */}
        <div className="mt-10 flex flex-col gap-8 lg:hidden">
          {courses.map((course, index) => (
            <article
              key={course.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl shadow-black/5 transition-all"
            >
              {/* Integrated Studio Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#0E1320] px-4 py-2.5 text-white">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-brand-purple shadow-[0_0_8px_#6812EC]" />
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-slate-300">
                    0{index + 1} · {course.pillar}
                  </span>
                </div>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300 uppercase">
                  {course.duration}
                </span>
              </div>

              {/* 3D Visual Stage */}
              <div className="relative border-b border-black/5 bg-[#0A0D18]">
                <Course3DVisual course={course} isInteractive={false} className="h-56 w-full" />
              </div>

              {/* Card Content */}
              <CourseCardBody course={course} />
            </article>
          ))}
        </div>

        {/* Bottom Section Controls & Pricing Link */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-3xl border border-black/5 bg-white p-6 text-center shadow-md sm:flex-row sm:text-left sm:p-8">
          <div>
            <h4 className="text-base font-extrabold text-brand-charcoal sm:text-lg">
              Compare Batches, Early-Bird Discounts &amp; Bundles
            </h4>
            <p className="mt-1 text-xs text-brand-grey sm:text-sm">
              Online batches are 50% lower than offline. Explore multi-course bundle packages
              starting at ₹6,999.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/courses"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/10 bg-brand-bg px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-charcoal transition-colors hover:border-brand-purple hover:text-brand-purple"
            >
              All 3 Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#pricing"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-purple px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-brand-purple/20 transition-all hover:bg-[#4f0fc4]"
            >
              View Full Pricing
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
