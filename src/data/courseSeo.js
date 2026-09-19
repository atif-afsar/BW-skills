export const courseSeo = {
  "ai-skills-for-real-opportunities": {
    seoTitle: "AI Skills for Real Opportunities | BrandsWay Skill Academy",
    seoH1: "AI Skills for Real Opportunities | BrandsWay Skill Academy",
    localIntro:
      "A practical 6-week program to help learners master in-demand digital skills using AI and turn creativity into real opportunities.",
    courseMode: "Online & Offline (as per batch)",
    careerOpportunities: [
      "AI Workflow & Prompting Specialist",
      "Creative Design & Social Content Freelancer",
      "Short-Form Video & Media Editor",
      "Digital Marketing & Ad Campaign Assistant",
      "Independent Web & Landing Page Designer",
      "Agency Content & Automation Partner",
    ],
  },
  "coding-ai-automation": {
    seoTitle: "Coding + AI Automation | BrandsWay Skill Academy",
    seoH1: "Coding + AI Automation | BrandsWay Skill Academy",
    localIntro:
      "A practical 10-week program to help learners learn coding, build real projects with AI, and automate tasks for real-world opportunities.",
    courseMode: "Online & Offline (as per batch)",
    careerOpportunities: [
      "Front-End Web Developer",
      "AI-Assisted Application Builder",
      "Workflow & Systems Automation Specialist",
      "Freelance Web & Tool Developer",
      "Junior Software Developer",
      "Agency Technical Associate",
    ],
  },
  "data-analytics": {
    seoTitle: "Data Analytics Course | BrandsWay Skill Academy",
    seoH1: "Data Analytics Course | BrandsWay Skill Academy",
    localIntro:
      "A practical, job-oriented program focused on learning how to analyze, visualize, and communicate insights from real-world data with Excel, SQL, Power BI, and Python.",
    courseMode: "Online & Offline (as per batch)",
    careerOpportunities: [
      "Data Analyst",
      "Business Intelligence (BI) Analyst",
      "SQL Query & Reporting Specialist",
      "Operations & MIS Executive",
      "Freelance Business Analytics Consultant",
      "Marketing & Financial Data Associate",
    ],
  },
};

export function getCourseSeo(slug) {
  return courseSeo[slug] || {};
}

export function getCourseSeoTitle(course) {
  const seo = getCourseSeo(course.slug);
  return seo.seoTitle || `${course.name} | BrandsWay Skill Academy`;
}

export function getCourseSeoH1(course) {
  const seo = getCourseSeo(course.slug);
  return seo.seoH1 || `${course.name} | BrandsWay Skill Academy`;
}

export function getCourseSeoDescription(course) {
  return course.seoDescription || course.overview;
}
