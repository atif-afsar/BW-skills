import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function PageHeader({ backTo = "/", backLabel = "Back Home", action = null }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="min-h-[44px]">
          <Logo />
        </Link>
        <div className="flex items-center gap-3">
          {action}
          <Link
            to={backTo}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-brand-charcoal transition-colors hover:border-brand-purple hover:text-brand-purple"
          >
            {backLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function PageShell({ children }) {
  return <div className="min-h-screen bg-brand-bg">{children}</div>;
}
