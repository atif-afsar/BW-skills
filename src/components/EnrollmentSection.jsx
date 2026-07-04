import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import EnrollmentForm from "./EnrollmentForm";
import { EARLY_BIRD_DISCOUNT_PERCENT } from "../data/courses";
import { contactInfo } from "../data/contact";

export default function EnrollmentSection({ defaultProgram = "" }) {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <SectionEyebrow>Enrollment</SectionEyebrow>
            <h2 className="text-balance text-3xl font-extrabold text-brand-charcoal sm:text-4xl lg:text-5xl">
              Apply to{" "}
              <span className="text-brand-purple">BrandsWay</span> Skill Academy
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-brand-grey sm:text-lg">
              Fill in your details to enroll. Lock in {EARLY_BIRD_DISCOUNT_PERCENT}%
              early-bird savings — our team will confirm your seat within 24 hours.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-sm text-brand-grey">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                <span>{contactInfo.location}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-grey">
                <Phone className="h-4 w-4 shrink-0 text-brand-purple" />
                <a
                  href={`tel:${contactInfo.phoneTel}`}
                  className="transition-colors hover:text-brand-purple"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-grey">
                <Mail className="h-4 w-4 shrink-0 text-brand-purple" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all transition-colors hover:text-brand-purple"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>

            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full border border-brand-purple/20 bg-brand-purple-light px-5 py-3 text-sm font-bold text-brand-purple transition-colors hover:bg-brand-purple hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <EnrollmentForm defaultProgram={defaultProgram} />
        </div>
      </div>
    </section>
  );
}
