import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import ApplyPage from "./pages/ApplyPage";
import PageLoader from "./components/PageLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <PageLoader onComplete={() => setLoading(false)} />
      <div
        className={loading ? "invisible" : "visible"}
        aria-hidden={loading}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      </div>
    </>
  );
}
