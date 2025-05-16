"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  HelpCircle,
  Home,
  Menu,
  Music,
  Settings,
  PenToolIcon as Tool,
  User,
  DollarSign,
  Megaphone,
  Sparkles,
  Boxes,
  Users,
} from "lucide-react"
import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function MainSidebar() {
  const pathname = usePathname()
  const { expanded, setExpanded } = useSidebar()

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "My Music", icon: Music, path: "/music" },
    { name: "Earnings", icon: DollarSign, path: "/earnings" },
    { name: "Analytics Pro", icon: BarChart3, path: "/analytics" },
    { name: "Marketing Hub", icon: Megaphone, path: "/marketing" },
    { name: "Social", icon: Users, path: "/social" },
    { name: "Web3 Hub", icon: Boxes, path: "/web3" },
    { name: "Tools", icon: Tool, path: "/tools" },
    { name: "Opportunities", icon: Sparkles, path: "/opportunities" },
    { name: "Account", icon: User, path: "/account" },
    { name: "Help", icon: HelpCircle, path: "/help" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ]

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-background transition-all duration-300",
        expanded ? "w-64" : "w-16",
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        {expanded ? (
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="h-8 w-8 rounded-md bg-brand flex items-center justify-center text-white font-bold">MB</div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-light">
              MUSIC BASE
            </span>
          </Link>
        ) : (
          <Link href="/" className="mx-auto">
            <div className="h-8 w-8 rounded-md bg-brand flex items-center justify-center text-white font-bold">MB</div>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className={cn("h-8 w-8", !expanded && "mx-auto")}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <nav className="flex-1 space-y-1 p-2">
        <TooltipProvider delayDuration={0}>
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.path)
            return (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.path}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-brand text-brand-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {expanded && <span>{item.name}</span>}
                  </Link>
                </TooltipTrigger>
                {!expanded && <TooltipContent side="right">{item.name}</TooltipContent>}
              </Tooltip>
            )
          })}
        </TooltipProvider>
      </nav>
      <div className="border-t p-2"></div>
    </div>
  )
}
