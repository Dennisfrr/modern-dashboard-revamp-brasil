
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: '18-24', value: 35, color: '#ff4444' },
  { name: '25-34', value: 25, color: '#ff6666' },
  { name: '35-44', value: 20, color: '#ff8888' },
  { name: '45-54', value: 15, color: '#ffaaaa' },
  { name: '55+', value: 5, color: '#ffcccc' },
]

export function DonutChart() {
  return (
    <Card className="gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="text-lg">Demográficos</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: entry.color }} className="text-sm">
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
