import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import { DEFAULT_LOGIN_REDIRECT, apiAuthRoutes, authRoutes, publicRoutes } from "./routes"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

const {auth} = NextAuth(authConfig)

export default auth((req) => {
  const {nextUrl} = req
  const isLoggedIn = !!req.auth //BOOLEAN;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthRoutes)

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if(isApiAuthRoute){
    return null;
  }

  if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null;
  }

  if(!isLoggedIn /*LOGGED OUT USER */ && !isPublicRoute){
    return Response.redirect(new URL("/sign-in", nextUrl))    //REDIRECT TO LOGIN PAGE IF NOT AUTHENTIC
  }
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}