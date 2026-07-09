import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import { LOCAL_AREAS, WHO_CAN_JOIN } from "../data/site";
import { contactInfo } from "../data/contact";
import { scrollToSection } from "../utils/scroll";

export default function LocalSeoSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToCourses = () => {
    if (location.pathname === "/") {
      scrollToSection("courses");
      return;
    }
    navigate("/#courses");
  };

  const goToContact = () => {
    if (location.pathname === "/") {
      scrollToSection("contact");
      return;
    }
    navigate("/#contact");
  };
  return (
    <section
      id="about-aligarh"
      className="scroll-mt-24 border-y border-black/5 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="local-seo-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <SectionEyebrow>Aligarh, Uttar Pradesh</SectionEyebrow>
          <h1
            id="local-seo-heading"
            className="text-balance text-3xl font-extrabold text-brand-charcoal sm:text-4xl lg:text-5xl"
          >
            AI &amp; Coding Courses in Aligarh{" "}
            <span className="text-brand-purple">| Brandsway Skills</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-grey sm:text-lg">
            <strong>Brandsway Skills</strong> is Aligarh&apos;s practical training institute for{" "}
            <strong>AI courses</strong>, <strong>coding</strong>, <strong>Python</strong>,{" "}
            <strong>web development</strong>, and <strong>computer courses</strong>. Backed by The
            BrandsWay agency, we train students with real projects, small batches, and mentor support
            — online and offline across Uttar Pradesh.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="text-2xl font-extrabold text-brand-charcoal">
              Why Choose Brandsway Skills in Aligarh?
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brand-grey sm:text-base">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                <span>
                  <strong className="text-brand-charcoal">Agency-backed training</strong> — learn
                  from the team behind real PR &amp; marketing campaigns
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                <span>
                  <strong className="text-brand-charcoal">Small batches</strong> with personal
                  mentorship and feedback on every project
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                <span>
                  <strong className="text-brand-charcoal">Portfolio-first approach</strong> — build
                  work you can show employers and clients
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                <span>
                  <strong className="text-brand-charcoal">Flexible learning modes</strong> — online
                  live classes and offline classroom batches in Aligarh
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                <span>
                  <strong className="text-brand-charcoal">Career &amp; placement support</strong>{" "}
                  — guidance for internships, freelancing, and job readiness
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                <span>
                  <strong className="text-brand-charcoal">EMI &amp; early-bird offers</strong> —
                  quality training without upfront pressure
                </span>
              </li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-extrabold text-brand-charcoal">Who Can Join?</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {WHO_CAN_JOIN.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-brand-bg/60 p-4"
                >
                  <h3 className="text-sm font-bold text-brand-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-grey">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 rounded-3xl bg-brand-purple-light/50 p-6 sm:p-8"
        >
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-purple" />
            <div>
              <h2 className="text-xl font-extrabold text-brand-charcoal">
                Locations We Serve in Aligarh
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-grey sm:text-base">
                Students join Brandsway Skills from across Aligarh including{" "}
                {LOCAL_AREAS.slice(0, -1).join(", ")}, and {LOCAL_AREAS.at(-1)}. Whether you want{" "}
                <strong>AI training in Aligarh</strong>, a{" "}
                <strong>Python programming course</strong>, or the{" "}
                <strong>best coding institute in Aligarh</strong> — we are here to help you build
                industry-ready skills.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {LOCAL_AREAS.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-purple shadow-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm text-brand-grey sm:text-base">
            Explore all programs, read our blog for Aligarh career tips, or enroll today — we
            respond within 24 hours at {contactInfo.email}.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={goToCourses}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-purple px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand-purple/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goToContact}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-brand-charcoal transition-colors hover:border-brand-purple hover:text-brand-purple"
            >
              Enroll Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
