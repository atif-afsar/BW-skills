import { motion } from "framer-motion";
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
    <section id="courses" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionEyebrow>Our Programs</SectionEyebrow>
          <h2 className="text-balance text-3xl font-extrabold text-brand-charcoal sm:text-4xl md:text-5xl">
            Skill <span className="text-brand-purple">Courses</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-brand-grey sm:text-lg">
            Eight industry-focused programs designed for beginners and career switchers —
            swipe to explore on mobile.
          </p>
        </motion.div>

        <div className="mt-10 md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide"
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
          className="mt-10 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4"
        >
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} variant="grid" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
