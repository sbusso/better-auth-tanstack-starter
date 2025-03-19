import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router"
import type { ReactNode } from "react"

import { Header } from "@/components/header"
import globalsCss from "@/styles/globals.css?url"
import { Providers } from "../providers"

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                title: "Better Auth TanStack Start Starter"
            }
        ],
        links: [{ rel: "stylesheet", href: globalsCss }]
    }),
    component: RootComponent
})

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>

            <body>
                <Providers>
                    <div className="flex min-h-svh flex-col">
                        <Header />

                        {children}
                    </div>
                </Providers>

                <Scripts />
            </body>
        </html>
    )
}
