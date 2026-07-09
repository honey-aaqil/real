import { NextResponse } from "next/server";

/**
 * Preview-access unlock endpoint. The PIN lives only here (server-side) —
 * it is never shipped in the client bundle. On a correct PIN we set the
 * httpOnly cookie that src/proxy.ts checks on every page request.
 */

const PREVIEW_PIN = "0987";
const ACCESS_COOKIE = "sp-preview-access";
const ACCESS_VALUE = "granted";
const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function POST(request: Request) {
  const { pin } = await request
    .json()
    .catch(() => ({ pin: "" }) as { pin?: string });

  if (pin !== PREVIEW_PIN) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: ACCESS_COOKIE,
    value: ACCESS_VALUE,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: THIRTY_DAYS,
  });
  return response;
}
