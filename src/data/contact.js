export const contactInfo = {
  phoneDisplay: "+91 73029 88039",
  phoneTel: "+917302988039",
  email: "brandswaying@gmail.com",
  whatsapp: "https://wa.me/917302988039",
  location: "Aligarh, Uttar Pradesh, India",
  website: "https://bw-skills.vercel.app",
};

export function getWhatsAppUrl(message) {
  return `${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getBundleEnrollWhatsAppUrl(bundle, { mode, price }) {
  const modeLabel = mode === "offline" ? "Offline" : "Online";
  const message = `Hi, I would like to enroll in the ${bundle.name} bundle (${bundle.description}) — ${modeLabel} batch at ₹${price.toLocaleString("en-IN")}. Please share the next steps.`;
  return getWhatsAppUrl(message);
}

export function getCourseEnrollWhatsAppUrl(course, { mode, price, earlyBird }) {
  const modeLabel = mode === "offline" ? "Offline" : "Online";
  const pricingLabel =
    mode === "offline"
      ? "Early-Bird Offline"
      : earlyBird
        ? "Early-Bird Online"
        : "Online";
  const message = `Hi, I would like to enroll in ${course.name} (${course.duration}) — ${modeLabel} batch, ${pricingLabel} at ₹${price.toLocaleString("en-IN")}. Please share the next steps.`;
  return getWhatsAppUrl(message);
}

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/thebrandsway/",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/Thebrandsway",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/the-brandsway/",
  },
];
