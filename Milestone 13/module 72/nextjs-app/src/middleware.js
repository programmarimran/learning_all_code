import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;

  // path check
  if (url.pathname.startsWith("/product/")) {
    // যেকোনো details page হলে redirect করে দেবে
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/product/:path*"], // শুধু product/[id] এর জন্য middleware চলবে not mioddewlear
};
