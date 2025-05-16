import type React from "react"
import {
  AreaChart as RechartsAreaChart,
  Area as RechartsArea,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  CartesianGrid as RechartsCartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer as RechartsResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar as RechartsBar,
  Cell as RechartsCell,
  PieChart as RechartsPieChart,
  Pie as RechartsPie,
  type TooltipProps as RechartsTooltipProps,
} from "recharts"

export const AreaChart = RechartsAreaChart
export const Area = RechartsArea
export const XAxis = RechartsXAxis
export const YAxis = RechartsYAxis
export const CartesianGrid = RechartsCartesianGrid
export const Tooltip = RechartsTooltip
export const ResponsiveContainer = RechartsResponsiveContainer
export type TooltipProps<T, U extends string> = RechartsTooltipProps<T, U>
export const BarChart = RechartsBarChart
export const Bar = RechartsBar
export const Cell = RechartsCell
export const PieChart = RechartsPieChart
export const Pie = RechartsPie

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`rounded-lg border bg-card p-4 text-card-foreground shadow-sm ${className}`}>{children}</div>
}

export const LineChart = () => {
  return null
}
