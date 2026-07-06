import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionEyebrow from "./SectionEyebrow";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function CoursesSection() {
  return (
    <section id="courses" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <SectionEyebrow>Our Programs</SectionEyebrow>
            <h2 className="text-balance text-3xl font-extrabold text-brand-charcoal sm:text-4xl md:text-5xl">
              AI, Coding &amp; Computer Courses in{" "}
              <span className="text-brand-purple">Aligarh</span>
            </h2>
            <p className="mt-4 text-base text-brand-grey sm:text-lg">
              Tap any course to see the full syllabus, fees, and career outcomes. Eight practical
              programs for beginners and career switchers.
            </p>
          </div>

          <Link
            to="/courses"
            className="inline-flex min-h-[48px] shrink-0 items-center gap-2 self-start rounded-full border border-black/10 bg-brand-bg px-5 py-3 text-sm font-bold text-brand-charcoal transition-colors hover:border-brand-purple hover:text-brand-purple sm:self-auto"
          >
            Browse all
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </motion.div>

        <div className="mt-10 md:hidden">
          <div className="mb-3 flex items-center justify-between px-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey">
              Swipe to explore
            </p>
            <ChevronRight className="h-4 w-4 animate-pulse text-brand-purple" aria-hidden="true" />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-6 pt-1 snap-x snap-mandatory scrollbar-hide"
            data-lenis-prevent
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} variant="carousel" />
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3"
        >
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} variant="grid" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
