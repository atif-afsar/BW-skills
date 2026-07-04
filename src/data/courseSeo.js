export const courseSeo = {
  "ai-tools-and-automation": {
    seoTitle: "AI Training in Aligarh | AI Tools Course | Brandsway Skills",
    seoH1: "AI Tools & Automation Course in Aligarh | Brandsway Skills",
    localIntro:
      "Learn practical AI training in Aligarh, Uttar Pradesh — prompt engineering, ChatGPT workflows, and no-code automation with real projects at Brandsway Skills.",
    courseMode: "Online and Offline",
    careerOpportunities: [
      "AI workflow assistant for agencies and startups",
      "Content automation freelancer",
      "Operations & productivity automation support",
      "Foundation for data, coding, or marketing roles",
    ],
  },
  "programming-and-coding-fundamentals-python": {
    seoTitle: "Learn Python in Aligarh | Coding Course | Brandsway Skills",
    seoH1: "Python Programming Course in Aligarh | Brandsway Skills",
    localIntro:
      "Start your coding journey in Aligarh with our Python programming course — built for absolute beginners who want strong fundamentals and portfolio projects.",
    courseMode: "Online and Offline",
    careerOpportunities: [
      "Junior Python developer",
      "Automation & scripting roles",
      "Foundation for web development or data science",
      "Freelance coding projects",
    ],
  },
  "web-designing-and-development": {
    seoTitle: "Web Development Course in Aligarh | Brandsway Skills",
    seoH1: "Web Designing & Development Course in Aligarh | Brandsway Skills",
    localIntro:
      "Master responsive web design and front-end development in Aligarh — HTML, CSS, JavaScript, and modern UI workflows with portfolio-ready projects.",
    courseMode: "Online and Offline",
    careerOpportunities: [
      "Front-end web developer",
      "UI implementation freelancer",
      "WordPress / landing page specialist",
      "Agency web design role",
    ],
  },
  "performance-marketing": {
    seoTitle: "Digital Marketing Course in Aligarh | Brandsway Skills",
    seoH1: "Performance Marketing Course in Aligarh | Brandsway Skills",
    localIntro:
      "Run measurable ad campaigns with our performance marketing course in Aligarh — Meta Ads, Google Ads, funnels, and analytics for real business growth.",
    courseMode: "Online and Offline",
    careerOpportunities: [
      "Performance marketing executive",
      "Paid ads freelancer",
      "Digital marketing agency role",
      "E-commerce campaign manager",
    ],
  },
  "graphic-designing": {
    seoTitle: "Graphic Design Course in Aligarh | Brandsway Skills",
    seoH1: "Graphic Designing Course in Aligarh | Brandsway Skills",
    localIntro:
      "Learn visual design for brands and social media in Aligarh — typography, composition, and production-ready assets with hands-on projects.",
    courseMode: "Online and Offline",
    careerOpportunities: [
      "Graphic designer for local businesses",
      "Social media creative freelancer",
      "Brand identity assistant",
      "Agency design role",
    ],
  },
  "full-stack-web-development": {
    seoTitle: "Full Stack Web Development in Aligarh | Brandsway Skills",
    seoH1: "Full Stack Web Development Course in Aligarh | Brandsway Skills",
    localIntro:
      "Build complete web applications in Aligarh with React, Node.js, databases, and deployment — our most comprehensive coding program for aspiring developers.",
    courseMode: "Online and Offline",
    careerOpportunities: [
      "Full stack developer",
      "React front-end developer",
      "Node.js backend developer",
      "Startup tech co-founder / freelancer",
    ],
  },
  "video-editing-and-motion-graphics": {
    seoTitle: "Video Editing Course in Aligarh | Brandsway Skills",
    seoH1: "Video Editing & Motion Graphics Course in Aligarh | Brandsway Skills",
    localIntro:
      "Create reels, brand promos, and motion content in Aligarh — a creator-friendly video editing course with industry tools and portfolio outputs.",
    courseMode: "Online and Offline",
    careerOpportunities: [
      "Video editor for YouTube & social media",
      "Reels & short-form content freelancer",
      "Brand promo editor",
      "Agency content production role",
    ],
  },
  "social-media-management": {
    seoTitle: "Social Media Course in Aligarh | Brandsway Skills",
    seoH1: "Social Media Management Course in Aligarh | Brandsway Skills",
    localIntro:
      "Plan, publish, and grow social channels with our social media management course in Aligarh — strategy, content calendars, and brand consistency.",
    courseMode: "Online and Offline",
    careerOpportunities: [
      "Social media manager",
      "Content strategist freelancer",
      "Brand account handler",
      "Digital marketing support role",
    ],
  },
};

export function getCourseSeo(slug) {
  return courseSeo[slug] || {};
}

export function getCourseSeoTitle(course) {
  const seo = getCourseSeo(course.slug);
  return seo.seoTitle || `${course.name} in Aligarh | Brandsway Skills`;
}

export function getCourseSeoH1(course) {
  const seo = getCourseSeo(course.slug);
  return seo.seoH1 || `${course.name} in Aligarh | Brandsway Skills`;
}

export function getCourseSeoDescription(course) {
  const seo = getCourseSeo(course.slug);
  const base = course.seoDescription || course.overview;
  if (base.toLowerCase().includes("aligarh")) return base;
  return `${base} Join this course in Aligarh, Uttar Pradesh at Brandsway Skills.`;
}
