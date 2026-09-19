# Antigravity Task — Replace Existing Courses with 3 Premium 3D Course Experiences

## Objective

Update the existing BrandsWay Skill Academy website.

The current website already has a strong premium, minimal, 3D/interactive visual direction. **Do not redesign the entire website.** Preserve the existing brand identity, navigation, typography system, spacing language, animations, 3D quality, responsiveness, and overall visual polish.

### Main task

Remove the currently rendered course/course-card data and replace it with these **three courses**:

1. **AI Skills for Real Opportunities**
2. **Coding + AI Automation**
3. **Data Analytics**

The three courses should feel like a premium, cohesive product collection rather than three ordinary cards.

The final section should look like a modern 2026 skill-tech platform: minimal, cinematic, highly interactive, sophisticated, and visually impressive without becoming cluttered.

---

# 1. FIRST: Inspect the Existing Project

Before modifying anything:

- Inspect the complete existing frontend structure.
- Identify:
  - current course data/configuration
  - course listing components
  - course cards
  - course detail routes/pages
  - navbar
  - hero section
  - existing 3D components
  - animation system
  - responsive/mobile components
  - global styles/design tokens
  - CTA components
  - buttons
  - icons
  - image/asset handling
- Determine whether the project already uses:
  - React Three Fiber / Three.js
  - GSAP
  - Framer Motion
  - Lenis / smooth scrolling
  - Tailwind CSS
  - CSS animations
- Reuse the existing architecture and animation system wherever possible.

### Important

Do NOT unnecessarily install new libraries.

Do NOT replace working architecture.

Do NOT rebuild the website from scratch.

Make the smallest clean architectural change required to create a significantly better course experience.

---

# 2. REMOVE THE OLD COURSE DATA

Completely remove the existing course entries from the active website.

Search the entire project for:

- old course names
- old course descriptions
- old pricing
- old course images
- old course slugs
- hardcoded course cards
- duplicated course data
- old course routes that should no longer be visible

Do not leave obsolete courses accidentally appearing in:

- homepage
- courses section
- navigation dropdown
- course detail pages
- mobile menu
- search/filter UI
- related courses
- footer
- metadata
- structured data

If the application uses a central course data file, refactor it into a clean structured course configuration.

---

# 3. CREATE A SINGLE SOURCE OF TRUTH

Create a clean course data structure.

Example:

```js
const courses = [
  {
    id: "ai-skills",
    slug: "ai-skills-for-real-opportunities",
    title: "AI Skills for Real Opportunities",
    shortTitle: "AI Skills",
    duration: "6 Weeks",
    lectures: 24,
    level: "Beginner Friendly",
    mode: "Online / Offline",
    certificate: true,
    currentPrice: 2999,
    originalPrice: 5999,
    category: "AI • Creative • Digital",
  },

  {
    id: "coding-ai",
    slug: "coding-ai-automation",
    title: "Coding + AI Automation",
    shortTitle: "Coding + AI",
    duration: "10 Weeks",
    lectures: 40,
    level: "Beginner Friendly",
    mode: "Online / Offline",
    certificate: true,
    currentPrice: 4999,
    originalPrice: 9999,
    category: "Coding • AI • Automation",
  },

  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Data Analytics",
    shortTitle: "Data Analytics",
    duration: "2.5 Months",
    level: "Beginner Friendly",
    category: "Data • Analytics • Career",
    currentPrice: 9999,
    originalPrice: 15999,
  }
];
```

Adapt the schema to the existing project rather than blindly copying this example.

---

# 4. COURSE 01 — AI SKILLS FOR REAL OPPORTUNITIES

## Core positioning

### Title

**AI Skills for Real Opportunities**

### Supporting line

**Learn. Create. Design. Edit. Market. Build.**

### Description

A practical 6-week program to help learners master in-demand digital skills using AI and turn creativity into real opportunities.

### Course facts

- Duration: **6 Weeks**
- Lectures: **24**
- Lecture duration: **1–1.5 Hours**
- Level: **Beginner Friendly**
- Mode: **Online / Offline (as per batch)**
- Certificate: **On Completion**

## Modules

### 01 — AI & Prompting

