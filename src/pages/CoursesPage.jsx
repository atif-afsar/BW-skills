import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "../components/SectionEyebrow";
import CourseCard from "../components/CourseCard";
import SEO from "../components/SEO";
import PageHeader, { PageShell } from "../components/PageHeader";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import { courses } from "../data/courses";
import { getOrganizationSchema } from "../data/schema";

export default function CoursesPage() {
  return (
    <PageShell>
      <SEO
        title="AI, Coding & Data Analytics Courses in Aligarh | Brandsway Skills"
        description="Browse flagship programs in AI Skills, Coding + AI Automation, and Data Analytics at BrandsWay Skill Academy in Aligarh. Online & offline batches with practical projects."
        path="/courses"
        jsonLd={getOrganizationSchema()}
      />
      <PageHeader />

      <main className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow>All Programs</SectionEyebrow>
            <h1 className="text-balance text-3xl font-extrabold text-brand-charcoal sm:text-4xl lg:text-5xl">
              Flagship Career Programs in{" "}
              <span className="text-brand-purple">Aligarh</span>
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-grey sm:text-lg">
              Explore 3 comprehensive, career-oriented programs at BrandsWay Skill Academy —
              practical training in AI Skills, Coding + Automation, and Data Analytics with hands-on
              projects and agency mentorship.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-brand-purple px-6 py-8 text-center sm:px-10 sm:text-left">
            <h2 className="text-2xl font-extrabold text-white">Not sure which course to pick?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Contact our team for a free counselling session. We&apos;ll recommend the best AI or
              coding course in Aligarh based on your goals and schedule.
            </p>
            <Link
              to="/#contact"
              className="mt-5 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-purple"
            >
              Book Free Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActionButton />
    </PageShell>
  );
}
