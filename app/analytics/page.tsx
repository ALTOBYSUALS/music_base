"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Download, BarChart3, Users, Globe, Music, ListMusic, TrendingUp, RadioTower } from "lucide-react"
import { format } from "date-fns"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts"

import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PageContainer, PageHeader, PageContent } from "@/components/page-container"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

// --- Glassmorphism Card Style ---
// You can adjust these values as needed
const glassCardStyle = "bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 shadow-xl text-slate-100"
const glassCardHeaderStyle = "pb-2 text-slate-200"
const glassCardTitleStyle = "text-sm font-medium text-slate-200"
const glassCardDescriptionStyle = "text-xs text-slate-400"
const glassCardContentStyle = "" // Add specific styles if needed
const glassTextColor = "text-slate-100"
const glassMutedColor = "text-slate-400"

const StreamsChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={[
          { date: "Jan 1", streams: 400 },
          { date: "Jan 2", streams: 300 },
          { date: "Jan 3", streams: 200 },
          { date: "Jan 4", streams: 278 },
          { date: "Jan 5", streams: 189 },
          { date: "Jan 6", streams: 239 },
          { date: "Jan 7", streams: 349 },
        ]}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" /> {/* Darker grid lines */}
        <XAxis dataKey="date" stroke="#A0AEC0" /> {/* Lighter text for axis */}
        <YAxis stroke="#A0AEC0" />
        <RechartsTooltip
          contentStyle={{
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            border: "1px solid #4A5568",
            borderRadius: "0.375rem",
            color: "#E2E8F0",
          }}
          itemStyle={{ color: "#E2E8F0" }}
        />
        <Area type="monotone" dataKey="streams" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

