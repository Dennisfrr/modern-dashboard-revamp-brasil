
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const funnelData = [
  { label: '50.676', value: 50676, percentage: 100 },
  { label: '250', value: 250, percentage: 80 },
  { label: '173', value: 173, percentage: 60 },
  { label: '0', value: 0, percentage: 40 },
  { label: '0', value: 0, percentage: 20 },
  { label: '0', value: 0, percentage: 10 },
  { label: '0', value: 0, percentage: 5 },
]

export function FunnelChart() {
  return (
    <Card className="gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="text-primary text-lg flex items-center gap-2">
          <span className="text-red-500">▼</span>
          Funil Geral
        </CardTitle>
        <p className="text-sm text-muted-foreground">Tipo Mensagens</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          {funnelData.map((item, index) => (
            <div key={index} className="grid grid-cols-3 items-center gap-4">
              <div 
                className="gradient-primary text-center py-3 px-4 rounded text-white font-medium text-sm flex items-center justify-center"
                style={{ 
                  width: `${Math.max(item.percentage, 20)}%`,
                  minWidth: '80px',
                  marginLeft: `${(100 - Math.max(item.percentage, 20)) / 2}%`
                }}
              >
                {item.label}
              </div>
              <div className="text-sm text-muted-foreground text-center">
                {index === 0 ? 'R$ 9,53' : index === 1 ? '65,20%' : '0,00%'}
              </div>
              <div className="text-sm text-foreground text-center">
                {index === 0 ? 'R$ 1,30' : index === 1 ? 'R$ 2,74' : 'R$ 0,00'}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
