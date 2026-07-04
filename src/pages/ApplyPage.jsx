import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import PageHeader, { PageShell } from "../components/PageHeader";
import EnrollmentSection from "../components/EnrollmentSection";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";

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
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <SEO
        title="Enroll Now | AI & Coding Courses in Aligarh | Brandsway Skills"
        description="Apply for AI, Python, web development & computer courses at Brandsway Skills in Aligarh. Online & offline batches with early-bird discounts."
        path="/apply"
      />
      <PageHeader backLabel="Back Home" action={null} />

      <main>
        <EnrollmentSection defaultProgram={defaultProgram} />
      </main>

      <Footer />
      <FloatingActionButton />
    </PageShell>
  );
}
