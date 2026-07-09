import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SectionEyebrow from "./SectionEyebrow";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";
import { scrollToSection } from "../utils/scroll";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

export default function CoursesSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToPricing = () => {
    if (location.pathname === "/") {
      scrollToSection("pricing");
      return;
    }
    navigate("/#pricing");
  };

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
              programs for beginners and career switchers — fees and bundle packages are listed
              right below.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 self-start sm:self-auto">
            <Link
              to="/courses"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-black/10 bg-brand-bg px-5 py-3 text-sm font-bold text-brand-charcoal transition-colors hover:border-brand-purple hover:text-brand-purple"
            >
              Browse all
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <button
              type="button"
              onClick={goToPricing}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-purple px-5 py-3 text-sm font-bold text-white shadow-md shadow-brand-purple/20 transition-colors hover:bg-[#4f0fc4]"
            >
              Fees &amp; bundles
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 xl:grid-cols-3"
        >
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