- AI Fundamentals
- Generative AI & AI Tools
- ChatGPT & Prompting
- AI for Productivity
- Creative Workflows with AI

### 02 — Graphic Designing

- Create Designs with AI
- Social Media Creatives
- Posters & Ads
- Thumbnails & Banners
- Brand & Visual Identity

### 03 — Video Editing

- Edit Videos with AI
- Reels, Shorts & Long-Form
- Captions & Subtitles
- AI Voice & Audio
- Effects, Transitions & More

### 04 — Digital Marketing

- Make Ads with AI
- Create Ad Creatives & Copy
- Connect & Run Ads
- Meta / Google Ads
- Audience Targeting & Insights
- Social Media Marketing
- Lead Generation with AI

### 05 — Website Creation

- Create Landing Pages
- AI Website-Building Tools
- Design & Customize with AI
- Business & Portfolio Websites
- Forms, Chatbots & Integrations
- Publish Your Website

### 06 — Freelancing & Career

- Find Real Opportunities
- Work with Clients
- Build a Portfolio
- Price & Package Your Services
- Platforms & Outreach
- Career Guidance

## Projects / Outcomes

Show selected outcomes visually:

- AI-powered creative workflow
- Social media campaign
- Advertisement creatives
- Video/reel project
- Landing page
- Business/portfolio website
- Freelancing portfolio

## Pricing

- Current/offer price: **₹2,999**
- Original price: **₹5,999**

Do not hardcode an expired promotional date. Make the offer text configurable so it can be updated or hidden from the UI when expired.

---

# 5. COURSE 02 — CODING + AI AUTOMATION

## Core positioning

### Title

**Coding + AI Automation**

### Supporting line

**Learn to Code. Build with AI. Automate. Launch.**

### Description

A practical 10-week program to help learners learn coding, build real projects with AI, and automate tasks for real-world opportunities.

## Course facts

- Duration: **10 Weeks**
- Lectures: **40**
- Lecture duration: **1–1.5 Hours**
- Level: **Beginner Friendly**
- Mode: **Online / Offline (as per batch)**
- Certificate: **On Completion**

## Modules

### 01 — Coding Fundamentals

- How the Web Works
- HTML, CSS, JavaScript
- Variables, Functions, Loops
- Problem Solving & Debugging
- Build Small Projects

### 02 — AI-Assisted Coding

- Use AI to Write & Understand Code
- Generate, Debug & Improve Code
- Build Features with AI
- Speed Up Development
- Turn Ideas into Working Projects

### 03 — Website Development

- Build Websites with AI
- Landing Pages
- Responsive Design
- Modern UI with CSS
- Multi-Page Websites
- Website Deployment

### 04 — Web Applications

- Web Apps vs Websites
- Interactive Applications
- APIs & Databases Basics
- User Authentication
- Dashboards & Real Use Cases

### 05 — AI Integration

- Work with AI APIs
- Build AI Chatbots
- Add AI Features to Websites
- Create AI-Powered Applications
- Connect AI Models with Projects

### 06 — AI Automation

- Automation Fundamentals
- Connect Different Tools
- Automate Repetitive Tasks
- Build Useful Workflows
- Real-World Automation Projects

## Practical Projects

- Personal Portfolio Website
- Business Landing Page
- Interactive Web Application
- AI Chatbot
- Task Management App
- Automated Workflow
- Basic E-Commerce Website
- Final Project — Build & Launch Your Own Project

## Career outcomes

Present as possible skill directions, not guaranteed employment:

- Web Development
- AI Tool Building
- Freelancing
- Automation Work
- Portfolio Development
- Real-Project Experience

## Pricing

- Current/offer price: **₹4,999**
- Original price: **₹9,999**

Make promotional dates/offer badges configurable rather than permanently displaying an expired date.

---

# 6. COURSE 03 — DATA ANALYTICS

## Core positioning

### Title

**Data Analytics**

### Supporting line

**Turn Data into Decisions. Build a Career in Data Analytics.**

### Course positioning

A practical, job-oriented program focused on learning how to analyze, visualize, and communicate insights from real-world data.

## Course facts

- Duration: **2.5 Months**
- Level: **Beginner Friendly**
- Focus: **Industry-Relevant Skills**
- Learning style: **Hands-on Projects**
- Career component: **Career & Interview Preparation**

