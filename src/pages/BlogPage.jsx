import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import SEO from "../components/SEO";
import PageHeader, { PageShell } from "../components/PageHeader";
import SectionEyebrow from "../components/SectionEyebrow";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import { blogPosts } from "../data/blog";
import { getOrganizationSchema } from "../data/schema";

export default function BlogPage() {
  return (
    <PageShell>
      <SEO
        title="Blog | AI & Coding Tips for Aligarh Students | Brandsway Skills"
        description="Read guides on AI courses, coding careers, Python vs Java, web development & computer training in Aligarh — from Brandsway Skills."
        path="/blog"
        jsonLd={getOrganizationSchema()}
      />
      <PageHeader />

      <main className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionEyebrow>Insights</SectionEyebrow>
          <h1 className="text-3xl font-extrabold text-brand-charcoal sm:text-4xl lg:text-5xl">
            AI &amp; Coding Blog for{" "}
            <span className="text-brand-purple">Aligarh Students</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-grey">
            Guides, comparisons, and career tips for students searching for AI courses, coding
            institutes, and computer training in Aligarh, Uttar Pradesh.
          </p>

          <div className="mt-10 space-y-5">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                  <span>{post.category}</span>
                  <span className="text-brand-grey/40">·</span>
                  <span className="inline-flex items-center gap-1 text-brand-grey">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-brand-grey/40">·</span>
                  <span className="text-brand-grey">{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-extrabold text-brand-charcoal sm:text-2xl">
                  <Link to={`/blog/${post.slug}`} className="hover:text-brand-purple">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-grey sm:text-base">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-purple"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActionButton />
    </PageShell>
  );
}
