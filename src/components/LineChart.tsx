
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
      <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
        <p className="text-sm font-medium text-foreground mb-2">{data.date}</p>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <span className="text-sm text-muted-foreground">Leads (Total):</span>
            <span className="text-sm font-bold text-white">{data.leads}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Custo por Lead:</span>
            <span className="text-sm font-bold text-pink-400">R$ {data.custo.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function DashboardLineChart() {
  return (
    <Card className="gradient-card border-border/50 col-span-2">
      <CardHeader className="pb-4">
        <CardTitle className="text-primary text-xl flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          Linha do Tempo
        </CardTitle>
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <span className="text-muted-foreground">Leads (Total)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <span className="text-muted-foreground">Custo por Lead (R$)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="leadGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              yAxisId="left"
              orientation="left"
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              label={{ value: 'Leads', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' } }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              label={{ value: 'Custo (R$)', angle: 90, position: 'insideRight', style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' } }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="leads"
              stroke="white"
              fill="url(#leadGradient)"
              strokeWidth={3}
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="leads" 
              stroke="white" 
              strokeWidth={3}
              dot={{ fill: 'white', strokeWidth: 2, r: 5 }}
              activeDot={{ r: 7, fill: 'white', strokeWidth: 3, stroke: 'hsl(var(--primary))' }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="custo" 
              stroke="#ec4899" 
              strokeWidth={3}
              dot={{ fill: '#ec4899', strokeWidth: 2, r: 5 }}
              activeDot={{ r: 7, fill: '#ec4899', strokeWidth: 3, stroke: '#f472b6' }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
