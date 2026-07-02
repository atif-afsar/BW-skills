export default function SocialIcon({ name, className = "h-5 w-5" }) {
  if (name === "instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 8.5V7.2c0-.7.1-1.1.9-1.1H16V3.8h-2.4c-2.3 0-3.4 1.2-3.4 3.5V8.5H8v3h2.2v8.7h3.3V11.5H16l.5-3z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 9.5h3v10h-3v-10Zm1.5-4.8c1 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6ZM11 9.5h2.8v1.4h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v5.5h-3v-4.9c0-1.2 0-2.7-1.7-2.7-1.7 0-2 1.3-2 2.7v4.9h-3v-10Z" />
      </svg>
    );
  }

  return null;
}
