import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export const loginOAuth = async (provider: "github" | "google") => {
    await signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
}