import { contactInfo, socialLinks } from "./contact";
import {
  courses,
  calculateOnlinePrice,
  calculateEarlyBirdPrice,
} from "./courses";
import { getCourseSeo } from "./courseSeo";
import { SITE_URL, BRAND_FULL } from "./site";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: "Brandsway Skills",
    alternateName: BRAND_FULL,
    url: SITE_URL,
    logo: `${SITE_URL}/brandsway-logo.png`,
    description:
      "Brandsway Skills is a training institute in Aligarh, Uttar Pradesh offering AI, coding, Python, web development, and computer courses with practical projects and small batches.",
    email: contactInfo.email,
    telephone: contactInfo.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aligarh",
      addressRegion: "Uttar Pradesh",
      postalCode: "202001",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Aligarh",
    },
    sameAs: socialLinks.map((link) => link.href),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Brandsway Skills",
    image: `${SITE_URL}/brandsway-logo.png`,
    url: SITE_URL,
    telephone: contactInfo.phoneTel,
    email: contactInfo.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aligarh",
      addressLocality: "Aligarh",
      addressRegion: "Uttar Pradesh",
      postalCode: "202001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.8974,
      longitude: 78.088,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: socialLinks.map((link) => link.href),
  };
}

export function getCourseSchema(course) {
  const onlinePrice = calculateOnlinePrice(course.offline);
  const earlyBirdPrice = calculateEarlyBirdPrice(onlinePrice);

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.seoH1 || `${course.name} in Aligarh`,
    description: course.seoDescription,
    url: `${SITE_URL}/courses/${course.slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: "Brandsway Skills",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: earlyBirdPrice,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/apply?course=${course.slug}`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: getCourseSeo(course.slug).courseMode || "blended",
      courseWorkload: course.duration,
      location: {
        "@type": "Place",
        name: "Brandsway Skills, Aligarh",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Aligarh",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      },
    },
  };
}

export function getHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getLocalBusinessSchema(),
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Brandsway Skills",
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/courses?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      ...courses.slice(0, 3).map((course) => getCourseSchema(course)),
    ],
  };
}

export function getFaqSchema(faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBlogPostSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Organization",
      name: "Brandsway Skills",
    },
    publisher: {
      "@type": "Organization",
      name: "Brandsway Skills",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brandsway-logo.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
