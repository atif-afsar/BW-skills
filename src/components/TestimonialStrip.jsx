import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The Performance Marketing course gave me real campaign experience. I landed my first freelance client within a month.",
    name: "Priya S.",
    role: "Marketing Graduate",
  },
  {
    quote:
      "Small batches made all the difference — mentors actually reviewed my portfolio and helped me refine every project.",
    name: "Rahul M.",
    role: "Career Switcher",
  },
  {
    quote:
      "Learning from an agency team felt authentic. The AI Tools course was practical, not just theory slides.",
    name: "Ananya K.",
    role: "Content Creator",
  },
];

function TestimonialCard({ testimonial, className = "" }) {
  return (
    <article
      className={`flex h-full w-[min(85vw,320px)] shrink-0 flex-col rounded-2xl border border-black/[0.04] bg-white p-5 shadow-lg shadow-black/[0.04] sm:w-[320px] sm:p-6 ${className}`}
    >
      <span className="text-2xl leading-none font-bold text-brand-purple/30">&ldquo;</span>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-brand-grey sm:text-base">
        {testimonial.quote}
      </p>
      <div className="mt-5 border-t border-brand-bg pt-4">
        <p className="text-sm font-bold text-brand-charcoal">{testimonial.name}</p>
        <p className="mt-0.5 text-xs text-brand-grey">{testimonial.role}</p>
      </div>
    </article>
  );
}

function MarqueeTrack({ items }) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand-bg to-transparent sm:w-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-bg to-transparent sm:w-20"
        aria-hidden="true"
      />
      <div className="marquee-track flex w-max gap-4 sm:gap-5">
        {loop.map((t, i) => (
          <div key={`${t.name}-${i}`} aria-hidden={i >= items.length || undefined}>
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TestimonialStrip() {
  return (
    <section className="overflow-hidden py-14 sm:py-20" aria-label="Student testimonials">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-6xl px-4 text-center sm:mb-12 sm:px-6 lg:px-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">
          — Student Stories
        </p>
        <h2 className="mt-3 text-2xl font-extrabold text-brand-charcoal sm:text-3xl">
          Trusted by <span className="text-brand-purple">Learners</span>
        </h2>
      </motion.div>

      {/* Mobile: seamless marquee */}
      <div className="md:hidden">
        <MarqueeTrack items={testimonials} />
      </div>

      {/* Desktop: clean 3-column grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mx-auto hidden max-w-6xl grid-cols-3 gap-6 px-6 md:grid lg:gap-8 lg:px-8"
      >
        {testimonials.map((t, i) => (
          <motion.div key={t.name} custom={i} variants={cardVariants} className="h-full">
            <TestimonialCard testimonial={t} className="w-full" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
