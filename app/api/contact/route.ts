import { NextResponse } from "next/server";

// TODO: wire this up to a real email/notification service (e.g. Resend, Postmark,
// or a Google Sheet) before launch. For now it just validates and logs the submission
// so the form works end-to-end in development.
export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body as Record<string, string>;

  if (!name || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  console.log("New contact form submission:", body);
  void message;

  return NextResponse.json({ ok: true });
}
