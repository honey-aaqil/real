import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Pre-launch gate. Every page redirects to the /coming-soon landing page
 * until the visitor unlocks the site with the preview PIN (see
 * src/app/api/unlock/route.ts, which sets this cookie after verifying).
 *
 * This is a soft launch gate, not security — the PIN check happens
 * server-side and the cookie is httpOnly, but anyone you share the PIN
 * with can pass it on.
 */

const ACCESS_COOKIE = "sp-preview-access";
const ACCESS_VALUE = "granted";
const GATE_PATH = "/coming-soon";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const unlocked = request.cookies.get(ACCESS_COOKIE)?.value === ACCESS_VALUE;
  const isGate = pathname === GATE_PATH || pathname === `${GATE_PATH}/`;

  if (!unlocked && !isGate) {
    return NextResponse.redirect(new URL(`${GATE_PATH}/`, request.url));
  }

  // Already unlocked — no reason to sit on the gate page.
  if (unlocked && isGate) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  /*
   * Run on every page route, but skip:
   *  - /api (the unlock endpoint must stay reachable)
   *  - Next internals (_next/static, _next/image)
   *  - favicon and any path with a file extension (public/ assets like
   *    /images/... must load for the gate page itself)
   */
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
