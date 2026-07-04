import { useEffect } from "react";
import { SITE_URL, DEFAULT_OG_IMAGE } from "../data/site";

function upsertMeta(selector, attributes) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== "content") element.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  if (attributes.content) element.setAttribute("content", attributes.content);
  return element;
}

function upsertLink(rel, href) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
  return element;
}

export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  jsonLd = null,
}) {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content");

    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Brandsway Skills",
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noindex ? "noindex, nofollow" : "index, follow",
    });
    upsertLink("canonical", url);

    let script = document.getElementById("json-ld-seo");
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = "json-ld-seo";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        upsertMeta('meta[name="description"]', {
          name: "description",
          content: previousDescription,
        });
      }
      document.getElementById("json-ld-seo")?.remove();
    };
  }, [title, description, url, image, type, noindex, jsonLd]);

  return null;
}
