import type React from "react"
import { MusicBaseSidebar } from "@/components/music-base-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Music Base - Music Distribution Dashboard",
  description: "A comprehensive dashboard for music distribution and analytics",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MusicBaseSidebar>{children}</MusicBaseSidebar>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
