import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // 🔒 Auth protection for dashboard (optional)
  if (pathname.match(/^\/(en|ur)?\/dashboard$/)) {
    const isAuthenticated = request.cookies.get('user_logged_in');
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL(`/${getLocaleFromPath(pathname)}/login`, request.url));
    }
  }

  // 🌐 Default locale redirect
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}`; // e.g. '/en'
    return NextResponse.redirect(url);
  }

  // 🌍 All other i18n behavior
  return intlMiddleware(request);
}

function getLocaleFromPath(pathname) {
  const match = pathname.match(/^\/(en|ur)/);
  return match?.[1] || routing.defaultLocale;
}

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|api|trpc|.*\\..*).*)', // Match everything except these
  ]
};
