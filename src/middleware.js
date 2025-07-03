// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log(`[Middleware] Path: ${pathname}`);

  // Split the path into segments
  const segments = pathname.split('/').filter(Boolean);

  // Determine the actual path and optional locale
  let locale = null;
  let path = pathname;

  // Check if the first segment looks like a locale (e.g. 'en', 'ur')
  if (['en', 'ur', ].includes(segments[0])) {
    locale = segments[0];
    path = '/' + segments.slice(1).join('/');
  }

  // ✅ Check if the path (with or without locale) is protected
  if (path === '/dashboard') {
    const isAuthenticated = request.cookies.get('user_logged_in');

    if (!isAuthenticated) {
      console.log('[Middleware] Not authenticated. Redirecting to login.');

      // Redirect to the correct login page
      const loginPath = locale ? `/${locale}/login` : '/login';
      return NextResponse.redirect(new URL(loginPath, request.url));
    }

    console.log('[Middleware] Authenticated. Access granted.');
  }

  return NextResponse.next();
}

// ✅ Match both localized and non-localized routes
export const config = {
  matcher: ['/dashboard', '/(en|ur|de)/dashboard'],
};
