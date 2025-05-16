"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  BarChart3,
  CircleDollarSign,
  Cog,
  Headphones,
  HelpCircle,
  Home,
  Lightbulb,
  Menu,
  Music2,
  Sparkles,
  User,
  Boxes,
  LogOut,
  Upload,
  ListMusic,
  Disc3,
  Zap,
  Megaphone,
  Share2,
  FileText,
  Settings,
  Bell,
  ChevronDown,
  ChevronUp,
  Globe,
  Calendar,
  Layers,
  PieChart,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Shield,
  CreditCard,
  Clock,
  MessageSquare,
  BookOpen,
  LifeBuoy,
  Trophy,
  Video,
  X,
  Heart,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMobile } from "@/hooks/use-mobile"

export function MusicBaseSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(true)
  const isMobile = useMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Check if we're on mobile and adjust sidebar
  useEffect(() => {
    if (isMobile) {
      setExpanded(false)
    } else {
      setExpanded(true)
    }
  }, [isMobile])

  const navigationItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/",
    },
    {
      title: "My Music",
      icon: Music2,
      href: "/music",
      subItems: [
        { title: "Catalog", icon: ListMusic, href: "/music" },
        { title: "Upload", icon: Upload, href: "/music/upload" },
        { title: "Track Details", icon: FileText, href: "/music/upload/track-details" },
        { title: "Metadata", icon: Layers, href: "/music/upload/metadata" },
        { title: "Distribution", icon: Globe, href: "/music/upload/distribution" },
        { title: "Releases", icon: Disc3, href: "/releases" },
      ],
    },
    {
      title: "Earnings",
      icon: CircleDollarSign,
      href: "/earnings",
      subItems: [
        { title: "Overview", icon: PieChart, href: "/earnings" },
        { title: "Royalty Splits", icon: Users, href: "/earnings/royalty-splits" },
        { title: "Payment History", icon: Clock, href: "/earnings/history" },
        { title: "Tax Info", icon: FileText, href: "/earnings/tax" },
      ],
    },
    {
      title: "Analytics Pro",
      icon: BarChart3,
      href: "/analytics",
      subItems: [
        { title: "Overview", icon: TrendingUp, href: "/analytics" },
        { title: "Audience", icon: Users, href: "/analytics/audience" },
        { title: "Performance", icon: Target, href: "/analytics/performance" },
        { title: "Reports", icon: FileText, href: "/analytics/reports" },
      ],
    },
    {
      title: "Marketing Hub",
      icon: Sparkles,
      href: "/marketing",
      subItems: [
        { title: "Smart Links", icon: Share2, href: "/marketing/smart-links" },
        { title: "Promotion", icon: Megaphone, href: "/marketing/promotion" },
        { title: "Social Media", icon: Globe, href: "/marketing/social" },
        { title: "Campaigns", icon: Target, href: "/marketing/campaigns" },
        { title: "Release Planner", icon: Calendar, href: "/marketing/planner" },
      ],
    },
    {
      title: "Social",
      icon: Users,
      href: "/social",
      subItems: [
        { title: "Feed", icon: ListMusic, href: "/social" },
        { title: "My Profile", icon: User, href: "/social/artistname" },
        { title: "Discover", icon: Globe, href: "/social/discover" },
        { title: "Notifications", icon: Bell, href: "/social/notifications" },
        { title: "Saved Posts", icon: Heart, href: "/social/saved" },
      ],
      isNew: true,
    },
    {
      title: "Web3 Hub",
      icon: Boxes,
      href: "/web3",
      subItems: [
        { title: "Dashboard", icon: Home, href: "/web3" },
        { title: "Mint NFT", icon: Disc3, href: "/web3/mint" },
        { title: "Manage NFTs", icon: ListMusic, href: "/web3/manage" },
        { title: "Royalties", icon: CircleDollarSign, href: "/web3/royalties" },
        { title: "Wallet", icon: Wallet, href: "/web3/wallet" },
        { title: "Marketplace", icon: Globe, href: "/web3/marketplace" },
      ],
      isNew: true,
    },
    {
      title: "Tools",
      icon: Cog,
      href: "/tools",
      subItems: [
        { title: "Distribution", icon: Share2, href: "/tools/distribution" },
        { title: "Contracts", icon: FileText, href: "/tools/contracts" },
        { title: "Settings", icon: Settings, href: "/tools/settings" },
        { title: "API Access", icon: Shield, href: "/tools/api" },
        { title: "Integrations", icon: Layers, href: "/tools/integrations" },
      ],
    },
    {
      title: "Opportunities",
      icon: Lightbulb,
      href: "/opportunities",
      subItems: [
        { title: "All Opportunities", icon: Lightbulb, href: "/opportunities" },
        { title: "Collaborations", icon: Users, href: "/opportunities/collaborations" },
        { title: "Sync Licensing", icon: Music2, href: "/opportunities/sync" },
        { title: "Contests", icon: Trophy, href: "/opportunities/contests" },
        { title: "Grants", icon: CircleDollarSign, href: "/opportunities/grants" },
      ],
    },
    {
      title: "Account",
      icon: User,
      href: "/account",
      subItems: [
        { title: "Profile", icon: User, href: "/account" },
        { title: "Subscription", icon: Zap, href: "/account?tab=subscription" },
        { title: "Payment Methods", icon: CreditCard, href: "/account?tab=payment" },
        { title: "Security", icon: Shield, href: "/account?tab=security" },
        { title: "Notifications", icon: Bell, href: "/account?tab=notifications" },
      ],
    },
    {
      title: "Help",
      icon: HelpCircle,
      href: "/help",
      subItems: [
        { title: "Support Center", icon: LifeBuoy, href: "/help" },
        { title: "Documentation", icon: BookOpen, href: "/help/docs" },
        { title: "Tutorials", icon: Video, href: "/help/tutorials" },
        { title: "Contact Support", icon: MessageSquare, href: "/help/contact" },
        { title: "FAQ", icon: HelpCircle, href: "/help/faq" },
      ],
    },
  ]

  // Function to check if a path is active
  const isActive = (href: string, pathname: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    // More specific matching to ensure correct active state
    return pathname === href || pathname.startsWith(href + "/")
  }

  // Function to toggle submenu
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({})

  // Initialize open submenus based on current path
  useEffect(() => {
    const initialOpenSubMenus: Record<string, boolean> = {}
    navigationItems.forEach((item) => {
      if (item.subItems && isActive(item.href, pathname)) {
        initialOpenSubMenus[item.title] = true
      }
    })
    setOpenSubMenus(initialOpenSubMenus)
  }, [pathname])

  const toggleSubMenu = (title: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault() // Prevent navigation when toggling
      e.stopPropagation() // Prevent event bubbling
    }

    setOpenSubMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  // Get current page title
  const getCurrentPageTitle = () => {
    // First check if we're on a subpage
    for (const item of navigationItems) {
      if (item.subItems) {
        const subItem = item.subItems.find(
          (sub) =>
            sub.href === pathname ||
            (pathname.includes("?tab=") && sub.href === pathname.split("?")[0]) ||
            (sub.href !== "/" && pathname.startsWith(sub.href + "/")),
        )
        if (subItem) return subItem.title
      }
    }

    // Then check main pages
    const mainItem = navigationItems.find(
      (item) => item.href === pathname || (item.href !== "/" && pathname.startsWith(item.href + "/")),
    )
    return mainItem?.title || "Dashboard"
  }

  // Mobile navigation items (simplified for bottom nav)
  const mobileNavItems = [
    { title: "Home", icon: Home, href: "/" },
    { title: "Music", icon: Music2, href: "/music" },
    { title: "Social", icon: Users, href: "/social" },
    { title: "Upload", icon: Upload, href: "/music/upload" },
    { title: "Account", icon: User, href: "/account" },
  ]

  // Ensure all navigation paths exist
  useEffect(() => {
    // This effect ensures that all navigation paths are valid
    // In a real app, you would check if the routes exist or create them dynamically
    console.log("Navigation paths initialized")
  }, [])

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar - Hidden on mobile */}
      {!isMobile && (
        <motion.div
          className={cn(
            "hidden md:flex h-full flex-col border-r border-border bg-card z-30",
            expanded ? "w-64" : "w-20",
          )}
          animate={{ width: expanded ? "16rem" : "5rem" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {/* Logo */}
          <div className="flex h-16 items-center justify-between border-b border-border px-4">
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.div
                  key="full-logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary">
                    <Headphones className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                    MUSIC BASE
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="icon-logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto"
                >
                  <Headphones className="h-5 w-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setExpanded(!expanded)}
              className={cn("h-8 w-8", !expanded && "absolute right-3")}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <TooltipProvider delayDuration={0}>
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  const active = isActive(item.href, pathname)
                  const hasSubItems = item.subItems && item.subItems.length > 0
                  const isSubMenuOpen = openSubMenus[item.title]

                  return (
                    <div key={item.title} className="relative" data-active={active ? "true" : "false"}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          {hasSubItems ? (
                            <button
                              onClick={(e) => toggleSubMenu(item.title, e)}
                              className={cn(
                                "w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-muted group relative overflow-hidden",
                                active ? "bg-primary/10 text-primary" : "text-muted-foreground",
                              )}
                            >
                              <item.icon className={cn("h-5 w-5 flex-shrink-0", active && "text-primary")} />

                              <AnimatePresence mode="wait">
                                {expanded && (
                                  <motion.span
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="whitespace-nowrap flex-1 text-left"
                                  >
                                    {item.title}
                                  </motion.span>
                                )}
                              </AnimatePresence>

                              {item.isNew && expanded && (
                                <Badge className="ml-auto bg-brand-primary text-white text-xs">New</Badge>
                              )}

                              {expanded &&
                                hasSubItems &&
                                (isSubMenuOpen ? (
                                  <ChevronUp className="h-4 w-4 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
                                ))}
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-muted group relative overflow-hidden",
                                active ? "bg-primary/10 text-primary" : "text-muted-foreground",
                              )}
                              onClick={() => {
                                // Ensure navigation works correctly
                                if (isMobile) {
                                  setMobileMenuOpen(false)
                                }
                              }}
                            >
                              <item.icon className={cn("h-5 w-5 flex-shrink-0", active && "text-primary")} />

                              <AnimatePresence mode="wait">
                                {expanded && (
                                  <motion.span
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="whitespace-nowrap"
                                  >
                                    {item.title}
                                  </motion.span>
                                )}
                              </AnimatePresence>

                              {item.isNew && expanded && (
                                <Badge className="ml-auto bg-brand-primary text-white text-xs">New</Badge>
                              )}
                            </Link>
                          )}
                        </TooltipTrigger>
                        {!expanded && (
                          <TooltipContent side="right" className="flex items-center gap-2">
                            {item.title}
                            {item.isNew && <Badge className="bg-brand-primary text-white text-xs">New</Badge>}
                          </TooltipContent>
                        )}
                      </Tooltip>

                      {/* Submenu */}
                      {hasSubItems && expanded && (
                        <AnimatePresence>
                          {isSubMenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-10 pr-2 mt-1 space-y-1"
                            >
                              {item.subItems.map((subItem) => {
                                const subActive =
                                  subItem.href === pathname ||
                                  (pathname.includes("?tab=") && subItem.href === pathname.split("?")[0]) ||
                                  (subItem.href !== "/" && pathname.startsWith(subItem.href + "/"))

                                return (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    className={cn(
                                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                                      subActive
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                    )}
                                    onClick={() => {
                                      // Ensure navigation works correctly
                                      if (isMobile) {
                                        setMobileMenuOpen(false)
                                      }
                                    }}
                                  >
                                    <subItem.icon className="h-4 w-4" />
                                    <span>{subItem.title}</span>
                                  </Link>
                                )
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  )
                })}
              </nav>
            </TooltipProvider>
          </div>

          {/* User Profile */}
          <div className="border-t border-border p-4">
            <TooltipProvider delayDuration={0}>
              <div className="flex items-center justify-between">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div
                          className={cn(
                            "flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted cursor-pointer",
                            expanded ? "justify-start" : "justify-center",
                          )}
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/abstract-geometric-shapes.png" alt="User" />
                            <AvatarFallback className="bg-brand-primary text-white">MB</AvatarFallback>
                          </Avatar>

                          <AnimatePresence mode="wait">
                            {expanded && (
                              <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col"
                              >
                                <span className="text-sm font-medium">Artist Name</span>
                                <span className="text-xs text-muted-foreground">Pro Account</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link href="/account">
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/account?tab=subscription">
                            <Zap className="mr-2 h-4 w-4" />
                            <span>Subscription</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/account?tab=payment">
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Payment Methods</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/account?tab=security">
                            <Shield className="mr-2 h-4 w-4" />
                            <span>Security</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/account?tab=notifications">
                            <Bell className="mr-2 h-4 w-4" />
                            <span>Notifications</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log out</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TooltipTrigger>
                  {!expanded && (
                    <TooltipContent side="right">
                      <div className="flex flex-col">
                        <span className="font-medium">Artist Name</span>
                        <span className="text-xs text-muted-foreground">Pro Account</span>
                      </div>
                    </TooltipContent>
                  )}
                </Tooltip>

                {expanded && <ThemeToggle />}
              </div>
            </TooltipProvider>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            {/* Mobile Menu Button */}
            {isMobile && (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[85%] max-w-[350px] p-0">
                  <SheetHeader className="border-b border-border p-4">
                    <SheetTitle className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary">
                        <Headphones className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                        MUSIC BASE
                      </span>
                      <SheetClose className="ml-auto">
                        <X className="h-4 w-4" />
                      </SheetClose>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-border">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/abstract-geometric-shapes.png" alt="User" />
                          <AvatarFallback className="bg-brand-primary text-white">MB</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-medium">Artist Name</span>
                          <span className="text-xs text-muted-foreground">Pro Account</span>
                        </div>
                        <ThemeToggle className="ml-auto" />
                      </div>
                    </div>
                    <ScrollArea className="flex-1 p-4">
                      <nav className="space-y-1">
                        {navigationItems.map((item) => {
                          const active = isActive(item.href, pathname)
                          const hasSubItems = item.subItems && item.subItems.length > 0
                          const isSubMenuOpen = openSubMenus[item.title]

                          return (
                            <div key={item.title} className="relative" data-active={active ? "true" : "false"}>
                              {hasSubItems ? (
                                <button
                                  onClick={(e) => toggleSubMenu(item.title, e)}
                                  className={cn(
                                    "w-full flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 hover:bg-muted group relative overflow-hidden",
                                    active ? "bg-primary/10 text-primary" : "text-muted-foreground",
                                  )}
                                >
                                  <item.icon className={cn("h-5 w-5 flex-shrink-0", active && "text-primary")} />
                                  <span className="whitespace-nowrap flex-1 text-left">{item.title}</span>
                                  {item.isNew && (
                                    <Badge className="ml-auto bg-brand-primary text-white text-xs">New</Badge>
                                  )}
                                  {hasSubItems &&
                                    (isSubMenuOpen ? (
                                      <ChevronUp className="h-4 w-4 flex-shrink-0" />
                                    ) : (
                                      <ChevronDown className="h-4 w-4 flex-shrink-0" />
                                    ))}
                                </button>
                              ) : (
                                <SheetClose asChild>
                                  <Link
                                    href={item.href}
                                    className={cn(
                                      "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 hover:bg-muted group relative overflow-hidden",
                                      active ? "bg-primary/10 text-primary" : "text-muted-foreground",
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <item.icon className={cn("h-5 w-5 flex-shrink-0", active && "text-primary")} />
                                    <span className="whitespace-nowrap">{item.title}</span>
                                    {item.isNew && (
                                      <Badge className="ml-auto bg-brand-primary text-white text-xs">New</Badge>
                                    )}
                                  </Link>
                                </SheetClose>
                              )}

                              {/* Submenu */}
                              {hasSubItems && (
                                <AnimatePresence>
                                  {isSubMenuOpen && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="pl-10 pr-2 mt-1 space-y-1"
                                    >
                                      {item.subItems.map((subItem) => {
                                        const subActive =
                                          subItem.href === pathname ||
                                          (pathname.includes("?tab=") && subItem.href === pathname.split("?")[0]) ||
                                          (subItem.href !== "/" && pathname.startsWith(subItem.href + "/"))

                                        return (
                                          <SheetClose key={subItem.title} asChild>
                                            <Link
                                              href={subItem.href}
                                              onClick={() => setMobileMenuOpen(false)}
                                              className={cn(
                                                "flex items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors",
                                                subActive
                                                  ? "bg-primary/10 text-primary font-medium"
                                                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                              )}
                                            >
                                              <subItem.icon className="h-4 w-4" />
                                              <span>{subItem.title}</span>
                                            </Link>
                                          </SheetClose>
                                        )
                                      })}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              )}
                            </div>
                          )
                        })}
                      </nav>
                    </ScrollArea>
                    <div className="border-t border-border p-4">
                      <Button variant="outline" className="w-full" size="sm">
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}

            <div className="flex items-center gap-2">
              {isMobile ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary">
                  <Headphones className="h-4 w-4 text-white" />
                </div>
              ) : null}
              <h1 className="text-xl font-semibold">{getCurrentPageTitle()}</h1>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              {!isMobile && !expanded && <ThemeToggle />}

              {/* Notifications - Simplified on mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-[10px] text-white">
                      3
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[280px] md:w-80">
                  <DropdownMenuLabel className="flex items-center justify-between">
                    <span>Notifications</span>
                    <Button variant="ghost" size="sm" className="h-auto text-xs px-2">
                      Mark all as read
                    </Button>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-[60vh] md:max-h-80 overflow-y-auto">
                    <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                      <div className="flex w-full items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-brand-primary" />
                        <span className="font-medium flex-1">New release approved</span>
                        <span className="text-xs text-muted-foreground">2h ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your release "Summer Vibes" has been approved and is now live on all platforms.
                      </p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                      <div className="flex w-full items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-brand-primary" />
                        <span className="font-medium flex-1">Royalty payment received</span>
                        <span className="text-xs text-muted-foreground">1d ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        You received a royalty payment of $245.32 for April 2023.
                      </p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                      <div className="flex w-full items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-brand-primary" />
                        <span className="font-medium flex-1">New collaboration opportunity</span>
                        <span className="text-xs text-muted-foreground">2d ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Artist "Electronic Dreams" wants to collaborate on a new track.
                      </p>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="justify-center text-center">
                    <Link href="/account?tab=notifications" className="w-full text-sm text-primary">
                      View all notifications
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Support button - Hidden on small mobile */}
              <Button variant="outline" size="sm" asChild className="hidden sm:flex">
                <Link href="/help">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Support
                </Link>
              </Button>

              {/* Upload button */}
              <Button
                className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 transition-opacity"
                size="sm"
                asChild
              >
                <Link href="/music/upload">
                  <Upload className={cn("h-4 w-4", isMobile ? "" : "mr-2")} />
                  {!isMobile && <span>Upload Music</span>}
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content Area - Updated for consistent spacing */}
        <main className="flex-1 overflow-y-auto">{children}</main>

        {/* Mobile Bottom Navigation */}
        {isMobile && (
          <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-card/95 backdrop-blur-sm z-40">
            <div className="flex items-center justify-around h-16">
              {mobileNavItems.map((item) => {
                const active = isActive(item.href, pathname)
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "flex flex-col items-center justify-center w-full h-full text-xs font-medium transition-colors",
                      active ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    <item.icon className={cn("h-5 w-5 mb-1", active && "text-primary")} />
                    <span>{item.title}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
