import { contactInfo } from "../data/contact";
import { courses, bundles } from "../data/courses";

export class FormActivationRequiredError extends Error {
  constructor() {
    super("Form activation required");
    this.name = "FormActivationRequiredError";
  }
}

function getProgramLabel(programValue) {
  if (programValue.startsWith("course:")) {
    const slug = programValue.replace("course:", "");
    return courses.find((course) => course.slug === slug)?.name ?? programValue;
  }

  if (programValue.startsWith("bundle:")) {
    const id = programValue.replace("bundle:", "");
    const bundle = bundles.find((item) => item.id === id);
    return bundle ? `${bundle.name} (${bundle.description})` : programValue;
  }

  return programValue;
}

function buildPayload(data, programLabel) {
  return {
    _subject: `New Enrollment Application — ${programLabel}`,
    _template: "table",
    _captcha: "false",
    Name: data.name,
    Email: data.email,
    Phone: data.phone,
    Program: programLabel,
    Mode: data.mode === "online" ? "Online" : "Offline",
    City: data.city.trim() || "—",
    Message: data.message.trim() || "—",
  };
}

async function submitViaFormSubmit(payload) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(contactInfo.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const result = await response.json().catch(() => null);

  if (!result) {
    throw new Error("Unable to send application. Please try again.");
  }

  const failed = result.success === false || result.success === "false";

  if (failed) {
    if (String(result.message || "").toLowerCase().includes("activation")) {
      throw new FormActivationRequiredError();
    }
    throw new Error(result.message || "Unable to send application. Please try again.");
  }

  return result;
}

export async function submitEnrollment(data) {
  const programLabel = getProgramLabel(data.program);
  const payload = buildPayload(data, programLabel);
  return submitViaFormSubmit(payload);
}

export async function requestFormActivationEmail() {
  return submitViaFormSubmit({
    _subject: "Activate BrandsWay Skill Academy Form",
    _template: "table",
    _captcha: "false",
    Name: "Form Activation",
    Email: contactInfo.email,
    Phone: contactInfo.phoneDisplay,
    Program: "Activation request",
    Mode: "—",
    City: "—",
    Message: "Please activate the enrollment form for BrandsWay Skill Academy.",
  });
}
