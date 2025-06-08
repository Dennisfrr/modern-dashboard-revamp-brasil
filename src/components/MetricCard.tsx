
import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  subtitle?: string
  icon: LucideIcon
  trend?: string
  className?: string
  isPositiveTrend?: boolean
}

export function MetricCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  className = "",
  isPositiveTrend = true 
}: MetricCardProps) {
  return (
    <Card className={`gradient-card card-hover border-border/50 ${className}`}>
      <CardContent className="p-8">
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/15 rounded-xl">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="metric-label">{title}</p>
            </div>
            
            <div className="space-y-2">
              <p className="metric-value">{value}</p>
              {subtitle && (
                <p className="metric-subtitle">{subtitle}</p>
              )}
              {trend && (
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  isPositiveTrend 
                    ? 'bg-green-500/15 text-green-400' 
                    : 'bg-red-500/15 text-red-400'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    isPositiveTrend ? 'bg-green-400' : 'bg-red-400'
                  }`}></span>
                  {trend}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
