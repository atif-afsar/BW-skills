import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  ChevronDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Logo from "../components/Logo";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import SectionEyebrow from "../components/SectionEyebrow";
import AnimatedPrice from "../components/AnimatedPrice";
import Course3DVisual from "../components/Course3DVisual";
import {
  courses,
  BATCH_SCHEDULE,
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
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const offlineOriginal = course.originalPrice || course.offline;
  const offlineOffer = course.currentPrice || calculateEarlyBirdPrice(course.offline);

  const relatedCourses = courses.filter((item) => item.slug !== course.slug);
  const seo = getCourseSeo(course.slug);
  const careerOpportunities = seo.careerOpportunities || course.outcomes;

  const courseFaqs = [
    {
      q: `What is the duration and weekly schedule for ${course.name}?`,
      a: `This program runs for ${course.duration} across ${course.lectures} interactive lectures (${course.lectureDuration || "1-1.5 hours"} per session). Batches run daily at 11:00 AM and 4:00 PM for both online live classes and offline classroom sessions in Aligarh.`,
    },
    {
      q: "Do I need any prior coding or technical background to join?",
      a: "No. All our flagship courses are structured from foundational beginner principles up to real execution. Mentors guide you step-by-step through every assignment.",
    },
    {
      q: "Will I get a certificate upon completion?",
      a: "Yes. Students who successfully complete the hands-on projects and course milestones receive a verified certificate of completion from BrandsWay Skill Academy.",
    },
    {
      q: "How do I enroll with the launch offer fee?",
      a: `You can enroll directly through our website form, or connect with our admissions desk on WhatsApp. The launch fee of ₹${course.currentPrice.toLocaleString("en-IN")} is applied automatically.`,
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <Meta course={course} />

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link to="/" className="min-h-[44px] flex items-center">
            <Logo />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/courses"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-charcoal transition-colors hover:border-brand-purple hover:text-brand-purple"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Courses
            </Link>
            <Link
              to={`/apply?course=${course.slug}`}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-brand-purple px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-brand-purple/20 hover:bg-[#4f0fc4]"
            >
              Enroll Now
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-b from-white via-brand-bg/60 to-white px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div initial="hidden" animate="visible" variants={itemVariants}>
              <div className="flex items-center gap-2.5">
                <span className="rounded-full bg-brand-purple-light px-3 py-1 text-[11px] font-extrabold tracking-widest text-brand-purple uppercase">
                  {course.pillar || "FLAGSHIP"}
                </span>
                <span className="text-xs font-bold tracking-wider text-brand-grey uppercase">
                  {course.category}
                </span>
              </div>

              <h1 className="mt-4 text-balance text-3xl font-extrabold leading-tight text-brand-charcoal sm:text-4xl lg:text-5xl">
                {getCourseSeoH1(course)}
              </h1>

              <p className="mt-3 text-lg font-bold text-brand-purple">
                {course.tagline}
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-grey sm:text-lg">
                {seo.localIntro || course.overview}
              </p>

              {/* Course Facts Badges */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-sm">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey">
                    Duration
                  </span>
                  <span className="mt-1 block text-sm font-extrabold text-brand-charcoal">
                    {course.duration}
                  </span>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-sm">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey">
                    Lectures
                  </span>
                  <span className="mt-1 block text-sm font-extrabold text-brand-charcoal">
                    {course.lectures} Sessions
                  </span>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-sm">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey">
                    Session Length
                  </span>
                  <span className="mt-1 block text-sm font-extrabold text-brand-charcoal">
                    {course.lectureDuration || "1–1.5 Hrs"}
                  </span>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-sm">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey">
                    Mode
                  </span>
                  <span className="mt-1 block text-sm font-extrabold text-brand-charcoal">
                    Online / Offline
                  </span>
                </div>
              </div>

              {/* Skill Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {course.skills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-purple/15 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-charcoal shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 3D Visual & Pricing Card */}
            <motion.aside
              id="pricing-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-2xl shadow-black/10"
            >
              {/* Interactive 3D Visual Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#0E1320] px-4 py-2.5 text-white">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-slate-300">
                    Live Curriculum Sandbox
                  </span>
                </div>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300 uppercase">
                  {course.pillar || "FLAGSHIP"}
                </span>
              </div>
              <div className="relative border-b border-black/5 bg-[#0A0D18]">
                <Course3DVisual course={course} className="h-56 w-full" isInteractive={true} />
              </div>

              <div className="p-6 sm:p-7">
                {/* Pricing Block */}
                <div className="rounded-2xl bg-brand-bg p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-grey">
                      Special Launch Price
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-purple px-2 py-0.5 text-[10px] font-bold text-white">
                      <Sparkles className="h-3 w-3" />
                      50% OFF
                    </span>
                  </div>

                  <div className="mt-2 flex items-baseline gap-3">
                    <AnimatedPrice
                      value={offlineOffer}
                      className="text-3xl font-extrabold text-brand-charcoal sm:text-4xl"
                    />
                    <span className="text-base text-brand-grey line-through sm:text-lg">
                      ₹{offlineOriginal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <p className="mt-2 text-xs font-semibold text-brand-purple">
                    {course.offerBadge || "Special Launch Fee"} · Valid for limited seats
                  </p>

                  <div className="mt-3 border-t border-black/5 pt-2.5 text-[11px] text-brand-grey">
                    <span>{BATCH_SCHEDULE.offline}</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-5 grid gap-3">
                  <Link
                    to={`/apply?course=${course.slug}`}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-purple/20 hover:bg-[#4f0fc4]"
                  >
                    Enroll In Program
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={`https://wa.me/917302988039?text=${encodeURIComponent(
                      `Hi, I would like more details about the ${course.name} course at BrandsWay Skill Academy.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-charcoal transition-colors hover:border-brand-purple hover:text-brand-purple"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* Course Statistics Highlights */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Curriculum",
                value: `${course.modules?.length || 6} Deep Modules`,
                desc: "Progressive roadmap from basics to real workflows.",
              },
              {
                title: "Tools & Tech",
                value: `${course.tools.length} Industry Tools`,
                desc: "Platforms and software used by modern digital teams.",
              },
              {
                title: "Portfolio Output",
                value: `${course.projects.length} Real Projects`,
                desc: "Proof-of-work assets you can show clients and recruiters.",
              },
              {
                title: "Certification",
                value: "Verified Credential",
                desc: "Certificate on course completion backed by BrandsWay.",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-lg shadow-black/5"
              >
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-purple">
                  {item.title}
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-brand-charcoal">
                  {item.value}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-grey">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Detailed Modules & Roadmap */}
        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Detailed Syllabus */}
            <div>
              <SectionEyebrow>Comprehensive Syllabus</SectionEyebrow>
              <h2 className="text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
                What You Will <span className="text-brand-purple">Learn</span>
              </h2>
              <p className="mt-3 text-sm text-brand-grey sm:text-base">
                Each module is packed with practical exercises, tool walk-throughs, and real deliverables.
              </p>

              <div className="mt-8 space-y-4">
                {course.modules && course.modules.length > 0 ? (
                  course.modules.map((mod, index) => (
                    <div
                      key={mod.number || index}
                      className="rounded-3xl border border-black/5 bg-white p-6 shadow-md shadow-black/5 transition-all hover:border-brand-purple/20"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-purple-light text-xs font-extrabold text-brand-purple">
                          {mod.number}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-lg font-extrabold text-brand-charcoal">
                            {mod.title}
                          </h3>
                          {mod.description && (
                            <p className="mt-1 text-xs text-brand-grey">{mod.description}</p>
                          )}
                          <ul className="mt-3 space-y-1.5">
                            {mod.topics.map((topic) => (
                              <li
                                key={topic}
                                className="flex items-center gap-2 text-xs text-brand-charcoal/90"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-purple shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  course.syllabus.map((s, idx) => (
                    <div
                      key={s}
                      className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-purple-light text-xs font-bold text-brand-purple">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm font-semibold text-brand-charcoal">{s}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right: Tools & Practical Projects */}
            <div className="space-y-8">
              {/* Practical Projects */}
              <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-xl shadow-black/5 sm:p-8">
                <SectionEyebrow>Hands-On Deliverables</SectionEyebrow>
                <h3 className="text-xl font-extrabold text-brand-charcoal sm:text-2xl">
                  Projects You Will Build
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-grey sm:text-sm">
                  Graduate with real, deployable portfolio work to prove your capabilities to
                  employers and clients.
                </p>

                <div className="mt-5 space-y-2.5">
                  {course.projects.map((proj) => (
                    <div
                      key={proj}
                      className="flex items-center gap-3 rounded-2xl border border-black/5 bg-brand-bg/60 p-3.5 text-xs font-bold text-brand-charcoal"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-purple" />
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Stack */}
              <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-xl shadow-black/5 sm:p-8">
                <SectionEyebrow>Stack</SectionEyebrow>
                <h3 className="text-xl font-extrabold text-brand-charcoal">
                  Tools &amp; Technologies
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-brand-purple-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-purple"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-xl shadow-black/5 sm:p-8">
                <SectionEyebrow>Outcomes</SectionEyebrow>
                <h3 className="text-xl font-extrabold text-brand-charcoal">
                  Potential Career Directions
                </h3>
                <p className="mt-2 text-xs text-brand-grey">
                  Possible skill applications for internships, freelancing, and entry-level roles:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {(course.careerDirections || careerOpportunities).map((dir) => (
                    <li key={dir} className="flex items-center gap-2.5 text-xs font-semibold text-brand-charcoal">
                      <Briefcase className="h-4 w-4 shrink-0 text-brand-purple" />
                      <span>{dir}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-black/5 bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2 className="text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
                Frequently Asked <span className="text-brand-purple">Questions</span>
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {courseFaqs.map((faq, i) => (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-black/5 bg-brand-bg/40 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-brand-charcoal sm:text-base"
                    aria-expanded={openFaqIndex === i}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-brand-purple transition-transform duration-200 ${
                        openFaqIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 text-xs leading-relaxed text-brand-grey sm:text-sm"
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Flagship Programs */}
        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <SectionEyebrow>Explore The Ecosystem</SectionEyebrow>
              <h2 className="text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
                Other Flagship <span className="text-brand-purple">Programs</span>
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {relatedCourses.map((item) => (
                <article
                  key={item.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-xl shadow-black/5 transition-all hover:border-brand-purple/20"
                >
                  <div>
                    <span className="rounded-full bg-brand-purple-light px-3 py-1 text-[10px] font-bold text-brand-purple uppercase">
                      {item.pillar}
                    </span>
                    <h3 className="mt-3 text-xl font-extrabold text-brand-charcoal">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-brand-purple">
                      {item.tagline}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-brand-grey line-clamp-2">
                      {item.overview}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4">
                    <span className="text-sm font-extrabold text-brand-charcoal">
                      ₹{item.currentPrice.toLocaleString("en-IN")}
                    </span>
                    <Link
                      to={`/courses/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-purple hover:underline"
                    >
                      View Program
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
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
