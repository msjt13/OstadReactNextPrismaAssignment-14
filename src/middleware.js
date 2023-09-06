import {checkCookieAuth} from "@/utility/MiddlewareHelper";
import {NextResponse} from "next/server";

export async function middleware(req, res, next) {
  if(req.nextUrl.pathname.startsWith('/dashboard')) {
      const payload = await checkCookieAuth(req);
      if (!payload) return NextResponse.redirect(new URL('/register', req.url));
      req.user = payload;
  }

  NextResponse.next();
}