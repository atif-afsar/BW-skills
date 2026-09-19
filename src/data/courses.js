export const ONLINE_DISCOUNT_PERCENT = 50;
export const EARLY_BIRD_DISCOUNT_PERCENT = 25;

export const BATCH_SCHEDULE = {
  slots: ["11:00 AM", "4:00 PM"],
  summary: "2 batches daily — 11:00 AM & 4:00 PM",
  offline: "Offline batches: 11:00 AM & 4:00 PM (2 classroom batches daily)",
  online: "Online batches: 11:00 AM & 4:00 PM (2 live batches daily)",
};

export const courses = [
  {
    id: "ai-skills",
    slug: "ai-skills-for-real-opportunities",
    name: "AI Skills for Real Opportunities",
    shortTitle: "AI Skills",
    pillar: "CREATE",
    category: "AI • CREATIVE • DIGITAL",
    tagline: "Learn. Create. Design. Edit. Market. Build.",
    overview:
      "A practical 6-week program to help learners master in-demand digital skills using AI and turn creativity into real opportunities.",
    duration: "6 Weeks",
    lectures: 24,
    lectureDuration: "1–1.5 Hours",
    level: "Beginner Friendly",
    mode: "Online / Offline (as per batch)",
    certificate: true,
    currentPrice: 4999,
    originalPrice: 9999,
    offline: 9999,
    offerBadge: "Special Launch Fee",
    skills: ["AI & PROMPTING", "GRAPHIC DESIGN", "VIDEO EDITING", "DIGITAL MARKETING", "WEBSITES"],
    accentColor: "#3b82f6",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    glowColor: "rgba(59, 130, 246, 0.35)",
    icon: "Sparkles",
    visualType: "ai-spark-orb",
    audience: ["Students", "Freelancers", "Creators", "Working professionals"],
    tools: ["ChatGPT & Claude", "Midjourney & Canva AI", "CapCut & Premiere", "Meta Ads", "AI Web Builders", "Notion"],
    benefits: [
      "Learn practical AI workflows rather than abstract theory.",
      "Design campaign-ready creatives, posters, and visual identities.",
      "Edit reels, shorts, and long-form videos with AI audio and captions.",
      "Build live landing pages and portfolio websites without code barriers.",
      "Get actionable client outreach strategies and career guidance.",
    ],
    outcomes: [
      "AI-powered creative workflow",
      "Social media campaign",
      "Advertisement creatives",
      "Video/reel project",
      "Landing page",
      "Business/portfolio website",
      "Freelancing portfolio",
    ],
    careerDirections: [
      "AI Workflow Specialist",
      "Content & Creative Freelancer",
      "Digital Marketing Assistant",
      "Social Media Video Editor",
      "Landing Page Designer",
    ],
    modules: [
      {
        number: "01",
        title: "AI & Prompting",
        description: "Master prompt engineering, generative models, and AI productivity tools.",
        topics: [
          "AI Fundamentals & Model Landscape",
          "Generative AI & Practical AI Tools",
          "ChatGPT & Advanced Prompting Frameworks",
          "AI for Daily Productivity & Writing",
          "End-to-End Creative Workflows with AI",
        ],
      },
      {
        number: "02",
        title: "Graphic Designing",
        description: "Create stunning brand assets, banners, and social creatives with AI.",
        topics: [
          "Create Professional Designs with AI",
          "High-Converting Social Media Creatives",
          "Posters, Ad Banners & Promotional Graphics",
          "Thumbnails, Hero Assets & Visual Banners",
          "Brand Guidelines & Visual Identity Systems",
        ],
      },
      {
        number: "03",
        title: "Video Editing",
        description: "Produce viral short-form and high-impact long-form video content.",
        topics: [
          "Edit Engaging Videos with AI Assistants",
          "Reels, YouTube Shorts & Long-Form Video",
          "Automated Captions, Subtitles & Motion Text",
          "AI Voiceovers, Audio Cleaning & Sound Effects",
          "Modern Cinematic Cuts, Transitions & Grading",
        ],
      },
      {
        number: "04",
        title: "Digital Marketing",
        description: "Launch targeted ad campaigns and generate qualified leads.",
        topics: [
          "Make High-Performing Ads with AI",
          "Create Compelling Ad Creatives & Copy",
          "Connect, Configure & Run Ad Accounts",
          "Meta Ads Manager & Google Ads Campaigns",
          "Audience Targeting, Retargeting & Insights",
          "Social Media Growth & Organic Reach",
          "Systematic Lead Generation with AI Funnels",
        ],
      },
      {
        number: "05",
        title: "Website Creation",
        description: "Build, style, and launch business websites and landing pages.",
        topics: [
          "Create High-Converting Landing Pages",
          "AI-Powered Website-Building Tools",
          "Design & Customize Visual Layouts with AI",
          "Business & Showcase Portfolio Websites",
          "Forms, WhatsApp Chatbots & Third-Party Integrations",
          "Domain Setup & Live Website Publishing",
        ],
      },
      {
        number: "06",
        title: "Freelancing & Career",
        description: "Package your skills, land paying clients, and grow your income.",
        topics: [
          "Find Real Digital Opportunities in 2026",
          "Pitch, Communicate & Close Global Clients",
          "Curate an Impressive Proof-of-Work Portfolio",
          "Price, Scope & Package Your Services",
          "Freelance Platforms, Cold Outreach & Inbound",
          "Career Roadmaps & Monetization Guidance",
        ],
      },
    ],
    syllabus: [
      "AI & Prompting — ChatGPT, Claude, productivity workflows & prompt systems",
      "Graphic Designing — AI-generated brand creatives, social posts & ad visuals",
      "Video Editing — Reels, shorts, AI voice, dynamic captions & motion transitions",
      "Digital Marketing — Meta & Google ad campaigns, copywriting & lead generation",
      "Website Creation — AI landing pages, business websites, forms & integrations",
      "Freelancing & Career — Client outreach, service pricing & portfolio launch",
    ],
    projects: [
      "AI-powered creative workflow system",
      "Multi-channel social media campaign",
      "High-converting advertisement creative set",
      "Branded short-form video / reel showcase",
      "Interactive responsive landing page",
      "Complete client business / portfolio website",
      "Freelancing showcase portfolio with pitch deck",
    ],
    seoDescription:
      "Master AI Skills for Real Opportunities at BrandsWay Skill Academy. Learn AI prompting, graphic design, video editing, digital marketing, website creation, and freelancing in 6 weeks.",
  },
  {
    id: "coding-ai",
    slug: "coding-ai-automation",
    name: "Coding + AI Automation",
    shortTitle: "Coding + AI",
    pillar: "BUILD",
    category: "CODING • AI • AUTOMATION",
    tagline: "Learn to Code. Build with AI. Automate. Launch.",
    overview:
      "A practical 10-week program to help learners learn coding, build real projects with AI, and automate tasks for real-world opportunities.",
    duration: "10 Weeks",
    lectures: 40,
    lectureDuration: "1–1.5 Hours",
    level: "Beginner Friendly",
    mode: "Online / Offline (as per batch)",
    certificate: true,
    currentPrice: 9999,
    originalPrice: 15999,
    offline: 15999,
    offerBadge: "Special Launch Fee",
    skills: ["HTML/CSS/JS", "AI-ASSISTED CODING", "WEB APPS", "AI APIS", "AUTOMATION"],
    accentColor: "#6366f1",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    glowColor: "rgba(99, 102, 241, 0.35)",
    icon: "Code2",
    visualType: "code-terminal-nodes",
    audience: ["School & college students", "Beginners with zero code background", "Aspiring software builders", "Career switchers"],
    tools: ["HTML5 & CSS3", "Modern JavaScript", "VS Code", "AI Coding Assistants", "GitHub", "APIs & Webhooks", "Automation Tools"],
    benefits: [
      "Understand coding logic clearly with AI as an interactive tutor.",
      "Build real deployable web apps instead of isolated theory exercises.",
      "Integrate intelligent AI models and chatbots directly into websites.",
      "Automate repetitive daily tasks, data syncs, and business processes.",
      "Graduate with 8 functional GitHub projects live on the internet.",
    ],
    outcomes: [
      "Web Development",
      "AI Tool Building",
      "Freelancing",
      "Automation Work",
      "Portfolio Development",
      "Real-Project Experience",
    ],
    careerDirections: [
      "Front-End Web Developer",
      "AI Tools & Automation Builder",
      "Freelance Web Developer",
      "Workflow Automation Specialist",
      "Junior Software Developer",
    ],
    modules: [
      {
        number: "01",
        title: "Coding Fundamentals",
        description: "Build rock-solid foundational programming and web principles.",
        topics: [
          "How the Modern Web & Browsers Work",
          "HTML5 Semantics, Structure & CSS Styling",
          "JavaScript Essentials: Variables, Functions, Loops",
          "Logical Thinking, Problem Solving & Debugging",
          "Building Small Interactive Projects",
        ],
      },
      {
        number: "02",
        title: "AI-Assisted Coding",
        description: "Use modern AI tools to write, debug, and understand code 5x faster.",
        topics: [
          "Prompting AI Models to Write Clean Code",
          "Understanding, Reading & Refactoring Code with AI",
          "Debugging Errors & Finding Performance Bottlenecks",
          "Accelerating Development Cycles with Code Assistants",
          "Turning Creative Concepts into Functional Code",
        ],
      },
      {
        number: "03",
        title: "Website Development",
        description: "Create modern responsive websites and interactive user experiences.",
        topics: [
          "Build Custom Modern Websites with AI Assistants",
          "High-Conversion Landing Page Architecture",
          "Mobile-First Responsive Design Systems",
          "Modern UI Layouts with Flexbox & Grid",
          "Multi-Page Navigation & Component Structuring",
          "Deploying Websites to Vercel & Custom Domains",
        ],
      },
      {
        number: "04",
        title: "Web Applications",
        description: "Transition from static websites to dynamic interactive web apps.",
        topics: [
          "Web Applications vs Static Websites",
          "State Management & Dynamic UI Interactions",
          "APIs, JSON & Data Fetching Workflows",
          "Databases Basics & Storing User Data",
          "User Authentication & Route Protection",
          "Building Interactive Dashboards with Live Data",
        ],
      },
      {
        number: "05",
        title: "AI Integration",
        description: "Connect intelligent AI APIs and build conversational products.",
        topics: [
          "Working with LLM APIs & Authentication Keys",
          "Building Context-Aware AI Chatbots",
          "Embedding AI Search & Smart Features into Web Pages",
          "Creating Specialized AI Micro-Apps",
          "Connecting AI Models to Real Backend Data",
        ],
      },
      {
        number: "06",
        title: "AI Automation",
        description: "Connect apps together and automate complex manual processes.",
        topics: [
          "Automation Fundamentals & Event Triggers",
          "Connecting Webhooks, APIs & Third-Party Apps",
          "Automating Repetitive Data Entry & Notifications",
          "Building Resilient Multi-Step Workflow Pipelines",
          "Real-World Business Automation Case Projects",
        ],
      },
    ],
    syllabus: [
      "Coding Fundamentals — HTML, CSS, JavaScript, syntax, loops & DOM interactions",
      "AI-Assisted Coding — Prompting AI to generate, test, debug & refactor code",
      "Website Development — Responsive UI, layout design, multi-page routing & deployment",
      "Web Applications — State, dynamic data fetching, APIs, databases & user auth",
      "AI Integration — Connecting AI models, LLM APIs & building custom chatbots",
      "AI Automation — Webhooks, multi-app workflows & end-to-end automation pipelines",
    ],
    projects: [
      "Personal Developer Portfolio Website",
      "Responsive Business Landing Page",
      "Interactive Dynamic Web Application",
      "Custom AI Chatbot Assistant",
      "Task & Workflow Management App",
      "Automated Multi-Step Business Workflow",
      "Product Showcase / Basic E-Commerce App",
      "Capstone Project — Build & Launch Your Own Product",
    ],
    seoDescription:
      "Learn Coding + AI Automation at BrandsWay Skill Academy. 10-week comprehensive program covering HTML/CSS/JS, AI-assisted development, web apps, AI integration, and workflow automation.",
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    name: "Data Analytics",
    shortTitle: "Data Analytics",
    pillar: "ANALYZE",
    category: "DATA • ANALYTICS • CAREER",
    tagline: "Turn Data into Decisions. Build a Career in Data Analytics.",
    overview:
      "A practical, job-oriented program focused on learning how to analyze, visualize, and communicate insights from real-world data.",
    duration: "2.5 Months",
    lectures: 30,
    lectureDuration: "1–1.5 Hours",
    level: "Beginner Friendly",
    mode: "Online / Offline (as per batch)",
    certificate: true,
    currentPrice: 9999,
    originalPrice: 15999,
    offline: 15999,
    offerBadge: "Special Launch Fee",
    skills: ["EXCEL", "SQL", "POWER BI", "STATISTICS", "PYTHON"],
    accentColor: "#06b6d4",
    gradient: "from-cyan-600 via-teal-600 to-emerald-600",
    glowColor: "rgba(6, 182, 212, 0.35)",
    icon: "BarChart3",
    visualType: "analytics-3d-charts",
    audience: ["College graduates & job seekers", "Beginners with an analytical mindset", "Working professionals upskilling for data roles", "Business owners"],
    tools: ["Microsoft Excel", "SQL (PostgreSQL/MySQL)", "Microsoft Power BI", "Applied Statistics", "Python (Pandas, NumPy)", "Jupyter Notebook"],
    benefits: [
      "Master the essential industry stack: Excel, SQL, Power BI, and Python.",
      "Work with real messy business databases, not just clean tutorial files.",
      "Design interactive dashboards that stakeholders can easily understand.",
      "Develop strong statistical reasoning to separate noise from genuine signal.",
      "Dedicated career coaching, resume reviews, and technical interview drills.",
    ],
    outcomes: [
      "Data Analyst",
      "Business Intelligence Analyst",
      "SQL & Reporting Specialist",
      "Operations & MIS Executive",
      "Freelance Data Consultant",
      "Portfolio-backed job candidate",
    ],
    careerDirections: [
      "Junior Data Analyst",
      "Business Intelligence Specialist",
      "SQL Data Analyst",
      "Operations & Analytics Consultant",
      "Marketing & Growth Analyst",
    ],
    modules: [
      {
        number: "01",
        title: "Excel for Business Analytics",
        description: "Spreadsheet workflows, advanced formulas, and data preparation.",
        topics: [
          "Data Analysis Fundamentals in Spreadsheets",
          "Advanced Formulas: XLOOKUP, INDEX/MATCH, Nested IFS",
          "Pivot Tables, Calculated Fields & Slicers",
          "Data Cleaning, Validation & Formatting Workflows",
          "Building Dynamic Spreadsheet Dashboards",
        ],
      },
      {
        number: "02",
        title: "SQL & Relational Databases",
        description: "Data querying, table joins, aggregations, and business logic.",
        topics: [
          "Relational Database Principles & Schema Design",
          "Querying Data with SELECT, WHERE, ORDER BY, LIMIT",
          "Multi-Table Joins: INNER, LEFT, RIGHT, FULL OUTER",
          "Group Aggregations, HAVING & String / Date Functions",
          "Subqueries, CTEs (Common Table Expressions) & Window Functions",
        ],
      },
      {
        number: "03",
        title: "Power BI & Data Visualization",
        description: "Interactive reports, DAX modeling, and visual storytelling.",
        topics: [
          "Importing Data, Star Schemas & Data Modeling",
          "DAX Measures, Calculated Columns & Time Intelligence",
          "Designing Intuitive KPI Cards & Interactive Charts",
          "Drill-Downs, Bookmarks & Interactive Filtering",
          "Publishing Reports & Dashboard Distribution",
        ],
      },
      {
        number: "04",
        title: "Statistics for Analytics",
        description: "Extracting actionable insights through applied statistical thinking.",
        topics: [
          "Descriptive Statistics: Mean, Median, Variance, Standard Deviation",
          "Data Distributions, Percentiles & Outlier Detection",
          "Correlation vs Causation in Business Scenarios",
          "Hypothesis Testing Fundamentals & Confidence Intervals",
          "Defining Meaningful Business Metrics & OKRs",
        ],
      },
      {
        number: "05",
        title: "Python for Data Analysis",
        description: "Automated analysis, wrangling, and exploration with Python.",
        topics: [
          "Python Syntax & Essentials for Analysts",
          "NumPy Arrays & Mathematical Operations",
          "Pandas DataFrames for Wrangling, Cleaning & Filtering",
          "Handling Missing Data, Type Casting & Merging",
          "Exploratory Visualization with Matplotlib & Seaborn",
        ],
      },
      {
        number: "06",
        title: "Real-World Projects",
        description: "Apply concepts to end-to-end practical datasets and business cases.",
        topics: [
          "E-Commerce Sales Performance & Retention Analysis",
          "Customer Lifetime Value & Churn Segmentation",
          "Financial Revenue Variance & P&L Reporting",
          "Digital Marketing Campaign ROI & Attribution",
          "Executive Presentation of Analytical Findings",
        ],
      },
      {
        number: "07",
        title: "Career & Interview Preparation",
        description: "Translate technical skills into interviews and job offers.",
        topics: [
          "Building a Standout GitHub & Notion Data Portfolio",
          "Resume Optimization for Data & BI Roles",
          "Live Technical SQL & Excel Interview Practice",
          "Storytelling: Presenting Data Insights to Leadership",
          "Job Search Strategies, Platforms & Recruiter Outreach",
        ],
      },
    ],
    syllabus: [
      "Excel — Advanced formulas, Pivot tables, cleaning & executive dashboards",
      "SQL — Multi-table joins, subqueries, aggregations & database queries",
      "Power BI — Data modeling, DAX measures, interactive reports & visual storytelling",
      "Statistics — Distributions, hypothesis testing, KPIs & actionable insights",
      "Python — Pandas, NumPy, data wrangling & exploratory visualization",
      "Real-World Projects — Sales, customer retention & financial case studies",
      "Career Prep — Portfolio curation, resume polish & technical interview prep",
    ],
    projects: [
      "Executive Sales & Revenue KPI Dashboard (Power BI)",
      "Customer Segmentation & Retention Query Engine (SQL)",
      "Exploratory E-Commerce Insights Analysis (Python & Pandas)",
      "Financial Performance Variance Model (Advanced Excel)",
      "Capstone Industry Analytics Portfolio with Executive Deck",
    ],
    seoDescription:
      "Join the Data Analytics course at BrandsWay Skill Academy. 2.5 months practical training covering Excel, SQL, Power BI, Statistics, Python, real projects, and career interview preparation.",
  },
];

export const bundles = [
  {
    id: "ai-tech-creator",
    name: "AI & Tech Creator Combo",
    description: "AI Skills for Real Opportunities + Coding & AI Automation",
    courseIds: ["ai-skills", "coding-ai"],
    featured: false,
    offerPrice: 12999,
    originalPrice: 25998,
    badge: "POPULAR",
  },
  {
    id: "tech-data-mastery",
    name: "Tech & Data Mastery",
    description: "Coding & AI Automation + Data Analytics",
    courseIds: ["coding-ai", "data-analytics"],
    featured: false,
    offerPrice: 16999,
    originalPrice: 31998,
  },
  {
    id: "complete-skill-suite",
    name: "BrandsWay Complete Skill Suite",
    description: "All 3 Flagship Programs: AI Skills + Coding & AI + Data Analytics",
    courseIds: ["ai-skills", "coding-ai", "data-analytics"],
    featured: true,
    badge: "BEST VALUE",
    offerPrice: 21999,
    originalPrice: 41997,
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

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug);
}
