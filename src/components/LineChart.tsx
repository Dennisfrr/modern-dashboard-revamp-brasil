
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { name: '31 de', leads: 118, custo: 65, conversao: 85 },
  { name: '1 de abr', leads: 95, custo: 68, conversao: 78 },
  { name: '2 de abr', leads: 75, custo: 54, conversao: 65 },
  { name: '3 de abr', leads: 45, custo: 42, conversao: 55 },
  { name: '4 de abr', leads: 25, custo: 38, conversao: 45 },
  { name: '5 de abr', leads: 15, custo: 25, conversao: 35 },
]

export function DashboardLineChart() {
  return (
    <Card className="gradient-card border-border/50 col-span-2">
      <CardHeader>
        <CardTitle className="text-primary text-lg">Linha do Tempo</CardTitle>
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">Leads (TOTAL)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <span className="text-muted-foreground">Custo por Lead</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span className="text-muted-foreground">Leads (TOTAL) (semana ant...)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="leads" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="custo" 
              stroke="#ec4899" 
              strokeWidth={2}
              dot={{ fill: '#ec4899', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="conversao" 
              stroke="#fb923c" 
              strokeWidth={2}
              dot={{ fill: '#fb923c', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