const CountriesChart = () => {
  const data = [
    { name: "USA", value: 400 },
    { name: "Canada", value: 300 },
    { name: "UK", value: 200 },
    { name: "Germany", value: 278 },
    { name: "Brazil", value: 189 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#800080"]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <RechartsTooltip
          contentStyle={{
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            border: "1px solid #4A5568",
            borderRadius: "0.375rem",
            color: "#E2E8F0",
          }}
          itemStyle={{ color: "#E2E8F0" }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

const PlatformChart = () => {
  const data = [
    { name: "Spotify", value: 400 },
    { name: "Apple Music", value: 300 },
    { name: "YouTube Music", value: 200 },
    { name: "Amazon Music", value: 278 },
    { name: "Deezer", value: 189 },
  ]

  const COLORS = ["#1DB954", "#FC3C44", "#FF0000", "#00A86B", "#EF5466"] // Updated some colors for better contrast/recognition

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <RechartsTooltip
          contentStyle={{
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            border: "1px solid #4A5568",
            borderRadius: "0.375rem",
            color: "#E2E8F0",
          }}
          itemStyle={{ color: "#E2E8F0" }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

// --- New Components for Content and Playlists Tabs ---

const TopContentTable = () => {
  const topTracks = [
    {
      id: 1,
      title: "Summer Nights",
      type: "Single",
      streams: 450000,
      revenue: 1800.5,
      releaseDate: "2023-06-15",
      cover: "/electronic-album-cover.png",
    },
    {
      id: 2,
      title: "Midnight Dreams",
      type: "EP",
      streams: 320000,
      revenue: 1280.0,
      releaseDate: "2023-03-01",
      cover: "/pop-album-cover.png",
    },
    {
      id: 3,
      title: "Ocean Drive",
      type: "Single",
      streams: 280000,
      revenue: 1120.75,
      releaseDate: "2022-11-10",
      cover: "/stylized-letters-OD.png",
    },
    {
      id: 4,
      title: "City Lights",
      type: "Album",
      streams: 210000,
      revenue: 840.2,
      releaseDate: "2023-09-01",
      cover: "/abstract-geometric-cl.png",
    },
    {
      id: 5,
      title: "Lost in Sound",
      type: "Single",
      streams: 150000,
      revenue: 600.0,
      releaseDate: "2024-01-05",
      cover: "/abstract-geometric-ls.png",
    },
  ]

  return (
    <Card className={`${glassCardStyle}`}>
      <CardHeader className={glassCardHeaderStyle}>
        <CardTitle className={glassCardTitleStyle}>Top Performing Content</CardTitle>
        <CardDescription className={glassCardDescriptionStyle}>
          Your most popular tracks and albums by streams.
        </CardDescription>
      </CardHeader>
      <CardContent className={glassCardContentStyle}>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700 hover:bg-slate-700/30">
              <TableHead className={`${glassTextColor} w-[80px]`}>Cover</TableHead>
              <TableHead className={glassTextColor}>Title</TableHead>
              <TableHead className={glassTextColor}>Type</TableHead>
              <TableHead className={`${glassTextColor} text-right`}>Streams</TableHead>
              <TableHead className={`${glassTextColor} text-right`}>Revenue (Est.)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topTracks.map((track) => (
              <TableRow key={track.id} className="border-slate-700 hover:bg-slate-700/30">
                <TableCell>
                  <Image
                    src={track.cover || "/placeholder.svg"}
                    width={40}
                    height={40}
                    alt={track.title}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium text-slate-100">{track.title}</TableCell>
                <TableCell className={glassMutedColor}>{track.type}</TableCell>
                <TableCell className={`${glassMutedColor} text-right`}>{track.streams.toLocaleString()}</TableCell>
                <TableCell className={`${glassMutedColor} text-right`}>${track.revenue.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

const PlaylistPerformanceCard = () => {
  const playlistData = [
    {
      id: 1,
      name: "Chill Vibes Radio",
      curator: "Spotify",
      streams: 120500,
      adds: 1200,
      cover: "/abstract-cvr.png",
    },
    {
      id: 2,
      name: "Indie Electronica Gems",
      curator: "Alice Wonderland",
      streams: 85200,
      adds: 750,
      cover: "/ieg-abstract.png",
    },
    {
      id: 3,
      name: "Focus Flow State",
      curator: "UserGeneratedWeekly",
      streams: 60300,
      adds: 500,
      cover: "/ffs-graffiti.png",
    },
    {
      id: 4,
      name: "Your Top Mix",
      curator: "Apple Music",
      streams: 45000,
      adds: 320,
      cover: "/abstract-ytm.png",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className={`${glassCardStyle}`}>
        <CardHeader className={glassCardHeaderStyle}>
          <CardTitle className={glassCardTitleStyle}>Top Playlists Featuring Your Music</CardTitle>
          <CardDescription className={glassCardDescriptionStyle}>Playlists driving the most streams.</CardDescription>
        </CardHeader>
        <CardContent className={`${glassCardContentStyle} space-y-4`}>
          {playlistData.slice(0, 3).map((playlist) => (
            <div
              key={playlist.id}
              className="flex items-center gap-4 p-2 rounded-md hover:bg-slate-700/40 transition-colors"
            >
              <Image
                src={playlist.cover || "/placeholder.svg"}
                width={40}
                height={40}
                alt={playlist.name}
                className="rounded-md object-cover"
              />
              <div className="flex-1 space-y-1">
                <p className={`text-sm font-medium leading-none ${glassTextColor}`}>{playlist.name}</p>
                <p className={`text-xs ${glassMutedColor}`}>Curated by: {playlist.curator}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${glassTextColor}`}>{playlist.streams.toLocaleString()} streams</p>
                <p className={`text-xs ${glassMutedColor}`}>{playlist.adds.toLocaleString()} adds</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className={`${glassCardStyle}`}>
        <CardHeader className={glassCardHeaderStyle}>
          <CardTitle className={glassCardTitleStyle}>Playlist Contribution</CardTitle>
          <CardDescription className={glassCardDescriptionStyle}>
            How playlists impact your overall streams.
          </CardDescription>
        </CardHeader>
        <CardContent className={`${glassCardContentStyle} space-y-4`}>
          <div className="space-y-1">
            <p className={`text-sm font-medium ${glassTextColor}`}>Streams from Playlists</p>
            <div className="flex items-center gap-2">
              <p className={`text-2xl font-bold ${glassTextColor}`}>311,000</p>
              <Badge className="bg-sky-500/20 text-sky-300 hover:bg-sky-500/30">+12%</Badge>
            </div>
            <Progress value={65} className="w-full [&>*]:bg-sky-400 bg-slate-700" />
            <p className={`text-xs ${glassMutedColor}`}>65% of total streams last period</p>
          </div>
          <div className="space-y-1">
            <p className={`text-sm font-medium ${glassTextColor}`}>Total Playlist Adds</p>
            <div className="flex items-center gap-2">
              <p className={`text-2xl font-bold ${glassTextColor}`}>2,770</p>
              <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">+8%</Badge>
            </div>
            <p className={`text-xs ${glassMutedColor}`}>Across all your tracks in selected period</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function AnalyticsPage() {
  const [date, setDate] = useState<{ from: Date; to: Date }>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    to: new Date(),
  })
  const [activeTab, setActiveTab] = useState("overview")

  return (
    // Added a gradient background for glassmorphism to be visible
    <PageContainer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <PageHeader
        title="Analytics"
        description="Track your music performance across all platforms"
        titleClassName="text-slate-100"
        descriptionClassName="text-slate-300"
      />

      <PageContent>
        <div className="flex flex-col">
          {/* Header Bar with Date Picker and Export */}
          <div
            className={`flex items-center justify-between border-b px-6 py-4 ${glassCardStyle} rounded-t-lg border-b-slate-700/80`}
          >
            <h1 className={`text-xl font-semibold ${glassTextColor}`}>Analytics Pro</h1>
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`h-9 ${glassTextColor} bg-slate-700/50 hover:bg-slate-600/70 border-slate-600`}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-700 text-slate-100" align="end">
                  <CalendarComponent
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={(range) => range && setDate(range as { from: Date; to: Date })}
                    numberOfMonths={2}
                    // You might need to style CalendarComponent for dark mode / glassmorphism if it doesn't inherit well
                  />
                </PopoverContent>
              </Popover>
              <Button
                variant="outline"
                size="sm"
                className={`h-9 ${glassTextColor} bg-slate-700/50 hover:bg-slate-600/70 border-slate-600`}
              >
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Tabs Section */}
          <div className={`flex-1 p-6 ${glassCardStyle} rounded-b-lg`}>
            <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
              <TabsList
                className={`grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto md:h-10 bg-slate-700/50 p-1 rounded-md`}
              >
                {[
                  { value: "overview", label: "Overview", icon: BarChart3 },
                  { value: "audience", label: "Audience", icon: Users },
                  { value: "content", label: "Content", icon: Music },
                  { value: "playlists", label: "Playlists", icon: ListMusic },
                  { value: "platforms", label: "Platforms", icon: Globe },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={`flex items-center justify-center gap-2 text-slate-300 data-[state=active]:bg-sky-500/30 data-[state=active]:text-sky-100 data-[state=active]:shadow-md hover:bg-slate-600/40 transition-all p-2`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card className={glassCardStyle}>
                    <CardHeader className={glassCardHeaderStyle}>
                      <CardTitle className={glassCardTitleStyle}>Total Streams</CardTitle>
                    </CardHeader>
                    <CardContent className={glassCardContentStyle}>
                      <div className={`text-2xl font-bold ${glassTextColor}`}>1.2M</div>
                      <div className="flex items-center">
                        <Badge className="bg-green-500/20 text-green-300 hover:bg-green-500/30">+15.3%</Badge>
                        <span className={`text-xs ${glassMutedColor} ml-2`}>vs. previous period</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className={glassCardStyle}>
                    <CardHeader className={glassCardHeaderStyle}>
                      <CardTitle className={glassCardTitleStyle}>Total Listeners</CardTitle>
                    </CardHeader>
                    <CardContent className={glassCardContentStyle}>
                      <div className={`text-2xl font-bold ${glassTextColor}`}>452K</div>
                      <div className="flex items-center">
                        <Badge className="bg-green-500/20 text-green-300 hover:bg-green-500/30">+8.7%</Badge>
                        <span className={`text-xs ${glassMutedColor} ml-2`}>vs. previous period</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className={glassCardStyle}>
                    <CardHeader className={glassCardHeaderStyle}>
                      <CardTitle className={glassCardTitleStyle}>Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent className={glassCardContentStyle}>
                      <div className={`text-2xl font-bold ${glassTextColor}`}>$4,231.89</div>
                      <div className="flex items-center">
                        <Badge className="bg-green-500/20 text-green-300 hover:bg-green-500/30">+20.1%</Badge>
                        <span className={`text-xs ${glassMutedColor} ml-2`}>vs. previous period</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className={glassCardStyle}>
                    <CardHeader className={glassCardHeaderStyle}>
                      <CardTitle className={glassCardTitleStyle}>NFT Sales (SUI)</CardTitle>
                    </CardHeader>
                    <CardContent className={glassCardContentStyle}>
                      <div className={`text-2xl font-bold ${glassTextColor}`}>45.5 SUI</div>
                      <div className="flex items-center">
                        <Badge className="bg-green-500/20 text-green-300 hover:bg-green-500/30">+35.2%</Badge>
                        <span className={`text-xs ${glassMutedColor} ml-2`}>vs. previous period</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className={`${glassCardStyle} col-span-1`}>
                    <CardHeader className={glassCardHeaderStyle}>
                      <CardTitle className={glassCardTitleStyle}>Streams Over Time</CardTitle>
                      <CardDescription className={glassCardDescriptionStyle}>
                        Daily streams for the selected period
                      </CardDescription>
                    </CardHeader>
                    <CardContent className={`${glassCardContentStyle} h-[300px]`}>
                      <StreamsChart />
                    </CardContent>
                  </Card>
                  <Card className={`${glassCardStyle} col-span-1`}>
                    <CardHeader className={glassCardHeaderStyle}>
                      <CardTitle className={glassCardTitleStyle}>Top 5 Tracks</CardTitle>
                      <CardDescription className={glassCardDescriptionStyle}>
                        By streams in the selected period
                      </CardDescription>
                    </CardHeader>
                    <CardContent className={glassCardContentStyle}>
                      <div className="space-y-4">
                        {[
                          {
                            rank: 1,
                            cover: "/electronic-album-cover.png",
                            title: "Summer Nights",
                            type: "Single",
                            streams: "450K",
                          },
                          {
                            rank: 2,
                            cover: "/pop-album-cover.png",
                            title: "Midnight Dreams",
                            type: "EP",
                            streams: "320K",
                          },
                          {
                            rank: 3,
                            cover: "/stylized-letters-OD.png",
                            title: "Ocean Drive",
                            type: "Single",
                            streams: "280K",
                          },
                          {
                            rank: 4,
                            cover: "/abstract-geometric-cl.png",
                            title: "City Lights",
                            type: "Album",
                            streams: "210K",
                          },
                          {
                            rank: 5,
                            cover: "/abstract-geometric-ls.png",
                            title: "Lost in Sound",
                            type: "Single",
                            streams: "150K",
                          },
                        ].map((track) => (
                          <div
                            key={track.rank}
                            className="flex items-center gap-4 p-2 rounded-md hover:bg-slate-700/40 transition-colors"
                          >
                            <div className={`w-8 text-center font-medium ${glassMutedColor}`}>{track.rank}</div>
                            <Image
                              src={track.cover || "/placeholder.svg"}
                              width={40}
                              height={40}
                              alt="Track cover"
                              className="rounded-md object-cover"
                            />
                            <div className="flex-1 space-y-1">
                              <p className={`text-sm font-medium leading-none ${glassTextColor}`}>{track.title}</p>
                              <p className={`text-xs ${glassMutedColor}`}>{track.type}</p>
                            </div>
                            <div className={`text-sm font-medium ${glassTextColor}`}>{track.streams}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="audience" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className={`${glassCardStyle} col-span-1`}>
                    <CardHeader className={glassCardHeaderStyle}>
                      <CardTitle className={glassCardTitleStyle}>Audience by Country</CardTitle>
                      <CardDescription className={glassCardDescriptionStyle}>
                        Based on streams in the selected period
                      </CardDescription>
                    </CardHeader>
                    <CardContent className={`${glassCardContentStyle} h-[350px]`}>
                      {" "}
                      {/* Increased height for Pie chart labels */}
                      <CountriesChart />
                    </CardContent>
                  </Card>
                  <Card className={`${glassCardStyle} col-span-1`}>
                    <CardHeader className={glassCardHeaderStyle}>
                      <CardTitle className={glassCardTitleStyle}>Listener Demographics</CardTitle>
                      <CardDescription className={glassCardDescriptionStyle}>
                        Age and gender breakdown (mock data)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className={`${glassCardContentStyle} space-y-4`}>
                      <div>
                        <p className={`text-sm font-medium mb-1 ${glassTextColor}`}>Gender</p>
                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <div className={`flex justify-between text-xs ${glassMutedColor}`}>
                              <span>Male</span>
                              <span>60%</span>
                            </div>
                            <Progress value={60} className="h-2 [&>*]:bg-blue-400 bg-slate-700" />
                          </div>
                          <div className="flex-1">
                            <div className={`flex justify-between text-xs ${glassMutedColor}`}>
                              <span>Female</span>
                              <span>35%</span>
                            </div>
                            <Progress value={35} className="h-2 [&>*]:bg-pink-400 bg-slate-700" />
                          </div>
                          <div className="flex-1">
                            <div className={`flex justify-between text-xs ${glassMutedColor}`}>
                              <span>Other</span>
                              <span>5%</span>
                            </div>
                            <Progress value={5} className="h-2 [&>*]:bg-gray-400 bg-slate-700" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className={`text-sm font-medium mb-1 ${glassTextColor}`}>Age Groups</p>
                        <div className="space-y-2">
                          <div className={`flex justify-between text-xs ${glassMutedColor}`}>
                            <span>18-24</span>
                            <span>30%</span>
                          </div>
                          <Progress value={30} className="h-2 [&>*]:bg-teal-400 bg-slate-700" />
                          <div className={`flex justify-between text-xs ${glassMutedColor}`}>
                            <span>25-34</span>
                            <span>45%</span>
                          </div>
                          <Progress value={45} className="h-2 [&>*]:bg-teal-500 bg-slate-700" />
                          <div className={`flex justify-between text-xs ${glassMutedColor}`}>
                            <span>35-44</span>
                            <span>15%</span>
                          </div>
                          <Progress value={15} className="h-2 [&>*]:bg-teal-600 bg-slate-700" />
                          <div className={`flex justify-between text-xs ${glassMutedColor}`}>
                            <span>45+</span>
                            <span>10%</span>
                          </div>
                          <Progress value={10} className="h-2 [&>*]:bg-teal-700 bg-slate-700" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="content" className="space-y-6">
                <TopContentTable />
              </TabsContent>

              <TabsContent value="playlists" className="space-y-6">
                <PlaylistPerformanceCard />
              </TabsContent>

              <TabsContent value="platforms" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className={`${glassCardStyle} col-span-1`}>
                    <CardHeader className={glassCardHeaderStyle}>
                      <CardTitle className={glassCardTitleStyle}>Streams by Platform</CardTitle>
                      <CardDescription className={glassCardDescriptionStyle}>
                        Based on streams in the selected period
                      </CardDescription>
                    </CardHeader>
                    <CardContent className={`${glassCardContentStyle} h-[350px]`}>
                      {" "}
                      {/* Increased height for Pie chart labels */}
                      <PlatformChart />
                    </CardContent>
                  </Card>
                  <Card className={`${glassCardStyle} col-span-1`}>
                    <CardHeader className={glassCardHeaderStyle}>
                      <CardTitle className={glassCardTitleStyle}>Platform Growth</CardTitle>
                      <CardDescription className={glassCardDescriptionStyle}>
                        Growth trends per platform (mock data)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className={`${glassCardContentStyle} space-y-4`}>
                      {[
                        { name: "Spotify", growth: 15, streams: "400K", icon: RadioTower, color: "text-green-400" },
                        { name: "Apple Music", growth: 8, streams: "300K", icon: RadioTower, color: "text-red-400" },
                        { name: "YouTube Music", growth: 12, streams: "200K", icon: RadioTower, color: "text-red-400" },
                        { name: "Amazon Music", growth: 5, streams: "278K", icon: RadioTower, color: "text-teal-400" },
                      ].map((platform) => (
                        <div key={platform.name} className="flex items-center">
                          <platform.icon className={`h-5 w-5 mr-3 ${platform.color}`} />
                          <div className="flex-1">
                            <p className={`text-sm font-medium ${glassTextColor}`}>{platform.name}</p>
                            <p className={`text-xs ${glassMutedColor}`}>{platform.streams} streams</p>
                          </div>
                          <div
                            className={`flex items-center text-sm ${platform.growth > 0 ? "text-green-400" : "text-red-400"}`}
                          >
                            <TrendingUp className="h-4 w-4 mr-1" />
                            {platform.growth > 0 ? "+" : ""}
                            {platform.growth}%
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </PageContent>
    </PageContainer>
  )
}
