import authConfig from "@/auth.config"
import NextAuth from "next-auth"

const {auth} = NextAuth(authConfig)

export default auth((req) => {
  const {nextUrl} = req
  const isLoggedIn = !!req.auth //BOOLEAN;

  const isApiAuthRoute = 

  if(!isLoggedIn && )
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}