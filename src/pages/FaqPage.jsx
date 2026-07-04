import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import PageHeader, { PageShell } from "../components/PageHeader";
import SectionEyebrow from "../components/SectionEyebrow";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import { faqItems } from "../data/faq";
import { getFaqSchema } from "../data/schema";

function FaqItem({ item, open, onToggle }) {
  return (
    <article className="rounded-2xl border border-black/5 bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <h2 className="text-sm font-bold text-brand-charcoal sm:text-base">{item.question}</h2>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand-purple transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="border-t border-black/5 px-5 pb-4 pt-3 text-sm leading-relaxed text-brand-grey">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <PageShell>
      <SEO
        title="FAQs | AI & Coding Courses in Aligarh | Brandsway Skills"
        description="Frequently asked questions about AI, Python, web development & computer courses at Brandsway Skills in Aligarh — fees, batches, certificates & enrollment."
        path="/faq"
        jsonLd={getFaqSchema(faqItems)}
      />
      <PageHeader />

      <main className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionEyebrow>Help Center</SectionEyebrow>
          <h1 className="text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-grey">
            Everything you need to know about joining Brandsway Skills — Aligarh&apos;s institute
            for AI training, coding courses, and computer skills.
          </p>

          <div className="mt-10 space-y-3">
            {faqItems.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                open={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-brand-grey">
            Still have questions?{" "}
            <Link to="/#contact" className="font-semibold text-brand-purple hover:underline">
              Contact us
            </Link>{" "}
            or read our{" "}
            <Link to="/blog" className="font-semibold text-brand-purple hover:underline">
              blog
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
      <FloatingActionButton />
    </PageShell>
  );
}
