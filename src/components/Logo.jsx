const logoSrc = "/brandsway-logo.png";

export default function Logo({
  className = "",
  subtitle = "Skill Academy",
  variant = "text",
  imageClassName = "h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28",
}) {
  if (variant === "image") {
    return (
      <div className={className}>
        <img
          src={logoSrc}
          alt="The BrandsWay PR and Marketing"
          className={imageClassName}
          width={112}
          height={112}
          loading="lazy"
          decoding="async"
        />
        {subtitle ? (
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-grey sm:text-xs">
            {subtitle}
          </p>
        ) : null}
      </div>
    );
  }

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
