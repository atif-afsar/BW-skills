export const ONLINE_DISCOUNT_PERCENT = 50;
export const EARLY_BIRD_DISCOUNT_PERCENT = 25;

export const courses = [
  { id: 1, name: "AI Tools & Automation", duration: "6 Weeks", offline: 12999, icon: "Sparkles" },
  { id: 2, name: "Programming & Coding Fundamentals (Python)", duration: "10 Weeks", offline: 14999, icon: "Code2" },
  { id: 3, name: "Web Designing & Development", duration: "12 Weeks", offline: 18999, icon: "LayoutTemplate" },
  { id: 4, name: "Performance Marketing", duration: "8 Weeks", offline: 15999, icon: "TrendingUp" },
  { id: 5, name: "Graphic Designing", duration: "6 Weeks", offline: 11999, icon: "PenTool" },
  { id: 6, name: "Full Stack Web Development", duration: "16 Weeks", offline: 19999, icon: "Server" },
  { id: 7, name: "Video Editing & Motion Graphics", duration: "6 Weeks", offline: 12999, icon: "Film" },
  { id: 8, name: "Social Media Management", duration: "6 Weeks", offline: 10999, icon: "Share2" },
];

export const bundles = [
  {
    id: "creator-starter",
    name: "Creator Starter Pack",
    description: "Graphic Design + Video Editing",
    courseIds: [5, 7],
    featured: false,
  },
  {
    id: "digital-marketer",
    name: "Digital Marketer Pro",
    description: "Performance Marketing + Social Media",
    courseIds: [4, 8],
    featured: false,
  },
  {
    id: "fullstack-ai",
    name: "Full Stack + AI Combo",
    description: "Web Dev + Programming + AI Tools",
    courseIds: [3, 2, 1],
    featured: false,
  },
  {
    id: "all-access",
    name: "BrandsWay All-Access",
    description: "All 8 Courses",
    courseIds: [1, 2, 3, 4, 5, 6, 7, 8],
    featured: true,
    badge: "BEST VALUE",
  },
];

export function calculateOnlinePrice(offlinePrice) {
  return Math.round(offlinePrice * (1 - ONLINE_DISCOUNT_PERCENT / 100));
}

export function calculateEarlyBirdPrice(onlinePrice) {
  return Math.round(onlinePrice * (1 - EARLY_BIRD_DISCOUNT_PERCENT / 100));
}

export function getCoursePrices(offlinePrice) {
  const online = calculateOnlinePrice(offlinePrice);
  const earlyBirdOnline = calculateEarlyBirdPrice(online);
  return { offline: offlinePrice, online, earlyBirdOnline };
}

export function getBundleOfflinePrice(courseIds) {
  return courseIds.reduce((sum, id) => {
    const course = courses.find((c) => c.id === id);
    return sum + (course?.offline ?? 0);
  }, 0);
}

export function formatPrice(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