## What learners will work with

### Excel

Data analysis fundamentals and practical spreadsheet workflows.

### SQL

Data querying and working with structured data.

### Power BI

Data visualization and interactive dashboards.

### Statistics

Statistics for extracting meaningful insights.

### Python

Python for practical data analysis.

### Real-World Projects

Apply concepts to practical datasets and business-style problems.

### Career & Interview Preparation

Portfolio, project explanation, interview preparation, and career-oriented guidance.

## Pricing

- Current/offer price: **₹9,999**
- Original price: **₹15,999**

Do not display a fake countdown or expired deadline. If a real promotion exists, make the countdown data-driven.

---

# 7. COURSE SECTION — PREMIUM 3D EXPERIENCE

The course section should be one of the strongest visual sections on the website.

Do NOT simply create three rectangular cards.

Create a **3D interactive course showcase**.

Think:

> Premium technology product launch + modern education platform + minimal editorial design.

## Desktop concept

Create a horizontal / spatial course gallery.

The three courses can appear as three large floating 3D panels/cards:

### Card 01
AI Skills

### Card 02
Coding + AI

### Card 03
Data Analytics

The active card should be visually dominant.

Inactive cards should sit slightly behind or to the side with:

- reduced scale
- subtle blur/depth
- lower opacity
- perspective
- gentle parallax

When the user moves through the section:

- cards glide smoothly
- depth changes
- active card becomes larger
- supporting information transitions smoothly
- 3D objects react subtly to cursor movement
- background elements shift with parallax

Avoid excessive motion.

The goal is **premium, controlled motion**, not a gaming interface.

---

# 8. 3D VISUAL LANGUAGE

Create a unique visual object for each course.

## AI Skills

Use a visual language around:

- AI spark
- floating creative panels
- holographic UI
- abstract AI orb
- layered design/video/marketing tiles

Colors can subtly use:

- electric blue
- soft violet
- white
- very light gradients

## Coding + AI Automation

Use:

- floating code window
- terminal/code symbols
- AI node
- connected workflow lines
- automation nodes
- floating brackets `{ }`
- subtle glowing data connections

Primary visual language:

**Code → AI → Automation → Result**

## Data Analytics

Use:

- floating 3D bar charts
- data points
- analytical graph
- circular dashboard elements
- subtle grid
- floating SQL/database symbol
- data visualization panels

Primary visual language:

**Data → Analysis → Insight → Decision**

---

# 9. 3D IMPLEMENTATION RULES

If the project already uses React Three Fiber / Three.js:

- reuse the existing 3D infrastructure
- create reusable 3D components
- use optimized geometry
- avoid huge textures
- avoid unnecessary high-poly models
- use lazy loading where appropriate
- dispose resources correctly
- avoid memory leaks
- keep mobile performance in mind

If 3D is not currently used:

Use the lightest approach that fits the existing architecture.

Do not add a huge 3D dependency ecosystem just for decorative effects.

### Important

3D should support the content.

It should NOT make the course information difficult to read.

---

# 10. COURSE CARD DESIGN

Each course card should contain:

### Top

Small category label.

Example:

`AI • CREATIVE • DIGITAL`

### Main

Large course title.

### Short positioning statement.

### Key metrics

Example:

`6 WEEKS`
`24 LECTURES`
`BEGINNER`

### Skill chips

Example:

`AI`
`DESIGN`
`VIDEO`
`MARKETING`
`WEBSITES`

### Price

Large:

**₹2,999**

Smaller crossed-out:

₹5,999

### CTA

**Explore Course →**

or

**View Program →**

The CTA should use the existing website's CTA style.

---

# 11. INTERACTION

Add sophisticated micro-interactions.

### Cursor interaction

On desktop:

- subtle card tilt
- 3D depth response
- floating objects react slightly
- light/shadow shifts subtly

Keep movement extremely smooth.

### Hover

On hover:

- card slightly lifts
- border becomes more visible
- background glow appears
- 3D object reacts
- CTA arrow moves a few pixels
- skill chips animate subtly

Do not use aggressive scaling.

### Click

Clicking a course should open the corresponding course detail page/route.

Use clean URLs such as:

