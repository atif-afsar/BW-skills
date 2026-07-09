import { Clock } from "lucide-react";
import { BATCH_SCHEDULE } from "../data/courses";

export default function BatchTiming({ mode = "offline", className = "" }) {
  const label = mode === "offline" ? BATCH_SCHEDULE.offline : BATCH_SCHEDULE.online;

  return (
    <p className={`flex items-start gap-1.5 text-xs leading-relaxed text-brand-grey ${className}`}>
      <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-purple" strokeWidth={2.25} />
      <span>{label}</span>
    </p>
  );
}
