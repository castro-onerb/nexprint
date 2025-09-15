import { NextRequest, NextResponse } from 'next/server';

const publicRoutes = [
  { path: '/login', whenAuthenticated: 'redirect' },
  { path: '/landing', whenAuthenticated: 'next' },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/login';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((r) => r.path === path);
  const token = request.cookies.get('session_token');

  if (!token && publicRoute) {
    return NextResponse.next();
  }

  if (!token && !publicRoute) {
    const redirect = request.nextUrl.clone();
    redirect.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirect);
  }

  if (token && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
    const redirect = request.nextUrl.clone();
    redirect.pathname = '/city';
    return NextResponse.redirect(redirect);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static|.*\\..*).*)'],
};
