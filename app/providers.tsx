"use client"

import { AuthUIProvider } from "@daveyplate/better-auth-ui"
import { Link, useRouter } from "@tanstack/react-router"
import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

import { authClient } from "@/lib/auth-client"

export function Providers({ children }: { children: ReactNode }) {
    const router = useRouter()

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            themeColor={{
                light: "oklch(1 0 0)",
                dark: "oklch(0.145 0 0)"
            }}
        >
            <AuthUIProvider
                authClient={authClient}
                navigate={(href) => router.navigate({ href })}
                replace={(href) => router.navigate({ href, replace: true })}
                LinkComponent={({ href, to, ...props }) => <Link to={href} {...props} />}
            >
                {children}
            </AuthUIProvider>
        </ThemeProvider>
    )
}
