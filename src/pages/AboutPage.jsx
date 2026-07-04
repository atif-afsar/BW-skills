import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import PageHeader, { PageShell } from "../components/PageHeader";
import SectionEyebrow from "../components/SectionEyebrow";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import { contactInfo } from "../data/contact";
import { LOCAL_AREAS, WHO_CAN_JOIN } from "../data/site";
import { getOrganizationSchema } from "../data/schema";

export default function AboutPage() {
  return (
    <PageShell>
      <SEO
        title="About Brandsway Skills | Best Coding Institute in Aligarh"
        description="Learn about Brandsway Skills — Aligarh's agency-backed training institute for AI, coding, Python & web development. Small batches, real projects & career support."
        path="/about"
        jsonLd={getOrganizationSchema()}
      />
      <PageHeader />

      <main className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <SectionEyebrow>About Us</SectionEyebrow>
            <h1 className="text-balance text-3xl font-extrabold text-brand-charcoal sm:text-4xl lg:text-5xl">
              About <span className="text-brand-purple">Brandsway Skills</span> in Aligarh
            </h1>
            <p className="mt-5 text-base leading-relaxed text-brand-grey sm:text-lg">
              Brandsway Skills is the training arm of The BrandsWay — a PR and marketing agency
              based in Aligarh, Uttar Pradesh. We started this academy because we saw a gap: too
              many institutes teach theory, but employers and clients want people who can execute
              with modern AI tools, code, design, and digital skills.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-grey sm:text-lg">
              Our mission is simple — make Aligarh students and professionals job-ready through
              practical, project-based training in AI, coding, web development, and computer
              courses. Every program is designed around real workflows, not outdated textbooks.
            </p>
          </motion.div>

          <section className="mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-brand-charcoal">What Makes Us Different</h2>
            <ul className="space-y-4 text-sm leading-relaxed text-brand-grey sm:text-base">
              <li className="rounded-2xl bg-white p-5 shadow-sm">
                <strong className="text-brand-charcoal">Agency environment</strong> — learn inside
                a working brand and marketing team, not an isolated classroom.
              </li>
              <li className="rounded-2xl bg-white p-5 shadow-sm">
                <strong className="text-brand-charcoal">Project-first curriculum</strong> — every
                course ends with portfolio work you can show in interviews.
              </li>
              <li className="rounded-2xl bg-white p-5 shadow-sm">
                <strong className="text-brand-charcoal">Local + flexible</strong> — offline classes
                in Aligarh and online batches for students across Uttar Pradesh.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-extrabold text-brand-charcoal">Who We Train</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {WHO_CAN_JOIN.map((item) => (
                <article key={item.title} className="rounded-2xl bg-brand-bg p-5">
                  <h3 className="font-bold text-brand-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm text-brand-grey">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-extrabold text-brand-charcoal">Serving Aligarh &amp; Nearby Areas</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-grey sm:text-base">
              We welcome students from {LOCAL_AREAS.join(", ")}, and across Aligarh district.
              Contact us at{" "}
              <a href={`tel:${contactInfo.phoneTel}`} className="font-semibold text-brand-purple">
                {contactInfo.phoneDisplay}
              </a>{" "}
              or visit our enrollment form to get started.
            </p>
          </section>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-sm font-bold text-white"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-bold text-brand-charcoal"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActionButton />
    </PageShell>
  );
}
