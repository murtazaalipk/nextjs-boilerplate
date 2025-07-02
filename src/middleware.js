// my-login-cookie-demo/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const currentPath = request.nextUrl.pathname;
  console.log(`[Middleware] Path: ${currentPath}`);

  // Check if the request is for the /dashboard path
  if (currentPath === '/dashboard') {
    // Check for our authentication cookie named 'user_logged_in'
    const isAuthenticated = request.cookies.get('user_logged_in');

    if (!isAuthenticated) {
      console.log('[Middleware] Not authenticated for /dashboard. Redirecting to /login.');
      // Redirect to the login page if the cookie is not present
      return NextResponse.redirect(new URL('/login', request.url));
    } else {
      console.log('[Middleware] Authenticated for /dashboard. Allowing access.');
    }
  }

  // Allow all other requests (or authenticated dashboard requests) to proceed
  return NextResponse.next();
}

// Configure the middleware to run only for the /dashboard path
export const config = {
  matcher: ['/dashboard'],
};