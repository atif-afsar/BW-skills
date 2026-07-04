import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import EnrollmentSection from "../components/EnrollmentSection";

function resolveDefaultProgram(searchParams) {
  const course = searchParams.get("course");
  const bundle = searchParams.get("bundle");

  if (course) return `course:${course}`;
  if (bundle) return `bundle:${bundle}`;
  return "";
}

export default function ApplyPage() {
  const [searchParams] = useSearchParams();
  const defaultProgram = resolveDefaultProgram(searchParams);

  useEffect(() => {
    document.title = "Apply Now | BrandsWay Skill Academy";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="min-h-[44px]">
            <Logo />
          </Link>
          <Link
            to="/#contact"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-brand-charcoal transition-colors hover:border-brand-purple hover:text-brand-purple"
          >
            View on Home
          </Link>
        </div>
      </header>

      <main>
        <EnrollmentSection defaultProgram={defaultProgram} />
      </main>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}
