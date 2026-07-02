import { motion } from "framer-motion";
import SectionEyebrow from "./SectionEyebrow";
import { getIcon } from "../utils/icons";

const features = [
  {
    icon: "Briefcase",
    title: "Real Client Projects",
    description:
      "Work on briefs inspired by actual BrandsWay campaigns — not hypothetical classroom exercises.",
  },
  {
    icon: "Users",
    title: "Small Batch Sizes",
    description:
      "Limited seats per cohort so every student gets personal mentorship and feedback.",
  },
  {
    icon: "Award",
    title: "Live Project Certificate",
    description:
      "Graduate with a portfolio piece and certificate backed by a working PR & marketing agency.",
  },
  {
    icon: "CreditCard",
    title: "Flexible EMI Payment",
    description:
      "Spread your investment with easy EMI options — quality education without upfront pressure.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyUsSection() {
  return (
    <section id="why-us" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionEyebrow>Why Choose Us</SectionEyebrow>
          <h2 className="text-balance text-3xl font-extrabold text-brand-charcoal sm:text-4xl md:text-5xl">
            Built On <span className="text-brand-purple">Real Experience</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-brand-grey sm:text-lg">
            We don&apos;t just teach theory — we train you the way our agency team works every day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-5 sm:grid-cols-2"
        >
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl bg-white p-6 shadow-lg shadow-black/5"
            >
              <span
                className="pointer-events-none absolute right-4 top-3 text-5xl font-extrabold text-brand-grey/10"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple-light text-brand-purple">
                {getIcon(feature.icon, { className: "h-5 w-5", strokeWidth: 2 })}
              </div>

              <h3 className="text-lg font-bold text-brand-charcoal">{feature.title}</h3>
              <div className="mt-2 h-1 w-8 rounded-full bg-brand-purple" />
              <p className="mt-3 text-sm leading-relaxed text-brand-grey sm:text-base">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
