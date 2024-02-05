import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import { apiAuthRoutes, authRoutes, publicRoutes } from "./routes"

const {auth} = NextAuth(authConfig)

export default auth((req) => {
  const {nextUrl} = req
  const isLoggedIn = !!req.auth //BOOLEAN;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthRoutes)

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if(!isLoggedIn && )
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}