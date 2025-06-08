
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { useState } from 'react'

const data = [
  { name: '18-24 anos', value: 35, color: '#ff6b35', count: 1750 },
  { name: '25-34 anos', value: 25, color: '#f7931e', count: 1250 },
  { name: '35-44 anos', value: 20, color: '#22d3ee', count: 1000 },
  { name: '45-54 anos', value: 15, color: '#06b6d4', count: 750 },
  { name: '55+ anos', value: 5, color: '#0891b2', count: 250 },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-5 shadow-2xl">
        <div className="space-y-3">
          <p className="font-semibold text-hierarchy-primary text-lg">{data.name}</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between gap-6">
              <span className="text-hierarchy-secondary">Percentual:</span>
              <span className="font-semibold text-primary">{data.value}%</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-hierarchy-secondary">Número de Pessoas:</span>
              <span className="font-semibold text-foreground">{data.count.toLocaleString()}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-hierarchy-secondary">Custo por Resultado:</span>
              <span className="font-semibold text-primary">R$ {(2.74 * (data.value / 100)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent < 0.05) return null;

  return (
    <text
      x={x}
      y={y}
      fill="hsl(var(--foreground))"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${name.split(' ')[0]} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

export function DonutChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const mainAudience = data.reduce((prev, current) => (prev.value > current.value) ? prev : current);

  return (
    <Card className="gradient-card card-hover border-border/50">
      <CardHeader className="pb-6 px-8 pt-8">
        <CardTitle className="text-hierarchy-primary text-xl flex items-center gap-3">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          Demográficos
        </CardTitle>
        <p className="text-sm text-hierarchy-secondary font-medium mt-2">Distribuição por Faixa Etária</p>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <div className="relative">
          <ResponsiveContainer width="100%" height={340}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={CustomLabel}
                outerRadius={120}
                innerRadius={60}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    stroke={activeIndex === index ? "hsl(var(--primary))" : "transparent"}
                    strokeWidth={activeIndex === index ? 3 : 0}
                    style={{
                      filter: activeIndex === index ? 'brightness(1.1)' : 'brightness(1)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Centro do gráfico - informação principal */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="text-xs text-hierarchy-secondary font-medium">Público Principal</div>
              <div className="text-sm font-bold text-primary mt-1">{mainAudience.name}</div>
              <div className="text-xs text-hierarchy-tertiary mt-1">{mainAudience.value}%</div>
            </div>
          </div>
        </div>

        {/* Legenda customizada */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-3 text-sm p-2 rounded-lg hover:bg-muted/10 transition-colors">
              <div 
                className="w-4 h-4 rounded-full shadow-sm" 
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-hierarchy-secondary font-medium truncate">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
