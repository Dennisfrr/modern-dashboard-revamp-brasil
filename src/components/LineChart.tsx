
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Area, ComposedChart } from 'recharts'

const data = [
  { name: '31/mar', date: '31 de mar. de 2025', leads: 118, custo: 2.65, conversao: 85 },
  { name: '01/abr', date: '01 de abr. de 2025', leads: 95, custo: 2.68, conversao: 78 },
  { name: '02/abr', date: '02 de abr. de 2025', leads: 75, custo: 2.54, conversao: 65 },
  { name: '03/abr', date: '03 de abr. de 2025', leads: 45, custo: 2.42, conversao: 55 },
  { name: '04/abr', date: '04 de abr. de 2025', leads: 25, custo: 2.38, conversao: 45 },
  { name: '05/abr', date: '05 de abr. de 2025', leads: 15, custo: 2.25, conversao: 35 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-5 shadow-2xl">
        <p className="text-sm font-semibold text-foreground mb-3">{data.date}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-sm text-hierarchy-secondary">Leads (Total):</span>
            <span className="text-sm font-bold text-primary">{data.leads}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <span className="text-sm text-hierarchy-secondary">Custo por Lead:</span>
            <span className="text-sm font-bold text-cyan-400">R$ {data.custo.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function DashboardLineChart() {
  return (
    <Card className="gradient-card card-hover border-border/50 col-span-2">
      <CardHeader className="pb-6 px-8 pt-8">
        <CardTitle className="text-hierarchy-primary text-xl flex items-center gap-3">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          Linha do Tempo
        </CardTitle>
        <div className="flex gap-8 text-sm mt-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-hierarchy-secondary">Leads (Total)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <span className="text-hierarchy-secondary">Custo por Lead (R$)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart data={data} margin={{ top: 20, right: 40, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="leadGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              tickMargin={12}
            />
            <YAxis 
              yAxisId="left"
              orientation="left"
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              tickMargin={8}
              label={{ 
                value: 'Leads', 
                angle: -90, 
                position: 'insideLeft', 
                style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))', fontWeight: 500 } 
              }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              tickMargin={8}
              label={{ 
                value: 'Custo (R$)', 
                angle: 90, 
                position: 'insideRight', 
                style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))', fontWeight: 500 } 
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="leads"
              stroke="hsl(var(--primary))"
              fill="url(#leadGradient)"
              strokeWidth={3}
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="leads" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: 'hsl(var(--primary))', strokeWidth: 3, stroke: 'hsl(var(--background))' }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="custo" 
              stroke="#22d3ee" 
              strokeWidth={3}
              dot={{ fill: '#22d3ee', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: '#22d3ee', strokeWidth: 3, stroke: 'hsl(var(--background))' }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
