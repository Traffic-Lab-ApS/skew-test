import { next } from '@vercel/edge'

export default function middleware(request: Request) {
  const headers = new Headers()
  if (process.env.VERCEL_SKEW_PROTECTION_ENABLED === '1') {
    headers.set(
      'Set-Cookie',
      `__vdpl=${process.env.VERCEL_DEPLOYMENT_ID}; HttpOnly`
    )
  }
  return next({ headers })
}

export const config = {
  matcher: ['/((?!_astro|api|_static|favicon.ico).*)'],
}