```text
/courses/ai-skills-for-real-opportunities
/courses/coding-ai-automation
/courses/data-analytics
```

Adapt routes to the existing routing architecture.

---

# 12. COURSE DETAIL PAGES

If the current project already has course detail pages, update them rather than creating duplicate systems.

Each course page should include:

1. Hero
2. Course summary
3. Course statistics
4. What you'll learn
5. Modules
6. Practical projects
7. Tools/technologies
8. Career/application section
9. Pricing
10. FAQ
11. Enrollment CTA

Use the same visual system across all three courses while giving each course its own 3D identity.

---

# 13. HERO / COURSE SHOWCASE

If the homepage currently has a course hero or featured-course section, replace the old course with a rotating/interactive showcase of the three new courses.

Possible headline:

**LEARN SKILLS THAT CREATE OPPORTUNITIES.**

Supporting line:

**AI. CODE. DATA. Build practical skills for the modern digital world.**

Then show the three courses as the interactive 3D collection.

Do not overcrowd the hero.

---

# 14. VISUAL DESIGN SYSTEM

Follow the existing website's design language.

The reference screenshots establish the course branding:

- white / off-white base
- deep navy
- electric blue
- subtle violet accents
- clean typography
- large bold headlines
- rounded cards
- thin borders
- soft shadows
- glass-like surfaces
- premium whitespace

Use color primarily as an accent.

Do NOT turn the page into a colorful rainbow interface.

---

# 15. TYPOGRAPHY

Use the existing website typography if already defined.

Prioritize:

- very large display typography
- tight headings
- clean readable body text
- strong hierarchy
- short paragraphs
- generous whitespace

Course titles should feel editorial and premium.

Avoid excessive text inside the cards.

---

# 16. RESPONSIVE / MOBILE DESIGN

This is critical.

The website must be excellent on mobile.

Do NOT simply shrink the desktop layout.

### Mobile course experience

Use a vertical immersive flow:

```text
Course 01
↓
3D visual
↓
Title
↓
Short description
↓
Stats
↓
Skills
↓
Price
↓
CTA

Course 02
↓
...

Course 03
↓
...
```

3D effects should be reduced on mobile if necessary for performance.

Touch interactions should replace hover interactions.

No horizontal overflow.

No tiny text.

No broken 3D canvas.

No overlapping CTA.

The course cards should feel premium even on a 360px–430px viewport.

---

# 17. PERFORMANCE

Maintain strong performance.

Requirements:

- Lazy-load heavy 3D assets
- Avoid unnecessary rerenders
- Avoid massive image files
- Optimize textures
- Respect reduced-motion preferences
- Pause expensive animations when off-screen
- Use IntersectionObserver where appropriate
- Avoid continuous expensive calculations
- Keep mobile GPU usage reasonable

The 3D experience should feel smooth rather than technically overloaded.

---

# 18. ACCESSIBILITY

Ensure:

- semantic headings
- keyboard-accessible CTAs
- visible focus states
- accessible buttons
- meaningful alt text
- sufficient text contrast
- reduced-motion support
- no essential information hidden only inside hover interactions

---

# 19. DATA / COMPONENT ARCHITECTURE

Prefer reusable components such as:

```text
CourseShowcase
CourseCard
Course3DScene
CourseStats
CourseSkills
CourseModules
CoursePricing
CourseCTA
CourseDetailPage
```

Do not duplicate three separate implementations.

Create reusable components with course-specific configuration.

Example:

```jsx
<CourseCard course={course} />
<Course3DScene course={course} />
```

The course content should come from data, not be hardcoded throughout JSX.

---

# 20. DO NOT BREAK EXISTING WEBSITE FEATURES

Before finishing, verify that these continue working:

- Navbar
- Mobile menu
- Existing animations
- Smooth scrolling
- Existing 3D elements
- CTA buttons
- Contact section
- Footer
- Routing
- Forms
- Existing SEO setup
- Existing responsive behavior

Do not modify unrelated sections unless required for the course integration.

---

# 21. SEO

Update course metadata.

Each course should have:

### AI Skills

Title:

`AI Skills for Real Opportunities | BrandsWay Skill Academy`

### Coding + AI

Title:

`Coding + AI Automation | BrandsWay Skill Academy`

