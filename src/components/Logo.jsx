export default function Logo({ className = "", subtitle = "Skill Academy" }) {
  return (
    <div className={className}>
      <div className="text-lg font-extrabold leading-tight sm:text-xl">
        <span className="text-brand-charcoal">The Brands</span>
        <span className="text-brand-purple">Way</span>
      </div>
      <p className="text-[10px] font-medium tracking-wide text-brand-grey sm:text-xs">
        {subtitle}
      </p>
    </div>
  );
}
