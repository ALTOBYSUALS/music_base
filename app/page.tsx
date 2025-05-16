"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Music,
  BarChart3,
  CircleDollarSign,
  Boxes,
  Play,
  Headphones,
  TrendingUp,
  Users,
  Globe,
  Clock,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useMobile } from "@/hooks/use-mobile"

// Sample data for charts
const streamData = [
  { name: "Apr 1", value: 400 },
  { name: "Apr 8", value: 600 },
  { name: "Apr 15", value: 500 },
  { name: "Apr 22", value: 700 },
  { name: "Apr 29", value: 800 },
  { name: "May 6", value: 1000 },
  { name: "May 13", value: 950 },
  { name: "May 20", value: 1200 },
  { name: "May 27", value: 1100 },
]

const recentReleases = [
  {
    id: 1,
    title: "Midnight Dreams",
    coverArt: "/electronic-album-cover.png",
    status: "Live In Stores",
    streams: 12500,
  },
  {
    id: 2,
    title: "Urban Vibes",
    coverArt: "/hip-hop-album-cover.png",
    status: "Live In Stores",
    streams: 8700,
  },
  {
    id: 3,
    title: "Acoustic Sessions",
    coverArt: "/indie-album-cover.png",
    status: "In Review",
    streams: 0,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const isMobile = useMobile()

  // Get current time to display appropriate greeting
  const currentHour = new Date().getHours()
  let greeting = "Good evening"
  if (currentHour < 12) greeting = "Good morning"
  else if (currentHour < 18) greeting = "Good afternoon"

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="py-4 px-4 md:py-6 md:px-6 lg:px-8 space-y-6 animate-fade-in">
        {/* Welcome Section */}
        <motion.section
          className="space-y-2"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{greeting}, Artist</h2>
          <p className="text-muted-foreground">Here's what's happening with your music today</p>
        </motion.section>

        {/* Quick Stats */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            <Card className="card-hover border-border/40 bg-card/60 backdrop-blur-sm">
              <CardHeader className="pb-2 px-4 pt-4">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                  <CircleDollarSign className="mr-2 h-4 w-4 text-brand-primary" />
                  Earnings
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="flex items-baseline justify-between">
                  <div className="text-xl md:text-2xl font-bold">$1,284</div>
                  <div className="flex items-center text-xs md:text-sm font-medium text-success">
                    <TrendingUp className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                    12.5%
                  </div>
                </div>
                <Progress value={65} className="h-1 mt-3" />
              </CardContent>
            </Card>

            <Card className="card-hover border-border/40 bg-card/60 backdrop-blur-sm">
              <CardHeader className="pb-2 px-4 pt-4">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                  <Headphones className="mr-2 h-4 w-4 text-brand-primary" />
                  Streams
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="flex flex-col gap-2">
                  <div className="text-xl md:text-2xl font-bold">42.5K</div>
                  <div className="flex items-center text-xs md:text-sm font-medium text-success">
                    <TrendingUp className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                    8.3%
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-border/40 bg-card/60 backdrop-blur-sm">
              <CardHeader className="pb-2 px-4 pt-4">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                  <Users className="mr-2 h-4 w-4 text-brand-primary" />
                  Listeners
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="flex flex-col gap-2">
                  <div className="text-xl md:text-2xl font-bold">8.9K</div>
                  <div className="flex items-center text-xs md:text-sm font-medium text-success">
                    <TrendingUp className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                    15.2%
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-border/40 bg-card/60 backdrop-blur-sm">
              <CardHeader className="pb-2 px-4 pt-4">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                  <Boxes className="mr-2 h-4 w-4 text-brand-primary" />
                  NFT Sales
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="flex flex-col gap-2">
                  <div className="text-xl md:text-2xl font-bold">45.32</div>
                  <Badge className="w-fit bg-brand-primary/20 text-brand-primary border-brand-primary/30 text-xs">
                    ≈ $56.65
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Tabs Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="space-y-4"
        >
          <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
            <div className="overflow-x-auto pb-2 -mx-4 px-4">
              <TabsList className="bg-muted/50 p-1 w-full md:w-auto inline-flex">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-brand-primary data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="releases"
                  className="data-[state=active]:bg-brand-primary data-[state=active]:text-white"
                >
                  Releases
                </TabsTrigger>
                <TabsTrigger
                  value="opportunities"
                  className="data-[state=active]:bg-brand-primary data-[state=active]:text-white"
                >
                  Opportunities
                </TabsTrigger>
                <TabsTrigger
                  value="web3"
                  className="data-[state=active]:bg-brand-primary data-[state=active]:text-white"
                >
                  Web3
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-4 mt-0">
              <div className="grid gap-4 md:grid-cols-7">
                <Card className="md:col-span-4 card-hover border-border/40 bg-card/60 backdrop-blur-sm">
                  <CardHeader className="md:pb-2 pb-4">
                    <CardTitle className="flex items-center text-base md:text-lg">
                      <BarChart3 className="mr-2 h-5 w-5 text-brand-primary" />
                      Performance Overview
                    </CardTitle>
                    <CardDescription>Your music performance across all platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] md:h-[300px] w-full bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0">
                        <div
                          className="absolute bottom-0 left-0 right-0 h-[200px]"
                          style={{
                            background:
                              "linear-gradient(to top right, rgba(124, 58, 237, 0.2), rgba(139, 92, 246, 0.1))",
                            clipPath:
                              "polygon(0 60%, 5% 55%, 10% 60%, 15% 65%, 20% 60%, 25% 50%, 30% 55%, 35% 50%, 40% 45%, 45% 50%, 50% 40%, 55% 45%, 60% 35%, 65% 40%, 70% 30%, 75% 35%, 80% 25%, 85% 30%, 90% 20%, 95% 25%, 100% 15%, 100% 100%, 0 100%)",
                          }}
                        ></div>
                      </div>
                      <div
                        className="absolute bottom-0 left-0 right-0 h-[200px]"
                        style={{
                          background: "linear-gradient(to top right, rgba(124, 58, 237, 0.3), rgba(139, 92, 246, 0.2))",
                          clipPath:
                            "polygon(0 75%, 5% 70%, 10% 75%, 15% 80%, 20% 75%, 25% 65%, 30% 70%, 35% 65%, 40% 60%, 45% 65%, 50% 55%, 55% 60%, 60% 50%, 65% 55%, 70% 45%, 75% 50%, 80% 40%, 85% 45%, 90% 35%, 95% 40%, 100% 30%, 100% 100%, 0 100%)",
                        }}
                      ></div>

                      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-muted-foreground">
                        <span>Apr 1</span>
                        <span className="hidden sm:inline">Apr 15</span>
                        <span>May 1</span>
                        <span className="hidden sm:inline">May 15</span>
                        <span>Today</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-3 card-hover border-border/40 bg-card/60 backdrop-blur-sm">
                  <CardHeader className="md:pb-2 pb-4">
                    <CardTitle className="flex items-center text-base md:text-lg">
                      <Globe className="mr-2 h-5 w-5 text-brand-primary" />
                      Top Locations
                    </CardTitle>
                    <CardDescription>Where your listeners are located</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { country: "United States", percent: 35, streams: "15.2K" },
                        { country: "United Kingdom", percent: 22, streams: "9.5K" },
                        { country: "Germany", percent: 18, streams: "7.8K" },
                        { country: "Brazil", percent: 12, streams: "5.2K" },
                        { country: "Japan", percent: 8, streams: "3.5K" },
                      ].map((item, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{item.country}</span>
                            <span className="text-sm text-muted-foreground">{item.streams}</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
                              style={{ width: `${item.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="releases" className="space-y-4 mt-0">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {recentReleases.map((release) => (
                  <Card
                    key={release.id}
                    className="card-hover border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={release.coverArt || "/placeholder.svg"}
                        alt={release.title}
                        width={400}
                        height={400}
                        className="aspect-square object-cover w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-white drop-shadow-md">{release.title}</h3>
                          <Badge
                            className={`mt-1 ${
                              release.status === "Live In Stores"
                                ? "bg-success/20 text-success border-success/30"
                                : "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
                            }`}
                          >
                            {release.status}
                          </Badge>
                        </div>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      {release.status === "Live In Stores" ? (
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Headphones className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {release.streams.toLocaleString()} streams
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-brand-primary hover:text-brand-primary/80 hover:bg-brand-primary/10 -mr-2"
                          >
                            View Analytics
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">In review process</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-brand-primary hover:text-brand-primary/80 hover:bg-brand-primary/10 -mr-2"
                          >
                            Check Status
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline" className="group">
                  View All Releases
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="opportunities" className="space-y-4 mt-0">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="card-hover border-border/40 bg-card/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-base md:text-lg">
                      <Sparkles className="mr-2 h-5 w-5 text-brand-primary" />
                      Playlist Opportunities
                    </CardTitle>
                    <CardDescription>Playlists that match your music style</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Indie Discoveries", curator: "Spotify Editorial", match: 95, followers: "2.3M" },
                      { name: "Electronic Essentials", curator: "Apple Music", match: 87, followers: "1.8M" },
                      { name: "Fresh Finds", curator: "Independent Curator", match: 82, followers: "450K" },
                    ].map((playlist, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-brand-primary/20 flex items-center justify-center">
                            <Music className="h-5 w-5 text-brand-primary" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">{playlist.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {playlist.curator} • {playlist.followers} followers
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-brand-primary/20 text-brand-primary border-brand-primary/30">
                            {playlist.match}% match
                          </Badge>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Opportunities
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="card-hover border-border/40 bg-card/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-base md:text-lg">
                      <Boxes className="mr-2 h-5 w-5 text-brand-primary" />
                      Web3 Opportunities
                    </CardTitle>
                    <CardDescription>Monetize your music with Web3 technology</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/20">
                      <h3 className="text-sm font-medium mb-2 flex items-center">
                        <Sparkles className="mr-2 h-4 w-4 text-brand-primary" />
                        Mint Your First Music NFT
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Turn your music into digital collectibles on the SUI network and create new revenue streams.
                      </p>
                      <Button size="sm" className="bg-brand-primary hover:bg-brand-primary/90 text-white w-full">
                        Get Started
                      </Button>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/40">
                      <h3 className="text-sm font-medium mb-2 flex items-center">
                        <CircleDollarSign className="mr-2 h-4 w-4 text-brand-primary" />
                        Set Up On-Chain Royalties
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Create transparent royalty splits with your collaborators using smart contracts.
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/40">
                      <h3 className="text-sm font-medium mb-2 flex items-center">
                        <Users className="mr-2 h-4 w-4 text-brand-primary" />
                        Join Web3 Music Community
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Connect with other artists and fans in the Web3 music ecosystem.
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        Explore Community
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="web3" className="space-y-4 mt-0">
              <Card className="border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-base md:text-lg">
                    <Boxes className="mr-2 h-5 w-5 text-brand-primary" />
                    Web3 Hub
                  </CardTitle>
                  <CardDescription>Explore the new frontier of music distribution with Web3</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-3">
                      <div className="h-12 w-12 rounded-lg bg-brand-primary/20 flex items-center justify-center">
                        <Boxes className="h-6 w-6 text-brand-primary" />
                      </div>
                      <h3 className="text-lg font-medium">Music NFTs</h3>
                      <p className="text-sm text-muted-foreground">
                        Create unique digital collectibles from your music and build direct relationships with fans.
                      </p>
                      <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white">
                        Mint Your First NFT
                      </Button>
                    </div>

                    <div className="space-y-3 hidden md:block">
                      <div className="h-12 w-12 rounded-lg bg-brand-primary/20 flex items-center justify-center">
                        <CircleDollarSign className="h-6 w-6 text-brand-primary" />
                      </div>
                      <h3 className="text-lg font-medium">On-Chain Royalties</h3>
                      <p className="text-sm text-muted-foreground">
                        Set up transparent royalty splits with collaborators using smart contracts on SUI.
                      </p>
                      <Button variant="outline">Configure Royalties</Button>
                    </div>

                    <div className="space-y-3 hidden md:block">
                      <div className="h-12 w-12 rounded-lg bg-brand-primary/20 flex items-center justify-center">
                        <Wallet className="h-6 w-6 text-brand-primary" />
                      </div>
                      <h3 className="text-lg font-medium">Connect Wallet</h3>
                      <p className="text-sm text-muted-foreground">
                        Connect your SUI wallet to start minting NFTs and managing your on-chain assets.
                      </p>
                      <Button variant="outline">Connect SUI Wallet</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="card-hover border-border/40 bg-card/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-base md:text-lg">
                      <BarChart3 className="mr-2 h-5 w-5 text-brand-primary" />
                      NFT Performance
                    </CardTitle>
                    <CardDescription>Track your NFT sales and secondary market activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-[150px] md:h-[200px] text-muted-foreground text-sm">
                      Connect your wallet to view NFT performance
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover border-border/40 bg-card/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-base md:text-lg">
                      <TrendingUp className="mr-2 h-5 w-5 text-brand-primary" />
                      Web3 Market Trends
                    </CardTitle>
                    <CardDescription>Latest trends in the music NFT market</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: "Average Music NFT Price", value: "12.5 SUI", change: "+5.2%" },
                      { title: "Weekly Trading Volume", value: "1,250 SUI", change: "+12.3%" },
                      { title: "New Collectors This Week", value: "325", change: "+8.7%" },
                    ].map((stat, i) => (
                      <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-muted/40">
                        <span className="text-sm font-medium">{stat.title}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{stat.value}</span>
                          <Badge className="bg-success/20 text-success border-success/30">{stat.change}</Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* AI Tip Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <CardContent className="flex items-start gap-4 p-4 md:p-6 relative">
              <div className="rounded-full bg-brand-primary p-2 text-white hidden sm:flex">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-primary mb-1 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 sm:hidden" />
                  MUSIC BASE AI Tip
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your track "Midnight Dreams" is gaining traction on playlists in Brazil. Consider promoting it there
                  with targeted ads or social media posts to capitalize on this momentum.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-brand-primary border-brand-primary/20 hover:bg-brand-primary/10"
                  >
                    Create Campaign
                  </Button>
                  <Button size="sm" variant="ghost">
                    View Analytics
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
