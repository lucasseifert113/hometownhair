import { NextRequest, NextResponse } from 'next/server';

/**
 * Emergency middleware: Return 410 Gone for all routes
 * 
 * Reason: Mock site was ranking on Google and confusing customers.
 * This permanently removes all public access.
 * 
 * Status: 410 Gone (resource permanently gone)
 * Headers: X-Robots-Tag: noindex, noarchive, nosnippet
 * 
 * Deployed: 2026-05-19 01:15 UTC
 * Note: Real site will be rebuilt and deployed separately
 */

export function middleware(request: NextRequest) {
  return new NextResponse('This preview site has been removed.', {
    status: 410,
    headers: {
      'Content-Type': 'text/plain',
      'X-Robots-Tag': 'noindex, noarchive, nosnippet',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

export const config = {
  matcher: '/:path*',
};
