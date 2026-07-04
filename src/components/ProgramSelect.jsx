import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, X } from "lucide-react";
import { courses, bundles } from "../data/courses";

const courseOptions = courses.map((course) => ({
  value: `course:${course.slug}`,
  label: course.name,
}));

const bundleOptions = bundles.map((bundle) => ({
  value: `bundle:${bundle.id}`,
  label: bundle.name,
  description: bundle.description,
}));

export const programOptions = [...courseOptions, ...bundleOptions];

export default function ProgramSelect({ value, onChange, error }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const selected = programOptions.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        id="program"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between gap-3 rounded-2xl border bg-brand-bg/50 px-4 py-3.5 text-left text-sm transition-colors ${
          error
            ? "border-red-400 focus:border-red-400"
            : open
              ? "border-brand-purple bg-white"
              : "border-black/10 hover:border-brand-purple/30 focus:border-brand-purple focus:bg-white"
        }`}
      >
        <span className={selected ? "font-medium text-brand-charcoal" : "text-brand-grey/60"}>
          {selected ? selected.label : "Select a course or bundle"}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-brand-grey transition-transform duration-200 ${
            open ? "rotate-180 text-brand-purple" : ""
          }`}
          strokeWidth={2.5}
        />
      </button>

      {error ? (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      ) : null}

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-brand-charcoal/40 backdrop-blur-[2px] sm:hidden"
              aria-label="Close program list"
              onClick={() => setOpen(false)}
            />

            <motion.div
              role="listbox"
              aria-label="Select a program"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 bottom-0 z-[110] flex max-h-[min(75vh,520px)] flex-col overflow-hidden rounded-t-3xl border border-black/5 bg-white shadow-2xl sm:absolute sm:inset-x-0 sm:bottom-auto sm:top-[calc(100%+0.5rem)] sm:max-h-72 sm:rounded-2xl"
            >
              <div className="flex shrink-0 items-center justify-between border-b border-black/5 px-5 py-4 sm:hidden">
                <p className="text-sm font-bold text-brand-charcoal">Choose a program</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-bg text-brand-grey"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </div>

              <div className="dropdown-scroll flex-1 overflow-y-auto overscroll-contain p-2 sm:p-1.5">
                <ProgramGroup
                  title="Individual Courses"
                  options={courseOptions}
                  selected={value}
                  onSelect={handleSelect}
                />
                <ProgramGroup
                  title="Bundles"
                  options={bundleOptions}
                  selected={value}
                  onSelect={handleSelect}
                  showDescription
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProgramGroup({ title, options, selected, onSelect, showDescription = false }) {
  return (
    <div className="mb-1 last:mb-0">
      <p className="sticky top-0 z-10 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-purple sm:px-2.5">
        {title}
      </p>
      <ul className="space-y-0.5">
        {options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => onSelect(option.value)}
                className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors sm:px-2.5 sm:py-2.5 ${
                  isSelected
                    ? "bg-brand-purple-light text-brand-purple"
                    : "text-brand-charcoal hover:bg-brand-bg"
                }`}
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium leading-snug">{option.label}</span>
                  {showDescription && option.description ? (
                    <span className="mt-0.5 block text-xs leading-relaxed text-brand-grey">
                      {option.description}
                    </span>
                  ) : null}
                </span>
                {isSelected ? (
                  <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
