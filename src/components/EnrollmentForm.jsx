import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ArrowLeft, Loader2, Check } from "lucide-react";
import { courses } from "../data/courses";
import { contactInfo } from "../data/contact";
import { submitEnrollment, requestFormActivationEmail, FormActivationRequiredError } from "../utils/submitEnrollment";
import { calculateEarlyBirdPrice } from "../data/courses";

const initialForm = {
  program: "",
  name: "",
  phone: "",
  email: "",
  city: "",
  education: "",
  goals: [],
  experience: "",
  confirmed: false,
};

const inputClassName =
  "w-full rounded-2xl border border-black/10 bg-brand-bg/50 px-4 py-3.5 text-base text-brand-charcoal outline-none transition-colors placeholder:text-brand-grey/60 focus:border-brand-purple focus:bg-white sm:text-sm";

const labelClassName =
  "mb-2 block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal";

export default function EnrollmentForm({ defaultProgram = "" }) {
  // Try to default to a course slug if it starts with 'course:' or matches a course ID
  let defaultSlug = "";
  if (defaultProgram.startsWith("course:")) {
    defaultSlug = defaultProgram.replace("course:", "");
  } else if (defaultProgram) {
    const matched = courses.find((c) => c.slug === defaultProgram || c.id === defaultProgram);
    if (matched) defaultSlug = matched.slug;
  }

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    ...initialForm,
    program: defaultSlug,
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [needsActivation, setNeedsActivation] = useState(false);
  const [activationSent, setActivationSent] = useState(false);
  const [isSendingActivation, setIsSendingActivation] = useState(false);

  useEffect(() => {
    // Scroll to top of form when step changes
    const el = document.getElementById("enrollment-form-container");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [step]);

  const updateField = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const nextStep = () => setStep((p) => Math.min(p + 1, 4));
  const prevStep = () => setStep((p) => Math.max(p - 1, 1));

  const toggleGoal = (goal) => {
    setForm((prev) => {
      const goals = prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal];
      return { ...prev, goals };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.confirmed) return;

    setSubmitError("");
    setNeedsActivation(false);
    setActivationSent(false);
    setIsSubmitting(true);

    try {
      const programLabel = `course:${form.program}`;
      await submitEnrollment({ ...form, program: programLabel });
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-3xl border border-black/5 bg-white p-8 text-center shadow-xl sm:p-12"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-10 w-10 text-emerald-500" strokeWidth={2.5} />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-brand-charcoal sm:text-4xl">
          YOU'RE IN.
        </h2>
        <p className="mt-2 text-lg font-bold text-brand-purple">
          Your journey with Brandsway Skill Academy starts here.
        </p>

        <div className="mt-8 w-full max-w-sm rounded-2xl border border-black/5 bg-brand-bg/50 p-5 text-left text-sm font-semibold text-brand-charcoal">
          <div className="flex items-center gap-3 py-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Program Selected</span>
          </div>
          <div className="flex items-center gap-3 border-t border-black/5 py-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Registration Received</span>
          </div>
          <div className="flex items-center gap-3 border-t border-black/5 py-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Payment Status Pending</span>
          </div>
          <div className="flex items-center gap-3 border-t border-black/5 py-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Next Steps emailed</span>
          </div>
        </div>

        <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand-purple px-8 py-3 text-sm font-bold text-white shadow-md shadow-brand-purple/25 transition-transform hover:scale-[1.02]"
          >
            JOIN WHATSAPP / GET COURSE DETAILS
          </a>
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-black/10 px-8 py-3 text-sm font-bold text-brand-charcoal hover:border-brand-purple hover:text-brand-purple"
          >
            BACK TO ACADEMY
          </button>
        </div>
      </motion.div>
    );
  }

  const selectedCourse = courses.find((c) => c.slug === form.program);

  return (
    <div id="enrollment-form-container" className="relative isolate rounded-3xl border border-black/5 bg-white shadow-xl shadow-black/5 flex flex-col overflow-hidden">
      {/* Progress Bar */}
      <div className="flex items-center justify-between border-b border-black/5 bg-brand-bg/30 px-6 py-4">
        {[
          { num: 1, label: "Program" },
          { num: 2, label: "Details" },
          { num: 3, label: "Goals" },
          { num: 4, label: "Confirm" },
        ].map((s, i) => (
          <div key={s.num} className="flex items-center gap-2">
            <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${step >= s.num ? 'bg-brand-purple text-white' : 'bg-black/5 text-brand-grey'}`}>
              0{s.num}
            </span>
            <span className={`hidden text-[10px] font-bold uppercase tracking-wider sm:block ${step >= s.num ? 'text-brand-charcoal' : 'text-brand-grey'}`}>
              {s.label}
            </span>
            {i < 3 && <span className="mx-1 h-[1px] w-4 bg-black/10 sm:w-8" />}
          </div>
        ))}
      </div>

      <div className="p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-extrabold text-brand-charcoal uppercase tracking-wider sm:text-3xl">
                CHOOSE YOUR PATH
              </h3>
              <p className="mt-2 text-sm text-brand-grey">Select the program you wish to enroll in.</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {courses.map((course) => {
                  const isSelected = form.program === course.slug;
                  return (
                    <button
                      key={course.id}
                      onClick={() => setForm((prev) => ({ ...prev, program: course.slug }))}
                      className={`relative flex flex-col items-start rounded-2xl border p-5 text-left transition-all ${
                        isSelected
                          ? "border-brand-purple bg-brand-purple-light/20 shadow-md ring-1 ring-brand-purple"
                          : "border-black/10 bg-white hover:border-brand-purple/40 hover:bg-brand-bg/50"
                      }`}
                    >
                      <span className="text-[10px] font-extrabold text-brand-purple uppercase tracking-[0.15em]">
                        {course.pillar}
                      </span>
                      <span className="mt-1 block text-lg font-extrabold text-brand-charcoal">
                        {course.name}
                      </span>
                      <span className="mt-2 flex items-center gap-3 text-xs font-semibold text-brand-grey">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5" /> {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5" /> {course.lectures}+ Lectures
                        </span>
                      </span>
                      <p className="mt-3 text-xs leading-relaxed text-brand-grey/80 line-clamp-2">
                        {course.overview}
                      </p>
                      
                      {isSelected && (
                        <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-brand-purple text-white shadow-sm">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  onClick={nextStep}
                  disabled={!form.program}
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-brand-purple px-8 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-purple/20 transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-extrabold text-brand-charcoal uppercase tracking-wider sm:text-3xl">
                LET'S GET TO KNOW YOU
              </h3>
              
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelClassName}>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={updateField("name")}
                    placeholder="John Doe"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className={labelClassName}>WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={updateField("phone")}
                    placeholder="+91 98765 43210"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className={labelClassName}>Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={updateField("email")}
                    placeholder="john@example.com"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className={labelClassName}>City *</label>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={updateField("city")}
                    placeholder="E.g. Aligarh, Delhi"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className={labelClassName}>Current Education / Profession *</label>
                  <input
                    type="text"
                    required
                    value={form.education}
                    onChange={updateField("education")}
                    placeholder="E.g. B.Tech Student, Freelancer"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <button
                  onClick={prevStep}
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full px-6 text-sm font-bold uppercase tracking-wider text-brand-grey hover:text-brand-charcoal"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!form.name || !form.phone || !form.email || !form.city || !form.education}
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-brand-purple px-8 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-purple/20 transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-extrabold text-brand-charcoal uppercase tracking-wider sm:text-3xl">
                WHAT ARE YOU BUILDING TOWARDS?
              </h3>
              <p className="mt-2 text-sm text-brand-grey">Select all that apply.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Career Growth", "Learn AI", "Data & Analytics", "Web Development",
                  "Freelancing", "Build Projects", "Start a New Career", "Build My Own Product"
                ].map((goal) => {
                  const isSelected = form.goals.includes(goal);
                  return (
                    <button
                      key={goal}
                      onClick={() => toggleGoal(goal)}
                      className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                        isSelected
                          ? "border-brand-purple bg-brand-purple text-white shadow-md shadow-brand-purple/20"
                          : "border-black/10 bg-white text-brand-grey hover:border-brand-purple/40 hover:text-brand-charcoal"
                      }`}
                    >
                      {goal}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal">
                  What is your current experience level?
                </label>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {["Beginner", "Basic", "Intermediate", "Advanced"].map((level) => {
                    const isSelected = form.experience === level;
                    return (
                      <button
                        key={level}
                        onClick={() => setForm((prev) => ({ ...prev, experience: level }))}
                        className={`rounded-xl border py-3 text-center text-xs font-bold uppercase tracking-wider transition-all ${
                          isSelected
                            ? "border-brand-purple bg-brand-purple-light/20 text-brand-purple ring-1 ring-brand-purple"
                            : "border-black/10 bg-white text-brand-grey hover:border-brand-purple/40 hover:text-brand-charcoal"
                        }`}
                      >
                        {level}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <button
                  onClick={prevStep}
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full px-6 text-sm font-bold uppercase tracking-wider text-brand-grey hover:text-brand-charcoal"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={form.goals.length === 0 || !form.experience}
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-brand-purple px-8 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-purple/20 transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-extrabold text-brand-charcoal uppercase tracking-wider sm:text-3xl">
                CONFIRM YOUR APPLICATION
              </h3>
              
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/5 bg-brand-bg/40 p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-grey">
                    YOUR PROGRAM
                  </span>
                  <p className="mt-2 text-lg font-extrabold text-brand-charcoal">{selectedCourse?.name}</p>
                  <div className="mt-3 flex flex-col gap-1.5 text-xs font-semibold text-brand-charcoal/80">
                    <span>Duration: {selectedCourse?.duration}</span>
                    <span>Live Sessions: {selectedCourse?.lectures}+</span>
                    <span>Learning: Practical + Project Based</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/5 bg-brand-bg/40 p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-grey">
                    YOUR DETAILS
                  </span>
                  <div className="mt-2 flex flex-col gap-1.5 text-sm font-bold text-brand-charcoal">
                    <span>{form.name}</span>
                    <span>{form.phone}</span>
                    <span>{form.email}</span>
                    <span>{form.city}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border-2 border-brand-purple/10 bg-brand-purple-light/10 p-6 text-center">
                <div className="grid grid-cols-2 divide-x divide-black/10">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey">REGULAR VALUE</span>
                    <span className="mt-1 block text-lg font-bold text-brand-charcoal line-through">
                      ₹{selectedCourse?.originalPrice?.toLocaleString("en-IN") || selectedCourse?.offline?.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-purple">LAUNCH OFFER</span>
                    <span className="mt-1 block text-2xl font-extrabold text-brand-purple">
                      ₹{selectedCourse?.currentPrice?.toLocaleString("en-IN") || calculateEarlyBirdPrice(selectedCourse?.offline).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
                <div className="mt-4 rounded-full bg-brand-purple/10 py-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-purple">
                    LIMITED-TIME OFFER · 2 DAYS ONLY
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8">
                <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-transparent p-2 hover:bg-black/5">
                  <div className="flex h-5 items-center">
                    <input
                      type="checkbox"
                      required
                      checked={form.confirmed}
                      onChange={(e) => setForm((p) => ({ ...p, confirmed: e.target.checked }))}
                      className="h-4 w-4 rounded border-gray-300 text-brand-purple focus:ring-brand-purple"
                    />
                  </div>
                  <span className="text-xs font-medium text-brand-charcoal">
                    I confirm that the information provided is correct and I wish to proceed with enrollment.
                  </span>
                </label>

                {needsActivation && (
                  <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
                    <p className="font-bold">One-time form activation required</p>
                    <p className="mt-1">
                      {activationSent
                        ? `We sent an activation link to ${contactInfo.email}. Click it, then submit again here.`
                        : `Activate the form once so submissions reach ${contactInfo.email}.`}
                    </p>
                    <button
                      type="button"
                      onClick={handleResendActivation}
                      disabled={isSendingActivation}
                      className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-950 hover:bg-amber-100 disabled:opacity-60"
                    >
                      {isSendingActivation ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : "Resend activation email"}
                    </button>
                  </div>
                )}

                {submitError && (
                  <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                    {submitError}
                  </p>
                )}

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-6 text-sm font-bold uppercase tracking-wider text-brand-grey hover:text-brand-charcoal order-2 sm:order-1"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !form.confirmed}
                    className="inline-flex w-full min-h-[56px] items-center justify-center gap-2 rounded-full bg-brand-charcoal px-8 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all hover:bg-brand-purple active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 sm:w-auto order-1 sm:order-2"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Processing...</>
                    ) : (
                      <><CheckCircle2 className="h-5 w-5" /> CONTINUE TO ENROLLMENT</>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
