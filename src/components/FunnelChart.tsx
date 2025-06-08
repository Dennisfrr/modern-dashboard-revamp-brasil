
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const funnelData = [
  { label: '50.676', value: 50676, percentage: 100, metric1: 'R$ 9,53', metric2: 'R$ 1,30' },
  { label: '250', value: 250, percentage: 80, metric1: '65,20%', metric2: 'R$ 2,74' },
  { label: '173', value: 173, percentage: 60, metric1: '0,00%', metric2: 'R$ 0,00' },
  { label: '0', value: 0, percentage: 40, metric1: '0,00%', metric2: 'R$ 0,00' },
  { label: '0', value: 0, percentage: 20, metric1: '0,00%', metric2: 'R$ 0,00' },
  { label: '0', value: 0, percentage: 10, metric1: '0,00%', metric2: 'R$ 0,00' },
  { label: '0', value: 0, percentage: 5, metric1: '0,00%', metric2: 'R$ 0,00' },
]

export function FunnelChart() {
  return (
    <Card className="gradient-card border-border/50 overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-primary text-xl flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          Funil Geral
        </CardTitle>
        <p className="text-sm text-muted-foreground/80 font-medium">Tipo Mensagens</p>
      </CardHeader>
      <CardContent className="space-y-3 px-6 pb-6">
        <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider mb-4">
          <div className="col-span-6">Volume</div>
          <div className="col-span-3 text-center">Taxa</div>
          <div className="col-span-3 text-center">Custo</div>
        </div>
        
        <div className="space-y-3">
          {funnelData.map((item, index) => (
            <div key={index} className="grid grid-cols-12 items-center gap-4 group hover:bg-border/10 rounded-lg p-2 transition-all duration-200">
              <div className="col-span-6 relative">
                <div 
                  className="gradient-primary text-center py-4 px-4 rounded-lg text-white font-bold text-base shadow-lg transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl relative overflow-hidden"
                  style={{ 
                    width: `${Math.max(item.percentage, 25)}%`,
                    minWidth: '120px',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{item.label}</span>
                </div>
              </div>
              
              <div className="col-span-3 text-center">
                <div className="text-sm font-bold text-foreground">
                  {item.metric1}
                </div>
              </div>
              
              <div className="col-span-3 text-center">
                <div className="text-sm font-bold text-primary">
                  {item.metric2}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground/60">
            <span>Total Conversões</span>
            <span className="font-semibold">173 leads</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
