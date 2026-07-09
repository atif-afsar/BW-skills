import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { contactInfo } from "../data/contact";
import ProgramSelect from "./ProgramSelect";
import { submitEnrollment, requestFormActivationEmail, FormActivationRequiredError } from "../utils/submitEnrollment";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  program: "",
  mode: "online",
  city: "",
  message: "",
};

const inputClassName =
  "w-full rounded-2xl border border-black/10 bg-brand-bg/50 px-4 py-3.5 text-base text-brand-charcoal outline-none transition-colors placeholder:text-brand-grey/60 focus:border-brand-purple focus:bg-white sm:text-sm";

const labelClassName =
  "mb-2 block text-xs font-bold uppercase tracking-widest text-brand-charcoal";

export default function EnrollmentForm({ defaultProgram = "", defaultMode = "" }) {
  const [form, setForm] = useState({
    ...initialForm,
    program: defaultProgram,
    mode: defaultMode === "online" || defaultMode === "offline" ? defaultMode : initialForm.mode,
  });
  const [submitted, setSubmitted] = useState(false);
  const [programError, setProgramError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [needsActivation, setNeedsActivation] = useState(false);
  const [activationSent, setActivationSent] = useState(false);
  const [isSendingActivation, setIsSendingActivation] = useState(false);

  const updateField = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleProgramChange = (value) => {
    setForm((prev) => ({ ...prev, program: value }));
    setProgramError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    setNeedsActivation(false);
    setActivationSent(false);

    if (!form.program) {
      setProgramError("Please select a course or bundle");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitEnrollment(form);
      setSubmitted(true);
    } catch (error) {
      if (error instanceof FormActivationRequiredError) {
        setNeedsActivation(true);
        setActivationSent(true);
      } else {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again or contact us on WhatsApp."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendActivation = async () => {
    setIsSendingActivation(true);
    setSubmitError("");

    try {
      await requestFormActivationEmail();
      setNeedsActivation(true);
      setActivationSent(true);
    } catch (error) {
      if (error instanceof FormActivationRequiredError) {
        setNeedsActivation(true);
        setActivationSent(true);
      } else {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "Could not send activation email. Please try again."
        );
      }
    } finally {
      setIsSendingActivation(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative isolate rounded-3xl border border-black/5 bg-white p-6 text-center shadow-xl shadow-black/5 sm:p-10 md:p-12"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-purple-light">
          <CheckCircle2 className="h-8 w-8 text-brand-purple" strokeWidth={2} />
        </div>
        <h2 className="mt-6 text-2xl font-extrabold text-brand-charcoal sm:text-3xl">
          Application Sent!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-brand-grey">
          Your enrollment details have been emailed to our team at{" "}
          <a
            href={`mailto:${contactInfo.email}`}
            className="font-semibold text-brand-purple hover:underline"
          >
            {contactInfo.email}
          </a>
          . We&apos;ll get back to you within 24 hours.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-black/10 px-8 py-3 text-sm font-semibold text-brand-charcoal transition-colors hover:border-brand-purple hover:text-brand-purple"
          >
            Chat on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setProgramError("");
              setSubmitError("");
              setForm({
                ...initialForm,
                program: defaultProgram,
                mode:
                  defaultMode === "online" || defaultMode === "offline"
                    ? defaultMode
                    : initialForm.mode,
              });
            }}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand-purple px-8 py-3 text-sm font-bold text-white shadow-md shadow-brand-purple/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Submit Another Application
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={handleSubmit}
      className="relative isolate rounded-3xl border border-black/5 bg-white p-5 shadow-xl shadow-black/5 sm:p-8 md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClassName}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={updateField("name")}
            placeholder="Your full name"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={updateField("email")}
            placeholder="you@email.com"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClassName}>
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={updateField("phone")}
            placeholder="+91 98765 43210"
            className={inputClassName}
          />
        </div>

        <div className="relative z-20 sm:col-span-2">
          <label htmlFor="program" className={labelClassName}>
            Program *
          </label>
          <ProgramSelect
            value={form.program}
            onChange={handleProgramChange}
            error={programError}
          />
        </div>

        <div className="sm:col-span-2">
          <span className={labelClassName}>Learning Mode *</span>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "online", label: "Online" },
              { value: "offline", label: "Offline" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex min-h-[52px] cursor-pointer items-center justify-center rounded-2xl border px-4 py-3.5 text-sm font-semibold transition-colors ${
                  form.mode === option.value
                    ? "border-brand-purple bg-brand-purple-light text-brand-purple"
                    : "border-black/10 bg-brand-bg/50 text-brand-grey hover:border-brand-purple/30"
                }`}
              >
                <input
                  type="radio"
                  name="mode"
                  value={option.value}
                  checked={form.mode === option.value}
                  onChange={updateField("mode")}
                  className="sr-only"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="city" className={labelClassName}>
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            value={form.city}
            onChange={updateField("city")}
            placeholder="Your city"
            className={inputClassName}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClassName}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={updateField("message")}
            placeholder="Tell us about your goals or any questions you have..."
            className={`${inputClassName} resize-none`}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-black/5 pt-6">
        <p className="text-center text-xs leading-relaxed text-brand-grey sm:text-left">
          By submitting, your application will be sent to{" "}
          <span className="font-medium text-brand-charcoal">{contactInfo.email}</span>.
        </p>
        {needsActivation ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-950">
            <p className="font-bold">One-time form activation required</p>
            <p className="mt-2 leading-relaxed">
              {activationSent
                ? `We sent an activation link to ${contactInfo.email}. Open that inbox (check spam too), click Activate Form, then submit again here.`
                : `Activate the form once so submissions reach ${contactInfo.email}.`}
            </p>
            <button
              type="button"
              onClick={handleResendActivation}
              disabled={isSendingActivation}
              className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-950 transition-colors hover:bg-amber-100 disabled:opacity-60"
            >
              {isSendingActivation ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Resend activation email"
              )}
            </button>
          </div>
        ) : null}
        {submitError ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {submitError}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-brand-purple px-8 py-3 text-sm font-bold text-white shadow-md shadow-brand-purple/25 transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto sm:self-end"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />
              Sending...
            </>
          ) : (
            <>
              Submit Application
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}
