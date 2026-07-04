import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ApplyPage from "./pages/ApplyPage";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <PageLoader onComplete={() => setLoading(false)} />
      <div
        className={loading ? "invisible" : "visible"}
        aria-hidden={loading}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      </div>
    </>
  );
}
