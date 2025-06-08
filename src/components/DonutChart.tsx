
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { useState } from 'react'

const data = [
  { name: '18-24 anos', value: 35, color: '#ff4444', count: 1750 },
  { name: '25-34 anos', value: 25, color: '#ff6666', count: 1250 },
  { name: '35-44 anos', value: 20, color: '#ff8888', count: 1000 },
  { name: '45-54 anos', value: 15, color: '#ffaaaa', count: 750 },
  { name: '55+ anos', value: 5, color: '#ffcccc', count: 250 },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
        <div className="space-y-2">
          <p className="font-semibold text-foreground">{data.name}</p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Percentual:</span>
              <span className="font-medium text-primary">{data.value}%</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Número de Pessoas:</span>
              <span className="font-medium">{data.count.toLocaleString()}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Custo por Resultado:</span>
              <span className="font-medium text-primary">R$ {(2.74 * (data.value / 100)).toFixed(2)}</span>
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
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent < 0.05) return null; // Não mostrar labels para segmentos muito pequenos

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
    <Card className="gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="text-primary text-xl flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          Demográficos
        </CardTitle>
        <p className="text-sm text-muted-foreground/80">Distribuição por Faixa Etária</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={CustomLabel}
              outerRadius={100}
              innerRadius={50}
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
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Centro do gráfico - informação principal */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-xs text-muted-foreground">Público Principal</div>
            <div className="text-sm font-bold text-primary">{mainAudience.name}</div>
            <div className="text-xs text-muted-foreground">{mainAudience.value}%</div>
          </div>
        </div>

        {/* Legenda customizada */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 text-xs">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-muted-foreground truncate">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