### Data Analytics

Title:

`Data Analytics Course | BrandsWay Skill Academy`

Add appropriate:

- meta descriptions
- canonical URLs
- Open Graph data
- structured data where appropriate

Do not make unsupported claims such as guaranteed jobs or guaranteed salaries.

---

# 22. FINAL HOMEPAGE EXPERIENCE

The final course section should communicate this hierarchy:

```text
LEARN
↓
CHOOSE YOUR SKILL
↓
EXPLORE THE PROGRAM
↓
BUILD REAL PROJECTS
↓
CREATE OPPORTUNITIES
```

The three courses should feel like three paths inside one ecosystem:

### AI Skills
Create.

### Coding + AI
Build.

### Data Analytics
Analyze.

This creates a clear visual and conceptual relationship between the courses.

---

# 23. VISUAL QUALITY BAR

The result should NOT look like:

- generic Bootstrap cards
- ordinary course marketplace
- template grid
- excessive gradients
- random 3D objects
- cluttered UI
- cheap glowing effects
- over-animated landing page

It SHOULD feel like:

- premium technology brand
- modern creative studio
- high-end educational product
- minimal editorial website
- sophisticated 3D product showcase

Think:

**Apple-level restraint + modern AI startup aesthetics + premium interactive 3D.**

Do not copy any specific company's website. Use this only as a quality/reference direction.

---

# 24. IMPLEMENTATION PROCESS

Follow this exact sequence:

### Phase 1 — Audit

Inspect the existing project and identify all current course-related code.

### Phase 2 — Data

Create the new centralized course data.

### Phase 3 — Remove

Remove the old course data and obsolete references.

### Phase 4 — Components

Build/refactor reusable course components.

### Phase 5 — 3D

Integrate the three course-specific 3D visual identities.

### Phase 6 — Interactions

Add:

- hover
- cursor parallax
- scroll animation
- card transitions
- CTA micro-interactions

### Phase 7 — Responsive

Test:

- 360px
- 390px
- 414px
- tablet
- laptop
- large desktop

### Phase 8 — Routing

Verify every course opens correctly.

### Phase 9 — SEO

Update metadata and structured content.

### Phase 10 — QA

Run the project and check:

- console errors
- broken imports
- missing assets
- broken routes
- animation issues
- 3D performance
- mobile layout
- accessibility
- overflow
- CTA functionality

---

# 25. IMPORTANT CONTENT RULE

Use the course information provided in this specification as the source of truth.

Do not invent:

- extra certifications
- placement guarantees
- salary guarantees
- fake student counts
- fake testimonials
- fake partnerships
- fake job guarantees
- fake company logos
- unsupported statistics

If a piece of information is not provided, design the component so the content can be added later rather than inventing it.

---

# 26. FINAL RESULT

After implementation, the homepage should feel like a **premium interactive skill academy**.

The visitor should immediately understand:

**There are three programs.**

**AI Skills → Create**

**Coding + AI → Build**

**Data Analytics → Analyze**

And each course should feel like a distinct premium experience while remaining part of one cohesive BrandsWay Skill Academy design system.

## Acceptance Criteria

The task is complete only when:

- [ ] Old courses are completely removed
- [ ] Exactly three active courses are rendered
- [ ] All three courses use centralized data
- [ ] Course cards are visually premium
- [ ] 3D elements are integrated naturally
- [ ] Each course has its own visual identity
- [ ] Desktop experience is polished
- [ ] Mobile experience is polished
- [ ] Course routes work
- [ ] Pricing is correct
- [ ] Expired promotional dates are not shown as active
- [ ] No console errors
- [ ] No broken assets
- [ ] No horizontal overflow
- [ ] Existing website sections remain functional
- [ ] Performance remains acceptable
- [ ] Reduced-motion behavior works
- [ ] SEO metadata is updated
- [ ] No unsupported marketing claims are introduced

## Final instruction to Antigravity

**Do not stop after creating static cards.**

Actually inspect the existing website, understand its current 3D design system, and integrate the three courses into that system.

The result should look intentionally designed — not like content was simply swapped into an old template.

Prioritize:

**minimalism → hierarchy → depth → interaction → performance → conversion.**

Build it like a premium 2026 interactive education website.
