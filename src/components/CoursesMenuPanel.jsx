import { getIcon } from "../utils/icons";
import { courses } from "../data/courses";
import { ArrowUpRight } from "lucide-react";

export function CoursesMenuList({ onSelect, variant = "dropdown" }) {
  const isCompact = variant === "mobile";

  return (
    <ul className={`divide-y divide-black/[0.04] ${isCompact ? "py-1" : "py-1.5"}`}>
      {courses.map((course, index) => (
        <li key={course.id}>
          <button
            type="button"
            onClick={() => onSelect(course)}
            className={`group flex w-full items-start gap-3 text-left transition-colors hover:bg-brand-purple-light/50 ${
              isCompact ? "px-3 py-3" : "px-4 py-3"
            }`}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-purple-light text-brand-purple transition-colors group-hover:bg-brand-purple group-hover:text-white">
              {getIcon(course.icon, { className: "h-4 w-4", strokeWidth: 2 })}
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-start justify-between gap-2">
                <span
                  className={`font-semibold leading-snug text-brand-charcoal normal-case ${
                    isCompact ? "text-sm" : "text-[13px]"
                  }`}
                >
                  {course.name}
                </span>
                <span className="shrink-0 text-[10px] font-bold tracking-wider text-brand-purple/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
              <span className="mt-1 inline-flex rounded-full bg-brand-bg px-2 py-0.5 text-[10px] font-semibold tracking-wider text-brand-grey uppercase">
                {course.duration}
              </span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export function CoursesMenuFooter({ onSelect, compact = false }) {
  return (
    <div className={`border-t border-black/5 bg-white ${compact ? "p-2" : "p-2.5"}`}>
      <button
        type="button"
        onClick={() => onSelect(null)}
        className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-purple px-4 py-2.5 text-xs font-semibold tracking-widest text-white uppercase transition-opacity hover:opacity-90"
      >
        View All Courses
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
      </button>
    </div>
  );
}

export function CoursesMenuHeader({ compact = false }) {
  return (
    <div
      className={`shrink-0 border-b border-black/5 bg-white ${
        compact ? "px-3 py-2.5" : "px-4 py-3"
      }`}
    >
      <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-purple uppercase">
        Our Programs
      </p>
      <p className="mt-0.5 text-xs font-normal tracking-normal text-brand-grey normal-case">
        {courses.length} industry-ready skill courses
      </p>
    </div>
  );
}
