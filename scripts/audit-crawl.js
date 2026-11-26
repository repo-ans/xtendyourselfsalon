// Lightweight DOM-free crawler for the production build.
// Checks: title, h1 count, images/missing-alt, canonical, schema types,
// tel/sms links present, and whether the HTML byte size looks sane.
const BASE = process.env.AUDIT_BASE || "http://localhost:3001";

const pages = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/contact-us",
  "/experience",
  "/privacy-policy",
  "/terms-and-conditions",
];

function count(re, html) {
  return (html.match(re) || []).length;
}

async function auditPage(path) {
  const res = await fetch(BASE + path);
  const html = await res.text();

  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const title = titleMatch ? titleMatch[1] : "(none)";

  const h1Count = count(/<h1[\s>]/g, html);

  const imgTags = html.match(/<img\b[^>]*>/g) || [];
  const imagesMissingAlt = imgTags.filter((tag) => !/\salt="/i.test(tag)).length;
  const imagesEmptyAlt = imgTags.filter((tag) => /\salt=""/i.test(tag)).length;

  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
  const canonical = canonicalMatch ? canonicalMatch[1] : "(missing)";

  const ogImage = /property="og:image"/.test(html);
  const ogTitle = /property="og:title"/.test(html);
  const twitterCard = /name="twitter:card"/.test(html);

  const ldJsonBlocks = html.match(/<script type="application\/ld\+json">([^<]*)<\/script>/g) || [];
  const schemaTypes = ldJsonBlocks
    .map((block) => {
      const m = block.match(/"@type":"([^"]+)"/);
      return m ? m[1] : "unknown";
    })
    .join(", ") || "(none)";

  const telLinks = count(/href="tel:\+?[\d]+"/g, html);
  const smsLinks = count(/href="sms:\+?[\d]+"/g, html);
  const glossGenius = /glossgenius/i.test(html);

  const htmlLangOk = /<html[^>]*\slang="en"/.test(html);

  return {
    path,
    status: res.status,
    title,
    h1Count,
    images: imgTags.length,
    imagesMissingAlt,
    imagesEmptyAlt,
    canonical,
    ogImage,
    ogTitle,
    twitterCard,
    schemaTypes,
    telLinks,
    smsLinks,
    glossGenius,
    htmlLangOk,
  };
}

(async () => {
  const results = [];
  for (const p of pages) {
    try {
      results.push(await auditPage(p));
    } catch (e) {
      results.push({ path: p, error: String(e) });
    }
  }
  console.log(JSON.stringify(results, null, 2));
})();
