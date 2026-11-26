import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Netlify serves the same build on *.netlify.app and the final custom
// domain. Keep the preview subdomain out of search results without
// touching the production domain's indexing.
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const response = NextResponse.next();

  if (host.endsWith(".netlify.app")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: "/:path*",
};
