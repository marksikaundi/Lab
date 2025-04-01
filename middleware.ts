import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Custom middleware function without relying on Clerk exports
export default function middleware(req: NextRequest) {
  // Public routes that don't require authentication
  const publicRoutes = ["/", "/sign-in", "/sign-up", "/api", "/workshops", "/courses"]

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(
    (route) => req.nextUrl.pathname === route || req.nextUrl.pathname.startsWith(`${route}/`),
  )

  // If it's a public route, allow access
  if (isPublicRoute) {
    return NextResponse.next()
  }

  // For admin routes, use the existing cookie-based authentication
  if (req.nextUrl.pathname.startsWith("/admin")) {
    // Get the admin token from the cookie
    const adminToken = req.cookies.get("admin_token")?.value

    // If there's no token or it doesn't match the expected value, redirect to login
    if (!adminToken || adminToken !== "your-secure-admin-token") {
      // If trying to access the login page without a token, that's allowed
      if (req.nextUrl.pathname === "/admin/login") {
        return NextResponse.next()
      }

      // Otherwise redirect to the login page
      return NextResponse.redirect(new URL("/admin/login", req.url))
    }

    return NextResponse.next()
  }

  // For protected routes like dashboard, check if user is authenticated via Clerk
  // by checking for the __session cookie
  const hasClerkSession = req.cookies.has("__session")

  if (!hasClerkSession) {
    // If no session, redirect to sign-in with the return URL
    const signInUrl = new URL("/sign-in", req.url)
    signInUrl.searchParams.set("redirect_url", req.nextUrl.pathname)
    return NextResponse.redirect(signInUrl)
  }

  // If authenticated, allow access
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}

