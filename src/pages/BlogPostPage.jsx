import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PageHeader, { PageShell } from "../components/PageHeader";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import { getBlogPostBySlug } from "../data/blog";
import { getBlogPostSchema } from "../data/schema";

function BlogContent({ content }) {
  if (!content) {
    return (
      <p className="rounded-2xl bg-brand-bg p-6 text-sm text-brand-grey">
        Full article coming soon. Meanwhile, explore our{" "}
        <Link to="/courses" className="font-semibold text-brand-purple">
          courses in Aligarh
        </Link>{" "}
        or{" "}
        <Link to="/#contact" className="font-semibold text-brand-purple">
          enroll now
        </Link>
        .
      </p>
    );
  }

  return (
    <div className="prose-brand space-y-5">
      {content.map((block, index) => {
        if (block.type === "intro") {
          return (
            <p key={index} className="text-lg leading-relaxed text-brand-charcoal">
              {block.text}
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2 key={index} className="pt-2 text-2xl font-extrabold text-brand-charcoal">
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return (
            <p key={index} className="text-base leading-relaxed text-brand-grey">
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5 text-base text-brand-grey">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <PageShell>
      <SEO
        title={`${post.title} | Brandsway Skills`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={getBlogPostSchema(post)}
      />
      <PageHeader backTo="/blog" backLabel="All Posts" />

      <main className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand-purple">
            {post.category} · {post.readTime}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-extrabold text-brand-charcoal sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-brand-grey">
            Published{" "}
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="mt-10">
            <BlogContent content={post.content} />
          </div>

          <div className="mt-12 rounded-3xl bg-brand-purple-light p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-brand-charcoal">
              Ready to start learning in Aligarh?
            </h2>
            <p className="mt-2 text-sm text-brand-grey">
              Explore AI, Python, and web development courses at Brandsway Skills.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="inline-flex min-h-[44px] items-center rounded-full bg-brand-purple px-5 py-2.5 text-sm font-bold text-white"
              >
                View Courses
              </Link>
              <Link
                to="/#contact"
                className="inline-flex min-h-[44px] items-center rounded-full border border-brand-purple/20 bg-white px-5 py-2.5 text-sm font-bold text-brand-purple"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </motion.article>
      </main>

      <Footer />
      <FloatingActionButton />
    </PageShell>
  );
}
