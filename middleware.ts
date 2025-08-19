import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(req: NextRequest) {
  const url = new URL(req.url)
  const pass = url.searchParams.get('pw')
  if (process.env.PREVIEW_PASS && pass !== process.env.PREVIEW_PASS) {
    return new NextResponse('Protected preview. Append ?pw=YOURPASS', { status: 401 })
  }
  return NextResponse.next()
}
export const config = { matcher: ['/:path*'] }