import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Default: allow every crawler, including AI/LLM crawlers (GPTBot,
        // ClaudeBot, Google-Extended, PerplexityBot, CCBot, etc.) — the
        // client wants AI search visibility. Flagged for confirmation;
        // switch this to `disallow: "/"` per-agent if that changes.
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
