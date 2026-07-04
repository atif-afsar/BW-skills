import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, Clock3, Sparkles, Users } from "lucide-react";
import Logo from "../components/Logo";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import SectionEyebrow from "../components/SectionEyebrow";
import AnimatedPrice from "../components/AnimatedPrice";
import {
  courses,
  EARLY_BIRD_DISCOUNT_PERCENT,
  ONLINE_DISCOUNT_PERCENT,
  calculateOnlinePrice,
  calculateEarlyBirdPrice,
  getCourseBySlug,
} from "../data/courses";
import {
  getCourseSeo,
  getCourseSeoTitle,
  getCourseSeoH1,
  getCourseSeoDescription,
} from "../data/courseSeo";
import { getCourseSchema } from "../data/schema";
import { getIcon } from "../utils/icons";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Meta({ course }) {
  return (
    <SEO
      title={getCourseSeoTitle(course)}
      description={getCourseSeoDescription(course)}
      path={`/courses/${course.slug}`}
      jsonLd={getCourseSchema(course)}
    />
  );
}

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const onlinePrice = calculateOnlinePrice(course.offline);
  const offlineEarlyBirdPrice = calculateEarlyBirdPrice(course.offline);
  const onlineEarlyBirdPrice = calculateEarlyBirdPrice(onlinePrice);
  const relatedCourses = courses.filter((item) => item.slug !== course.slug).slice(0, 3);
  const seo = getCourseSeo(course.slug);
  const careerOpportunities = seo.careerOpportunities || course.outcomes;

  return (
    <div className="min-h-screen bg-brand-bg">
      <Meta course={course} />

      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="min-h-[44px]">
            <Logo />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-brand-charcoal transition-colors hover:border-brand-purple hover:text-brand-purple"
            >
              <ArrowLeft className="h-4 w-4" />
              Back Home
            </Link>
            <Link
              to={`/apply?course=${course.slug}`}
              className="hidden min-h-[44px] items-center gap-2 rounded-full bg-brand-purple px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-purple/20 sm:inline-flex"
            >
              Enroll Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <motion.div initial="hidden" animate="visible" variants={itemVariants}>
              <SectionEyebrow>{course.duration}</SectionEyebrow>
              <h1 className="text-balance text-3xl font-extrabold leading-tight text-brand-charcoal sm:text-4xl lg:text-5xl">
                {getCourseSeoH1(course)}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-grey sm:text-lg">
                {seo.localIntro || course.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {course.audience.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-purple/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-charcoal shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.aside
              id="pricing-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-xl shadow-black/5 sm:p-7"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple-light text-brand-purple">
                {getIcon(course.icon, { className: "h-6 w-6", strokeWidth: 2 })}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-brand-grey">
                  <Clock3 className="h-4 w-4 text-brand-purple" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-grey">
                  <Users className="h-4 w-4 text-brand-purple" />
                  {seo.courseMode || "Online & Offline"} · Small batches
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-brand-bg p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey">
                    Offline Batch
                  </p>
                  <p className="mt-2 text-sm text-brand-grey line-through">
                    ₹{course.offline.toLocaleString("en-IN")}
                  </p>
                  <AnimatedPrice
                    value={offlineEarlyBirdPrice}
                    className="mt-1 block text-2xl font-extrabold text-brand-charcoal sm:text-3xl"
                  />
                  <p className="mt-1 text-xs font-medium text-brand-purple">
                    Early-bird offline · {EARLY_BIRD_DISCOUNT_PERCENT}% OFF
                  </p>
                </div>

                <div className="rounded-2xl bg-brand-bg p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey">
                    Online Batch
                  </p>
                  <p className="mt-2 text-sm text-brand-grey line-through">
                    ₹{onlinePrice.toLocaleString("en-IN")}
                  </p>
                  <AnimatedPrice
                    value={onlineEarlyBirdPrice}
                    className="mt-1 block text-2xl font-extrabold text-brand-charcoal sm:text-3xl"
                  />
                  <p className="mt-1 text-xs font-medium text-brand-purple">
                    Early-bird online · {EARLY_BIRD_DISCOUNT_PERCENT}% OFF
                  </p>
                  <p className="mt-1 text-[11px] text-brand-grey">
                    Online base is {ONLINE_DISCOUNT_PERCENT}% lower than offline classroom fee.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <Link
                  to={`/apply?course=${course.slug}`}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-purple px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand-purple/20"
                >
                  Enroll Now
                </Link>
                <Link
                  to="/#pricing"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-brand-charcoal/10 bg-white px-6 py-3 text-sm font-bold text-brand-charcoal"
                >
                  Compare All Pricing
                </Link>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "What You Will Learn",
                value: `${course.syllabus.length} Core Modules`,
                desc: "A structured path from fundamentals to guided execution.",
              },
              {
                title: "Tools You Will Use",
                value: `${course.tools.length} Industry Tools`,
                desc: "Learn the platforms and workflows used in real projects.",
              },
              {
                title: "Portfolio Output",
                value: `${course.projects.length} Practical Projects`,
                desc: "Every course ends with execution-focused portfolio work.",
              },
              {
                title: "Career Benefit",
                value: course.outcomes[0],
                desc: "Skills built for internships, freelance work, or role readiness.",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl bg-white p-6 shadow-lg shadow-black/5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">
                  {item.title}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold text-brand-charcoal">
                  {item.value}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-grey">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionEyebrow>Careers</SectionEyebrow>
            <h2 className="text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
              Career Opportunities After This Course
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-grey sm:text-base">
              Graduates from Brandsway Skills in Aligarh use this training to start freelancing,
              internships, and entry-level roles across Uttar Pradesh and remote opportunities.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {careerOpportunities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl bg-white p-5 shadow-lg shadow-black/5"
                >
                  <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                  <span className="text-sm leading-relaxed text-brand-grey sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionEyebrow>Syllabus</SectionEyebrow>
              <h2 className="text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
                Course <span className="text-brand-purple">Roadmap</span>
              </h2>
              <div className="mt-8 space-y-4">
                {course.syllabus.map((module, index) => (
                  <article
                    key={module}
                    className="rounded-2xl bg-white p-5 shadow-lg shadow-black/5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-purple-light text-sm font-extrabold text-brand-purple">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-brand-charcoal sm:text-lg">
                          Module {index + 1}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-brand-grey sm:text-base">
                          {module}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.section
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="rounded-3xl bg-white p-6 shadow-xl shadow-black/5 sm:p-7"
              >
                <SectionEyebrow>Benefits</SectionEyebrow>
                <ul className="space-y-3">
                  {course.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-brand-grey">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-3xl bg-white p-6 shadow-xl shadow-black/5 sm:p-7"
              >
                <SectionEyebrow>Tools</SectionEyebrow>
                <div className="flex flex-wrap gap-3">
                  {course.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-brand-purple-light px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-purple"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-3xl bg-white p-6 shadow-xl shadow-black/5 sm:p-7"
              >
                <SectionEyebrow>Projects</SectionEyebrow>
                <div className="space-y-3">
                  {course.projects.map((project) => (
                    <div
                      key={project}
                      className="rounded-2xl border border-black/5 bg-brand-bg p-4 text-sm font-semibold text-brand-charcoal"
                    >
                      {project}
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <SectionEyebrow>Related Courses</SectionEyebrow>
              <h2 className="text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
                Explore More <span className="text-brand-purple">Skills</span>
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {relatedCourses.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl bg-white p-6 shadow-lg shadow-black/5"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple-light text-brand-purple">
                    {getIcon(item.icon, { className: "h-5 w-5", strokeWidth: 2 })}
                  </div>
                  <h3 className="text-lg font-bold text-brand-charcoal">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-grey">{item.tagline}</p>
                  <Link
                    to={`/courses/${item.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-purple"
                  >
                    View Course
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}
